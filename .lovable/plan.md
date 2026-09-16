# Rebuild Pre-Owned Equipment Images

## Changes
- Regenerate all 38 pre-owned product images from the untouched original photographs at 1536×1152 landscape.
- Preserve the photographed equipment, labels, wear, accessories, proportions, camera angle, and complete silhouette without redrawing or regenerating any product detail.
- Replace only the original surroundings with a bright white-to-light-gray seamless studio, a visible horizontal floor plane, soft overhead lighting, and a line-free wall-to-floor transition.
- Place each cutout upright and large in frame with natural negative space; align its lowest supports to the floor and validate a zero-pixel bottom gap.
- Render compact dark contact shadows at detected wheels, feet, bases, and stabilizers, plus a restrained soft ambient shadow derived from the actual lower silhouette—never a generic oval.
- Add the official transparent GM Therapy Solutions logo, a subtle wall hex pattern, and the curved #F26722 corner accent in the upper right.
- Apply only gentle, non-destructive color and light matching to the photographed pixels.
- Produce a review sheet and automated checks covering dimensions, floor placement, and branding across every result.

## Technical details
- Update only the existing pre-owned image-processing pipeline and generated pre-owned image assets.
- Keep the multi-model segmentation union used to protect thin legs, wheels, rails, platforms, and detached accessories.
- Detect support regions from the lower silhouette and model perspective conservatively; do not rotate or distort the original equipment geometry.
- Preserve catalog data and all product-page behavior unchanged.
