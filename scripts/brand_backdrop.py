#!/usr/bin/env python3
"""Remove background from pre-owned product photos and composite them onto a
branded GM Therapy Solutions backdrop. Product pixels are never altered."""
from __future__ import annotations
import sys, io
from pathlib import Path
from PIL import Image, ImageFilter, ImageDraw
from rembg import remove, new_session

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public/assets/products/used"
LOGO = ROOT / "src/assets/gm-therapy-logo-new.png"

W, H = 1400, 1050
ORANGE = (232, 93, 26)

_session = new_session("isnet-general-use")


def logo_rgba(height: int) -> Image.Image:
    im = Image.open(LOGO).convert("RGBA")
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if r > 235 and g > 235 and b > 235:
                px[x, y] = (r, g, b, 0)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    w = int(im.width * height / im.height)
    return im.resize((w, height), Image.LANCZOS)


LOGO_IMG = logo_rgba(120)


def backdrop() -> Image.Image:
    bg = Image.new("RGB", (W, H), (255, 255, 255))
    d = ImageDraw.Draw(bg)
    # soft vertical tone: light grey top fading to white bottom
    for y in range(H):
        t = y / H
        v = int(238 + 14 * t)
        d.line([(0, y), (W, y)], fill=(v, v, v + 1 if v < 255 else 255))

    # subtle chevron / wing line pattern (very light)
    patt = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    pd = ImageDraw.Draw(patt)
    for i in range(-6, 14):
        x0 = i * 130
        for k in range(3):
            off = k * 26
            pd.line([(x0 + off, H * 0.05), (x0 + off + 300, H * 0.05),
                     (x0 + off + 480, H * 0.62)], fill=(210, 212, 216, 90), width=7)
    patt = patt.filter(ImageFilter.GaussianBlur(0.6))
    bg = Image.alpha_composite(bg.convert("RGBA"), patt)

    # orange corner triangle, top-right
    d2 = ImageDraw.Draw(bg)
    s = 150
    d2.polygon([(W - s, 0), (W, 0), (W, s)], fill=ORANGE + (255,))

    # logo top-right, left of the triangle
    lx = W - s - 40 - LOGO_IMG.width
    bg.alpha_composite(LOGO_IMG, (lx, 42))

    # floor shadow gradient band
    return bg


BASE = backdrop()


def process(path: Path):
    raw = Image.open(path).convert("RGBA")
    cut = remove(raw, session=_session, post_process_mask=True)
    bbox = cut.getbbox()
    if not bbox:
        print(f"  ! no subject found: {path.name}")
        return False
    cut = cut.crop(bbox)

    # fit inside safe area
    top_safe = 200
    max_w, max_h = int(W * 0.82), int(H - top_safe - 130)
    ratio = min(max_w / cut.width, max_h / cut.height)
    new = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))), Image.LANCZOS)

    canvas = BASE.copy()
    x = (W - new.width) // 2
    y = top_safe + (max_h - new.height) // 2

    # contact shadow
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sh)
    ew = int(new.width * 0.9)
    eh = max(18, int(new.height * 0.07))
    cy = y + new.height - eh // 3
    sd.ellipse([(W - ew) // 2, cy - eh // 2, (W + ew) // 2, cy + eh // 2], fill=(120, 125, 132, 90))
    sh = sh.filter(ImageFilter.GaussianBlur(22))
    canvas = Image.alpha_composite(canvas, sh)

    canvas.alpha_composite(new, (x, y))

    out = path.with_suffix(".png") if path.suffix.lower() != ".png" else path
    canvas.convert("RGB").save(out.with_suffix(".jpg"), "JPEG", quality=90, optimize=True)
    if out.with_suffix(".jpg") != path:
        pass
    return True


def main():
    args = sys.argv[1:]
    files = [Path(a) for a in args] if args else sorted(
        p for p in SRC.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png"})
    for f in files:
        print(f"• {f.name}")
        process(f)


if __name__ == "__main__":
    main()
