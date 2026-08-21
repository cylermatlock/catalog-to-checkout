#!/usr/bin/env python3
"""Place untouched pre-owned equipment photographs into one physical studio.

Always process the preserved source photographs, never an earlier composite.
The subject's angle and pixels are retained; only its background is removed.
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
REF = Path("/mnt/user-uploads/Screenshot_2026-08-18_at_12.43.04_PM.png")
REF_FALLBACK = ROOT / "scripts/assets/studio-backdrop-ref.png"
LOGO = ROOT / "src/assets/gm-therapy-logo-new.png"

# Output canvas (matches the reference aspect ratio 1.25)
W, H = 1400, 1120
HORIZON_Y = int(H * 0.65)  # visible wall-to-floor transition
FLOOR_CONTACT_Y = int(H * 0.80)  # bottom-anchor line on the foreground floor
TOP_SAFE = int(H * 0.10)
VISIBLE_ALPHA = 10

_session = new_session("birefnet-general")


# ---------------------------------------------------------------- backdrop ---
def build_backdrop() -> Image.Image:
    # A deliberately visible cyc-wall: warm vertical wall above, horizontal floor
    # below, and a softly curved transition. This is not a flat graphic field.
    yy, xx = np.mgrid[0:H, 0:W]
    wall = np.array([247, 246, 242], np.float32)
    floor_near = np.array([229, 228, 224], np.float32)
    depth = np.clip((yy - HORIZON_Y) / (H - HORIZON_Y), 0, 1)[..., None]
    depth = depth * depth * (3 - 2 * depth)
    arr = wall[None, None, :] * (1 - depth) + floor_near[None, None, :] * depth
    # Gentle studio-light falloff gives the room depth without changing the scene.
    radial = np.sqrt(((xx - W * .51) / W) ** 2 + ((yy - H * .42) / H) ** 2)
    arr -= np.clip(radial - .18, 0, .65)[..., None] * 7
    canvas = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB").convert("RGBA")

    graphics = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(graphics)
    # Subtle background-only architectural lines, safely away from the subject.
    line = (187, 190, 190, 34)
    for inset in (0, 32, 64):
        gd.line([(0, int(H*.25)+inset), (int(W*.15), int(H*.38)+inset),
                 (0, int(H*.51)+inset)], fill=line, width=3)
    # Orange corner graphic in the requested upper-right location.
    orange = (244, 91, 26, 255)
    gd.pieslice((int(W*.76), int(-H*.30), int(W*1.15), int(H*.25)), 0, 180, fill=orange)
    graphics = graphics.filter(ImageFilter.GaussianBlur(.15))
    canvas = Image.alpha_composite(canvas, graphics)

    logo = logo_rgba(int(H * 0.078))
    canvas.alpha_composite(logo, (W - logo.width - int(W*.045), int(H*.045)))
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
def trim_to_visible(image: Image.Image) -> Image.Image:
    """Crop to actual visible pixels, including after resize interpolation."""
    alpha = np.asarray(image)[..., 3]
    visible = alpha > VISIBLE_ALPHA
    if not visible.any():
        raise ValueError("cutout contains no visible equipment pixels")
    ys, xs = np.nonzero(visible)
    return image.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))


def lowest_visible_y(image: Image.Image) -> int:
    alpha = np.asarray(image)[..., 3]
    visible_rows = np.nonzero((alpha > VISIBLE_ALPHA).any(axis=1))[0]
    if visible_rows.size == 0:
        raise ValueError("cutout contains no visible equipment pixels")
    return int(visible_rows[-1])


def process(path: Path) -> bool:
    raw = Image.open(path).convert("RGBA")
    # No component pruning and no rotation: cords, casters, accessories, labels,
    # proportions, and the photographed camera angle must remain untouched.
    cut = remove(raw, session=_session, alpha_matting=True,
                 alpha_matting_foreground_threshold=245,
                 alpha_matting_background_threshold=15,
                 alpha_matting_erode_size=4, post_process_mask=False)


    # Trim rows/cols that are effectively empty so the true lowest contact point
    # (feet / wheels / base) becomes the bottom edge of the cutout.
    try:
        cut = trim_to_visible(cut)
    except ValueError:
        print(f"  ! no subject found: {path.name}")
        return False

    max_w = int(W * 0.82)
    max_h = FLOOR_CONTACT_Y - TOP_SAFE + 1
    ratio = min(max_w / cut.width, max_h / cut.height, 1.45)
    new = cut.resize((max(1, int(cut.width * ratio)), max(1, int(cut.height * ratio))),
                     Image.LANCZOS)
    # Resampling can create fresh transparent edge padding. Remove it before any
    # placement calculation so the file canvas never determines floor contact.
    new = trim_to_visible(new)

    x = (W - new.width) // 2
    local_bottom_y = lowest_visible_y(new)
    # Strict bottom anchor: derive vertical placement only from the cutout's
    # lowest visible pixel. There is no vertical centering or equal padding.
    y = FLOOR_CONTACT_Y - local_bottom_y

    canvas = BASE.copy()

    alpha = np.array(new)[..., 3].astype(np.float32)

    # --- contact points: the very bottom silhouette creates the dark, attached
    # core. A separate compressed silhouette below supplies the shallow studio
    # floor shadow cast by the whole lower chassis.
    foot_rows = max(4, int(new.height * 0.025))
    foot = alpha[-foot_rows:].max(axis=0)              # per-column contact profile
    foot = np.clip(foot / 255.0, 0, 1)

    contact_y = y + local_bottom_y                      # exact contact line

    # Tight, dark core: kept separate from the soft spill so it remains visibly
    # attached to feet, wheels, and bases after compositing.
    core = np.zeros((H, W), np.float32)
    core_h = max(2, min(5, int(new.height * 0.006)))
    for i in range(core_h):
        t = i / core_h
        row_y = contact_y + i
        if 0 <= row_y < H:
            core[row_y, x:x + new.width] = np.maximum(
                core[row_y, x:x + new.width], foot * (1 - t) ** 1.7 * 0.58)

    # Compress the lower portion of the actual equipment silhouette onto the
    # floor. Unlike an ellipse, this follows the equipment's width and mass, and
    # begins behind the contact points so it cannot appear detached.
    lower_start = int(new.height * 0.72)
    lower_alpha = Image.fromarray(alpha[lower_start:].astype(np.uint8), "L")
    spill_h = max(12, min(44, int(new.height * 0.055)))
    spill_w = max(2, int(new.width * 0.98))
    footprint = lower_alpha.resize((spill_w, spill_h), Image.LANCZOS)
    footprint = footprint.filter(ImageFilter.GaussianBlur(max(1.8, spill_h * 0.10)))
    # Fade the projected shadow quickly toward the viewer.
    fp = np.array(footprint).astype(np.float32) / 255.0
    fp *= np.linspace(0.28, 0.015, spill_h, dtype=np.float32)[:, None]
    spill_mask = Image.new("L", (W, H), 0)
    spill_x = x + (new.width - spill_w) // 2 + max(1, int(new.width * 0.008))
    spill_y = contact_y
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

    # Automatic grounding validation. A render cannot be written if the actual
    # visible equipment edge is more than two pixels above the floor contact line.
    rendered_bottom_y = y + lowest_visible_y(new)
    gap = FLOOR_CONTACT_Y - rendered_bottom_y
    if gap < 0 or gap > 2:
        raise RuntimeError(
            f"{path.name}: invalid floor gap {gap}px "
            f"(equipment={rendered_bottom_y}, floor={FLOOR_CONTACT_Y})"
        )
    print(f"  grounded: equipment_y={rendered_bottom_y}, floor_y={FLOOR_CONTACT_Y}, gap={gap}px",
          flush=True)

    out = DEST / path.name
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
