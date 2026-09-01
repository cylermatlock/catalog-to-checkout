# Ground Pre-Owned Equipment Images

## Changes
- Keep every existing equipment cutout, scale, horizontal position, studio backdrop, and branding unchanged.
- Continue bottom-anchoring each cutout so its lowest visible wheel, foot, or base sits directly on the established floor line.
- Remove the broad perspective footprint and long spill/drop shadow.
- Render only compact, softly blurred contact shadows immediately beneath detected support points.
- Regenerate all 38 pre-owned product images and produce a review sheet to verify floor contact.

## Technical details
- Modify only the shadow section of the existing image-processing script.
- Preserve the current segmentation and compositing logic.
- Retain the zero-to-two-pixel floor-gap validation for every output.
