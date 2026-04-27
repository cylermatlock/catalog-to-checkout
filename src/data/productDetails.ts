// Extended product detail content. Keyed by product.id from products.ts
// Only products with an entry here get a "View Details" page.

const STORAGE_BASE =
  "https://ltyuaimyfvihhoiluegd.supabase.co/storage/v1/object/public/product-gallery";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SpecGroup {
  title: string;
  rows: { label: string; value: string }[];
}

export interface ProductDetail {
  productId: string;
  slug: string;
  tagline: string;
  overview: string[]; // paragraphs
  highlights: string[]; // bullet list
  gallery: GalleryImage[];
  specGroups: SpecGroup[];
  specSheetUrl?: string;
  sourceUrl: string;
  seo: {
    title: string;
    description: string;
  };
}

export const productDetails: Record<string, ProductDetail> = {
  // NuStep T4R — product id "43"
  "43": {
    productId: "43",
    slug: "nustep-t4r",
    tagline:
      "Compact, total-body recumbent cross trainer for low-impact cardio and rehab.",
    overview: [
      "The NuStep T4r Recumbent Cross Trainer is the entry-level model in the NuStep family. Its compact footprint and easy step-through design make it a popular choice for clinics, senior living facilities, and home use where space is limited.",
      "Smooth, natural stepping motion combined with a 360° swivel seat makes accessing and using the T4r easy for users of virtually any fitness level. The dual-action arm and leg motion delivers a low-impact, total-body cardiovascular workout.",
    ],
    highlights: [
      "Compact 60\" L footprint — fits small spaces",
      "400 lb user weight capacity",
      "360° swivel seat for easy entry/exit",
      "Smooth, natural stepping motion",
      "Quiet hybrid brake system",
      "Battery powered — no outlet required",
      "10-year frame, 3-year parts, 1-year labor warranty",
    ],
    gallery: [
      { src: `${STORAGE_BASE}/t4r/hero.png`, alt: "NuStep T4r Recumbent Cross Trainer — front hero view" },
      { src: `${STORAGE_BASE}/t4r/profile.png`, alt: "NuStep T4r profile / side view" },
      { src: `${STORAGE_BASE}/t4r/console.png`, alt: "NuStep T4r console display" },
      { src: `${STORAGE_BASE}/t4r/seat.png`, alt: "NuStep T4r 360° swivel seat" },
      { src: `${STORAGE_BASE}/t4r/pedals.jpg`, alt: "NuStep T4r pedals" },
      { src: `${STORAGE_BASE}/t4r/handle.jpg`, alt: "NuStep T4r handles" },
      { src: `${STORAGE_BASE}/t4r/dimensions.jpg`, alt: "NuStep T4r dimensions and space requirements" },
    ],
    specGroups: [
      {
        title: "Machine",
        rows: [
          { label: "Footprint", value: '60"L x 27"W x 45"H (152 x 69 x 115 cm)' },
          { label: "Unit weight", value: "210 lbs (95 kg)" },
          { label: "Standard seat width", value: '17" (43 cm)' },
          { label: "Power", value: "Four AA batteries (included)" },
          { label: "Warranty", value: "10-year frame · 3-year parts · 1-year labor" },
        ],
      },
      {
        title: "User Requirements",
        rows: [
          { label: "Height", value: "4'6\" – 6'4\" (137–193 cm)" },
          { label: "Weight", value: "75 – 400 lbs (34–181 kg)" },
          { label: "Age", value: "Recommended 13 and up" },
        ],
      },
    ],
    specSheetUrl:
      "https://www.nustep.com/wp-content/uploads/2026/01/FLYER_026_T4r-hT4r_January.pdf",
    sourceUrl: "https://www.nustep.com/product/t4r/",
    seo: {
      title: "NuStep T4r Recumbent Cross Trainer | GM Therapy",
      description:
        "NuStep T4r entry-level recumbent cross trainer: 400 lb capacity, 360° swivel seat, smooth stepping motion. Compact total-body cardio for rehab & wellness.",
    },
  },

  // NuStep T6PRO — product id "44"
  "44": {
    productId: "44",
    slug: "nustep-t6pro",
    tagline:
      "Premium recumbent cross trainer with reclining swivel seat and StrideLock for advanced rehab.",
    overview: [
      "The NuStep T6PRO is NuStep's flagship recumbent cross trainer, engineered for rehabilitation centers, hospitals, and high-traffic wellness environments. Its 500 lb user capacity, reclining 360° swivel seat, and StrideLock locking handles and pedals provide exceptional stability for users at any ability level.",
      "An updated dual-screen console offers programmable workouts, pace partner, NuStep charts, and Trail Runner virtual environments — keeping users motivated session after session.",
    ],
    highlights: [
      "500 lb user weight capacity",
      "Reclining 360° swivel seat (locks every 45°, reclines an additional 12°)",
      "StrideLock locks handles and pedals for safe transfers",
      "40° hand grip rotation",
      "Updated dual-screen console with programs, charts & Trail Runner",
      "AC-powered with front and rear power jacks",
      "10-year frame, 3-year parts, 1-year labor warranty",
    ],
    gallery: [
      { src: `${STORAGE_BASE}/t6pro/hero.png`, alt: "NuStep T6PRO Recumbent Cross Trainer — hero view" },
      { src: `${STORAGE_BASE}/t6pro/action.jpg`, alt: "User exercising on the NuStep T6PRO" },
      { src: `${STORAGE_BASE}/t6pro/console.png`, alt: "NuStep T6PRO dual-screen console" },
      { src: `${STORAGE_BASE}/t6pro/seat.png`, alt: "NuStep T6PRO reclining 360° swivel seat" },
      { src: `${STORAGE_BASE}/t6pro/handles.png`, alt: "NuStep T6PRO adjustable arm handles" },
      { src: `${STORAGE_BASE}/t6pro/stridelock.png`, alt: "NuStep T6PRO StrideLock feature" },
      { src: `${STORAGE_BASE}/t6pro/dimensions.jpg`, alt: "NuStep T6PRO dimensions and space requirements" },
    ],
    specGroups: [
      {
        title: "Machine",
        rows: [
          { label: "Footprint", value: '73"L x 30"W x 52"H (185 x 76 x 117 cm)' },
          { label: "Unit weight", value: "285 lbs (129 kg)" },
          { label: "Standard seat width", value: '18" (46 cm)' },
          { label: "Power", value: "AC adapter (front and rear power jacks)" },
          { label: "Warranty", value: "10-year frame · 3-year parts · 1-year labor" },
        ],
      },
      {
        title: "User Requirements",
        rows: [
          { label: "Height", value: "4'6\" – 6'7\" (137–200 cm)" },
          { label: "Weight", value: "75 – 500 lbs (34–227 kg)" },
          { label: "Age", value: "Recommended 13 and up" },
        ],
      },
    ],
    specSheetUrl:
      "https://www.nustep.com/wp-content/uploads/2025/03/T6_ALL_Sell_Sheet_FNL_022025.pdf",
    sourceUrl: "https://www.nustep.com/product/t6pro/",
    seo: {
      title: "NuStep T6PRO Recumbent Cross Trainer | GM Therapy",
      description:
        "NuStep T6PRO recumbent cross trainer: 500 lb capacity, reclining 360° swivel seat, StrideLock, dual-screen programmable console. Built for clinical rehab.",
    },
  },

  // NuStep T5XR — product id "45"
  "45": {
    productId: "45",
    slug: "nustep-t5xr",
    tagline:
      "Bariatric-capable recumbent cross trainer with low step-through swivel seat.",
    overview: [
      "The NuStep T5XR Recumbent Cross Trainer is engineered for users who need extra weight capacity without giving up smooth, low-impact total-body motion. With a 600 lb user weight capacity and easy low step-through swivel seat, the T5XR is ideal for bariatric and complex-needs populations.",
      "Adjustable resistance, a quiet hybrid brake system, and adjustable arm and seat positions make the T5XR a flexible workhorse for clinics, senior living, and rehabilitation programs.",
    ],
    highlights: [
      "600 lb user weight capacity",
      "Low step-through 360° swivel seat",
      "Smooth, natural stepping motion",
      "Adjustable resistance levels",
      "40° hand grip rotation",
      "Quiet hybrid brake system",
      "10-year frame, 3-year parts, 1-year labor warranty",
    ],
    gallery: [
      { src: `${STORAGE_BASE}/t5xr/hero.png`, alt: "NuStep T5XR Recumbent Cross Trainer — hero view" },
      { src: `${STORAGE_BASE}/t5xr/action.jpg`, alt: "User exercising on the NuStep T5XR" },
      { src: `${STORAGE_BASE}/t5xr/console.png`, alt: "NuStep T5XR console display" },
      { src: `${STORAGE_BASE}/t5xr/seat.png`, alt: "NuStep T5XR low step-through swivel seat" },
      { src: `${STORAGE_BASE}/t5xr/dimensions.jpg`, alt: "NuStep T5XR dimensions and space requirements" },
    ],
    specGroups: [
      {
        title: "Machine",
        rows: [
          { label: "Footprint", value: '73"L x 30"W x 46"H (185 x 76 x 117 cm)' },
          { label: "Unit weight", value: "295 lbs (134 kg)" },
          { label: "Standard seat width", value: '18" (46 cm)' },
          { label: "Power", value: "12v battery" },
          { label: "Warranty", value: "10-year frame · 3-year parts · 1-year labor" },
        ],
      },
      {
        title: "User Requirements",
        rows: [
          { label: "Height", value: "4'6\" – 6'7\" (137–200 cm)" },
          { label: "Weight", value: "75 – 600 lbs" },
          { label: "Age", value: "Recommended 13 and up" },
        ],
      },
    ],
    sourceUrl: "https://www.nustep.com/product/t5xr/",
    seo: {
      title: "NuStep T5XR Recumbent Cross Trainer | GM Therapy",
      description:
        "NuStep T5XR bariatric recumbent cross trainer: 600 lb capacity, low step-through swivel seat, adjustable resistance. Total-body cardio for every ability.",
    },
  },
};

export const hasDetailPage = (productId: string): boolean =>
  Object.prototype.hasOwnProperty.call(productDetails, productId);
