#!/usr/bin/env python3
"""Re-cut pre-owned product photos onto the GM Therapy Solutions studio backdrop.

The backdrop is reconstructed from the approved reference render (hex pattern,
chevrons, orange corner arc, seamless studio floor). Products are masked out of
their current photo and placed so they sit ON the studio floor line with a
contact shadow — never floating.
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from rembg import remove, new_session

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public/assets/products/used"
REF = Path("/mnt/user-uploads/Screenshot_2026-08-18_at_12.43.04_PM.png")
REF_FALLBACK = ROOT / "scripts/assets/studio-backdrop-ref.png"
LOGO = ROOT / "src/assets/gm-therapy-logo-new.png"

# Output canvas (matches the reference aspect ratio 1.25)
W, H = 1400, 1120
FLOOR_Y = int(H * 0.885)   # where product feet land
TOP_SAFE = int(H * 0.20)   # keep clear of logo / orange arc

_session = new_session("birefnet-general")


# ---------------------------------------------------------------- backdrop ---
def build_backdrop() -> Image.Image:
    ref_path = REF if REF.exists() else REF_FALLBACK
    ref = Image.open(ref_path).convert("RGB")
    a = np.array(ref).astype(np.float32)
    h, w, _ = a.shape

    # Per-row colour sampled from clean (product-free) regions of the reference.
    top_rows = np.median(a[:, int(w * 0.42):int(w * 0.78)], axis=1)
    side_rows = np.median(a[:, int(w * 0.84):int(w * 0.99)], axis=1)
    t = np.clip((np.arange(h) - h * 0.16) / (h * 0.12), 0, 1)[:, None]
    rows = top_rows * (1 - t) + side_rows * t
    base_arr = np.repeat(rows[:, None, :], w, axis=1)
    base_img = Image.fromarray(base_arr.astype(np.uint8))

    canvas = base_img.copy()

    # Re-apply the graphic furniture from the reference: top band (hex pattern +
    # orange arc) and the left chevron column, blended with long linear ramps so
    # no seam is visible.
    top_h = int(h * 0.215)
    fade = int(h * 0.09)
    ramp = np.ones((top_h, w), np.float32)
    ramp[top_h - fade:] = np.linspace(1, 0, fade)[:, None]
    canvas.paste(ref.crop((0, 0, w, top_h)), (0, 0),
                 Image.fromarray((ramp * 255).astype(np.uint8)))

    left_w = int(w * 0.20)
    lfade = int(w * 0.09)
    lramp = np.ones((h, left_w), np.float32)
    lramp[:, left_w - lfade:] = np.linspace(1, 0, lfade)[None, :]
    # Level-match the chevron column to the reconstructed rows so the vertical
    # seam disappears.
    la = np.array(ref.crop((0, 0, left_w, h))).astype(np.float32)
    gain = (rows[:, None, :] + 1e-3) / (np.median(la, axis=1)[:, None, :] + 1e-3)
    la = np.clip(la * np.clip(gain, 0.85, 1.15), 0, 255)
    canvas.paste(Image.fromarray(la.astype(np.uint8)), (0, 0),
                 Image.fromarray((lramp * 255).astype(np.uint8)))

    # Erase the empty placeholder circle — the real logo goes there. Patch with a
    # clean slice of the same top band so brightness matches exactly.
    cx0, cy0, cx1, cy1 = int(w * 0.18), 0, int(w * 0.37), int(h * 0.19)
    off = int(w * 0.32)
    patch = canvas.crop((cx0 + off, cy0, cx1 + off, cy1))
    pmd = Image.new("L", patch.size, 0)
    ImageDraw.Draw(pmd).ellipse([0, 0, patch.width, patch.height], fill=255)
    canvas.paste(patch, (cx0, cy0), pmd.filter(ImageFilter.GaussianBlur(12)))



    canvas = canvas.resize((W, H), Image.LANCZOS).convert("RGBA")

    # Brand logo, top-left where the placeholder circle used to be.
    canvas.alpha_composite(logo_rgba(int(H * 0.085)), (int(W * 0.055), int(H * 0.045)))
    return canvas


def logo_rgba(height: int) -> Image.Image:
    im = Image.open(LOGO).convert("RGBA")
    a = np.array(im)
    white = (a[..., 0] > 235) & (a[..., 1] > 235) & (a[..., 2] > 235)
    a[..., 3] = np.where(white, 0, a[..., 3])
    im = Image.fromarray(a)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    return im.resize((max(1, int(im.width * height / im.height)), height), Image.LANCZOS)


BASE = build_backdrop()


# ------------------------------------------------------------------- mask ----
def clean_mask(cut: Image.Image) -> Image.Image:
    """Drop small disconnected specks so only the product remains."""
    try:
        from scipy import ndimage
    except Exception:
        return cut
    a = np.array(cut)
    alpha = a[..., 3]
    lbl, n = ndimage.label(alpha > 30)
    if n <= 1:
        return cut
    sizes = ndimage.sum(alpha > 30, lbl, range(1, n + 1))
    keep = sizes >= max(sizes.max() * 0.004, alpha.size * 0.00015)
    mask = np.isin(lbl, np.nonzero(keep)[0] + 1)
    a[..., 3] = np.where(mask, alpha, 0)
    return Image.fromarray(a)


def process(path: Path) -> bool:
    raw = Image.open(path).convert("RGBA")
    cut = clean_mask(remove(raw, session=_session, post_process_mask=False))
    bbox = cut.getbbox()
    if not bbox:
        print(f"  ! no subject found: {path.name}")
        return False
    cut = cut.crop(bbox)

    max_w = int(W * 0.78)
    max_h = FLOOR_Y - TOP_SAFE
    ratio = min(max_w / cut.width, max_h / cut.height, 1.6)
    new = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))),
                     Image.LANCZOS)

    x = (W - new.width) // 2
    y = FLOOR_Y - new.height          # feet planted on the floor line

    canvas = BASE.copy()

    # Grounding shadow: the product's own silhouette squashed onto the floor so
    # the contact points line up with the feet/wheels instead of a generic blob.
    alpha = np.array(new)[..., 3]
    sil = Image.fromarray(alpha, "L")
    sh_h = max(20, int(new.height * 0.14))
    sil = sil.resize((int(new.width * 1.04), sh_h), Image.LANCZOS)
    fade = np.linspace(0.15, 1.0, sh_h)[:, None]     # darkest at the contact line
    sil = Image.fromarray((np.array(sil).astype(np.float32) * fade * 0.62)
                          .clip(0, 255).astype(np.uint8), "L")

    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    tint = Image.new("RGBA", sil.size, (74, 79, 88, 255))
    tint.putalpha(sil)
    sh.alpha_composite(tint, ((W - sil.width) // 2, FLOOR_Y - sh_h + int(sh_h * 0.45)))
    sh = sh.filter(ImageFilter.GaussianBlur(18))
    canvas = Image.alpha_composite(canvas, sh)


    canvas.alpha_composite(new, (x, y))

    out = path
    if out.suffix.lower() == ".png":
        canvas.convert("RGB").save(out, "PNG", optimize=True)
    else:
        canvas.convert("RGB").save(out, "JPEG", quality=90, optimize=True)
    return True


def main():
    args = sys.argv[1:]
    files = [Path(a) for a in args] if args else sorted(
        p for p in SRC.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png"})
    for f in files:
        print(f"• {f.name}", flush=True)
        process(f)


if __name__ == "__main__":
    main()
