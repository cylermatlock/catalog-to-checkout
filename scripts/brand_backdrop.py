#!/usr/bin/env python3
"""Composite untouched pre-owned equipment photos into a clean, empty studio.

Treatment (v3, branded neutral studio):
  * background removed from the preserved original photograph only
  * neutral white-to-light-gray cyclorama: wall -> curved cove -> matte floor
  * soft overhead key light, gentle floor bounce, and restrained brand graphics
  * strict BOTTOM ANCHORING: the lowest visible equipment pixel sits on the
    floor contact line (gap validated to 0-2px)
  * tight contact shadows at each support plus a faint ambient footprint built
    from the equipment's own silhouette -- never a detached generic oval
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

W, H = 1536, 1152                 # standard landscape output (4:3)
COVE_TOP = int(H * 0.53)          # broad, line-free wall-to-floor transition
COVE_BOTTOM = int(H * 0.70)
FLOOR_CONTACT_Y = int(H * 0.885)  # nearest wheel / foot / base rests here
TOP_SAFE = int(H * 0.14)          # clear of the logo lockup
VISIBLE_ALPHA = 4
MAX_LEVEL_DEGREES = 0.0
MIN_LEVEL_DEGREES = 0.65


_sessions = [new_session(n) for n in ("birefnet-general", "isnet-general-use", "u2net")]




# ---------------------------------------------------------------- backdrop ---
def build_backdrop() -> Image.Image:
    """Bright neutral infinity wall with a readable horizontal floor plane."""
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)

    wall_top = np.array([252, 252, 252], np.float32)
    wall_bottom = np.array([243, 244, 245], np.float32)
    floor_far = np.array([238, 239, 240], np.float32)
    floor_near = np.array([225, 227, 229], np.float32)

    t_wall = np.clip(yy / max(1, COVE_TOP), 0, 1)[..., None]
    arr = wall_top * (1 - t_wall) + wall_bottom * t_wall

    cove = np.clip((yy - COVE_TOP) / (COVE_BOTTOM - COVE_TOP), 0, 1)
    cove = (cove * cove * (3 - 2 * cove))[..., None]
    arr = arr * (1 - cove) + floor_far * cove

    depth = np.clip((yy - COVE_BOTTOM) / (H - COVE_BOTTOM), 0, 1)
    depth = (depth ** 1.4)[..., None]
    arr = arr * (1 - depth) + floor_near * depth

    # Broad overhead softbox and a very subtle front-to-back floor falloff.
    r = np.sqrt(((xx - W * 0.42) / W) ** 2 + ((yy - H * 0.20) / H) ** 2)
    arr += (np.clip(0.36 - r, 0, 0.36) * 10)[..., None]
    arr -= (np.clip(r - 0.56, 0, 0.8) * 5)[..., None]

    img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    return img.filter(ImageFilter.GaussianBlur(1.4)).convert("RGBA")


# ---------------------------------------------------------------- branding ---
ORANGE = (242, 103, 34)  # official accent: #F26722
LOGO_PATH = ROOT / "src/assets/gm-therapy-logo.png"


def _logo_rgba() -> Image.Image | None:
    if not LOGO_PATH.exists():
        return None
    logo = Image.open(LOGO_PATH).convert("RGBA")
    arr = np.asarray(logo).astype(np.float32)
    # Respect official transparency when present. Only key white paper from a
    # fully opaque source; this avoids damaging antialiased logo edges.
    if np.all(arr[..., 3] == 255):
        lum = arr[..., :3].mean(axis=2)
        chroma = arr[..., :3].max(axis=2) - arr[..., :3].min(axis=2)
        paper = np.clip((250.0 - lum) / 24.0, 0, 1)
        paper = np.maximum(paper, np.clip(chroma / 18.0, 0, 1))
        arr[..., 3] = paper * 255.0
    logo = Image.fromarray(arr.astype(np.uint8), "RGBA")
    bbox = logo.getbbox()
    return logo.crop(bbox) if bbox else logo


_LOGO = _logo_rgba()


def _pattern_layer() -> Image.Image:
    """Very faint hexagon field on the wall, clear of the equipment focus."""
    S = 4  # supersample for clean thin strokes
    layer = Image.new("RGBA", (W * S, H * S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)

    ink = (161, 166, 171)
    hex_r = int(W * S * 0.055)
    dx = hex_r * 1.5
    dy = hex_r * np.sqrt(3)
    stroke = max(2, int(W * S * 0.0011))
    col = 0
    x = -hex_r
    while x < W * S + hex_r:
        y = -hex_r + (dy / 2 if col % 2 else 0)
        while y < H * S * 0.67:
            pts = [(x + hex_r * np.cos(np.pi / 3 * k),
                    y + hex_r * np.sin(np.pi / 3 * k)) for k in range(6)]
            d.polygon(pts, outline=ink + (20,), width=stroke)
            y += dy
        x += dx
        col += 1

    layer = layer.resize((W, H), Image.LANCZOS)
    return layer.filter(ImageFilter.GaussianBlur(0.4))


def apply_branding(canvas: Image.Image) -> Image.Image:
    """Restrained studio branding: faint hexagons, orange arc, official logo."""
    canvas = Image.alpha_composite(canvas.convert("RGBA"), _pattern_layer())

    S = 4
    layer = Image.new("RGBA", (W * S, H * S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    # Curved orange corner accent, tucked behind and away from the product.
    r = int(W * S * 0.145)
    d.ellipse([W * S - r, -r, W * S + r, r], fill=ORANGE + (255,))
    layer = layer.resize((W, H), Image.LANCZOS)
    canvas = Image.alpha_composite(canvas, layer)

    if _LOGO is not None:
        target_h = int(H * 0.145)
        lw = max(1, int(_LOGO.width * (target_h / _LOGO.height)))
        logo = _LOGO.resize((lw, target_h), Image.LANCZOS)
        lx = W - lw - int(W * 0.060)
        ly = int(H * 0.080)
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
    only = MODEL_ONLY.get(_CURRENT_NAME["name"])
    sessions = [_sessions[i] for i in only] if only else _sessions
    for session in sessions:
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

    union = _apply_force_regions(raw, union)
    alpha = Image.fromarray(union.astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(0.45))
    cut = raw.copy()
    cut.putalpha(alpha)
    return cut


# Per-image polygons (in source-pixel coordinates) that are always foreground.
# Used when every model drops a real part, e.g. a low carpeted platform base.
SIZE_BOOST = {"U-GMTS-3HL.jpg": 2.2, "U-TG-5200-E2.png": 3.0, "U-AM-BA350.png": 1.8, "U-MS-32060.jpg": 1.8, "wood-treatment-table-adjustable-backrest.png": 2.2, "U-MS-TRACTION-FLEXION.png": 2.6}

# Images where the blobby u2net model swallows background (indexes into _sessions).
MODEL_ONLY: dict[str, list[int]] = {"U-NS-T4R.jpeg": [0], "U-NS-T4.jpg": [0], "U-SCI-SONE03.png": [0], "U-SCI-PRO1.png": [0], "U-NS-T5R.jpg": [0], "U-PB-7FT.jpg": [0], "U-MS-32060.jpg": [0]}

FORCE_REGIONS: dict[str, list[list[tuple[int, int]]]] = {
    "U-PB-7FT.jpg": [[(150, 870), (450, 745), (1130, 1060), (1285, 1195), (1270, 1235), (890, 1600), (150, 900)], [(80, 414), (1000, 818), (1000, 852), (80, 450)]],
    "U-CLIN-7360.png": [[(243, 800), (770, 708), (1104, 1042), (1102, 1078), (468, 1308), (440, 1262), (243, 838)]],
}
_CURRENT_NAME = {"name": ""}


# Source-pixel polygons of background clutter to always remove.
ERASE_REGIONS: dict[str, list[list[tuple[int, int]]]] = {
    # other machine seat back visible behind the console
    "U-NS-T4.jpg": [[(798,120),(876,74),(1070,84),(1062,228),(1032,222),(1008,288),(900,306),(888,444),(840,456),(810,408)]],
    "U-GMTS-3HL.jpg": [[(0, 0), (481, 0), (481, 192), (440, 184), (345, 184),
                        (332, 197), (240, 206), (226, 232), (30, 268), (0, 276)]],
    "U-PB-7FT.jpg": [[(230, 525), (440, 618), (440, 760), (280, 790), (260, 700)],
                     # stool edge rod / top strip directly beneath the front rail
                     [(183, 495), (375, 583), (375, 610), (183, 540)],
                     # stool leg and caster behind the front-left upright
                     [(222, 535), (265, 535), (228, 720), (201, 720), (200, 700)],
                     # dark sliver above the rail's left end cap
                     [(75, 380), (135, 380), (135, 443), (75, 425)],
                     # stool top visible just above the front rail (stays below rear rail)
                     [(130, 380), (385, 380), (385, 410), (450, 432), (450, 585), (130, 447)]],
    "rolling-work-table.jpg": [[(0, 340), (300, 340), (300, 640), (250, 651), (30, 744), (0, 747)],
                               [(0, 767), (300, 802), (310, 1010), (0, 1010)]],
}


def _apply_force_regions(raw: Image.Image, union: np.ndarray) -> np.ndarray:
    polys = FORCE_REGIONS.get(_CURRENT_NAME["name"])
    if polys:
        m = Image.new("L", raw.size, 0)
        d = ImageDraw.Draw(m)
        for p in polys:
            d.polygon(p, fill=255)
        m = m.filter(ImageFilter.GaussianBlur(1.0))
        union = np.maximum(union, np.asarray(m).astype(union.dtype))
    erase = ERASE_REGIONS.get(_CURRENT_NAME["name"])
    if erase:
        m = Image.new("L", raw.size, 0)
        d = ImageDraw.Draw(m)
        for p in erase:
            d.polygon(p, fill=255)
        keep = 1.0 - np.asarray(m).astype(np.float32) / 255.0
        union = (union.astype(np.float32) * keep).astype(union.dtype)
    return union


def process(path: Path) -> bool:
    raw = Image.open(path).convert("RGBA")
    _CURRENT_NAME["name"] = path.name
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
    boost = SIZE_BOOST.get(_CURRENT_NAME["name"])
    max_w = int(W * (0.84 if boost else 0.74))
    max_h = FLOOR_CONTACT_Y - TOP_SAFE + 1
    ratio = min(max_w / cut.width, max_h / cut.height, boost or 1.18)
    new = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))),
                     Image.LANCZOS)
    new = trim_to_visible(new)  # resampling can add transparent padding

    # Gently match the neutral overhead softbox and floor bounce without
    # replacing, redrawing, shifting, or geometrically altering source pixels.
    relit = np.asarray(new).astype(np.float32).copy()
    relit_alpha = relit[..., 3:4]
    relight_y = np.linspace(1.025, 0.995, new.height, dtype=np.float32)[:, None, None]
    relight_x = np.linspace(1.012, 0.995, new.width, dtype=np.float32)[None, :, None]
    floor_bounce = np.clip(
        (np.linspace(0, 1, new.height, dtype=np.float32)[:, None, None] - 0.72) * 0.045,
        0, 0.012)
    relit[..., :3] = np.clip(relit[..., :3] * relight_y * relight_x + 255 * floor_bounce,
                             0, 255)
    relit[..., 3:4] = relit_alpha
    new = Image.fromarray(relit.astype(np.uint8), "RGBA")

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

    # A low-opacity ambient footprint follows the actual lower silhouette. It
    # is softly projected onto the floor and remains distinct from the darker
    # contact shadows; no ellipse or generic machine-wide drop shadow is used.
    ambient = np.zeros((H, W), np.float32)
    ambient_depth = max(8, int(new.height * 0.085))
    ambient_h = max(5, min(18, int(new.height * 0.020)))
    for cx, by in bottoms.items():
        depth = local_bottom_y - by
        if depth > ambient_depth:
            continue
        gx = x + cx
        gy = y + by
        if not (0 <= gx < W):
            continue
        strength = 0.15 * (1.0 - 0.55 * depth / max(1, ambient_depth))
        for i in range(ambient_h):
            ry = gy + i
            spread = 1 + i // 4
            if 0 <= ry < H:
                ambient[ry, max(0, gx - spread):min(W, gx + spread + 1)] = np.maximum(
                    ambient[ry, max(0, gx - spread):min(W, gx + spread + 1)],
                    strength * (1 - i / ambient_h) ** 1.5)

    shadow_rgb = (58, 60, 62, 255)
    ambient_layer = Image.new("RGBA", (W, H), shadow_rgb)
    ambient_layer.putalpha(
        Image.fromarray((ambient * 255).clip(0, 255).astype(np.uint8), "L")
             .filter(ImageFilter.GaussianBlur(max(5.0, new.height * 0.011))))
    canvas = Image.alpha_composite(canvas, ambient_layer)

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
                                   weight * 0.66 * (1 - i / contact_h) ** 1.7)

    shadow_rgb = (45, 47, 49, 255)
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
