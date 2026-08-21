#!/usr/bin/env python3
"""Composite untouched pre-owned equipment photos into a clean, empty studio.

Treatment (v2, no branding):
  * background removed from the preserved original photograph only
  * warm off-white seamless cyclorama: wall -> curved cove -> matte floor
  * soft diffused key light from upper left, gentle floor falloff
  * strict BOTTOM ANCHORING: the lowest visible equipment pixel sits on the
    floor contact line (gap validated to 0-2px)
  * contact shadow built from the equipment's own silhouette, darkest at the
    contact points, softening outward -- never a detached oval
  * conservative roll correction from the lower support envelope so equipment
    photographed at a sideways tilt rests level before it is bottom-anchored
"""
from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from rembg import remove, new_session

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "scripts/assets/used-originals"
DEST = ROOT / "public/assets/products/used"

W, H = 1400, 1120
COVE_TOP = int(H * 0.71)          # wall begins curving just above the equipment base
COVE_BOTTOM = int(H * 0.79)       # wall/floor transition meets the equipment contact line
FLOOR_CONTACT_Y = COVE_BOTTOM     # actual wheels, feet, or base rest at that transition
TOP_SAFE = int(H * 0.08)
VISIBLE_ALPHA = 10
MAX_LEVEL_DEGREES = 5.0
MIN_LEVEL_DEGREES = 0.65

_session = new_session("birefnet-general")


# ---------------------------------------------------------------- backdrop ---
def build_backdrop() -> Image.Image:
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)

    wall_top = np.array([250, 249, 246], np.float32)
    wall_bottom = np.array([243, 241, 236], np.float32)
    floor_far = np.array([236, 234, 229], np.float32)
    floor_near = np.array([222, 220, 214], np.float32)

    # vertical wall gradient
    t_wall = np.clip(yy / max(1, COVE_TOP), 0, 1)[..., None]
    arr = wall_top * (1 - t_wall) + wall_bottom * t_wall

    # seamless cove: smooth blend from wall tone into floor tone
    cove = np.clip((yy - COVE_TOP) / (COVE_BOTTOM - COVE_TOP), 0, 1)
    cove = (cove * cove * (3 - 2 * cove))[..., None]
    arr = arr * (1 - cove) + floor_far * cove

    # floor recedes toward the camera (darker near the viewer)
    depth = np.clip((yy - COVE_BOTTOM) / (H - COVE_BOTTOM), 0, 1)
    depth = (depth ** 1.25)[..., None]
    arr = arr * (1 - depth) + floor_near * depth

    # soft diffused key light, upper-left, with natural falloff to the corners
    r = np.sqrt(((xx - W * 0.42) / W) ** 2 + ((yy - H * 0.34) / H) ** 2)
    arr += (np.clip(0.30 - r, 0, 0.30) * 22)[..., None]
    arr -= (np.clip(r - 0.34, 0, 0.8) * 16)[..., None]

    # faint ambient occlusion where the wall meets the floor
    ao = np.exp(-((yy - COVE_BOTTOM) ** 2) / (2 * (H * 0.045) ** 2))
    arr -= (ao * 5)[..., None]

    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    return img.filter(ImageFilter.GaussianBlur(1.2)).convert("RGBA")


BASE = build_backdrop()


# ------------------------------------------------------------------- mask ----
def trim_to_visible(image: Image.Image) -> Image.Image:
    alpha = np.asarray(image)[..., 3]
    visible = alpha > VISIBLE_ALPHA
    if not visible.any():
        raise ValueError("cutout contains no visible equipment pixels")
    ys, xs = np.nonzero(visible)
    return image.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))


def lowest_visible_y(image: Image.Image) -> int:
    alpha = np.asarray(image)[..., 3]
    rows = np.nonzero((alpha > VISIBLE_ALPHA).any(axis=1))[0]
    if rows.size == 0:
        raise ValueError("cutout contains no visible equipment pixels")
    return int(rows[-1])


def level_to_supports(image: Image.Image) -> tuple[Image.Image, float]:
    """Level the photographed floor-support envelope without altering shape.

    Transparent columns and narrow dangling details are ignored.  A robust
    line is fitted only to the lowest substantial part of the silhouette, so
    the correction follows feet/base rails rather than the image rectangle.
    """
    alpha = np.asarray(image)[..., 3]
    visible = alpha > VISIBLE_ALPHA
    xs = np.nonzero(visible.any(axis=0))[0]
    if xs.size < 20:
        return image, 0.0

    bottom_x: list[float] = []
    bottom_y: list[float] = []
    min_column_pixels = max(3, int(image.height * 0.008))
    for x in xs:
        ys = np.nonzero(visible[:, x])[0]
        if ys.size >= min_column_pixels:
            bottom_x.append(float(x))
            bottom_y.append(float(ys[-1]))

    if len(bottom_x) < 20:
        return image, 0.0
    bx = np.asarray(bottom_x)
    by = np.asarray(bottom_y)

    # Keep the lower support band, but reject isolated cords/casters that do
    # not describe the overall stance of the machine.
    support_cut = np.percentile(by, 78)
    keep = by >= support_cut
    bx, by = bx[keep], by[keep]
    if bx.size < 12 or np.ptp(bx) < image.width * 0.18:
        return image, 0.0

    # Iteratively remove points far from the support trend (robust regression).
    for _ in range(3):
        slope, intercept = np.polyfit(bx, by, 1)
        residual = by - (slope * bx + intercept)
        tolerance = max(2.5, float(np.percentile(np.abs(residual), 70)))
        inliers = np.abs(residual) <= tolerance
        if inliers.sum() < 10 or np.ptp(bx[inliers]) < image.width * 0.16:
            break
        bx, by = bx[inliers], by[inliers]

    slope = float(np.polyfit(bx, by, 1)[0])
    degrees = float(np.degrees(np.arctan(slope)))
    degrees = float(np.clip(degrees, -MAX_LEVEL_DEGREES, MAX_LEVEL_DEGREES))
    if abs(degrees) < MIN_LEVEL_DEGREES:
        return image, 0.0

    leveled = image.rotate(degrees, resample=Image.Resampling.BICUBIC,
                           expand=True, fillcolor=(0, 0, 0, 0))
    return trim_to_visible(leveled), degrees


def process(path: Path) -> bool:
    raw = Image.open(path).convert("RGBA")
    cut = remove(raw, session=_session, alpha_matting=True,
                 alpha_matting_foreground_threshold=245,
                 alpha_matting_background_threshold=15,
                 alpha_matting_erode_size=4, post_process_mask=False)
    try:
        cut = trim_to_visible(cut)
        cut, level_degrees = level_to_supports(cut)
    except ValueError:
        print(f"  ! no subject found: {path.name}")
        return False

    # Catalog framing: large but with natural negative space; scale follows the
    # piece's own shape rather than forcing a uniform footprint.
    max_w = int(W * 0.74)
    max_h = FLOOR_CONTACT_Y - TOP_SAFE + 1
    ratio = min(max_w / cut.width, max_h / cut.height, 1.5)
    new = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))),
                     Image.LANCZOS)
    new = trim_to_visible(new)  # resampling can add transparent padding

    x = (W - new.width) // 2
    local_bottom_y = lowest_visible_y(new)
    y = FLOOR_CONTACT_Y - local_bottom_y  # bottom anchored, never centered

    canvas = BASE.copy()
    alpha = np.array(new)[..., 3].astype(np.float32)
    contact_y = y + local_bottom_y

    # ---- contact shadow, built from the object's own silhouette -------------
    # 1. tight dark core exactly at the contact points
    foot_rows = max(3, int(new.height * 0.02))
    foot = np.clip(alpha[-foot_rows:].max(axis=0) / 255.0, 0, 1)
    core = np.zeros((H, W), np.float32)
    core_h = max(3, min(7, int(new.height * 0.008)))
    for i in range(core_h):
        row_y = contact_y - 1 + i
        if 0 <= row_y < H:
            core[row_y, x:x + new.width] = np.maximum(
                core[row_y, x:x + new.width], foot * (1 - i / core_h) ** 1.5 * 0.62)

    # 2. footprint spill: lower silhouette compressed onto the floor plane
    lower_start = int(new.height * 0.78)
    lower = Image.fromarray(alpha[lower_start:].astype(np.uint8), "L")
    spill_h = max(14, min(56, int(new.height * 0.07)))
    spill_w = max(2, int(new.width * 1.02))
    fp = np.asarray(
        lower.resize((spill_w, spill_h), Image.LANCZOS)
             .filter(ImageFilter.GaussianBlur(max(2.2, spill_h * 0.16)))
    ).astype(np.float32) / 255.0
    fp *= np.linspace(0.30, 0.0, spill_h, dtype=np.float32)[:, None]
    spill_mask = Image.new("L", (W, H), 0)
    spill_mask.paste(Image.fromarray((fp * 255).astype(np.uint8), "L"),
                     (x + (new.width - spill_w) // 2 + int(new.width * 0.01), contact_y - 2))

    shadow_rgb = (58, 56, 52, 255)
    spill_layer = Image.new("RGBA", (W, H), shadow_rgb)
    spill_layer.putalpha(spill_mask.filter(ImageFilter.GaussianBlur(3.0)))
    canvas = Image.alpha_composite(canvas, spill_layer)

    core_layer = Image.new("RGBA", (W, H), shadow_rgb)
    core_layer.putalpha(
        Image.fromarray((core * 255).clip(0, 255).astype(np.uint8), "L")
             .filter(ImageFilter.GaussianBlur(1.0)))
    canvas = Image.alpha_composite(canvas, core_layer)

    canvas.alpha_composite(new, (x, y))

    rendered_bottom_y = y + lowest_visible_y(new)
    gap = FLOOR_CONTACT_Y - rendered_bottom_y
    if gap < 0 or gap > 2:
        raise RuntimeError(f"{path.name}: invalid floor gap {gap}px")
    print(f"  grounded: equipment_y={rendered_bottom_y}, floor_y={FLOOR_CONTACT_Y}, gap={gap}px",
          f"level={level_degrees:+.2f}deg", flush=True)

    out = DEST / path.name
    if out.suffix.lower() == ".png":
        canvas.convert("RGB").save(out, "PNG", optimize=True)
    else:
        canvas.convert("RGB").save(out, "JPEG", quality=92, optimize=True)
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
