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

W, H = 1500, 1006                 # matches the approved reference aspect (~3:2)
COVE_TOP = int(H * 0.50)          # seamless: wall tone eases into floor tone
COVE_BOTTOM = int(H * 0.62)
FLOOR_CONTACT_Y = int(H * 0.88)   # wheels / feet / base rest here
TOP_SAFE = int(H * 0.16)          # clear of the logo lockup
VISIBLE_ALPHA = 4
MAX_LEVEL_DEGREES = 0.0
MIN_LEVEL_DEGREES = 0.65


_sessions = [new_session(n) for n in ("birefnet-general", "isnet-general-use", "u2net")]




# ---------------------------------------------------------------- backdrop ---
def build_backdrop() -> Image.Image:
    """Warm cream seamless studio matching the approved reference frame."""
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)

    wall_top = np.array([247, 239, 232], np.float32)
    wall_bottom = np.array([236, 226, 216], np.float32)
    floor_far = np.array([235, 225, 215], np.float32)
    floor_near = np.array([229, 219, 209], np.float32)

    t_wall = np.clip(yy / max(1, COVE_TOP), 0, 1)[..., None]
    arr = wall_top * (1 - t_wall) + wall_bottom * t_wall

    cove = np.clip((yy - COVE_TOP) / (COVE_BOTTOM - COVE_TOP), 0, 1)
    cove = (cove * cove * (3 - 2 * cove))[..., None]
    arr = arr * (1 - cove) + floor_far * cove

    depth = np.clip((yy - COVE_BOTTOM) / (H - COVE_BOTTOM), 0, 1)
    depth = (depth ** 1.4)[..., None]
    arr = arr * (1 - depth) + floor_near * depth

    # soft diffused key light, upper left
    r = np.sqrt(((xx - W * 0.30) / W) ** 2 + ((yy - H * 0.22) / H) ** 2)
    arr += (np.clip(0.32 - r, 0, 0.32) * 16)[..., None]
    arr -= (np.clip(r - 0.42, 0, 0.9) * 14)[..., None]

    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    return img.filter(ImageFilter.GaussianBlur(1.4)).convert("RGBA")


# ---------------------------------------------------------------- branding ---
ORANGE = (246, 88, 15)
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


def _pattern_layer() -> Image.Image:
    """Very faint hexagon field plus angular line graphics on the left wall."""
    S = 4  # supersample for clean thin strokes
    layer = Image.new("RGBA", (W * S, H * S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)

    ink = (196, 184, 172)
    hex_r = int(W * S * 0.055)
    dx = hex_r * 1.5
    dy = hex_r * np.sqrt(3)
    stroke = max(2, int(W * S * 0.0011))
    col = 0
    x = -hex_r
    while x < W * S + hex_r:
        y = -hex_r + (dy / 2 if col % 2 else 0)
        while y < H * S * 0.72:
            pts = [(x + hex_r * np.cos(np.pi / 3 * k),
                    y + hex_r * np.sin(np.pi / 3 * k)) for k in range(6)]
            d.polygon(pts, outline=ink + (26,), width=stroke)
            y += dy
        x += dx
        col += 1

    # angular chevron graphics, lower left
    lw = max(3, int(W * S * 0.0035))
    for i, scale in enumerate((0.0, 0.055, 0.11)):
        ox = int(W * S * (0.015 + scale))
        oy = int(H * S * (0.62 - scale * 0.9))
        top = int(H * S * (0.17 + scale * 0.5))
        d.line([(ox, oy), (ox, oy - top), (ox + int(W * S * 0.075), oy - top - int(H * S * 0.06))],
               fill=ink + (70 - i * 16,), width=lw, joint="curve")

    layer = layer.resize((W, H), Image.LANCZOS)
    return layer.filter(ImageFilter.GaussianBlur(0.4))


def apply_branding(canvas: Image.Image) -> Image.Image:
    """Warm studio branding: faint wall graphics, orange corner arc + logo."""
    canvas = Image.alpha_composite(canvas.convert("RGBA"), _pattern_layer())

    S = 4
    layer = Image.new("RGBA", (W * S, H * S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    # orange quarter-disc anchored to the top-right corner
    r = int(W * S * 0.135)
    d.pieslice([W * S - r, -r, W * S + r, r], 0, 360, fill=ORANGE + (255,))
    layer = layer.resize((W, H), Image.LANCZOS)
    canvas = Image.alpha_composite(canvas, layer)

    if _LOGO is not None:
        target_h = int(H * 0.165)
        lw = max(1, int(_LOGO.width * (target_h / _LOGO.height)))
        logo = _LOGO.resize((lw, target_h), Image.LANCZOS)
        lx = W - lw - int(W * 0.065)
        ly = int(H * 0.095)
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

    # Never reduce the model union to only its largest connected component.
    # Casters, feet, power cords and parallel-bar platforms are frequently
    # separated by a few source pixels and were being mistaken for background.
    # A low-confidence union preserves those real structures; only tiny remote
    # specks near the photograph edges are rejected.
    solid = union > 24
    labels, count = ndimage.label(solid)
    if count:
        sizes = np.asarray(ndimage.sum(solid, labels, range(1, count + 1)))
        main = int(np.argmax(sizes)) + 1
        main_ys, main_xs = np.nonzero(labels == main)
        pad_x = max(18, int(raw.width * 0.09))
        pad_y = max(18, int(raw.height * 0.09))
        x0 = max(0, int(main_xs.min()) - pad_x)
        x1 = min(raw.width, int(main_xs.max()) + pad_x + 1)
        y0 = max(0, int(main_ys.min()) - pad_y)
        y1 = min(raw.height, int(main_ys.max()) + pad_y + 1)
        keep = labels == main
        min_detail = max(6, int(solid.sum() * 0.00008))
        for idx in range(1, count + 1):
            if idx == main or sizes[idx - 1] < min_detail:
                continue
            ys, xs = np.nonzero(labels == idx)
            # Retain components in/near the subject envelope, especially below
            # the body where feet, wheels and bases occur.
            if xs.max() >= x0 and xs.min() < x1 and ys.max() >= y0 and ys.min() < y1:
                keep |= labels == idx
        union = np.where(keep, union, 0)

    # Only fill pinholes. Filling every enclosed region incorrectly turned the
    # open space between table legs and inside machine frames into foreground.
    pinholes = ndimage.binary_fill_holes(solid) & ~solid
    pin_labels, pin_count = ndimage.label(pinholes)
    if pin_count:
        pin_sizes = np.asarray(ndimage.sum(pinholes, pin_labels, range(1, pin_count + 1)))
        small_holes = np.isin(pin_labels, np.nonzero(pin_sizes <= raw.width * raw.height * 0.0002)[0] + 1)
        union = np.maximum(union, np.where(small_holes, 255, 0)).astype(np.uint8)

    alpha = Image.fromarray(union.astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(0.45))
    cut = raw.copy()
    cut.putalpha(alpha)
    return cut


def process(path: Path) -> bool:
    raw = Image.open(path).convert("RGBA")
    cut = cutout(raw)

    try:
        cut = trim_to_visible(cut)
        # Preserve the photographed perspective. Automatic rotation made one
        # caster touch while lifting the opposite side of wide equipment.
        level_degrees = 0.0
    except ValueError:
        print(f"  ! no subject found: {path.name}")
        return False

    # Catalog framing: large but with natural negative space; scale follows the
    # piece's own shape rather than forcing a uniform footprint.
    max_w = int(W * 0.74)
    max_h = FLOOR_CONTACT_Y - TOP_SAFE + 1
    ratio = min(max_w / cut.width, max_h / cut.height, 1.18)
    new = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))),
                     Image.LANCZOS)
    new = trim_to_visible(new)  # resampling can add transparent padding

    x = (W - new.width) // 2
    local_bottom_y = lowest_visible_y(new)
    y = FLOOR_CONTACT_Y - local_bottom_y  # bottom anchored, never centered

    canvas = BASE.copy()
    alpha = np.array(new)[..., 3].astype(np.float32)
    contact_y = y + local_bottom_y

    # ---- small shadows only where the equipment contacts the floor ----------
    # Follow the lower silhouette closely.  This creates compact shadows under
    # wheels, feet and bases without adding a broad floating drop shadow.
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

    # Limit contacts to the lowest support band. Higher body edges are not floor
    # contacts and must not cast a shadow beneath the whole machine.
    contact_depth = max(4, int(new.height * 0.035))
    core = np.zeros((H, W), np.float32)
    contact_h = max(3, min(7, int(new.height * 0.009)))

    for cx, by in bottoms.items():
        depth = local_bottom_y - by
        if depth > contact_depth:
            continue                      # part of the body, not a support point
        gx = x + cx
        if not (0 <= gx < W):
            continue
        gy = y + by
        weight = 1.0 - 0.35 * (depth / max(1, contact_depth))
        for i in range(contact_h):
            ry = gy + i
            if 0 <= ry < H:
                core[ry, gx] = max(core[ry, gx],
                                   weight * 0.56 * (1 - i / contact_h) ** 1.7)

    shadow_rgb = (58, 56, 52, 255)
    core_layer = Image.new("RGBA", (W, H), shadow_rgb)
    core_layer.putalpha(
        Image.fromarray((core * 255).clip(0, 255).astype(np.uint8), "L")
             .filter(ImageFilter.GaussianBlur(max(2.0, new.height * 0.005))))
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
