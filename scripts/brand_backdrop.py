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
from scipy import ndimage
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
MAX_LEVEL_DEGREES = 2.5
MIN_LEVEL_DEGREES = 0.65

_sessions = [new_session(n) for n in ("birefnet-general", "isnet-general-use", "u2net")]


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


# ---------------------------------------------------------------- branding ---
ORANGE = (247, 148, 29)
LOGO_PATH = ROOT / "src/assets/gm-therapy-logo.png"


def _logo_rgba() -> Image.Image | None:
    if not LOGO_PATH.exists():
        return None
    logo = Image.open(LOGO_PATH).convert("RGBA")
    arr = np.asarray(logo).astype(np.float32)
    # key out the white paper background of the logo file
    lum = arr[..., :3].mean(axis=2)
    alpha = np.clip((245.0 - lum) / 35.0, 0, 1) * 255.0
    arr[..., 3] = alpha
    logo = Image.fromarray(arr.astype(np.uint8), "RGBA")
    bbox = logo.getbbox()
    return logo.crop(bbox) if bbox else logo


_LOGO = _logo_rgba()


def apply_branding(canvas: Image.Image) -> Image.Image:
    """Subtle GM Therapy Solutions branding: orange corner + logo, upper right."""
    canvas = canvas.convert("RGBA")
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)

    # orange corner graphic (top-right wedge)
    size = int(W * 0.115)
    d.polygon([(W, 0), (W, size), (W - size, 0)], fill=ORANGE + (255,))
    # thin accent stroke echoing the wedge
    inset = int(size * 1.55)
    d.line([(W - inset, 0), (W, inset)], fill=ORANGE + (90,), width=max(2, int(W * 0.0035)))

    # very subtle watermark arc on the wall
    r = int(W * 0.30)
    cx, cy = int(W * 0.18), int(H * 0.20)
    d.arc([cx - r, cy - r, cx + r, cy + r], 0, 360,
          fill=ORANGE + (16,), width=max(3, int(W * 0.006)))

    canvas = Image.alpha_composite(canvas, layer)

    if _LOGO is not None:
        target_h = int(H * 0.062)
        lw = max(1, int(_LOGO.width * (target_h / _LOGO.height)))
        logo = _LOGO.resize((lw, target_h), Image.LANCZOS)
        lx = W - lw - int(W * 0.035)
        ly = int(H * 0.055)
        canvas.alpha_composite(logo, (lx, ly))

    return canvas


BASE = apply_branding(build_backdrop())


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
    # A very steep support fit means the silhouette bottom is a receding
    # perspective edge, not a tilt -- rotating it would fake the geometry.
    if abs(degrees) > 6.0:
        return image, 0.0
    degrees = float(np.clip(degrees, -MAX_LEVEL_DEGREES, MAX_LEVEL_DEGREES))
    if abs(degrees) < MIN_LEVEL_DEGREES:
        return image, 0.0

    leveled = image.rotate(degrees, resample=Image.Resampling.BICUBIC,
                           expand=True, fillcolor=(0, 0, 0, 0))
    return trim_to_visible(leveled), degrees


def cutout(raw: Image.Image) -> Image.Image:
    """Segment the equipment without losing legs, wheels, rails or platforms.

    A single model routinely drops thin structures (caster stems, parallel-bar
    uprights, table legs).  Masks from several models are unioned, then any
    stray blob that is not attached to the main subject is discarded.
    """
    masks = []
    for session in _sessions:
        m = remove(raw, session=session, only_mask=True, post_process_mask=False)
        masks.append(np.asarray(m.convert("L")).astype(np.float32))
    union = np.max(np.stack(masks), axis=0)

    solid = union > 100
    labels, count = ndimage.label(ndimage.binary_closing(solid, np.ones((5, 5))))
    if count:
        sizes = ndimage.sum(solid, labels, range(1, count + 1))
        main = int(np.argmax(sizes)) + 1
        main_mask = ndimage.binary_dilation(labels == main, np.ones((9, 9)))
        keep = np.zeros_like(solid)
        for idx in range(1, count + 1):
            comp = labels == idx
            if idx == main or (comp & main_mask).any() or sizes[idx - 1] > solid.sum() * 0.05:
                keep |= comp
        union = np.where(keep, union, 0)

    # fill interior holes so frames/panels do not read as punched through
    filled = ndimage.binary_fill_holes(union > 100)
    union = np.maximum(union, np.where(filled, 255, 0)).astype(np.uint8)

    alpha = Image.fromarray(union, "L").filter(ImageFilter.GaussianBlur(0.8))
    cut = raw.copy()
    cut.putalpha(alpha)
    return cut


def process(path: Path) -> bool:
    raw = Image.open(path).convert("RGBA")
    cut = cutout(raw)

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

    # ---- contact shadow across the FULL footprint ---------------------------
    # Every column that reaches the support band gets its own contact shadow at
    # its own bottom pixel, so back wheels/feet sitting higher in perspective
    # are grounded too -- not just the single lowest point of the silhouette.
    visible = alpha > VISIBLE_ALPHA
    min_column_pixels = max(2, int(new.height * 0.004))
    cols = np.nonzero(visible.any(axis=0))[0]
    bottoms: dict[int, int] = {}
    for cx in cols:
        ys = np.nonzero(visible[:, cx])[0]
        if ys.size >= min_column_pixels:
            bottoms[int(cx)] = int(ys[-1])
    if not bottoms:
        bottoms = {int(cx): local_bottom_y for cx in cols}

    # support band: contact points are anything within the rear-footprint depth
    footprint_depth = max(6, int(new.height * 0.32))
    core = np.zeros((H, W), np.float32)
    spill = np.zeros((H, W), np.float32)
    core_h = max(3, min(9, int(new.height * 0.012)))
    spill_h = max(16, min(90, int(new.height * 0.10)))
    spill_fade = np.linspace(1.0, 0.0, spill_h, dtype=np.float32) ** 1.4

    for cx, by in bottoms.items():
        depth = local_bottom_y - by
        if depth > footprint_depth:
            continue                      # part of the body, not a support point
        gx = x + cx
        if not (0 <= gx < W):
            continue
        # rear contacts read slightly lighter (further from the camera light)
        weight = 1.0 - 0.45 * (depth / max(1, footprint_depth))
        gy = y + by
        for i in range(core_h):
            ry = gy - 1 + i
            if 0 <= ry < H:
                core[ry, gx] = max(core[ry, gx],
                                   weight * 0.78 * (1 - i / core_h) ** 1.4)
        top = max(0, gy)
        end = min(H, gy + spill_h)
        if end > top:
            seg = spill_fade[: end - top] * (0.42 * weight)
            spill[top:end, gx] = np.maximum(spill[top:end, gx], seg)

    shadow_rgb = (58, 56, 52, 255)
    spill_layer = Image.new("RGBA", (W, H), shadow_rgb)
    spill_layer.putalpha(
        Image.fromarray((spill * 255).clip(0, 255).astype(np.uint8), "L")
             .filter(ImageFilter.GaussianBlur(max(4.0, spill_h * 0.22))))
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
