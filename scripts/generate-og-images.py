#!/usr/bin/env python3
"""
Generate per-product Open Graph (1200x630) images by compositing the
existing product photo onto a branded canvas with logo + product name.

Usage:
  python scripts/generate-og-images.py            # all products
  python scripts/generate-og-images.py 1 32 43    # only specific product IDs
"""
from __future__ import annotations
import json, re, sys, os, urllib.request
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PRODUCTS_TS = ROOT / "src/data/products.ts"
IMAGES_TS = ROOT / "src/data/productImages.ts"
LOGO = ROOT / "src/assets/gm-therapy-logo.png"
PUBLIC = ROOT / "public"
OUT_DIR = PUBLIC / "og" / "products"
OUT_DIR.mkdir(parents=True, exist_ok=True)

W, H = 1200, 630
BG = (255, 255, 255)
PANEL = (247, 248, 250)
ORANGE = (255, 106, 0)        # hsl(27 100% 50%)
INK = (24, 28, 36)
MUTED = (100, 110, 122)

# --- font loading ---
FONT_DIR = Path("/tmp/og-fonts")
FONT_DIR.mkdir(exist_ok=True)
def fetch_font(url: str, name: str) -> Path:
    p = FONT_DIR / name
    if not p.exists():
        urllib.request.urlretrieve(url, p)
    return p

CABIN_BOLD = fetch_font("https://github.com/google/fonts/raw/main/ofl/cabin/Cabin%5Bwdth%2Cwght%5D.ttf", "Cabin.ttf")
OPENSANS = fetch_font("https://github.com/google/fonts/raw/main/ofl/opensans/OpenSans%5Bwdth%2Cwght%5D.ttf", "OpenSans.ttf")

def font(path: Path, size: int, weight: int | None = None):
    f = ImageFont.truetype(str(path), size)
    if weight is not None:
        try: f.set_variation_by_axes([100, weight])  # wdth=100, wght
        except Exception: pass
    return f

# --- parse products.ts ---
def parse_products() -> list[dict]:
    text = PRODUCTS_TS.read_text()
    out = []
    # match {  id: "X", name: "...", category: "...", subcategory: "..."
    pat = re.compile(
        r'\{\s*id:\s*"(?P<id>[^"]+)",\s*name:\s*"(?P<name>(?:[^"\\]|\\.)*)",\s*category:\s*"(?P<cat>[^"]+)",\s*subcategory:\s*"(?P<sub>[^"]+)"',
    )
    for m in pat.finditer(text):
        d = m.groupdict()
        d["name"] = d["name"].replace('\\"', '"').replace("\\'", "'")
        out.append(d)
    return out

def parse_images() -> dict[str, str]:
    text = IMAGES_TS.read_text()
    pat = re.compile(r'"(?P<id>\d+)":\s*productAsset\(\s*"(?P<path>[^"]+)"\s*\)')
    return {m["id"]: m["path"] for m in pat.finditer(text)}

# --- text helpers ---
def wrap(draw, text, fnt, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def fit_lines(draw, text, font_path, max_w, max_lines, start=64, min_=40):
    size = start
    while size >= min_:
        f = font(font_path, size, weight=700)
        lines = wrap(draw, text, f, max_w)
        if len(lines) <= max_lines:
            return f, lines, size
        size -= 2
    f = font(font_path, min_, weight=700)
    return f, wrap(draw, text, f, max_w)[:max_lines], min_

# --- compose ---
def compose(prod: dict, img_rel_path: str) -> Image.Image:
    canvas = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(canvas)

    # Left product panel (square-ish)
    panel_w = 560
    d.rectangle([0, 0, panel_w, H], fill=PANEL)

    # Product image, contain inside panel with padding
    img_path = PUBLIC / img_rel_path.lstrip("/")
    if not img_path.exists():
        # try without leading "assets/"
        alt = PUBLIC / img_rel_path.split("?")[0].lstrip("/")
        img_path = alt if alt.exists() else None
    if img_path:
        try:
            pim = Image.open(img_path).convert("RGBA")
            pad = 50
            target_w = panel_w - 2*pad
            target_h = H - 2*pad
            ratio = min(target_w / pim.width, target_h / pim.height)
            new = pim.resize((max(1,int(pim.width*ratio)), max(1,int(pim.height*ratio))), Image.LANCZOS)
            x = (panel_w - new.width)//2
            y = (H - new.height)//2
            canvas.paste(new, (x, y), new)
        except Exception as e:
            print(f"  ! image fail: {e}")

    # Right side content
    rx = panel_w + 50
    rw = W - rx - 50

    # Logo top
    try:
        logo = Image.open(LOGO).convert("RGBA")
        lh = 110
        lw = int(logo.width * (lh / logo.height))
        logo_r = logo.resize((lw, lh), Image.LANCZOS)
        canvas.paste(logo_r, (rx, 40), logo_r)
    except Exception:
        pass

    # Category eyebrow
    eyebrow = f"{prod['cat']}  ·  {prod['sub']}".upper()
    ef = font(OPENSANS, 20, weight=700)
    d.text((rx, 140), eyebrow, font=ef, fill=ORANGE)

    # Product name
    title_font, lines, size = fit_lines(d, prod["name"], CABIN_BOLD, rw, max_lines=4, start=58, min_=36)
    y = 180
    line_h = int(size * 1.15)
    for ln in lines:
        d.text((rx, y), ln, font=title_font, fill=INK)
        y += line_h

    # Bottom band
    band_h = 70
    d.rectangle([0, H - band_h, W, H], fill=ORANGE)
    bf = font(OPENSANS, 22, weight=700)
    d.text((50, H - band_h + (band_h - 28)//2), "products.gmtherapytx.com", font=bf, fill=(255,255,255))
    rf = font(OPENSANS, 20, weight=600)
    right = "Request a Quote  →"
    rw_text = d.textlength(right, font=rf)
    d.text((W - 50 - rw_text, H - band_h + (band_h - 26)//2), right, font=rf, fill=(255,255,255))

    return canvas

def main():
    ids_filter = set(sys.argv[1:])
    products = parse_products()
    images = parse_images()
    count = 0
    for p in products:
        if ids_filter and p["id"] not in ids_filter:
            continue
        img = images.get(p["id"])
        if not img:
            print(f"- skip {p['id']} ({p['name']}): no image")
            continue
        img = img.split("?")[0]  # strip cache busters
        full = "assets/products/" + img if not img.startswith("assets/") else img
        print(f"• {p['id']} {p['name']}")
        canvas = compose(p, full)
        out = OUT_DIR / f"{p['id']}.jpg"
        canvas.convert("RGB").save(out, "JPEG", quality=88, optimize=True)
        count += 1
    print(f"\nGenerated {count} OG images → {OUT_DIR}")

if __name__ == "__main__":
    main()
