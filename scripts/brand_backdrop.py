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
FLOOR_Y = int(H * 0.90)    # natural foreground plane from the approved studio reference
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


def level_cutout(cut: Image.Image) -> Image.Image:
    """Rotate the cutout so its ground-contact points sit on a horizontal line.

    Photos shot from the hip often show the equipment tilted. We fit a line to
    the lowest silhouette points (wheels / feet / base) and counter-rotate by
    that angle so the piece reads as level on the studio floor.
    """
    a = np.array(cut)[..., 3]
    solid = a > 25
    if not solid.any():
        return cut
    cols = np.nonzero(solid.any(axis=0))[0]
    bottoms = np.array([np.nonzero(solid[:, c])[0].max() for c in cols], np.float32)
    h = float(np.nonzero(solid.any(axis=1))[0].ptp() + 1)
    # Only the columns that actually reach near the lowest plane are contact points.
    band = bottoms >= bottoms.max() - h * 0.14
    if band.sum() < 8:
        return cut
    x = cols[band].astype(np.float32)
    y = bottoms[band]
    if x.ptp() < a.shape[1] * 0.25:
        return cut
    slope = np.polyfit(x, y, 1)[0]
    # Reject noisy fits
    resid = y - np.polyval(np.polyfit(x, y, 1), x)
    if np.std(resid) > h * 0.06:
        return cut
    angle = np.degrees(np.arctan(slope))
    if abs(angle) < 0.4 or abs(angle) > 8:
        return cut
    return cut.rotate(angle, resample=Image.BICUBIC, expand=True)


def process(path: Path) -> bool:
    raw = Image.open(path).convert("RGBA")
    cut = clean_mask(remove(raw, session=_session, post_process_mask=False))
    cut = level_cutout(cut)


    # Trim rows/cols that are effectively empty so the true lowest contact point
    # (feet / wheels / base) becomes the bottom edge of the cutout.
    a = np.array(cut)[..., 3]
    solid = a > 10
    if not solid.any():
        print(f"  ! no subject found: {path.name}")
        return False
    ys, xs = np.nonzero(solid)
    cut = cut.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))

    max_w = int(W * 0.76)
    max_h = FLOOR_Y - TOP_SAFE
    ratio = min(max_w / cut.width, max_h / cut.height, 1.6)
    new = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))),
                     Image.LANCZOS)

    x = (W - new.width) // 2
    # Sink the lowest physical points into the floor enough to hide the pale
    # anti-aliased fringe left by background removal. Wheels, feet, and bases must
    # visibly cross into their shadow rather than hover just above it.
    overlap = max(7, min(15, int(new.height * 0.014)))
    y = FLOOR_Y - new.height + overlap

    canvas = BASE.copy()

    alpha = np.array(new)[..., 3].astype(np.float32)

    # --- contact points: the very bottom silhouette creates the dark, attached
    # core. A separate compressed silhouette below supplies the shallow studio
    # floor shadow cast by the whole lower chassis.
    foot_rows = max(3, int(new.height * 0.018))
    foot = alpha[-foot_rows:].max(axis=0)              # per-column contact profile
    foot = np.clip(foot / 255.0, 0, 1)

    contact_y = y + new.height                          # exact contact line

    # Tight, dark core: kept separate from the soft spill so it remains visibly
    # attached to feet, wheels, and bases after compositing.
    core = np.zeros((H, W), np.float32)
    core_h = max(3, min(8, int(new.height * 0.009)))
    for i in range(core_h):
        t = i / core_h
        row_y = contact_y - overlap + i
        if 0 <= row_y < H:
            core[row_y, x:x + new.width] = np.maximum(
                core[row_y, x:x + new.width], foot * (1 - t) ** 1.5 * 0.78)

    # Compress the lower portion of the actual equipment silhouette onto the
    # floor. Unlike an ellipse, this follows the equipment's width and mass, and
    # begins behind the contact points so it cannot appear detached.
    lower_start = int(new.height * 0.62)
    lower_alpha = Image.fromarray(alpha[lower_start:].astype(np.uint8), "L")
    spill_h = max(12, min(34, int(new.height * 0.045)))
    spill_w = max(2, int(new.width * 0.96))
    footprint = lower_alpha.resize((spill_w, spill_h), Image.LANCZOS)
    footprint = footprint.filter(ImageFilter.GaussianBlur(max(2.0, spill_h * 0.13)))
    # Fade the projected shadow quickly toward the viewer.
    fp = np.array(footprint).astype(np.float32) / 255.0
    fp *= np.linspace(0.34, 0.03, spill_h, dtype=np.float32)[:, None]
    spill_mask = Image.new("L", (W, H), 0)
    spill_x = x + (new.width - spill_w) // 2 + max(1, int(new.width * 0.008))
    spill_y = contact_y - overlap - max(2, spill_h // 6)
    spill_mask.paste(Image.fromarray((fp * 255).astype(np.uint8), "L"),
                     (spill_x, spill_y))

    shadow_rgb = (49, 52, 58, 255)
    spill_layer = Image.new("RGBA", (W, H), shadow_rgb)
    spill_layer.putalpha(spill_mask)
    canvas = Image.alpha_composite(canvas, spill_layer)

    core_layer = Image.new("RGBA", (W, H), shadow_rgb)
    core_mask = Image.fromarray((core * 255).clip(0, 255).astype(np.uint8), "L")
    core_layer.putalpha(core_mask.filter(ImageFilter.GaussianBlur(0.7)))
    canvas = Image.alpha_composite(canvas, core_layer)

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
