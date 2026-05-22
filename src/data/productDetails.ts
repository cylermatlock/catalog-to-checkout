// Extended product detail content. Keyed by product.id from products.ts
// Only products with an entry here get a "View Details" page.

const STORAGE_BASE =
  "https://ltyuaimyfvihhoiluegd.supabase.co/storage/v1/object/public/product-gallery";

const IMG = (id: string) => `/assets/products/biodex/${id}.png`;
const SOURCE = (slug: string) => `https://smti.co/products/${slug}`;

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
  specSheetTitle?: string;
  brochureTitle?: string;
  brochureUrl?: string;
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
  // Spirit CT800 Treadmill — product id "49"
  "49": {
    productId: "49",
    slug: "spirit-ct800",
    tagline: "Full-commercial treadmill with 4.0 HP motor, 22\"x60\" deck, and bright LED console for clinics and rehab.",
    overview: [
      "The Spirit CT800 is a full-commercial treadmill engineered for high-traffic clinical and rehabilitation environments. A 4.0 HP DC drive motor, 3\" rollers, and 22\" x 60\" multi-ply running belt deliver smooth, dependable performance for users up to 450 lbs.",
      "An easy-to-read four-window white LED console puts speed, incline, heart rate, and program data front and center. Direct speed and incline buttons keep workouts efficient, while contact and Bluetooth heart rate monitoring help users train in the right zone.",
    ],
    highlights: [
      "Easy-to-read bright white multi-window LED console",
      "Direct speed and incline buttons save time",
      "Contact and wireless heart rate options (chest strap sold separately)",
      "Maintenance-free deck system provides hassle-free use",
      "Spacious 22\" x 60\" multi-ply commercial belt",
    ],
    gallery: [
      { src: "/assets/products/spirit/ct800/hero.png", alt: "Spirit CT800 Treadmill — hero front view" },
      { src: "/assets/products/spirit/ct800/view-1.png", alt: "Spirit CT800 Treadmill — detail view 1" },
      { src: "/assets/products/spirit/ct800/view-2.png", alt: "Spirit CT800 Treadmill — detail view 2" },
      { src: "/assets/products/spirit/ct800/view-3.png", alt: "Spirit CT800 Treadmill — detail view 3" },
      { src: "/assets/products/spirit/ct800/view-4.png", alt: "Spirit CT800 Treadmill — detail view 4" },
      { src: "/assets/products/spirit/ct800/view-5.png", alt: "Spirit CT800 Treadmill — detail view 5" },
      { src: "/assets/products/spirit/ct800/feature-1.png", alt: "Spirit CT800 Treadmill — key feature shot 1" },
      { src: "/assets/products/spirit/ct800/feature-2.png", alt: "Spirit CT800 Treadmill — key feature shot 2" },
      { src: "/assets/products/spirit/ct800/feature-3.png", alt: "Spirit CT800 Treadmill — key feature shot 3" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "Power", value: "120V/15AMP Cord/Outlet" },
          { label: "Motor", value: "4.0 HP DC Drive" },
          { label: "Rollers", value: "3\"" },
          { label: "•", value: "0.5 - 12 mph (0.1 mph increments) Speed Range" },
          { label: "•", value: "0 - 15 (0.5 increments) Levels of Electronic Incline" },
        ],
      },
      {
        title: "Console",
        rows: [
          { label: "Display", value: "4 White LED Windows" },
          { label: "Feedback", value: "Speed, Incline, Distance, Pace, Calories, METS, Pulse, Watts, Time Elapsed, Time Remaining" },
          { label: "Programs", value: "Manual, Hill, Fat burn, Cardio, Interval, 2 Heart Rate, Custom, HIIT, 5K, 10K, Fitness Tests (Gerkin, Army, Navy, AirForce, Marines corps, Coast Guard, PEB)" },
          { label: "•", value: "Bluetooth 4.0 (FTMS)" },
          { label: "•", value: "USB Charging Port" },
          { label: "•", value: "CSAFE" },
          { label: "Direct Speed Buttons", value: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 mph" },
          { label: "Direct Incline Buttons", value: "0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15 incline" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "85” L x 35.8” W x 60.6” H" },
          { label: "•", value: "Set-Up Width with Optional Extended Handrails: 36.6”" },
          { label: "Box Dimension", value: "88.6” L x 37.7” W x 21.3” H" },
          { label: "Item Weight", value: "379 lb" },
          { label: "Box Weight", value: "423 lb" },
          { label: "Max User Weight Capacity", value: "450 lb" },
        ],
      },
      {
        title: "Frame/Deck",
        rows: [
          { label: "Belt", value: "2-Ply, Pre-Lubed (4,000 Hours)" },
          { label: "Step-Up Height", value: "7.87\"" },
          { label: "Running Surface", value: "22\" x 60\"" },
          { label: "Running Deck Thickness", value: "1\"" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Hand Pulse Sensors" },
          { label: "•", value: "Bluetooth Heart Rate Receiver (Chest Strap Sold Separately)" },
          { label: "•", value: "Cooling Fan" },
          { label: "•", value: "Accessory Trays" },
          { label: "•", value: "Cup Holders" },
          { label: "•", value: "Optional Extendable Handrails (Sold Separately)" },
          { label: "•", value: "Transportation Wheels" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame · 5 Years Motor · 5 Years Deck · 5 Years Parts · 2 Years Labor · 6 Months Wear Items · Lifetime Motor · Lifetime Deck · 10 Years Parts · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    specSheetUrl: "https://drive.google.com/file/d/1ShAUmWwrfRBKozBc7HO6PzpVwhouv1kn/view",
    sourceUrl: "https://www.spiritfitness.com/commercial/ct800",
    seo: {
      title: "Spirit CT800 Commercial Treadmill | GM Therapy",
      description: "Spirit CT800 commercial treadmill: 4.0 HP, 22\"x60\" deck, 0.5–12 mph, 0–15% incline, 450 lb capacity, optional medical handrails. Built for clinical use.",
    },
  },

  // Spirit CR800 Recumbent Bike — product id "50"
  "50": {
    productId: "50",
    slug: "spirit-cr800",
    tagline: "Self-generating recumbent bike with step-through frame, 30 lb flywheel, and 40 resistance levels.",
    overview: [
      "The Spirit CR800 Recumbent Bike pairs a step-through walk-in frame with a self-generating power system, so it can be placed anywhere — no outlet required. A 30 lb flywheel and 40 levels of induction resistance deliver a smooth, consistent pedal stroke for cardio and rehab sessions.",
      "Oversized fast-latching pedals, a high-durometer foam seat, and contact + Bluetooth heart rate monitoring round out a rehab-friendly bike rated to 450 lbs.",
    ],
    highlights: [
      "Generator power system allows for cordless operation",
      "Contact and wireless heart rate monitoring",
      "30 lb flywheel with 40 levels of resistance",
      "Oversized foot pedals with fast-latching system",
      "Adjustable cooling fan and dual storage trays",
    ],
    gallery: [
      { src: "/assets/products/spirit/cr800/hero.jpg", alt: "Spirit CR800 Recumbent Bike — hero front view" },
      { src: "/assets/products/spirit/cr800/view-1.jpg", alt: "Spirit CR800 Recumbent Bike — detail view 1" },
      { src: "/assets/products/spirit/cr800/view-2.jpg", alt: "Spirit CR800 Recumbent Bike — detail view 2" },
      { src: "/assets/products/spirit/cr800/view-3.jpg", alt: "Spirit CR800 Recumbent Bike — detail view 3" },
      { src: "/assets/products/spirit/cr800/view-4.jpg", alt: "Spirit CR800 Recumbent Bike — detail view 4" },
      { src: "/assets/products/spirit/cr800/view-5.jpg", alt: "Spirit CR800 Recumbent Bike — detail view 5" },
      { src: "/assets/products/spirit/cr800/feature-1.png", alt: "Spirit CR800 Recumbent Bike — key feature shot 1" },
      { src: "/assets/products/spirit/cr800/feature-2.png", alt: "Spirit CR800 Recumbent Bike — key feature shot 2" },
      { src: "/assets/products/spirit/cr800/feature-3.png", alt: "Spirit CR800 Recumbent Bike — key feature shot 3" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "Power", value: "Self-Generating (No External Power Required)" },
          { label: "Drive System", value: "Belt" },
          { label: "Flywheel", value: "30 lb" },
          { label: "Resistance", value: "Induction Brake, 40 Levels" },
        ],
      },
      {
        title: "Console",
        rows: [
          { label: "Display", value: "4 White LED Windows" },
          { label: "Feedback", value: "Distance, Speed, Calories, Watts, Pulse, METs, Time Elapsed, Time Remaining, RPM, Level, Program Profile" },
          { label: "Programs", value: "Manual, Hill, Fat Burn, Cardio, HIIT, Interval, Heart Rate (2), Custom, Fit Test, Constant Power" },
          { label: "•", value: "Bluetooth 4.0 (FTMS)" },
          { label: "•", value: "USB Charging Port" },
          { label: "•", value: "CSAFE" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "59.4” L x 29.1” W x 50.8” H" },
          { label: "Box Dimension", value: "62.4” L x 22” W x 30.7” H" },
          { label: "Recommended User Inseam", value: "29.3\" - 39.4\"" },
          { label: "Item Weight", value: "163 lb" },
          { label: "Box Weight", value: "183 lb" },
          { label: "Max User Weight Capacity", value: "450 lb" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Q-Factor", value: "7.9”" },
          { label: "Stride Length", value: "13”" },
          { label: "Pedal", value: "Oversized with Fast Latching System" },
          { label: "Seat", value: "High Durometer Foam Seat and Back Pad" },
          { label: "Seat Adjustments", value: "Fore/Aft" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Hand Pulse Sensors" },
          { label: "•", value: "Bluetooth &amp; 5KHz Heart Rate Receiver (Chest Strap Sold Separately)" },
          { label: "•", value: "Cooling Fan" },
          { label: "•", value: "Dual Storage Tray" },
          { label: "•", value: "Transportation Wheels" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame · 5 Years Brake · 5 Years Parts · 2 Years Labor · 6 Months Wear Items · 10 Years Brake · 10 Years Parts · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    specSheetUrl: "https://drive.google.com/file/d/1ZY3rlC5UNOp8Pyguvkzlqm_X9HaPS12c/view",
    sourceUrl: "https://www.spiritfitness.com/commercial/cr800",
    seo: {
      title: "Spirit CR800 Self-Generating Recumbent Bike | GM Therapy",
      description: "Spirit CR800: cordless self-generating recumbent bike, 30 lb flywheel, 40 resistance levels, walk-in frame, 450 lb capacity. Ideal for clinical cardio.",
    },
  },

  // Spirit CE800 Elliptical — product id "51"
  "51": {
    productId: "51",
    slug: "spirit-ce800",
    tagline: "Self-generating front-drive elliptical with smooth 20\" stride and dual-rail track.",
    overview: [
      "The Spirit CE800 Elliptical features a dual rail track system and front-drive design that produces a natural, comfortable 20\" stride. A self-generating drive system means it requires no external power source — perfect for flexible facility layouts.",
      "A 30 lb flywheel and 40 levels of resistance, narrow 3.8\" pedal spacing, and 2° pedal inversion angle deliver an ergonomic feel suitable for cardio conditioning and rehab. 450 lb user capacity.",
    ],
    highlights: [
      "Generator drive system requires no external power source",
      "Contact and wireless heart rate monitoring",
      "30 lb flywheel and 40 levels of resistance",
      "Dual rail track system and smooth 20” stride",
      "Adjustable cooling fan, USB charging port, and reading rack",
    ],
    gallery: [
      { src: "/assets/products/spirit/ce800/hero.png", alt: "Spirit CE800 Elliptical — hero front view" },
      { src: "/assets/products/spirit/ce800/view-1.png", alt: "Spirit CE800 Elliptical — detail view 1" },
      { src: "/assets/products/spirit/ce800/view-2.png", alt: "Spirit CE800 Elliptical — detail view 2" },
      { src: "/assets/products/spirit/ce800/view-3.png", alt: "Spirit CE800 Elliptical — detail view 3" },
      { src: "/assets/products/spirit/ce800/view-4.png", alt: "Spirit CE800 Elliptical — detail view 4" },
      { src: "/assets/products/spirit/ce800/view-5.png", alt: "Spirit CE800 Elliptical — detail view 5" },
      { src: "/assets/products/spirit/ce800/feature-1.png", alt: "Spirit CE800 Elliptical — key feature shot 1" },
      { src: "/assets/products/spirit/ce800/feature-2.png", alt: "Spirit CE800 Elliptical — key feature shot 2" },
      { src: "/assets/products/spirit/ce800/feature-3.png", alt: "Spirit CE800 Elliptical — key feature shot 3" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "Power", value: "Self-Generating (No External Power Source Required)" },
          { label: "Drive System", value: "Dual Track Front Drive" },
          { label: "Flywheel", value: "30 lb" },
          { label: "Resistance", value: "40 Levels" },
        ],
      },
      {
        title: "Console",
        rows: [
          { label: "Display", value: "4 White LED Windows" },
          { label: "Feedback", value: "Distance, Speed, Calories, Watts, Pulse, METs, Time Elapsed, Time Remaining, RPM, Level, Program Profile" },
          { label: "Programs", value: "Manual, 5 Preset, Custom, Fitness Test, Heart Rate Control, Constant Power, METs Readout" },
          { label: "•", value: "Bluetooth" },
          { label: "•", value: "USB Charging Port" },
          { label: "•", value: "CSAFE" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "78” L x 24.2” W x 70.1” H" },
          { label: "Box Dimension", value: "65.6” L x 22.4” W x 32.8” H" },
          { label: "Item Weight", value: "247 lb" },
          { label: "Box Weight", value: "276 lb" },
          { label: "Max User Weight Capacity", value: "450 lb" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Q-Factor", value: "Narrow 3.8” Pedal Spacing" },
          { label: "•", value: "2-Degree Pedal Inversion Angle" },
          { label: "Stride Length", value: "20”" },
          { label: "Step-Up Height", value: "13.5”" },
          { label: "Pedal", value: "Cushioned, Non-Adjustable, 2-degree Inversion" },
          { label: "Handlebars", value: "TPR Coated" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Bluetooth &amp; 5KHz Heart Rate Receiver (Chest Strap Sold Separately)" },
          { label: "•", value: "Hand Pulse Sensors" },
          { label: "•", value: "Cooling Fan" },
          { label: "•", value: "Water Bottle Holder" },
          { label: "•", value: "Reading/Accessory Rack" },
          { label: "•", value: "Transportation Wheels" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame · 5 Years Brake · 5 Years Parts · 2 Years Labor · 6 Months Wear Items · 10 Years Brake · 10 Years Parts · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    specSheetUrl: "https://drive.google.com/file/d/10c3w4ItFdLpSMwrlNeKDL1ngonlH-mNA/view",
    sourceUrl: "https://www.spiritfitness.com/commercial/ce800",
    seo: {
      title: "Spirit CE800 Self-Generating Elliptical | GM Therapy",
      description: "Spirit CE800 commercial elliptical: 20\" stride, 30 lb flywheel, 40 levels, narrow Q-factor, self-generating, 450 lb capacity. Built for rehab & wellness.",
    },
  },

  // Spirit CU800 Upright Bike — product id "158"
  "158": {
    productId: "158",
    slug: "spirit-cu800",
    tagline: "Self-generating upright bike with 30 lb flywheel and 40 resistance levels for clinical conditioning.",
    overview: [
      "The Spirit CU800 Upright Bike delivers a smooth, road-bike feel with a 30 lb flywheel and 40 levels of induction resistance. The self-generating drive system eliminates the need for a power outlet.",
      "A four-window white LED console reports speed, watts, RPM, calories, heart rate, and time. Bluetooth + 5 KHz heart rate receiver, hand pulse sensors, and a 450 lb weight capacity make it equally at home in clinics and wellness centers.",
    ],
    highlights: [
      "Generator power system allows for cordless operation",
      "Contact and wireless heart rate monitoring",
      "30 lb flywheel with 40 levels of resistance",
      "Large ergonomic seat for extra comfort and customizable fit",
      "Adjustable cooling fan and dual storage trays",
    ],
    gallery: [
      { src: "/assets/products/spirit/cu800/hero.jpg", alt: "Spirit CU800 Upright Bike — hero front view" },
      { src: "/assets/products/spirit/cu800/view-1.jpg", alt: "Spirit CU800 Upright Bike — detail view 1" },
      { src: "/assets/products/spirit/cu800/view-2.jpg", alt: "Spirit CU800 Upright Bike — detail view 2" },
      { src: "/assets/products/spirit/cu800/view-3.jpg", alt: "Spirit CU800 Upright Bike — detail view 3" },
      { src: "/assets/products/spirit/cu800/view-4.jpg", alt: "Spirit CU800 Upright Bike — detail view 4" },
      { src: "/assets/products/spirit/cu800/view-5.jpg", alt: "Spirit CU800 Upright Bike — detail view 5" },
      { src: "/assets/products/spirit/cu800/feature-1.png", alt: "Spirit CU800 Upright Bike — key feature shot 1" },
      { src: "/assets/products/spirit/cu800/feature-2.png", alt: "Spirit CU800 Upright Bike — key feature shot 2" },
      { src: "/assets/products/spirit/cu800/feature-3.png", alt: "Spirit CU800 Upright Bike — key feature shot 3" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "Power", value: "Self-Generating (No External Power Required)" },
          { label: "Drive System", value: "Belt" },
          { label: "Flywheel", value: "30 lb" },
          { label: "Resistance", value: "Induction Brake, 40 Levels" },
        ],
      },
      {
        title: "Console",
        rows: [
          { label: "Display", value: "4 White LED Windows" },
          { label: "•", value: "Adjustable Console Angle" },
          { label: "Feedback", value: "Distance, Speed, Calories, Watts, Pulse, METs, Time Elapsed, Time Remaining, RPM, Level, Program Profile" },
          { label: "Programs", value: "Manual, Hill, Fat Burn, Cardio, HIIT, Interval, Heart Rate (2), Custom, Fit Test, Constant Power" },
          { label: "•", value: "Bluetooth 4.0 (FTMS)" },
          { label: "•", value: "USB Charging Port" },
          { label: "•", value: "CSAFE" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "48.4” L x 25.6” W x 57.7” H" },
          { label: "Box Dimension", value: "51.6” L x 21.7” W x 30.7” H" },
          { label: "Item Weight", value: "126.5 lb" },
          { label: "Box Weight", value: "145 lb" },
          { label: "Max User Weight Capacity", value: "450 lb" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Q-Factor", value: "9.5”" },
          { label: "Stride Length", value: "13”" },
          { label: "Pedal", value: "Oversized with Fast Latching System" },
          { label: "Seat", value: "High Density Foam" },
          { label: "Seat Adjustments", value: "Fore/Aft/Up/Down" },
          { label: "•", value: "Multi-Position Handlebars" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Hand Pulse Sensors" },
          { label: "•", value: "Bluetooth &amp; 5KHz Heart Rate Receiver (Chest Strap Sold Separately)" },
          { label: "•", value: "Cooling Fan" },
          { label: "•", value: "Dual Storage Tray" },
          { label: "•", value: "Transportation Wheels" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame · 5 Years Brake · 5 Years Parts · 2 Years Labor · 6 Months Wear Items · 10 Years Brake · 10 Years Parts · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    specSheetUrl: "https://drive.google.com/file/d/1ShAUmWwrfRBKozBc7HO6PzpVwhouv1kn/view",
    sourceUrl: "https://www.spiritfitness.com/commercial/cu800",
    seo: {
      title: "Spirit CU800 Self-Generating Upright Bike | GM Therapy",
      description: "Spirit CU800 upright bike: cordless self-generating, 30 lb flywheel, 40 resistance levels, Bluetooth heart rate, 450 lb capacity. Clinical-grade cardio.",
    },
  },

  // Spirit CR900 Full Commercial Recumbent Bike — product id "272"
  "272": {
    productId: "272",
    slug: "spirit-cr900",
    tagline: "Full-commercial recumbent bike with step-through design, infinite seat adjustment, and heavy-duty drive.",
    overview: [
      "Built to last, the Spirit CR900 Recumbent Bike takes workout ease and comfort to a new level. Its step-through design makes it easy for all users to enter and exit the bike, and infinite seat adjustments along the rail accommodate users of nearly any size.",
      "A poly-V belt with spring-loaded idler reduces belt tension, while a 1\" crank axle and heavy-duty roller bearings deliver a smooth, reliable pedal stroke for years of clinical and commercial use.",
    ],
    highlights: [
      "Generator power system allows for cordless operation",
      "Contact and wireless heart rate monitoring capabilities",
      "1” crank axle and heavy duty roller bearings for reliability",
      "Convenient step-through design with infinite seat adjustments",
      "Poly-V belt and spring loaded idler for reduced belt tension",
    ],
    gallery: [
      { src: "/assets/products/spirit/cr900/hero.jpg", alt: "Spirit CR900 Full Commercial Recumbent Bike — hero front view" },
      { src: "/assets/products/spirit/cr900/view-1.jpg", alt: "Spirit CR900 Full Commercial Recumbent Bike — detail view 1" },
      { src: "/assets/products/spirit/cr900/view-2.jpg", alt: "Spirit CR900 Full Commercial Recumbent Bike — detail view 2" },
      { src: "/assets/products/spirit/cr900/view-3.jpg", alt: "Spirit CR900 Full Commercial Recumbent Bike — detail view 3" },
      { src: "/assets/products/spirit/cr900/view-4.jpg", alt: "Spirit CR900 Full Commercial Recumbent Bike — detail view 4" },
      { src: "/assets/products/spirit/cr900/view-5.jpg", alt: "Spirit CR900 Full Commercial Recumbent Bike — detail view 5" },
      { src: "/assets/products/spirit/cr900/feature-1.png", alt: "Spirit CR900 Full Commercial Recumbent Bike — key feature shot 1" },
      { src: "/assets/products/spirit/cr900/feature-2.png", alt: "Spirit CR900 Full Commercial Recumbent Bike — key feature shot 2" },
      { src: "/assets/products/spirit/cr900/feature-3.png", alt: "Spirit CR900 Full Commercial Recumbent Bike — key feature shot 3" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "Power", value: "Self-Generating (No External Power Required)" },
          { label: "Drive System", value: "8 Groove Poly-V Belt with Spring Loaded Idler" },
          { label: "Flywheel", value: "30 lb" },
          { label: "Resistance", value: "Induction Brake, 40 Levels" },
        ],
      },
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Ultra Bright White LED" },
          { label: "Feedback", value: "Watts, METS, Time Elapsed, Time Remaining, Calories, Calories/Hour, Distance, Speed, Laps,  Heart Rate, RPM, Level" },
          { label: "Programs", value: "Manual, Hill, Fat Burn, Heart Rate, HIIT, Fit Test, Cardio, Interval, Watts" },
          { label: "•", value: "CSAFE" },
          { label: "•", value: "TV Power Port" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Q-Factor", value: "7.7”" },
          { label: "Stride Length", value: "13.4”" },
          { label: "Pedal", value: "Ratcheting with 2-degree Inversion" },
          { label: "Seat", value: "High Density Foam" },
          { label: "Seat Adjustments", value: "Fore/Aft" },
          { label: "•", value: "Fixed Handlebars" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Hand Pulse Sensors" },
          { label: "•", value: "5KHz Heart Rate Receiver (Chest Strap Sold Separately)" },
          { label: "•", value: "Cooling Fan" },
          { label: "•", value: "Dual Storage Tray" },
          { label: "•", value: "Transportation Wheels" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "67\" L x 29\" W x 49\" H" },
          { label: "Shipping Dimension", value: "64\" L x 18\" W x 31\" H" },
          { label: "Item Weight", value: "142.2 lb" },
          { label: "Shipping Weight", value: "165.3 lb" },
          { label: "Max User Weight Capacity", value: "450 lb" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame · 5 Years Brake · 3 Years Parts · 3 Years Labor · 6 Months Wear Items · Lifetime Frame · 5 Years Parts · 2 Years Labor · 10 Years Parts · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    specSheetUrl: "https://drive.google.com/file/d/13ubNO1B5Ot1XHgh3BfoJIJFioj-9fdD7/view",
    sourceUrl: "https://www.spiritfitness.com/commercial/cr900",
    seo: {
      title: "Spirit CR900 Full-Commercial Recumbent Bike | GM Therapy",
      description: "Spirit CR900 recumbent bike: step-through frame, infinite seat adjustment, 1\" crank axle, heavy-duty bearings. Built for cardiac, ortho, and general rehab.",
    },
  },

  // Spirit Dual Leg Ext/Curl — product id "53"
  "53": {
    productId: "53",
    slug: "spirit-leg-ext-curl",
    tagline: "Dual-function selectorized leg extension and seated leg curl in one footprint.",
    overview: [
      "The Spirit Duals Leg Extension / Leg Curl combines two essential lower-body exercises into a single station. A 225 lb selectorized weight stack, range-of-motion adjustments, and dual roller pads target the quadriceps and hamstrings safely and efficiently.",
      "Built on a heavy-gauge steel frame with a high-quality powder coat finish, the CSD-LELC is engineered for the demands of commercial gyms, clinics, and rehab facilities.",
    ],
    highlights: [
      "Challenge opposing muscle groups: quadriceps and hamstrings",
      "Exercises can be switched and adjusted without leaving seated position",
      "Axis of rotation is optimized for proper feel",
      "Integrated rep counter and built-in top cap storage",
    ],
    gallery: [
      { src: "/assets/products/spirit/leg-ext-curl/hero.webp", alt: "Spirit Dual Leg Ext/Curl — hero front view" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "•", value: "225 lb Weight Stack" },
          { label: "•", value: "5 lb Increment Weight" },
          { label: "•", value: "30 lb Top Plate (2 x 15 lb Plates)" },
          { label: "•", value: "13 x 15 lb Plates" },
          { label: "Pulley Ratio", value: "0.7 x Ext Weight, 0.5 x Curl Weight" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "•", value: "LOOS USA Cables" },
          { label: "•", value: "Heavy Gauge Steel Frame" },
          { label: "•", value: "Low Profile Design" },
          { label: "•", value: "High-Quality Electrostatic Powder Coat Finish" },
          { label: "•", value: "Fully Enclosed Weight Stack" },
          { label: "•", value: "Steel Feet with Rubber Foot Covers" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Rep/Time Counter (2 C Batteries required, not included)" },
          { label: "•", value: "Start/Finish Workout Diagrams" },
          { label: "•", value: "Storage Trays (Top of Weight Tower)" },
          { label: "•", value: "Easy-Adjust Seat Back" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "55.4\" L x 54\" W x 62.2\" H" },
          { label: "Assembled Unit Weight", value: "625.2 lb" },
          { label: "Recommended User Height", value: "4’11” to 6’8”" },
          { label: "Max User Weight Capacity", value: "360 lb" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame · 5 Years Bushings, Bearings, Shocks, Pulleys, Guide Rods · 1 Year Paint and Finishes, Cables, Grips, Counter/Timer, Pull-Pin Components, Rail Wheels, Attachments, All Other Parts Not Mentioned · 6 Months Upholstery · 1 Year Labor · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    sourceUrl: "https://www.spiritfitness.com/commercial/duals-leg-ext-curl",
    seo: {
      title: "Spirit Dual Leg Extension / Leg Curl | GM Therapy",
      description: "Spirit CSD-LELC dual selectorized leg extension and leg curl: 225 lb stack, ROM adjustments, commercial-grade frame. Two essential lower-body exercises in one.",
    },
  },

  // Spirit Dual Leg Press/Calf — product id "54"
  "54": {
    productId: "54",
    slug: "spirit-leg-press-calf",
    tagline: "Heavy-duty dual leg press and calf extension on a single commercial frame.",
    overview: [
      "The Spirit Duals Leg Press / Calf Extension delivers two foundational lower-body movements in one space-saving station. A 220 lb weight stack with selectorized resistance and a 700 lb user capacity make it suitable for athletic training, strength rehab, and general conditioning.",
      "Constructed from durable heavy-gauge steel with a premium powder coat finish, the CSF-DLPC is built for the rigors of commercial and clinical use.",
    ],
    highlights: [
      "Adjustable footplate and back pad angle",
      "Integrated rep counter with built-in top cap storage",
      "Low profile, modern design",
      "Premium LOOS brand USA cables",
      "Footplate ergonomically constructed for both movements",
    ],
    gallery: [
      { src: "/assets/products/spirit/leg-press-calf/hero.webp", alt: "Spirit Dual Leg Press/Calf — hero front view" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "•", value: "220 lb Weight Stack" },
          { label: "•", value: "5 lb Increment Weight" },
          { label: "•", value: "10 lb Top Plate" },
          { label: "•", value: "14 x 15 lb Plates" },
          { label: "Pulley Ratio", value: "1.2 x Weight" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "•", value: "LOOS USA Cables" },
          { label: "•", value: "Heavy Gauge Steel Frame" },
          { label: "•", value: "Low Profile Design" },
          { label: "•", value: "High-Quality Electrostatic Powder Coat Finish" },
          { label: "•", value: "Fully Enclosed Weight Stack" },
          { label: "•", value: "Steel Feet with Rubber Foot Covers" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Rep/Time Counter (2 C Batteries required, not included)" },
          { label: "•", value: "Start/Finish Workout Diagrams" },
          { label: "•", value: "Storage Trays (Top of Weight Tower)" },
          { label: "•", value: "Easy-Adjust Seat Angle" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "76.37\" L x 44.7\" W x 62.2\" H" },
          { label: "Assembled Unit Weight", value: "585.1 lb" },
          { label: "Recommended User Height", value: "4’11” to 6’8”" },
          { label: "Max Weight Capacity", value: "360 lb" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame · 5 Years Bushings, Bearings, Shocks, Pulleys, Guide Rods · 1 Year Paint and Finishes, Cables, Grips, Counter/Timer, Pull-Pin Components, Rail Wheels, Attachments, All Other Parts Not Mentioned · 6 Months Upholstery · 1 Year Labor · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    sourceUrl: "https://www.spiritfitness.com/commercial/duals-leg-press-calf-ext",
    seo: {
      title: "Spirit Dual Leg Press / Calf Extension | GM Therapy",
      description: "Spirit CSF-DLPC dual leg press and calf extension: 220 lb stack, 700 lb user capacity, heavy-gauge steel frame. Built for commercial strength training.",
    },
  },

  // Spirit CSF-FUNT Dual Functional Trainer — product id "271"
  "271": {
    productId: "271",
    slug: "spirit-functional-trainer",
    tagline: "All-in-one functional trainer with dual 170 lb stacks, simple pulley adjustment, and 200+ exercises.",
    overview: [
      "The Spirit CSF-FUNT Functional Trainer is an all-in-one training system that delivers variety, convenience, and results while maximizing your space. The heavy-gauge steel frame ensures solid performance year after year, and weight stacks are fully enclosed to reduce the risk of injury.",
      "Dual 170 lb weight stacks adjust in 10 lb increments via magnetic pins. A 2:1 ratio gives an easy starting weight and extended cable travel that accommodates a wide range of users and exercises. The simple trigger pulley height adjustment makes exercise changes fast and easy.",
    ],
    highlights: [
      "Ultimate exercise variety in one machine",
      "Fully enclosed dual 170 lb weight stacks",
      "Durable heavy-gauge steel frame",
      "Premium LOOS USA Cables",
      "Simple trigger pulley height adjustment",
    ],
    gallery: [
      { src: "/assets/products/spirit/functional-trainer/hero.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — hero front view" },
      { src: "/assets/products/spirit/functional-trainer/view-1.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — detail view 1" },
      { src: "/assets/products/spirit/functional-trainer/view-2.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — detail view 2" },
      { src: "/assets/products/spirit/functional-trainer/view-3.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — detail view 3" },
      { src: "/assets/products/spirit/functional-trainer/view-4.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — detail view 4" },
      { src: "/assets/products/spirit/functional-trainer/view-5.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — detail view 5" },
      { src: "/assets/products/spirit/functional-trainer/feature-1.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — key feature shot 1" },
      { src: "/assets/products/spirit/functional-trainer/feature-2.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — key feature shot 2" },
      { src: "/assets/products/spirit/functional-trainer/feature-3.png", alt: "Spirit CSF-FUNT Dual Functional Trainer — key feature shot 3" },
    ],
    specGroups: [
      {
        title: "Performance",
        rows: [
          { label: "2", value: "1 Weight Ratio" },
          { label: "•", value: "Two 170 lb Weight Stacks" },
          { label: "•", value: "10 lb Increments" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Set-Up Dimension", value: "60\" L x 33\" W x 83.5\" H" },
          { label: "Box Dimension", value: "2 Carton Shipment" },
          { label: "Carton 1", value: "85\" L x 22.2\" W x 41.3\" H" },
          { label: "Carton 2", value: "19.7\" L x 18.5\" W x 16.5\" H" },
          { label: "Item Weight", value: "666.5 lb" },
          { label: "Max User Weight Capacity", value: "400 lb" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "•", value: "Heavy-Gauge Steel Frame" },
          { label: "•", value: "High Quality Powder Coat Finish" },
          { label: "•", value: "Steel Weights with Nylon Sleeves" },
          { label: "Pulley Cord Travel Length", value: "83”" },
          { label: "•", value: "Steel Feet with Rubber Foot Covers" },
          { label: "•", value: "LOOS USA Cables" },
        ],
      },
      {
        title: "Convenience",
        rows: [
          { label: "•", value: "Workout Diagrams on Each Shroud Illustrate Proper Usage" },
          { label: "•", value: "Wide Base Accommodates Additional Equipment" },
          { label: "•", value: "Magnetic Weight Stack Pins for Quick and Easy Adjustments" },
          { label: "•", value: "Multiple Pull-Up Grip Options for Additional Exercise Variety" },
          { label: "Included Accessories", value: "Revolving Long Bar, Revolving Short Bar, Ankle Strap, (2) Single Grip Handles, Triceps Rope" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Coverage", value: "10 Years Frame/Welds/Cams/Plates · 5 Years Bushing/Bearings/Shocks/Pulleys/Guide Rods · 1 Year Cables · 6 Months Upholstery · 1 Year Paint &amp; Finishes, Cables, Grips, Counter Timer, Pull-Pin Components, Rail Wheels, Attachments, All Other Parts, Labor · *Prisons and correctional facilities are excluded from warranty coverage." },
        ],
      },
    ],
    specSheetUrl: "https://drive.google.com/file/d/1F_UythhoA1uZfoeXYtKie3UuzVBfYUGv/view",
    sourceUrl: "https://beta2.spiritfitness.com/commercial/csf-funt-functional-trainer",
    seo: {
      title: "Spirit CSF-FUNT Dual Functional Trainer | GM Therapy",
      description: "Spirit CSF-FUNT functional trainer: dual 170 lb stacks, 2:1 ratio, trigger pulley adjustment, 400 lb user capacity, LOOS USA cables. All-in-one training.",
    },
  },
  // SportsArt T655MS Treadmill — product id "46"
  "46": {
    productId: "46",
    slug: "sportsart-t655ms",
    tagline: "SportsArt rehabilitation treadmills are designed specifically for cardiac and physical therapy markets and come loaded with unique features, programs, and user amenities to help treat more patients more effectively.",
    overview: [
      "SportsArt rehabilitation treadmills are designed specifically for cardiac and physical therapy markets and come loaded with unique features, programs, and user amenities to help treat more patients more effectively.",
    ],
    highlights: [
      "Bi-directional belt motion for retro walking and gait observations",
      "Decline to -3% grade for back and knee rehab",
      "Meets UL requirements for current leakage in a medical setting",
      "Full-length medical side rails with pediatric lower sections for better patient stability",
      "Eco-Glide auto lubrication system",
      "CSAFE Port",
      "Medical Handrails",
      "Optional Wired Controller",
      "Forward and Reverse Speed Function (-3 to 12 MPH)",
      "0.1 SAFE-START™ Speed (Forward & Reverse)",
      "Contact and Telemetry HR",
      "Multi-ply 62 x 22 in. Belt",
      "Optional 3-Speed Fan",
      "ECO-GLIDE™ Auto Lubrication System",
      "Optional SA Well +™",
      "Emergency Stop",
      "Centered Contact HR",
    ],
    gallery: [
      { src: "/assets/products/sportsart/t655ms/hero.png", alt: "T655MS Treadmill — hero view" },
      { src: "/assets/products/sportsart/t655ms/view-1.png", alt: "T655MS Treadmill — view 1" },
      { src: "/assets/products/sportsart/t655ms/view-2.png", alt: "T655MS Treadmill — view 2" },
      { src: "/assets/products/sportsart/t655ms/view-3.png", alt: "T655MS Treadmill — view 3" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "390.2 lbs / 177 kg" },
          { label: "Dimensions (L x W x H)", value: "86.6 x 37.5 x 56.7 in / 220 x 95.5 x 144 cm" },
          { label: "Running Area", value: "22 x 62 in / 55.9 x 157.5 cm" },
          { label: "Speed Range", value: "Reverse: 0.1 – 3.0 mph / 0.2 – 5.0 kph Forward: 0.1 – 12.0 mph / 0.2 – 20.0 kph" },
          { label: "Incline Range", value: "-3 – 15%" },
          { label: "Max User Weight", value: "500 lbs / 227.3 kg" },
          { label: "Drive Motor", value: "5.0 HP AC-Servo" },
          { label: "Read Outs", value: "Calories, Speed, Time, Distance, Cal/HR, METs, Pace, Incline, Heart Rate, Weight Loss Zone, Cardio Zone, Active Zone" },
          { label: "Workout Programs", value: "Quick Start, Manual, Random (x 10,000), Interval (x3), Glute (x2) Hill (x3), 5K, 10K, Fat Burn, HRC (x3), Fitness Test (Bruce, Gerkin)" },
          { label: "Special Features", value: "5.0 HP ECO-DRIVE™ Motor, Optional Wired Controller" },
          { label: "Console Options", value: "Tri-Color LED" },
          { label: "Step Up Height", value: "8.7 in / 22.2 cm" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/cff9d757-db4e-4bd8-a616-564d854879aa",
    sourceUrl: "https://www.gosportsart.com/product/t655ms-treadmill/",
    seo: {
      title: "SportsArt T655MS Treadmill | GM Therapy",
      description: "SportsArt rehabilitation treadmills are designed specifically for cardiac and physical therapy markets and come loaded with unique features, programs, and ...",
    },
  },

  // SportsArt T661M Treadmill — product id "47"
  "47": {
    productId: "47",
    slug: "sportsart-t661m",
    tagline: "The T661M treadmill is meticulously engineered for cardiac and physical therapy facilities to revolutionize rehabilitation practices and offer the best patient care.",
    overview: [
      "The T661M treadmill is meticulously engineered for cardiac and physical therapy facilities to revolutionize rehabilitation practices and offer the best patient care. Its three-point safety stop system features a button positioned on the console, a safety key and emergency stop switch. Extended handrails comfortably accommodate both adult and pediatric patients while a low 6-inch step-up height provides versatility regardless of the patient’s age or size.",
      "Also, the maintenance-minimizing ECO-GLIDE™ auto lubrication system keeps the treadmill running at peak capacity while the MyFlex+ omni-directional cushioning provides unmatched support and comfort—minimizing the strain on joints and muscles with each stride. With a variety of preset workouts and ample display readouts, the user is always engaged and informed. Designed to be simple and effective, and loaded with unique features, the T661M will help you more effectively treat more patients.",
    ],
    highlights: [
      "Isolation components meet UL requirements for current leakage in medical settings",
      "Full length medical side rails with pediatric lower sections for better patient stability",
      "ECO-GLIDE™ auto lubrication system",
      "MyFlex+ omni-directional cushioning system",
    ],
    gallery: [
      { src: "/assets/products/sportsart/t661m/hero.png", alt: "T661M Treadmill — hero view" },
      { src: "/assets/products/sportsart/t661m/view-1.png", alt: "T661M Treadmill — view 1" },
      { src: "/assets/products/sportsart/t661m/view-2.png", alt: "T661M Treadmill — view 2" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "330.7 lbs / 150 kg" },
          { label: "Dimensions (L x W x H)", value: "80.3 x 37 x 55.9 in / 203.9 x 93.9 x 142 cm" },
          { label: "Speed Range", value: "0.1–12 mph / 0.16–20 kph" },
          { label: "Max User Weight", value: "400 lbs / 181.4 kg" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/f03cf170-6eba-42c2-97d4-dbfca6636ec4",
    sourceUrl: "https://www.gosportsart.com/product/t661m-treadmill/",
    seo: {
      title: "SportsArt T661M Treadmill | GM Therapy",
      description: "The T661M treadmill is meticulously engineered for cardiac and physical therapy facilities to revolutionize rehabilitation practices and offer the best pat...",
    },
  },

  // SportsArt C565R Recumbent Cycle — product id "48"
  "48": {
    productId: "48",
    slug: "sportsart-c565r",
    tagline: "With self-powered engineering, the C565R recumbent cycle is the epitome of function and value for any fitness facility.",
    overview: [
      "With self-powered engineering, the C565R recumbent cycle is the epitome of function and value for any fitness facility. Magnetic resistance results in a smooth and quiet ride and a unique step-through design provides easy access. With 15 resistance levels and electronic resistance control, workouts can be as intense as the user wants.",
      "A variety of preset workouts and data readouts keep the user engaged and informed. Simple seat adjustments allows the user to easily change the seat position while exercising. Providing an effective low-impact, total-body cardiovascular and strength workout, the C565R recumbent cycle empowers users of any fitness level to experience the many benefits of exercise.",
    ],
    highlights: [
      "Convenient seat adjustment handle is easy to reach while exercising",
      "Oversized pedals feature quick strap adjustment for easy customization",
      "Unique step-through design allows easy access",
    ],
    gallery: [
      { src: "/assets/products/sportsart/c565r/hero.png", alt: "C565R Recumbent Cycle — hero view" },
      { src: "/assets/products/sportsart/c565r/view-1.png", alt: "C565R Recumbent Cycle — view 1" },
      { src: "/assets/products/sportsart/c565r/view-2.png", alt: "C565R Recumbent Cycle — view 2" },
      { src: "/assets/products/sportsart/c565r/view-3.png", alt: "C565R Recumbent Cycle — view 3" },
      { src: "/assets/products/sportsart/c565r/view-4.png", alt: "C565R Recumbent Cycle — view 4" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "156.2 lbs / 71 kg" },
          { label: "Dimensions (L x W x H)", value: "65.8 x 25.6 x 49.9 in / 167.1 x 65 x 126.8 cm" },
          { label: "Max User Weight", value: "400 lbs / 181.4 kg" },
          { label: "Resistance", value: "15 Levels" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/fdff4221-2ea2-4088-a972-4789ec7686af",
    sourceUrl: "https://www.gosportsart.com/product/c565r-recumbent-cycle/",
    seo: {
      title: "SportsArt C565R Recumbent Cycle | GM Therapy",
      description: "With self-powered engineering, the C565R recumbent cycle is the epitome of function and value for any fitness facility.",
    },
  },

  // SportsArt DF201 Leg Press/Calf Extension — product id "74"
  "74": {
    productId: "74",
    slug: "sportsart-df201",
    tagline: "Our unique dual function push-pull design is your ideal product for your space.",
    overview: [
      "Our unique dual function push-pull design is your ideal product for your space. You get two motions in one beautifully designed machine. This product can be adjusted to strengthen your legs and calves depending on foot placement.",
    ],
    highlights: [
      "Seat-back proximity adjustment lever is conveniently located on the right side, near handlebar",
      "Step-through design allows for easy entrance/exit",
      "Handles at side and top provide secure entrance/exit to machine",
      "Non-slip foot plate surface provides maximum security",
      "Multiple seating positions give full range of motion",
      "1:2 weight ratio means resistance feels twice as heavy as actual physical weight, keeping product weight to a minimum",
      "5-inch (12.7 cm) deep groove POM pulleys provide consistent cable tracking",
      "14-gauge machine welded frame",
      "Stainless steel guide rods resist rust and maintain smooth operation",
      "Heavy-duty marine grade cushions",
      "Multiple adjustment points for maximum customization",
    ],
    gallery: [
      { src: "/assets/products/sportsart/df201/hero.jpg", alt: "DF201 Leg Press/Calf Extension — hero view" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "530.2 lbs / 241 kg" },
          { label: "Dimensions (L x W x H)", value: "92.9 x 45.3 x 67.5 pul / 236 x 115 x 171.5 cm" },
          { label: "Weight Stack", value: "440lbs / 200 kg (with 1:2 pulley ratio)" },
          { label: "Max User Weight", value: "500 lb / 227.3 kg" },
        ],
      },
    ],
    specSheetUrl: "https://www.gosportsart.com/wp-content/uploads/documentation/DF201_Sell_ENG.pdf",
    sourceUrl: "https://www.gosportsart.com/product/df201-leg-press-calf-extension/",
    seo: {
      title: "SportsArt DF201 Leg Press/Calf Extension | GM Therapy",
      description: "Our unique dual function push-pull design is your ideal product for your space.",
    },
  },

  // SportsArt N961 Total Hip — product id "75"
  "75": {
    productId: "75",
    slug: "sportsart-n961",
    tagline: "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    overview: [
      "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    ],
    highlights: [
      "Range of motion limiter allows users to set start and end points for safety and comfort",
      "Adjustable for hip flexion/extension and abduction/adduction movements",
      "Entire upper portion slides vertically on linear bearings to adjust pivot point for users of different heights",
      "Adjustable pad for various exercises",
      "Non-skid platform",
      "Incremental 3.5 and 6.5 lb (1.58 & 2.9 kg)  micro-loading adjustments",
      "Cold rolled steel weight stacks with noise dampening",
      "Stainless steel guide rods resist rust and stay smooth",
      "Kevlar belts for quiet, smooth action and optimal tensile strength; belt contains 2200 lb (998 kg) tensile strength aircraft cables",
      "Marine-grade double stitched upholstery",
      "Heavy-duty European-styled cushions",
    ],
    gallery: [
      { src: "/assets/products/sportsart/n961/hero.png", alt: "N961 Total Hip — hero view" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "659 lbs / 299 kg" },
          { label: "Dimensions (L x W x H)", value: "64 x 48 x 76.8 in / 162.6 x 122 x195 cm" },
          { label: "Weight Stack", value: "264 lbs / 120 kg" },
          { label: "Max User Weight", value: "500 lbs / 227 kg" },
          { label: "Starting Weight", value: "7.7 lbs / 3.5 kg" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/90cfc9f4-972e-4e13-a440-630970411537",
    sourceUrl: "https://www.gosportsart.com/product/n961/",
    seo: {
      title: "SportsArt N961 Total Hip | GM Therapy",
      description: "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    },
  },

  // SportsArt DS972 Functional Trainer — product id "76"
  "76": {
    productId: "76",
    slug: "sportsart-ds972",
    tagline: "The SportsArt DS972 Dual Stack Functional Trainer offers a unique adjustable pulley ratio (2:1 and 4:1) giving users more workout options and increases weight selection options.",
    overview: [
      "The SportsArt DS972 Dual Stack Functional Trainer offers a unique adjustable pulley ratio (2:1 and 4:1) giving users more workout options and increases weight selection options.",
    ],
    highlights: [
      "Adjustable 2:1 and 4:1 pulley ratios",
      "Dual weight stack",
      "41 pulley positions offers more workout positions and versatility",
      "Integrated pull-up bars",
      "Magnetized weight selector fork with retracting cord",
      "7-piece accessory set included",
      "Deep-groove, 5-inch (12.7 cm)  shrouded pulleys provide faultless cable tracking",
      "Cold rolled steel weight stacks with noise dampening",
      "Stainless steel guide rods resist rust and stay smooth",
      "Internally lubricated 2200 lbs (1000 kg) steel aircraft cables provide quiet, smooth operation",
    ],
    gallery: [
      { src: "/assets/products/sportsart/ds972/hero.png", alt: "DS972 Functional Trainer — hero view" },
      { src: "/assets/products/sportsart/ds972/view-1.png", alt: "DS972 Functional Trainer — view 1" },
      { src: "/assets/products/sportsart/ds972/view-2.png", alt: "DS972 Functional Trainer — view 2" },
      { src: "/assets/products/sportsart/ds972/view-3.png", alt: "DS972 Functional Trainer — view 3" },
      { src: "/assets/products/sportsart/ds972/view-4.png", alt: "DS972 Functional Trainer — view 4" },
      { src: "/assets/products/sportsart/ds972/view-5.png", alt: "DS972 Functional Trainer — view 5" },
      { src: "/assets/products/sportsart/ds972/view-6.jpg", alt: "DS972 Functional Trainer — view 6" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "679.8 lbs / 309 kg" },
          { label: "Dimensions (L x W x H)", value: "60.2 x 39.4 x 89.2 in / 153 x 100 x 226.5 cm" },
          { label: "Weight Stack", value: "200 lbs / 90 kg (per stack)" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/4ef86f8a-12d0-489a-bfa6-9f3969d9e60a",
    sourceUrl: "https://www.gosportsart.com/product/ds972-functional-trainer/",
    seo: {
      title: "SportsArt DS972 Functional Trainer | GM Therapy",
      description: "The SportsArt DS972 Dual Stack Functional Trainer offers a unique adjustable pulley ratio (2:1 and 4:1) giving users more workout options and increases wei...",
    },
  },

  // SportsArt S973 Cable Tower — product id "78"
  "78": {
    productId: "78",
    slug: "sportsart-s973",
    tagline: "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    overview: [
      "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    ],
    highlights: [
      "Dual swivel pulleys adjust vertically and lock into place, allowing for functional training from virtually any angle",
      "36 incremental adjustments for the ultimate in customization",
      "Easy-grip bars stabilize exerciser’s during balance-challenging workouts",
      "1:2 and 1:4 ratios provide versatility for personal and sports-specific training; 1:2 (one pulley); 1:4 (two pulleys)",
      "Aircraft quality cable with 2200 lb (998 kg) tensile strength",
      "Cold rolled steel weight stacks with noise dampening",
      "Stainless steel guide rods resist rust and stay smooth",
      "Deep-groove, 5-inch (12.7 cm)  shrouded pulleys provide faultless cable tracking",
      "Internally lubricated 1500 lb (680 kg) steel aircraft cables provide quiet, smooth operation",
      "Marine-grade double stitched upholstery",
      "Heavy-duty European-styled cushions",
    ],
    gallery: [
      { src: "/assets/products/sportsart/s973/hero.jpg", alt: "S973 Cable Tower — hero view" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "454 lbs / 206.4 kg" },
          { label: "Dimensions (L x W x H)", value: "36.2 x 33.5 x 85.4 in / 92 x 85 x 217 cm" },
          { label: "Weight Stack", value: "220 lb / 100 kg" },
          { label: "Max User Weight", value: "500 lbs / 227 kg" },
        ],
      },
    ],
    specSheetUrl: "https://www.gosportsart.com/wp-content/uploads/documentation/S973_Sell_ENG.pdf",
    sourceUrl: "https://www.gosportsart.com/product/s973-cable-tower/",
    seo: {
      title: "SportsArt S973 Cable Tower | GM Therapy",
      description: "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    },
  },

  // SportsArt DF-300 Leg Extension/Leg Curl — product id "266"
  "266": {
    productId: "266",
    slug: "sportsart-df-300",
    tagline: "Our unique dual function push-pull design is the ideal product for your space, combining two motions in one beautifully designed machine.",
    overview: [
      "Our unique dual function push-pull design is the ideal product for your space, combining two motions in one beautifully designed machine. The DF-300 Leg Extension/Leg Curl strengthens your quadriceps.",
    ],
    highlights: [
      "Direct drive system offers two opposing cams for less cable-slop and faster workout changeover",
      "Easy transition from leg extension to seated leg curl",
      "Plate increments: 20 x 11 lbs (5 kg)",
      "Adjustable seat back and leg pads for user customization",
    ],
    gallery: [
      { src: "/assets/products/sportsart/df-300/hero.png", alt: "DF-300 Leg Extension/Leg Curl — hero view" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "494.9 lbs / 224.5 kg" },
          { label: "Dimensions (L x W x H)", value: "53.1 x 39.8 x 64 in / 134.8 x 101 x 162.5 cm" },
          { label: "Weight Stack", value: "220 lb / 100 kg" },
          { label: "Max User Weight", value: "500 lb / 227.3 kg" },
          { label: "Starting Weight", value: "Curl: 13 lbs / 6 kg, Extension: 13 lbs / 6 kg" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/c2971707-4960-442b-8cba-f919ec041962",
    sourceUrl: "https://www.gosportsart.com/product/df-300-leg-extension-leg-curl/",
    seo: {
      title: "SportsArt DF-300 Leg Extension/Leg Curl | GM Therapy",
      description: "Our unique dual function push-pull design is the ideal product for your space, combining two motions in one beautifully designed machine.",
    },
  },

  // SportsArt N973 Cable Tower — product id "267"
  "267": {
    productId: "267",
    slug: "sportsart-n973",
    tagline: "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    overview: [
      "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    ],
    highlights: [
      "Dual swivel pulleys adjust vertically and lock into place, allowing for functional training from virtually any angle",
      "36 incremental adjustments for the ultimate in customization",
      "Easy-grip bars stabilize exerciser’s during balance-challenging workouts",
      "2:1 and 4:1 ratios provide versatility for personal and sports-specific training; 2:1 (two pulleys); 4:1 (one pulley)",
      "Aircraft quality cable with 2200 lb (998 kg) tensile strength",
      "Cold rolled steel weight stacks with noise dampening",
      "Stainless steel guide rods resist rust and stay smooth",
      "Deep-groove, 5-inch (12.7 cm)  shrouded pulleys provide faultless cable tracking",
    ],
    gallery: [
      { src: "/assets/products/sportsart/n973/hero.png", alt: "N973 Cable Tower — hero view" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "454 lbs / 206 kg" },
          { label: "Dimensions (L x W x H)", value: "35.9 x 35 x 85.4 in / 91.2 x 88.8 x 217 cm" },
          { label: "Weight Stack", value: "220 lbs / 100 kg" },
          { label: "Max User Weight", value: "500 lbs / 227 kg" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/036a291e-eec5-416d-a411-3dce3eb88f14",
    sourceUrl: "https://www.gosportsart.com/product/n973/",
    seo: {
      title: "SportsArt N973 Cable Tower | GM Therapy",
      description: "SportsArt Status Series offers options for total body training, allowing users to quickly and easily switch between upper, lower, and core exercises.",
    },
  },

  // SportsArt P873 Cable Tower — product id "268"
  "268": {
    productId: "268",
    slug: "sportsart-p873",
    tagline: "This product allows users to quickly and easily switch between upper, lower, and core body exercises for a complete workout.",
    overview: [
      "This product allows users to quickly and easily switch between upper, lower, and core body exercises for a complete workout. A lower stack height and compact footprint make it ideal for any sized facility.",
    ],
    highlights: [
      "Dual swivel pulleys adjust vertically and lock into place, allowing for functional training from virtually any angle",
      "36 incremental adjustments for the ultimate in customization",
      "Easy grip bars stabilize during balance challenging workouts",
      "4:1 (one pulley) and 2:1 (two pulleys) ratios provide versatility for personal and sport-specific training",
    ],
    gallery: [
      { src: "/assets/products/sportsart/p873/hero.png", alt: "P873 Cable Tower — hero view" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "340 lbs / 154 kg" },
          { label: "Dimensions (L x W x H)", value: "41 x 36.2 x 83.1 in / 104.1 x 91.9 x 211 cm" },
          { label: "Weight Stack", value: "176 lb / 80 kg" },
          { label: "Max User Weight", value: "500 lbs / 227 kg" },
          { label: "Starting Weight", value: "3.3 lbs / 1.5 kg" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/9bf4b079-05ee-45a3-b853-ea390ab61b2a",
    sourceUrl: "https://www.gosportsart.com/product/p873-cable-tower/",
    seo: {
      title: "SportsArt P873 Cable Tower | GM Therapy",
      description: "This product allows users to quickly and easily switch between upper, lower, and core body exercises for a complete workout.",
    },
  },

  // SportsArt UB521M Bilateral Upper Body Ergometer — product id "270"
  "270": {
    productId: "270",
    slug: "sportsart-ub521m",
    tagline: "SportsArt is an industry leader in rehabilitative equipment manufacturing and the UB521M Upper Body Ergometer is a therapist’s favorite modality for seated, standing or users needing wheelchair access.",
    overview: [
      "SportsArt is an industry leader in rehabilitative equipment manufacturing and the UB521M Upper Body Ergometer is a therapist’s favorite modality for seated, standing or users needing wheelchair access.",
    ],
    highlights: [
      "Bi-directional resistance for varied exercise and therapy sessions.",
      "Optional wheelchair ramp",
      "Hand crank position rotates **180** **°** for opposing or in-unison arm motion (optional function.)",
      "Roll away seat carriage for wheelchair patients and optional wheelchair platform.",
      "Adjustable ROM radius with 4 settings at 6.5, 7.5 8.5 and 9.5 inches (16.5, 19, 21.5, 24 cm).",
      "Belt drive offers quiet, smooth operation with seamless transition between forward and reverse motion.",
      "Tilting console and pivoting display offer customized fit for most users in seated or standing position.",
      "Optional wheelchair ramp",
      "Optional wheelchair tie down",
      "Optional grip assist gloves",
    ],
    gallery: [
      { src: "/assets/products/sportsart/ub521m/hero.png", alt: "UB521M Bilateral Upper Body Ergometer — hero view" },
      { src: "/assets/products/sportsart/ub521m/view-1.png", alt: "UB521M Bilateral Upper Body Ergometer — view 1" },
      { src: "/assets/products/sportsart/ub521m/view-2.png", alt: "UB521M Bilateral Upper Body Ergometer — view 2" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Unit Weight", value: "Unit Weight: 264.6 lbs / 120 kg" },
          { label: "Dimensions (L x W x H)", value: "69.3 x 31.5 x 75 in / 176 x 80 x 190.5 cm" },
          { label: "Resistance", value: "20 by 0.1 increments" },
          { label: "Power Requirement", value: "15A, 120V AC, grounded" },
          { label: "Max User Weight", value: "500 lbs / 227.3 kg" },
          { label: "Read Outs", value: "Workout Level, Calories, Time, RPM, Distance, METs, Watts, Speed, Heart Rate, Cardio Advisor/WT Loss" },
          { label: "Workout Programs", value: "Custom Interval, Random, Hill, Track, Iso Kinetic, Iso Strength, Custom HR, Cardio/Weight Loss, Custom HR, ActivZone™" },
          { label: "Tech Specs", value: "15A 120V AC, grounded" },
        ],
      },
    ],
    specSheetUrl: "https://embedded-links.us-1.lytho.us/links/4ce1446c-34d9-43d1-ba83-90070c720abc",
    sourceUrl: "https://www.gosportsart.com/product/ub521m-bilateral-upper-body-ergometer/",
    seo: {
      title: "SportsArt UB521M Bilateral Upper Body Ergometer | GM Therapy",
      description: "SportsArt is an industry leader in rehabilitative equipment manufacturing and the UB521M Upper Body Ergometer is a therapist’s favorite modality for seated...",
    },
  },

  // SciFit PRO1 Upper Body — product id "55"
  "55": {
    productId: "55",
    slug: "scifit-pro1-upper-body",
    tagline:
      "Versatile, highly adjustable upper body exerciser for seated, standing or ground-based training.",
    overview: [
      "The SciFit PRO1 Upper Body is a highly adjustable upper body exerciser that can be used seated, standing, or for ground-based training. Its true step-through design and removable seat make it ideal for users of all abilities, including wheelchair users.",
      "With very low starting resistance and 191 levels of resistance, the PRO1 supports rehab progressions from the earliest stages through advanced conditioning. Bi-directional cranks and an adjustable tilt head accommodate a wide range of motion needs.",
    ],
    highlights: [
      "Adjustable tilt head for all heights and ranges of motion",
      "Adjustable arm cranks: 4 ROM settings plus unison motion",
      "True, adjustable step-through accessibility",
      "Bi-directional exercise",
      "Iso-Strength safe, accommodating strength program",
      "Very low starting resistance",
      "Wheelchair platform included",
      "Premium, standard and bariatric seat options",
    ],
    gallery: [
      { src: "/assets/products/scifit/pro1/hero.webp", alt: "SciFit PRO1 Upper Body — hero view" },
      { src: "/assets/products/scifit/pro1/view-1.webp", alt: "SciFit PRO1 Upper Body — view 1" },
      { src: "/assets/products/scifit/pro1/view-2.webp", alt: "SciFit PRO1 Upper Body — view 2" },
      { src: "/assets/products/scifit/pro1/view-3.webp", alt: "SciFit PRO1 Upper Body — view 3" },
      { src: "/assets/products/scifit/pro1/view-4.webp", alt: "SciFit PRO1 Upper Body — view 4" },
      { src: "/assets/products/scifit/pro1/view-5.webp", alt: "SciFit PRO1 Upper Body — view 5" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Power Requirements", value: "Self-generating; low-voltage AC adapter, included" },
          { label: "Maximum User Weight", value: "Premium Seat: 450 lbs (204.18 kg) · Standard Seat: 500 lbs (226.80 kg) · Bariatric Seat: 600 lbs (272.16 kg)" },
          { label: "Unit Weight", value: "232 lbs (105.23 kg)" },
          { label: "Unit Size (L x W x H)", value: "60\" x 30\" x 77\" (152.4 x 76.2 x 195.58 cm)" },
          { label: "Color", value: "Frame: Charcoal · Cover: Cool Gray" },
          { label: "Manufacturing", value: "Assembled in USA" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/scifit/brochures/pro1-specs.pdf",
    sourceUrl: "https://www.scifit.com/product/pro1/",
    seo: {
      title: "SciFit PRO1 Upper Body Ergometer | GM Therapy",
      description: "Highly adjustable SciFit PRO1 upper body ergometer for seated, standing, or ground-based training. Wheelchair accessible with very low starting resistance.",
    },
  },

  // SciFit StepOne Recumbent Stepper — product id "56"
  "56": {
    productId: "56",
    slug: "scifit-stepone-recumbent-stepper",
    tagline:
      "Smooth total-body recumbent stepper with user-defined stride length and direct wheelchair access.",
    overview: [
      "The SciFit StepOne Recumbent Stepper delivers a smooth, total-body functional movement with user-defined stride length from 2\" to 11.5\" and Intelli-Stride™ feedback for safe rehab progressions.",
      "A removable seat, step-through design, and integrated grab bar make StepOne ideal for clinical environments and direct wheelchair access. The full-color touch screen displays clinically meaningful readouts including stride length, ascent, watts, and METs.",
    ],
    highlights: [
      "User-defined stride length from 2\" to 11.5\" with Intelli-Stride™ feedback",
      "Arm-to-leg movement encourages activities of daily living",
      "Low starting resistance (6 watts) with 191 levels (20 levels in .1 increments)",
      "Direct wheelchair access with step-through seating and grab bar",
      "Adjustable arm length and rotating hand grips",
      "360° swivel seat with recline",
      "Full-color touch screen console",
      "Premium, standard and bariatric seat options",
    ],
    gallery: [
      { src: "/assets/products/scifit/stepone/hero.webp", alt: "SciFit StepOne Recumbent Stepper — hero view" },
      { src: "/assets/products/scifit/stepone/view-1.webp", alt: "SciFit StepOne — view 1" },
      { src: "/assets/products/scifit/stepone/view-2.webp", alt: "SciFit StepOne — view 2" },
      { src: "/assets/products/scifit/stepone/view-3.webp", alt: "SciFit StepOne — view 3" },
      { src: "/assets/products/scifit/stepone/view-4.webp", alt: "SciFit StepOne — view 4" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Power Requirements", value: "Self-generating; low-voltage AC adapter included" },
          { label: "Maximum User Weight", value: "Premium Seat: 450 lbs (204.18 kg) · Standard Seat: 500 lbs (226.80 kg) · Bariatric Seat: 600 lbs (272.16 kg)" },
          { label: "User Height Range", value: "54\" – 79\" (137.16 – 200.66 cm)" },
          { label: "Unit Weight", value: "312 lbs (141.52 kg)" },
          { label: "Dimensions (L x W x H)", value: "68\" x 30\" x 48\" (172.72 x 76.2 x 121.92 cm)" },
          { label: "Resistance", value: "191 levels (20 levels in .1 increments)" },
          { label: "Standard Compliance", value: "EN 957-8" },
          { label: "Color", value: "Frame: Charcoal · Cover: Cool Gray" },
          { label: "Manufacturing", value: "Assembled in USA" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/scifit/brochures/stepone-specs.pdf",
    sourceUrl: "https://www.scifit.com/product/stepone/",
    seo: {
      title: "SciFit StepOne Recumbent Stepper | GM Therapy",
      description: "SciFit StepOne recumbent stepper with user-defined stride length, direct wheelchair access, and full-color touch screen. Ideal for rehab and senior fitness.",
    },
  },

  // SciFit PRO2 Total Body — product id "57"
  "57": {
    productId: "57",
    slug: "scifit-pro2-total-body",
    tagline:
      "Upper body exerciser and lower body recumbent bike in one — the industry's most versatile rehab tool.",
    overview: [
      "The SciFit PRO2® Total Body combines an upper body exerciser and a lower body recumbent bike in a single unit, allowing upper, lower, or total body exercise. Dependent upper and lower cranks enable passive assistance, allowing stronger extremities to assist weaker ones.",
      "True step-through accessibility, a removable seat, and a 360° therapist assist pedal make the PRO2 ideal for clinical rehab. With 191 levels of resistance and very low starting resistance, it accommodates the full progression from early rehab through fitness.",
    ],
    highlights: [
      "Upper, lower or total body exercise for versatile rehab",
      "Dependent motion lets stronger extremities assist weaker ones",
      "Adjustable upper and lower cranks: 3 length settings",
      "True, adjustable step-through accessibility",
      "Removable seat for wheelchair access",
      "360° Therapist Assist Pedal on seat",
      "Bi-directional exercise with 191 resistance levels",
      "Iso-Strength safe, accommodating strength program",
      "Premium, standard and bariatric seat options",
    ],
    gallery: [
      { src: "/assets/products/scifit/pro2/hero.webp", alt: "SciFit PRO2 Total Body — hero view" },
      { src: "/assets/products/scifit/pro2/view-1.webp", alt: "SciFit PRO2 — view 1" },
      { src: "/assets/products/scifit/pro2/view-2.webp", alt: "SciFit PRO2 — view 2" },
      { src: "/assets/products/scifit/pro2/view-3.webp", alt: "SciFit PRO2 — view 3" },
      { src: "/assets/products/scifit/pro2/view-4.webp", alt: "SciFit PRO2 — view 4" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Power Requirements", value: "Self-generating; low-voltage AC adapter, included" },
          { label: "Maximum User Weight", value: "Premium Seat: 450 lbs (204.18 kg) · Standard Seat: 500 lbs (226.80 kg) · Bariatric Seat: 600 lbs (272.16 kg)" },
          { label: "Unit Weight", value: "260 lbs (117.93 kg)" },
          { label: "Unit Size (L x W x H)", value: "61\" x 30\" x 62\" (154.94 x 76.2 x 157.48 cm)" },
          { label: "Resistance", value: "191 levels (20 levels in .1 increments), starting at 6 watts" },
          { label: "Color", value: "Frame: Charcoal · Cover: Cool Gray" },
          { label: "Manufacturing", value: "Assembled in USA" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/scifit/brochures/pro2-specs.pdf",
    sourceUrl: "https://www.scifit.com/product/pro2/",
    seo: {
      title: "SciFit PRO2 Total Body Exerciser | GM Therapy",
      description: "SciFit PRO2 combines upper body ergometer and recumbent bike in one. Dependent motion, 191 resistance levels, wheelchair accessible — ideal for rehab.",
    },
  },

  // SciFit PRO1000 Seated Upper Body — product id "59"
  "59": {
    productId: "59",
    slug: "scifit-pro1000-seated-upper-body",
    tagline:
      "Accessible seated upper body ergometer with adjustable arm cranks and very low starting resistance.",
    overview: [
      "The SciFit PRO1000 Seated Upper Body ergometer features adjustable arm cranks, step-through accessibility, and very low starting resistance — making it easy for any user to get on and go.",
      "With a removable seat for direct wheelchair access and 191 resistance levels, the PRO1000 supports a wide range of upper body rehabilitation and conditioning protocols in clinics, fitness centers, and home settings.",
    ],
    highlights: [
      "Adjustable arm cranks: 3 ROM settings plus unison motion",
      "Step-through accessibility",
      "Bi-directional exercise",
      "Iso-Strength safe, accommodating strength program",
      "Very low starting resistance with 191 levels of resistance",
      "Removable seat for wheelchair access",
      "Premium, standard and bariatric seat options",
    ],
    gallery: [
      { src: "/assets/products/scifit/pro1000/hero.webp", alt: "SciFit PRO1000 Seated Upper Body — hero view" },
      { src: "/assets/products/scifit/pro1000/view-1.webp", alt: "SciFit PRO1000 — view 1" },
      { src: "/assets/products/scifit/pro1000/view-2.webp", alt: "SciFit PRO1000 — view 2" },
      { src: "/assets/products/scifit/pro1000/view-3.webp", alt: "SciFit PRO1000 — view 3" },
      { src: "/assets/products/scifit/pro1000/view-4.webp", alt: "SciFit PRO1000 — view 4" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Power Requirements", value: "Self-generating; low-voltage AC adapter, included" },
          { label: "Maximum User Weight", value: "Premium Seat: 450 lbs (204.18 kg) · Standard Seat: 500 lbs (226.80 kg) · Bariatric Seat: 600 lbs (272.16 kg)" },
          { label: "Unit Weight", value: "239 lbs (108.41 kg)" },
          { label: "Unit Size (L x W x H)", value: "61\" x 30\" x 62\" (154.94 x 76.2 x 157.48 cm)" },
          { label: "Resistance", value: "191 levels (20 levels in .1 increments)" },
          { label: "Color", value: "Frame: Charcoal · Cover: Cool Gray" },
          { label: "Manufacturing", value: "Assembled in USA" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/scifit/brochures/pro1000-specs.pdf",
    sourceUrl: "https://www.scifit.com/product/pro1000/",
    seo: {
      title: "SciFit PRO1000 Seated Upper Body Ergometer | GM Therapy",
      description: "SciFit PRO1000 seated upper body ergometer with adjustable arm cranks, 191 resistance levels, and removable seat for wheelchair access.",
    },
  },
  "117": {
    productId: "117",
    slug: "matrix-endurance-treadmill",
    tagline: "Maximize your resources with a treadmill that’s simple for new users and powerful for enthusiasts.",
    overview: [
      "Maximize your resources with a treadmill that’s simple for new users and powerful for enthusiasts. A precision-engineered drive system and deck stand up to heavy daily use, a variety of consoles let you customize the experience, and smart maintenance features make it easy to keep it up and running like new.",
    ],
    highlights: [
      "60\" x 22\" — RUNNING SURFACE",
      "0.5–12 mph — SPEED RANGE",
      "0–15% — INCLINE RANGE",
      "LED Console with intuitive controls",
      "Precision-engineered drive system for heavy daily use",
      "Durable deck stands up to tough environments",
      "Smart maintenance features minimize downtime",
    ],
    gallery: [
      { src: "/assets/products/matrix/endurance-treadmill/view-1.webp", alt: "Matrix Endurance Treadmill — view 1" },
      { src: "/assets/products/matrix/endurance-treadmill/view-2.webp", alt: "Matrix Endurance Treadmill — view 2" },
      { src: "/assets/products/matrix/endurance-treadmill/view-3.webp", alt: "Matrix Endurance Treadmill — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Drive System", value: "4.2 hp AC Dynamic Response Drive System" },
          { label: "Speed Range", value: "0.8–20 km/h / 0.5–12 mph" },
          { label: "Incline Range", value: "0–15% (700-lb. thrust-elevation motor)" },
          { label: "Running Surface Area", value: "152 x 56 cm / 60” x 22”" },
          { label: "Running Surface Type", value: "Belt and deck" },
          { label: "Cushioning System", value: "Ultimate Deck" },
          { label: "Handlebar Design", value: "Molded ergo-grip design" },
          { label: "Crossbar Controls", value: "Yes" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Step-on Height", value: "23 cm / 9”" },
          { label: "Service Caster", value: "No" },
          { label: "Cast Aluminum End Caps", value: "No" },
          { label: "Max User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Tread Sense", value: "Yes" },
          { label: "Assembled Dimensions", value: "213 x 87 x 163 cm / 83.9” x 34.3” x 64.2”" },
          { label: "Power Requirements", value: "20 A dedicated circuit required, non-looped grounded" },
          { label: "Assembled Weight", value: "173 kg / 381.4 lbs." },
          { label: "Shipping Weight", value: "202 kg / 445.3 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/endurance-treadmill-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/endurance/treadmill/led",
    seo: {
      title: "Matrix Endurance Treadmill | GM Therapy",
      description: "Maximize your resources with a treadmill that’s simple for new users and powerful for enthusiasts.",
    },
  },
  "118": {
    productId: "118",
    slug: "matrix-endurance-elliptical",
    tagline: "Our durable Endurance Elliptical is ideal for workouts of any intensity, offering low-impact exercise for members of all kinds.",
    overview: [
      "Our durable Endurance Elliptical is ideal for workouts of any intensity, offering low-impact exercise for members of all kinds. A patented suspension design minimizes noise and friction, extending product life, while constant rate of acceleration and refined ergonomics makes every movement feel smooth and natural.",
    ],
    highlights: [
      "21\" — STRIDE LENGTH",
      "9.5\" — STEP-ON HEIGHT",
      "70\" x 29.2\" x 68.5\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Patented suspension design minimizes noise and friction",
      "Smart ergonomics for natural movement",
      "Low-impact, comfortable cardio workout",
    ],
    gallery: [
      { src: "/assets/products/matrix/endurance-elliptical/view-1.webp", alt: "Matrix Endurance Suspension Elliptical — view 1" },
      { src: "/assets/products/matrix/endurance-elliptical/view-2.webp", alt: "Matrix Endurance Suspension Elliptical — view 2" },
      { src: "/assets/products/matrix/endurance-elliptical/view-3.webp", alt: "Matrix Endurance Suspension Elliptical — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Resistance System", value: "Brushless generator" },
          { label: "Minimum Watts", value: "5 W powered or 35 W self-powered" },
          { label: "Minimum RPM", value: "10 RPM powered or 30 RPM self-powered" },
          { label: "Stride Length", value: "53.3 cm / 21”" },
          { label: "Step-on Height", value: "24 cm / 9.5”" },
          { label: "Pedal Spacing", value: "6.4 cm / 2.5”" },
          { label: "Watt Range", value: "5–650 W" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Top-down Levelers", value: "Yes" },
          { label: "Max User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "174.5 x 74 x 179 cm / 68.7\" x 29.1\" x 70.5\"" },
          { label: "Power Requirements", value: "Self-powered or 100–240 V — 50/60 Hz AC" },
          { label: "Resistance Range", value: "5–705 W" },
          { label: "Assembled Weight", value: "148 kg / 326.3 lbs." },
          { label: "Shipping Weight", value: "183.5 kg / 404.5 lbs." },
          { label: "Resistance Levels", value: "25" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/endurance-elliptical-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/endurance/elliptical/led",
    seo: {
      title: "Matrix Endurance Suspension Elliptical | GM Therapy",
      description: "Our durable Endurance Elliptical is ideal for workouts of any intensity, offering low-impact exercise for members of all kinds.",
    },
  },
  "119": {
    productId: "119",
    slug: "matrix-endurance-climbmill",
    tagline: "Great for enthusiasts and beginners alike, our Endurance ClimbMill is ideal for maximizing your resources. Smart, heavy-duty design gives members a secure, stable workout and stands up to heavy use in tough environments.",
    overview: [
      "Great for enthusiasts and beginners alike, our Endurance ClimbMill is ideal for maximizing your resources. Smart, heavy-duty design gives members a secure, stable workout and stands up to heavy use in tough environments. It’s even easy to service, minimizing downtime for all your members who love a true stair-climbing workout.",
    ],
    highlights: [
      "10\" — STEP-ON HEIGHT",
      "10\" x 18\" x 8\" — STEP DIMENSIONS",
      "63.5\" x 40.3\" x 85.8\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Heavy-duty design for secure, stable workouts",
      "Durable construction stands up to heavy use",
      "Easy to service to minimize downtime",
    ],
    gallery: [
      { src: "/assets/products/matrix/endurance-climbmill/view-1.webp", alt: "Matrix Endurance ClimbMill — view 1" },
      { src: "/assets/products/matrix/endurance-climbmill/view-2.webp", alt: "Matrix Endurance ClimbMill — view 2" },
      { src: "/assets/products/matrix/endurance-climbmill/view-3.webp", alt: "Matrix Endurance ClimbMill — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Drive System", value: "Clutched ECB with industrial-grade drive chain and belt" },
          { label: "Step Dimensions", value: "25.4 x 46 x 20.3 cm / 10” x 18” x 8”" },
          { label: "Handlebar Design", value: "Perimeter" },
          { label: "Auto-stop Function", value: "Yes; frame mounted IR" },
          { label: "Control Zone", value: "No" },
          { label: "Locking Staircase", value: "Yes" },
          { label: "Top-down Levelers", value: "Yes" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Step-on Height", value: "36 cm / 14”" },
          { label: "Service Caster", value: "No" },
          { label: "Minimum User Weight", value: "45 kg / 99 lbs." },
          { label: "Maximum User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "161.2 x 102.4 x 218 cm / 63.5\" x 40.3\" x 85.8\"" },
          { label: "Power Requirements", value: "100–240 V — 50/60Hz AC" },
          { label: "Resistance Range", value: "24–162 SPM" },
          { label: "Assembled Weight", value: "177.4 kg / 391.1 lbs." },
          { label: "Shipping Weight", value: "202.6 kg / 455.5 lbs." },
          { label: "Resistance Levels", value: "25" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/endurance-climbmill-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/endurance/climbmill/led",
    seo: {
      title: "Matrix Endurance ClimbMill | GM Therapy",
      description: "Great for enthusiasts and beginners alike, our Endurance ClimbMill is ideal for maximizing your resources. Smart, heavy-duty design gives members a secure,...",
    },
  },
  "120": {
    productId: "120",
    slug: "matrix-endurance-recumbent",
    tagline: "Our Endurance Recumbent Cycle distributes weight and offers excellent support for a low-impact cardio workout.",
    overview: [
      "Our Endurance Recumbent Cycle distributes weight and offers excellent support for a low-impact cardio workout. Custom-molded, adjustable touchpoints and an ergonomically sculpted seat and back pad enhance comfort for users of all sizes and ability levels, while smart design features streamline service for technicians and simplify placement for facilities.",
    ],
    highlights: [
      "Brushless generator — RESISTANCE SYSTEM",
      "6.9\" — PEDAL SPACING",
      "60.7\" x 26.7\" x 57.4\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Custom-molded, adjustable touchpoints",
      "Ergonomically sculpted seat and back pad",
      "Excellent weight distribution and support",
    ],
    gallery: [
      { src: "/assets/products/matrix/endurance-recumbent/view-1.webp", alt: "Matrix Endurance Recumbent Bike — view 1" },
      { src: "/assets/products/matrix/endurance-recumbent/view-2.webp", alt: "Matrix Endurance Recumbent Bike — view 2" },
      { src: "/assets/products/matrix/endurance-recumbent/view-3.webp", alt: "Matrix Endurance Recumbent Bike — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Resistance System", value: "Brushless generator" },
          { label: "Minimum Watts", value: "2 W powered or 13 W self-powered" },
          { label: "Minimum RPM", value: "10 RPM powered or 25 RPM self-powered" },
          { label: "Pedal Spacing", value: "17.5 cm / 6.9”" },
          { label: "Seat Material", value: "Custom one-piece, molded seat back and bottom" },
          { label: "Seat Adjustment", value: "Single-hand lever" },
          { label: "Handlebar Design", value: "Seat side; front ergo bend" },
          { label: "Crank Design", value: "Three piece with forged arms and integrated puller" },
          { label: "Top-down Levelers", value: "Yes" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Rear-lift Handle", value: "Yes" },
          { label: "Maximum User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "154.3 x 67.4 x 144.2 cm / 60.7\" x 26.5\" x 56.8\"" },
          { label: "Power Requirements", value: "Self-powered or 100–240 V — 50/60 Hz AC" },
          { label: "Resistance Range", value: "2–750 W" },
          { label: "Assembled Weight", value: "91 kg / 200.6 lbs." },
          { label: "Shipping Weight", value: "112 kg / 246.9 lbs." },
          { label: "Resistance Levels", value: "30" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/endurance-recumbent-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/endurance/recumbent-cycle/led",
    seo: {
      title: "Matrix Endurance Recumbent Bike | GM Therapy",
      description: "Our Endurance Recumbent Cycle distributes weight and offers excellent support for a low-impact cardio workout.",
    },
  },
  "121": {
    productId: "121",
    slug: "matrix-endurance-upright",
    tagline: "Our Endurance Upright Cycle gives beginners and cycling enthusiasts alike the feel of a real outdoor ride.",
    overview: [
      "Our Endurance Upright Cycle gives beginners and cycling enthusiasts alike the feel of a real outdoor ride. Accessible, race-inspired design makes even long rides more comfortable than expected, and a range of smart features make it easy to service and place the cycle wherever your facility has space.",
    ],
    highlights: [
      "Brushless generator — RESISTANCE SYSTEM",
      "6.9\" — PEDAL SPACING",
      "51.5\" x 25.7\" x 60.5\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Race-inspired design with real outdoor ride feel",
      "Comfortable for long rides",
      "Accessible step-through design",
    ],
    gallery: [
      { src: "/assets/products/matrix/endurance-upright/view-1.webp", alt: "Matrix Endurance Upright Bike — view 1" },
      { src: "/assets/products/matrix/endurance-upright/view-2.webp", alt: "Matrix Endurance Upright Bike — view 2" },
      { src: "/assets/products/matrix/endurance-upright/view-3.webp", alt: "Matrix Endurance Upright Bike — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Resistance System", value: "Brushless generator" },
          { label: "Minimum Watts", value: "2 W powered or 13 W self-powered" },
          { label: "Minimum RPM", value: "10 RPM powered or 25 RPM self-powered" },
          { label: "Pedal Spacing", value: "17.5 cm / 6.9”" },
          { label: "Seat Material", value: "Sewn vinyl over foam" },
          { label: "Seat Adjustment", value: "Single-hand lever" },
          { label: "Handlebar Design", value: "Racing design with elbow support" },
          { label: "Crank Design", value: "Three piece with forged arms and integrated puller" },
          { label: "Top-down Levelers", value: "Yes" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Rear-lift Handle", value: "Yes" },
          { label: "Maximum User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "122 x 74.4 x 152.1 cm / 48\" x 29.3\" x 59.9\"" },
          { label: "Power Requirements", value: "Self-powered or 100–240 V — 50/60 Hz AC" },
          { label: "Resistance Range", value: "2–750 W" },
          { label: "Assembled Weight", value: "70 kg / 154.3 lbs." },
          { label: "Shipping Weight", value: "83 kg / 183 lbs." },
          { label: "Resistance Levels", value: "30" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/endurance-upright-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/endurance/upright-cycle/led",
    seo: {
      title: "Matrix Endurance Upright Bike | GM Therapy",
      description: "Our Endurance Upright Cycle gives beginners and cycling enthusiasts alike the feel of a real outdoor ride.",
    },
  },
  "122": {
    productId: "122",
    slug: "matrix-lifestyle-treadmill",
    tagline: "Give the people you serve a beautifully simple run with our Lifestyle Treadmill. A compact frame makes the most of your space, and the reliable drive system and durable deck will keep it running smoothly for years.",
    overview: [
      "Give the people you serve a beautifully simple run with our Lifestyle Treadmill. A compact frame makes the most of your space, and the reliable drive system and durable deck will keep it running smoothly for years. We’ve even streamlined maintenance to minimize downtime, keeping your users happy.",
    ],
    highlights: [
      "60\" x 22\" — RUNNING SURFACE",
      "0.5–12 mph — SPEED RANGE",
      "0–15% — INCLINE RANGE",
      "LED Console with intuitive controls",
      "Compact frame maximizes floor space",
      "Reliable drive system and durable deck",
      "Beautifully simple workout experience",
    ],
    gallery: [
      { src: "/assets/products/matrix/lifestyle-treadmill/view-1.webp", alt: "Matrix Lifestyle Treadmill — view 1" },
      { src: "/assets/products/matrix/lifestyle-treadmill/view-2.webp", alt: "Matrix Lifestyle Treadmill — view 2" },
      { src: "/assets/products/matrix/lifestyle-treadmill/view-3.webp", alt: "Matrix Lifestyle Treadmill — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Drive System", value: "4.2 hp AC Dynamic Response Drive System" },
          { label: "Speed Range", value: "0.8–20 km/h / 0.5–12 mph" },
          { label: "Incline Range", value: "0–15% (700-lb. thrust-elevation motor)" },
          { label: "Running Surface Area", value: "152 x 56 cm / 60” x 22”" },
          { label: "Running Surface Type", value: "Belt and deck" },
          { label: "Cushioning System", value: "Ultimate Deck" },
          { label: "Handlebar Design", value: "Molded ergo-grip design" },
          { label: "Crossbar Controls", value: "Yes" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Step-on Height", value: "17.8 cm / 7”" },
          { label: "Service Caster", value: "No" },
          { label: "Cast Aluminum End Caps", value: "No" },
          { label: "Max User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Tread Sense", value: "Yes" },
          { label: "Assembled Dimensions", value: "201.1 x 90.4 x 164.2 cm / 79.2\" x 35.6\" x 64.6\"" },
          { label: "Power Requirements", value: "20 A dedicated circuit required, non-looped grounded" },
          { label: "Assembled Weight", value: "148 kg / 326.3 lbs." },
          { label: "Shipping Weight", value: "178 kg / 392.4 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/lifestyle-treadmill-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/lifestyle/treadmill/led",
    seo: {
      title: "Matrix Lifestyle Treadmill | GM Therapy",
      description: "Give the people you serve a beautifully simple run with our Lifestyle Treadmill. A compact frame makes the most of your space, and the reliable drive syste...",
    },
  },
  "123": {
    productId: "123",
    slug: "matrix-lifestyle-elliptical",
    tagline: "Ideal for light-use environments, our Lifestyle Elliptical features a compact frame to fit your facility. A patented suspension design minimizes noise and friction, extending product life.",
    overview: [
      "Ideal for light-use environments, our Lifestyle Elliptical features a compact frame to fit your facility. A patented suspension design minimizes noise and friction, extending product life. Smart ergonomics fits the body and its natural movements for comfortable, low-impact cardio, and convenience features improve the experience for users and facilities alike.",
    ],
    highlights: [
      "20\" — STRIDE LENGTH",
      "9.1\" — STEP-ON HEIGHT",
      "57.5\" x 28.75\" x 69\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Compact frame fits any facility",
      "Patented suspension design extends product life",
      "Smart ergonomics for natural body movement",
    ],
    gallery: [
      { src: "/assets/products/matrix/lifestyle-elliptical/view-1.webp", alt: "Matrix Lifestyle Suspension Elliptical — view 1" },
      { src: "/assets/products/matrix/lifestyle-elliptical/view-2.webp", alt: "Matrix Lifestyle Suspension Elliptical — view 2" },
      { src: "/assets/products/matrix/lifestyle-elliptical/view-3.webp", alt: "Matrix Lifestyle Suspension Elliptical — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Resistance System", value: "Brushless generator" },
          { label: "Minimum Watts", value: "5 W powered or 35 W self-powered" },
          { label: "Minimum RPM", value: "10 RPM powered or 30 RPM self-powered" },
          { label: "Stride Length", value: "51 cm / 20”" },
          { label: "Step-on Height", value: "23 cm / 9.1”" },
          { label: "Pedal Spacing", value: "6.4 cm / 2.5”" },
          { label: "Watt Range", value: "5–650 W" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Top-down Levelers", value: "No" },
          { label: "Max User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "151 x 73 x 175.7 cm / 59.4” x 28.7” x 69.2”" },
          { label: "Power Requirements", value: "Self-powered or 100–240 V — 50/60 Hz AC" },
          { label: "Assembled Weight", value: "151 kg / 332.9 lbs." },
          { label: "Shipping Weight", value: "173 kg / 381.4 lbs." },
          { label: "Resistance Levels", value: "25" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/lifestyle-elliptical-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/lifestyle/elliptical/led",
    seo: {
      title: "Matrix Lifestyle Suspension Elliptical | GM Therapy",
      description: "Ideal for light-use environments, our Lifestyle Elliptical features a compact frame to fit your facility. A patented suspension design minimizes noise and ...",
    },
  },
  "124": {
    productId: "124",
    slug: "matrix-lifestyle-climbmill",
    tagline: "Created for low-volume facilities, our Lifestyle ClimbMill features a compact design that makes it possible to bring climbing workouts to facilities with lower ceilings.",
    overview: [
      "Created for low-volume facilities, our Lifestyle ClimbMill features a compact design that makes it possible to bring climbing workouts to facilities with lower ceilings. Smart features make workouts comfortable and secure, and our durable components will keep your people climbing for years. It’s even as easy to service as it is to use, so it will always be ready.",
    ],
    highlights: [
      "10.5\" — STEP-ON HEIGHT",
      "9\" x 15.8\" x 5.6\" — STEP DIMENSIONS",
      "63\" x 28\" x 82\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Compact design fits facilities with lower ceilings",
      "Comfortable, secure climbing workout",
      "Durable components built to last",
    ],
    gallery: [
      { src: "/assets/products/matrix/lifestyle-climbmill/view-1.webp", alt: "Matrix Lifestyle ClimbMill — view 1" },
      { src: "/assets/products/matrix/lifestyle-climbmill/view-2.webp", alt: "Matrix Lifestyle ClimbMill — view 2" },
      { src: "/assets/products/matrix/lifestyle-climbmill/view-3.webp", alt: "Matrix Lifestyle ClimbMill — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Drive System", value: "Clutched ECB with industrial-grade drive chain and belt" },
          { label: "Step Dimensions", value: "23 x 40.2 x 14.3 cm / 9” x 15.8” x 5.6”" },
          { label: "Handlebar Design", value: "Side" },
          { label: "Control Zone", value: "No" },
          { label: "Locking Staircase", value: "Yes" },
          { label: "Top-down Levelers", value: "No" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Step-on Height", value: "26.7 cm / 10.5”" },
          { label: "Service Caster", value: "No" },
          { label: "Minimum User Weight", value: "45 kg / 99 lbs." },
          { label: "Maximum User Weight", value: "136 kg / 300 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "160 x 72 x 208 cm / 63.1” x 28.2” x 81.7”" },
          { label: "Power Requirements", value: "100–240 V — 50/60Hz AC" },
          { label: "Resistance Range", value: "24–160 SPM" },
          { label: "Assembled Weight", value: "147.1 kg / 324.4 lbs." },
          { label: "Shipping Weight", value: "164.1 kg / 361.8 lbs." },
          { label: "Resistance Levels", value: "25" },
        ],
      },
    ],
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/lifestyle/climbmill/led",
    seo: {
      title: "Matrix Lifestyle ClimbMill | GM Therapy",
      description: "Created for low-volume facilities, our Lifestyle ClimbMill features a compact design that makes it possible to bring climbing workouts to facilities with l...",
    },
  },
  "125": {
    productId: "125",
    slug: "matrix-lifestyle-recumbent",
    tagline: "Ideal for light-use facilities where space is at a premium, our compact Lifestyle Recumbent Cycle distributes weight comfortably and maximizes support for anyone who wants a low-impact cardio workout.",
    overview: [
      "Ideal for light-use facilities where space is at a premium, our compact Lifestyle Recumbent Cycle distributes weight comfortably and maximizes support for anyone who wants a low-impact cardio workout. Includes Ergo Form seat and back pad, step-through design, self-balancing pedals and three-piece crank with forged arms. Self-powered options offer easy placement in your facility.",
    ],
    highlights: [
      "Brushless generator — RESISTANCE SYSTEM",
      "8\" — PEDAL SPACING",
      "62\" x 26.4\" x 52\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Ergo Form seat for all-day comfort",
      "Step-through design for easy access",
      "Self-balancing pedals",
    ],
    gallery: [
      { src: "/assets/products/matrix/lifestyle-recumbent/view-1.webp", alt: "Matrix Lifestyle Recumbent Bike — view 1" },
      { src: "/assets/products/matrix/lifestyle-recumbent/view-2.webp", alt: "Matrix Lifestyle Recumbent Bike — view 2" },
      { src: "/assets/products/matrix/lifestyle-recumbent/view-3.webp", alt: "Matrix Lifestyle Recumbent Bike — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Resistance System", value: "Brushless generator" },
          { label: "Minimum Watts", value: "2 W powered or 13 W self-powered" },
          { label: "Minimum RPM", value: "10 RPM powered or 25 RPM self-powered" },
          { label: "Pedal Spacing", value: "20.2 cm / 8”" },
          { label: "Seat Material", value: "Custom one-piece, molded seat back and bottom" },
          { label: "Seat Adjustment", value: "Single-hand lever" },
          { label: "Crank Design", value: "Three piece with forged arms and integrated puller" },
          { label: "Top-down Levelers", value: "No" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Rear-lift Handle", value: "No" },
          { label: "Maximum User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "158.3 x 67.3 x 132.7 cm / 62.3” x 26.5” x 52.2”" },
          { label: "Power Requirements", value: "Self-powered or 100–240 V — 50/60 Hz AC" },
          { label: "Resistance Range", value: "2–750 W" },
          { label: "Assembled Weight", value: "89 kg / 196.2 lbs." },
          { label: "Shipping Weight", value: "108 kg / 238.1 lbs." },
          { label: "Resistance Levels", value: "30" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/lifestyle-recumbent-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/lifestyle/recumbent-cycle/led",
    seo: {
      title: "Matrix Lifestyle Recumbent Bike | GM Therapy",
      description: "Ideal for light-use facilities where space is at a premium, our compact Lifestyle Recumbent Cycle distributes weight comfortably and maximizes support for ...",
    },
  },
  "126": {
    productId: "126",
    slug: "matrix-lifestyle-upright",
    tagline: "A great choice for low-volume facilities, our compact Lifestyle Upright Cycle gives the people you serve comfortable, low-impact cardio.",
    overview: [
      "A great choice for low-volume facilities, our compact Lifestyle Upright Cycle gives the people you serve comfortable, low-impact cardio. It features an Ergo Form seat, dual-position handlebars, adjustable seat height, step-through design, self-balancing pedals and a three-piece crank with forged arms. Self-powered options offer easy placement in your facility.",
    ],
    highlights: [
      "Brushless generator — RESISTANCE SYSTEM",
      "8\" — PEDAL SPACING",
      "51\" x 23.3\" x 58\" — ASSEMBLED DIMENSIONS",
      "LED Console with intuitive controls",
      "Ergo Form seat for comfort",
      "Dual-position handlebars",
      "Adjustable seat height with step-through design",
    ],
    gallery: [
      { src: "/assets/products/matrix/lifestyle-upright/view-1.webp", alt: "Matrix Lifestyle Upright Bike — view 1" },
      { src: "/assets/products/matrix/lifestyle-upright/view-2.webp", alt: "Matrix Lifestyle Upright Bike — view 2" },
      { src: "/assets/products/matrix/lifestyle-upright/view-3.webp", alt: "Matrix Lifestyle Upright Bike — view 3" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Large number LED with message center" },
          { label: "Workouts", value: "Go, manual, interval training, fat burn, rolling hills, target heart rate, glute training†, fitness tests" },
          { label: "iFIT On-demand Workouts", value: "No" },
          { label: "Languages", value: "English, German, French, Italian, Spanish, Dutch, Portuguese, Swedish, Finnish, Turkish, Danish, Polish" },
          { label: "Fan", value: "No" },
          { label: "Analog TV", value: "Optional; attachable add-on TV" },
          { label: "Digital TV", value: "Optional; attachable add-on TV" },
          { label: "IPTV", value: "No" },
          { label: "Pro:Idiom Compatibility", value: "Optional; attachable add-on Pro:Idiom TV (≠ IPTV)" },
          { label: "WiFi", value: "Optional; included with Facility 360 and Community 360" },
          { label: "Bluetooth", value: "No" },
          { label: "ANT+", value: "No" },
          { label: "RFID Wireless Login", value: "Optional" },
          { label: "Connects to Apple Watch", value: "No" },
          { label: "Made for iPhone®, iPad®, iPod®", value: "No" },
          { label: "Connects to Samsung Galaxy Watch", value: "No" },
          { label: "USB Port", value: "Yes; device charging, software updates" },
          { label: "Wireless Charging (Qi)", value: "No" },
          { label: "CSAFE Ready", value: "Yes" },
          { label: "Auto Wake-up", value: "No" },
        ],
      },
      {
        title: "Frame",
        rows: [
          { label: "Resistance System", value: "Brushless generator" },
          { label: "Minimum Watts", value: "2 W powered or 13 W self-powered" },
          { label: "Minimum RPM", value: "10 RPM powered or 25 RPM self-powered" },
          { label: "Pedal Spacing", value: "20.2 cm / 8”" },
          { label: "Seat Material", value: "Sewn vinyl over foam" },
          { label: "Seat Adjustment", value: "Turn-and-pull knob" },
          { label: "Handlebar Design", value: "Dual-position" },
          { label: "Crank Design", value: "Three piece with forged arms and integrated puller" },
          { label: "Top-down Levelers", value: "No" },
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Rear-lift Handle", value: "No" },
          { label: "Maximum User Weight", value: "182 kg / 400 lbs." },
          { label: "Ethernet Connectivity", value: "Yes" },
          { label: "Assembled Dimensions", value: "129.4 x 61.7 x 147.4 cm / 50.9\" x 24.3\" x 58\"" },
          { label: "Power Requirements", value: "Self-powered or 100–240 V — 50/60 Hz AC" },
          { label: "Resistance Range", value: "2–750 W" },
          { label: "Assembled Weight", value: "70 kg / 154.3 lbs." },
          { label: "Shipping Weight", value: "82 kg / 180.8 lbs." },
          { label: "Resistance Levels", value: "30" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/lifestyle-upright-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/lifestyle/upright-cycle/led",
    seo: {
      title: "Matrix Lifestyle Upright Bike | GM Therapy",
      description: "A great choice for low-volume facilities, our compact Lifestyle Upright Cycle gives the people you serve comfortable, low-impact cardio.",
    },
  },
  "127": {
    productId: "127",
    slug: "matrix-vs-s13",
    tagline: "Make building and toning major chest muscles efficient and comfortable for virtually anyone with our Versa Converging Chest Press station.",
    overview: [
      "Make building and toning major chest muscles efficient and comfortable for virtually anyone with our Versa Converging Chest Press station. It’s specifically designed for easy entry and exit, and an adjustable start position helps all the different people you serve find the right range of motion. It includes independent converging movement for a path of motion that’s both natural and comfortable.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Converging press path for natural movement",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s13/view-1.webp", alt: "Matrix Versa Converging Chest Press — view 1" },
      { src: "/assets/products/matrix/vs-s13/view-2.webp", alt: "Matrix Versa Converging Chest Press — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "User adjustment range", value: "4 user start options" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "262 kg / 578 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "294 kg / 648 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "139.3 x 134.7 x 167.1 cm / 54.9” x 53.0” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Foot Support Kit", value: "Foot support kit accommodates users of all sizes for additional lower body support" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s13-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s13-converging-chest-press",
    seo: {
      title: "Matrix Versa Converging Chest Press | GM Therapy",
      description: "Make building and toning major chest muscles efficient and comfortable for virtually anyone with our Versa Converging Chest Press station.",
    },
  },
  "128": {
    productId: "128",
    slug: "matrix-vs-s22",
    tagline: "Make the most of your space with the smart design of our Versa Pec Fly / Rear Delt dual station. Designed to focus on major upper-body muscles, it features oversized grips to accommodate users of all sizes.",
    overview: [
      "Make the most of your space with the smart design of our Versa Pec Fly / Rear Delt dual station. Designed to focus on major upper-body muscles, it features oversized grips to accommodate users of all sizes. Additionally, the forward-facing user position makes every rep more comfortable and natural.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Dual-function pec fly and rear delt",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s22/view-1.webp", alt: "Matrix Versa Pec Fly / Rear Delt — view 1" },
      { src: "/assets/products/matrix/vs-s22/view-2.webp", alt: "Matrix Versa Pec Fly / Rear Delt — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "Adjustable Start Position from Front to Rear" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "224 kg / 492 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "256 kg / 542 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "150.5 x 169.0 x 167.1 cm / 59.2” x 66.5” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Total stack weight", value: "Heavy: 200 lbs (90 kg), Standard: 150 lbs (68 kg)" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s22-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s22-pectoral-fly-rear-delt",
    seo: {
      title: "Matrix Versa Pec Fly / Rear Delt | GM Therapy",
      description: "Make the most of your space with the smart design of our Versa Pec Fly / Rear Delt dual station. Designed to focus on major upper-body muscles, it features...",
    },
  },
  "129": {
    productId: "129",
    slug: "matrix-vs-s23",
    tagline: "Our Versa Converging Shoulder Press station makes building and toning deltoids efficient and comfortable.",
    overview: [
      "Our Versa Converging Shoulder Press station makes building and toning deltoids efficient and comfortable. An independent converging movement provides a natural path of motion, while counterbalanced pressing arms optimize starting resistance. It even includes dual-position hand grips for training variety.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Converging press path for natural shoulder movement",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s23/view-1.webp", alt: "Matrix Versa Converging Shoulder Press — view 1" },
      { src: "/assets/products/matrix/vs-s23/view-2.webp", alt: "Matrix Versa Converging Shoulder Press — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "2 User grip positions" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "266 kg / 585 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "297 kg / 655 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "171.0 x 143.7 x 203.6 cm / 67.3” x 56.6” x 80.1”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Foot Support Kit", value: "Foot support kit accommodates users of all sizes for additional lower body support" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Consistent stack height", value: "Yes" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s23-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s23-converging-shoulder-press",
    seo: {
      title: "Matrix Versa Converging Shoulder Press | GM Therapy",
      description: "Our Versa Converging Shoulder Press station makes building and toning deltoids efficient and comfortable.",
    },
  },
  "130": {
    productId: "130",
    slug: "matrix-vs-s33",
    tagline: "The versatile design of our Versa Diverging Lat Pulldown station makes refining and building lats more effective, efficient and comfortable.",
    overview: [
      "The versatile design of our Versa Diverging Lat Pulldown station makes refining and building lats more effective, efficient and comfortable. Independent diverging motion encourages a natural, smooth path, while independent arm movement offers exercise variety. An angled seat encourages proper user positioning, and the thigh pad easily adjusts to maximize stability and comfort for users of all sizes.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Diverging path mimics natural movement",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s33/view-1.webp", alt: "Matrix Versa Diverging Lat Pulldown — view 1" },
      { src: "/assets/products/matrix/vs-s33/view-2.webp", alt: "Matrix Versa Diverging Lat Pulldown — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "Adjustable Knee Pad" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "262 kg / 578 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "294 kg / 648 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "155.4 x 150.1 x 187.9 cm / 61.2” x 59.1” x 74.0”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s33-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s33-diverging-lat-pulldown",
    seo: {
      title: "Matrix Versa Diverging Lat Pulldown | GM Therapy",
      description: "The versatile design of our Versa Diverging Lat Pulldown station makes refining and building lats more effective, efficient and comfortable.",
    },
  },
  "131": {
    productId: "131",
    slug: "matrix-vs-s34",
    tagline: "For a more comfortable, more efficient way to focus on major back muscles, choose our Versa Diverging Seated Row station. Independent cable movement provides a smooth, user-defined path of motion and excellent exercise variety.",
    overview: [
      "For a more comfortable, more efficient way to focus on major back muscles, choose our Versa Diverging Seated Row station. Independent cable movement provides a smooth, user-defined path of motion and excellent exercise variety. An adjustable chest pad accommodates users of all sizes, while rotating grips and ergonomic hand positioning maximize comfort on every rep.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Diverging row path for natural pull",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s34/view-1.webp", alt: "Matrix Versa Diverging Seated Row — view 1" },
      { src: "/assets/products/matrix/vs-s34/view-2.webp", alt: "Matrix Versa Diverging Seated Row — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "User adjustment range", value: "Adjustable Chest Pad & Adjustable Seat" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "228 kg / 503 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "260 kg / 573 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "137.8 x 99.4 x 167.1 cm / 54.2” x 39.1” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Contoured seat", value: "Yes" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s34-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s34-diverging-seated-row",
    seo: {
      title: "Matrix Versa Diverging Seated Row | GM Therapy",
      description: "For a more comfortable, more efficient way to focus on major back muscles, choose our Versa Diverging Seated Row station. Independent cable movement provid...",
    },
  },
  "132": {
    productId: "132",
    slug: "matrix-vs-s40",
    tagline: "Choose our Versa Biceps Curl to help build upper-arm muscle efficiently and effectively.",
    overview: [
      "Choose our Versa Biceps Curl to help build upper-arm muscle efficiently and effectively. An angled pad provides stability and limits unwanted shoulder movement during exercise, while an optimized pivot point encourages a biomechanically correct range of motion.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Isolated bicep curl motion",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s40/view-1.webp", alt: "Matrix Versa Bicep Curl — view 1" },
      { src: "/assets/products/matrix/vs-s40/view-2.webp", alt: "Matrix Versa Bicep Curl — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "User adjustment range", value: "Adjustable Seat" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "253 kg / 558 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "276 kg / 608 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "121.8 x 127.0 x 167.1 cm / 48.0” x 50.0” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Foot Support Kit", value: "Foot Support Kit accomodates shorter individuals (Optional)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Total stack weight", value: "Heavy: 200 lbs (90 kg), Standard: 150 lbs (68 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s40-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s40-biceps-curl",
    seo: {
      title: "Matrix Versa Bicep Curl | GM Therapy",
      description: "Choose our Versa Biceps Curl to help build upper-arm muscle efficiently and effectively.",
    },
  },
  "133": {
    productId: "133",
    slug: "matrix-vs-s42",
    tagline: "Help your users tone and refine the triceps muscles with the smart design of the Versa Triceps Press. Rotating handles adapt to users of all sizes. An angled back pad reduces stress and improves stabilization and comfort.",
    overview: [
      "Help your users tone and refine the triceps muscles with the smart design of the Versa Triceps Press. Rotating handles adapt to users of all sizes. An angled back pad reduces stress and improves stabilization and comfort. The 5-pound incremental weight is easily accessible from the seated position.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Isolated tricep press motion",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s42/view-1.webp", alt: "Matrix Versa Triceps Press — view 1" },
      { src: "/assets/products/matrix/vs-s42/view-2.webp", alt: "Matrix Versa Triceps Press — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "Adjustable Seat & 2 Hand Positions" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "259 kg / 571 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "291 kg / 641 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "157.7 x 107.5 x 167.1 cm / 62.1” x 42.3” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s42-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s42-triceps-press",
    seo: {
      title: "Matrix Versa Triceps Press | GM Therapy",
      description: "Help your users tone and refine the triceps muscles with the smart design of the Versa Triceps Press. Rotating handles adapt to users of all sizes. An angl...",
    },
  },
  "134": {
    productId: "134",
    slug: "matrix-vs-s52",
    tagline: "The smart design of our Versa Back Extension makes targeting the lower back muscles comfortable and efficient. It includes an ergonomically contoured back pad, plus multi-position foot placement to accommodate a variety of users.",
    overview: [
      "The smart design of our Versa Back Extension makes targeting the lower back muscles comfortable and efficient. It includes an ergonomically contoured back pad, plus multi-position foot placement to accommodate a variety of users.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Targeted lower back strengthening",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s52/view-1.webp", alt: "Matrix Versa Back Extension — view 1" },
      { src: "/assets/products/matrix/vs-s52/view-2.webp", alt: "Matrix Versa Back Extension — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Adjustable Start Position", value: "Adjustable Start Position" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "227 kg / 500 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "259 kg / 570 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "133.5 x 126.4 x 167.1 cm / 52.6” x 49.8” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Placard color coding", value: "Green (core)" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Consistent stack height", value: "Yes" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s52-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s52-back-extension",
    seo: {
      title: "Matrix Versa Back Extension | GM Therapy",
      description: "The smart design of our Versa Back Extension makes targeting the lower back muscles comfortable and efficient. It includes an ergonomically contoured back ...",
    },
  },
  "135": {
    productId: "135",
    slug: "matrix-vs-s53",
    tagline: "Our Versa Abdominal station features a versatile three-position design to focus on abs, obliques and core rotation. It includes an ergonomic back pad for improved range of motion and comfort.",
    overview: [
      "Our Versa Abdominal station features a versatile three-position design to focus on abs, obliques and core rotation. It includes an ergonomic back pad for improved range of motion and comfort.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Targeted abdominal training",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s53/view-1.webp", alt: "Matrix Versa Abdominal — view 1" },
      { src: "/assets/products/matrix/vs-s53/view-2.webp", alt: "Matrix Versa Abdominal — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Adjustable Pulley Start Position", value: "Adjustable Pulley Start Position" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "213 kg / 470 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "245 kg / 540 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "136.6 x 141.4 x 167.1 cm / 53.8” x 55.7” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Placard color coding", value: "Green (core)" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Consistent stack height", value: "Yes" },
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s53-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s53-abdominal",
    seo: {
      title: "Matrix Versa Abdominal | GM Therapy",
      description: "Our Versa Abdominal station features a versatile three-position design to focus on abs, obliques and core rotation. It includes an ergonomic back pad for i...",
    },
  },
  "136": {
    productId: "136",
    slug: "matrix-vs-s70",
    tagline: "The versatile design of our Versa Leg Press / Calf Press station makes building and toning major leg muscles more efficient and comfortable than ever. A low step-over height and an assistance handle offer easy access for virtually anyone.",
    overview: [
      "The versatile design of our Versa Leg Press / Calf Press station makes building and toning major leg muscles more efficient and comfortable than ever. A low step-over height and an assistance handle offer easy access for virtually anyone. One-handed adjustments make getting started quick, while an air-shock assisted foot platform makes every adjustment smooth. Additionally, the footplate includes unique visual indicators to help optimize foot placement.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Dual-function leg and calf press",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s70/view-1.webp", alt: "Matrix Versa Leg Press / Calf Press — view 1" },
      { src: "/assets/products/matrix/vs-s70/view-2.webp", alt: "Matrix Versa Leg Press / Calf Press — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Range of Motion Adjustment", value: "Gas Assisted Foot Platform Adjustment" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight", value: "361 kg / 795 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "232.4 x 102.4 x 167.1 cm / 91.5” x 40.3” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Blue (lower body)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight plate increments", value: "25 lbs (11 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Total stack weight", value: "415 lbs (188 kg)" },
          { label: "Consistent stack height", value: "Yes" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s70-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s70-leg-press-calf-press",
    seo: {
      title: "Matrix Versa Leg Press / Calf Press | GM Therapy",
      description: "The versatile design of our Versa Leg Press / Calf Press station makes building and toning major leg muscles more efficient and comfortable than ever. A lo...",
    },
  },
  "137": {
    productId: "137",
    slug: "matrix-vs-s71",
    tagline: "Help your people focus on the major muscles of the upper leg with our efficient, comfortable Versa Leg Extension station.",
    overview: [
      "Help your people focus on the major muscles of the upper leg with our efficient, comfortable Versa Leg Extension station. The angled seat and back pad encourage full quadriceps contraction, while clearly marked pivot points optimize user alignment. A self-adjusting tibia pad provides comfortable support, and the back pad easily adjusts from a seated position.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Isolated quadriceps training",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s71/view-1.webp", alt: "Matrix Versa Leg Extension — view 1" },
      { src: "/assets/products/matrix/vs-s71/view-2.webp", alt: "Matrix Versa Leg Extension — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "Range of Motion & Tibia Adjustments", value: "Range of Motion adjustment & self-aligning tibia pad" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "233 kg / 514 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "265 kg / 584 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "183.5 x 128.9 x 167.1 cm / 72.3” x 50.7” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Ratcheting Back Pad", value: "Yes" },
          { label: "Placard color coding", value: "Blue (lower body)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s71-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s71-leg-extension",
    seo: {
      title: "Matrix Versa Leg Extension | GM Therapy",
      description: "Help your people focus on the major muscles of the upper leg with our efficient, comfortable Versa Leg Extension station.",
    },
  },
  "138": {
    productId: "138",
    slug: "matrix-vs-s72",
    tagline: "Make toning and building major leg muscles more comfortable and efficient with our Versa Seated Leg Curl.",
    overview: [
      "Make toning and building major leg muscles more comfortable and efficient with our Versa Seated Leg Curl. It offers a full range of motion for leg extensions and hamstring curls, plus an angled seat and optimized pivot point to encourage full hamstring contraction. The comfort-enhancing thigh pad, back pad and tibia pad are all easily adjustable from a seated position.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Isolated hamstring training",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s72/view-1.webp", alt: "Matrix Versa Seated Leg Curl — view 1" },
      { src: "/assets/products/matrix/vs-s72/view-2.webp", alt: "Matrix Versa Seated Leg Curl — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "Range of Motion Adjustments", value: "Range of Motion, Knee Pad & Ankle Pad Adjustments" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight", value: "261 kg / 575 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "284 kg / 625 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "176.9 x 113.3 x 167.1 cm / 69.7” x 44.6” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Ratcheting Back Pad", value: "Yes" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Blue (lower body)" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
          { label: "Total stack weight", value: "Heavy: 200 lbs (90 kg), Standard: 150 lbs (68 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s72-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s72-seated-leg-curl",
    seo: {
      title: "Matrix Versa Seated Leg Curl | GM Therapy",
      description: "Make toning and building major leg muscles more comfortable and efficient with our Versa Seated Leg Curl.",
    },
  },
  "139": {
    productId: "139",
    slug: "matrix-vs-s74",
    tagline: "Offer your people more functionality in less space with our Versa Hip Abductor / Adductor dual station.",
    overview: [
      "Offer your people more functionality in less space with our Versa Hip Abductor / Adductor dual station. It transitions smoothly from one exercise to the other, and clearly indicated adjustment points make it easy for virtually anyone to get comfortable and get started. It even includes a reclined position to maximize lumbar support during workouts.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Dual-function inner and outer thigh",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s74/view-1.webp", alt: "Matrix Versa Hip Abductor / Adductor — view 1" },
      { src: "/assets/products/matrix/vs-s74/view-2.webp", alt: "Matrix Versa Hip Abductor / Adductor — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Range of Motion Adjustment", value: "Range of Motion adjustment" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "235 kg / 516 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "266 kg / 586 lbs." },
          { label: "Overall Dimensions (L x W x H)", value: "169.6 x 159.1 x 167.1 cm / 66.8” x 62.6” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Placard color coding", value: "Blue (lower body)" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Total stack weight", value: "Heavy: 230 lbs (104 kg), Standard: 160 lbs (72 kg)" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight plate increments", value: "Heavy: 15 lbs (6.8 kg) & 10 lbs (4.5 kg), Standard: 10 lbs (4.5 kg)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s74-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s74-hip-abductor-adductor",
    seo: {
      title: "Matrix Versa Hip Abductor / Adductor | GM Therapy",
      description: "Offer your people more functionality in less space with our Versa Hip Abductor / Adductor dual station.",
    },
  },
  "140": {
    productId: "140",
    slug: "matrix-vs-s78",
    tagline: "Building and toning glutes has always been popular, but it’s never been as accessible and comfortable as it is with our Versa Glute station.",
    overview: [
      "Building and toning glutes has always been popular, but it’s never been as accessible and comfortable as it is with our Versa Glute station. The upright user position and the low step-on height of the stabilization platform make it easy for users to get started. The chest pad adjusts to encourage proper body positioning, while the contoured elbow pads and large foot pad enhance comfort.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Targeted glute strengthening",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s78/view-1.webp", alt: "Matrix Versa Glute — view 1" },
      { src: "/assets/products/matrix/vs-s78/view-2.webp", alt: "Matrix Versa Glute — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "Adjustable Chest Pad", value: "Telescoping Chest Pad" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Frame color", value: "Iced Silver" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight", value: "185 kg / 409 lbs." },
          { label: "Overall dimensions (L x W x H)", value: "177.8 x 99.9 x 167.1 cm / 70.0” x 39.3” x 65.8”" },
          { label: "Rep counter machine usage tracking", value: "Service mode tracks total machine reps and hours of use" },
          { label: "Rep counter battery life", value: "Approximately 3 years" },
          { label: "Rep counter power supply", value: "2 AA batteries" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Placard color coding", value: "Blue (lower body)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (Towel Holder on Rep Counter Only)" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight Stack", value: "68 kg / 150 lbs." },
          { label: "Weight plate increments", value: "10 lbs (4.5 kg)" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s78-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s78-glute",
    seo: {
      title: "Matrix Versa Glute | GM Therapy",
      description: "Building and toning glutes has always been popular, but it’s never been as accessible and comfortable as it is with our Versa Glute station.",
    },
  },
  "141": {
    productId: "141",
    slug: "matrix-vs-s131",
    tagline: "Our Versa Multi-Press station makes building and toning major upper-body muscles accessible, efficient and comfortable, including flat, incline, and shoulder press movements.",
    overview: [
      "Our Versa Multi-Press station makes building and toning major upper-body muscles accessible, efficient and comfortable, including flat, incline, and shoulder press movements. It’s specifically designed for easy entry and exit, and the dual-position grips provide excellent training variety. It includes clearly indicated adjustment points for easy use, a reclined position to maximize lumbar support and elevated footrests for superior stability and comfort during heavy lifts.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Multi-function chest and shoulder press",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s131/view-1.webp", alt: "Matrix Versa Multi Press — view 1" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "3 user start options" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "236 kg / 520 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "268 kg / 590 lbs." },
          { label: "Overall Dimensions (L x W x H)", value: "154.3 x 157.2 x 199.9 cm / 60.7” x 61.9” x 78.7”" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Foot Support", value: "Foot support accommodates users of all sizes for additional lower body support" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Standard Stack", value: "72 kg / 160 lbs." },
          { label: "Heavy Stack", value: "104 kg / 230 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s131-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s131-multi-press",
    seo: {
      title: "Matrix Versa Multi Press | GM Therapy",
      description: "Our Versa Multi-Press station makes building and toning major upper-body muscles accessible, efficient and comfortable, including flat, incline, and should...",
    },
  },
  "142": {
    productId: "142",
    slug: "matrix-vs-s331",
    tagline: "Maximize the functionality of your space with the smart, versatile design of our the Versa Lat Pulldown / Seated Row dual station.",
    overview: [
      "Maximize the functionality of your space with the smart, versatile design of our the Versa Lat Pulldown / Seated Row dual station. The thigh pad easily adjusts to provide stability and comfort when building and toning major back muscles, and clearly indicated adjustment points make it easy for virtually anyone to get started. Elevated footrests provide added stability during heavy lifts, and stainless-steel cables offer lasting durability in hard-use environments.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Dual-function pulldown and row",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s331/view-1.webp", alt: "Matrix Versa Lat Pulldown / Seated Row — view 1" },
    ],
    specGroups: [
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "246 kg / 543 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "278 kg / 613 lbs." },
          { label: "Overall Dimensions (L x W x H)", value: "180.5 x 158 x 227 cm / 71.1” x 62.2” x 89.1”" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Contoured seat", value: "Yes" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Foot Support", value: "Foot support accommodates users of all sizes for additional lower body support" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Standard Stack", value: "72 kg / 160 lbs." },
          { label: "Heavy Stack", value: "104 kg / 230 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s331-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s331-lat-pulldown-seated-row",
    seo: {
      title: "Matrix Versa Lat Pulldown / Seated Row | GM Therapy",
      description: "Maximize the functionality of your space with the smart, versatile design of our the Versa Lat Pulldown / Seated Row dual station.",
    },
  },
  "143": {
    productId: "143",
    slug: "matrix-vs-s401",
    tagline: "Help your users tone and refine the muscles of their arms with the smart design of our Versa Biceps / Triceps dual station.",
    overview: [
      "Help your users tone and refine the muscles of their arms with the smart design of our Versa Biceps / Triceps dual station. Clearly indicated adjustments make use intuitive for virtually anyone, while the foot platform offers excellent stability. Count on the stainless-steel cable guides to provide lasting durability, even in the busiest environments.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Dual-function arm trainer",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s401/view-1.webp", alt: "Matrix Versa Bicep / Tricep — view 1" },
    ],
    specGroups: [
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "214 kg / 472 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "237 kg / 522 lbs." },
          { label: "Overall Dimensions (L x W x H)", value: "166.6 x 115.2 x 226.2 cm / 65.6” x 45.3” x 89.1”" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Standard Stack", value: "68 kg / 150 lbs." },
          { label: "Heavy Stack", value: "90 kg / 200 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s401-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s401-bicep-tricep",
    seo: {
      title: "Matrix Versa Bicep / Tricep | GM Therapy",
      description: "Help your users tone and refine the muscles of their arms with the smart design of our Versa Biceps / Triceps dual station.",
    },
  },
  "144": {
    productId: "144",
    slug: "matrix-vs-s531",
    tagline: "Designed for efficiency and versatility, our Versa Ab / Low Back station makes a great core workout accessible to virtually anyone.",
    overview: [
      "Designed for efficiency and versatility, our Versa Ab / Low Back station makes a great core workout accessible to virtually anyone. An angled seat and lumbar pad make use comfortable, while low handle positioning offers easy entry, easy exit and enhanced stability. Clearly indicated adjustments make use intuitive, and multi-position foot placement accommodates a variety of users.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Dual-function abdominal and lower back",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s531/view-1.webp", alt: "Matrix Versa Ab / Low Back — view 1" },
    ],
    specGroups: [
      {
        title: "Versa Ab / Low Back",
        rows: [
          { label: "160 lbs.", value: "STANDARD STACK" },
          { label: "52.1\" x 51.8\" x 65.8\"", value: "OVERALL DIMENSIONS (L x W x H)" },
          { label: "230 lbs.", value: "HEAVY STACK" },
        ],
      },
    ],
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s531-abdominal-back-extension",
    seo: {
      title: "Matrix Versa Ab / Low Back | GM Therapy",
      description: "Designed for efficiency and versatility, our Versa Ab / Low Back station makes a great core workout accessible to virtually anyone.",
    },
  },
  "145": {
    productId: "145",
    slug: "matrix-vs-s601",
    tagline: "Our Versa Chin / Dip Assist station packs a remarkable range of functionality into a space-efficient footprint.",
    overview: [
      "Our Versa Chin / Dip Assist station packs a remarkable range of functionality into a space-efficient footprint. Multi-position pull-up handles offer exercise variety, and ideally angled dip grips encourage proper wrist placement and muscle variation. The gas-assisted knee platform even folds up for unassisted bodyweight exercises. Clearly indicated, conveniently located adjustment points make use intuitive and provide users with a hard stop to help prevent injury. The knee platform features a protective top pad for stability, while the large, textured foot platforms make it easy to get on and off.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Assisted chin-up and dip station",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s601/view-1.webp", alt: "Matrix Versa Chin / Dip Assist — view 1" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "2 user start options" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight", value: "307 kg / 676 lbs." },
          { label: "Overall Dimensions (L x W x H)", value: "142.8 x 152.8 x 219.7 cm / 56.2” x 60.2” x 86.5”" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Yellow (upper body)" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Upholstery/cables/grips/springs", value: "1 year" },
          { label: "Frame and welds (not coatings)", value: "10 years" },
          { label: "Weight Stacks", value: "5 years" },
          { label: "Pulleys & Pivot Bearings", value: "5 years" },
          { label: "Other Items Not Specified", value: "3 years" },
          { label: "Labor", value: "3 years" },
          { label: "Accessories", value: "6 months" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Consistent stack height", value: "Yes" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight Stack", value: "68 kg / 150 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s601-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s601-chin-dip-assist",
    seo: {
      title: "Matrix Versa Chin / Dip Assist | GM Therapy",
      description: "Our Versa Chin / Dip Assist station packs a remarkable range of functionality into a space-efficient footprint.",
    },
  },
  "146": {
    productId: "146",
    slug: "matrix-vs-s711",
    tagline: "Help your users tone and refine the muscles of their legs with the smart design of our Versa Leg Extension/ Leg Curl dual station.",
    overview: [
      "Help your users tone and refine the muscles of their legs with the smart design of our Versa Leg Extension/ Leg Curl dual station. Clearly indicated, conveniently located adjustment points make use intuitive and provide users with a hard stop to help prevent injury. Dual-action CAM enables a smooth transition between exercises. Back pad ratchets forward for easy adjustment from the seated position. Angled pads and ideal pivot location promote full muscle contraction and alignment.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Gas-Assisted Seat Adjustment — Offers smooth, instant adjustment, with a 4-bar linkage for increased stability.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Decorative Top Wing — Bottle holder, storage area, and towel holder",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "Dual-function leg extension and curl",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-s711/view-1.webp", alt: "Matrix Versa Leg Extension / Leg Curl — view 1" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "User adjustment range", value: "12 user start options" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Overall Dimensions (L x W x H)", value: "177.6 x 118.3 x 167.1 cm / 69.9” x 46.6” x 65.8”" },
          { label: "Product Weight (Standard Stack)", value: "251 kg / 554 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "283 kg / 624 lbs." },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Contoured seat", value: "Yes" },
          { label: "Placard color coding", value: "Blue (lower body)" },
          { label: "Rep counter", value: "Electronic counter displays reps, exercise time and rest time & provides towel holder hook" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Consistent stack height", value: "Yes" },
          { label: "Incremental weight system", value: "5 lbs (2.3 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Standard Stack", value: "72 kg / 160 lbs." },
          { label: "Heavy Stack", value: "104 kg / 230 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-s711-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/vs-s711-leg-extension-seated-leg-curl",
    seo: {
      title: "Matrix Versa Leg Extension / Leg Curl | GM Therapy",
      description: "Help your users tone and refine the muscles of their legs with the smart design of our Versa Leg Extension/ Leg Curl dual station.",
    },
  },
  "147": {
    productId: "147",
    slug: "matrix-md-ap",
    tagline: "The Versa MD Adjustable Pulley features low starting weight and incremental weight changes, helping injured or deconditioned clients get started and progress quickly.",
    overview: [
      "The Versa MD Adjustable Pulley features low starting weight and incremental weight changes, helping injured or deconditioned clients get started and progress quickly. Single-handed height adjustment allows for easy transition between 35 clearly numbered adjustment points, providing maximum training versatility.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "150 lbs. — WEIGHT STACK",
      "42.2\" x 49.3\" x 89.8\" — OVERALL DIMENSIONS (L x W x H)",
      "Multi-position adjustable pulley",
    ],
    gallery: [
      { src: "/assets/products/matrix/md-ap/view-1.webp", alt: "Matrix Versa MD Adjustable Pulley — view 1" },
    ],
    specGroups: [
      {
        title: "Frame & Cables",
        rows: [
          { label: "Available frame color", value: "Iced Silver, Matte Black, Gloss Black, Lace White, Polarized Titanium" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Cable travel", value: "201cm / 79”" },
          { label: "Machine anchoring locations", value: "3" },
          { label: "Transportation wheels", value: "Yes (Optional)" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Overall dimensions (L x W x H)", value: "107.2 x 125.0 x 228.0 cm / 42.2” x 49.3” x 89.8" },
          { label: "Product weight", value: "174 kg / 384 lbs" },
          { label: "ROM positions", value: "35" },
          { label: "Max user weight", value: "N/A" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Placard color coding", value: "Yellow (upper body), Blue (Lower Body), Green (Core)" },
          { label: "Color coded points of adjustment", value: "Yes" },
          { label: "Balance Bar", value: "Yes (Optional)" },
          { label: "Medical Stability Handles", value: "Yes (Optional)" },
          { label: "IFI Compliant", value: "Yes (Optional Kit)" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight stack", value: "68 kg / 150 lbs" },
          { label: "Weight stack effective resistance", value: "34 kg / 75 lbs" },
          { label: "Incremental weight system", value: ".9, 1.8, 2.7, 3.6 kg / 2, 4, 6, 8 lbs" },
          { label: "Incremental weight effective resistance", value: ".45, .9, 1.35, 1.8 kg / 1, 2, 3, 4 lbs" },
          { label: "Starting weight", value: "2.3 kg / 5 lbs." },
          { label: "Max training weight", value: "71.6 kg / 158 lbs" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "United States: English", value: "×" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/md-ap-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/md-ap-adjustable-pulley",
    seo: {
      title: "Matrix Versa MD Adjustable Pulley | GM Therapy",
      description: "The Versa MD Adjustable Pulley features low starting weight and incremental weight changes, helping injured or deconditioned clients get started and progre...",
    },
  },
  "148": {
    productId: "148",
    slug: "matrix-md-s70",
    tagline: "The Versa MD Leg Press features a carriage lockout and gas-assisted foot platform, allowing medical professionals to quickly and easily change or restrict the range of motion to prevent overextension.",
    overview: [
      "The Versa MD Leg Press features a carriage lockout and gas-assisted foot platform, allowing medical professionals to quickly and easily change or restrict the range of motion to prevent overextension. Integration of band hooks increases exercise variation and training style by introducing elastic resistance to rehabilitation and progression programs.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "300 lbs. — WEIGHT STACK",
      "103.7\" x 48\" x 74.2\" — OVERALL DIMENSIONS (L x W x H)",
      "Compact leg press design",
    ],
    gallery: [
      { src: "/assets/products/matrix/md-s70/view-1.webp", alt: "Matrix Versa MD Leg Press — view 1" },
      { src: "/assets/products/matrix/md-s70/view-2.webp", alt: "Matrix Versa MD Leg Press — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color points of adjustment", value: "Yes" },
          { label: "Seat back angle adjustment", value: "Yes, 8 positions (2.5°, 15.5°, 28°, 38°, 48°, 58°, 68° and 78°)" },
          { label: "Weight stack disengagement", value: "Yes" },
          { label: "Range of motion limitation", value: "27 positions" },
          { label: "Shoulder pad height adjustment", value: "11 positions" },
          { label: "Shoulder pad width adjustment", value: "Yes" },
          { label: "Band attachment points", value: "Yes, 4" },
          { label: "Range of motion start adjustment", value: "Gas assisted foot platform adjustment, 13 positions, dual adjustment (user or therapist)" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Available frame color", value: "Iced Silver, Matte Black, Gloss Black, Lace White, Polarized Titanium" },
          { label: "Available upholstery color", value: "Black, American Beauty Red" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "2" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Overall dimensions (L x W x H)", value: "263.7 x 121.9 x 188.3 cm / 103.8” x 48” x 74.2”" },
          { label: "Product weight", value: "372 kg / 820 lbs" },
          { label: "Max user weight", value: "159 kg / 350 lbs" },
          { label: "Modes of Operation", value: "Isometric, Loaded Isometric, Isotonic, Plyometric, Elastic" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Front placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Placard color coding", value: "Blue (lower body)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Foot placement zones", value: "Yes, 6 positions" },
          { label: "Personal storage", value: "Storage Area" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight stack", value: "136 kg / 300 lbs" },
          { label: "Incremental weight system", value: ".9, 1.8, 2.7, 3.6 kg / 2, 4, 6, 8 lbs (Optional)" },
          { label: "Max training weight", value: "139.6 kg / 308 lbs" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/md-s70-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/md-s70-leg-press",
    seo: {
      title: "Matrix Versa MD Leg Press | GM Therapy",
      description: "The Versa MD Leg Press features a carriage lockout and gas-assisted foot platform, allowing medical professionals to quickly and easily change or restrict ...",
    },
  },
  "149": {
    productId: "149",
    slug: "matrix-md-s711",
    tagline: "The Versa MD Leg Extension / Leg curl features a low starting weight and incremental weight changes, helping injured or deconditioned clients get started and progress quickly.",
    overview: [
      "The Versa MD Leg Extension / Leg curl features a low starting weight and incremental weight changes, helping injured or deconditioned clients get started and progress quickly. Range-of-motion limiter restricts the stroke for isometric contractions and protects clients from overextending.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "200 lbs. — WEIGHT STACK",
      "65.2\" x 49.4\" x 64\" — OVERALL DIMENSIONS (L x W x H)",
      "Compact dual-function leg trainer",
    ],
    gallery: [
      { src: "/assets/products/matrix/md-s711/view-1.webp", alt: "Matrix Versa MD Leg Extension / Leg Curl — view 1" },
      { src: "/assets/products/matrix/md-s711/view-2.webp", alt: "Matrix Versa MD Leg Extension / Leg Curl — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "12 user starting positions" },
          { label: "Range limiter", value: "Yes" },
          { label: "Swing arm adjustment", value: "Yes, pivots thigh pad away from user" },
          { label: "Back pad horizontal adjustment", value: "Yes, gas assisted, 7 positions" },
          { label: "Back pad recline adjustment", value: "Yes, gas assisted, 4 positions (10°, 20°, 30° and 45°)" },
          { label: "Seat pivot adjustment", value: "Yes, 2 positions to align knees with pivot when performing different exercises" },
          { label: "Ankle pad adjustment", value: "Yes, 4 positions" },
          { label: "Thigh pad adjustment", value: "Yes, gas assisted, 9 positions" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver, Matte Black, Gloss Black, Lace White, Polarized Titanium" },
          { label: "Available upholstery color", value: "Black, American Beauty Red" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "3" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Overall dimensions (L x W x H)", value: "217 x 125.4 x 162.5 cm / 85.5” x 49.4 x 64”" },
          { label: "Product weight", value: "340 kg / 750 lbs" },
          { label: "Max user weight", value: "159 kg / 350 lbs" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Front placards", value: "Muscle call outs, machine specific stretching, start & finish exercise illustrations, proper machine movements" },
          { label: "Placard color coding", value: "Blue (lower body)" },
          { label: "Rear placards", value: "Color-coded machine identification & machine specific stretching" },
          { label: "Personal storage", value: "Storage Area" },
          { label: "Contoured seat", value: "Yes" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight stack", value: "91 kg / 200 lbs" },
          { label: "Incremental weight system", value: ".9, 1.8, 2.7, 3.6 kg / 2, 4, 6, 8 lbs" },
          { label: "Max training weight", value: "94.6 kg / 208 lbs" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/md-s711-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/single-station/md-s711-leg-extension-leg-curl",
    seo: {
      title: "Matrix Versa MD Leg Extension / Leg Curl | GM Therapy",
      description: "The Versa MD Leg Extension / Leg curl features a low starting weight and incremental weight changes, helping injured or deconditioned clients get started a...",
    },
  },
  "150": {
    productId: "150",
    slug: "matrix-ubc-m",
    tagline: "Add a unique, accessible experience to your facility with our UBC-M Upper Body Cycle.",
    overview: [
      "Add a unique, accessible experience to your facility with our UBC-M Upper Body Cycle. An easy-to-use, easy-to-move option, our self-powered Upper Body Cycle features a portable design, easily adjustable manual resistance and a backlit LCD that provides complete workout feedback.",
      "No matter their age or ability level, now everyone can take on progressive, strength-building cardio workouts.",
    ],
    highlights: [
      "Manual Magnetic Resistance — RESISTANCE SYSTEM",
      "Generator-powered — POWER REQUIREMENT",
      "450 lbs. — MAX USER WEIGHT",
      "Self-powered, portable design",
      "Easily adjustable manual resistance",
      "Backlit LCD with complete workout feedback",
      "Synchronous, asynchronous and independent rotations",
    ],
    gallery: [
      { src: "/assets/products/matrix/ubc-m/view-1.webp", alt: "Matrix Upper Body Cycle UBC-M — view 1" },
      { src: "/assets/products/matrix/ubc-m/view-2.webp", alt: "Matrix Upper Body Cycle UBC-M — view 2" },
      { src: "/assets/products/matrix/ubc-m/view-3.webp", alt: "Matrix Upper Body Cycle UBC-M — view 3" },
    ],
    specGroups: [
      {
        title: "Console Specs",
        rows: [
          { label: "Display", value: "Backlit LCD" },
          { label: "WiFi", value: "No" },
          { label: "ANT+ / BLE", value: "Yes" },
          { label: "Telemetric HR", value: "Yes" },
          { label: "Power Requirements", value: "Generator-powered" },
          { label: "Workouts", value: "Custom intervals" },
          { label: "Asset Management Compatible", value: "No" },
          { label: "Training Intensity Guide", value: "No" },
        ],
      },
      {
        title: "Frame Specs",
        rows: [
          { label: "Drivetrain", value: "Roller chain and poly V belt" },
          { label: "Resistance System", value: "Manual magnetic" },
          { label: "Adjustment Type", value: "Quick release lever" },
          { label: "Seat Design", value: "Sculpted self-skinning PU seat for durability and comfort" },
          { label: "On Product Seat Storage", value: "Yes" },
          { label: "Handle Design", value: "Ergo Form™ neutral grip" },
          { label: "Crank Design", value: "Forged steel, 17 cm / 6.7\"" },
          { label: "Leveling Feet", value: "2 front fixed, 2 rear top-down levelers" },
          { label: "Transport Handle", value: "Yes" },
          { label: "Transport Wheels", value: "Yes: 2" },
          { label: "Product Weight", value: "105.1 kg / 231.7 lbs." },
          { label: "Max User Weight", value: "204 kg / 450 lbs." },
          { label: "Overall Dimensions (L x W)", value: "159.6 cm x 78.4 cm / 62.8\" x 30.9\"" },
          { label: "Overall Dimensions (H)", value: "127.5–161.3 cm / 50.1–63.5\"" },
          { label: "Flywheel", value: "Perimeter weighted cast iron" },
          { label: "Water Bottle Holder", value: "Yes" },
          { label: "Frame Material", value: "Steel" },
          { label: "Shrouds", value: "Drive system and base frame" },
          { label: "Q-factor", value: "37.5 cm / 14.7\"" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/ubc-m-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/group-training/cardio/upper-body-cycle-ubcm",
    seo: {
      title: "Matrix Upper Body Cycle UBC-M | GM Therapy",
      description: "Add a unique, accessible experience to your facility with our UBC-M Upper Body Cycle.",
    },
  },
  "151": {
    productId: "151",
    slug: "matrix-r3xm",
    tagline: "Commercial-grade Matrix Fitness equipment for high-traffic facilities.",
    overview: [
      "Commercial-grade Matrix Fitness equipment for high-traffic facilities.",
    ],
    highlights: [
      "Effortless one-hand seat adjustment",
      "Seat swivels 160° and locks at right, left and center",
      "Step-through design for easy entry and exit",
      "Self-balancing pedals with heel cups and adjustable straps",
      "Independently length-adjustable crank arms (1.5\\",
      ")",
      "Self-powered with bright LED console",
    ],
    gallery: [
      { src: "/assets/products/matrix/r3xm/view-1.webp", alt: "Matrix R3xm Recumbent Cycle — view 1" },
      { src: "/assets/products/matrix/r3xm/view-2.webp", alt: "Matrix R3xm Recumbent Cycle — view 2" },
    ],
    specGroups: [
      {
        title: "Console",
        rows: [
          { label: "Display Type", value: "Dot-matrix LED with profile display" },
          { label: "Display Feedback", value: "Time of Day, Time Elapsed, Time Remaining, Total Program Time, Distance (Kilometers or Miles), Calories, Level, Speed, RPM, Heart Rate, METs, Watts, Workout Profile" },
          { label: "Resistance Range", value: "30-Jan" },
          { label: "Workouts", value: "Manual, Constant Watts, Fat Burn, Interval Training, Target HR, Fitness Test" },
          { label: "IPTV Compatible", value: "No" },
          { label: "Pro:Idiom Compatible", value: "No" },
          { label: "Instant On Technology", value: "Yes" },
          { label: "WiFi Enabled", value: "Optional" },
          { label: "Bluetooth Enabled", value: "No" },
          { label: "USB Port", value: "Yes" },
          { label: "RFID Compatible", value: "No" },
        ],
      },
      {
        title: "Features",
        rows: [
          { label: "Contact & Telemetric HR", value: "Yes" },
          { label: "Handlebar Design", value: "Seat side / Front ergo bend" },
          { label: "Integrated Arm Rests", value: "No" },
          { label: "Remote Resistance Controls", value: "Yes" },
          { label: "Bottle Holder", value: "Yes" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Crank Design", value: "User Adjustable Cranks" },
          { label: "Power Requirements", value: "Self-powered / powered 100v-240v - 50/60Hz AC" },
          { label: "Minimum Watts", value: "4 powered / 7 self-powered" },
          { label: "Minimum RPM", value: "25 powered / 25 self-powered" },
          { label: "Assembled Dimensions", value: "150.3 x 65.4 x 140 cm / 59.2” x 25.7” x 55.1”" },
          { label: "Max User Weight", value: "182 kg / 400 lbs." },
          { label: "Assembled Weight", value: "87.5 kg / 192.9 lbs." },
          { label: "Shipping Weight", value: "99.7kg / 219 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/r3xm-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/cardio/cycles/r3xm-recumbent",
    seo: {
      title: "Matrix R3xm Recumbent Cycle | GM Therapy",
      description: "Commercial-grade Matrix Fitness equipment for high-traffic facilities.",
    },
  },
  "152": {
    productId: "152",
    slug: "matrix-go-ft",
    tagline: "Now you can make functional training accessible to all with a versatile functional trainer that fits your space, budget and members' needs.",
    overview: [
      "Now you can make functional training accessible to all with a versatile functional trainer that fits your space, budget and members' needs.",
    ],
    highlights: [
      "51\" x 54\" x 83.5\" — OVERALL DIMENSIONS",
      "400 lbs. — MAX TRAINING WEIGHT",
      "300 lbs. — MAX USER WEIGHT",
      "Walk-through frame with cleanly routed cables",
      "Single centralized weight stack",
      "Variable pulley ratio for strength or explosive movements",
      "Available in GO-FT3 and GO-FT4 configurations",
    ],
    gallery: [
      { src: "/assets/products/matrix/go-ft/view-1.webp", alt: "Matrix Go Series Functional Trainer — view 1" },
      { src: "/assets/products/matrix/go-ft/view-2.webp", alt: "Matrix Go Series Functional Trainer — view 2" },
      { src: "/assets/products/matrix/go-ft/view-3.webp", alt: "Matrix Go Series Functional Trainer — view 3" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color-coded Pivots & Points of Adjustment", value: "Yes" },
          { label: "User Adjustment Range", value: "25 user start options" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Cable Transmission", value: "Internally lubricated cables and fittings" },
          { label: "Machine Anchoring Locations", value: "Yes" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (GO-FT3)", value: "246.5 kg / 543.4 lbs." },
          { label: "Product Weight (GO-FT4)", value: "292 kg / 643.4 lbs." },
          { label: "Overall Dimensions (L x W x H)", value: "129.5 x 137.5 x 212 cm / 51” x 54” x 83.5”" },
          { label: "Max Training Weight", value: "180 kg / 400 lbs." },
          { label: "Max User Weight", value: "136 kg / 300 lbs." },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Accessory Storage", value: "Integrated storage for attachments and optional accessories" },
          { label: "Multi-grip Pull-up Bars", value: "Various grip angles for variety of exercise" },
          { label: "Placards", value: "Muscle call-outs, color-coded, start and finish exercise illustrations" },
          { label: "Placard Color Coding", value: "Yellow (upper body), blue (lower body), green (core)" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight Stack Guarding", value: "Full front and rear shields" },
          { label: "GO-FT3 Weight Stack", value: "136 kg / 300 lbs. actual weight" },
          { label: "GO-FT4 Weight Stack", value: "180 kg / 400 lbs. actual weight" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/go-ft-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/multi-station/go-ft-functional-trainer",
    seo: {
      title: "Matrix Go Series Functional Trainer | GM Therapy",
      description: "Now you can make functional training accessible to all with a versatile functional trainer that fits your space, budget and members' needs.",
    },
  },
  "153": {
    productId: "153",
    slug: "matrix-mg-pro690ex",
    tagline: "Choose the open design of our Magnum PRO XL Half Rack for a heavy-duty training option that’s easy to access for your users and easy to optimize for your needs.",
    overview: [
      "Choose the open design of our Magnum PRO XL Half Rack for a heavy-duty training option that’s easy to access for your users and easy to optimize for your needs. Maximize exercise variety by attaching options and training components to all four sides of the uprights, configure the rack to your space by expanding in any direction, and count on the legendary durability of everything Magnum to stand up to constant hard use.",
    ],
    highlights: [
      "Find the Perfect Fit",
      "Configurable Design — Create your ideal training area. Thanks to uprights with connection points on all four sides connect racks in endless ways.",
      "XL Training Variety — Strength training enthusiasts get their perfect workout by connecting a full spectrum of options and training components to the extensive upright connection points and included crossbar.",
      "Accessorized for Success",
      "379 lbs. — PRODUCT WEIGHT",
      "56\" x 73.5\" x 100.5\" — OVERALL DIMENSIONS (L x W x H)",
      "Heavy-duty open half-rack design",
    ],
    gallery: [
      { src: "/assets/products/matrix/mg-pro690ex/view-1.webp", alt: "Matrix Magnum PRO XL Half Rack — view 1" },
      { src: "/assets/products/matrix/mg-pro690ex/view-2.webp", alt: "Matrix Magnum PRO XL Half Rack — view 2" },
      { src: "/assets/products/matrix/mg-pro690ex/view-3.webp", alt: "Matrix Magnum PRO XL Half Rack — view 3" },
    ],
    specGroups: [
      {
        title: "Tech Specs",
        rows: [
          { label: "Overall Dimensions (L x W x H)", value: "142.5 x 187 x 255.5 cm / 56” x 73.5” x 100.5”" },
          { label: "Product Weight", value: "172 kg / 379 lbs." },
          { label: "Max Training Weight", value: "363 kg / 800 lbs." },
          { label: "Max User Weight", value: "181.5 kg / 400 lbs." },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/mg-pro690ex-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/racks-and-platforms/mg-pro690ex-pro-xl-half-rack",
    seo: {
      title: "Matrix Magnum PRO XL Half Rack | GM Therapy",
      description: "Choose the open design of our Magnum PRO XL Half Rack for a heavy-duty training option that’s easy to access for your users and easy to optimize for your n...",
    },
  },
  "155": {
    productId: "155",
    slug: "matrix-vs-vft-18",
    tagline: "The smart design of our functional trainer provides a remarkable range of exercise options in a space-saving footprint.",
    overview: [
      "The smart design of our functional trainer provides a remarkable range of exercise options in a space-saving footprint. Incremental weight adjustment and a 1:2 pulley ratio make it easy to control exercise intensity and create progressions right for everyone from deconditioned users to elite athletes. Everything about our functional trainer — from the multi-grip pull-up bar to the color-coded adjustment points to the professionally illustrated exercise placards — offers intuitive operation for users and trainers alike. Optional storage makes it easy to organize and stow accessories for instant access, and the completely enclosed design protects moving parts while creating a solid, cohesive aesthetic on your floor. A 46 cm / 18\" connection provides storage for functional training accessories. Options include VS-VFT60 heavy stack for an additional 27.2 kg / 60 lbs. of resistance per side, VS-FTHP handle package with four training handles (v-bar, curl bar, ropes, ankle strap) and VS-FTIW 2.2-kg / 5-lb. incremental weight.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "782 lbs. — STANDARD STACK",
      "44\" x 63\" x 93.5\" — OVERALL DIMENSIONS (L x W x H)",
      "Versa Functional Trainer with 18\\",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-vft-18/view-1.webp", alt: "Matrix Versa Functional Trainer w/18\\ — view 1" },
      { src: "/assets/products/matrix/vs-vft-18/view-2.webp", alt: "Matrix Versa Functional Trainer w/18\\ — view 2" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "User adjustment range", value: "18 user start options" },
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Frame Guards", value: "Bolt-on lower guards protect frame from damage" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Overall Dimensions (L x W x H)", value: "111.8 x 160 x 237.6 cm / 44” x 63” x 93.5”" },
          { label: "Product Weight (Standard Stack)", value: "355 kg / 782 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "409 kg / 902 lbs." },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Attachment Storage", value: "Integrated storage for attachments and incremental weights" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
          { label: "Placard color coding", value: "Yellow (upper body), Blue (lower body), Green (core)" },
          { label: "Multi-grip pull-up bars", value: "Various grip angles for variety of exercise" },
          { label: "Placards", value: "Muscle call outs, color-coded, start & finish exercise illustrations" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Frame and welds (not coatings)", value: "10 years" },
          { label: "Weight Stacks", value: "5 years" },
          { label: "Pulleys & Pivot Bearings", value: "5 years" },
          { label: "Other Items Not Specified", value: "3 years" },
          { label: "Labor", value: "3 years" },
          { label: "Upholstery/cables/grips/springs", value: "1 year" },
          { label: "Accessories", value: "6 months" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Incremental weight", value: "5 lbs (2.3 kg)" },
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Standard Stack", value: "68 kg / 150 lbs. (34 kg / 75 lbs. per side)" },
          { label: "Heavy Stack", value: "95 kg / 210 lbs. (47.5 kg / 105 lbs. per side)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-vft-18-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/multi-station/vs-vft-functional-trainer-18",
    seo: {
      title: "Matrix Versa Functional Trainer w/18\\ | GM Therapy",
      description: "The smart design of our functional trainer provides a remarkable range of exercise options in a space-saving footprint.",
    },
  },
  "156": {
    productId: "156",
    slug: "matrix-vs-vft-30",
    tagline: "The smart design of our functional trainer provides a remarkable range of exercise options in a space-saving footprint.",
    overview: [
      "The smart design of our functional trainer provides a remarkable range of exercise options in a space-saving footprint. Incremental weight adjustment and a 1:2 pulley ratio make it easy to control exercise intensity and create progressions right for everyone from deconditioned users to elite athletes. Everything about our functional trainer — from the multi-grip pull-up bar to the color-coded adjustment points to the professionally illustrated exercise placards — offers intuitive operation for users and trainers alike. Optional storage makes it easy to organize and stow accessories for instant access, and the completely enclosed design protects moving parts while creating a solid, cohesive aesthetic on your floor. A 76 cm / 30\" connection provides ample storage for functional training accessories. Options include VS-VFT60 heavy stack for an additional 27.2 kg / 60 lbs. of resistance per side, VS-FTHP handle package with four training handles (v-bar, curl bar, ropes, ankle strap) and VS-FTIW 2.2-kg / 5-lb. incremental weight.",
    ],
    highlights: [
      "Action Specific Grips — Ergonomically designed to reduce stress on contact points while enhancing feel and form.",
      "Electronic Rep Counter/Timer — Tracks reps, activity time and rest time for a streamlined workout experience.",
      "Ergonomic Stack — The entire Versa series strength line has a consistent 63” stack height allowing your facility to have a sleek, uniform look.",
      "Incremental Weight — Easy to access and reference from the seated position.",
      "814 lbs. — STANDARD STACK",
      "48.3\" x 57.4\" x 93.5\" — OVERALL DIMENSIONS (L x W x H)",
      "Versa Functional Trainer with 30\\",
    ],
    gallery: [
      { src: "/assets/products/matrix/vs-vft-30/view-1.webp", alt: "Matrix Versa Functional Trainer w/30\\ — view 1" },
      { src: "/assets/products/matrix/vs-vft-30/view-2.webp", alt: "Matrix Versa Functional Trainer w/30\\ — view 2" },
      { src: "/assets/products/matrix/vs-vft-30/view-3.webp", alt: "Matrix Versa Functional Trainer w/30\\ — view 3" },
    ],
    specGroups: [
      {
        title: "Adjustments",
        rows: [
          { label: "Color coded pivots & points of adjustment", value: "Yes" },
          { label: "User adjustment range", value: "18 user start options" },
        ],
      },
      {
        title: "Frame & Cables",
        rows: [
          { label: "Frame color", value: "Iced Silver" },
          { label: "Frame finish", value: "Proprietary two-coat powder process" },
          { label: "Cable transmission", value: "Internally lubricated cables & fittings" },
          { label: "Machine anchoring", value: "Machine anchoring locations" },
          { label: "Frame Guards", value: "Bolt-on lower guards protect frame from damage" },
        ],
      },
      {
        title: "Tech Specs",
        rows: [
          { label: "Product Weight (Standard Stack)", value: "369 kg / 814 lbs." },
          { label: "Product Weight (Heavy Stack)", value: "424 kg / 934 lbs." },
          { label: "Overall Dimensions (L x W x H)", value: "122.7 x 145.8 x 237.6 cm / 48.3” x 57.4” x 93.5”" },
        ],
      },
      {
        title: "User Amenities",
        rows: [
          { label: "Accessory Storage", value: "Integrated storage for attachments, incremental weights, and optional accessories" },
          { label: "Multi-grip pull-up bars", value: "Various grip angles for variety of exercise" },
          { label: "Placards", value: "Muscle call outs, color-coded, start & finish exercise illustrations" },
          { label: "Placard color coding", value: "Yellow (upper body), Blue (lower body), Green (core)" },
          { label: "Personal storage", value: "Bottle holder, storage area and towel holder (towel holder on rep counter only)" },
        ],
      },
      {
        title: "Warranty",
        rows: [
          { label: "Frame and welds (not coatings)", value: "10 years" },
          { label: "Weight Stacks", value: "5 years" },
          { label: "Pulleys & Pivot Bearings", value: "5 years" },
          { label: "Other Items Not Specified", value: "3 years" },
          { label: "Labor", value: "3 years" },
          { label: "Upholstery/cables/grips/springs", value: "1 year" },
          { label: "Accessories", value: "6 months" },
        ],
      },
      {
        title: "Weight Stack",
        rows: [
          { label: "Weight stack guarding", value: "Full front and rear shields" },
          { label: "Incremental weight", value: "5 lbs (2.3 kg)" },
          { label: "Standard Stack", value: "68 kg / 150 lbs. (34 kg / 75 lbs. per side)" },
          { label: "Heavy Stack", value: "95 kg / 210 lbs. (47.5 kg / 105 lbs. per side)" },
        ],
      },
    ],
    specSheetUrl: "/assets/products/matrix/brochures/vs-vft-30-sellsheet.pdf",
    sourceUrl: "https://us.matrixfitness.com/eng/strength/multi-station/vs-vft-functional-trainer-30",
    seo: {
      title: "Matrix Versa Functional Trainer w/30\\ | GM Therapy",
      description: "The smart design of our functional trainer provides a remarkable range of exercise options in a space-saving footprint.",
    },
  },
  "25": {
    productId: "25",
    slug: "richmar-intensity-12-tens",
    tagline: "Portable InTENSity 12 Unit",
    overview: [
      "The InTENSity 12 is one of the easiest-to-use portable tens units on the market, offering patients multiple preset treatment options and stimulation programs in a user-friendly, ergonomic design.",
      "Twelve preset body-part-specific settings as well as an option to create custom parameters, the InTENSity 12 intuitively guides the patient step-by-step to create ideal therapeutic treatments.",
    ],
    highlights: [
      "2 channels of independent stimulation",
      "6 body-part-specific settings",
      "18 program settings total",
      "Rechargeable lithium ion battery",
      "One-year warranty",
      "2 channels of independent stimulation output using TENS waveform",
      "Easy-to-read large LCD display and convenient easy-to-use controls",
      "Preset and adjustable treatment time (5-90 minutes)",
      "Compliance meter - store up to 90 sets of treatment records, and total treatment time of 100 hours",
      "Electrode load indicator",
      "Low battery indicator",
      "Rechargeable lithium ion battery with USB/wall charger and LED charging indicator light",
    ],
    gallery: [
      { src: "/assets/products/richmar/intensity-12-tens/view-1.webp", alt: "Richmar InTENSity 12 TENS — view 1" },
      { src: "/assets/products/richmar/intensity-12-tens/view-2.webp", alt: "Richmar InTENSity 12 TENS — view 2" },
      { src: "/assets/products/richmar/intensity-12-tens/view-3.webp", alt: "Richmar InTENSity 12 TENS — view 3" },
      { src: "/assets/products/richmar/intensity-12-tens/view-4.webp", alt: "Richmar InTENSity 12 TENS — view 4" },
      { src: "/assets/products/richmar/intensity-12-tens/view-5.webp", alt: "Richmar InTENSity 12 TENS — view 5" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/intensity-12-tens-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/portable-electrotherapy/intensity-12-tens-device",
    seo: {
      title: "Richmar InTENSity 12 TENS | GM Therapy",
      description: "Portable InTENSity 12 Unit",
    },
  },
  "26": {
    productId: "26",
    slug: "richmar-intensity-select-combo-ii",
    tagline: "The InTENSity Select Combo II muscle stimulator offers patients four modalities in one user-friendly design: Transcutaneous Electrical Nerve Stimulation (TENS), Neuromuscular Electrical Stimulation...",
    overview: [
      "The InTENSity Select Combo II muscle stimulator offers patients four modalities in one user-friendly design: Transcutaneous Electrical Nerve Stimulation (TENS), Neuromuscular Electrical Stimulation (NMES), Interferential Current (IFC), and Russian (RUSS). Equipped with preset body-part-specific settings, it guides the patient step-by-step to the ideal therapeutic treatment.",
      "Manual customizable settings and preset body-part-specific settings for neck, shoulder, hand, knee, foot, and lower back pain – a total of 72 programs.",
    ],
    highlights: [
      "Extra large LCD display",
      "4-in-1 therapy modes: TENS, EMS, IF and Russian stimulation",
      "6 therapeutic body part buttons",
      "Preset body programs or user defined modes",
      "2 channels of independent stimulation output",
      "4 Waveforms: TENS, NMES, IFC, and RUSS",
      "4 stimulation modes for TENS",
      "Up to 10,000 Hz of IFC therapy with sweep frequency to prevent accommodation of nerves and provide maximum treatment benefits",
      "2500 Hz of RUSS for deep and comfortable muscle stimulation",
      "Store up to 90 sets of treatment records and total treatment time of 100 hours",
      "Rechargeable lithium ion battery with USB/wall charger",
      "Quad Force Production Study",
    ],
    gallery: [
      { src: "/assets/products/richmar/intensity-select-combo-ii/view-1.webp", alt: "Richmar Intensity Select Combo II — view 1" },
      { src: "/assets/products/richmar/intensity-select-combo-ii/view-2.webp", alt: "Richmar Intensity Select Combo II — view 2" },
      { src: "/assets/products/richmar/intensity-select-combo-ii/view-3.webp", alt: "Richmar Intensity Select Combo II — view 3" },
      { src: "/assets/products/richmar/intensity-select-combo-ii/view-4.webp", alt: "Richmar Intensity Select Combo II — view 4" },
      { src: "/assets/products/richmar/intensity-select-combo-ii/view-5.webp", alt: "Richmar Intensity Select Combo II — view 5" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/intensity-select-combo-ii-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/portable-electrotherapy/intensity-select-combo-ii",
    seo: {
      title: "Richmar Intensity Select Combo II | GM Therapy",
      description: "The InTENSity Select Combo II muscle stimulator offers patients four modalities in one user-friendly design: Transcutaneous Electrical Nerve Stimulation (T",
    },
  },
  "27": {
    productId: "27",
    slug: "richmar-if-combo-ii",
    tagline: "The InTENSity IF Combo II combines TENS and Interferential waveforms in one portable tens unit. Equipped with preset body-part-specific settings, the InTENSity IF Combo II intuitively guides the pa...",
    overview: [
      "The InTENSity IF Combo II combines TENS and Interferential waveforms in one portable tens unit. Equipped with preset body-part-specific settings, the InTENSity IF Combo II intuitively guides the patient step-by-step to ensure the ideal therapeutic treatment throughout the healing cycle.",
      "Simply choose a preset program by body part or customize a program to meet your specific therapy needs. This TENS machine has a powerful rechargeable lithium ion battery so that it can be used at home, at work, or on-the-go.",
    ],
    highlights: [
      "Extra large LCD display",
      "4-in-1 therapy modes: TENS, EMS, IF and Russian stimulation",
      "6 therapeutic body part buttons",
      "Preset body programs or user defined modes",
      "2 channels of independent stimulation output",
      "Easy-to-read large LCD display and convenient easy-to-use controls",
      "Extensive range of programs with manual customize settings and body-part specific settings — 18 TENS and 18 IFC (total of 36 programs)",
      "Electrode load indicator",
      "Up to 10,000 Hz of IFC therapy with sweep frequency to prevent accommodation of nerves and provide maximum treatment benefits",
      "Preset and adjustable treatment time",
      "Compliance meter - store up to 90 sets of treatment records and total treatment time of 100 hours",
      "Low battery indicator",
    ],
    gallery: [
      { src: "/assets/products/richmar/if-combo-ii/view-1.webp", alt: "Richmar IF Combo II Portable TENS — view 1" },
      { src: "/assets/products/richmar/if-combo-ii/view-2.webp", alt: "Richmar IF Combo II Portable TENS — view 2" },
      { src: "/assets/products/richmar/if-combo-ii/view-3.webp", alt: "Richmar IF Combo II Portable TENS — view 3" },
      { src: "/assets/products/richmar/if-combo-ii/view-4.webp", alt: "Richmar IF Combo II Portable TENS — view 4" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/if-combo-ii-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/portable-electrotherapy/if-combo-ii-portable-tens-device",
    seo: {
      title: "Richmar IF Combo II Portable TENS | GM Therapy",
      description: "The InTENSity IF Combo II combines TENS and Interferential waveforms in one portable tens unit. Equipped with preset body-part-specific settings, the InTEN",
    },
  },
  "28": {
    productId: "28",
    slug: "richmar-hydratherm",
    tagline: "HydraTherm Hot Pack Heating System help maintain a cleaner clinic. Their plastic tanks eliminate the possibility of rust, making HydraTherm easier to clean, and keep clean, compared to stainless he...",
    overview: [
      "The HydraTherm Deluxe is the ultimate safe and effective choice for moist heat therapy. The composite polymer tank will not rust, is easy to maintain, and only needs to be cleaned a few times a year. The HydraTherm Deluxe was designed to address the dangers and inconveniences associated with the conventional stainless steel heating units, such as scalding temperatures, rust, mildew and difficult cleaning protocols. This moist heat therapy system improves infection prevention, reduces the risk of burns and has a lower maintenance cost. The Hydratherm Deluxe's sleek and mobile design makes it the perfect moist heat therapy system for your clinic.",
      "Includes a divider system that can accommodate up to 12 HydraHeat Packs. The divider system puts HydraHeat Packs at easy reach with the lift of the handle and allows maximum storage.",
    ],
    highlights: [
      "Digital thermostat control",
      "Composite no rust tub with divider system",
      "Reduces number of cleanings",
      "12 hot pack capacity",
      "Low water sensor",
      "1 year warranty",
      "Boxes will be labeled 1 of 3, 2 of 3, and 3 of 3.",
      "Low water sensor deactivates the heating element when water isn't at an acceptable level, reducing fire hazards.",
      "Electric drain pump to empty the tank for faster and easier cleanings.",
      "Fold away shelf for a convenient area to place HydraHeat packs before or after treatment.",
      "For best results, the HydraTherm Deluxe is to be used in conjunction with HydraHeat Packs.",
      "Cleaning Instructions",
    ],
    gallery: [
      { src: "/assets/products/richmar/hydratherm/view-1.webp", alt: "Richmar Hydratherm — view 1" },
      { src: "/assets/products/richmar/hydratherm/view-2.webp", alt: "Richmar Hydratherm — view 2" },
      { src: "/assets/products/richmar/hydratherm/view-3.webp", alt: "Richmar Hydratherm — view 3" },
      { src: "/assets/products/richmar/hydratherm/view-4.webp", alt: "Richmar Hydratherm — view 4" },
      { src: "/assets/products/richmar/hydratherm/view-5.webp", alt: "Richmar Hydratherm — view 5" },
      { src: "/assets/products/richmar/hydratherm/view-6.webp", alt: "Richmar Hydratherm — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/hydratherm-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/hot-cold/hydratherm-moist-heat-therapy",
    seo: {
      title: "Richmar Hydratherm | GM Therapy",
      description: "HydraTherm Hot Pack Heating System help maintain a cleaner clinic. Their plastic tanks eliminate the possibility of rust, making HydraTherm easier to clean",
    },
  },
  "31": {
    productId: "31",
    slug: "richmar-theratouch-ex4",
    tagline: "The TheraTouch EX4 is an advanced four-channel electrotherapy system offering a wide range of treatment options in one user-friendly, ergonomic design.",
    overview: [
      "The TheraTouch EX4 is an advanced four-channel electrotherapy system offering a wide range of treatment options in one user-friendly, ergonomic design.",
      "Equipped with a bilingual menu-driven touchscreen interface, the EX4 guides clinicians step-by-step through treatment protocols to ensure the ideal therapeutic treatment – including electrode placement for better treatment outcomes.",
    ],
    highlights: [
      "Treats up to 4 patients at once",
      "Multiple waveforms",
      "Large color LCD touchscreen",
      "Up to 10,000 Hz",
      "3 year warranty",
      "4 channels of stimulation with the following waveforms:",
      "Bilingual interface selectable between English and Spanish",
      "DQ7200 W/ Accessories",
      "DQ7001 EX4 W/ Cart",
      "7777 Bonhomme Ave, Suite 1605",
      "Clayton, MO 63105, USA",
      "Middleburg Heights, OH 44130, USA",
    ],
    gallery: [
      { src: "/assets/products/richmar/theratouch-ex4/view-1.webp", alt: "Richmar Theratouch EX4 Electrotherapy System — view 1" },
      { src: "/assets/products/richmar/theratouch-ex4/view-2.webp", alt: "Richmar Theratouch EX4 Electrotherapy System — view 2" },
      { src: "/assets/products/richmar/theratouch-ex4/view-3.webp", alt: "Richmar Theratouch EX4 Electrotherapy System — view 3" },
      { src: "/assets/products/richmar/theratouch-ex4/view-4.webp", alt: "Richmar Theratouch EX4 Electrotherapy System — view 4" },
      { src: "/assets/products/richmar/theratouch-ex4/view-5.webp", alt: "Richmar Theratouch EX4 Electrotherapy System — view 5" },
      { src: "/assets/products/richmar/theratouch-ex4/view-6.webp", alt: "Richmar Theratouch EX4 Electrotherapy System — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/theratouch-ex4-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/clinical-electrotherapy/ex4-electrostimulation-machine",
    seo: {
      title: "Richmar Theratouch EX4 Electrotherapy System | GM Therapy",
      description: "The TheraTouch EX4 is an advanced four-channel electrotherapy system offering a wide range of treatment options in one user-friendly, ergonomic design.",
    },
  },
  "32": {
    productId: "32",
    slug: "richmar-cx4",
    tagline: "The TheraTouch CX4 is an advanced four-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, ergonomic design.",
    overview: [
      "The TheraTouch CX4 is an advanced four-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, ergonomic design.",
      "The TheraTouch CX4’s bilingual interface intuitively groups and displays clinical protocols to guide clinicians step-by-step to ensure an ideal therapeutic treatment, including electrode placement recommendations to ensure treatment efficacy and clinic efficiency. Therapeutic ultrasound can be combined with stimulation using the dedicated stim channel, using any supplied waveform.",
    ],
    highlights: [
      "5 cm² sound head",
      "Treats up to 4 patients at once",
      "Multiple waveforms",
      "Large color LCD touchscreen",
      "3 year warranty",
      "1 MHz and 3 MHz therapeutic ultrasound",
      "Pulsed and continuous operating modes",
      "Ergonomically designed 5 cm2 sound head included with a maximum BNR ratio of 5:1",
      "4 channels of stimulation with the following waveforms",
      "Biphasic (Symmetrical, Asymmetrical, RAAS)",
      "Bilingual interface selectable between English and Spanish",
      "DQ8200 CX4 w/ Accessories",
    ],
    gallery: [
      { src: "/assets/products/richmar/cx4/view-1.webp", alt: "Richmar CX4 Electrotherapy and Ultrasound — view 1" },
      { src: "/assets/products/richmar/cx4/view-2.webp", alt: "Richmar CX4 Electrotherapy and Ultrasound — view 2" },
      { src: "/assets/products/richmar/cx4/view-3.webp", alt: "Richmar CX4 Electrotherapy and Ultrasound — view 3" },
      { src: "/assets/products/richmar/cx4/view-4.webp", alt: "Richmar CX4 Electrotherapy and Ultrasound — view 4" },
      { src: "/assets/products/richmar/cx4/view-5.webp", alt: "Richmar CX4 Electrotherapy and Ultrasound — view 5" },
      { src: "/assets/products/richmar/cx4/view-6.webp", alt: "Richmar CX4 Electrotherapy and Ultrasound — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/cx4-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/health-canada-approved/cx4-ultrasound-stim-machine",
    seo: {
      title: "Richmar CX4 Electrotherapy and Ultrasound | GM Therapy",
      description: "The TheraTouch CX4 is an advanced four-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, erg",
    },
  },
  "34": {
    productId: "34",
    slug: "richmar-cx2",
    tagline: "The TheraTouch CX2 is an advanced two-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, ergonomic design.",
    overview: [
      "TheraTouch CX2 is a two-channel combination therapy system provides ultrasound with electrotherapy in a simple-to-use, intuitive design.",
      "The TheraTouch CX2’s menu-driven interface includes evidence-based clinical protocols to guide clinicians to the best treatment for a given indication, including electrode placement suggestions. Therapeutic ultrasound can be combined with stimulation using the dedicated stim output channel, with any available waveform.",
    ],
    highlights: [
      "5 cm² sound head",
      "Multiple waveforms",
      "Large color LCD touchscreen",
      "3 year warranty",
      "Optional cart available",
      "TheraTouch CX2 is a two-channel combination therapy system provides ultrasound with electrotherapy in a simple-to-use, intuitive design.",
      "1 MHz and 3 MHz therapeutic ultrasound",
      "Pulsed and continuous output modes",
      "Ergonomically designed 5 cm² ultrasound applicator included with a maximum BNR ratio of 5:1",
      "Two channels of stimulation with the following waveforms:",
      "Biphasic (Symmetrical, Asymmetrical, RAAS)",
      "Bilingual interface ( choose between English and Spanish)",
    ],
    gallery: [
      { src: "/assets/products/richmar/cx2/view-1.webp", alt: "Richmar CX2 Electrotherapy and Ultrasound — view 1" },
      { src: "/assets/products/richmar/cx2/view-2.webp", alt: "Richmar CX2 Electrotherapy and Ultrasound — view 2" },
      { src: "/assets/products/richmar/cx2/view-3.webp", alt: "Richmar CX2 Electrotherapy and Ultrasound — view 3" },
      { src: "/assets/products/richmar/cx2/view-4.webp", alt: "Richmar CX2 Electrotherapy and Ultrasound — view 4" },
      { src: "/assets/products/richmar/cx2/view-5.webp", alt: "Richmar CX2 Electrotherapy and Ultrasound — view 5" },
      { src: "/assets/products/richmar/cx2/view-6.webp", alt: "Richmar CX2 Electrotherapy and Ultrasound — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/cx2-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/clinical-electrotherapy/cx2-combination-ultrasound-and-stim",
    seo: {
      title: "Richmar CX2 Electrotherapy and Ultrasound | GM Therapy",
      description: "The TheraTouch CX2 is an advanced two-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, ergo",
    },
  },
  "37": {
    productId: "37",
    slug: "richmar-lx2-cold-laser",
    tagline: "The TheraTouch® LX2 is a Class IIIb \"cold laser\" therapy device, capable of delivering up to 35 joules/cm² per treatment. TheraTouch LX2 is the perfect product addition to offer tissue healing, in ...",
    overview: [
      "The TheraTouch® LX2 is a Class IIIb \"cold laser\" therapy device, capable of delivering up to 35 joules/cm² per treatment. TheraTouch LX2 is the perfect product addition to offer tissue healing, in addition to reducing inflammation and pain. Selectable clinical protocols simplify setup of laser therapy treatments, making the LX2 a great entry into laser therapy; while the ability to adjust treatment parameters provides customizations for the laser therapy specialist.",
      "Evidence-Based Clinical ProtocolsDeveloped with therapeutic researchers, the TheraTouch LX2 populates treatment parameters proven effective for the selected indication, including a Tissue Healing protocol.",
    ],
    highlights: [
      "Class 3B Laser",
      "Touch screen",
      "1040 mw of total power",
      "Built in dosage calculator",
      "Programmable treatment times",
      "100 user defined protocols",
      "Optional Therapy Cart Transport the TheraTouch LX2 and accessories from room to room with ease.",
      "Delivers up to 35 j/cm² of LLLT in a single treatment",
      "Programmable treatment time up to 4 minutes",
      "Continuous or pulsed output modes",
      "10 predefined clinical protocols",
      "Save up to 100 user-defined protocols",
    ],
    gallery: [
      { src: "/assets/products/richmar/lx2-cold-laser/view-1.webp", alt: "Richmar LX2 Cold Laser — view 1" },
      { src: "/assets/products/richmar/lx2-cold-laser/view-2.webp", alt: "Richmar LX2 Cold Laser — view 2" },
      { src: "/assets/products/richmar/lx2-cold-laser/view-3.webp", alt: "Richmar LX2 Cold Laser — view 3" },
      { src: "/assets/products/richmar/lx2-cold-laser/view-4.webp", alt: "Richmar LX2 Cold Laser — view 4" },
      { src: "/assets/products/richmar/lx2-cold-laser/view-5.webp", alt: "Richmar LX2 Cold Laser — view 5" },
      { src: "/assets/products/richmar/lx2-cold-laser/view-6.webp", alt: "Richmar LX2 Cold Laser — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/lx2-cold-laser-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/laser/theratouch-lx2",
    seo: {
      title: "Richmar LX2 Cold Laser | GM Therapy",
      description: "The TheraTouch® LX2 is a Class IIIb \"cold laser\" therapy device, capable of delivering up to 35 joules/cm² per treatment. TheraTouch LX2 is the perfect pro",
    },
  },
  "40": {
    productId: "40",
    slug: "richmar-theradot",
    tagline: "Deep Oscillation Therapy is a unique therapeutic treatment for rehab that is FDA-Cleared for muscle relaxation, increasing circulation, and pain relief, which are important factors in restoring fun...",
    overview: [
      "The massaging effect created by the oscillations within the patient’s tissues work to open pathways and increase the flow of blood and lymph throughout the body. Once the flow of blood, oxygen and nutrients is restored to muscles afflicted by adhesions from injury or microtrauma, the resulting pain is diminished, and mobility is increased.",
      "Built-In Protocol Library for Athletic, Chiropractic, Lymphedema, and Rehab Treatments",
    ],
    highlights: [
      "Deep oscillation treatment",
      "Pre-defined programs",
      "Battery operated, portable",
      "Uses electrostatic attractions",
      "Treats edema",
      "3 Year Warranty",
      "Multi-Color Display with a Simple-to-Use Interface",
      "Built-In Protocol Library for Athletic, Chiropractic, Lymphedema, and Rehab Treatments",
      "Option to Administer Deep Oscillation Using Hands Through Vinyl Gloves",
      "Easily Transportable, Lightweight, Handheld Design",
      "Internal Rechargeable Battery",
      "Self-Treatment Kit Included",
    ],
    gallery: [
      { src: "/assets/products/richmar/theradot/view-1.webp", alt: "Richmar Theradot — view 1" },
      { src: "/assets/products/richmar/theradot/view-2.webp", alt: "Richmar Theradot — view 2" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/theradot-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/deep-oscillation/theradot",
    seo: {
      title: "Richmar Theradot | GM Therapy",
      description: "Deep Oscillation Therapy is a unique therapeutic treatment for rehab that is FDA-Cleared for muscle relaxation, increasing circulation, and pain relief, wh",
    },
  },
  "41": {
    productId: "41",
    slug: "richmar-dx2-shortwave-diathermy",
    tagline: "TheraTouch DX2 introduces several new advancements in safety, convenience, and efficiency compared to other shortwave diathermy devices, including Scientific Dosage Control (SDC) and High Efficienc...",
    overview: [
      "TheraTouch DX2 introduces several new advancements in safety, convenience, and efficiency compared to other shortwave diathermy devices.",
      "Scientific Dosage Control (SDC) allows for two additional dosimetry settings within Dose III to provide more options for therapeutic heating within patient comfort tolerances.",
    ],
    highlights: [
      "Anatomical treatment guide",
      "Save up to 99 user favorites",
      "9 evidence based quick links",
      "Easy to use touch screen",
      "USB port for easy upgrades",
      "3 year warranty",
      "TheraTouch DX2 introduces several new advancements in safety, convenience, and efficiency compared to other shortwave diathermy devices.",
      "DOSE I - Subthermal DOSE II - Mild Heat DOSE III - Low Heat DOSE III SDC M - Moderate HeatDOSE III SDC H - High Heat DOSE IV - Vigorous Heat",
      "Anatomical Treatment Guide for easy monode placement",
      "Save up to 99 user-defined favorites",
      "9 evidence-based Quick Links by Indication",
      "Qualitative Thermal Dosimetry with six settings included",
    ],
    gallery: [
      { src: "/assets/products/richmar/dx2-shortwave-diathermy/view-1.webp", alt: "Richmar TheraTouch DX2 Shortwave Diathermy — view 1" },
      { src: "/assets/products/richmar/dx2-shortwave-diathermy/view-2.webp", alt: "Richmar TheraTouch DX2 Shortwave Diathermy — view 2" },
      { src: "/assets/products/richmar/dx2-shortwave-diathermy/view-3.webp", alt: "Richmar TheraTouch DX2 Shortwave Diathermy — view 3" },
      { src: "/assets/products/richmar/dx2-shortwave-diathermy/view-4.webp", alt: "Richmar TheraTouch DX2 Shortwave Diathermy — view 4" },
      { src: "/assets/products/richmar/dx2-shortwave-diathermy/view-5.webp", alt: "Richmar TheraTouch DX2 Shortwave Diathermy — view 5" },
      { src: "/assets/products/richmar/dx2-shortwave-diathermy/view-6.webp", alt: "Richmar TheraTouch DX2 Shortwave Diathermy — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/dx2-shortwave-diathermy-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/diathermy/theratouch-dx2-shortwave-diathermy",
    seo: {
      title: "Richmar TheraTouch DX2 Shortwave Diathermy | GM Therapy",
      description: "TheraTouch DX2 introduces several new advancements in safety, convenience, and efficiency compared to other shortwave diathermy devices, including Scientif",
    },
  },
  "99": {
    productId: "99",
    slug: "richmar-rex-compression",
    tagline: "The REX is a four part sequential leg compression system that allows for faster recovery. This fast compression boosts circulation and lymphatic drainage, as well as relieves muscle fatigue. The RE...",
    overview: [
      "The REX is a four part sequential leg compression system that allows for faster recovery. This fast compression boosts circulation and lymphatic drainage, as well as relieves muscle fatigue. The REX includes a pump and lower extremity garments with air cells. This system is of high quality and durability, ensuring a long lasting experience and uninterrupted performance.",
    ],
    highlights: [
      "Designed for athletes and active individuals",
      "Compressor unit and inserts sold separately",
      "Wipe clean surface for multiple uses",
      "Two Treatment Modes (1cm & 5cm)",
      "Three Time Settings - 10, 20 and 30 Minutes",
      "Adjustable Pressure Settings",
      "Four Part Sequential Compression",
      "Includes Richmar Backpack to Take Your REX on the Go",
      "DVTREX-U REX System, Universal Size",
      "7777 Bonhomme Ave, Suite 1605",
      "Clayton, MO 63105, USA",
      "Middleburg Heights, OH 44130, USA",
    ],
    gallery: [
      { src: "/assets/products/richmar/rex-compression/view-1.webp", alt: "Richmar REX Compression — view 1" },
      { src: "/assets/products/richmar/rex-compression/view-2.webp", alt: "Richmar REX Compression — view 2" },
      { src: "/assets/products/richmar/rex-compression/view-3.webp", alt: "Richmar REX Compression — view 3" },
      { src: "/assets/products/richmar/rex-compression/view-4.webp", alt: "Richmar REX Compression — view 4" },
      { src: "/assets/products/richmar/rex-compression/view-5.webp", alt: "Richmar REX Compression — view 5" },
      { src: "/assets/products/richmar/rex-compression/view-6.webp", alt: "Richmar REX Compression — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/rex-compression-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/pneumatic-compression/rex-recovery-exercise-x-trainer",
    seo: {
      title: "Richmar REX Compression | GM Therapy",
      description: "The REX is a four part sequential leg compression system that allows for faster recovery. This fast compression boosts circulation and lymphatic drainage, ",
    },
  },
  "259": {
    productId: "259",
    slug: "richmar-multistim-electrodes",
    tagline: "Incorporating the best in electrode technology, Richmar combines a proprietary bonding and moisture barrier, that provides each electrode with a high tensile strength, and eliminates delamination w...",
    overview: [
      "Incorporating the best in electrode technology, Richmar combines a proprietary bonding and moisture barrier, that provides each electrode with a high tensile strength, and eliminates delamination when applying moist heat therapy in conjunction with electrotherapy.",
      "MultiStim Stim Electrodes are Available in Cloth or Foam, in a Variety of Shapes and Sizes",
    ],
    highlights: [
      "2\\",
      ", ",
      ", ",
      ", ",
      "MultiStim Stim Electrodes are Available in Cloth or Foam, in a Variety of Shapes and Sizes",
      "Economical Stim Electrodes that Do Not Sacrifice Adhesion or Performance",
      "Gel Formulation Produces Electrodes with Maximum Dry-Out Resistance",
      "Optimum Distribution of Electrical Current throughout the Electrode's Surface",
      "For our complete line of electrodes, visit the Electrode page.",
      "7777 Bonhomme Ave, Suite 1605",
      "Clayton, MO 63105, USA",
      "Middleburg Heights, OH 44130, USA",
    ],
    gallery: [
      { src: "/assets/products/richmar/multistim-electrodes/view-1.webp", alt: "Richmar MultiStim 2\" Round Cloth Electrodes — view 1" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/multistim-electrodes-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/electrodes/multistim-electrodes",
    seo: {
      title: "Richmar MultiStim 2\" Round Cloth Electrodes | GM Therapy",
      description: "Incorporating the best in electrode technology, Richmar combines a proprietary bonding and moisture barrier, that provides each electrode with a high tensi",
    },
  },
  "260": {
    productId: "260",
    slug: "richmar-cx4-no-cart",
    tagline: "The TheraTouch CX4 is an advanced four-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, ergonomic design.",
    overview: [
      "The TheraTouch CX4 is an advanced four-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, ergonomic design.",
      "The TheraTouch CX4’s bilingual interface intuitively groups and displays clinical protocols to guide clinicians step-by-step to ensure an ideal therapeutic treatment, including electrode placement recommendations to ensure treatment efficacy and clinic efficiency. Therapeutic ultrasound can be combined with stimulation using the dedicated stim channel, using any supplied waveform.",
    ],
    highlights: [
      "4-channel electrical stimulation with ultrasound",
      "5 cm² sound head",
      "Multiple waveforms",
      "Large color LCD touchscreen",
      "3-year warranty",
      "Cart sold separately",
      "1 MHz and 3 MHz therapeutic ultrasound",
      "Pulsed and continuous operating modes",
      "Ergonomically designed 5 cm2 sound head included with a maximum BNR ratio of 5:1",
      "4 channels of stimulation with the following waveforms",
      "Biphasic (Symmetrical, Asymmetrical, RAAS)",
      "Bilingual interface selectable between English and Spanish",
    ],
    gallery: [
      { src: "/assets/products/richmar/cx4-no-cart/view-1.webp", alt: "Richmar TheraTouch CX4 4-Channel E-Stim w/ Ultrasound (No Cart) — view 1" },
      { src: "/assets/products/richmar/cx4-no-cart/view-2.webp", alt: "Richmar TheraTouch CX4 4-Channel E-Stim w/ Ultrasound (No Cart) — view 2" },
      { src: "/assets/products/richmar/cx4-no-cart/view-3.webp", alt: "Richmar TheraTouch CX4 4-Channel E-Stim w/ Ultrasound (No Cart) — view 3" },
      { src: "/assets/products/richmar/cx4-no-cart/view-4.webp", alt: "Richmar TheraTouch CX4 4-Channel E-Stim w/ Ultrasound (No Cart) — view 4" },
      { src: "/assets/products/richmar/cx4-no-cart/view-5.webp", alt: "Richmar TheraTouch CX4 4-Channel E-Stim w/ Ultrasound (No Cart) — view 5" },
      { src: "/assets/products/richmar/cx4-no-cart/view-6.webp", alt: "Richmar TheraTouch CX4 4-Channel E-Stim w/ Ultrasound (No Cart) — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/cx4-no-cart-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/health-canada-approved/cx4-ultrasound-stim-machine",
    seo: {
      title: "Richmar TheraTouch CX4 4-Channel E-Stim w/ Ultrasound (No Cart) | GM Therapy",
      description: "The TheraTouch CX4 is an advanced four-channel combination therapy system providing electrotherapy and ultrasound treatment options in a simple-to-use, erg",
    },
  },
  "261": {
    productId: "261",
    slug: "richmar-theratouch-cart",
    tagline: "PRODUCT FEATURES:    Compatible with CX4, CX2, EX4, UX2, LX2    quick and easy assembly    allows for portability of clincial units and ease of moving units from one patient room to the next    whe...",
    overview: [
      "allows for portability of clincial units and ease of moving units from one patient room to the next",
      "Store supplies such as electrodes, lead wires, ultrasound gel, ultrasound heads in the advanced storage drawers",
    ],
    highlights: [
      "Mobile therapy cart for Richmar TheraTouch units",
      "Locking casters for stability",
      "Storage for accessories and supplies",
      "Compatible with CX4 and EX4 systems",
      "Compatible with CX4, CX2, EX4, UX2, LX2",
      "quick and easy assembly",
      "allows for portability of clincial units and ease of moving units from one patient room to the next",
      "wheels have easy lock brake system",
      "Store supplies such as electrodes, lead wires, ultrasound gel, ultrasound heads in the advanced storage drawers",
      "sleek design to minimize cord and cable hazards",
      "PRODUCT SPECIFICATIONS:",
      "Product Dimensions: 17” x 16.25” x 33.75”",
    ],
    gallery: [
      { src: "/assets/products/richmar/theratouch-cart/view-1.webp", alt: "Richmar TheraTouch Therapy Cart — view 1" },
      { src: "/assets/products/richmar/theratouch-cart/view-2.webp", alt: "Richmar TheraTouch Therapy Cart — view 2" },
      { src: "/assets/products/richmar/theratouch-cart/view-3.webp", alt: "Richmar TheraTouch Therapy Cart — view 3" },
      { src: "/assets/products/richmar/theratouch-cart/view-4.webp", alt: "Richmar TheraTouch Therapy Cart — view 4" },
      { src: "/assets/products/richmar/theratouch-cart/view-5.webp", alt: "Richmar TheraTouch Therapy Cart — view 5" },
      { src: "/assets/products/richmar/theratouch-cart/view-6.webp", alt: "Richmar TheraTouch Therapy Cart — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/theratouch-cart-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/clinical-electrotherapy/theratouch-therapy-cart",
    seo: {
      title: "Richmar TheraTouch Therapy Cart | GM Therapy",
      description: "PRODUCT FEATURES:    Compatible with CX4, CX2, EX4, UX2, LX2    quick and easy assembly    allows for portability of clincial units and ease of moving unit",
    },
  },
  "262": {
    productId: "262",
    slug: "richmar-hydraheat-cervical",
    tagline: "These hot packs conform to the contours of the body for more &nbsp;uniform heat distribution. These packs can also be used at safe temperatures than canvas packs, and cleaned after use— adding peac...",
    overview: [
      "Typical heat packs require high heating temperatures to kill the bacteria that can enter through their porous coverings. HydraHeat Hot Packs have a non-porous skin, allowing treatments to occur at lower, safer temperatures.",
      "Polymer Skin is Bacteria Resistant and Easy to Wipe Clean, Lessening the Risk of Bacterial Attachment",
    ],
    highlights: [
      "Cervical-size moist heat pack",
      "17\\",
      ", ",
      ", ",
      ", ",
      ", ",
      ", ",
      "Polymer Skin is Bacteria Resistant and Easy to Wipe Clean, Lessening the Risk of Bacterial Attachment",
      "Provide Treatment within Optimal Temperature Range of 120° - 140° F",
      "No Need to Cover with Terry Covers — A Simple Towel or Pillow Case is the Only Barrier Needed between the Heat Pack and the Patient",
      "Pliable Heat Packs— Contours to the Treatment Area for Optimal Placement",
      "SureSeam Process Ensures the Integrity is Maintained with No Bursting or Leaking",
    ],
    gallery: [
      { src: "/assets/products/richmar/hydraheat-cervical/view-1.webp", alt: "Richmar HydraHeat Pack — Cervical (17\" x 11\") — view 1" },
      { src: "/assets/products/richmar/hydraheat-cervical/view-2.webp", alt: "Richmar HydraHeat Pack — Cervical (17\" x 11\") — view 2" },
      { src: "/assets/products/richmar/hydraheat-cervical/view-3.webp", alt: "Richmar HydraHeat Pack — Cervical (17\" x 11\") — view 3" },
      { src: "/assets/products/richmar/hydraheat-cervical/view-4.webp", alt: "Richmar HydraHeat Pack — Cervical (17\" x 11\") — view 4" },
      { src: "/assets/products/richmar/hydraheat-cervical/view-5.webp", alt: "Richmar HydraHeat Pack — Cervical (17\" x 11\") — view 5" },
      { src: "/assets/products/richmar/hydraheat-cervical/view-6.webp", alt: "Richmar HydraHeat Pack — Cervical (17\" x 11\") — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/hydraheat-cervical-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/hot-cold/hydraheat-hot-packs",
    seo: {
      title: "Richmar HydraHeat Pack — Cervical (17\" x 11\") | GM Therapy",
      description: "These hot packs conform to the contours of the body for more &nbsp;uniform heat distribution. These packs can also be used at safe temperatures than canvas",
    },
  },
  "263": {
    productId: "263",
    slug: "richmar-hydraheat-oversize",
    tagline: "These hot packs conform to the contours of the body for more &nbsp;uniform heat distribution. These packs can also be used at safe temperatures than canvas packs, and cleaned after use— adding peac...",
    overview: [
      "Typical heat packs require high heating temperatures to kill the bacteria that can enter through their porous coverings. HydraHeat Hot Packs have a non-porous skin, allowing treatments to occur at lower, safer temperatures.",
      "Polymer Skin is Bacteria Resistant and Easy to Wipe Clean, Lessening the Risk of Bacterial Attachment",
    ],
    highlights: [
      "Oversize moist heat pack",
      "17\\",
      ", ",
      ", ",
      ", ",
      ", ",
      ", ",
      "Polymer Skin is Bacteria Resistant and Easy to Wipe Clean, Lessening the Risk of Bacterial Attachment",
      "Provide Treatment within Optimal Temperature Range of 120° - 140° F",
      "No Need to Cover with Terry Covers — A Simple Towel or Pillow Case is the Only Barrier Needed between the Heat Pack and the Patient",
      "Pliable Heat Packs— Contours to the Treatment Area for Optimal Placement",
      "SureSeam Process Ensures the Integrity is Maintained with No Bursting or Leaking",
    ],
    gallery: [
      { src: "/assets/products/richmar/hydraheat-oversize/view-1.webp", alt: "Richmar HydraHeat Pack — Oversize (17\" x 13\") — view 1" },
      { src: "/assets/products/richmar/hydraheat-oversize/view-2.webp", alt: "Richmar HydraHeat Pack — Oversize (17\" x 13\") — view 2" },
      { src: "/assets/products/richmar/hydraheat-oversize/view-3.webp", alt: "Richmar HydraHeat Pack — Oversize (17\" x 13\") — view 3" },
      { src: "/assets/products/richmar/hydraheat-oversize/view-4.webp", alt: "Richmar HydraHeat Pack — Oversize (17\" x 13\") — view 4" },
      { src: "/assets/products/richmar/hydraheat-oversize/view-5.webp", alt: "Richmar HydraHeat Pack — Oversize (17\" x 13\") — view 5" },
      { src: "/assets/products/richmar/hydraheat-oversize/view-6.webp", alt: "Richmar HydraHeat Pack — Oversize (17\" x 13\") — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/hydraheat-oversize-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/hot-cold/hydraheat-hot-packs",
    seo: {
      title: "Richmar HydraHeat Pack — Oversize (17\" x 13\") | GM Therapy",
      description: "These hot packs conform to the contours of the body for more &nbsp;uniform heat distribution. These packs can also be used at safe temperatures than canvas",
    },
  },
  "264": {
    productId: "264",
    slug: "richmar-hydratherm-deluxe-divider",
    tagline: "HydraTherm Hot Pack Heating System help maintain a cleaner clinic. Their plastic tanks eliminate the possibility of rust, making HydraTherm easier to clean, and keep clean, compared to stainless he...",
    overview: [
      "The HydraTherm Deluxe is the ultimate safe and effective choice for moist heat therapy. The composite polymer tank will not rust, is easy to maintain, and only needs to be cleaned a few times a year. The HydraTherm Deluxe was designed to address the dangers and inconveniences associated with the conventional stainless steel heating units, such as scalding temperatures, rust, mildew and difficult cleaning protocols. This moist heat therapy system improves infection prevention, reduces the risk of burns and has a lower maintenance cost. The Hydratherm Deluxe's sleek and mobile design makes it the perfect moist heat therapy system for your clinic.",
      "Includes a divider system that can accommodate up to 12 HydraHeat Packs. The divider system puts HydraHeat Packs at easy reach with the lift of the handle and allows maximum storage.",
    ],
    highlights: [
      "12-pack capacity moist heat therapy unit with divider rack",
      "Composite polymer tank — won't rust, requires only 2 cleanings per year",
      "Digital thermostat control",
      "Built-in low-water sensor auto-shutoff",
      "30\\",
      "D x 33\\",
      ", ",
      ", ",
      ", ",
      "Boxes will be labeled 1 of 3, 2 of 3, and 3 of 3.",
      "Low water sensor deactivates the heating element when water isn't at an acceptable level, reducing fire hazards.",
      "Electric drain pump to empty the tank for faster and easier cleanings.",
    ],
    gallery: [
      { src: "/assets/products/richmar/hydratherm-deluxe-divider/view-1.webp", alt: "Richmar HydraTherm Deluxe Divider Rack w/ 12 HydraHeat Packs — view 1" },
      { src: "/assets/products/richmar/hydratherm-deluxe-divider/view-2.webp", alt: "Richmar HydraTherm Deluxe Divider Rack w/ 12 HydraHeat Packs — view 2" },
      { src: "/assets/products/richmar/hydratherm-deluxe-divider/view-3.webp", alt: "Richmar HydraTherm Deluxe Divider Rack w/ 12 HydraHeat Packs — view 3" },
      { src: "/assets/products/richmar/hydratherm-deluxe-divider/view-4.webp", alt: "Richmar HydraTherm Deluxe Divider Rack w/ 12 HydraHeat Packs — view 4" },
      { src: "/assets/products/richmar/hydratherm-deluxe-divider/view-5.webp", alt: "Richmar HydraTherm Deluxe Divider Rack w/ 12 HydraHeat Packs — view 5" },
      { src: "/assets/products/richmar/hydratherm-deluxe-divider/view-6.webp", alt: "Richmar HydraTherm Deluxe Divider Rack w/ 12 HydraHeat Packs — view 6" },
    ],
    specGroups: [],
    specSheetUrl: "/assets/products/richmar/brochures/hydratherm-deluxe-divider-sellsheet.pdf",
    sourceUrl: "https://www.richmarweb.com/hot-cold/hydratherm-moist-heat-therapy",
    seo: {
      title: "Richmar HydraTherm Deluxe Divider Rack w/ 12 HydraHeat Packs | GM Therapy",
      description: "HydraTherm Hot Pack Heating System help maintain a cleaner clinic. Their plastic tanks eliminate the possibility of rust, making HydraTherm easier to clean",
    },
  },
  "67": {
    productId: "67",
    slug: "shuttle-tnt-with-towers",
    tagline: "The Introducing the all-new Shuttle TNT Leg Press, an affordable, high-performance, Training ‘n’ Therapy machine.",
    overview: [
      "The Introducing the all-new Shuttle TNT Leg Press, an affordable, high-performance, Training ‘n’ Therapy machine. Provides a range of exercises from light rehab to explosive plyometrics and leg press.",
      "Develop Explosive Power - To develop explosive power there is no substitute for jumping. The TNT allows you to participate in closed chain protocols, as well as jumping protocols."
    ],
    highlights: [
      "Training 'n' Therapy",
      "24\" Seat Height",
      "Six Position Adjustable Backrest - Supine, 20°, 25°, 35°, 40°, and 45°",
      "Adjustable Hand Grips",
      "PNF Towers & Pulley System Available",
      "All Aluminum Construction",
      "Supine Leg Press - The Shuttle TNT provides progressive elastic resistance in a safe supine position that ranges from 6-250lbs lbs at full extension.",
      "Plyometric Training - Train in a less than body weight environment while zeroing in on the eccentric phase of overspeed plyometric training.",
      "Minimize Joint Impact - Padded Kickplate and non-weight-bearing position protects joints and the spine on impact.",
      "Available Accessories - Proprioceptive Disk, Wobble Board, and PNF Pulley System."
    ],
    gallery: [
      { src: "/assets/products/shuttle/tnt-with-towers/view-1.webp", alt: "Shuttle Systems TNT (with Towers) — view 1" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Footprint", value: "30\"W x 105\"L" },
          { label: "Carriage Travel", value: "40\"" },
          { label: "Carriage Capacity", value: "450 lbs" },
          { label: "Max Resistance", value: "250 lbs" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/tnt-with-towers-manual.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/7100t-tnt-with-towers",
    seo: {
      title: "Shuttle Systems TNT (with Towers) | GM Therapy",
      description: "The Introducing the all-new Shuttle TNT Leg Press, an affordable, high-performance, Training ‘n’ Therapy machine. Provides a range of exercises from light...",
    },
  },
  "68": {
    productId: "68",
    slug: "shuttle-recovery-senior",
    tagline: "The Recovery Senior provides an incredible value to the clinician.",
    overview: [
      "The Recovery Senior provides an incredible value to the clinician. Able to handle a diverse range of patients from high school athletes to bariatric rehabilitation clientele, The Recovery provides a wide range of activities, from post-surgical to aggressive plyometric jumping. Designed with ease of use in mind; the Recovery makes patient transfers, resistance adjustments, and ROM easy for both the patient and the clinician."
    ],
    highlights: [
      "Excellent Capacity - Resistance up to 300 lbs at full extension and a Patient weight capacity of 600 lbs.",
      "Comfort & Support - Wide backrest to provide additional support for bariatric & senior Patients. (Optional wedge backrest also available)",
      "Safe & Secure - Foot supports that suspend patients’ feet against kick plate, carriage lock down, Comfortable foam back wedge and wobble board.",
      "Small Footprint - 24” x 48” carriage bed at a height of 21”, 24” on the Senior only , wider than the Shuttle MVP & 2000-1."
    ],
    gallery: [
      { src: "/assets/products/shuttle/recovery-senior/view-1.webp", alt: "Shuttle Recovery Senior — view 1" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Overall Footprint", value: "31\" x 98\"" },
          { label: "Backrest Dimensions", value: "24\" x 48\"" },
          { label: "Carriage Capacity", value: "500 lbs" },
          { label: "Max Resistance", value: "300 lbs" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/recovery-senior-manual.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/recovery-senior",
    seo: {
      title: "Shuttle Recovery Senior | GM Therapy",
      description: "The Recovery Senior provides an incredible value to the clinician. Able to handle a diverse range of patients from high school athletes to bariatric rehabi...",
    },
  },
  "69": {
    productId: "69",
    slug: "shuttle-mvp-pro",
    tagline: "A must have for top University trainers, strength coaches and Pro sports teams, the MVP is designed with high performance athletes in mind.",
    overview: [
      "A must have for top University trainers, strength coaches and Pro sports teams, the MVP is designed with high performance athletes in mind. The MVP is especially valuable for working with high-level athletes where explosive power is developed with minimal joint impact.",
      "Develop Explosive Power - To develop explosive power there is no substitute for jumping. The MVP allows you to participate in closed chain protocols, as well as jumping protocols."
    ],
    highlights: [
      "Three In One Machine",
      "Supine Leg Press",
      "Less Than Body Weight Plyometrics",
      "Early Stage Rehabilitation Tool",
      "Supine Leg Press - The Shuttle MVP provides progressive elastic resistance in a safe supine position that ranges from 12.5-500 lbs at full extension.",
      "Plyometric Training - Train in a less than body weight environment while zeroing in on the eccentric phase of overspeed plyometric training.",
      "Minimize Joint Impact - Padded Kickplate and non-weight-bearing position protects joints and the spine on impact.",
      "Available Accessories - Proprioceptive Disk, Wobble Board, PNF Pulley towers."
    ],
    gallery: [
      { src: "/assets/products/shuttle/mvp-pro/view-1.webp", alt: "Shuttle MVP Pro — view 1" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Dimensions", value: "31\"W x 109\"L" },
          { label: "Floor Space Required", value: "3'W x 10'L" },
          { label: "Carriage Capacity", value: "450 lbs" },
          { label: "Max Resistance", value: "500 lbs" },
          { label: "Total Elasticords", value: "12 Elasticords; (1) 12.5lb Elasticord, (11) 25 lb Elasticords" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/mvp-pro-manual.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/mvp-pro",
    seo: {
      title: "Shuttle MVP Pro | GM Therapy",
      description: "A must have for top University trainers, strength coaches and Pro sports teams, the MVP is designed with high performance athletes in mind. The MVP is espe...",
    },
  },
  "70": {
    productId: "70",
    slug: "shuttle-ultimate",
    tagline: "It’s the Ultimate in Versatility, Comfort, and Value, from Geriatric & Bariatric Care to Athletic Performance.",
    overview: [
      "It’s the Ultimate in Versatility, Comfort, and Value, from Geriatric & Bariatric Care to Athletic Performance.",
      "Rehab - Improved Controls for Therapy, Greater Comfort & Adaptability, Accommodates Bariatric Loads.",
      "Sports Training - High-Load Resistance for Leg Press and Explosive Plyometric Training Horizontal Leg Press Positioning."
    ],
    highlights: [
      "NEW Ball Bearing Pulley System",
      "Incredibly Smooth Function",
      "Facilitates Pilates Movements",
      "Provides an Auxiliary Pulley System for Standing Activities",
      "NEW Kickplate Locking Mechanism",
      "Secures Kickplate for High Load Leg Press and Plyometric Activities",
      "Increases Stroke Length for Pilates Movements",
      "NEW Rotating Hand Grips",
      "Improves Ergonomics for Hands and Shoulders",
      "NEW ROM Control",
      "Improves Controls for Flexion/Extension",
      "Locks Carriage Down for Easy Loading",
      "NEW 4 Position Adjustable Backrest",
      "Wider & Structurally Stronger to Support Bariatric Patients",
      "Softer Padding for Comfort",
      "Fully Adjustable Supine, 15°, 30°, and 45° Options",
      "NEW Greater Resistance",
      "Higher Load Capability for Use as Leg Press and Plyometric Activities",
      "NEW Wider Base",
      "Supports Bariatric Patients",
      "Improves Lateral Loading",
      "Increases Sense of Security"
    ],
    gallery: [
      { src: "/assets/products/shuttle/ultimate/view-1.webp", alt: "Shuttle Ultimate — view 1" },
      { src: "/assets/products/shuttle/ultimate/view-2.webp", alt: "Shuttle Ultimate — view 2" },
      { src: "/assets/products/shuttle/ultimate/view-3.webp", alt: "Shuttle Ultimate — view 3" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Foot Print", value: "36\" W x 104\" L" },
          { label: "Resistance", value: "6-500 lbs" },
          { label: "Carriage Capacity", value: "600 lbs" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/ultimate-brochure.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/shuttle-ultimate",
    seo: {
      title: "Shuttle Ultimate | GM Therapy",
      description: "It’s the Ultimate in Versatility, Comfort, and Value, from Geriatric & Bariatric Care to Athletic Performance.",
    },
  },
  "71": {
    productId: "71",
    slug: "shuttle-2000-1-clinical",
    tagline: "Trusted by Physical Therapists since 1985, the Shuttle 2000-1 provides smooth progressive resistance from 3 lbs up to 160 lbs at full extension.",
    overview: [
      "Trusted by Physical Therapists since 1985, the Shuttle 2000-1 provides smooth progressive resistance from 3 lbs up to 160 lbs at full extension. It is highly adjustable providing maximum patient comfort, making it ideal for acute and elderly patients.",
      "The 2000-1 has the most adjustability of any of the Shuttle Systems machines. A horizontal carriage at 25” height, featuring a three position adjustable backrest, provides easy patient transfers. This model provides smooth progressive resistance up to 160 lbs, allowing for resistance adjustments without disturbing the patient.\nThe PNF pulley tower system, available on select models, can also provide another dimension of treatments."
    ],
    highlights: [
      "Three In One Machine",
      "Supine Leg Press",
      "Less Than Body Weight Plyometrics",
      "Early Stage Rehabilitation Tool",
      "Inspire Confidence - Inspires confidence through movements easily tolerated in early phases of rehabilitation and training.",
      "Patient Comfort and Adjustability - Maximum patient comfort when adjusting resistance and patient position.",
      "Easy Transfers - The Shuttle 2000-1 comes equipped with a 25” horizontal stand made for easy patient transfers."
    ],
    gallery: [
      { src: "/assets/products/shuttle/2000-1-clinical/view-1.webp", alt: "Shuttle 2000-1 Clinical — view 1" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Dimensions", value: "31\"W x 104\"L" },
          { label: "Floor Space Required", value: "3'W x 10'L" },
          { label: "Carriage Capacity", value: "350 lbs" },
          { label: "Max Resistance", value: "160 lbs" },
          { label: "Total Elasticords", value: "8 Elasticords" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/2000-1-clinical-manual.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/2000-1-clinical",
    seo: {
      title: "Shuttle 2000-1 Clinical | GM Therapy",
      description: "Trusted by Physical Therapists since 1985, the Shuttle 2000-1 provides smooth progressive resistance from 3 lbs up to 160 lbs at full extension. It is high...",
    },
  },
  "72": {
    productId: "72",
    slug: "shuttle-ultimate-plus",
    tagline: "It’s the Ultimate in Versatility, Comfort, and Value, from Geriatric & Bariatric Care to Athletic Performance.",
    overview: [
      "It’s the Ultimate in Versatility, Comfort, and Value, from Geriatric & Bariatric Care to Athletic Performance.",
      "Rehab - Improved Controls for Therapy, Greater Comfort & Adaptability, Accommodates Bariatric Loads.",
      "Sports Training - High-Load Resistance for Leg Press and Explosive Plyometric Training Horizontal Leg Press Positioning."
    ],
    highlights: [
      "NEW Ball Bearing Pulley System",
      "Incredibly Smooth Function",
      "Facilitates Pilates Movements",
      "Provides an Auxiliary Pulley System for Standing Activities",
      "NEW Kickplate Locking Mechanism",
      "Secures Kickplate for High Load Leg Press and Plyometric Activities",
      "Increases Stroke Length for Pilates Movements",
      "NEW Rotating Hand Grips",
      "Improves Ergonomics for Hands and Shoulders",
      "NEW ROM Control",
      "Improves Controls for Flexion/Extension",
      "Locks Carriage Down for Easy Loading",
      "NEW 4 Position Adjustable Backrest",
      "Wider & Structurally Stronger to Support Bariatric Patients",
      "Softer Padding for Comfort",
      "Fully Adjustable Supine 15°, 30°, and 45° Options",
      "NEW Greater Resistance",
      "Higher Load Capability for Use as Leg Press and Plyometric Activities",
      "NEW Wider Base",
      "Supports Bariatric Patients",
      "Improves Lateral Loading",
      "Increases Sense of Security"
    ],
    gallery: [
      { src: "/assets/products/shuttle/ultimate-plus/view-1.webp", alt: "Shuttle Ultimate Plus — view 1" },
      { src: "/assets/products/shuttle/ultimate-plus/view-2.webp", alt: "Shuttle Ultimate Plus — view 2" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Foot Print", value: "36\" W x 104\" L" },
          { label: "Resistance", value: "6-500 lbs" },
          { label: "Carriage Capacity", value: "600 lbs" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/ultimate-plus-brochure.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/copy-of-shuttle-ultimate-plus",
    seo: {
      title: "Shuttle Ultimate Plus | GM Therapy",
      description: "It’s the Ultimate in Versatility, Comfort, and Value, from Geriatric & Bariatric Care to Athletic Performance.",
    },
  },
  "85": {
    productId: "85",
    slug: "shuttle-balance-professional",
    tagline: "Able to be used in any environment; the Shuttle Balance is a safe unstable platform that is portable, inexpensive, and has a small footprint.",
    overview: [
      "Able to be used in any environment; the Shuttle Balance is a safe unstable platform that is portable, inexpensive, and has a small footprint. With a winning record of positive reviews from Physical Therapists and Athletic Trainers, it is used extensively in Vestibular, Balance, Vision, and Proprioceptive training programs. Not just for athletes, this model can also assist in providing Seniors the confidence to avoid falls.",
      "The Shuttle Balance simulates a slip through motion in all horizontal planes and perturbates in both standing and seated positions for therapeutic and sport-specific treatments (fall prevention, whiplash, contact sports). Patients are challenged across all ability levels by adjusting platform height, stability, and degree of tilt, asking them to push themselves to perform while keeping them feeling safe and secure.",
      "Dynamic Platform - Develops necessary proprioception in the elderly to the stabilizers in the elite athlete. Simulates a slip through motion in all horizontal planes. Provides secure footing and supports up to 500 pounds.",
      "Adjustable Suspension Chains - Adjustable Balance Platform height, degree of stability and tilt sensitivity. Perturbates in both standing and seated positions for therapeutic and sport-specific treatments.",
      "Safely Train Balance - Convenient bars provide security and increased confidence during all phases of training. Can be used with your favorite balance accessory ie: Foam pad, DynaDisc®, & BOSU® Ball."
    ],
    highlights: [
      "Available Shuttle Accessories - Safety Step & Wheel Assembly."
    ],
    gallery: [
      { src: "/assets/products/shuttle/balance-professional/view-1.webp", alt: "Shuttle Balance Professional — view 1" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Platform Dimensions", value: "24\" x 30\"" },
          { label: "Balance Footprint", value: "42\" x 50\"" },
          { label: "Load Capacity", value: "400 lbs" },
          { label: "Rail Height", value: "41\"" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/balance-professional-manual.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/balance-professional",
    seo: {
      title: "Shuttle Balance Professional | GM Therapy",
      description: "Able to be used in any environment; the Shuttle Balance is a safe unstable platform that is portable, inexpensive, and has a small footprint. With a winnin...",
    },
  },
  "87": {
    productId: "87",
    slug: "shuttle-minipress",
    tagline: "The Shuttle MiniPress, the ideal exercise equipment for clients recovering from total knee surgery and post-surgery rehabilitation.",
    overview: [
      "The Shuttle MiniPress, the ideal exercise equipment for clients recovering from total knee surgery and post-surgery rehabilitation. This innovative portable device is especially designed for seniors, but it benefits clients of all ages looking to enhance their recovery journey.",
      "The Shuttle MiniPress focuses on sit-to-stand exercises, which are crucial for rebuilding strength and independence after surgery. Weighing just 15 lbs, it easily attaches to any chair or wheelchair, making it a versatile addition to your clinic or home.",
      "This user-friendly machine provides safe and efficient strength training that promotes improved stability and balance—essential elements for recovery. By targeting resistance training, the Shuttle MiniPress helps people regain muscle strength and enhance knee range of motion, facilitating a smoother rehabilitation process.",
      "Whether you’re treating seniors or clients recovering from total knee surgery, including those in post-surgery recovery, the Shuttle MiniPress is an invaluable tool. Equip your practice with the Shuttle MiniPress and empower your clients to thrive as they reclaim their mobility and confidence!",
      "With two versions available, there is a MiniPress that can meet the needs of any setting. CONTAINS LATEX.  ITEM #4100",
      "Use with any Chair & Wheelchair Accessible - Attaches easily to any chair using retractable cords and eliminates the need for transfers. Combine this with the included roller wheels and the 15 lb MiniPress can travel with demand; from the clinic, to the home, and even to the sideline.",
      "Adjustable Footplate - Adjustable from horizontal to 75 degrees for various degrees of flexion. The security strap can be used secure both the hand or foot, allowing for foot dorsiflexion exercises or as a heel cup in exercising patient hamstrings.",
      "Self Retracting Securing Cords - Able to be attached to a bed, chair legs, or wheelchair structure in order to provide further stabilization. When the patient is done with their exercise, simply unhook the cords which retract conveniently into the MiniPress.",
      "Accurate Tracking - The Distance Indicator Strips located on both rails allow you or the user to measure and document the exercise distance traveled. Use these metrics to gauge the patient’s progress and even motivate them."
    ],
    highlights: [
      "Total Knee Rehabilitation - The perfect choice for your total knee patients. It provides smooth controlled resistance ideal for developing flexion.",
      "Elasticord Resistance - MiniPress resistance ranges from 2 to 80 lbs in a 15 lb portable leg press. The new finger grip elasticords allow for easy loading."
    ],
    gallery: [
      { src: "/assets/products/shuttle/minipress/view-1.webp", alt: "Shuttle MiniPress — view 1" },
      { src: "/assets/products/shuttle/minipress/view-2.webp", alt: "Shuttle MiniPress — view 2" },
      { src: "/assets/products/shuttle/minipress/view-3.webp", alt: "Shuttle MiniPress — view 3" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Overall Footprint", value: "12\"W x 41\"L" },
          { label: "Carriage Travel", value: "19 3/4\"" },
          { label: "Resistance", value: "2-80 lbs" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/minipress-manual.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/minipress",
    seo: {
      title: "Shuttle MiniPress | GM Therapy",
      description: "The Shuttle MiniPress, the ideal exercise equipment for clients recovering from total knee surgery and post-surgery rehabilitation. This innovative portabl...",
    },
  },
  "89": {
    productId: "89",
    slug: "shuttle-rebound",
    tagline: "The Shuttle Rebound raises the bar for performance and convenience.",
    overview: [
      "The Shuttle Rebound raises the bar for performance and convenience. Our engineering team has successfully addressed the shortcomings found in other rebounders on the market, such as noise, durability and portability.",
      "Highest Durability - The Shuttle Rebound uses highest quality galvanized springs and only the most durable materials in mat construction. The frame is designed to accommodate up to 300 lbs. while protecting the trampoline springs.",
      "Non-Skid Base & Ball Rack - The Rebound’s frame is designed to withstand movement on carpet and gym flooring when in use, and without the use of heavy weights. It also features a built-in ball rack. (weighted balls not included)"
    ],
    highlights: [
      "Portability - The Shuttle Rebound comes equipped with wheels that make it easy to move around the clinic or gym. It's a real space saver.",
      "No Assembly Required - Just remove from the box, release the elastic retainer loops to unfold, and adjust to desired angle.",
      "Easy Storage - The lightweight Shuttle Rebound can be folded for easy storage in the vertical or horizontal position.",
      "Safe and User-Friendly Operation - With 9 angles of adjustability (0-60°) the Shuttle Rebound is highly adaptable to a range of varying exercises.",
      "Quiet Operation - Built using a noise-absorbing composite material, the Rebound's frame provides whisper quiet operation to reduce unwanted noise."
    ],
    gallery: [
      { src: "/assets/products/shuttle/rebound/view-1.webp", alt: "Shuttle Rebound (Square Rebounder) — view 1" },
      { src: "/assets/products/shuttle/rebound/view-2.webp", alt: "Shuttle Rebound (Square Rebounder) — view 2" },
      { src: "/assets/products/shuttle/rebound/view-3.webp", alt: "Shuttle Rebound (Square Rebounder) — view 3" },
      { src: "/assets/products/shuttle/rebound/view-4.webp", alt: "Shuttle Rebound (Square Rebounder) — view 4" },
      { src: "/assets/products/shuttle/rebound/view-5.webp", alt: "Shuttle Rebound (Square Rebounder) — view 5" },
      { src: "/assets/products/shuttle/rebound/view-6.webp", alt: "Shuttle Rebound (Square Rebounder) — view 6" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Overall Footprint", value: "44\"H x 48\"L x 39 1/2\"W" },
          { label: "Weight", value: "76 lbs" },
          { label: "Load Capacity", value: "350 lbs" },
          { label: "Trampoline Mat", value: "25\" x 25\"" }
        ],
      },
    ],
    specSheetUrl: "/assets/products/shuttle/brochures/rebound-manual.pdf",
    sourceUrl: "https://www.shuttlesystems.com/products/shuttle-rebound",
    seo: {
      title: "Shuttle Rebound (Square Rebounder) | GM Therapy",
      description: "The Shuttle Rebound raises the bar for performance and convenience. Our engineering team has successfully addressed the shortcomings found in other rebound...",
    },
  },
  "7": {
    productId: "7",
    slug: "gmts-platform-mounted-parallel-bars-10ft",
    tagline: "Heavy-duty 10 ft platform-mounted parallel bars for gait training and rehab.",
    overview: [
      "GMTS 10 ft Platform-Mounted Parallel Bars provide a stable, adjustable training surface for gait training, balance work, and neurological rehabilitation. The satin-finish oak platform features tapered ends for easy wheelchair access and floor mounting.",
      "Width adjusts from 15\" to 28\" using ergonomic control knobs on each upright. Each upright telescopes in 1½\" increments and locks into ten height positions with a fail-safe ball-tip locking pin (29\"–42\" range).",
    ],
    highlights: [
      "10 ft length, 38\" wide platform",
      "Width adjusts 15\"–28\" via ergonomic control knobs",
      "Height adjusts 29\"–42\" in 1½\" increments — 10 lock positions",
      "Fail-safe ball-tip locking pins",
      "1 5/8\" diameter one-piece stainless steel handrails",
      "Satin-finish oak platform with tapered ends for wheelchair access",
      "Two anti-slip treads on each end",
      "Heavy-gauge white powder-coated steel uprights and fittings",
      "500 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/parallel-bars/view-1.jpg", alt: "GMTS 10 ft Platform-Mounted Parallel Bars" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Length", value: "10 ft" },
          { label: "Platform width", value: "38\"" },
          { label: "Clearance between uprights", value: "30\"" },
          { label: "Width adjustment", value: "15\"–28\"" },
          { label: "Height adjustment", value: "29\"–42\" (1½\" increments, 10 positions)" },
          { label: "Handrail diameter", value: "1 5/8\" stainless steel, one-piece" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Platform", value: "Satin-finish oak with tapered ends" },
          { label: "Uprights", value: "Heavy-gauge white powder-coated steel" },
          { label: "Safety", value: "Two anti-slip treads on each end; ball-tip locking pins" },
          { label: "Weight capacity", value: "500 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/balance-stability/tru-parallel-bars/",
    seo: {
      title: "GMTS 10' Platform-Mounted Parallel Bars | GM Therapy",
      description: "Heavy-duty 10 ft platform-mounted parallel bars with adjustable height and width, oak platform, and 500 lb weight capacity for gait training and rehab.",
    },
  },
  "333": {
    productId: "333",
    slug: "gmts-platform-mounted-parallel-bars-7ft",
    tagline: "Heavy-duty 7 ft platform-mounted parallel bars for gait training and rehab.",
    overview: [
      "GMTS 7 ft Platform-Mounted Parallel Bars provide a stable, adjustable training surface for gait training, balance work, and neurological rehabilitation. The satin-finish oak platform features tapered ends for easy wheelchair access and floor mounting.",
      "Width adjusts from 15\" to 28\" using ergonomic control knobs on each upright. Each upright telescopes in 1½\" increments and locks into ten height positions with a fail-safe ball-tip locking pin (29\"–42\" range).",
    ],
    highlights: [
      "7 ft length, 38\" wide platform",
      "Width adjusts 15\"–28\" via ergonomic control knobs",
      "Height adjusts 29\"–42\" in 1½\" increments — 10 lock positions",
      "Fail-safe ball-tip locking pins",
      "1 5/8\" diameter one-piece stainless steel handrails",
      "Satin-finish oak platform with tapered ends for wheelchair access",
      "Two anti-slip treads on each end",
      "Heavy-gauge white powder-coated steel uprights and fittings",
      "500 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/parallel-bars/view-1.jpg", alt: "GMTS 7 ft Platform-Mounted Parallel Bars" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Length", value: "7 ft" },
          { label: "Platform width", value: "38\"" },
          { label: "Clearance between uprights", value: "30\"" },
          { label: "Width adjustment", value: "15\"–28\"" },
          { label: "Height adjustment", value: "29\"–42\" (1½\" increments, 10 positions)" },
          { label: "Handrail diameter", value: "1 5/8\" stainless steel, one-piece" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Platform", value: "Satin-finish oak with tapered ends" },
          { label: "Uprights", value: "Heavy-gauge white powder-coated steel" },
          { label: "Safety", value: "Two anti-slip treads on each end; ball-tip locking pins" },
          { label: "Weight capacity", value: "500 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/balance-stability/tru-parallel-bars/",
    seo: {
      title: "GMTS 7' Platform-Mounted Parallel Bars | GM Therapy",
      description: "Heavy-duty 7 ft platform-mounted parallel bars with adjustable height and width, oak platform, and 500 lb weight capacity for gait training and rehab.",
    },
  },
  "4": {
    productId: "4",
    slug: "gmts-standard-oak-treatment-tables",
    tagline: "Hand-crafted oak treatment tables with durable Naugahyde® upholstery.",
    overview: [
      "GMTS Standard Oak Treatment Tables are hand-crafted from high-quality oak plywood with solid oak legs, and all wood surfaces are finished in durable clear polyurethane. The tabletop features 1½\" medium-density foam covered in Naugahyde® upholstery for everyday clinical use.",
      "An \"H\" brace is standard on all models for extra stability, and many options are available to customize the table. Available in three sizes and 8 stocking Naugahyde® colors.",
    ],
    highlights: [
      "Hand-crafted oak plywood top with solid oak legs",
      "Durable clear polyurethane finish on all wood surfaces",
      "1½\" medium-density foam top with Naugahyde® upholstery",
      "Standard \"H\" brace for extra stability",
      "Available in 27\" × 72\", 30\" × 72\", and 30\" × 78\"",
      "Surface height: 30\"",
      "8 stocking Naugahyde® colors",
      "Many customization options available",
      "400 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/oak-treatment-tables/view-1.jpg", alt: "GMTS Standard Oak Treatment Table" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Sizes", value: "27\" × 72\", 30\" × 72\", 30\" × 78\"" },
          { label: "Surface height", value: "30\"" },
          { label: "Foam thickness", value: "1½\" medium-density" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Top", value: "Oak plywood" },
          { label: "Legs", value: "Solid oak" },
          { label: "Finish", value: "Durable clear polyurethane" },
          { label: "Bracing", value: "Standard \"H\" brace" },
          { label: "Upholstery", value: "Naugahyde® — 8 stocking colors" },
          { label: "Weight capacity", value: "400 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/treatment-tables/fixed-height/tru-standard-oak-treatment-tables/",
    seo: {
      title: "GMTS Standard Oak Treatment Tables | GM Therapy",
      description: "Hand-crafted oak treatment tables with 1½\" foam, Naugahyde® upholstery, H-brace stability, and 400 lb capacity. Three sizes, 8 colors.",
    },
  },
  "5": {
    productId: "5",
    slug: "gmts-electric-hi-low-mat-table-4x7",
    tagline: "4' × 7' electric height-adjustable hi-low mat table in solid oak.",
    overview: [
      "GMTS Electric Hi-Low Mat Table (4' × 7') is hand-crafted from high-quality solid oak and features a 120V, 60 Hz motor that smoothly adjusts table height from 21\" to 32\". A hand control is standard for easy operation during patient transfers and treatment.",
      "All wood surfaces are finished in durable clear polyurethane. The tabletop includes 2\" medium-density foam covered in Naugahyde® upholstery and is offered in 11 stocking colors.",
    ],
    highlights: [
      "Size: 4' × 7'",
      "Hand-crafted solid oak construction",
      "120V, 60 Hz motor — electronic height adjustment",
      "Height range: 21\"–32\"",
      "Hand control standard",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "11 stocking Naugahyde® colors",
      "700 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/electric-hilo-mat-tables/view-1.jpg", alt: "GMTS Electric Hi-Low Mat Table 4' × 7'" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Size", value: "4' × 7'" },
          { label: "Height range", value: "21\"–32\" (electric)" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Power & Construction",
        rows: [
          { label: "Motor", value: "120V, 60 Hz" },
          { label: "Controls", value: "Hand control standard" },
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Weight capacity", value: "700 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/mat-tables/hi-low_2/tru-electric-hi-low-mat-tables/",
    seo: {
      title: "GMTS Electric Hi-Low Mat Table 4' × 7' | GM Therapy",
      description: "Solid oak electric hi-low mat table, 4' × 7', with 21\"–32\" height range, 120V motor, hand control, and 700 lb capacity. 11 upholstery colors.",
    },
  },
  "337": {
    productId: "337",
    slug: "gmts-electric-hi-low-mat-table-5x7",
    tagline: "5' × 7' electric height-adjustable hi-low mat table in solid oak.",
    overview: [
      "GMTS Electric Hi-Low Mat Table (5' × 7') is hand-crafted from high-quality solid oak and features a 120V, 60 Hz motor that smoothly adjusts table height from 21\" to 32\". A hand control is standard for easy operation during patient transfers and treatment.",
      "All wood surfaces are finished in durable clear polyurethane. The tabletop includes 2\" medium-density foam covered in Naugahyde® upholstery and is offered in 11 stocking colors.",
    ],
    highlights: [
      "Size: 5' × 7'",
      "Hand-crafted solid oak construction",
      "120V, 60 Hz motor — electronic height adjustment",
      "Height range: 21\"–32\"",
      "Hand control standard",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "11 stocking Naugahyde® colors",
      "700 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/electric-hilo-mat-tables/view-1.jpg", alt: "GMTS Electric Hi-Low Mat Table 5' × 7'" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Size", value: "5' × 7'" },
          { label: "Height range", value: "21\"–32\" (electric)" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Power & Construction",
        rows: [
          { label: "Motor", value: "120V, 60 Hz" },
          { label: "Controls", value: "Hand control standard" },
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Weight capacity", value: "700 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/mat-tables/hi-low_2/tru-electric-hi-low-mat-tables/",
    seo: {
      title: "GMTS Electric Hi-Low Mat Table 5' × 7' | GM Therapy",
      description: "Solid oak electric hi-low mat table, 5' × 7', with 21\"–32\" height range, 120V motor, hand control, and 700 lb capacity. 11 upholstery colors.",
    },
  },
  "338": {
    productId: "338",
    slug: "gmts-electric-hi-low-mat-table-6x8",
    tagline: "6' × 8' electric height-adjustable hi-low mat table in solid oak.",
    overview: [
      "GMTS Electric Hi-Low Mat Table (6' × 8') is hand-crafted from high-quality solid oak and features a 120V, 60 Hz motor that smoothly adjusts table height from 21\" to 32\". The largest size in the line, ideal for neuro, pediatric, and bariatric rehab. A hand control is standard for easy operation during patient transfers and treatment.",
      "All wood surfaces are finished in durable clear polyurethane. The tabletop includes 2\" medium-density foam covered in Naugahyde® upholstery and is offered in 11 stocking colors.",
    ],
    highlights: [
      "Size: 6' × 8' — largest clinical mat size",
      "Hand-crafted solid oak construction",
      "120V, 60 Hz motor — electronic height adjustment",
      "Height range: 21\"–32\"",
      "Hand control standard",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "11 stocking Naugahyde® colors",
      "700 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/electric-hilo-mat-tables/view-1.jpg", alt: "GMTS Electric Hi-Low Mat Table 6' × 8'" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Size", value: "6' × 8'" },
          { label: "Height range", value: "21\"–32\" (electric)" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Power & Construction",
        rows: [
          { label: "Motor", value: "120V, 60 Hz" },
          { label: "Controls", value: "Hand control standard" },
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Weight capacity", value: "700 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/mat-tables/hi-low_2/tru-electric-hi-low-mat-tables/",
    seo: {
      title: "GMTS Electric Hi-Low Mat Table 6' × 8' | GM Therapy",
      description: "Solid oak electric hi-low mat table, 6' × 8', with 21\"–32\" height range, 120V motor, hand control, and 700 lb capacity. 11 upholstery colors.",
    },
  },
  "6": {
    productId: "6",
    slug: "gmts-deluxe-oak-mat-table-3x7",
    tagline: "3' × 7' fixed-height solid oak mat table for clinical rehabilitation.",
    overview: [
      "GMTS Deluxe Oak Mat Table (3' × 7') is hand-crafted from high-quality solid oak with all wood surfaces finished in durable clear polyurethane. The 20\" surface height makes it well-suited for floor-level transfers, mat work, and pediatric or geriatric therapy.",
      "The tabletop includes 2\" medium-density foam covered in Naugahyde® upholstery, offered in 11 stocking colors.",
    ],
    highlights: [
      "Size: 3' × 7'",
      "Hand-crafted solid oak construction",
      "Durable clear polyurethane finish",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "Surface height: 20\"",
      "11 stocking Naugahyde® colors",
      "500 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/oak-mat-tables/view-1.jpg", alt: "GMTS Deluxe Oak Mat Table 3' × 7'" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Size", value: "3' × 7'" },
          { label: "Surface height", value: "20\"" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Weight capacity", value: "500 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/mat-tables/fixed-height_2/tru-deluxe-oak-mat-tables/",
    seo: {
      title: "GMTS Deluxe Oak Mat Table 3' × 7' | GM Therapy",
      description: "Solid oak fixed-height mat table, 3' × 7', with 20\" surface, 2\" foam top, 11 Naugahyde® colors, and 500 lb capacity. Made in USA.",
    },
  },
  "341": {
    productId: "341",
    slug: "gmts-deluxe-oak-mat-table-4x7",
    tagline: "4' × 7' fixed-height solid oak mat table for clinical rehabilitation.",
    overview: [
      "GMTS Deluxe Oak Mat Table (4' × 7') is hand-crafted from high-quality solid oak with all wood surfaces finished in durable clear polyurethane. The 20\" surface height makes it well-suited for floor-level transfers, mat work, and pediatric or geriatric therapy.",
      "The tabletop includes 2\" medium-density foam covered in Naugahyde® upholstery, offered in 11 stocking colors.",
    ],
    highlights: [
      "Size: 4' × 7'",
      "Hand-crafted solid oak construction",
      "Durable clear polyurethane finish",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "Surface height: 20\"",
      "11 stocking Naugahyde® colors",
      "500 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/oak-mat-tables/view-1.jpg", alt: "GMTS Deluxe Oak Mat Table 4' × 7'" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Size", value: "4' × 7'" },
          { label: "Surface height", value: "20\"" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Weight capacity", value: "500 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/mat-tables/fixed-height_2/tru-deluxe-oak-mat-tables/",
    seo: {
      title: "GMTS Deluxe Oak Mat Table 4' × 7' | GM Therapy",
      description: "Solid oak fixed-height mat table, 4' × 7', with 20\" surface, 2\" foam top, 11 Naugahyde® colors, and 500 lb capacity. Made in USA.",
    },
  },
  "342": {
    productId: "342",
    slug: "gmts-deluxe-oak-mat-table-5x7",
    tagline: "5' × 7' fixed-height solid oak mat table for clinical rehabilitation.",
    overview: [
      "GMTS Deluxe Oak Mat Table (5' × 7') is hand-crafted from high-quality solid oak with all wood surfaces finished in durable clear polyurethane. The 20\" surface height makes it well-suited for floor-level transfers, mat work, and pediatric or geriatric therapy.",
      "The tabletop includes 2\" medium-density foam covered in Naugahyde® upholstery, offered in 11 stocking colors.",
    ],
    highlights: [
      "Size: 5' × 7'",
      "Hand-crafted solid oak construction",
      "Durable clear polyurethane finish",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "Surface height: 20\"",
      "11 stocking Naugahyde® colors",
      "500 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/oak-mat-tables/view-1.jpg", alt: "GMTS Deluxe Oak Mat Table 5' × 7'" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Size", value: "5' × 7'" },
          { label: "Surface height", value: "20\"" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Weight capacity", value: "500 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/mat-tables/fixed-height_2/tru-deluxe-oak-mat-tables/",
    seo: {
      title: "GMTS Deluxe Oak Mat Table 5' × 7' | GM Therapy",
      description: "Solid oak fixed-height mat table, 5' × 7', with 20\" surface, 2\" foam top, 11 Naugahyde® colors, and 500 lb capacity. Made in USA.",
    },
  },
  "343": {
    productId: "343",
    slug: "gmts-deluxe-oak-mat-table-6x8",
    tagline: "6' × 8' fixed-height solid oak mat table for clinical rehabilitation.",
    overview: [
      "GMTS Deluxe Oak Mat Table (6' × 8') is hand-crafted from high-quality solid oak with all wood surfaces finished in durable clear polyurethane. The 20\" surface height makes it well-suited for floor-level transfers, mat work, and pediatric or geriatric therapy. This is the largest size in the line for high-volume clinical use.",
      "The tabletop includes 2\" medium-density foam covered in Naugahyde® upholstery, offered in 11 stocking colors.",
    ],
    highlights: [
      "Size: 6' × 8' — largest in the line",
      "Hand-crafted solid oak construction",
      "Durable clear polyurethane finish",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "Surface height: 20\"",
      "11 stocking Naugahyde® colors",
      "500 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/oak-mat-tables/view-1.jpg", alt: "GMTS Deluxe Oak Mat Table 6' × 8'" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Size", value: "6' × 8'" },
          { label: "Surface height", value: "20\"" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Weight capacity", value: "500 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/mat-tables/fixed-height_2/tru-deluxe-oak-mat-tables/",
    seo: {
      title: "GMTS Deluxe Oak Mat Table 6' × 8' | GM Therapy",
      description: "Solid oak fixed-height mat table, 6' × 8', with 20\" surface, 2\" foam top, 11 Naugahyde® colors, and 500 lb capacity. Made in USA.",
    },
  },
  "12": {
    productId: "12",
    slug: "gmts-deluxe-convertible-ada-staircase",
    tagline: "ADA-compliant convertible training staircase — straight or corner configurations.",
    overview: [
      "GMTS Deluxe Convertible \"ADA Compliant\" Staircase is hand-crafted from high-quality oak plywood and includes solid oak handrails and uprights. All wood surfaces are finished with durable clear polyurethane. The convertible design allows the staircase to be set up in either a straight line or corner configuration to fit your clinic layout.",
      "11\" deep yellow-nosed steps enhance safety and durability. One end offers (3) 6\" high steps and the other offers (4) 4½\" high steps, with a 36\" × 36\" platform at 18\" height. Anti-slip treads are standard on all steps and the platform, and ergonomic handrails feature a 12\" ADA overhang.",
    ],
    highlights: [
      "Convertible: straight-line or corner configuration",
      "11\" deep yellow-nosed steps for safety",
      "(3) 6\" steps on one end, (4) 4½\" steps on the other",
      "36\" × 36\" × 18\" high platform",
      "Anti-slip treads on all steps and platform",
      "Ergonomic handrails with 12\" ADA overhang",
      "Hand-crafted oak plywood with solid oak handrails",
      "Meets ADA guidelines",
      "350 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/convertible-ada-staircase/view-1.jpg", alt: "GMTS Deluxe Convertible ADA Compliant Staircase" },
      { src: "/assets/products/gmts/convertible-ada-staircase/view-2.jpg", alt: "GMTS Deluxe Convertible ADA Compliant Staircase — alternate view" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Platform", value: "36\" × 36\" × 18\" high" },
          { label: "Step depth", value: "11\" (yellow-nosed)" },
          { label: "Steps — end A", value: "(3) at 6\" high" },
          { label: "Steps — end B", value: "(4) at 4½\" high" },
          { label: "Handrail overhang", value: "12\" (ADA)" },
        ],
      },
      {
        title: "Construction & Compliance",
        rows: [
          { label: "Frame", value: "High-quality oak plywood" },
          { label: "Handrails / uprights", value: "Solid oak, ergonomic" },
          { label: "Finish", value: "Durable clear polyurethane" },
          { label: "Safety", value: "Anti-slip treads on all steps and platform" },
          { label: "Compliance", value: "Meets ADA guidelines" },
          { label: "Weight capacity", value: "350 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/balance-stability/tru-deluxe-convertible-ada-compliant-staircase/",
    seo: {
      title: "GMTS Convertible ADA Staircase | GM Therapy",
      description: "ADA-compliant convertible training staircase with straight or corner setup, oak construction, anti-slip treads, and 350 lb capacity for clinical rehab.",
    },
  },
  "329": {
    productId: "329",
    slug: "gmts-deluxe-mobile-posture-mirror",
    tagline: "Hand-crafted oak mobile posture mirror with .25\" distortion-free glass.",
    overview: [
      "GMTS Deluxe Mobile Posture Mirror is hand-crafted from high-quality solid oak with all wood surfaces finished in durable clear polyurethane. The .25\" distortion-free mirror provides a true, accurate reflection for postural assessment, gait analysis, and movement training.",
      "The mirror is mounted on (4) easy-rolling casters for fast repositioning between treatment areas. Glass size is 23\" × 67\" with an overall frame size of 28\" × 79\". Available in Black or Natural Oak finish.",
    ],
    highlights: [
      "Hand-crafted solid oak frame",
      "Durable clear polyurethane finish",
      ".25\" distortion-free mirror — true reflection",
      "(4) easy-rolling casters for mobility",
      "Glass size: 23\" × 67\"",
      "Overall size: 28\" × 79\"",
      "Available in Black or Natural Oak",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/posture-mirror/view-1.jpg", alt: "GMTS Deluxe Mobile Posture Mirror" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Glass size", value: "23\" × 67\"" },
          { label: "Overall size", value: "28\" × 79\"" },
          { label: "Mirror thickness", value: ".25\" distortion-free" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Mobility", value: "(4) easy-rolling casters" },
          { label: "Finishes", value: "Black or Natural Oak" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/balance-stability/tru-deluxe-mobile-posture-mirror/",
    seo: {
      title: "GMTS Deluxe Mobile Posture Mirror | GM Therapy",
      description: "Solid oak mobile posture mirror with .25\" distortion-free glass, 23\"×67\" viewing area, and (4) rolling casters. Black or natural oak.",
    },
  },
  "330": {
    productId: "330",
    slug: "gmts-deluxe-training-stairs",
    tagline: "Hand-crafted oak training stairs with anti-slip treads — with or without bus step.",
    overview: [
      "GMTS Deluxe Training Stairs are hand-crafted from high-quality oak plywood and include solid oak handrails and uprights. All wood surfaces are finished in durable clear polyurethane. Handrails are ergonomically designed for a comfortable grip and ease of use during gait and stair training.",
      "The configuration offers (2) 6\" high steps and (3) 4\" high steps, all 30\" wide, with a 30\"W × 24\"D × 12\"H platform. Anti-slip treads are standard on every step and on the platform. Available with or without an integrated bus step.",
    ],
    highlights: [
      "Hand-crafted oak plywood with solid oak handrails",
      "Ergonomic handrails for comfortable grip",
      "(2) 6\" steps and (3) 4\" steps — 30\" wide",
      "Platform: 30\"W × 24\"D × 12\"H",
      "Anti-slip treads on all steps and platform",
      "Available with or without bus step",
      "Durable clear polyurethane finish",
      "400 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/training-stairs/view-1.jpg", alt: "GMTS Deluxe Training Stairs" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Steps", value: "(2) 6\" high + (3) 4\" high, 30\" wide" },
          { label: "Platform", value: "30\"W × 24\"D × 12\"H" },
          { label: "Configurations", value: "With or without bus step" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "Oak plywood with solid oak handrails and uprights" },
          { label: "Finish", value: "Durable clear polyurethane" },
          { label: "Safety", value: "Anti-slip treads on all steps and platform" },
          { label: "Weight capacity", value: "400 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/balance-stability/tru-deluxe-training-stairs/",
    seo: {
      title: "GMTS Deluxe Training Stairs | GM Therapy",
      description: "Oak training stairs with (2) 6\" + (3) 4\" steps, ergonomic handrails, anti-slip treads, and 400 lb capacity. Available with or without bus step.",
    },
  },
  "340": {
    productId: "340",
    slug: "gmts-deluxe-oak-treatment-table-30x72-lift-back-shelf",
    tagline: "30\" × 72\" hand-crafted oak treatment table with lift back and storage shelf.",
    overview: [
      "This GMTS Deluxe Oak Treatment Table is hand-crafted from high-quality solid oak with all wood surfaces finished in durable clear polyurethane. The 30\" × 72\" top features 2\" medium-density foam with Naugahyde® upholstery and is configured with an adjustable lift back for patient positioning plus an upholstered shelf below for storage.",
      "An \"H\" brace is standard for extra stability. Available in 11 stocking Naugahyde® colors and built to a 500 lb weight capacity. Made in the USA.",
    ],
    highlights: [
      "30\" × 72\" hand-crafted solid oak treatment table",
      "Adjustable lift back for patient positioning",
      "Upholstered storage shelf below",
      "2\" medium-density foam top with Naugahyde® upholstery",
      "Durable clear polyurethane wood finish",
      "Standard \"H\" brace for extra stability",
      "Surface height: 30\"",
      "11 stocking Naugahyde® colors",
      "500 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts/oak-treatment-tables/view-1.jpg", alt: "GMTS 30\" × 72\" Standard Oak Treatment Table with lift back and shelf" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Top size", value: "30\" × 72\"" },
          { label: "Surface height", value: "30\"" },
          { label: "Foam thickness", value: "2\" medium-density" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "Solid oak with clear polyurethane finish" },
          { label: "Bracing", value: "Standard \"H\" brace" },
          { label: "Upholstery", value: "Naugahyde® — 11 stocking colors" },
          { label: "Configuration", value: "Lift back + upholstered storage shelf" },
          { label: "Weight capacity", value: "500 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/treatment-tables/fixed-height/tru-deluxe-oak-treatment-tables/",
    seo: {
      title: "GMTS 30\" × 72\" Oak Treatment Table w/ Lift Back & Shelf | GM Therapy",
      description: "Hand-crafted 30\" × 72\" solid oak treatment table with adjustable lift back, upholstered storage shelf, 2\" foam, Naugahyde® upholstery, and 500 lb capacity.",
    },
  },
  "1": {
    productId: "1",
    slug: "gmts-3-section-hi-lo-treatment-table",
    tagline: "Versatile, durable, and affordable 3-section electric hi-lo treatment table with bar-activated elevation.",
    overview: [
      "The GMTS 3 Section Hi-Lo Treatment Table offers practitioners dependable, high-quality support for a wide range of treatments and therapies. Featuring a sleek, stylish design, this electric hi-lo table includes bar-activated elevation and three sections built to withstand heavy manipulation, all supported by an impact-resistant steel frame.",
      "Gas struts make it easy to adjust the moveable top sections, and the table includes foot levers, hand levers, a contoured face opening, and a cushioned face plug. With an 18\"–36\" height range, it qualifies for the ADA tax credit. The 2\" high-density foam is covered in durable vinyl upholstery with seamless, rounded corners. Maximum weight capacity is 496 lb (225 kg). Available in Imperial Blue or Black.",
    ],
    highlights: [
      "Bar-activated electric elevation, 18\"–36\" height range",
      "ADA compliant — qualifies for ADA tax credit",
      "Adjustable head section: -30° to +80°",
      "Adjustable leg section: 0° to +80°",
      "Heavy-duty impact-resistant steel frame",
      "Gas struts on moveable sections",
      "Hand and foot levers",
      "Contoured face opening with cushioned face plug",
      "Four retractable casters with activator levers + four leveling feet",
      "2\" high-density foam top with vinyl upholstery",
      "Maximum weight capacity: 496 lb (225 kg)",
      "Available in Imperial Blue or Black",
    ],
    gallery: [
      { src: "/assets/products/gmts-3-section-hilo.png", alt: "GMTS 3 Section Hi-Lo Treatment Table" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Total length", value: "77\" (1,955 mm)" },
          { label: "Table width", value: "27\" (700 mm)" },
          { label: "Minimum height", value: "18\" (460 mm)" },
          { label: "Maximum height", value: "36\" (910 mm)" },
          { label: "Head section length", value: "16\" (410 mm)" },
          { label: "Mid section length", value: "25\" (640 mm)" },
          { label: "Leg section length", value: "33\" (850 mm)" },
        ],
      },
      {
        title: "Capacity & Construction",
        rows: [
          { label: "Maximum weight capacity", value: "496 lb (225 kg)" },
          { label: "Table weight", value: "200 lb (91 kg)" },
          { label: "Frame", value: "Impact-resistant steel" },
          { label: "Foam", value: "2\" high-density" },
          { label: "Upholstery", value: "Durable vinyl — Imperial Blue or Black" },
          { label: "Head tilt", value: "-30° to +80°" },
          { label: "Leg tilt", value: "0° to +80°" },
        ],
      },
    ],
    sourceUrl: "https://www.bodymedproducts.com/products/bodymed-3-section-hi-lo-treatment-table",
    seo: {
      title: "GMTS 3 Section Hi-Lo Treatment Table | GM Therapy",
      description: "Electric 3-section hi-lo treatment table with bar-activated elevation, 18\"–36\" range, 496 lb capacity, ADA compliant, gas struts, and adjustable head and leg sections.",
    },
  },
  "2": {
    productId: "2",
    slug: "gmts-treatment-table-adjustable-backrest",
    tagline: "Professional-grade fixed-height treatment table with adjustable backrest, full storage shelf, and 595 lb capacity.",
    overview: [
      "Provide patients with the best in stability and support with the dependable GMTS Treatment Table with Adjustable Backrest. Designed to withstand a variety of treatments and therapies, this fixed-height table offers backrest adjustability and plush comfort with 2.5\" multi-layered foam padding and PVC upholstery.",
      "The solid hardwood frame supports up to 595 lb (270 kg), allowing it to withstand heavy manipulation across a wide range of patients. Each table includes a contoured nose hole with a removable cushioned plug, a full wooden storage shelf beneath the table, and seamless rounded corners. The backrest adjusts from 0° to 60° using a side-mounted handle.",
    ],
    highlights: [
      "Heavy-duty hardwood frame",
      "Full storage shelf",
      "Adjustable backrest: 0°–60°",
      "Contoured nose hole with cushioned plug",
      "Side-mounted adjusting handle",
      "2.5\" (6 cm) multi-layered foam top",
      "Seamless, rounded corners",
      "PVC upholstery",
      "Maximum weight capacity: 595 lb (270 kg)",
      "Fixed height: 30.5\" (77 cm)",
      "2-year limited warranty",
    ],
    gallery: [
      { src: "/assets/products/gmts-treatment-table-backrest.png", alt: "GMTS Treatment Table with Adjustable Backrest" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Table length", value: "72.5\" (184 cm)" },
          { label: "Table width", value: "28\" (71 cm)" },
          { label: "Fixed height", value: "30.5\" (77 cm)" },
          { label: "Backrest angle range", value: "0°–60°" },
        ],
      },
      {
        title: "Capacity & Construction",
        rows: [
          { label: "Maximum weight capacity", value: "595 lb (270 kg)" },
          { label: "Table weight", value: "67 lb (30.5 kg)" },
          { label: "Frame", value: "Heavy-duty hardwood" },
          { label: "Foam", value: "2.5\" multi-layered" },
          { label: "Upholstery", value: "PVC" },
          { label: "Warranty", value: "2-year limited" },
        ],
      },
    ],
    sourceUrl: "https://www.bodymedproducts.com/collections/treatment-tables/products/bodymed-treatment-table-1",
    seo: {
      title: "GMTS Treatment Table with Adjustable Backrest | GM Therapy",
      description: "Fixed-height treatment table with adjustable 0°–60° backrest, full storage shelf, contoured nose hole, 2.5\" foam, PVC upholstery, and 595 lb capacity.",
    },
  },
  "3": {
    productId: "3",
    slug: "gmts-2-section-bo-bath-hi-lo-treatment-table",
    tagline: "Extra-wide 40\" 2-section electric Bo-Bath hi-lo treatment table for a wide range of body types and therapeutic techniques.",
    overview: [
      "The GMTS 2-section Bo-Bath Treatment Table is an extra-wide treatment platform that supports a wide range of body types and therapeutic techniques. It is built to ensure range of motion and flexibility during treatment, delivering a high-quality experience to both patients and practitioners at an affordable price.",
      "An industry-leading linear actuator silently generates 7,000 Newtons of force, electrically adjusting table height from 18\"–40\". Gas-assisted struts control the recessed headrest, and foot-pedal controls are standard on all four sides for easy access during treatment. Backed by a three-year warranty.",
    ],
    highlights: [
      "Extra-wide 40\" base and cushion",
      "Electric height adjustment: 18\"–40\"",
      "Gas-assisted struts control the recessed headrest",
      "Foot-pedal control on all four sides (standard)",
      "Industry-leading linear actuator — 7,000 N of force, near-silent",
      "3\" non-slip, gently contoured cushion",
      "Integrated retractable casters",
      "500 lb weight capacity",
      "110V power",
      "Available in Black, Grey, or Blue",
      "3-year warranty",
    ],
    gallery: [
      { src: "/assets/products/gmts-2-section-bobath.png", alt: "GMTS 2 Section Bo-Bath 40\" Hi-Lo Treatment Table" },
    ],
    specGroups: [
      {
        title: "Dimensions & Capacity",
        rows: [
          { label: "Cushion width", value: "40\" (extra-wide)" },
          { label: "Height range", value: "18\"–40\" (electric)" },
          { label: "Cushion thickness", value: "3\" non-slip, contoured" },
          { label: "Weight capacity", value: "500 lb" },
        ],
      },
      {
        title: "Power & Controls",
        rows: [
          { label: "Power", value: "110V" },
          { label: "Actuator", value: "Linear, 7,000 N force" },
          { label: "Controls", value: "Foot pedals on all four sides" },
          { label: "Headrest", value: "Recessed, gas-strut controlled" },
          { label: "Casters", value: "Integrated, retractable" },
          { label: "Color options", value: "Black, Grey, Blue" },
          { label: "Warranty", value: "3 years" },
        ],
      },
    ],
    sourceUrl: "https://medsurface.com/treatment-tables/2-section-hi-lo-bobath-table/",
    seo: {
      title: "GMTS 2 Section Bo-Bath 40\" Hi-Lo Treatment Table | GM Therapy",
      description: "Extra-wide 40\" 2-section electric Bo-Bath hi-lo table with 18\"–40\" height range, 7,000 N actuator, foot-pedal controls, retractable casters, and 500 lb capacity.",
    },
  },
  "18": {
    productId: "18",
    slug: "gmts-traction-hi-lo-treatment-table-with-stool",
    tagline: "4-section electric traction hi-lo treatment table with low-friction gliding lumbar section and turret-mounted traction pedestal — stool included.",
    overview: [
      "Designed specifically for lumbar traction and other therapeutic techniques, the GMTS Traction Hi-Lo Treatment Table is ideal for rehabilitation and sports therapy centers. The four-cushion-section design features a low-friction gliding lumbar section and a turret-mounted traction pedestal for precise, repeatable traction setups.",
      "An industry-leading linear actuator produces an unmatched 7,000 Newtons of force and electrically adjusts table height from 18\"–38\" for easy patient access. Foot-pedal controls on all four sides keep clinicians hands-free during setup, and gas-assisted struts control section movement smoothly.",
      "An anti-microbial top surface provides a sanitary, easy-to-clean treatment area, while the 3\" non-slip cushion is gently contoured for both patient and practitioner comfort. Integrated retractable casters make the table easy to reposition. Includes a matching stool and is backed by a three-year warranty.",
    ],
    highlights: [
      "Four cushion-sections with low-friction gliding lumbar section",
      "Turret-mounted traction pedestal",
      "Electric height adjustment: 18\"–38\"",
      "Gas-assisted strut control",
      "Foot-pedal control on all four sides",
      "Industry-leading linear actuator — 7,000 N of force",
      "Anti-microbial, easy-to-clean sanitary surface",
      "3\" non-slip, gently contoured cushion",
      "Integrated retractable casters",
      "500 lb weight capacity",
      "110V power",
      "Available in Black, Grey, or Blue",
      "Stool included",
      "3-year warranty",
    ],
    gallery: [
      { src: "/assets/products/gmts-traction-package.png", alt: "GMTS Traction Hi-Lo Treatment Table with Stool" },
    ],
    specGroups: [
      {
        title: "Table & Capacity",
        rows: [
          { label: "Cushion sections", value: "4, with low-friction gliding lumbar section" },
          { label: "Cushion thickness", value: "3\" non-slip, contoured" },
          { label: "Height range", value: "18\"–38\" (electric)" },
          { label: "Weight capacity", value: "500 lb" },
        ],
      },
      {
        title: "Power & Controls",
        rows: [
          { label: "Power", value: "110V" },
          { label: "Actuator", value: "Linear — 7,000 N force" },
          { label: "Controls", value: "Foot pedals on all four sides" },
          { label: "Section control", value: "Gas-assisted struts" },
          { label: "Traction", value: "Turret-mounted traction pedestal" },
        ],
      },
      {
        title: "Surface & Mobility",
        rows: [
          { label: "Surface", value: "Anti-microbial, easy-to-clean" },
          { label: "Casters", value: "Integrated, retractable" },
          { label: "Color options", value: "Black, Grey, Blue" },
          { label: "Includes", value: "Matching stool" },
          { label: "Warranty", value: "3 years" },
        ],
      },
    ],
    sourceUrl: "https://medsurface.com/treatment-tables/traction-hi-lo-table-with-stool/",
    seo: {
      title: "GMTS TRACTION TABLE W/ FLEXION STOOL | GM Therapy",
      description: "4-section electric traction hi-lo treatment table with low-friction gliding lumbar section, turret-mounted traction pedestal, 18\"–38\" range, 7,000 N actuator, foot-pedal controls, and 500 lb capacity. Flexion stool included.",
    },
  },
  "15": {
    productId: "15",
    slug: "gmts-medium-enclosed-storage-weight-rack",
    tagline: "Multi-purpose enclosed storage and weight rack with pegboard for therapy weights, dumbbell hooks, and four oak-door storage shelves.",
    overview: [
      "Beautiful craftsmanship on this multi-purpose storage and weight rack. The front of the rack features an almond-coated pegboard sized for nine therapy weights, and ships with eleven pegboard safety hooks for therapy weight storage.",
      "Five dumbbell hooks on the left side and five on the right hold one full 1–10 lb dumbbell set or two 1–5 lb dumbbell sets. The back of the rack offers four large enclosed storage shelves behind beautiful oak doors to keep clinic supplies organized and out of sight.",
      "Available in a durable black or natural oak finish and rolls easily on four 3\" diameter casters. Made in the USA. Weights and bands sold separately.",
    ],
    highlights: [
      "Multi-purpose storage and weight rack",
      "Almond-coated front pegboard sized for 9 therapy weights",
      "Includes 11 pegboard safety hooks for therapy weights",
      "5 dumbbell hooks on each side (10 total)",
      "Holds (1) 1–10 lb dumbbell set or (2) 1–5 lb dumbbell sets",
      "Four large enclosed storage shelves behind oak doors on back",
      "Available in black or natural oak finish",
      "Four 3\" diameter easy-rolling casters",
      "Dimensions: 52.5\"H × 34\"W × 19\"D",
      "Weights and bands sold separately",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/gmts-mini-storage-rack.png", alt: "GMTS Medium Enclosed Storage / Weight Rack" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Height", value: "52.5\"" },
          { label: "Width", value: "34\"" },
          { label: "Depth", value: "19\"" },
          { label: "Casters", value: "(4) 3\" diameter, easy-rolling" },
        ],
      },
      {
        title: "Storage Capacity",
        rows: [
          { label: "Front pegboard", value: "Almond-coated, sized for 9 therapy weights" },
          { label: "Pegboard hooks", value: "(11) safety hooks included" },
          { label: "Dumbbell hooks", value: "(5) left side + (5) right side" },
          { label: "Dumbbell capacity", value: "(1) 1–10 lb set or (2) 1–5 lb sets" },
          { label: "Enclosed shelves", value: "(4) large shelves behind oak doors" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Finish options", value: "Black or natural oak" },
          { label: "Origin", value: "Made in the USA" },
          { label: "Note", value: "Weights and bands sold separately" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/clinic-equipment/tru-medium-enclosed-storage-weight-rack/",
    seo: {
      title: "GMTS Medium Enclosed Storage / Weight Rack | GM Therapy",
      description: "Multi-purpose 52.5\" × 34\" × 19\" enclosed storage and weight rack with front pegboard for therapy weights, dumbbell hooks, four oak-door shelves, and 3\" casters.",
    },
  },
  "332": {
    productId: "332",
    slug: "gmts-deluxe-3-step-closed-end-staircase",
    tagline: "Hand-crafted oak plywood 3-step closed-end training staircase with solid oak handrails, anti-slip treads, and 350 lb capacity.",
    overview: [
      "The GMTS Deluxe 3-Step Closed-End Staircase is hand crafted with high quality oak plywood and includes solid oak handrails and uprights. All wood surfaces are finished with durable clear polyurethane for long-lasting protection in busy clinical environments.",
      "Handrails are ergonomically designed for a comfortable grip and ease of use, and fully enclose the platform to provide secure support during stair training. Three 6\" high steps and a 30\"W × 24\"D × 18\"H platform offer a stable progression for early to mid-stage rehab.",
      "Anti-slip treads are standard on all steps and the platform to ensure safety during therapy sessions. Supports up to 350 lbs and is made in the USA.",
    ],
    highlights: [
      "Hand-crafted oak plywood with solid oak handrails and uprights",
      "Durable clear polyurethane finish on all wood surfaces",
      "Ergonomic handrails fully enclose the platform",
      "(3) 6\" high steps, 30\" wide",
      "Platform: 30\"W × 24\"D × 18\"H",
      "Anti-slip treads on all steps and platform",
      "350 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/bsw/tms-720639-001.jpg?v=7", alt: "GMTS Deluxe 3-Step Closed-End Staircase" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Steps", value: "(3) 6\" high, 30\" wide" },
          { label: "Platform", value: "30\"W × 24\"D × 18\"H" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "High-quality oak plywood" },
          { label: "Handrails / uprights", value: "Solid oak" },
          { label: "Finish", value: "Durable clear polyurethane" },
          { label: "Treads", value: "Anti-slip on all steps and platform" },
        ],
      },
      {
        title: "Capacity",
        rows: [
          { label: "Weight capacity", value: "350 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/balance-stability/tru-deluxe-3-step-closed-end-staircase/",
    seo: {
      title: "GMTS Deluxe 3-Step Closed-End Staircase | GM Therapy",
      description: "Hand-crafted oak 3-step closed-end training staircase with enclosed handrails, anti-slip treads, 30\"W × 24\"D × 18\"H platform, and 350 lb capacity. Made in the USA.",
    },
  },
  "331": {
    productId: "331",
    slug: "gmts-multi-purpose-mobile-weight-rack-with-mirror",
    tagline: "Multi-purpose mobile weight rack with full-view mirror, front pegboard for therapy weights, dumbbell hooks, and storage shelves.",
    overview: [
      "Beautiful craftsmanship on this multi-purpose weight rack. The front features an almond-coated pegboard sized for nine therapy weights and ships with eleven pegboard safety hooks for therapy weight storage.",
      "Ten dumbbell hooks on the left side and ten on the right side hold dumbbells, while a full-view distortion-free glass mirror lets patients self-monitor form during exercise. Two large shelves provide additional storage for bands and supplies.",
      "Made in a durable black or natural oak finish and offered with four 3\" diameter easy-rolling casters for quick repositioning. Made in the USA. Weights and bands sold separately unless specified.",
    ],
    highlights: [
      "Beautiful craftsmanship on a multi-purpose mobile weight rack",
      "Almond-coated front pegboard sized for 9 therapy weights",
      "Includes (11) pegboard safety hooks for therapy weights",
      "(10) dumbbell hooks on left + (10) on right side",
      "Full-view distortion-free glass mirror",
      "Two large shelves for band/supply storage",
      "Available in black or natural oak finish",
      "(4) 3\" diameter easy-rolling casters",
      "Made in the USA",
      "Weights and bands sold separately (unless specified)",
    ],
    gallery: [
      { src: "/assets/products/bsw/tms-720589-001.jpg?v=7", alt: "GMTS Multi-Purpose Mobile Weight Rack with Mirror" },
    ],
    specGroups: [
      {
        title: "Storage Capacity",
        rows: [
          { label: "Front pegboard", value: "Almond-coated, sized for 9 therapy weights" },
          { label: "Pegboard hooks", value: "(11) safety hooks included" },
          { label: "Dumbbell hooks", value: "(10) left side + (10) right side" },
          { label: "Shelves", value: "(2) large shelves for bands/supplies" },
        ],
      },
      {
        title: "Mirror & Mobility",
        rows: [
          { label: "Mirror", value: "Full-view distortion-free glass" },
          { label: "Casters", value: "(4) 3\" diameter, easy-rolling" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Finish options", value: "Black or natural oak" },
          { label: "Origin", value: "Made in the USA" },
          { label: "Note", value: "Weights and bands sold separately unless specified" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/therapeutic-exercise/equipment/tru-multi-purpose-mobile-weight-rack-w-mirror/",
    seo: {
      title: "GMTS Multi-Purpose Mobile Weight Rack with Mirror | GM Therapy",
      description: "Mobile multi-purpose weight rack with full-view glass mirror, almond pegboard for 9 therapy weights, 20 dumbbell hooks, two storage shelves, and 3\" casters. Made in the USA.",
    },
  },
  "334": {
    productId: "334",
    slug: "gmts-deluxe-4-step-closed-end-staircase",
    tagline: "Hand-crafted oak plywood 4-step closed-end training staircase with solid oak handrails, anti-slip treads, and 350 lb capacity.",
    overview: [
      "The GMTS Deluxe 4-Step Closed-End Staircase is hand crafted with high quality oak plywood and includes solid oak handrails and uprights. All wood surfaces are finished with durable clear polyurethane for long-lasting protection in busy clinical environments.",
      "Handrails are ergonomically designed for a comfortable grip and ease of use, and fully enclose the platform to provide secure support during stair training. Four 6\" high steps and a 30\"W × 24\"D × 24\"H platform deliver a greater height challenge for mid-to-late stage rehab.",
      "Anti-slip treads are standard on all steps and the platform to ensure safety during therapy sessions. Supports up to 350 lbs and is made in the USA.",
    ],
    highlights: [
      "Hand-crafted oak plywood with solid oak handrails and uprights",
      "Durable clear polyurethane finish on all wood surfaces",
      "Ergonomic handrails fully enclose the platform",
      "(4) 6\" high steps, 30\" wide",
      "Platform: 30\"W × 24\"D × 24\"H",
      "Anti-slip treads on all steps and platform",
      "350 lb weight capacity",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/bsw/tms-720870-001.jpg?v=7", alt: "GMTS Deluxe 4-Step Closed-End Staircase" },
    ],
    specGroups: [
      {
        title: "Dimensions",
        rows: [
          { label: "Steps", value: "(4) 6\" high, 30\" wide" },
          { label: "Platform", value: "30\"W × 24\"D × 24\"H" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Frame", value: "High-quality oak plywood" },
          { label: "Handrails / uprights", value: "Solid oak" },
          { label: "Finish", value: "Durable clear polyurethane" },
          { label: "Treads", value: "Anti-slip on all steps and platform" },
        ],
      },
      {
        title: "Capacity",
        rows: [
          { label: "Weight capacity", value: "350 lbs" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/clinic-products/balance-stability/tru-deluxe-4-step-closed-end-staircase/",
    seo: {
      title: "GMTS Deluxe 4-Step Closed-End Staircase | GM Therapy",
      description: "Hand-crafted oak 4-step closed-end training staircase with enclosed handrails, anti-slip treads, 30\"W × 24\"D × 24\"H platform, and 350 lb capacity. Made in the USA.",
    },
  },
  "339": {
    productId: "339",
    slug: "gmts-deluxe-hi-low-butcher-block-work-table",
    tagline: "Hi-low butcher block work / hand therapy table with 36\" × 60\" solid hardwood top, 27\"–38\" height range, and electric or manual crank options.",
    overview: [
      "The GMTS Deluxe Hi-Low Butcher Block Work Table is a great solution for work and hand therapy. The top is hand-crafted from quality 1.5\" solid hardwood and finished with durable clear polyurethane for a smooth, long-lasting work surface.",
      "Offered in two hi-low options — electric or manual crank — so clinics can match their workflow and budget. The 36\" × 60\" top adjusts in height from 27\" up to 38\", supporting both seated and standing therapy and functional task training.",
      "Made in the USA.",
    ],
    highlights: [
      "Great solution for work and hand therapy",
      "Two hi-low options: electric or manual crank",
      "Top hand-crafted from 1.5\" solid hardwood",
      "Durable clear polyurethane finish",
      "Top dimensions: 36\" × 60\"",
      "Height adjusts from 27\" to 38\"",
      "Supports seated and standing work",
      "Made in the USA",
    ],
    gallery: [
      { src: "/assets/products/bsw/tms-730400-002.png", alt: "GMTS Deluxe Hi-Low Butcher Block Work Table" },
    ],
    specGroups: [
      {
        title: "Top & Dimensions",
        rows: [
          { label: "Top material", value: "1.5\" solid hardwood, butcher block" },
          { label: "Top finish", value: "Durable clear polyurethane" },
          { label: "Top size", value: "36\" × 60\"" },
          { label: "Height range", value: "27\"–38\"" },
        ],
      },
      {
        title: "Hi-Low Options",
        rows: [
          { label: "Electric", value: "Powered hi-low height adjustment" },
          { label: "Manual", value: "Hand-crank hi-low height adjustment" },
        ],
      },
      {
        title: "Use & Origin",
        rows: [
          { label: "Best for", value: "Work hardening, hand therapy, functional task training" },
          { label: "Origin", value: "Made in the USA" },
        ],
      },
    ],
    sourceUrl: "https://www.tru-medical.com/shop/tables-traction/work-tables/tru-deluxe-hi-low-butcher-block-work-table/",
    seo: {
      title: "GMTS Deluxe Hi-Low Butcher Block Work Table | GM Therapy",
      description: "36\" × 60\" hi-low butcher block work and hand therapy table with 1.5\" solid hardwood top, 27\"–38\" height range, and electric or manual crank options. Made in the USA.",
    },
  },
  "19": {
    productId: "19",
    slug: "gmts-pneumatic-stool",
    tagline: "Pneumatic rolling stool with sturdy five-star base, smooth casters, and effortless lever height adjustment from 18\" to 23.5\".",
    overview: [
      "The GMTS Pneumatic Rolling Stool is a perfect complement to any office or clinic environment, featuring a sturdy five-star base with five smooth-rolling casters for easy repositioning during patient care.",
      "The seat is upholstered in heavy gauge flame retardant vinyl for durability and easy cleaning, and rides on a high-density, impact-resistant fiberglass base. An effortless height-adjustment lever lets the clinician dial in seat height from 18\" up to 23.5\".",
      "Supports up to 300 lbs. Note: user must weigh at least 90 lbs to actuate the pneumatic height adjustment.",
    ],
    highlights: [
      "Soft, durable heavy-gauge flame retardant vinyl seat",
      "High-density, impact-resistant fiberglass five-star base",
      "Five smooth-rolling casters",
      "Effortless pneumatic height-adjustment lever",
      "Adjustable seat height: 18\" – 23.5\"",
      "Weight capacity: 300 lbs",
      "Color: Black",
    ],
    gallery: [
      { src: "/assets/products/gmts-stools.png", alt: "GMTS Pneumatic Stool" },
    ],
    specGroups: [
      {
        title: "Seat & Base",
        rows: [
          { label: "Seat upholstery", value: "Heavy-gauge flame retardant vinyl" },
          { label: "Base", value: "High-density, impact-resistant fiberglass, five-star" },
          { label: "Casters", value: "(5) smooth-rolling" },
          { label: "Color", value: "Black" },
        ],
      },
      {
        title: "Adjustment & Capacity",
        rows: [
          { label: "Height adjustment", value: "Pneumatic lever" },
          { label: "Seat height range", value: "18\" – 23.5\"" },
          { label: "Weight capacity", value: "300 lbs" },
          { label: "Min. user weight", value: "90 lbs (to actuate height adjustment)" },
        ],
      },
    ],
    sourceUrl: "https://www.richmarweb.com/accessories/pneumatic-stool",
    seo: {
      title: "GMTS Pneumatic Stool | GM Therapy",
      description: "Pneumatic rolling clinic stool with five-star fiberglass base, 5 casters, flame-retardant vinyl seat, 18\"–23.5\" height range, and 300 lb capacity.",
    },
  },

  // Armedica AM-TM700 — product id "9"
  "9": {
    productId: "9",
    slug: "armedica-am-tm700-power-parallel-bars",
    tagline:
      "10' electric platform-mount parallel bars with microprocessor-controlled height, digital display, and four memory presets.",
    overview: [
      "The AM-TM700 is Armedica's flagship power parallel bar — a 10' two-piece platform-mount system designed for high-volume gait, balance, and lower-extremity rehab. A microprocessor control unit drives all four columns synchronously so the bars rise and fall perfectly level under load.",
      "A user-friendly digital display shows the exact bar height, and four memory buttons let therapists save and recall preferred settings for repeat patients. Built-in height monitoring shuts the system off safely in the event of a fall or obstruction. ETL approved with stainless steel hand rails and a slip-resistant 48\" platform.",
    ],
    highlights: [
      "500 lb load capacity",
      "Bars adjust 20\"–34\"W and 26\"–54\"H",
      "10' length, 48\"W two-piece slip-resistant platform",
      "Microprocessor sync across all four columns",
      "Digital height display + 4 memory presets",
      "Height monitoring with safe switch-off",
      "Stainless steel 1.5\" diameter hand rails",
      "ETL approved",
    ],
    gallery: [
      { src: "https://www.armedicamfg.com/hubfs/Images/Product%20Images/AMTM%20700%2010%20Parallel%20Bars-clipped.png", alt: "Armedica AM-TM700 10' Electric Platform Mount Parallel Bars" },
    ],
    specGroups: [
      {
        title: "Capacity & Dimensions",
        rows: [
          { label: "Load capacity", value: "500 lbs" },
          { label: "Bar width range", value: '20" – 34"' },
          { label: "Bar height range", value: '26" – 54"' },
          { label: "Overall length", value: "120\" (10')" },
          { label: "Platform", value: '48"W, two-piece, slip-resistant' },
          { label: "Hand rails", value: '1.5" diameter stainless steel' },
        ],
      },
      {
        title: "Controls & Safety",
        rows: [
          { label: "Drive", value: "Electric, four-column microprocessor synchronized" },
          { label: "Display", value: "Digital readout of exact bar height" },
          { label: "Memory presets", value: "4 user-programmable" },
          { label: "Safety", value: "Height monitoring with automatic switch-off" },
          { label: "Certification", value: "ETL approved" },
        ],
      },
      {
        title: "Available Accessories",
        rows: [
          { label: "AM-714", value: 'Abduction board — 0.75"W x 94"L x 5"H' },
          { label: "AM-715", value: 'Balance beam — 5"W x 80"L x 2.5"H' },
          { label: "AM-716", value: 'Foot placement ladder — 24"W x 84"L x 4"H' },
        ],
      },
    ],
    specSheetUrl: "https://www.armedicamfg.com/hubfs/Armedica%20Data%20Sheets/Electric%20Platform%20Mount.pdf",
    sourceUrl: "https://www.armedicamfg.com/products/_rehab-equipment/am-700-power-platform-parallel-bars",
    seo: {
      title: "Armedica AM-TM700 Power Parallel Bars (10') | GM Therapy",
      description: "Electric platform-mount parallel bars with microprocessor sync, digital height display, 4 memory presets, 500 lb capacity, ETL approved.",
    },
  },

  // Armedica AM-BA350 Bar Activated Treatment Table — product id "154"
  "154": {
    productId: "154",
    slug: "armedica-am-ba350-bar-activated-treatment-table",
    tagline:
      "3-section bar-activated hi-lo treatment table with hands-free dual foot bar control and 500 lb capacity.",
    overview: [
      "The AM-BA350 is a 3-section hi-lo treatment table built around Armedica's bar-activated steel base. Dual foot bars run along the perimeter so therapists can raise or lower the table from any side without taking their hands off the patient.",
      "The top is wrapped in 34 oz heavy-duty vinyl with Permablok 3® bacterial protection over 1.5\" high-density foam. Generous articulation — head section +45° to -90°, lower extremity 0° to 78°, armrests +45° to -90° — supports almost any clinical position. Four total-locking casters and an ADA-compliant low height round out the package.",
    ],
    highlights: [
      "500 lb load capacity",
      '27"W x 76"L, 18"–37"H 3-section top',
      "Dual foot bar height control — hands-free from any side",
      "Head section +45° to -90°, lower extremity 0–78°",
      "Armrests +45° to -90°",
      '34 oz heavy-duty vinyl with Permablok 3® bacterial protection',
      '1.5" high-density foam, rounded corners',
      "(4) total locking casters · ADA compliant",
      "White powder-coat steel base (custom colors available)",
    ],
    gallery: [
      { src: "https://www.armedicamfg.com/hubfs/Images/Product%20Images/AM-BA350_650x650.png", alt: "Armedica AM-BA350 hi-lo treatment table — primary view" },
      { src: "https://www.armedicamfg.com/hubfs/Images/Product%20Images/AM-BA350-1-1.png", alt: "AM-BA350 angled view" },
    ],
    specGroups: [
      {
        title: "Top & Capacity",
        rows: [
          { label: "Load capacity", value: "500 lbs" },
          { label: "Top dimensions", value: '27"W x 76"L' },
          { label: "Height range", value: '18" – 37" (ADA compliant)' },
          { label: "Sections", value: "3-section" },
          { label: "Foam", value: '1.5" high-density' },
          { label: "Upholstery", value: "34 oz heavy-duty vinyl with Permablok 3® bacterial protection" },
        ],
      },
      {
        title: "Articulation",
        rows: [
          { label: "Head section", value: "+45° to -90°" },
          { label: "Lower extremity", value: "0° to 78°" },
          { label: "Armrests", value: "+45° to -90°" },
        ],
      },
      {
        title: "Base",
        rows: [
          { label: "Control", value: "Dual foot bar — hands-free from any side" },
          { label: "Frame", value: "Welded steel, white powder coat" },
          { label: "Casters", value: "(4) total locking" },
          { label: "Custom base colors", value: "Black · Metallic Silver · Steel Gray (optional)" },
        ],
      },
    ],
    specSheetUrl: "https://www.armedicamfg.com/hubfs/Armedica%20Data%20Sheets/AM-BA%2027.pdf",
    sourceUrl: "https://www.armedicamfg.com/products/_treatment-tables/am-ba-350-treatment-table",
    seo: {
      title: "Armedica AM-BA350 Bar-Activated Hi-Lo Treatment Table | GM Therapy",
      description: "3-section bar-activated hi-lo table with dual foot-bar control, 500 lb capacity, full articulation, Permablok 3® vinyl, ADA compliant.",
    },
  },

  // Armedica AM-400 Four-Section Hi-Lo Traction Table — product id "200"
  "200": {
    productId: "200",
    slug: "armedica-am-400-traction-table",
    tagline:
      "4-section bar-activated hi-lo traction table with full positional articulation and 500 lb capacity.",
    overview: [
      "The AM-400 is a four-section hi-lo treatment and traction table designed to give clinicians complete positional control. Each section moves independently so the table can be configured for cervical traction, lumbar traction, seated upright work, or flat treatment without leaving the patient.",
      "Like the rest of the Armedica BA line, height is controlled by dual foot bars — therapists can raise or lower from any side, hands-free. The 99\" overall length accommodates traction setups, and the 34 oz Permablok 3® vinyl over 1.5\" high-density foam holds up under heavy clinical use.",
    ],
    highlights: [
      "500 lb load capacity",
      '27"W x 76"L top, 99" overall length',
      'Height range 18" – 37" via dual foot bars',
      "4-section top — full independent articulation",
      "Head section +45° to -90°",
      "Lower extremity 0° to 80°",
      '34 oz heavy-duty vinyl with Permablok 3® bacterial protection',
      '1.5" high-density foam, rounded corners',
      "Compatible with traction units (sold separately)",
    ],
    gallery: [
      { src: "https://www.armedicamfg.com/hubfs/Images/Product%20Images/AM-400.png", alt: "Armedica AM-400 4-section hi-lo traction table" },
      { src: "https://www.armedicamfg.com/hubfs/Images/Product%20Images/AM-BA400.png", alt: "AM-BA400 alternate view" },
      { src: "https://www.armedicamfg.com/hubfs/Product%20Images/TRACTION-4_600.png", alt: "Traction-ready 4-section configuration" },
    ],
    specGroups: [
      {
        title: "Top & Capacity",
        rows: [
          { label: "Load capacity", value: "500 lbs" },
          { label: "Top dimensions", value: '27"W x 76"L' },
          { label: "Overall length", value: '99"' },
          { label: "Height range", value: '18" – 37"' },
          { label: "Sections", value: "4-section" },
          { label: "Foam", value: '1.5" high-density' },
          { label: "Upholstery", value: "34 oz heavy-duty vinyl with Permablok 3® bacterial protection" },
        ],
      },
      {
        title: "Articulation",
        rows: [
          { label: "Head section", value: "+45° to -90°" },
          { label: "Lower extremity", value: "0° to 80°" },
        ],
      },
      {
        title: "Base",
        rows: [
          { label: "Control", value: "Dual foot bar — hands-free from any side" },
          { label: "Frame", value: "Welded steel, white powder coat" },
          { label: "Optional casters", value: "AM-T1024 — base with (4) total-lock swivel casters" },
        ],
      },
    ],
    specSheetUrl: "https://www.armedicamfg.com/hubfs/2023%20Armedica%20Data%20Sheets/Traction%20Tables_I08.15.23.pdf",
    sourceUrl: "https://www.armedicamfg.com/products/_traction-tables/am-ba-400-treatment-table",
    seo: {
      title: "Armedica AM-400 Four-Section Hi-Lo Traction Table | GM Therapy",
      description: "4-section bar-activated hi-lo traction table with full articulation, 500 lb capacity, 99\" overall length, Permablok 3® vinyl.",
    },
  },

  // Armedica AM-BA134 Bariatric Bar-Activated Treatment Table — product id "201"
  "201": {
    productId: "201",
    slug: "armedica-am-ba134-bariatric-treatment-table",
    tagline:
      '34" extra-wide bariatric hi-lo treatment table with bar-activated foot control and 500 lb capacity.',
    overview: [
      "The AM-BA134 is Armedica's wide-bariatric hi-lo treatment table — a single-section top measuring 34\"W x 76\"L on the same proven bar-activated steel base used across the BA line. The extra-wide top gives larger patients a stable, comfortable surface; the dual foot bars let the therapist control table height hands-free from any side.",
      "Built with 34 oz heavy-duty vinyl over 1.5\" high-density foam, welded steel frame, and four total-locking casters. ADA-compliant low height makes patient transfers straightforward.",
    ],
    highlights: [
      "500 lb load capacity",
      '34"W x 76"L extra-wide single-section top',
      'Height range 18" – 37" (ADA compliant)',
      "Bar-activated dual foot bar control — hands-free",
      '34 oz heavy-duty vinyl with Permablok 3® bacterial protection',
      '1.5" high-density foam, rounded corners',
      "(4) total locking casters",
      "White powder-coat steel base (custom colors available)",
    ],
    gallery: [
      { src: "/assets/products/bsw/am-ba334.png", alt: "Armedica AM-BA134 bariatric hi-lo treatment table" },
    ],
    specGroups: [
      {
        title: "Top & Capacity",
        rows: [
          { label: "Load capacity", value: "500 lbs" },
          { label: "Top dimensions", value: '34"W x 76"L' },
          { label: "Height range", value: '18" – 37" (ADA compliant)' },
          { label: "Sections", value: "1-section" },
          { label: "Foam", value: '1.5" high-density' },
          { label: "Upholstery", value: "34 oz heavy-duty vinyl with Permablok 3® bacterial protection" },
        ],
      },
      {
        title: "Base",
        rows: [
          { label: "Control", value: "Bar-activated dual foot bar — hands-free from any side" },
          { label: "Frame", value: "Welded steel, white powder coat" },
          { label: "Casters", value: "(4) total locking" },
          { label: "Custom base colors", value: "Black · Metallic Silver · Steel Gray (optional)" },
        ],
      },
      {
        title: "Available Options",
        rows: [
          { label: "AM-18", value: "Face cutout" },
          { label: "AM-17", value: "Face plug (requires AM-18)" },
          { label: "AM-91", value: 'Add 1" extra-soft foam' },
          { label: "19859", value: "Add-on belt & brackets" },
        ],
      },
    ],
    specSheetUrl: "https://www.armedicamfg.com/hubfs/Armedica%20Data%20Sheets/AM-BA%2034.pdf",
    sourceUrl: "https://www.armedicamfg.com/products/_treatment-tables/am-ba134-bar-activated-bariatric-treatment-table",
    seo: {
      title: 'Armedica AM-BA134 Bariatric 34" Hi-Lo Treatment Table | GM Therapy',
      description: '34" wide bariatric bar-activated hi-lo treatment table with hands-free foot control, 500 lb capacity, Permablok 3® vinyl, ADA compliant.',
    },
  },

  // Armedica AMTM-660 6' x 8' Electric Hi-Lo Mat Platform — product id "257"
  "257": {
    productId: "257",
    slug: "armedica-amtm-660-electric-mat-platform",
    tagline:
      "6' x 8' electric hi-lo mat platform on a welded steel frame with 1,000 lb capacity for neuro, pediatric, and high-volume rehab.",
    overview: [
      "The AMTM-660 is Armedica's 6' x 8' electric hi-lo mat platform — a workhorse for neuro rehab, pediatric therapy, and any setting where you need a generous, low-transfer treatment surface that rises to a comfortable working height for the therapist.",
      "Welded steel frame, 2\" high-density foam, and 34 oz Permablok 3® vinyl give the platform the durability to handle continuous clinical use. Standard hand control raises and lowers the deck across a 20\"–30\" range; foot switches and dual controls are available as options. Side bumpers (sold separately) protect both patient and walls.",
    ],
    highlights: [
      "1,000 lb load capacity",
      '72"W x 96"L (6\' x 8\') platform',
      'Electric height elevation 20" – 30"',
      "Welded steel frame",
      '34 oz heavy-duty vinyl with Permablok 3® bacterial protection',
      '2" high-density foam, rounded corners',
      "Hand control standard; foot switch & dual controls optional",
      "Side bumpers available (AMSBO-068)",
    ],
    gallery: [
      { src: "https://www.armedicamfg.com/hubfs/Images/Product%20Images/AM-660_550x450.png", alt: "Armedica AMTM-660 6' x 8' electric hi-lo mat platform" },
      
    ],
    specGroups: [
      {
        title: "Platform & Capacity",
        rows: [
          { label: "Load capacity", value: "1,000 lbs" },
          { label: "Dimensions", value: '72"W x 96"L (6\' x 8\')' },
          { label: "Height range", value: '20" – 30"' },
          { label: "Frame", value: "Welded steel" },
          { label: "Foam", value: '2" high-density' },
          { label: "Upholstery", value: "34 oz heavy-duty vinyl with Permablok 3® bacterial protection" },
        ],
      },
      {
        title: "Controls",
        rows: [
          { label: "Standard", value: "Single mounted hand control" },
          { label: "AMTM-03611-FS", value: "Substitute foot switch for hand control" },
          { label: "AMTM-03611-FS-2", value: "Add a second foot switch (not with hand control)" },
          { label: "AMTM-03619-BMS-2", value: "Add a second hand control (not with foot switch)" },
        ],
      },
      {
        title: "Accessories",
        rows: [
          { label: "AMSBO-068", value: "Side bumpers for 6' x 8' mat table" },
          { label: "AMSBO-057", value: "Side bumpers for 5' x 7' mat table" },
          { label: "AMSBO-047", value: "Side bumpers for 4' x 7' mat table" },
        ],
      },
    ],
    specSheetUrl: "https://www.armedicamfg.com/hubfs/Armedica%20Data%20Sheets/Electric_Mat_03.12.24.pdf",
    sourceUrl: "https://www.armedicamfg.com/products/_treatment-tables/amtm-660-mat-table",
    seo: {
      title: "Armedica AMTM-660 6' x 8' Electric Hi-Lo Mat Platform | GM Therapy",
      description: "6' x 8' electric hi-lo mat platform with 1,000 lb capacity, 20\"–30\" height range, welded steel frame, Permablok 3® vinyl.",
    },
  },

  // ============================================================
  // TKO Strength — Batch 1 (IDs 82, 84, 283-300)
  // ============================================================

  // ID 82 — TKO Defiant Custom Bay Single Station (Stamina Package)
  "82": {
    productId: "82",
    slug: "tko-defiant-suspension-bay-stamina",
    tagline: "Free-standing modular suspension and storage bay — fully loaded Stamina package.",
    overview: [
      "TKO's Defiant Free-Standing Single Suspension Bay is a fully modular suspension and storage system that drops into any training facility without anchoring to a wall or floor. A 550 lb counterbalance and front outriggers keep the upright stable while users hit suspension trainers, heavy bags, or pull-up work.",
      "The Stamina package arrives loaded — medicine balls, slam balls, kettlebells, foam rollers, mats, stability ball, resistance cords, and strength bands are all included so a clinic or training space can deploy a full functional zone in one purchase.",
    ],
    highlights: [
      "550 lb counterbalance — fully free-standing, no wall mount required",
      "Front outriggers for additional stability",
      "Modular and expandable — add storage and suspension attachments anytime",
      "Includes 3-Way Swivel (×2) for suspension trainers and heavy bags",
      "Includes commercial medicine balls, tire slam balls, pro cast kettlebells, foam rollers, mats, stability ball, cords, and bands",
      "Compact 85\" x 44¾\" x 95½\" footprint",
      "Choose your color for the uprights",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-SUM-848withfoamrollersandballrack_1024x1024.jpg?v=1747188519", alt: "TKO Defiant Suspension Bay — Stamina package fully loaded" },
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-SUB-848withDB-A024Dip_StepAdjAttachmentMount_1024x1024.jpg?v=1747188520", alt: "TKO Defiant Bay with dip / step adjustable attachment" },
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-SUB-848closeupofDB-A020BallBandMatStorageSideMount_1024x1024.jpg?v=1747188520", alt: "Ball, band, and mat storage side-mount close-up" },
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-Med-48cluster_1024x1024.jpg?v=1774463754", alt: "Included commercial medicine balls" },
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-Slam-48_1024x1024.jpg?v=1774463754", alt: "Included tire slam balls" },
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-SUB-848K856PKBkettlebells_51898e78-d607-4658-b3c0-88a4b6c273d4_1024x1024.jpg?v=1774463754", alt: "Included pro cast kettlebells" },
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-SUB-848184FR-BKFoamRollers_71b6af96-025c-4beb-a3b0-9bd8adca45a5_1024x1024.jpg?v=1774463754", alt: "Included foam rollers" },
      { src: "https://www.tkostrength.com/cdn/shop/files/DB-MS-Pack_1024x1024.jpg?v=1747188520", alt: "Included mat / stability ball / cord / band pack" },
    ],
    specGroups: [
      {
        title: "Frame",
        rows: [
          { label: "Footprint", value: "85\" W x 44¾\" D x 95½\" H" },
          { label: "Counterbalance", value: "550 lbs" },
          { label: "Standard color", value: "Matte black (custom upright color available)" },
          { label: "SKU", value: "DB-SUB-8-STAM" },
        ],
      },
      {
        title: "Included Accessories",
        rows: [
          { label: "Adjustable racks", value: "1× ball rack, 3× tray rack" },
          { label: "Suspension hardware", value: "2× 3-Way Swivel" },
          { label: "Medicine balls", value: "DB-Med-48 — 6, 8, 10, 12 lb" },
          { label: "Slam balls", value: "DB-Slam-48 — 10, 15, 20, 25 lb tire slam balls" },
          { label: "Kettlebells", value: "DB-KB-Light — 4, 6, 8, 12, 16, 20 kg pro cast" },
          { label: "Foam rollers", value: "DB-FR-48 — 3× 36\" rollers" },
          { label: "Mat / cord / band pack", value: "3 mats, 65cm stability ball, 2 ea L/M/H/XH cords, XL/L/M/H bands + connector" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/STAMINA_Package_DB-SUB-8-STAM_604591e7-3deb-4f22-a433-197ec449f9cf.pdf",
    sourceUrl: "https://www.tkostrength.com/products/free-standing-single-suspension-bay-stamina-package",
    seo: {
      title: "TKO Defiant Free-Standing Suspension Bay — Stamina Package | GM Therapy",
      description: "Fully loaded TKO Defiant single suspension bay with 550 lb counterbalance, modular storage, kettlebells, slam balls, med balls, mats, cords, and bands.",
    },
  },

  // ID 84 — TKO 3-Tier Shelf Dumbbell Rack
  "84": {
    productId: "84",
    slug: "tko-3-tier-shelf-dumbbell-rack",
    tagline: "Heavy-gauge steel 3-tier rack — holds 10 pairs of hex dumbbells.",
    overview: [
      "TKO's 3-Tier Shelf Dumbbell Rack stores up to 10 pairs of hex dumbbells (5–50 lb) on heavy-gauge steel shelves. Compact oval tubing and a sleek profile make it a smart choice for clinics and home gyms where floor space is at a premium.",
      "Tiered shelves angle the dumbbells toward the user so loading and unloading stays quick and back-friendly. Rubber feet protect the floor.",
    ],
    highlights: [
      "Holds 10 pairs of TKO hex dumbbells (5–50 lb)",
      "Heavy-gauge steel shelves",
      "Modern oval tubing — sleek profile",
      "Easy load and unload from either side",
      "Rubber feet protect flooring",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/6235BTrayRackalone_1024x1024.jpg?v=1747188530", alt: "TKO 3-Tier Shelf Dumbbell Rack — primary view" },
      { src: "https://www.tkostrength.com/cdn/shop/files/6235-BTrayRackangled_1024x1024.jpg?v=1747188530", alt: "3-Tier rack — angled view" },
      { src: "https://www.tkostrength.com/cdn/shop/files/6235-BTrayRack_1024x1024.png?v=1747188530", alt: "3-Tier rack — front view" },
      { src: "https://www.tkostrength.com/cdn/shop/files/6235-BTrayRackloaded_1024x1024.jpg?v=1747188530", alt: "3-Tier rack loaded with hex dumbbells" },
    ],
    specGroups: [
      {
        title: "Rack",
        rows: [
          { label: "Assembled size", value: "41¾\" W x 21\" D x 31\" H" },
          { label: "Weight", value: "102 lbs" },
          { label: "Capacity", value: "10 pairs of TKO hex dumbbells, 5–50 lb" },
          { label: "Construction", value: "Heavy-gauge steel, oval tubing" },
          { label: "SKU", value: "6235-B" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/6235-B_3_Tier_Shelf_Rack.pdf",
    sourceUrl: "https://www.tkostrength.com/products/3-tier-shelf-dumbbell-rack",
    seo: {
      title: "TKO 3-Tier Shelf Dumbbell Rack | GM Therapy",
      description: "Heavy-gauge steel 3-tier dumbbell rack — holds 10 pairs of TKO hex dumbbells (5–50 lb) in a compact 42\" footprint.",
    },
  },

  // ID 283 — TKO 3-N-1 Foam Plyo Box
  "283": {
    productId: "283",
    slug: "tko-3n1-foam-plyo-box",
    tagline: "All-in-one 20\" × 24\" × 30\" foam plyo box — three training heights, soft landings.",
    overview: [
      "TKO's 3-N-1 Foam Plyo Box delivers three jump heights from a single dense-foam unit. Flip the box to access 20\", 24\", or 30\" — useful for accommodating multiple users in a clinical or athletic setting without dragging out three separate boxes.",
      "Dense foam construction provides stable landings while staying soft enough to forgive missed reps. Heavy 16 oz vinyl coating stands up to high-volume commercial use.",
    ],
    highlights: [
      "Three training heights in one box: 20\", 24\", 30\"",
      "Dense foam core — soft landings",
      "Durable 16 oz matted vinyl coating",
      "90 lb total weight — stable under load",
      "Ideal for athletic prep, conditioning, and rehab plyometrics",
      "⚠ Do not use on smooth flooring (wood, smooth concrete, tile)",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/products/262PLBS-1-1000_1024x1024.jpg?v=1747188809", alt: "TKO 3-N-1 Foam Plyo Box — 20\" orientation" },
      { src: "https://www.tkostrength.com/cdn/shop/products/262PLBS-2-1000_1024x1024.jpg?v=1747188809", alt: "TKO 3-N-1 Foam Plyo Box — 24\" orientation" },
      { src: "https://www.tkostrength.com/cdn/shop/products/262PLBS-3-1000_1024x1024.jpg?v=1747188809", alt: "TKO 3-N-1 Foam Plyo Box — 30\" orientation" },
      { src: "https://www.tkostrength.com/cdn/shop/files/262PLBSwithmodel_1024x1024.jpg?v=1747188809", alt: "TKO 3-N-1 Foam Plyo Box — in use" },
    ],
    specGroups: [
      {
        title: "Box",
        rows: [
          { label: "Heights", value: "20\" / 24\" / 30\" (single box, three orientations)" },
          { label: "Weight", value: "90 lbs" },
          { label: "Construction", value: "Dense foam core, 16 oz matted vinyl coating" },
          { label: "SKU", value: "262PLBS" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/262PLBS_ca929175-ab99-404b-b58f-65c9fafb043e.pdf",
    sourceUrl: "https://www.tkostrength.com/products/soft-plyo-box",
    seo: {
      title: "TKO 3-N-1 Foam Plyo Box (20\" / 24\" / 30\") | GM Therapy",
      description: "All-in-one foam plyo box with three jump heights (20\", 24\", 30\") in a single dense-foam unit. Soft landings, 16 oz vinyl coating.",
    },
  },

  // ID 284 — TKO Stackable Foam Plyo Boxes (3-pc set)
  "284": {
    productId: "284",
    slug: "tko-stackable-foam-plyo-boxes",
    tagline: "6\" / 12\" / 20\" stackable foam plyo boxes — 3-piece set with hook-and-loop fastening.",
    overview: [
      "Three foam plyo boxes (6\", 12\", and 20\") that stack and lock together to scale jump height as the user progresses. Heavy hook-and-loop fastening runs along two full edges so the stack stays put through aggressive use.",
      "Strong foam cores absorb impact for safer landings, and a heavy 18 oz matted vinyl coating handles the abuse of high-volume commercial training.",
    ],
    highlights: [
      "3-piece set: 6\", 12\", and 20\" boxes",
      "Stackable — combine for additional heights",
      "Hook-and-loop on two full edges keeps the stack locked together",
      "Strong, durable foam core for soft landings",
      "18 oz matted vinyl coating",
      "Built-in handles for easy transport",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/products/263PLBS-01-1000_1024x1024.jpg?v=1747188808", alt: "TKO Stackable Foam Plyo Boxes — full set" },
      { src: "https://www.tkostrength.com/cdn/shop/products/263PLBS-03-1000_1024x1024.jpg?v=1747188808", alt: "Stackable plyo boxes — stacked configuration" },
      { src: "https://www.tkostrength.com/cdn/shop/products/263PLBS-02-1000_1024x1024.jpg?v=1747188808", alt: "Stackable plyo boxes — individual boxes" },
      { src: "https://www.tkostrength.com/cdn/shop/products/263PLBS-04-1000_1024x1024.jpg?v=1747188808", alt: "Stackable plyo boxes — hook and loop edge" },
      { src: "https://www.tkostrength.com/cdn/shop/products/263PLBS-05-1000_1024x1024.jpg?v=1747188809", alt: "Stackable plyo boxes — handle detail" },
      { src: "https://www.tkostrength.com/cdn/shop/products/263PLBS-06-1000_1024x1024.jpg?v=1747188809", alt: "Stackable plyo boxes — top view" },
    ],
    specGroups: [
      {
        title: "Set",
        rows: [
          { label: "Sizes", value: "6\", 12\", 20\" (3-piece set)" },
          { label: "Construction", value: "Foam core, 18 oz matted vinyl coating" },
          { label: "Fastening", value: "Hook-and-loop on two full edges" },
          { label: "SKU", value: "263PLBS" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/TKO-_263PLBS_STACKABLE_FOAM_PLYO_BOXES.pdf?v=1660763497",
    sourceUrl: "https://www.tkostrength.com/products/stackable-plyo-boxes",
    seo: {
      title: "TKO Stackable Foam Plyo Boxes — 6\" / 12\" / 20\" Set | GM Therapy",
      description: "3-piece stackable foam plyo box set with hook-and-loop edges, 18 oz vinyl coating, and built-in handles. Soft landings for clinical and athletic plyo training.",
    },
  },

  // ID 285 — TKO Push / Pull Sled
  "285": {
    productId: "285",
    slug: "tko-push-pull-sled",
    tagline: "Heavy-gauge steel push/pull sled — full-body conditioning and speed work.",
    overview: [
      "The TKO Push / Pull Sled adds variety and intensity to any training program. Sled work is one of the most efficient ways to build conditioning, leg drive, and speed — and it scales easily from rehab tempo work to all-out sprints.",
      "An 11-gauge steel frame paired with a 7-gauge replaceable skid plate handles outdoor and turf use without complaint. Non-slip textured handles and a single welded eyelet make it equally comfortable to push, pull, or drag.",
    ],
    highlights: [
      "11-gauge steel frame, 7-gauge skid plate",
      "Replaceable floating skid plates",
      "Non-slip textured push handles",
      "Front pull eyelet for sled drags and harness work",
      "Loads standard Olympic plates",
      "5-year frame / 1-year parts warranty",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/products/278PSPushSled9_1024x1024.jpg?v=1747188581", alt: "TKO Push / Pull Sled — primary view" },
      { src: "https://www.tkostrength.com/cdn/shop/products/278PSPushSled4_1024x1024.jpg?v=1747188582", alt: "TKO sled — angled view" },
      { src: "https://www.tkostrength.com/cdn/shop/products/278PSPushSled6_1024x1024.jpg?v=1747188582", alt: "TKO sled — side profile" },
      { src: "https://www.tkostrength.com/cdn/shop/products/278PSPushSled7_1024x1024.jpg?v=1747188582", alt: "TKO sled — handle detail" },
      { src: "https://www.tkostrength.com/cdn/shop/products/278PSPushSled3_1024x1024.jpg?v=1747188582", alt: "TKO sled — skid plate detail" },
      { src: "https://www.tkostrength.com/cdn/shop/products/278PSPushSled_1024x1024.jpg?v=1747188582", alt: "TKO sled — front pull eyelet" },
      { src: "https://www.tkostrength.com/cdn/shop/products/278PSPushSled2_1024x1024.jpg?v=1747188582", alt: "TKO sled — top view" },
    ],
    specGroups: [
      {
        title: "Sled",
        rows: [
          { label: "Dimensions", value: "40\" L x 33\" W" },
          { label: "Weight", value: "75 lbs" },
          { label: "Frame", value: "11-gauge steel, matte black" },
          { label: "Skid plate", value: "7-gauge steel, replaceable" },
          { label: "Plate posts", value: "Olympic (2\")" },
          { label: "Warranty", value: "5-year frame · 1-year parts" },
          { label: "SKU", value: "278PS" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/278PS_Push_Pull_Sled.pdf",
    sourceUrl: "https://www.tkostrength.com/products/tko-push-pull-sled",
    seo: {
      title: "TKO Push / Pull Sled | GM Therapy",
      description: "Heavy-duty 11-gauge steel push/pull sled with 7-gauge replaceable skid plates, non-slip handles, and Olympic plate posts. 75 lb empty.",
    },
  },

  // IDs 286–287 — TKO Commercial Rubberized Medicine Balls (6 / 8 lb variants)
  ...(() => {
    const galleryShared: GalleryImage[] = [
      { src: "https://www.tkostrength.com/cdn/shop/products/509CMB-2_FS_1024x1024.jpg?v=1747188779", alt: "TKO Commercial Rubberized Medicine Ball — 2 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/509CMB-6_FS_1024x1024.jpg?v=1767886027", alt: "TKO Commercial Rubberized Medicine Ball — 6 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/509CMB-8_FS_1024x1024.jpg?v=1767886027", alt: "TKO Commercial Rubberized Medicine Ball — 8 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/509CMB-10_1000_1024x1024.jpg?v=1767886027", alt: "TKO Commercial Rubberized Medicine Ball — 10 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/509CMB-12_FS_1024x1024.jpg?v=1767886027", alt: "TKO Commercial Rubberized Medicine Ball — 12 lb" },
    ];
    const specGroupsShared: SpecGroup[] = [
      {
        title: "Construction",
        rows: [
          { label: "Material", value: "All rubber, latex free" },
          { label: "Surface", value: "Double-dimpled non-slip rubber" },
          { label: "Color", value: "Two-tone red & grey" },
          { label: "Use", value: "Tossing, catching, partner drills (not for slamming)" },
        ],
      },
    ];
    const make = (id: string, weight: string, sku: string): ProductDetail => ({
      productId: id,
      slug: `tko-commercial-medicine-ball-${weight.replace(/\s/g, "")}`,
      tagline: `${weight} commercial rubberized medicine ball with double-dimpled grip surface.`,
      overview: [
        `TKO's Commercial Rubberized Medicine Ball is a heavy-duty weighted ball built for tossing, catching, and partner drills. The double-dimpled rubber surface gives a confident grip even with sweaty hands.`,
        "Two-tone red and grey, all rubber construction, latex free. Note: medicine balls are not designed for slamming — use a slam ball for that.",
      ],
      highlights: [
        `${weight} weighted ball`,
        "Double-dimpled rubber surface for secure grip",
        "Two-tone red & grey",
        "All-rubber, latex-free, weather-resistant construction",
        "Built for high-volume commercial use",
        "Not intended for slamming — use TKO Tyre Slam Balls for slam work",
      ],
      gallery: galleryShared,
      specGroups: [
        ...specGroupsShared,
        {
          title: "This Variant",
          rows: [
            { label: "Weight", value: weight },
            { label: "SKU", value: sku },
          ],
        },
      ],
      specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/509cmb_a93b0f62-fbe7-43f7-a867-344dce5cc9eb.pdf",
      sourceUrl: "https://www.tkostrength.com/products/10-lb-rubberized-medicine-ball",
      seo: {
        title: `TKO ${weight} Commercial Rubberized Medicine Ball | GM Therapy`,
        description: `${weight} commercial medicine ball — double-dimpled grip, all rubber, latex free. Built for tossing and partner drills.`,
      },
    });
    return {
      "286": make("286", "6 lb", "509CMB-6"),
      "287": make("287", "8 lb", "509CMB-8"),
    };
  })(),

  // IDs 288–290 — TKO Tyre Slam Balls (15 / 20 / 25 lb variants)
  ...(() => {
    const galleryShared: GalleryImage[] = [
      { src: "https://www.tkostrength.com/cdn/shop/products/6_d5ab79d3-552f-440c-808e-73d9a0d99ade_1024x1024.jpg?v=1747188715", alt: "TKO Tyre Slam Ball — 6 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/15_cda21f54-32e7-4436-9cee-9f9ce5030c86_1024x1024.jpg?v=1747188716", alt: "TKO Tyre Slam Ball — 15 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/IMG_6886_1024x1024.jpg?v=1747188716", alt: "TKO Tyre Slam Ball — texture detail" },
      { src: "https://www.tkostrength.com/cdn/shop/products/25_46c6fd55-28e2-4a92-8eaa-3bca23e8bd39_1024x1024.jpg?v=1747188716", alt: "TKO Tyre Slam Ball — 25 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/30_fd9d505b-8520-43e0-af62-c71af0185c91_1024x1024.jpg?v=1747188716", alt: "TKO Tyre Slam Ball — 30 lb" },
    ];
    const specGroupsShared: SpecGroup[] = [
      {
        title: "Construction",
        rows: [
          { label: "Fill", value: "Sand-filled — dead-weight, no bounce" },
          { label: "Shell", value: "Tire-tread textured rubber for secure grip" },
          { label: "Use", value: "Power slams, partner drills, conditioning, core" },
          { label: "Available range", value: "6 / 8 / 10 / 12 / 15 / 20 / 25 / 30 / 40 / 50 lb" },
        ],
      },
    ];
    const make = (id: string, weight: string, sku: string): ProductDetail => ({
      productId: id,
      slug: `tko-tyre-slam-ball-${weight.replace(/\s/g, "")}`,
      tagline: `${weight} tire-textured slam ball — sand-filled, no bounce, built to abuse.`,
      overview: [
        `TKO's Tyre Slam Ball features a textured tire-tread surface for a secure grip even with sweaty hands. Sand-filled and dead-weight, these balls are stress-tested and battle-ready for repeat power slams.`,
        "Sold individually so you can build the exact range your facility needs across the full 6–50 lb line.",
      ],
      highlights: [
        `${weight} sand-filled slam ball`,
        "Tire-tread textured surface for secure grip",
        "Dead-weight, no-bounce design — ideal for power slams",
        "Tear-resistant rubber shell",
        "Built for high-volume commercial use",
      ],
      gallery: galleryShared,
      specGroups: [
        ...specGroupsShared,
        {
          title: "This Variant",
          rows: [
            { label: "Weight", value: weight },
            { label: "SKU", value: sku },
          ],
        },
      ],
      specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/509SBT.pdf",
      sourceUrl: "https://www.tkostrength.com/products/tyre-slam-ball",
      seo: {
        title: `TKO ${weight} Tyre Slam Ball | GM Therapy`,
        description: `${weight} sand-filled tyre slam ball with tire-tread grip surface. No-bounce dead-weight design built for power slams and conditioning.`,
      },
    });
    return {
      "288": make("288", "15 lb", "509SBT-15"),
      "289": make("289", "20 lb", "509SBT-20"),
      "290": make("290", "25 lb", "509SBT-25"),
    };
  })(),

  // IDs 291–294 — TKO Wall Balls (10 / 14 / 20 / 30 lb variants)
  ...(() => {
    const galleryShared: GalleryImage[] = [
      { src: "https://www.tkostrength.com/cdn/shop/products/4_6f715f04-7143-4940-b81d-a73a13b478ac_1024x1024.jpg?v=1747188615", alt: "TKO Wall Ball — primary view" },
      { src: "https://www.tkostrength.com/cdn/shop/products/5_6fbac98d-3f14-49ff-8d2f-a6b109df6482_1024x1024.jpg?v=1747188615", alt: "TKO Wall Ball — angled view" },
      { src: "https://www.tkostrength.com/cdn/shop/products/6_23cc9b7f-d051-455a-b095-1d7a4ab03a0f_1024x1024.jpg?v=1747188615", alt: "TKO Wall Ball — stitching detail" },
      { src: "https://www.tkostrength.com/cdn/shop/products/7_bbaa023b-eff6-440f-924d-e4fdfbd7b91a_1024x1024.jpg?v=1747188615", alt: "TKO Wall Ball — texture" },
      { src: "https://www.tkostrength.com/cdn/shop/products/9_6f478bed-0352-44d3-9f8f-37a5b04dc154_1024x1024.jpg?v=1747188615", alt: "TKO Wall Ball — group" },
      { src: "https://www.tkostrength.com/cdn/shop/products/2_98a2c838-c3f1-4ddf-9f27-088b59fb5b25_1024x1024.jpg?v=1747188615", alt: "TKO Wall Ball — alt view" },
    ];
    const specGroupsShared: SpecGroup[] = [
      {
        title: "Construction",
        rows: [
          { label: "Diameter", value: "14\"" },
          { label: "Shell", value: "Heavy-duty vinyl coating" },
          { label: "Color", value: "Black with grey laces" },
          { label: "Fill", value: "Durable cotton fill, heavy nylon stitching" },
          { label: "Available range", value: "4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 25 / 30 lb" },
        ],
      },
    ];
    const make = (id: string, weight: string, sku: string): ProductDetail => ({
      productId: id,
      slug: `tko-wall-ball-${weight.replace(/\s/g, "")}`,
      tagline: `${weight} 14\" vinyl-coated wall ball — soft enough to catch, durable enough to abuse.`,
      overview: [
        `TKO's Wall Ball is a 14\" heavy-duty vinyl-covered weighted ball for wall throws, squat-to-press, and partner work. The fill is soft and forgiving on the catch but holds shape over thousands of reps.`,
        "Black with grey laces. Heavy nylon stitching keeps the seam intact through high-volume commercial use.",
      ],
      highlights: [
        `${weight} wall ball, 14\" diameter`,
        "Heavy-duty vinyl coating",
        "Black with grey laces",
        "Durable cotton fill, heavy nylon stitching",
        "Forgiving on catch — built for wall throws and partner drills",
        "Built for high-volume commercial use",
      ],
      gallery: galleryShared,
      specGroups: [
        ...specGroupsShared,
        {
          title: "This Variant",
          rows: [
            { label: "Weight", value: weight },
            { label: "SKU", value: sku },
          ],
        },
      ],
      specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/TKO-509WB_WALL_BALL.pdf?v=1660765422",
      sourceUrl: "https://www.tkostrength.com/products/wall-ball",
      seo: {
        title: `TKO ${weight} Wall Ball — 14\" Vinyl-Covered | GM Therapy`,
        description: `${weight} TKO wall ball, 14\" diameter, heavy vinyl coating with cotton fill and nylon stitching. Built for wall throws and partner drills.`,
      },
    });
    return {
      "291": make("291", "10 lb", "509WB-10"),
      "292": make("292", "14 lb", "509WB-14"),
      "293": make("293", "20 lb", "509WB-20"),
      "294": make("294", "30 lb", "509WB-30"),
    };
  })(),

  // IDs 295–299 — TKO Rubber Bumper Plates (10 / 15 / 25 / 35 / 45 lb variants)
  ...(() => {
    const galleryShared: GalleryImage[] = [
      { src: "https://www.tkostrength.com/cdn/shop/files/802BP2group2_a8edf8ea-1b78-449d-8fea-e9c3112de301_1024x1024.jpg?v=1747188855", alt: "TKO Rubber Bumper Plates — full set" },
      { src: "https://www.tkostrength.com/cdn/shop/files/802BP2-10_1024x1024.jpg?v=1747188855", alt: "TKO Bumper Plate — 10 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/files/802BP2-15_1024x1024.jpg?v=1747188855", alt: "TKO Bumper Plate — 15 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/files/802BP2-25_1024x1024.jpg?v=1747188856", alt: "TKO Bumper Plate — 25 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/files/802BP2-35_1024x1024.jpg?v=1747188856", alt: "TKO Bumper Plate — 35 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/files/802BP2-45_1024x1024.jpg?v=1747188856", alt: "TKO Bumper Plate — 45 lb" },
    ];
    const specGroupsShared: SpecGroup[] = [
      {
        title: "Construction",
        rows: [
          { label: "Material", value: "Solid rubber with steel insert" },
          { label: "Diameter", value: "Standard Olympic — same diameter on all weights" },
          { label: "Center hole", value: "2\" Olympic" },
          { label: "Lettering", value: "White on black" },
          { label: "Use", value: "Snatches, cleans, jerks, cross training" },
          { label: "Sold", value: "Individually" },
        ],
      },
    ];
    const make = (id: string, weight: string, sku: string, warranty: string): ProductDetail => ({
      productId: id,
      slug: `tko-bumper-plate-${weight.replace(/\s/g, "")}`,
      tagline: `${weight} solid-rubber Olympic bumper plate — safe for dead drops.`,
      overview: [
        `TKO's Rubber Bumper Plates are solid rubber with a steel insert, built so weights can be dropped without damaging the floor. All plates share the same standard diameter, ideal for cross training, snatches, cleans, and jerks.`,
        "Plates sold individually with white lettering on black solid rubber.",
      ],
      highlights: [
        `${weight} solid-rubber bumper plate`,
        "White lettering on black",
        "Standard Olympic diameter (matches across all weights)",
        "Steel insert for precision fit",
        "Designed to be dropped without damaging floors",
        `Warranty: ${warranty}`,
      ],
      gallery: galleryShared,
      specGroups: [
        ...specGroupsShared,
        {
          title: "This Variant",
          rows: [
            { label: "Weight", value: weight },
            { label: "Warranty", value: warranty },
            { label: "SKU", value: sku },
          ],
        },
      ],
      specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/802BP2_Bumper_Plates_with_White_Lettering_df523883-e6cc-4f75-a507-16ad3e976951.pdf",
      sourceUrl: "https://www.tkostrength.com/products/tko-rubber-bumper-plates-802bp",
      seo: {
        title: `TKO ${weight} Rubber Bumper Plate | GM Therapy`,
        description: `${weight} solid-rubber Olympic bumper plate with steel insert. White lettering, standard diameter, designed for safe dead drops.`,
      },
    });
    return {
      "295": make("295", "10 lb", "802BP2-10", "6 months against breakage"),
      "296": make("296", "15 lb", "802BP2-15", "6 months against breakage"),
      "297": make("297", "25 lb", "802BP2-25", "2 years against breakage"),
      "298": make("298", "35 lb", "802BP2-35", "2 years against breakage"),
      "299": make("299", "45 lb", "802BP2-45", "2 years against breakage"),
    };
  })(),

  // ID 300 — TKO Olympic 10 lb Rubber Dual-Grip Plate (start of the 803OR family,
  // remaining variants 301–305 will be added in batch 2)
  "300": {
    productId: "300",
    slug: "tko-olympic-rubber-grip-plate-10lb",
    tagline: "10 lb Olympic rubber-encased grip plate with bi-lateral handles.",
    overview: [
      "TKO's Olympic Rubber Grip Plate is non-odor rubber-encased over a solid steel insert, built to deliver years of trouble-free use without cracking or fading. Bi-lateral grips make plate carries, loading, and farmers walks easier on the hands.",
      "Sold individually so you can spec the exact range your facility needs.",
    ],
    highlights: [
      "10 lb Olympic rubber-coated grip plate",
      "Bi-lateral grip design — two handles per plate",
      "Durable, non-odor rubber encasement",
      "Solid steel insert for precision Olympic fit",
      "Protects floors and equipment",
      "5-year full-commercial warranty",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/803OROlympicRubberPlatesStacked_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plates — stacked set" },
      { src: "https://www.tkostrength.com/cdn/shop/products/10plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 10 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/2.5_ed9cac88-4255-484e-9f45-1bb937860e1c_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 2.5 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/5plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 5 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/25plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 25 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/35plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 35 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/45lb_Plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 45 lb" },
    ],
    specGroups: [
      {
        title: "Construction",
        rows: [
          { label: "Material", value: "Steel insert with non-odor rubber encasement" },
          { label: "Center hole", value: "2\" Olympic" },
          { label: "Grip", value: "Bi-lateral handles" },
          { label: "Available range", value: "2.5 / 5 / 10 / 25 / 35 / 45 lb" },
          { label: "Warranty", value: "5-year full commercial" },
        ],
      },
      {
        title: "This Variant",
        rows: [
          { label: "Weight", value: "10 lb" },
          { label: "SKU", value: "803OR-10" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/803OR.pdf",
    sourceUrl: "https://www.tkostrength.com/products/rubber-grip-plate",
    seo: {
      title: "TKO 10 lb Olympic Rubber Grip Plate | GM Therapy",
      description: "10 lb Olympic rubber-encased grip plate with bi-lateral handles, steel insert, and 5-year commercial warranty.",
    },
  },

  // IDs 301–305 — TKO Olympic Rubber Grip Plate (2.5 / 25 / 35 / 45 / 5 lb variants)
  ...(() => {
    const galleryShared: GalleryImage[] = [
      { src: "https://www.tkostrength.com/cdn/shop/files/803OROlympicRubberPlatesStacked_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plates — stacked set" },
      { src: "https://www.tkostrength.com/cdn/shop/products/2.5_ed9cac88-4255-484e-9f45-1bb937860e1c_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 2.5 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/5plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 5 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/10plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 10 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/25plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 25 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/35plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 35 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/45lb_Plate_1024x1024.jpg?v=1747188672", alt: "TKO Olympic Rubber Grip Plate — 45 lb" },
    ];
    const specGroupsShared: SpecGroup[] = [
      {
        title: "Construction",
        rows: [
          { label: "Material", value: "Steel insert with non-odor rubber encasement" },
          { label: "Center hole", value: "2\" Olympic" },
          { label: "Grip", value: "Bi-lateral handles" },
          { label: "Available range", value: "2.5 / 5 / 10 / 25 / 35 / 45 lb" },
          { label: "Warranty", value: "5-year full commercial" },
        ],
      },
    ];
    const make = (id: string, weight: string, sku: string): ProductDetail => ({
      productId: id,
      slug: `tko-olympic-rubber-grip-plate-${weight.replace(/\s/g, "").replace(".", "-")}`,
      tagline: `${weight} Olympic rubber-encased grip plate with bi-lateral handles.`,
      overview: [
        "TKO's Olympic Rubber Grip Plate is non-odor rubber-encased over a solid steel insert, built to deliver years of trouble-free use without cracking or fading. Bi-lateral grips make plate carries, loading, and farmers walks easier on the hands.",
        "Sold individually so you can spec the exact range your facility needs.",
      ],
      highlights: [
        `${weight} Olympic rubber-coated grip plate`,
        "Bi-lateral grip design — two handles per plate",
        "Durable, non-odor rubber encasement",
        "Solid steel insert for precision Olympic fit",
        "Protects floors and equipment",
        "5-year full-commercial warranty",
      ],
      gallery: galleryShared,
      specGroups: [
        ...specGroupsShared,
        {
          title: "This Variant",
          rows: [
            { label: "Weight", value: weight },
            { label: "SKU", value: sku },
          ],
        },
      ],
      specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/803OR.pdf",
      sourceUrl: "https://www.tkostrength.com/products/rubber-grip-plate",
      seo: {
        title: `TKO ${weight} Olympic Rubber Grip Plate | GM Therapy`,
        description: `${weight} Olympic rubber-encased grip plate with bi-lateral handles, steel insert, and 5-year commercial warranty.`,
      },
    });
    return {
      "301": make("301", "2.5 lb", "803OR-2.5"),
      "302": make("302", "25 lb", "803OR-25"),
      "303": make("303", "35 lb", "803OR-35"),
      "304": make("304", "45 lb", "803OR-45"),
      "305": make("305", "5 lb", "803OR-5"),
    };
  })(),

  // IDs 306–313 — TKO Rubber Hex Dumbbell w/ Chrome Contoured Grip (15–50 lb variants)
  ...(() => {
    const galleryShared: GalleryImage[] = [
      { src: "https://www.tkostrength.com/cdn/shop/files/804RXContourHandleRubberHexDumbbellPair_1024x1024.jpg?v=1747188538", alt: "TKO Rubber Hex Dumbbell with chrome contour grip — pair" },
      { src: "https://www.tkostrength.com/cdn/shop/files/804RXContourHandleRubberHexDumbbellSingle_1024x1024.jpg?v=1747188538", alt: "TKO Rubber Hex Dumbbell — single" },
      { src: "https://www.tkostrength.com/cdn/shop/files/804RXContourHandleRubberHexDumbbellMulti_1024x1024.jpg?v=1747188538", alt: "TKO Rubber Hex Dumbbell — full set" },
    ];
    const specGroupsShared: SpecGroup[] = [
      {
        title: "Construction",
        rows: [
          { label: "Head", value: "Steel, friction-welded, rubber-encased hex" },
          { label: "Handle", value: "Chrome-plated, ergonomically contoured" },
          { label: "Anti-roll", value: "Hexagonal heads prevent rolling" },
          { label: "Available range", value: "3, 5–50 lb (5 lb increments), 8, 12 lb" },
          { label: "Sold", value: "Individually" },
        ],
      },
    ];
    const make = (id: string, weight: string, sku: string): ProductDetail => ({
      productId: id,
      slug: `tko-rubber-hex-dumbbell-${weight.replace(/\s/g, "")}`,
      tagline: `${weight} rubber hex dumbbell with chrome contoured grip.`,
      overview: [
        "TKO's standard rubber hex dumbbell is a quality, longevity-first design ideal for home, vertical, and commercial markets. Heavy-duty rubber-encased heads minimize noise and reduce wear on the dumbbell, the floor, and the equipment around it.",
        "The chrome-plated, ergonomically contoured handle delivers a firm-but-comfortable feel across grip styles. Sold individually so you can build the exact rack your facility needs.",
      ],
      highlights: [
        `${weight} rubber hex dumbbell`,
        "Chrome-plated, ergonomically contoured handle",
        "Hexagonal heads prevent rolling",
        "Rubber-encased heads protect floors and reduce noise",
        "Steel, friction-welded head construction",
        "Sold individually",
      ],
      gallery: galleryShared,
      specGroups: [
        ...specGroupsShared,
        {
          title: "This Variant",
          rows: [
            { label: "Weight", value: weight },
            { label: "SKU", value: sku },
          ],
        },
      ],
      sourceUrl: "https://www.tkostrength.com/products/copy-of-tri-grip-hex-dumbbell-1",
      seo: {
        title: `TKO ${weight} Rubber Hex Dumbbell — Contour Grip | GM Therapy`,
        description: `${weight} rubber hex dumbbell with chrome contour handle. Friction-welded steel head, rubber encasement. Built for commercial use.`,
      },
    });
    return {
      "306": make("306", "15 lb", "804RX-15"),
      "307": make("307", "20 lb", "804RX-20"),
      "308": make("308", "25 lb", "804RX-25"),
      "309": make("309", "30 lb", "804RX-30"),
      "310": make("310", "35 lb", "804RX-35"),
      "311": make("311", "40 lb", "804RX-40"),
      "312": make("312", "45 lb", "804RX-45"),
      "313": make("313", "50 lb", "804RX-50"),
    };
  })(),

  // ID 314 — TKO Olympic Power Bar (7' / 500 lb test)
  "314": {
    productId: "314",
    slug: "tko-olympic-power-bar-7ft",
    tagline: "7 ft Olympic Power Bar with hardened chrome finish, brass bushings, and 1,000 lb capacity.",
    overview: [
      "TKO's Olympic Power Bar is built to tight tolerances with a hardened, tempered 30 mm shaft and a hardened chrome finish for corrosion resistance. Every bar is individually tested for strength, integrity, and straightness.",
      "Oil-impregnated brass bushings deliver smooth sleeve rotation, while medium knurling provides secure grip without center knurl — ideal for general strength training and rehab settings.",
    ],
    highlights: [
      "7 ft (86\") Olympic bar, 20 kg (44 lb)",
      "30 mm hardened, tempered shaft",
      "152,000 psi tensile strength, 1,000 lb capacity",
      "Hardened chrome finish for corrosion resistance",
      "Oil-impregnated brass bushings",
      "Medium knurl, no center knurling",
      "Double snap-ring sleeve construction",
      "Every bar individually tested and measured",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/products/1_d38d1473-1954-42dc-a7f0-7c95da055bc9_1024x1024.jpg?v=1747188624", alt: "TKO Olympic Power Bar" },
    ],
    specGroups: [
      {
        title: "Bar",
        rows: [
          { label: "Length", value: "86\" (7 ft)" },
          { label: "Weight", value: "20 kg (44 lb)" },
          { label: "Shaft diameter", value: "30 mm, hardened & tempered" },
          { label: "Tensile strength", value: "152,000 psi" },
          { label: "Capacity", value: "1,000 lb" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Finish", value: "Hardened chrome (corrosion resistant)" },
          { label: "Sleeves", value: "Double snap-ring, oil-impregnated brass bushings" },
          { label: "Knurl", value: "Medium pattern, no center knurl" },
          { label: "SKU", value: "812OB-86 (catalog: 811OB-86)" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/8120B-86_fa6023a9-c4b3-42cb-b7cd-20a21ad4cf71.pdf",
    sourceUrl: "https://www.tkostrength.com/products/olympic-power-bar",
    seo: {
      title: "TKO 7' Olympic Power Bar — Chrome | GM Therapy",
      description: "7 ft Olympic Power Bar. 30 mm hardened shaft, 152k psi, 1,000 lb capacity, brass bushings, hardened chrome finish.",
    },
  },

  // ID 315 — TKO Lock Jaw Pro Collar (pair)
  "315": {
    productId: "315",
    slug: "tko-lock-jaw-collar",
    tagline: "Lock-Jaw Pro Olympic collars — sold as a pair, with 50% more holding power than the classic.",
    overview: [
      "The Lock-Jaw Pro Collar uses a larger lever and spring-loaded snap-latch to deliver 50% more clamping force than the classic version, while remaining quick to install and remove during workouts.",
      "Elastomer pads on a tough resin frame protect both the bar and the plates — making this the right collar choice for serious lifters, high-impact training, and any time bumper plates are on the bar.",
    ],
    highlights: [
      "Olympic lock-jaw collars — sold as a pair",
      "50% more holding power vs. classic Lock-Jaw",
      "Larger lever, spring-loaded snap-latch",
      "Elastomer pressure pads protect bar and plates",
      "Injection-molded resin frame",
      "Locking tab for secure fit",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/products/PR2_BLK1_1024x1024.jpg?v=1747188827", alt: "TKO Lock Jaw Pro Collar — front" },
      { src: "https://www.tkostrength.com/cdn/shop/products/PR2_BLK2_1024x1024.jpg?v=1747188827", alt: "TKO Lock Jaw Pro Collar — back" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Sold as", value: "Pair" },
          { label: "Bar fit", value: "2\" Olympic" },
          { label: "Frame", value: "Injection-molded resin" },
          { label: "Pads", value: "Elastomer (bar/plate protection)" },
          { label: "SKU", value: "812LBC" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/143SCO_812LBC.pdf",
    sourceUrl: "https://www.tkostrength.com/products/lock-jaw-collar",
    seo: {
      title: "TKO Lock Jaw Pro Olympic Collar (Pair) | GM Therapy",
      description: "Lock-Jaw Pro Olympic collars (pair). Spring-loaded snap-latch, 50% more holding power, elastomer bar/plate protection.",
    },
  },

  // ID 316 — TKO Middle Weight Power Bar (7')
  "316": {
    productId: "316",
    slug: "tko-middle-weight-power-bar",
    tagline: "7 ft Middle-Weight Power Bar — 28.5 mm shaft, 208,000 psi, 1,500 lb capacity.",
    overview: [
      "TKO's Middle-Weight Power Bar pairs a 28.5 mm (1.125\") hardened, tempered shaft with a 208,000 psi tensile rating and a 1,500 lb load capacity — ready for heavy training without the weight of a full power bar.",
      "Hardened chrome finish resists corrosion. Heavy-duty, high-spin, low-friction needle bearings (two per sleeve) keep the sleeves moving cleanly. Every bar is individually measured for straightness and tested for integrity.",
    ],
    highlights: [
      "87\" overall length, 20 kg (44 lb)",
      "28.5 mm (1.125\") hardened, tempered shaft",
      "208,000 psi tensile strength, 1,500 lb capacity",
      "Hardened chrome finish (corrosion resistant)",
      "High-spin needle bearings — 2 per sleeve",
      "Medium knurl, no center knurling",
      "Double snap-ring sleeve construction",
      "Every bar tested and measured for straightness",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/products/1_4d4432b6-b0a7-4cf0-b419-36c77d5e3573_1024x1024.jpg?v=1747188777", alt: "TKO Middle Weight Power Bar" },
      { src: "https://www.tkostrength.com/cdn/shop/products/4_db0e352e-5c3a-46ed-8e8e-8879bf17f011_1024x1024.jpg?v=1747188777", alt: "TKO Middle Weight Power Bar — knurl detail" },
      { src: "https://www.tkostrength.com/cdn/shop/products/2_8eb468af-febe-4fa1-87f5-9096e8ea8a45_1024x1024.jpg?v=1747188777", alt: "TKO Middle Weight Power Bar — sleeve" },
      { src: "https://www.tkostrength.com/cdn/shop/products/3_d63b0b61-d4bf-46e4-aec4-ffa9f66990dd_1024x1024.jpg?v=1747188777", alt: "TKO Middle Weight Power Bar — end view" },
    ],
    specGroups: [
      {
        title: "Bar",
        rows: [
          { label: "Length", value: "87\"" },
          { label: "Weight", value: "20 kg (44 lb)" },
          { label: "Shaft diameter", value: "28.5 mm (1.125\")" },
          { label: "Tensile strength", value: "208,000 psi" },
          { label: "Capacity", value: "1,500 lb" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Finish", value: "Hardened chrome" },
          { label: "Sleeves", value: "Double snap-ring, 2× needle bearings/sleeve" },
          { label: "Knurl", value: "Medium pattern, no center knurl" },
          { label: "SKU", value: "813OB-86MB" },
        ],
      },
    ],
    sourceUrl: "https://www.tkostrength.com/products/middle-weight-power-bar",
    seo: {
      title: "TKO Middle Weight Power Bar (7') | GM Therapy",
      description: "7 ft Middle-Weight Power Bar. 28.5 mm shaft, 208,000 psi, 1,500 lb capacity, needle-bearing sleeves, hardened chrome.",
    },
  },

  // ID 317 — TKO Commercial FID Dumbbell Bench (Black)
  "317": {
    productId: "317",
    slug: "tko-fid-bench-black",
    tagline: "Commercial flat / incline / decline bench with rear transport wheels.",
    overview: [
      "TKO's FID Bench is built for home, vertical, and commercial use, adjusting fluidly across flat, incline, and decline positions. The wider profile increases stability under load, and the new easy-handle design pairs with rear transport wheels for fast repositioning.",
      "Incline adjusts 0°–80°, decline to -10°, with a +10° seat incline for a true 90° set-up. Rubber feet protect floors, and commercial-grade upholstery stands up to high-volume use.",
    ],
    highlights: [
      "Flat / Incline / Decline adjustment",
      "Incline 0°–80°, decline -10°, seat +10° for 90°",
      "Wider profile for increased stability",
      "Easy-handle design with rear transport wheels",
      "Rubber feet to protect floors",
      "Commercial-grade upholstery, black frame",
      "Size: 53\"L × 24\"W × 18\"H",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/824FID-BKangled_1024x1024.png?v=1747188835", alt: "TKO FID Bench — angled" },
      { src: "https://www.tkostrength.com/cdn/shop/files/824FID-BK5_1024x1024.jpg?v=1747188835", alt: "TKO FID Bench — incline" },
      { src: "https://www.tkostrength.com/cdn/shop/files/824FID-BK7_1024x1024.jpg?v=1747188836", alt: "TKO FID Bench — decline" },
      { src: "https://www.tkostrength.com/cdn/shop/files/824FID-BK6_1024x1024.jpg?v=1747188836", alt: "TKO FID Bench — flat" },
      { src: "https://www.tkostrength.com/cdn/shop/files/824FID-BK1_1024x1024.jpg?v=1747188836", alt: "TKO FID Bench — handle/wheels" },
      { src: "https://www.tkostrength.com/cdn/shop/files/824-BKphotowithmodel_1024x1024.jpg?v=1747188836", alt: "TKO FID Bench — in use" },
    ],
    specGroups: [
      {
        title: "Adjustment",
        rows: [
          { label: "Incline", value: "0° – 80°" },
          { label: "Decline", value: "-10°" },
          { label: "Seat", value: "+10° (90° set-up)" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Dimensions", value: "53\"L × 24\"W × 18\"H" },
          { label: "Frame", value: "Black, commercial-grade" },
          { label: "Mobility", value: "Rear transport wheels, easy handle" },
          { label: "Feet", value: "Rubber, floor-protecting" },
          { label: "SKU", value: "824FID-BK" },
        ],
      },
    ],
    sourceUrl: "https://www.tkostrength.com/products/tko-fid-bench",
    seo: {
      title: "TKO Commercial FID Bench — Black | GM Therapy",
      description: "Commercial Flat/Incline/Decline bench. 0°–80° incline, -10° decline, transport wheels, 53\"×24\"×18\".",
    },
  },

  // ID 318 — TKO Stability Ball Rack
  "318": {
    productId: "318",
    slug: "tko-stability-ball-rack",
    tagline: "Stability ball storage rack — heavy-gauge tubing, holds three fitness balls.",
    overview: [
      "A safe and effective storage system for stability balls, manufactured from high-quality sturdy metal and tubing. Heavy-gauge construction provides stability, and the rack keeps balls organized and off the floor in clinical or group exercise rooms.",
      "Holds (3) fitness balls. Requires self-assembly. Balls sold separately.",
    ],
    highlights: [
      "Holds (3) fitness balls",
      "Heavy-gauge tubing for stability",
      "Keeps stability balls off the floor",
      "Saves floor space in clinical and group rooms",
      "Self-assembly required",
      "Black finish",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/853FBR3-BStabilityBallRackloaded_1024x1024.jpg?v=1747188490", alt: "TKO Stability Ball Rack — loaded" },
      { src: "https://www.tkostrength.com/cdn/shop/files/853FBR3-BFront_1024x1024.jpg?v=1747188490", alt: "TKO Stability Ball Rack — front" },
      { src: "https://www.tkostrength.com/cdn/shop/files/853FBR3-BBase_1024x1024.jpg?v=1747188490", alt: "TKO Stability Ball Rack — base" },
      { src: "https://www.tkostrength.com/cdn/shop/files/853FBR3-BRing_1024x1024.jpg?v=1747188490", alt: "TKO Stability Ball Rack — ring detail" },
      { src: "https://www.tkostrength.com/cdn/shop/files/853FBR3-BStabilityBallRack_1024x1024.jpg?v=1747188490", alt: "TKO Stability Ball Rack — empty" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Capacity", value: "3 fitness balls" },
          { label: "Material", value: "Heavy-gauge metal tubing" },
          { label: "Finish", value: "Black" },
          { label: "Assembly", value: "Self-assembly required" },
          { label: "Balls", value: "Sold separately" },
          { label: "SKU", value: "853FBR3-B" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/853FBR3-B_Stability_ball_rack_sell_sheet_db7d3b77-ee7b-4f87-bc85-2b0b38954e64.pdf",
    sourceUrl: "https://www.tkostrength.com/products/stability-ball-rack-1",
    seo: {
      title: "TKO Stability Ball Rack | GM Therapy",
      description: "Heavy-gauge stability ball storage rack. Holds 3 fitness balls, keeps them off the floor in clinical or group rooms.",
    },
  },

  // IDs 319–320 — TKO Vinyl-Dipped Kettlebells (15 / 20 lb variants)
  ...(() => {
    const galleryShared: GalleryImage[] = [
      { src: "https://www.tkostrength.com/cdn/shop/products/857KBV-all_1024x1024.jpg?v=1747188857", alt: "TKO Vinyl Coated Kettlebells — full color set" },
      { src: "https://www.tkostrength.com/cdn/shop/products/857KBV-15_1000_1024x1024.jpg?v=1747188857", alt: "TKO Vinyl Coated Kettlebell — 15 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/857KBV-20_1000_1024x1024.jpg?v=1747188857", alt: "TKO Vinyl Coated Kettlebell — 20 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/857KBV-25_1000_1024x1024.jpg?v=1747188857", alt: "TKO Vinyl Coated Kettlebell — 25 lb" },
      { src: "https://www.tkostrength.com/cdn/shop/products/857KBV-40_1000_1024x1024.jpg?v=1747188857", alt: "TKO Vinyl Coated Kettlebell — 40 lb" },
    ];
    const specGroupsShared: SpecGroup[] = [
      {
        title: "Construction",
        rows: [
          { label: "Material", value: "Cast iron with vinyl coating" },
          { label: "Handle", value: "Smooth, ergonomic grip" },
          { label: "Base", value: "Stable flat base" },
          { label: "Color coding", value: "By weight" },
          { label: "Use", value: "Commercial / high-volume" },
        ],
      },
    ];
    const make = (id: string, weight: string, sku: string): ProductDetail => ({
      productId: id,
      slug: `tko-vinyl-kettlebell-${weight.replace(/\s/g, "")}`,
      tagline: `${weight} vinyl-dipped kettlebell — color-coded, smooth grip handle.`,
      overview: [
        "TKO's Vinyl Coated Kettlebells are built to last and look great doing it. Color-coded by weight for fast identification in group settings, with a smooth ergonomic handle and stable flat base for clean swings, cleans, and goblet work.",
        "Vinyl coating protects floors and reduces noise. Sold individually.",
      ],
      highlights: [
        `${weight} vinyl-dipped kettlebell`,
        "Smooth, ergonomic grip handle",
        "Color-coded by weight",
        "Vinyl coating protects floors and reduces noise",
        "Stable flat base",
        "Built for high-volume use",
      ],
      gallery: galleryShared,
      specGroups: [
        ...specGroupsShared,
        {
          title: "This Variant",
          rows: [
            { label: "Weight", value: weight },
            { label: "SKU", value: sku },
          ],
        },
      ],
      sourceUrl: "https://www.tkostrength.com/products/tko-vinyl-coated-kettlebells",
      seo: {
        title: `TKO ${weight} Vinyl-Dipped Kettlebell | GM Therapy`,
        description: `${weight} vinyl-coated kettlebell. Color-coded, smooth handle, flat base. Built for commercial and group exercise use.`,
      },
    });
    return {
      "319": make("319", "15 lb", "857KBV-15"),
      "320": make("320", "20 lb", "857KBV-20"),
      "321": make("321", "25 lb", "857KBV-25"),
      "322": make("322", "30 lb", "857KBV-30"),
      "323": make("323", "35 lb", "857KBV-35"),
      "324": make("324", "40 lb", "857KBV-40"),
    };
  })(),

  // ID 325 — TKO AirRaid Air Bike
  "325": {
    productId: "325",
    slug: "tko-airraid-air-bike",
    tagline: "Commercial air bike with belt drive, programmable console, and dual-action arms.",
    overview: [
      "TKO's AirRaid Bike combines a durable commercial frame with a modern exterior and a smooth, maintenance-free belt drive system. Built for HIIT, conditioning, and rehab cardio without putting unnecessary stress on joints.",
      "The console runs HRC, THR, and 10/20, 20/10 and custom interval programs and reads out time, speed, distance, calories, watts, heart rate, and RPM. Four-way smart seat adjustment, foot pegs for upper-body-only work, and transport wheels round out the package.",
    ],
    highlights: [
      "Belt-drive air bike — smooth and maintenance-free",
      "Dual-action arms for full-body conditioning",
      "Console: time, speed, distance, calories, watts, HR, RPM",
      "Programs: HRC, THR, Interval 10/20 & 20/10, Custom",
      "Four-way smart seat adjustment",
      "Foot pegs for upper-body-only work",
      "Transport wheels for easy mobility",
      "Max user weight: 350 lb",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/8AB4_2026Rightangle_1024x1024.jpg?v=1776110894", alt: "TKO AirRaid Bike — right angled" },
      { src: "https://www.tkostrength.com/cdn/shop/files/8AB4_2026leftangle_1024x1024.jpg?v=1776110894", alt: "TKO AirRaid Bike — left angled" },
      { src: "https://www.tkostrength.com/cdn/shop/files/8AB4_2026Right_1024x1024.jpg?v=1776110894", alt: "TKO AirRaid Bike — right side" },
      { src: "https://www.tkostrength.com/cdn/shop/files/8AB4_2026Back_1024x1024.jpg?v=1776110894", alt: "TKO AirRaid Bike — back" },
      { src: "https://www.tkostrength.com/cdn/shop/files/8AB4_2026Front_1024x1024.jpg?v=1776110894", alt: "TKO AirRaid Bike — front" },
      { src: "https://www.tkostrength.com/cdn/shop/files/8AB4_2026SeatPost_1024x1024.jpg?v=1776110894", alt: "TKO AirRaid Bike — seat post detail" },
    ],
    specGroups: [
      {
        title: "Bike",
        rows: [
          { label: "Drive", value: "Belt drive (maintenance-free)" },
          { label: "Resistance", value: "Air / fan" },
          { label: "Arms", value: "Dual-action upper + lower body" },
          { label: "Seat", value: "Four-way smart adjustment" },
        ],
      },
      {
        title: "Console & Dimensions",
        rows: [
          { label: "Readouts", value: "Time, Speed, Distance, Cal, Watt, HR, RPM" },
          { label: "Programs", value: "HRC, THR, Interval 10/20, 20/10, Custom" },
          { label: "Dimensions", value: "48.75\" × 26\" × 54.6\"" },
          { label: "Weight", value: "141 lb" },
          { label: "Max user weight", value: "350 lb" },
          { label: "SKU", value: "8AB" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/8AB_AirRaid_Bike_4_2026.pdf",
    sourceUrl: "https://www.tkostrength.com/products/tko-air-bike",
    seo: {
      title: "TKO AirRaid Air Bike | GM Therapy",
      description: "Commercial air bike with belt drive, dual-action arms, programmable console (HRC/THR/intervals). 350 lb capacity.",
    },
  },

  // ID 326 — TKO Half Rack
  "326": {
    productId: "326",
    slug: "tko-half-rack",
    tagline: "Open-front half rack with 3×3 uprights, polyurethane J-cups and safety arms, and integrated storage.",
    overview: [
      "TKO's Half Rack is a commercial-grade open-front design built around 3×3 steel uprights with a laser-cut numbering system for fast, repeatable bar placement. Polyurethane J-cups and safety arms protect bar finishes during heavy training.",
      "Comes loaded with storage and accessory mounts so the rack stays productive between sets — 8 plate holders, 2 Olympic bar holders, and 3 lower band pegs are integrated.",
    ],
    highlights: [
      "Open-front half rack design",
      "3×3 steel uprights — built for commercial use",
      "Laser-cut numbering system on uprights",
      "Polyurethane J-cups & safety arms protect bars",
      "8 plate holders integrated",
      "2 Olympic bar holders",
      "3 lower band pegs",
      "Compatible with TKO storage and accessory add-ons",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/921HRHalfRackfront_1024x1024.jpg?v=1756301936", alt: "TKO Half Rack — front" },
      { src: "https://www.tkostrength.com/cdn/shop/files/921HRHalfRackangled_1024x1024.jpg?v=1756301936", alt: "TKO Half Rack — angled" },
      { src: "https://www.tkostrength.com/cdn/shop/files/921HRHalfRackwithattachments_1024x1024.jpg?v=1756305349", alt: "TKO Half Rack — with attachments" },
      { src: "https://www.tkostrength.com/cdn/shop/products/IMG_1495_1024x1024.jpg?v=1756305349", alt: "TKO Half Rack — detail 1" },
      { src: "https://www.tkostrength.com/cdn/shop/products/IMG_1530_1024x1024.jpg?v=1756305349", alt: "TKO Half Rack — detail 2" },
      { src: "https://www.tkostrength.com/cdn/shop/products/IMG_1542_1024x1024.jpg?v=1756305349", alt: "TKO Half Rack — detail 3" },
    ],
    specGroups: [
      {
        title: "Frame",
        rows: [
          { label: "Uprights", value: "3×3 steel" },
          { label: "Numbering", value: "Laser-cut, repeatable bar placement" },
          { label: "J-cups / safety arms", value: "Polyurethane (bar-protecting)" },
          { label: "Assembled size", value: "68\"L × 65\"W × 96\"H" },
          { label: "Weight", value: "475 lb" },
        ],
      },
      {
        title: "Integrated Storage",
        rows: [
          { label: "Plate holders", value: "8" },
          { label: "Olympic bar holders", value: "2" },
          { label: "Lower band pegs", value: "3" },
          { label: "Pull-up bar", value: "Included" },
          { label: "SKU", value: "921HR" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/921HR_BLACK_25.pdf",
    sourceUrl: "https://www.tkostrength.com/products/half-rack",
    seo: {
      title: "TKO Half Rack | GM Therapy",
      description: "Commercial half rack with 3×3 steel uprights, polyurethane J-cups & safety arms, 8 plate holders, 2 bar holders, 3 band pegs.",
    },
  },

  // ID 327 — TKO Customizable Storage Rack (with Dumbbell Storage attachment, 92ATT-DB)
  "327": {
    productId: "327",
    slug: "tko-customizable-storage-rack",
    tagline: "4-tier customizable storage rack — bumper plates, dumbbells, kettlebells, or med/wall balls.",
    overview: [
      "TKO's Customizable Storage Rack is a 4-tier system you spec to match your facility — bumper plate storage, dumbbell shelf, kettlebell shelf, or a med/wall ball rail. Heavy-gauge shelves are lined with TKO's styrene to protect the surface and the product stored on it.",
      "Built around 3\"×3\" square tubing with a bar holder integrated into each upright for additional storage. Rubber feet protect floors. The 92ATT-DB attachment configures this rack for dumbbell storage.",
    ],
    highlights: [
      "4-tier customizable storage system",
      "Configurable: bumper plates / dumbbells / kettlebells / med-wall balls",
      "92ATT-DB dumbbell-storage configuration",
      "3\"×3\" square steel tubing",
      "Bar holder on each upright (additional storage)",
      "Heavy-gauge shelves with styrene liner",
      "Rubber feet to protect floors",
      "Dimensions: 82\"L × 34\"W × 72\"H",
    ],
    gallery: [
      { src: "https://www.tkostrength.com/cdn/shop/files/92ATTCustomizableStorageSystemaloneangled_1024x1024.jpg?v=1747188596", alt: "TKO Customizable Storage Rack — angled" },
      { src: "https://www.tkostrength.com/cdn/shop/files/92ATTCustomizableStorageSystem_1024x1024.jpg?v=1747188596", alt: "TKO Customizable Storage Rack — front" },
      { src: "https://www.tkostrength.com/cdn/shop/products/1_3aef86d4-a29c-4a4f-b7be-0bd5e670845c_1024x1024.jpg?v=1747188596", alt: "TKO Customizable Storage Rack — detail 1" },
      { src: "https://www.tkostrength.com/cdn/shop/products/4_39e507f4-c3e2-4e2b-90a0-f2328443c0d2_1024x1024.jpg?v=1747188596", alt: "TKO Customizable Storage Rack — detail 2" },
      { src: "https://www.tkostrength.com/cdn/shop/products/10_2a09e05a-1608-4199-987d-ce61209768ca_1024x1024.jpg?v=1747188596", alt: "TKO Customizable Storage Rack — detail 3" },
      { src: "https://www.tkostrength.com/cdn/shop/products/8_6bc89885-e255-4016-a799-9848014bd5d5_1024x1024.jpg?v=1747188596", alt: "TKO Customizable Storage Rack — detail 4" },
    ],
    specGroups: [
      {
        title: "Frame",
        rows: [
          { label: "Tubing", value: "3\"×3\" square steel" },
          { label: "Tiers", value: "4" },
          { label: "Dimensions", value: "82\"L × 34\"W × 72\"H" },
          { label: "Feet", value: "Rubber, floor-protecting" },
        ],
      },
      {
        title: "Storage Options",
        rows: [
          { label: "Bumper plate storage", value: "92ATT-BP" },
          { label: "Dumbbell storage", value: "92ATT-DB" },
          { label: "Kettlebell storage", value: "92ATT-KB" },
          { label: "Med/Wall ball storage", value: "92ATT-MR" },
          { label: "Upright bar holder", value: "92ATT-UP" },
          { label: "Catalog SKU (this entry)", value: "92ATT-DB" },
        ],
      },
    ],
    specSheetUrl: "https://cdn.shopify.com/s/files/1/1128/9596/files/92ATT_Customizable_Storage_Rack_8_25_0fb898e1-64b2-4af0-99af-3f79930391e9.pdf",
    sourceUrl: "https://www.tkostrength.com/products/customizable-storage-rack",
    seo: {
      title: "TKO Customizable Storage Rack — Dumbbell Configuration | GM Therapy",
      description: "4-tier customizable TKO storage rack with dumbbell shelf (92ATT-DB). 3\"×3\" steel, styrene-lined shelves, 82\"×34\"×72\".",
    },
  },

  // Ancore Rack Mount — product id "344"
  "344": {
    productId: "344",
    slug: "ancore-rack-mount",
    tagline:
      "Transform any squat rack into a portable cable trainer in seconds.",
    overview: [
      "The Ancore Rack Mount turns a standard squat or power rack into a full-featured cable training station. Built with a durable aluminum plate, steel rod, and spring-locking knob, it attaches in seconds and holds the Ancore portable cable trainer securely at any height along the upright.",
      "Compatible with any squat rack with uprights ranging from 2\" to 4\", the Rack Mount unlocks a full library of pulling, pressing, rotational, and functional cable movements — without dedicating floor space to a stand-alone cable column.",
    ],
    highlights: [
      "Fits squat racks with 2\"–4\" uprights",
      "Quick-attach with spring-locking knob",
      "Durable aluminum plate + steel rod construction",
      "Adjustable to any height along the rack",
      "Pairs with the Ancore portable cable trainer",
      "Adds cable training to any rack-equipped space",
    ],
    gallery: [
      { src: "/assets/products/ancore-rack-mount.png", alt: "Ancore Rack Mount — product view" },
      { src: "/assets/products/ancore-rack-mount-with-trainer.png", alt: "Ancore Rack Mount with Ancore cable trainer attached" },
      { src: "/assets/products/ancore-rack-mount-environment.png", alt: "Ancore Rack Mount installed in a training environment" },
      { src: "/assets/products/ancore-rack-mount-detail1.png", alt: "Ancore Rack Mount detail view" },
      { src: "/assets/products/ancore-rack-mount-detail2.png", alt: "Ancore Rack Mount mounting hardware detail" },
      { src: "/assets/products/ancore-rack-mount-pieces.png", alt: "Ancore Rack Mount components" },
    ],
    specGroups: [
      {
        title: "Compatibility",
        rows: [
          { label: "Rack uprights", value: "2\" to 4\" (square)" },
          { label: "Trainer compatibility", value: "Ancore portable cable trainer" },
        ],
      },
      {
        title: "Construction",
        rows: [
          { label: "Plate", value: "Durable aluminum" },
          { label: "Rod", value: "Steel" },
          { label: "Locking", value: "Spring-locking knob" },
        ],
      },
      {
        title: "Catalog",
        rows: [
          { label: "SKU", value: "ANC AT-RM-01" },
          { label: "Manufacturer", value: "Ancore" },
        ],
      },
    ],
    sourceUrl: "https://ancoretraining.com/products/rack-mount",
    seo: {
      title: "Ancore Rack Mount (AT-RM-01) — Cable Trainer Rack Attachment | GM Therapy",
      description:
        "Ancore Rack Mount turns any 2\"–4\" squat rack upright into a portable cable training station. Aluminum + steel construction, quick-attach.",
    },
  },

  // ANCORE Pro — Portable Cable Trainer — product id "202"
  "202": {
    productId: "202",
    slug: "ancore-pro",
    tagline:
      "Portable cable resistance — pro-grade training without a cable column.",
    overview: [
      "The ANCORE Pro delivers portable cable resistance for clinics, training rooms, and home gyms that need pro-grade cable training without the space or cost of a traditional cable machine.",
      "Its torque-loaded spring resistance mechanism produces a flat, consistent resistance curve and a true 1:1 ratio — meaning 65 lb on the Pro feels like roughly 130 lb on a standard 2:1 cable machine. Mounts to racks, poles, beams, or walls and unlocks 220+ exercise variations.",
    ],
    highlights: [
      "Resistance: 5–65 lb, 1:1 ratio (≈10–130 lb equivalent on 2:1 cables)",
      "Torque-loaded spring mechanism with flat torque curve",
      "8 ft Dyneema® cable",
      "12\" L × 4.75\" W × 3\" H, 9 lb fully loaded",
      "Strap, wall, rack, sliding-track, and plate-dock mounts available",
      "220+ exercise variations",
      "USA assembled, 2-year warranty",
    ],
    gallery: [
      { src: "/assets/products/ancore-pro-1.png", alt: "ANCORE Pro portable cable trainer — product view" },
      { src: "/assets/products/ancore-pro-2.png", alt: "ANCORE Pro — what's included" },
      { src: "/assets/products/ancore-pro-3.png", alt: "ANCORE Pro carrying case" },
      { src: "/assets/products/ancore-pro-4.png", alt: "ANCORE Pro vertical product image" },
      { src: "/assets/products/ancore-pro-5.png", alt: "ANCORE Pro schematic" },
      { src: "/assets/products/ancore-pro-6.png", alt: "ANCORE Pro with packaging" },
    ],
    specGroups: [
      {
        title: "Resistance",
        rows: [
          { label: "Range", value: "5–65 lb (1:1 ratio)" },
          { label: "Equivalent on 2:1 cable machine", value: "~10–130 lb" },
          { label: "Mechanism", value: "Torque-loaded spring with flat torque curve" },
        ],
      },
      {
        title: "Cable & Build",
        rows: [
          { label: "Cable length", value: "8 ft" },
          { label: "Cable material", value: "Dyneema® synthetic fiber" },
          { label: "Dimensions", value: "12\" L × 4.75\" W × 3\" H (fully loaded)" },
          { label: "Weight", value: "9 lb fully loaded" },
        ],
      },
      {
        title: "Mounting & Catalog",
        rows: [
          { label: "Mount options", value: "Strap, Wall, Rack, Sliding Track, Plate Dock" },
          { label: "Origin", value: "USA assembled" },
          { label: "Warranty", value: "2-year" },
          { label: "SKU", value: "ANC AP-65-01" },
        ],
      },
    ],
    sourceUrl: "https://ancoretraining.com/products/ancore-pro",
    seo: {
      title: "ANCORE Pro Portable Cable Trainer (5–65 lb) | GM Therapy",
      description:
        "ANCORE Pro portable cable trainer with 5–65 lb 1:1 resistance, 8 ft Dyneema cable, and 220+ exercise variations. Ideal for rehab and training spaces.",
    },
  },

  // ANCORE Ankle Strap Attachment — product id "203"
  "203": {
    productId: "203",
    slug: "ancore-ankle-strap",
    tagline:
      "Padded ankle strap for lower-body cable training with the ANCORE.",
    overview: [
      "Training without limits doesn't stop at the upper body. The ANCORE Ankle Strap clips into the ANCORE or ANCORE Pro via a universal carabiner and fastens securely around the ankle, opening up kickbacks, hip abductions/adductions, and leg curls.",
      "Padded for high-volume training and compatible with all ANCORE models.",
    ],
    highlights: [
      "Padded ankle cuff for high-volume work",
      "Universal carabiner — fits all ANCORE models",
      "Built for kickbacks, hip abductions, and leg curls",
      "Compatible with ANCORE and ANCORE Pro",
    ],
    gallery: [
      { src: "/assets/products/ancore-ankle-strap-1.png", alt: "ANCORE Ankle Strap — product view" },
      { src: "/assets/products/ancore-ankle-strap-2.png", alt: "Ankle strap clipped to ANCORE trainer" },
      { src: "/assets/products/ancore-ankle-strap-3.png", alt: "Ankle strap in use — exercise 1" },
      { src: "/assets/products/ancore-ankle-strap-4.png", alt: "Ankle strap in use — exercise 2" },
    ],
    specGroups: [
      {
        title: "Compatibility & Catalog",
        rows: [
          { label: "Fits", value: "ANCORE and ANCORE Pro" },
          { label: "Attachment", value: "Universal carabiner clip" },
          { label: "Includes", value: "1 ankle strap" },
          { label: "SKU", value: "ANC AT-AS-01" },
        ],
      },
    ],
    sourceUrl: "https://ancoretraining.com/products/ancore-ankle-strap",
    seo: {
      title: "ANCORE Ankle Strap Attachment | GM Therapy",
      description:
        "Padded ankle strap for the ANCORE portable cable trainer. Universal carabiner clip fits ANCORE and ANCORE Pro for kickbacks, abductions, and leg curls.",
    },
  },

  // ANCORE Plate Dock — Strap Mount — product id "204"
  "204": {
    productId: "204",
    slug: "ancore-plate-dock",
    tagline:
      "Aluminum dock that keeps ANCORE Pro resistance plates organized and at hand.",
    overview: [
      "The Plate Dock seamlessly stores ANCORE Pro resistance plates at your facility or home gym without taking up floor space. Plates click directly into the dock for fast access between sets and patients.",
      "This strap-mount version wraps around squat racks, poles, or other rounded fixtures with a 10–14\" circumference — no installation required.",
    ],
    highlights: [
      "Aluminum storage dock for ANCORE Pro resistance plates",
      "Strap mount fits 10–14\" round fixtures",
      "Plates click in for fast access",
      "No installation required",
      "Great complement to any ANCORE training setup",
    ],
    gallery: [
      { src: "/assets/products/ancore-plate-dock-1.png", alt: "ANCORE Plate Dock — product view" },
      { src: "/assets/products/ancore-plate-dock-2.png", alt: "Plate Dock in environment" },
      { src: "/assets/products/ancore-plate-dock-3.png", alt: "Plate Dock in use" },
      { src: "/assets/products/ancore-plate-dock-4.png", alt: "Plate Dock alternate view" },
      { src: "/assets/products/ancore-plate-dock-5.png", alt: "Plate Dock detail" },
      { src: "/assets/products/ancore-plate-dock-6.png", alt: "Plate Dock wall-mounted variant" },
    ],
    specGroups: [
      {
        title: "Mounting",
        rows: [
          { label: "Type", value: "Strap mount" },
          { label: "Fits fixtures", value: "10–14\" circumference" },
          { label: "Installation", value: "None — strap-on" },
        ],
      },
      {
        title: "Compatibility & Catalog",
        rows: [
          { label: "Compatible plates", value: "ANCORE Pro resistance plates" },
          { label: "Material", value: "Aluminum" },
          { label: "SKU", value: "ANC AT-PD-01-SM" },
        ],
      },
    ],
    sourceUrl: "https://ancoretraining.com/products/plate-dock",
    seo: {
      title: "ANCORE Plate Dock — Strap Mount | GM Therapy",
      description:
        "Aluminum strap-mount Plate Dock for ANCORE Pro resistance plates. Wraps around 10–14\" rack uprights or rounded fixtures for fast plate access.",
    },
  },

  // ANCORE 2.5 lb Resistance Plates (Pair) — product id "205"
  "205": {
    productId: "205",
    slug: "ancore-resistance-plates-2-5",
    tagline:
      "Fine-tune ANCORE Pro resistance for early-stage rehab and progressive overload.",
    overview: [
      "ANCORE Resistance Plates click directly onto the ANCORE Pro base unit and stack to customize resistance for any exercise. Stackable, portable, and designed for fast swap-outs between protocols.",
      "This pair of 2.5 lb plates is the smallest available — critical for early-stage rehab loading and incremental progressive overload.",
    ],
    highlights: [
      "Pair of 2.5 lb resistance plates",
      "Smallest plate increment for ANCORE Pro",
      "Click directly onto ANCORE Pro base unit",
      "Stackable with other ANCORE plates",
      "Ideal for early-stage rehab and fine progression",
    ],
    gallery: [
      { src: "/assets/products/ancore-resistance-plates-1.png", alt: "ANCORE Resistance Plates — product view" },
      { src: "/assets/products/ancore-resistance-plates-2.png", alt: "ANCORE Resistance Plates alternate view" },
      { src: "/assets/products/ancore-resistance-plates-3.png", alt: "Resistance plate detail" },
      { src: "/assets/products/ancore-resistance-plates-4.png", alt: "Resistance plates in action" },
      { src: "/assets/products/ancore-resistance-plates-5.png", alt: "Resistance plate detail closeup" },
      { src: "/assets/products/ancore-resistance-plates-6.png", alt: "Resistance plates with Pro PT bundle" },
    ],
    specGroups: [
      {
        title: "Plates",
        rows: [
          { label: "Weight per plate", value: "~2.5 lb" },
          { label: "Quantity", value: "Pair (2)" },
          { label: "Attachment", value: "Twist-on / click-on to ANCORE Pro" },
        ],
      },
      {
        title: "Catalog",
        rows: [
          { label: "Compatibility", value: "ANCORE Pro" },
          { label: "SKU", value: "ANC AT-RP-01-25" },
        ],
      },
    ],
    sourceUrl: "https://ancoretraining.com/products/resistance-plates",
    seo: {
      title: "ANCORE 2.5 lb Resistance Plates (Pair) | GM Therapy",
      description:
        "Pair of 2.5 lb ANCORE Pro resistance plates for fine-tuned progression and early-stage rehab loading. Click-on, stackable design.",
    },
  },

  // ANCORE Sliding Track Mount — 6 ft Wall Track — product id "206"
  "206": {
    productId: "206",
    slug: "ancore-sliding-track-mount",
    tagline:
      "Permanent 6 ft wall track — full vertical adjustability without sacrificing floor space.",
    overview: [
      "The ANCORE Sliding Track Mount delivers complete and effortless vertical adjustability for the ANCORE portable cable trainer without occupying any floor space. Ideal for clinics with dedicated treatment walls and facilities with structured training zones.",
      "Handcrafted in the USA from premium materials, the 6-foot track installs into wood studs with all hardware included. The smooth slider lets staff change height in seconds between patients or athletes.",
    ],
    highlights: [
      "Permanent 6 ft wall-mounted sliding track",
      "Full vertical adjustability without floor footprint",
      "Smooth slider for fast height changes",
      "Handcrafted in the USA",
      "Installs into wood studs — hardware included",
      "ANCORE unit sold separately",
    ],
    gallery: [
      { src: "/assets/products/ancore-sliding-track-mount-1.png", alt: "ANCORE Sliding Track Mount — product view" },
      { src: "/assets/products/ancore-sliding-track-mount-2.png", alt: "Sliding Track Mount installed in environment" },
      { src: "/assets/products/ancore-sliding-track-mount-3.png", alt: "Sliding Track Mount with ANCORE attached" },
      { src: "/assets/products/ancore-sliding-track-mount-4.png", alt: "Sliding Track Mount in use — exercise 1" },
      { src: "/assets/products/ancore-sliding-track-mount-5.png", alt: "Sliding Track Mount in use — exercise 2" },
    ],
    specGroups: [
      {
        title: "Track",
        rows: [
          { label: "Length", value: "6 ft" },
          { label: "Mounting", value: "Wall — into wood studs" },
          { label: "Adjustability", value: "Full vertical via smooth slider" },
          { label: "Hardware", value: "All included" },
        ],
      },
      {
        title: "Catalog",
        rows: [
          { label: "Origin", value: "Handcrafted in USA" },
          { label: "Compatibility", value: "ANCORE / ANCORE Pro (sold separately)" },
          { label: "SKU", value: "ANC AT-TM-01" },
        ],
      },
    ],
    sourceUrl: "https://ancoretraining.com/products/sliding-track-mount",
    seo: {
      title: "ANCORE Sliding Track Mount — 6 ft Wall Track | GM Therapy",
      description:
        "Permanent 6 ft sliding wall track for the ANCORE portable cable trainer. Full vertical adjustability, handcrafted in the USA, hardware included.",
    },
  },

  // ANCORE Pro (Standard, 55 lb) — product id "345"
  "345": {
    productId: "345",
    slug: "ancore-pro-55",
    tagline:
      "Portable cable resistance — pro-grade training in a 9 lb unit (55 lb model).",
    overview: [
      "The ANCORE Pro delivers portable cable resistance for clinics, training rooms, and home gyms that need pro-grade cable training without the space or cost of a traditional cable machine. This is the standard 55 lb model.",
      "A torque-loaded spring resistance mechanism produces a flat torque curve and a true 1:1 ratio — meaning 55 lb on the Pro feels like roughly 110 lb on a standard 2:1 cable machine. Mounts to racks, poles, beams, or walls and unlocks 220+ exercise variations.",
    ],
    highlights: [
      "Resistance: 5–55 lb, 1:1 ratio (≈10–110 lb equivalent on 2:1 cables)",
      "Torque-loaded spring mechanism with flat torque curve",
      "8 ft Dyneema® cable",
      "12\" L × 4.75\" W × 3\" H, 9 lb fully loaded",
      "Strap, wall, rack, sliding-track, and plate-dock mounts available",
      "220+ exercise variations",
      "USA hand-assembled, 2-year warranty",
    ],
    gallery: [
      { src: "/assets/products/ancore-pro-1.png", alt: "ANCORE Pro portable cable trainer — product view" },
      { src: "/assets/products/ancore-pro-2.png", alt: "ANCORE Pro — what's included" },
      { src: "/assets/products/ancore-pro-3.png", alt: "ANCORE Pro carrying case" },
      { src: "/assets/products/ancore-pro-4.png", alt: "ANCORE Pro vertical product image" },
      { src: "/assets/products/ancore-pro-5.png", alt: "ANCORE Pro schematic" },
      { src: "/assets/products/ancore-pro-6.png", alt: "ANCORE Pro with packaging" },
    ],
    specGroups: [
      {
        title: "Resistance",
        rows: [
          { label: "Range", value: "5–55 lb (1:1 ratio)" },
          { label: "Equivalent on 2:1 cable machine", value: "~10–110 lb" },
          { label: "Mechanism", value: "Torque-loaded spring with flat torque curve" },
        ],
      },
      {
        title: "Cable & Build",
        rows: [
          { label: "Cable length", value: "8 ft" },
          { label: "Cable material", value: "Dyneema® synthetic fiber" },
          { label: "Dimensions", value: "12\" L × 4.75\" W × 3\" H (fully loaded)" },
          { label: "Weight", value: "9 lb fully loaded" },
        ],
      },
      {
        title: "Mounting & Catalog",
        rows: [
          { label: "Mount options", value: "Strap, Wall, Rack, Sliding Track, Plate Dock" },
          { label: "Origin", value: "USA hand-assembled" },
          { label: "Warranty", value: "2-year" },
          { label: "SKU", value: "ANC AP-55-00" },
        ],
      },
    ],
    sourceUrl: "https://ancoretraining.com/products/ancore-pro",
    seo: {
      title: "ANCORE Pro Portable Cable Trainer (55 lb) | GM Therapy",
      description:
        "Standard ANCORE Pro portable cable trainer with 5–55 lb 1:1 resistance, 8 ft Dyneema cable, and 220+ exercise variations.",
    },
  },
  "346": {
    productId: "346",
    slug: "medsurface-3-section-hydraulic-hi-lo-table",
    tagline: "Reliable 3-section hydraulic hi-lo treatment table — manual height adjustment with no electricity required, 500 lb capacity, anti-microbial surface.",
    overview: [
      "The MedSurface 3-Section Hydraulic Hi-Lo Table is designed for clinics that need reliable manual height adjustment without the need for electricity. This durable hydraulic treatment table is built for ease of use and includes an easily cleanable, sanitary surface for everyday clinical work.",
      "The hydraulic foot pump smoothly raises and lowers the table through an 18\"–38\" range, while gas-assisted struts manage the recessed headrest. The head section raises 70° and lowers a full 90° for flexible patient positioning. The 3\" thick, gently contoured non-slip cushion is covered in MedSurface's anti-microbial upholstery for a sanitary patient surface. Integrated retractable casters make the table easy to reposition. Easy to use, reliable, and comfortable for clients — backed by a 3-year warranty.",
    ],
    highlights: [
      "Hydraulic (manual) height adjustment, 18\"–38\" — no electricity required",
      "Head section raises 70° and lowers a full 90°",
      "Gas-assisted struts control the recessed headrest",
      "MedSurface anti-microbial, easy-clean surface",
      "3\" thick non-slip contoured cushion",
      "Integrated retractable casters included",
      "500 lb weight capacity",
      "3-year warranty",
      "Available in Black, Grey, or Blue",
    ],
    gallery: [
      { src: "/assets/products/medsurface/ms-33100-3-section-hilo.png", alt: "MedSurface 3-Section Hydraulic Hi-Lo Treatment Table" },
    ],
    specGroups: [
      {
        title: "Dimensions & Adjustment",
        rows: [
          { label: "Height range", value: "18\"–38\" (hydraulic, manual)" },
          { label: "Head section", value: "+70° / -90°" },
          { label: "Sections", value: "3-section top" },
          { label: "Controls", value: "Hydraulic foot pump" },
        ],
      },
      {
        title: "Capacity & Construction",
        rows: [
          { label: "Weight capacity", value: "500 lb" },
          { label: "Cushion", value: "3\" thick non-slip, contoured" },
          { label: "Upholstery", value: "MedSurface anti-microbial — Black, Grey, or Blue" },
          { label: "Headrest", value: "Recessed with gas-assisted struts" },
          { label: "Casters", value: "Integrated retractable" },
          { label: "Power", value: "None — fully manual / hydraulic" },
          { label: "Warranty", value: "3 years" },
          { label: "SKU", value: "MS 33100" },
        ],
      },
    ],
    sourceUrl: "https://medsurface.com/treatment-tables/3-section-hydraulic-hi-lo-table/",
    seo: {
      title: "MedSurface 3-Section Hydraulic Hi-Lo Table (MS 33100) | GM Therapy",
      description: "MedSurface 3-Section Hydraulic Hi-Lo treatment table with manual 18\"–38\" height adjustment, 500 lb capacity, and anti-microbial surface — no electricity required.",
    },
  },

  // ===== Clinical Supplies — FAB batch 1 (IDs 347–356) =====

  "347": {
    productId: "347",
    slug: "baseline-fingertip-pulse-oximeter",
    tagline: "Portable fingertip pulse oximeter for fast SpO₂ and pulse readings.",
    overview: [
      "The Baseline® Fingertip Pulse Oximeter is a compact, non-invasive device for measuring blood oxygen saturation (SpO₂) and pulse rate. Designed for clinical and home use.",
      "A bright OLED display with multi-directional readout makes results easy to read from any angle. Auto on/off conserves battery life — simply clip it on a finger to begin a reading.",
    ],
    highlights: [
      "Measures SpO₂ and pulse rate",
      "Bright multi-directional OLED display",
      "Auto on/off — fits adult and pediatric fingers",
      "Lightweight and portable",
      "Includes lanyard and 2 AAA batteries",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1926.jpg", alt: "Baseline Fingertip Pulse Oximeter" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Measures", value: "SpO₂ and pulse rate" },
          { label: "Display", value: "Multi-directional OLED" },
          { label: "Power", value: "2 AAA batteries (included)" },
          { label: "Use", value: "Adult and pediatric fingertip" },
          { label: "SKU", value: "FAB 12-1926" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/evaluation/bp-oxygen-pulse/pulse-oximeters/",
    seo: {
      title: "Baseline Fingertip Pulse Oximeter (FAB 12-1926) | GM Therapy",
      description: "Compact Baseline fingertip pulse oximeter measuring SpO₂ and pulse rate with bright OLED display.",
    },
  },

  "348": {
    productId: "348",
    slug: "fablife-mini-massager",
    tagline: "Compact handheld mini-massager with interchangeable heads.",
    overview: [
      "The FabLife Mini-Massager delivers comfortable vibrating massage to neck, back, shoulders, arms, and legs. Compact and portable — small enough to fit in a purse or bag.",
      "Variable-speed vibration combined with multiple interchangeable accessory heads makes it easy to target tight spots and promote circulation.",
    ],
    highlights: [
      "Compact handheld design",
      "Variable-speed vibration",
      "Multiple interchangeable accessory heads",
      "Battery powered — clinic or home use",
      "Helps relieve muscle tension and promote circulation",
    ],
    gallery: [
      { src: "/assets/products/fab/14-1050.jpg", alt: "FabLife Mini-Massager with Accessories" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Battery-powered handheld vibrating massager" },
          { label: "Heads", value: "Multiple interchangeable accessories" },
          { label: "Power", value: "C battery (check packaging)" },
          { label: "SKU", value: "FAB 14-1050" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/massage/electric-massagers/point-relief-battery-powered-mini-massagers/",
    seo: {
      title: "FabLife Mini-Massager with Accessories (FAB 14-1050) | GM Therapy",
      description: "Compact handheld mini-massager with multiple accessory heads for soft-tissue work and circulation.",
    },
  },

  "349": {
    productId: "349",
    slug: "baseline-tactile-monofilament-5-07-disposable-20pk",
    tagline: "Disposable 5.07 (10 g) monofilament — diabetic foot screening, 20-pack.",
    overview: [
      "Disposable Baseline® Tactile Monofilament evaluators measure cutaneous sensory perception threshold. The 5.07 (10 gram) filament is the ADA-recommended standard for diabetic foot screening.",
      "Single-patient, disposable design reduces cross-contamination risk in busy clinical settings.",
    ],
    highlights: [
      "ADA-recommended 5.07 (10 g) filament",
      "Disposable — single-patient use",
      "20 units per pack",
      "Color-coded for easy identification",
      "Reduces cross-contamination risk",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1671-20.jpg", alt: "Disposable Baseline Tactile Monofilament 5.07 (10g) — 20 pack" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Force", value: "5.07 (10 grams)" },
          { label: "Use", value: "Diabetic foot / sensation screening" },
          { label: "Quantity", value: "20 disposable units per pack" },
          { label: "SKU", value: "FAB 12-1671-20" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/evaluation/sensation/baseline-tactile-monofilaments/",
    seo: {
      title: "Disposable Baseline Tactile Monofilament 5.07, 20-pack (FAB 12-1671-20) | GM Therapy",
      description: "ADA-recommended 5.07 (10g) disposable monofilaments for diabetic foot screening — 20 per pack.",
    },
  },

  "350": {
    productId: "350",
    slug: "theraputty-red-soft-2oz",
    tagline: "Color-coded resistance putty for hand and finger therapy — Red (Soft).",
    overview: [
      "TheraPutty® exercise putty is a clinical standard for hand, finger, and wrist rehabilitation. Color-coded resistance levels make it easy to progress patients through a graded exercise program.",
      "Red is soft resistance — appropriate for early-stage strengthening, ROM, and fine-motor tasks.",
    ],
    highlights: [
      "Red — soft resistance",
      "2 oz portion",
      "Non-toxic, non-staining",
      "Gluten-free, latex-free",
      "Reusable; cleans up easily",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0901.jpg", alt: "TheraPutty Red (Soft) 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "Soft (Red)" },
          { label: "Size", value: "2 oz" },
          { label: "Material", value: "Non-toxic, latex-free, gluten-free silicone putty" },
          { label: "SKU", value: "FAB 10-0901" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/",
    seo: {
      title: "TheraPutty Red (Soft) 2 oz (FAB 10-0901) | GM Therapy",
      description: "Soft-resistance TheraPutty for hand and finger rehab. Color-coded, latex-free, 2 oz portion.",
    },
  },

  "351": {
    productId: "351",
    slug: "theraputty-yellow-xsoft-2oz",
    tagline: "Lightest resistance hand-therapy putty — Yellow (X-Soft).",
    overview: [
      "TheraPutty® exercise putty in yellow provides extra-soft resistance — the lightest in the color-coded line. Ideal for early-stage rehab, pediatric use, and patients with significant weakness.",
      "Color-coded so therapists and patients can easily track progression to firmer resistances.",
    ],
    highlights: [
      "Yellow — extra-soft (lightest) resistance",
      "2 oz portion",
      "Non-toxic, non-staining",
      "Gluten-free, latex-free",
      "Ideal for early-stage and pediatric rehab",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0900.jpg", alt: "TheraPutty Yellow (X-Soft) 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "X-Soft (Yellow)" },
          { label: "Size", value: "2 oz" },
          { label: "Material", value: "Non-toxic, latex-free, gluten-free silicone putty" },
          { label: "SKU", value: "FAB 10-0900" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/",
    seo: {
      title: "TheraPutty Yellow (X-Soft) 2 oz (FAB 10-0900) | GM Therapy",
      description: "Lightest-resistance TheraPutty for early-stage hand rehab. Color-coded, latex-free, 2 oz.",
    },
  },

  "352": {
    productId: "352",
    slug: "fablife-hip-kit-3",
    tagline: "5-piece ADL kit for hip and total-joint replacement recovery.",
    overview: [
      "The FabLife Hip Kit #3 packages five essential aids-to-daily-living tools for patients recovering from hip or total-joint replacement. Helps patients dress and bathe without bending past 90° — a key post-surgical precaution.",
      "Convenient bundled packaging makes this an excellent discharge handout for orthopedic units.",
    ],
    highlights: [
      "5-piece ADL kit",
      "26\" reacher",
      "Contoured bath sponge",
      "Sock aid",
      "18\" plastic shoehorn",
      "Dressing stick",
    ],
    gallery: [
      { src: "/assets/products/fab/86-0074.jpg", alt: "FabLife Hip Kit #3 — 5-piece ADL kit" },
    ],
    specGroups: [
      {
        title: "Kit Contents",
        rows: [
          { label: "Reacher", value: "26\"" },
          { label: "Bath sponge", value: "Contoured" },
          { label: "Sock aid", value: "Included" },
          { label: "Shoehorn", value: "18\" plastic" },
          { label: "Dressing stick", value: "Included" },
          { label: "SKU", value: "FAB 86-0074" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/adl/hip-kits/",
    seo: {
      title: "FabLife Hip Kit #3 — 5-Piece ADL Kit (FAB 86-0074) | GM Therapy",
      description: "5-piece hip / total-joint replacement ADL kit: reacher, bath sponge, sock aid, shoehorn, dressing stick.",
    },
  },

  "353": {
    productId: "353",
    slug: "theraputty-green-medium-2oz",
    tagline: "Medium-resistance hand-therapy putty — Green.",
    overview: [
      "TheraPutty® green provides medium resistance — a common progression target for grip and pinch strengthening programs.",
      "Color-coded for clear documentation and patient progression tracking.",
    ],
    highlights: [
      "Green — medium resistance",
      "2 oz portion",
      "Non-toxic, non-staining",
      "Gluten-free, latex-free",
      "Ideal for progressive grip and pinch strengthening",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0902.jpg", alt: "TheraPutty Green (Medium) 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "Medium (Green)" },
          { label: "Size", value: "2 oz" },
          { label: "Material", value: "Non-toxic, latex-free, gluten-free silicone putty" },
          { label: "SKU", value: "FAB 10-0902" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/",
    seo: {
      title: "TheraPutty Green (Medium) 2 oz (FAB 10-0902) | GM Therapy",
      description: "Medium-resistance TheraPutty for hand rehab. Color-coded, latex-free, 2 oz portion.",
    },
  },

  "354": {
    productId: "354",
    slug: "baseline-360-plastic-goniometer-12in",
    tagline: "Clear 360° plastic goniometer with 12\" arms for large-joint ROM.",
    overview: [
      "The Baseline® 360° Plastic Goniometer permits observation of a joint's axis of motion and its range of motion. Transparent plastic allows the clinician to see anatomical landmarks through the device.",
      "12\" arms make this size ideal for measuring large joints — hip, knee, and shoulder.",
    ],
    highlights: [
      "Transparent plastic — see landmarks through the device",
      "360° head with 1° increments",
      "12\" arms — large joints (hip, knee, shoulder)",
      "Lightweight, durable, easy to read",
      "Standard PT/OT documentation tool",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1000.jpg", alt: "Baseline 360° Plastic Goniometer — 12\" arms" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Arm length", value: "12\"" },
          { label: "Scale", value: "360° head, 1° increments" },
          { label: "Material", value: "Transparent plastic" },
          { label: "SKU", value: "FAB 12-1000" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/evaluation/range-of-motion/baseline-plastic-goniometers/",
    seo: {
      title: "Baseline 360° Plastic Goniometer 12\" (FAB 12-1000) | GM Therapy",
      description: "Transparent 360° plastic goniometer with 12\" arms — ideal for hip, knee, and shoulder ROM.",
    },
  },

  "355": {
    productId: "355",
    slug: "theraputty-plus-antimicrobial-green-medium-2oz",
    tagline: "Antimicrobial-treated TheraPutty — Green (Medium), 2 oz.",
    overview: [
      "TheraPutty® Plus is treated with an antimicrobial agent that inhibits the growth of bacteria, mold, and mildew on the putty itself — a smart choice for shared clinical use.",
      "Green provides medium resistance, the most commonly prescribed progression level for hand rehab.",
    ],
    highlights: [
      "Antimicrobial-treated putty",
      "Green — medium resistance",
      "2 oz portion",
      "Inhibits bacteria, mold, and mildew",
      "Non-toxic, non-staining, gluten-free, latex-free",
      "Ideal for shared clinical use",
    ],
    gallery: [
      { src: "/assets/products/fab/10-2603.jpg", alt: "TheraPutty Plus Antimicrobial Green (Medium) 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "Medium (Green)" },
          { label: "Size", value: "2 oz" },
          { label: "Treatment", value: "Antimicrobial" },
          { label: "Material", value: "Non-toxic, latex-free, gluten-free silicone putty" },
          { label: "SKU", value: "FAB 10-2603" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/",
    seo: {
      title: "TheraPutty Plus Antimicrobial Green (Medium) 2 oz (FAB 10-2603) | GM Therapy",
      description: "Antimicrobial-treated medium-resistance TheraPutty for shared clinical use. 2 oz, latex-free.",
    },
  },

  "356": {
    productId: "356",
    slug: "fablife-hip-kit-2",
    tagline: "4-piece ADL kit for hip and total-joint replacement recovery.",
    overview: [
      "The FabLife Hip Kit #2 is a 4-piece bundle of essential aids-to-daily-living tools for patients following hip precautions. A practical mid-tier kit between Hip Kit #1 and Hip Kit #3.",
      "Helps patients dress and bathe without bending past 90° during post-surgical recovery.",
    ],
    highlights: [
      "4-piece ADL kit",
      "26\" reacher",
      "Sock and stocking aid",
      "24\" metal shoehorn",
      "Contoured bath sponge",
    ],
    gallery: [
      { src: "/assets/products/fab/86-0072.jpg", alt: "FabLife Hip Kit #2 — 4-piece ADL kit" },
    ],
    specGroups: [
      {
        title: "Kit Contents",
        rows: [
          { label: "Reacher", value: "26\"" },
          { label: "Sock aid", value: "Sock and stocking aid" },
          { label: "Shoehorn", value: "24\" metal" },
          { label: "Bath sponge", value: "Contoured" },
          { label: "SKU", value: "FAB 86-0072" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/adl/hip-kits/",
    seo: {
      title: "FabLife Hip Kit #2 — 4-Piece ADL Kit (FAB 86-0072) | GM Therapy",
      description: "4-piece hip / total-joint replacement ADL kit: reacher, sock aid, 24\" shoehorn, bath sponge.",
    },
  },

  "357": {
    productId: "357",
    slug: "cando-twist-bend-shake-24in-tan",
    tagline: "Versatile 24\" rubber bar — twist, bend, or shake exercises.",
    overview: [
      "The CanDo Twist-Bend-Shake bar is a clinical favorite for upper-extremity strengthening. The 24\" rubber bar can be used three ways: twist (flex one wrist while extending the other), bend (flex the bar in the middle), or shake (rapid rotational/oscillation work).",
      "Tan is XX-Light — the lightest resistance — ideal for early-stage rehab, geriatric patients, and pediatric use.",
    ],
    highlights: [
      "24\" rubber bar — twist, bend, and shake exercises",
      "Tan — XX-Light (lightest) resistance",
      "Color-coded progressive resistance system",
      "Strengthens wrists, forearms, and shoulders",
      "Consistent diameter and length across all resistances",
      "Ideal for tennis elbow, lateral epicondylitis, and grip rehab",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1525.jpg", alt: "CanDo Twist-Bend-Shake 24\" Tan exerciser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Length", value: "24\"" },
          { label: "Resistance", value: "Tan — XX-Light" },
          { label: "Material", value: "Natural rubber" },
          { label: "SKU", value: "FAB 10-1525" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/wrists-shoulder/cando-twist-bend-shake-exercisers/",
    seo: {
      title: "CanDo Twist-Bend-Shake 24\" Tan (FAB 10-1525) | GM Therapy",
      description: "24\" twist-bend-shake exerciser, Tan XX-Light resistance. Wrist, forearm, and shoulder rehab.",
    },
  },

  "358": {
    productId: "358",
    slug: "cando-multi-axial-positioning-system",
    tagline: "Multi-axial wobble platform for graded balance and proprioception training.",
    overview: [
      "The CanDo Multi-Axial Positioning System (MAPS) is a clinical balance platform with adjustable instability — letting clinicians grade difficulty as patients progress through balance and proprioception protocols.",
      "Trains ankle and knee stability, core control, and dynamic balance. Used widely in lower-extremity rehab and athletic performance training.",
    ],
    highlights: [
      "Multi-axial wobble platform with adjustable instability",
      "Graded difficulty for progressive balance training",
      "Trains proprioception, ankle/knee stability, and core control",
      "Lower-extremity rehab and sports performance",
      "Durable clinical construction",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1750.jpg", alt: "CanDo Multi-Axial Positioning System (MAPS) wobble board" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Multi-axial wobble platform" },
          { label: "Adjustability", value: "Multiple difficulty levels" },
          { label: "SKU", value: "FAB 10-1750" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/balance-boards-pads/multi-axial-positioning-system/",
    seo: {
      title: "CanDo Multi-Axial Positioning System (FAB 10-1750) | GM Therapy",
      description: "MAPS wobble platform with adjustable instability for graded balance and proprioception training.",
    },
  },

  "359": {
    productId: "359",
    slug: "theraband-band-roll-black-xheavy-50yd",
    tagline: "Bulk TheraBand resistance roll — Black (X-Heavy), 5\" × 50 yards.",
    overview: [
      "TheraBand® bulk roll lets clinics cut bands to any length needed for individual patient programs. Black is the X-Heavy resistance level — the highest standard TheraBand resistance — ideal for advanced strengthening, larger muscle groups, and high-load rehabilitation protocols.",
      "Color-coded resistance lets clinicians document and progress with the same TheraBand standard used worldwide.",
    ],
    highlights: [
      "Bulk roll — cut to length",
      "Black — X-Heavy resistance",
      "5\" wide × 50 yard roll",
      "Color-coded progressive resistance",
      "Latex (natural rubber)",
      "Ideal for advanced strengthening protocols",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1010.jpg", alt: "TheraBand exercise band roll — Black (X-Heavy) 50 yard" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Bulk band roll" },
          { label: "Resistance", value: "Black — X-Heavy" },
          { label: "Dimensions", value: "5\" × 50 yards" },
          { label: "Material", value: "Latex" },
          { label: "SKU", value: "FAB 10-1010" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/resistance-bands/",
    seo: {
      title: "TheraBand Band Roll — Black X-Heavy 50yd (FAB 10-1010) | GM Therapy",
      description: "Bulk TheraBand resistance roll, Black X-Heavy, 5\" × 50 yards. Latex, color-coded progressive resistance.",
    },
  },


  "361": {
    productId: "361",
    slug: "cando-twist-n-bend-yellow-xlight",
    tagline: "Flexible exercise bar — twist or bend — Yellow X-Light.",
    overview: [
      "The CanDo Twist-n-Bend bar is a flexible rubber bar that resists both twisting and bending. Yellow is X-Light — a great starting resistance for grip rehab and lateral epicondylitis (tennis elbow) protocols.",
      "Compact and portable — ideal for home programs and travel kits.",
    ],
    highlights: [
      "Flexible rubber exercise bar",
      "Yellow — X-Light resistance",
      "Twist or bend — wrist, forearm, and grip",
      "Color-coded progressive resistance",
      "Tennis elbow / lateral epicondylitis rehab",
      "Compact and portable",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1510.jpg", alt: "CanDo Twist-n-Bend Yellow X-Light exerciser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "Yellow — X-Light" },
          { label: "Material", value: "Natural rubber" },
          { label: "SKU", value: "FAB 10-1510" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/wrists-shoulder/cando-twist-n-bend-exercisers/",
    seo: {
      title: "CanDo Twist-n-Bend Yellow X-Light (FAB 10-1510) | GM Therapy",
      description: "Flexible exercise bar for twist and bend — Yellow X-Light resistance. Tennis elbow rehab.",
    },
  },

  "362": {
    productId: "362",
    slug: "cando-gel-ball-yellow-xsoft",
    tagline: "Gel-filled hand exercise ball — Yellow X-Soft.",
    overview: [
      "CanDo Gel Ball is a squeezable gel-filled hand exerciser. Yellow X-Soft is the lightest resistance — a good starting point for early-stage hand rehab, post-injury, and stress-relief use.",
      "Color-coded for clear progression. Latex-free and non-toxic.",
    ],
    highlights: [
      "Gel-filled hand exercise ball",
      "Yellow — X-Soft resistance",
      "Color-coded progressive resistance",
      "Latex-free, non-toxic",
      "Ideal for hand rehab, grip strengthening, and stress relief",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1295.jpg", alt: "CanDo Gel Ball Hand Exerciser — Yellow X-Soft" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "Yellow — X-Soft" },
          { label: "Fill", value: "Gel" },
          { label: "Material", value: "Latex-free, non-toxic" },
          { label: "SKU", value: "FAB 10-1295" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/hand-flexion/gel-ball-hand-exercisers/",
    seo: {
      title: "CanDo Gel Ball Yellow X-Soft (FAB 10-1295) | GM Therapy",
      description: "Gel-filled hand exercise ball, Yellow X-Soft resistance. Latex-free hand rehab.",
    },
  },

  "363": {
    productId: "363",
    slug: "cando-adjustable-hand-grip-yellow",
    tagline: "Adjustable resistance hand grip exerciser — Yellow Light.",
    overview: [
      "Adjustable hand grip exercisers let patients dial resistance up or down on the fly via a tension knob. Yellow is the Light tier — a popular starting point for progressive grip strengthening.",
      "Compact and portable — ideal for home programs.",
    ],
    highlights: [
      "Adjustable tension dial",
      "Yellow — Light resistance",
      "Strengthens forearm, wrist, and grip",
      "Compact and portable",
      "Progressive grip-strength training",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1825.jpg", alt: "CanDo Adjustable Hand Grip Exerciser — Yellow Light" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Adjustable hand grip" },
          { label: "Resistance", value: "Yellow — Light" },
          { label: "SKU", value: "FAB 10-1825" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/hand-flexion/adjustable-hand-grip-exercisers/",
    seo: {
      title: "CanDo Adjustable Hand Grip — Yellow (FAB 10-1825) | GM Therapy",
      description: "Adjustable resistance hand grip exerciser — Yellow Light. Progressive grip-strength training.",
    },
  },

  "364": {
    productId: "364",
    slug: "cando-power-hand-grip-light",
    tagline: "Spring-loaded hand grip exerciser — Light resistance.",
    overview: [
      "The CanDo Power Hand Grip is a classic spring-loaded grip exerciser. Light resistance is a good starting point for early-stage rehab and patients new to grip strengthening.",
      "Compact, portable, and affordable.",
    ],
    highlights: [
      "Spring-loaded hand grip",
      "Light resistance — early-stage rehab",
      "Color-coded by resistance",
      "Compact and portable",
      "Strengthens forearm, wrist, and grip",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0815.jpg", alt: "CanDo Power Hand Grip — Light" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Spring-loaded hand grip" },
          { label: "Resistance", value: "Light" },
          { label: "SKU", value: "FAB 10-0815" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/hand-flexion/power-hand-grip/",
    seo: {
      title: "CanDo Power Hand Grip — Light (FAB 10-0815) | GM Therapy",
      description: "Spring-loaded hand grip exerciser, Light resistance. Forearm, wrist, and grip strengthening.",
    },
  },

  "365": {
    productId: "365",
    slug: "theraband-flexbar-yellow-xlight",
    tagline: "Clinical-grade flexible resistance bar — Yellow X-Light.",
    overview: [
      "The TheraBand® FlexBar is the clinical standard for upper-extremity rehab and is the bar used in the published Tyler Twist protocol — proven effective for lateral epicondylitis (tennis elbow). Yellow is the X-Light / lightest resistance.",
      "Strengthens grip, forearm, wrist, elbow, and shoulder. Made in the USA from clinical-grade rubber.",
    ],
    highlights: [
      "Yellow — X-Light / lightest resistance",
      "Tyler Twist protocol — proven for tennis elbow",
      "Strengthens grip, forearm, wrist, and shoulder",
      "Color-coded progressive resistance",
      "Clinical-grade rubber",
      "Made in USA",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1350.jpg", alt: "TheraBand FlexBar Yellow X-Light" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "Yellow — X-Light" },
          { label: "Material", value: "Clinical-grade rubber" },
          { label: "SKU", value: "FAB 10-1350" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/wrists-shoulder/theraband-flexbar-exercisers/",
    seo: {
      title: "TheraBand FlexBar Yellow X-Light (FAB 10-1350) | GM Therapy",
      description: "Clinical-grade FlexBar, Yellow X-Light. Tyler Twist protocol for tennis elbow rehab.",
    },
  },

  "366": {
    productId: "366",
    slug: "cando-weight-bar-3lb",
    tagline: "Padded weighted exercise bar — 3 lb.",
    overview: [
      "CanDo Weight Bars are foam-padded weighted bars used widely in clinical exercise classes, ROM programs, and core strengthening. 3 lb is a common starting weight for early-stage strengthening.",
      "Comfortable foam grip surface; color-coded by weight.",
    ],
    highlights: [
      "3 lb — light resistance",
      "Color-coded by weight",
      "Comfortable foam grip surface",
      "Ideal for ROM, postural, and core exercises",
      "Standard clinical strengthening tool",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1620.jpg", alt: "CanDo Weight Bar 3 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Weight", value: "3 lb" },
          { label: "Surface", value: "Foam-padded grip" },
          { label: "SKU", value: "FAB 10-1620" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/weights/cando-weight-bars/",
    seo: {
      title: "CanDo Weight Bar — 3 lb (FAB 10-1620) | GM Therapy",
      description: "Padded weighted exercise bar, 3 lb. ROM, postural, and core exercises.",
    },
  },

  "367": {
    productId: "367",
    slug: "the-cuff-deluxe-1lb",
    tagline: "Deluxe wrist/ankle cuff weight — 1 lb.",
    overview: [
      "the Cuff® Deluxe is the premium soft cuff weight — featuring a durable steel-shot fill and a soft, comfortable shell. 1 lb is color-coded yellow.",
      "Used clinically for rehab strengthening, ROM, and gait training. Sold individually so clinics can build the exact set they need.",
    ],
    highlights: [
      "Deluxe construction — soft padded shell",
      "1 lb — color-coded yellow",
      "Steel-shot fill",
      "Hook-and-loop closure adjusts to most patients",
      "Wrist or ankle use",
      "Sold individually",
    ],
    gallery: [
      { src: "/assets/products/fab/10-2500.jpg", alt: "the Cuff Deluxe 1 lb wrist/ankle weight" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Weight", value: "1 lb" },
          { label: "Color", value: "Yellow" },
          { label: "Closure", value: "Hook-and-loop" },
          { label: "Use", value: "Wrist or ankle" },
          { label: "SKU", value: "FAB 10-2500" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/weights/the-cuff-weights-deluxe/",
    seo: {
      title: "the Cuff Deluxe 1 lb (FAB 10-2500) | GM Therapy",
      description: "Deluxe wrist/ankle cuff weight, 1 lb. Steel-shot fill, soft padded shell.",
    },
  },

  "368": {
    productId: "368",
    slug: "cando-platform-system",
    tagline: "Adjustable-instability balance platform for graded training.",
    overview: [
      "The CanDo Platform System is a balance training platform with adjustable instability — letting clinicians grade difficulty as patients progress through balance protocols.",
      "Trains proprioception and dynamic stability for lower-extremity rehab and athletic training.",
    ],
    highlights: [
      "Adjustable instability balance platform",
      "Multiple difficulty settings for progressive training",
      "Trains proprioception and dynamic stability",
      "Lower-extremity rehab and athletic training",
      "Durable platform with non-slip surface",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1700.jpg", alt: "CanDo Platform System balance board" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Adjustable balance platform" },
          { label: "Surface", value: "Non-slip" },
          { label: "SKU", value: "FAB 10-1700" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/balance-boards-pads/cando-platform-system/",
    seo: {
      title: "CanDo Platform System (FAB 10-1700) | GM Therapy",
      description: "Adjustable-instability balance platform for graded balance and proprioception training.",
    },
  },

  "369": {
    productId: "369",
    slug: "cando-wobble-board-14in",
    tagline: "14\" round wobble board for ankle and knee proprioception.",
    overview: [
      "The CanDo 14\" Wobble Board is a clinical-standard round balance trainer. The fixed-height base provides multi-directional instability for training ankle and knee proprioception.",
      "Ideal for sports rehab, fall prevention, and dynamic balance progression.",
    ],
    highlights: [
      "14\" diameter — clinical standard",
      "Multi-directional wobble base",
      "Trains ankle and knee proprioception",
      "Improves balance and dynamic stability",
      "Non-slip top surface",
      "Sports rehab and fall prevention",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1715.jpg", alt: "CanDo Wobble Board — 14\" diameter" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Diameter", value: "14\"" },
          { label: "Type", value: "Round wobble board" },
          { label: "Surface", value: "Non-slip" },
          { label: "SKU", value: "FAB 10-1715" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/balance-boards-pads/miscellaneous-balance-boards-pads/",
    seo: {
      title: "CanDo Wobble Board — 14\" (FAB 10-1715) | GM Therapy",
      description: "14\" round wobble board for ankle/knee proprioception and balance training.",
    },
  },

  "370": {
    productId: "370",
    slug: "cando-mvp-balance-system",
    tagline: "Multi-Variable Platform balance system with three difficulty levels.",
    overview: [
      "The CanDo MVP (Multi-Variable Platform) Balance System provides three progressive difficulty levels via interchangeable bases — letting clinicians easily grade balance training as patients progress.",
      "Used in PT/OT, athletic training rooms, and fall-prevention programs.",
    ],
    highlights: [
      "Multi-Variable Platform (MVP) balance system",
      "Three difficulty levels via interchangeable bases",
      "Progressive instability training",
      "Trains balance, proprioception, and core stability",
      "PT/OT, athletic training, and fall prevention",
      "Durable clinical construction",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1760.jpg", alt: "CanDo MVP Balance System" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Multi-Variable Platform balance system" },
          { label: "Levels", value: "3 difficulty levels (interchangeable bases)" },
          { label: "SKU", value: "FAB 10-1760" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/balance-boards-pads/mvp-balance-system/",
    seo: {
      title: "CanDo MVP Balance System (FAB 10-1760) | GM Therapy",
      description: "MVP balance platform with 3 difficulty levels for graded balance training.",
    },
  },

  "371": {
    productId: "371",
    slug: "theraband-latex-free-band-roll-black-special-heavy-50yd",
    tagline: "Bulk latex-free TheraBand roll — Black (Special Heavy), 50 yards.",
    overview: [
      "Latex-free TheraBand® bulk roll lets clinics cut bands to any length while supporting patients with latex allergies. Black is Special Heavy resistance — the highest standard resistance level — ideal for advanced strengthening and high-load rehab protocols.",
      "Color-coded resistance lets clinicians document and progress with the same TheraBand standard used worldwide.",
    ],
    highlights: [
      "Latex-free — safe for latex-allergy patients",
      "Black — Special Heavy resistance",
      "50 yard bulk roll — cuts to length",
      "Color-coded progressive resistance",
      "Ideal for advanced strengthening protocols",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1199.jpg", alt: "TheraBand Latex-Free Exercise Band Roll — Black Special Heavy 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Bulk band roll" },
          { label: "Resistance", value: "Black — Special Heavy" },
          { label: "Length", value: "50 yd" },
          { label: "Material", value: "Latex-free synthetic" },
          { label: "SKU", value: "FAB 10-1199" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/resistance-bands/theraband-latex-free-exercise-band/",
    seo: {
      title: "TheraBand Latex-Free Black Special Heavy 50 yd (FAB 10-1199) | GM Therapy",
      description: "Bulk latex-free TheraBand roll, Black Special Heavy resistance, 50 yards. Cuts to length.",
    },
  },

  "372": {
    productId: "372",
    slug: "exercise-band-tubing-storage-rack",
    tagline: "Wall-mounted dispenser/storage rack for exercise band rolls.",
    overview: [
      "Keep clinic exercise bands organized and easily accessible with this wall-mounted storage rack. Holds multiple rolls of bands or tubing — saves counter space in busy treatment rooms and therapy gyms.",
      "Heavy-duty steel construction — built for clinical use.",
    ],
    highlights: [
      "Wall-mounted band/tubing storage rack",
      "Holds multiple rolls of bands",
      "Saves counter space",
      "Heavy-duty steel construction",
      "Ideal for PT/OT clinics and therapy gyms",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1570.jpg", alt: "Exercise Band & Tubing Storage Rack" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Wall-mounted band/tubing storage rack" },
          { label: "Construction", value: "Heavy-duty steel" },
          { label: "SKU", value: "FAB 10-1570" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/resistance-bands/exercise-band-and-tubing-storage-racks/",
    seo: {
      title: "Exercise Band & Tubing Storage Rack (FAB 10-1570) | GM Therapy",
      description: "Wall-mounted storage rack for exercise band and tubing rolls. Heavy-duty steel.",
    },
  },

  "373": {
    productId: "373",
    slug: "val-u-putty-yellow-xsoft-2oz",
    tagline: "Economy hand-therapy putty — Yellow X-Soft, 2 oz.",
    overview: [
      "Val-u-Putty is the economy alternative to TheraPutty® — same color-coded progressive resistance system at a value price. Yellow is X-Soft, the lightest resistance, ideal for early-stage rehab and pediatric use.",
      "Non-toxic, non-staining, latex-free.",
    ],
    highlights: [
      "Economy alternative to TheraPutty",
      "Yellow — X-Soft resistance",
      "2 oz portion",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Ideal for early-stage rehab and pediatric use",
    ],
    gallery: [
      { src: "/assets/products/fab/10-3900.jpg", alt: "Val-u-Putty Yellow X-Soft 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Resistance", value: "Yellow — X-Soft" },
          { label: "Size", value: "2 oz" },
          { label: "Material", value: "Latex-free, non-toxic" },
          { label: "SKU", value: "FAB 10-3900" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/exercise-putty/val-u-putty-exercise-putty/",
    seo: {
      title: "Val-u-Putty Yellow X-Soft 2 oz (FAB 10-3900) | GM Therapy",
      description: "Economy hand-therapy putty, Yellow X-Soft 2 oz. Latex-free, color-coded resistance.",
    },
  },

  "375": {
    productId: "375",
    slug: "cando-bungee-cord-exerciser-system",
    tagline: "Bungee cord resistance training system — full-body functional training.",
    overview: [
      "The CanDo Bungee Cord Exerciser System uses color-coded bungee cords for progressive resistance training. Includes attachment hardware for door, wall, or rack mounting — turning any treatment room into a versatile functional-training station.",
      "A compact, latex-free alternative to cable machines.",
    ],
    highlights: [
      "Color-coded progressive bungee cord resistance",
      "Includes attachment hardware (door, wall, rack)",
      "Versatile — full-body functional resistance training",
      "Latex-free bungee cords",
      "Compact alternative to cable machines",
      "Durable clinical construction",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5800.jpg", alt: "CanDo Bungee Cord Exerciser System" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Type", value: "Bungee cord resistance system" },
          { label: "Resistance", value: "Color-coded progressive levels" },
          { label: "Mounting", value: "Door, wall, or rack hardware included" },
          { label: "SKU", value: "FAB 10-5800" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/resistance-tubing/cando-bungee-cord-exerciser-system/",
    seo: {
      title: "CanDo Bungee Cord Exerciser System (FAB 10-5800) | GM Therapy",
      description: "Bungee cord resistance training system with door/wall/rack mounts. Latex-free progressive resistance.",
    },
  },

  "376": {
    productId: "376",
    slug: "agility-cone-set-9in",
    tagline: "9\" stand-up agility cones for gait training and drills.",
    overview: [
      "Agility / marker cone set with 9\" stand-up bases. High-visibility color coding makes them ideal for gait training, agility drills, obstacle courses, and group exercise classes.",
      "Lightweight molded plastic — stackable for storage.",
    ],
    highlights: [
      "9\" tall stand-up cones",
      "High-visibility colors (orange/yellow/green/red)",
      "Ideal for gait training, agility drills, obstacle courses",
      "Durable molded plastic",
      "Lightweight and stackable for storage",
    ],
    gallery: [
      { src: "/assets/products/fab/10-4200.jpg", alt: "Agility Cone Set — 9\" stand-up base" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Height", value: "9\"" },
          { label: "Base", value: "Stand-up" },
          { label: "Material", value: "Molded plastic" },
          { label: "SKU", value: "FAB 10-4200" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/exercise/fitness-accessories/agility-cone/",
    seo: {
      title: "Agility Cone Set — 9\" (FAB 10-4200) | GM Therapy",
      description: "9\" stand-up agility cones for gait training, agility drills, and obstacle courses.",
    },
  },
  "377": {
    productId: "377",
    slug: "soothing-touch-basics-lotion-unscented-1-gallon",
    tagline: "Professional massage lotion — unscented",
    overview: [
      "Soothing Touch Basics Lotion — Unscented, 1 Gallon — Professional massage lotion — unscented.",
      "1 gallon size for clinical use Light, non-greasy formula.",
    ],
    highlights: [
      "Professional massage lotion — unscented",
      "1 gallon size for clinical use",
      "Light, non-greasy formula",
      "Absorbs smoothly without staining linens",
      "Ideal for massage therapy and bodywork",
    ],
    gallery: [
      { src: "/assets/products/fab/13-3231.jpg", alt: "Soothing Touch Basics Lotion — Unscented, 1 Gallon" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Massage Supplies" },
          { label: "SKU", value: "FAB 13-3231" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/133231",
    seo: {
      title: "Soothing Touch Basics Lotion — Unscented, 1 Gallon (FAB 13-3231) | GM Therapy",
      description: "Professional massage lotion — unscented",
    },
  },

  "378": {
    productId: "378",
    slug: "fablife-reaching-aid-pistol-grip-open-jaw-26",
    tagline: "26\\\" reaching aid with pistol grip handle",
    overview: [
      "FabLife Reaching Aid — Pistol Grip, Open Jaw, 26\\\" — 26\\\" reaching aid with pistol grip handle.",
      "Open-jaw design for grasping a variety of items Lightweight aluminum shaft.",
    ],
    highlights: [
      "26\\\" reaching aid with pistol grip handle",
      "Open-jaw design for grasping a variety of items",
      "Lightweight aluminum shaft",
      "Magnetic tip for picking up small metal objects",
      "Ideal for ADL training and post-surgical recovery",
    ],
    gallery: [
      { src: "/assets/products/fab/50-1100.jpg", alt: "FabLife Reaching Aid — Pistol Grip, Open Jaw, 26\\\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 50-1100" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/501100",
    seo: {
      title: "FabLife Reaching Aid — Pistol Grip, Open Jaw, 26\\\" (FAB 50-1100) | GM Therapy",
      description: "26\\\" reaching aid with pistol grip handle",
    },
  },

  "379": {
    productId: "379",
    slug: "cando-latex-free-exercise-band-red-light-50-yd-dispenser",
    tagline: "Latex-free resistance band — Red (Light)",
    overview: [
      "CanDo Latex-Free Exercise Band — Red (Light), 50 yd Dispenser — Latex-free resistance band — Red (Light).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Latex-free resistance band — Red (Light)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5622.jpg", alt: "CanDo Latex-Free Exercise Band — Red (Light), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5622" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105622",
    seo: {
      title: "CanDo Latex-Free Exercise Band — Red (Light), 50 yd Dispenser (FAB 10-5622) | GM Therapy",
      description: "Latex-free resistance band — Red (Light)",
    },
  },

  "380": {
    productId: "380",
    slug: "theraputty-exercise-putty-set-4-pieces-2-oz-yellow-blue",
    tagline: "Set of 4 TheraPutty exercise putty containers, 2 oz each",
    overview: [
      "TheraPutty Exercise Putty Set — 4 pieces, 2 oz (Yellow–Blue) — Set of 4 TheraPutty exercise putty containers, 2 oz each.",
      "Includes one each: Yellow (X-Soft), Red (Soft), Green (Medium), Blue (Firm) Color-coded progressive hand and finger resistance.",
    ],
    highlights: [
      "Set of 4 TheraPutty exercise putty containers, 2 oz each",
      "Includes one each: Yellow (X-Soft), Red (Soft), Green (Medium), Blue (Firm)",
      "Color-coded progressive hand and finger resistance",
      "Non-toxic, non-staining, latex-free",
      "Ideal starter set for hand therapy",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1474.jpg", alt: "TheraPutty Exercise Putty Set — 4 pieces, 2 oz (Yellow–Blue)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-1474" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/101474",
    seo: {
      title: "TheraPutty Exercise Putty Set — 4 pieces, 2 oz (Yellow–Blue) (FAB 10-1474) | GM Therapy",
      description: "Set of 4 TheraPutty exercise putty containers, 2 oz each",
    },
  },

  "383": {
    productId: "383",
    slug: "cando-latex-free-exercise-band-green-medium-50-yd-dispenser",
    tagline: "Latex-free resistance band — Green (Medium)",
    overview: [
      "CanDo Latex-Free Exercise Band — Green (Medium), 50 yd Dispenser — Latex-free resistance band — Green (Medium).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Latex-free resistance band — Green (Medium)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5623.jpg", alt: "CanDo Latex-Free Exercise Band — Green (Medium), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5623" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105623",
    seo: {
      title: "CanDo Latex-Free Exercise Band — Green (Medium), 50 yd Dispenser (FAB 10-5623) | GM Therapy",
      description: "Latex-free resistance band — Green (Medium)",
    },
  },

  "384": {
    productId: "384",
    slug: "theraputty-exercise-putty-blue-firm-2-oz",
    tagline: "Hand-therapy exercise putty — Blue (Firm)",
    overview: [
      "TheraPutty Exercise Putty — Blue (Firm), 2 oz — Hand-therapy exercise putty — Blue (Firm).",
      "2 oz portion Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Blue (Firm)",
      "2 oz portion",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0903.jpg", alt: "TheraPutty Exercise Putty — Blue (Firm), 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0903" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100903",
    seo: {
      title: "TheraPutty Exercise Putty — Blue (Firm), 2 oz (FAB 10-0903) | GM Therapy",
      description: "Hand-therapy exercise putty — Blue (Firm)",
    },
  },

  "385": {
    productId: "385",
    slug: "soothing-touch-jojoba-lotion-unscented-1-gallon",
    tagline: "Premium jojoba-based massage lotion",
    overview: [
      "Soothing Touch Jojoba Lotion — Unscented, 1 Gallon — Premium jojoba-based massage lotion.",
      "Unscented — 1 gallon size Smooth glide with excellent absorption.",
    ],
    highlights: [
      "Premium jojoba-based massage lotion",
      "Unscented — 1 gallon size",
      "Smooth glide with excellent absorption",
      "Non-greasy, non-staining formula",
      "Ideal for sensitive skin and clinical massage therapy",
    ],
    gallery: [
      { src: "/assets/products/fab/13-3227.jpg", alt: "Soothing Touch Jojoba Lotion — Unscented, 1 Gallon" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Massage Supplies" },
          { label: "SKU", value: "FAB 13-3227" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/133227",
    seo: {
      title: "Soothing Touch Jojoba Lotion — Unscented, 1 Gallon (FAB 13-3227) | GM Therapy",
      description: "Premium jojoba-based massage lotion",
    },
  },

  "387": {
    productId: "387",
    slug: "soothing-touch-unscented-oil-nut-free-1-gallon",
    tagline: "Professional massage oil — unscented and nut-free",
    overview: [
      "Soothing Touch Unscented Oil — Nut Free, 1 Gallon — Professional massage oil — unscented and nut-free.",
      "1 gallon size for clinical use Smooth, long-lasting glide.",
    ],
    highlights: [
      "Professional massage oil — unscented and nut-free",
      "1 gallon size for clinical use",
      "Smooth, long-lasting glide",
      "Safe for patients with nut allergies",
      "Ideal for deep-tissue and Swedish massage techniques",
    ],
    gallery: [
      { src: "/assets/products/fab/13-3226.jpg", alt: "Soothing Touch Unscented Oil — Nut Free, 1 Gallon" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Massage Supplies" },
          { label: "SKU", value: "FAB 13-3226" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/133226",
    seo: {
      title: "Soothing Touch Unscented Oil — Nut Free, 1 Gallon (FAB 13-3226) | GM Therapy",
      description: "Professional massage oil — unscented and nut-free",
    },
  },

  "388": {
    productId: "388",
    slug: "baseline-digital-timer",
    tagline: "Digital timer for clinical and therapy use",
    overview: [
      "Baseline Digital Timer — Digital timer for clinical and therapy use.",
      "Large LCD display — easy to read Count-up and count-down modes.",
    ],
    highlights: [
      "Digital timer for clinical and therapy use",
      "Large LCD display — easy to read",
      "Count-up and count-down modes",
      "Magnetic back, clip, and stand for flexible placement",
      "Loud alarm — ideal for treatment sessions and exercise timing",
    ],
    gallery: [
      { src: "/assets/products/fab/68-0016.jpg", alt: "Baseline Digital Timer" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Assessment Tools" },
          { label: "SKU", value: "FAB 68-0016" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/680016",
    seo: {
      title: "Baseline Digital Timer (FAB 68-0016) | GM Therapy",
      description: "Digital timer for clinical and therapy use",
    },
  },

  "389": {
    productId: "389",
    slug: "relief-pak-moist-heat-pack-neck",
    tagline: "Moist heat therapy pack — neck/contour size",
    overview: [
      "Relief Pak Moist Heat Pack — Neck — Moist heat therapy pack — neck/contour size.",
      "Hydrocollator-style — retains heat for 30+ minutes Filled with hydrophilic silicate beads.",
    ],
    highlights: [
      "Moist heat therapy pack — neck/contour size",
      "Hydrocollator-style — retains heat for 30+ minutes",
      "Filled with hydrophilic silicate beads",
      "Provides deep, soothing moist heat",
      "Ideal for cervical and upper-back pain relief",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1311.jpg", alt: "Relief Pak Moist Heat Pack — Neck" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1311" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111311",
    seo: {
      title: "Relief Pak Moist Heat Pack — Neck (FAB 11-1311) | GM Therapy",
      description: "Moist heat therapy pack — neck/contour size",
    },
  },

  "392": {
    productId: "392",
    slug: "cuff-weight-1-lb-blue",
    tagline: "Adjustable cuff weight — 1 lb (Blue)",
    overview: [
      "Cuff Weight — 1 lb, Blue — Adjustable cuff weight — 1 lb (Blue).",
      "Soft, comfortable nylon shell with hook-and-loop closure Fits wrist or ankle.",
    ],
    highlights: [
      "Adjustable cuff weight — 1 lb (Blue)",
      "Soft, comfortable nylon shell with hook-and-loop closure",
      "Fits wrist or ankle",
      "Color-coded by weight for easy identification",
      "Ideal for gait training, ROM, and strengthening exercises",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0203.jpg", alt: "Cuff Weight — 1 lb, Blue" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-0203" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100203",
    seo: {
      title: "Cuff Weight — 1 lb, Blue (FAB 10-0203) | GM Therapy",
      description: "Adjustable cuff weight — 1 lb (Blue)",
    },
  },

  "393": {
    productId: "393",
    slug: "theraputty-exercise-putty-green-medium-4-oz",
    tagline: "Hand-therapy exercise putty — Green (Medium)",
    overview: [
      "TheraPutty Exercise Putty — Green (Medium), 4 oz — Hand-therapy exercise putty — Green (Medium).",
      "4 oz portion — larger size for extended use Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Green (Medium)",
      "4 oz portion — larger size for extended use",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0907.jpg", alt: "TheraPutty Exercise Putty — Green (Medium), 4 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0907" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100907",
    seo: {
      title: "TheraPutty Exercise Putty — Green (Medium), 4 oz (FAB 10-0907) | GM Therapy",
      description: "Hand-therapy exercise putty — Green (Medium)",
    },
  },

  "395": {
    productId: "395",
    slug: "relief-pak-moist-heat-pack-oversize",
    tagline: "Moist heat therapy pack — oversize",
    overview: [
      "Relief Pak Moist Heat Pack — Oversize — Moist heat therapy pack — oversize.",
      "Hydrocollator-style — retains heat for 30+ minutes Filled with hydrophilic silicate beads.",
    ],
    highlights: [
      "Moist heat therapy pack — oversize",
      "Hydrocollator-style — retains heat for 30+ minutes",
      "Filled with hydrophilic silicate beads",
      "Large coverage area for back, hips, or shoulders",
      "Provides deep, soothing moist heat",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1312.jpg", alt: "Relief Pak Moist Heat Pack — Oversize" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1312" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111312",
    seo: {
      title: "Relief Pak Moist Heat Pack — Oversize (FAB 11-1312) | GM Therapy",
      description: "Moist heat therapy pack — oversize",
    },
  },

  "397": {
    productId: "397",
    slug: "cando-exercise-band-loop-yellow-x-light-10",
    tagline: "Pre-made latex exercise band loop",
    overview: [
      "CanDo Exercise Band Loop — Yellow (X-Light), 10\\\" — Pre-made latex exercise band loop.",
      "10\\\" length — Yellow / X-Light resistance Color-coded progressive resistance.",
    ],
    highlights: [
      "Pre-made latex exercise band loop",
      "10\\\" length — Yellow / X-Light resistance",
      "Color-coded progressive resistance",
      "Ideal for hip, glute, and lower-extremity activation",
      "Convenient closed-loop design — no tying required",
      "Sold individually",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5251.jpg", alt: "CanDo Exercise Band Loop — Yellow (X-Light), 10\\\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5251" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105251",
    seo: {
      title: "CanDo Exercise Band Loop — Yellow (X-Light), 10\\\" (FAB 10-5251) | GM Therapy",
      description: "Pre-made latex exercise band loop",
    },
  },

  "398": {
    productId: "398",
    slug: "theraputty-exercise-putty-blue-firm-4-oz",
    tagline: "Hand-therapy exercise putty — Blue (Firm)",
    overview: [
      "TheraPutty Exercise Putty — Blue (Firm), 4 oz — Hand-therapy exercise putty — Blue (Firm).",
      "4 oz portion — larger size for extended use Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Blue (Firm)",
      "4 oz portion — larger size for extended use",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0908.jpg", alt: "TheraPutty Exercise Putty — Blue (Firm), 4 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0908" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100908",
    seo: {
      title: "TheraPutty Exercise Putty — Blue (Firm), 4 oz (FAB 10-0908) | GM Therapy",
      description: "Hand-therapy exercise putty — Blue (Firm)",
    },
  },

  "399": {
    productId: "399",
    slug: "theraputty-exercise-putty-red-soft-6-oz",
    tagline: "Hand-therapy exercise putty — Red (Soft)",
    overview: [
      "TheraPutty Exercise Putty — Red (Soft), 6 oz — Hand-therapy exercise putty — Red (Soft).",
      "6 oz portion — extended-use size Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Red (Soft)",
      "6 oz portion — extended-use size",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0911.jpg", alt: "TheraPutty Exercise Putty — Red (Soft), 6 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0911" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100911",
    seo: {
      title: "TheraPutty Exercise Putty — Red (Soft), 6 oz (FAB 10-0911) | GM Therapy",
      description: "Hand-therapy exercise putty — Red (Soft)",
    },
  },

  "400": {
    productId: "400",
    slug: "theraputty-exercise-putty-red-soft-1-lb",
    tagline: "Hand-therapy exercise putty — Red (Soft)",
    overview: [
      "TheraPutty Exercise Putty — Red (Soft), 1 lb — Hand-therapy exercise putty — Red (Soft).",
      "1 lb bulk size for clinic use Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Red (Soft)",
      "1 lb bulk size for clinic use",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Cost-effective for high-volume rehab",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0919.jpg", alt: "TheraPutty Exercise Putty — Red (Soft), 1 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0919" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100919",
    seo: {
      title: "TheraPutty Exercise Putty — Red (Soft), 1 lb (FAB 10-0919) | GM Therapy",
      description: "Hand-therapy exercise putty — Red (Soft)",
    },
  },

  "401": {
    productId: "401",
    slug: "cando-exercise-band-green-medium-50-yd-dispenser",
    tagline: "Latex resistance band — Green (Medium)",
    overview: [
      "CanDo Exercise Band — Green (Medium), 50 yd Dispenser — Latex resistance band — Green (Medium).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Latex resistance band — Green (Medium)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Standard clinical strengthening tool",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5223.jpg", alt: "CanDo Exercise Band — Green (Medium), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5223" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105223",
    seo: {
      title: "CanDo Exercise Band — Green (Medium), 50 yd Dispenser (FAB 10-5223) | GM Therapy",
      description: "Latex resistance band — Green (Medium)",
    },
  },

  "402": {
    productId: "402",
    slug: "relief-pak-moist-heat-pack-standard",
    tagline: "Moist heat therapy pack — standard size",
    overview: [
      "Relief Pak Moist Heat Pack — Standard — Moist heat therapy pack — standard size.",
      "Hydrocollator-style — retains heat for 30+ minutes Filled with hydrophilic silicate beads.",
    ],
    highlights: [
      "Moist heat therapy pack — standard size",
      "Hydrocollator-style — retains heat for 30+ minutes",
      "Filled with hydrophilic silicate beads",
      "Provides deep, soothing moist heat",
      "Ideal for general muscle relaxation and pain relief",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1310.jpg", alt: "Relief Pak Moist Heat Pack — Standard" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1310" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111310",
    seo: {
      title: "Relief Pak Moist Heat Pack — Standard (FAB 11-1310) | GM Therapy",
      description: "Moist heat therapy pack — standard size",
    },
  },

  "403": {
    productId: "403",
    slug: "cando-exercise-band-red-light-50-yd-dispenser",
    tagline: "Latex resistance band — Red (Light)",
    overview: [
      "CanDo Exercise Band — Red (Light), 50 yd Dispenser — Latex resistance band — Red (Light).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Latex resistance band — Red (Light)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Standard clinical strengthening tool",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5222.jpg", alt: "CanDo Exercise Band — Red (Light), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5222" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105222",
    seo: {
      title: "CanDo Exercise Band — Red (Light), 50 yd Dispenser (FAB 10-5222) | GM Therapy",
      description: "Latex resistance band — Red (Light)",
    },
  },

  "404": {
    productId: "404",
    slug: "hip-kit-1-reacher-sponge-sock-aid-shoehorn",
    tagline: "Complete post-op hip kit for ADL training",
    overview: [
      "Hip Kit #1 — Reacher, Sponge, Sock Aid, Shoehorn — Complete post-op hip kit for ADL training.",
      "26\\\" reacher Contoured long-handle bath sponge.",
    ],
    highlights: [
      "Complete post-op hip kit for ADL training",
      "26\\\" reacher",
      "Contoured long-handle bath sponge",
      "Sock and stocking aid",
      "18\\\" plastic shoehorn",
      "Ideal for hip/knee replacement recovery",
    ],
    gallery: [
      { src: "/assets/products/fab/86-0070.jpg", alt: "Hip Kit #1 — Reacher, Sponge, Sock Aid, Shoehorn" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 86-0070" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/860070",
    seo: {
      title: "Hip Kit #1 — Reacher, Sponge, Sock Aid, Shoehorn (FAB 86-0070) | GM Therapy",
      description: "Complete post-op hip kit for ADL training",
    },
  },

  "405": {
    productId: "405",
    slug: "valutrode-electrodes-white-foam-3-x-5-pair",
    tagline: "Reusable self-adhesive electrodes",
    overview: [
      "ValuTrode Electrodes — White Foam, 3\\\" x 5\\\" (Pair) — Reusable self-adhesive electrodes.",
      "3\\\" x 5\\\" rectangular — pair White foam backing with multi-stick gel.",
    ],
    highlights: [
      "Reusable self-adhesive electrodes",
      "3\\\" x 5\\\" rectangular — pair",
      "White foam backing with multi-stick gel",
      "Compatible with most TENS, EMS, and IF stim units",
      "Long-lasting clinical-grade adhesive",
    ],
    gallery: [
      { src: "/assets/products/fab/13-1235-2.jpg", alt: "ValuTrode Electrodes — White Foam, 3\\\" x 5\\\" (Pair)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Electrodes & Supplies" },
          { label: "SKU", value: "FAB 13-1235-2" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/1312352",
    seo: {
      title: "ValuTrode Electrodes — White Foam, 3\\\" x 5\\\" (Pair) (FAB 13-1235-2) | GM Therapy",
      description: "Reusable self-adhesive electrodes",
    },
  },

  "406": {
    productId: "406",
    slug: "cuff-weight-2-5-lb-red",
    tagline: "Adjustable cuff weight — 2.5 lb (Red)",
    overview: [
      "Cuff Weight — 2.5 lb, Red — Adjustable cuff weight — 2.5 lb (Red).",
      "Soft, comfortable nylon shell with hook-and-loop closure Fits wrist or ankle.",
    ],
    highlights: [
      "Adjustable cuff weight — 2.5 lb (Red)",
      "Soft, comfortable nylon shell with hook-and-loop closure",
      "Fits wrist or ankle",
      "Color-coded by weight for easy identification",
      "Ideal for gait training, ROM, and strengthening exercises",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0206.jpg", alt: "Cuff Weight — 2.5 lb, Red" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-0206" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100206",
    seo: {
      title: "Cuff Weight — 2.5 lb, Red (FAB 10-0206) | GM Therapy",
      description: "Adjustable cuff weight — 2.5 lb (Red)",
    },
  },

  "407": {
    productId: "407",
    slug: "cando-latex-free-exercise-band-blue-heavy-50-yd-dispenser",
    tagline: "Latex-free resistance band — Blue (Heavy)",
    overview: [
      "CanDo Latex-Free Exercise Band — Blue (Heavy), 50 yd Dispenser — Latex-free resistance band — Blue (Heavy).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Latex-free resistance band — Blue (Heavy)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5624.jpg", alt: "CanDo Latex-Free Exercise Band — Blue (Heavy), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5624" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105624",
    seo: {
      title: "CanDo Latex-Free Exercise Band — Blue (Heavy), 50 yd Dispenser (FAB 10-5624) | GM Therapy",
      description: "Latex-free resistance band — Blue (Heavy)",
    },
  },

  "408": {
    productId: "408",
    slug: "theraputty-exercise-putty-yellow-x-soft-4-oz",
    tagline: "Hand-therapy exercise putty — Yellow (X-Soft)",
    overview: [
      "TheraPutty Exercise Putty — Yellow (X-Soft), 4 oz — Hand-therapy exercise putty — Yellow (X-Soft).",
      "4 oz portion — larger size for extended use Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Yellow (X-Soft)",
      "4 oz portion — larger size for extended use",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Ideal for early-stage hand rehab",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0905.jpg", alt: "TheraPutty Exercise Putty — Yellow (X-Soft), 4 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0905" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100905",
    seo: {
      title: "TheraPutty Exercise Putty — Yellow (X-Soft), 4 oz (FAB 10-0905) | GM Therapy",
      description: "Hand-therapy exercise putty — Yellow (X-Soft)",
    },
  },

  "409": {
    productId: "409",
    slug: "cuff-weight-2-lb-white",
    tagline: "Adjustable cuff weight — 2 lb (White)",
    overview: [
      "Cuff Weight — 2 lb, White — Adjustable cuff weight — 2 lb (White).",
      "Soft, comfortable nylon shell with hook-and-loop closure Fits wrist or ankle.",
    ],
    highlights: [
      "Adjustable cuff weight — 2 lb (White)",
      "Soft, comfortable nylon shell with hook-and-loop closure",
      "Fits wrist or ankle",
      "Color-coded by weight for easy identification",
      "Ideal for gait training, ROM, and strengthening exercises",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0205.jpg", alt: "Cuff Weight — 2 lb, White" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-0205" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100205",
    seo: {
      title: "Cuff Weight — 2 lb, White (FAB 10-0205) | GM Therapy",
      description: "Adjustable cuff weight — 2 lb (White)",
    },
  },

  "410": {
    productId: "410",
    slug: "cuff-weight-3-lb-gold",
    tagline: "Adjustable cuff weight — 3 lb (Gold)",
    overview: [
      "Cuff Weight — 3 lb, Gold — Adjustable cuff weight — 3 lb (Gold).",
      "Soft, comfortable nylon shell with hook-and-loop closure Fits wrist or ankle.",
    ],
    highlights: [
      "Adjustable cuff weight — 3 lb (Gold)",
      "Soft, comfortable nylon shell with hook-and-loop closure",
      "Fits wrist or ankle",
      "Color-coded by weight for easy identification",
      "Ideal for gait training, ROM, and strengthening exercises",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0207.jpg", alt: "Cuff Weight — 3 lb, Gold" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-0207" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100207",
    seo: {
      title: "Cuff Weight — 3 lb, Gold (FAB 10-0207) | GM Therapy",
      description: "Adjustable cuff weight — 3 lb (Gold)",
    },
  },

  "411": {
    productId: "411",
    slug: "palmer-s-cocoa-butter-7-25-oz-jar",
    tagline: "Palmer's Cocoa Butter Formula — 7.25 oz jar",
    overview: [
      "Palmer's Cocoa Butter — 7.25 oz Jar — Palmer's Cocoa Butter Formula — 7.25 oz jar.",
      "Rich, creamy moisturizer with vitamin E Helps soften scars, stretch marks, and dry skin.",
    ],
    highlights: [
      "Palmer's Cocoa Butter Formula — 7.25 oz jar",
      "Rich, creamy moisturizer with vitamin E",
      "Helps soften scars, stretch marks, and dry skin",
      "Ideal for massage and post-treatment skin care",
      "Pleasant cocoa butter scent",
    ],
    gallery: [
      { src: "/assets/products/fab/70-0170.jpg", alt: "Palmer's Cocoa Butter — 7.25 oz Jar" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Massage Supplies" },
          { label: "SKU", value: "FAB 70-0170" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/700170",
    seo: {
      title: "Palmer's Cocoa Butter — 7.25 oz Jar (FAB 70-0170) | GM Therapy",
      description: "Palmer's Cocoa Butter Formula — 7.25 oz jar",
    },
  },

  "412": {
    productId: "412",
    slug: "cando-latex-free-exercise-band-yellow-x-light-50-yd-dispense",
    tagline: "Latex-free resistance band — Yellow (X-Light)",
    overview: [
      "CanDo Latex-Free Exercise Band — Yellow (X-Light), 50 yd Dispenser — Latex-free resistance band — Yellow (X-Light).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Latex-free resistance band — Yellow (X-Light)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5621.jpg", alt: "CanDo Latex-Free Exercise Band — Yellow (X-Light), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5621" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105621",
    seo: {
      title: "CanDo Latex-Free Exercise Band — Yellow (X-Light), 50 yd Dispenser (FAB 10-5621) | GM Therapy",
      description: "Latex-free resistance band — Yellow (X-Light)",
    },
  },

  "413": {
    productId: "413",
    slug: "cando-overdoor-shoulder-pulley-with-anchor",
    tagline: "Overdoor shoulder exerciser with pulley and anchor nub",
    overview: [
      "CanDo Overdoor Shoulder Pulley with Anchor — Overdoor shoulder exerciser with pulley and anchor nub.",
      "Improves shoulder ROM and flexibility Easy setup — anchors over any standard door.",
    ],
    highlights: [
      "Overdoor shoulder exerciser with pulley and anchor nub",
      "Improves shoulder ROM and flexibility",
      "Easy setup — anchors over any standard door",
      "Padded handles for comfortable grip",
      "Ideal for post-op shoulder rehab and frozen shoulder",
    ],
    gallery: [
      { src: "/assets/products/fab/50-1023.jpg", alt: "CanDo Overdoor Shoulder Pulley with Anchor" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Shoulder Rehab" },
          { label: "SKU", value: "FAB 50-1023" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/501023",
    seo: {
      title: "CanDo Overdoor Shoulder Pulley with Anchor (FAB 50-1023) | GM Therapy",
      description: "Overdoor shoulder exerciser with pulley and anchor nub",
    },
  },

  "414": {
    productId: "414",
    slug: "theraputty-exercise-putty-set-6-pieces-2-oz",
    tagline: "Complete TheraPutty set — 6 colors, 2 oz each",
    overview: [
      "TheraPutty Exercise Putty Set — 6 pieces, 2 oz — Complete TheraPutty set — 6 colors, 2 oz each.",
      "Includes Tan (XX-Soft), Yellow (X-Soft), Red (Soft), Green (Medium), Blue (Firm), Black (X-Firm) Color-coded progressive resistance.",
    ],
    highlights: [
      "Complete TheraPutty set — 6 colors, 2 oz each",
      "Includes Tan (XX-Soft), Yellow (X-Soft), Red (Soft), Green (Medium), Blue (Firm), Black (X-Firm)",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Full progression set for hand-therapy programs",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1480.jpg", alt: "TheraPutty Exercise Putty Set — 6 pieces, 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-1480" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/101480",
    seo: {
      title: "TheraPutty Exercise Putty Set — 6 pieces, 2 oz (FAB 10-1480) | GM Therapy",
      description: "Complete TheraPutty set — 6 colors, 2 oz each",
    },
  },


  "416": {
    productId: "416",
    slug: "iontopatch-stat-iontophoresis-patches-80-ma-min-6-pack",
    tagline: "Self-contained iontophoresis delivery system",
    overview: [
      "IontoPatch STAT Iontophoresis Patches — 80 mA-min, 6/Pack — Self-contained iontophoresis delivery system.",
      "80 mA-min dose — STAT (rapid) version 6 patch/vial sets per pack.",
    ],
    highlights: [
      "Self-contained iontophoresis delivery system",
      "80 mA-min dose — STAT (rapid) version",
      "6 patch/vial sets per pack",
      "No external controller required",
      "Discrete, wearable patch design",
      "Used for delivery of charged medications via the skin",
    ],
    gallery: [
      { src: "/assets/products/fab/13-5223.jpg", alt: "IontoPatch STAT Iontophoresis Patches — 80 mA-min, 6/Pack" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-5223" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/135223",
    seo: {
      title: "IontoPatch STAT Iontophoresis Patches — 80 mA-min, 6/Pack (FAB 13-5223) | GM Therapy",
      description: "Self-contained iontophoresis delivery system",
    },
  },

  "417": {
    productId: "417",
    slug: "theraputty-exercise-putty-red-soft-4-oz",
    tagline: "Hand-therapy exercise putty — Red (Soft)",
    overview: [
      "TheraPutty Exercise Putty — Red (Soft), 4 oz — Hand-therapy exercise putty — Red (Soft).",
      "4 oz portion — extended-use size Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Red (Soft)",
      "4 oz portion — extended-use size",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0906.jpg", alt: "TheraPutty Exercise Putty — Red (Soft), 4 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0906" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100906",
    seo: {
      title: "TheraPutty Exercise Putty — Red (Soft), 4 oz (FAB 10-0906) | GM Therapy",
      description: "Hand-therapy exercise putty — Red (Soft)",
    },
  },

  "418": {
    productId: "418",
    slug: "cando-round-foam-roller-6-x-36-white",
    tagline: "Round foam roller — 6\\\" diameter x 36\\\" length",
    overview: [
      "CanDo Round Foam Roller — 6\\\" x 36\\\", White — Round foam roller — 6\\\" diameter x 36\\\" length.",
      "White, standard density For self-myofascial release, balance, and core training.",
    ],
    highlights: [
      "Round foam roller — 6\\\" diameter x 36\\\" length",
      "White, standard density",
      "For self-myofascial release, balance, and core training",
      "Lightweight closed-cell foam construction",
      "Smooth surface — clinical clinic standard",
    ],
    gallery: [
      { src: "/assets/products/fab/30-2100.jpg", alt: "CanDo Round Foam Roller — 6\\\" x 36\\\", White" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Foam Rollers" },
          { label: "SKU", value: "FAB 30-2100" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/302100",
    seo: {
      title: "CanDo Round Foam Roller — 6\\\" x 36\\\", White (FAB 30-2100) | GM Therapy",
      description: "Round foam roller — 6\\\" diameter x 36\\\" length",
    },
  },

  "419": {
    productId: "419",
    slug: "cando-high-density-half-foam-roller-6-x-36-black",
    tagline: "Half-round foam roller — 6\\\" x 36\\\"",
    overview: [
      "CanDo High-Density Half Foam Roller — 6\\\" x 36\\\", Black — Half-round foam roller — 6\\\" x 36\\\".",
      "High-density black foam — firmer than standard rollers Flat side prevents rolling — ideal for stability work.",
    ],
    highlights: [
      "Half-round foam roller — 6\\\" x 36\\\"",
      "High-density black foam — firmer than standard rollers",
      "Flat side prevents rolling — ideal for stability work",
      "Used for balance, core, and proprioception training",
      "Durable closed-cell foam construction",
    ],
    gallery: [
      { src: "/assets/products/fab/30-2290.jpg", alt: "CanDo High-Density Half Foam Roller — 6\\\" x 36\\\", Black" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Foam Rollers" },
          { label: "SKU", value: "FAB 30-2290" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/302290",
    seo: {
      title: "CanDo High-Density Half Foam Roller — 6\\\" x 36\\\", Black (FAB 30-2290) | GM Therapy",
      description: "Half-round foam roller — 6\\\" x 36\\\"",
    },
  },

  "420": {
    productId: "420",
    slug: "cando-band-tubing-accessory-kit-loop-stirrup-door-disc-handl",
    tagline: "Accessory kit for resistance bands and tubing",
    overview: [
      "CanDo Band & Tubing Accessory Kit — Loop Stirrup, Door Disc, Handles — Accessory kit for resistance bands and tubing.",
      "Includes loop stirrup, door anchor disc, and handle pair Expands the use of standard bands and tubing.",
    ],
    highlights: [
      "Accessory kit for resistance bands and tubing",
      "Includes loop stirrup, door anchor disc, and handle pair",
      "Expands the use of standard bands and tubing",
      "Compatible with most clinical resistance bands",
      "Ideal for clinics and home programs",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5334.jpg", alt: "CanDo Band & Tubing Accessory Kit — Loop Stirrup, Door Disc, Handles" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5334" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105334",
    seo: {
      title: "CanDo Band & Tubing Accessory Kit — Loop Stirrup, Door Disc, Handles (FAB 10-5334) | GM Therapy",
      description: "Accessory kit for resistance bands and tubing",
    },
  },

  "421": {
    productId: "421",
    slug: "fablife-dressing-stick-24",
    tagline: "24\\\" dressing stick with vinyl-coated hook and push/pull C-hook",
    overview: [
      "FabLife Dressing Stick — 24\\\" — 24\\\" dressing stick with vinyl-coated hook and push/pull C-hook.",
      "Helps don and doff clothing, jackets, and shoes Ideal for hip and shoulder restrictions.",
    ],
    highlights: [
      "24\\\" dressing stick with vinyl-coated hook and push/pull C-hook",
      "Helps don and doff clothing, jackets, and shoes",
      "Ideal for hip and shoulder restrictions",
      "Lightweight wood shaft",
      "Standard clinical ADL aid",
    ],
    gallery: [
      { src: "/assets/products/fab/86-0030.jpg", alt: "FabLife Dressing Stick — 24\\\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 86-0030" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/860030",
    seo: {
      title: "FabLife Dressing Stick — 24\\\" (FAB 86-0030) | GM Therapy",
      description: "24\\\" dressing stick with vinyl-coated hook and push/pull C-hook",
    },
  },

  "422": {
    productId: "422",
    slug: "cuff-weight-5-lb-black",
    tagline: "Adjustable cuff weight — 5 lb (Black)",
    overview: [
      "Cuff Weight — 5 lb, Black — Adjustable cuff weight — 5 lb (Black).",
      "Soft, comfortable nylon shell with hook-and-loop closure Fits wrist or ankle.",
    ],
    highlights: [
      "Adjustable cuff weight — 5 lb (Black)",
      "Soft, comfortable nylon shell with hook-and-loop closure",
      "Fits wrist or ankle",
      "Color-coded by weight for easy identification",
      "Ideal for gait training, ROM, and strengthening exercises",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0209.jpg", alt: "Cuff Weight — 5 lb, Black" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-0209" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100209",
    seo: {
      title: "Cuff Weight — 5 lb, Black (FAB 10-0209) | GM Therapy",
      description: "Adjustable cuff weight — 5 lb (Black)",
    },
  },

  "423": {
    productId: "423",
    slug: "cando-dynamic-stretch-strap",
    tagline: "Multi-loop dynamic stretching strap",
    overview: [
      "CanDo Dynamic Stretch Strap — Multi-loop dynamic stretching strap.",
      "Multiple grip loops for progressive stretches Ideal for hamstring, hip, and shoulder mobility.",
    ],
    highlights: [
      "Multi-loop dynamic stretching strap",
      "Multiple grip loops for progressive stretches",
      "Ideal for hamstring, hip, and shoulder mobility",
      "Improves flexibility and ROM",
      "Compact and easy to use in clinic or at home",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1385.jpg", alt: "CanDo Dynamic Stretch Strap" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Other" },
          { label: "SKU", value: "FAB 10-1385" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/101385",
    seo: {
      title: "CanDo Dynamic Stretch Strap (FAB 10-1385) | GM Therapy",
      description: "Multi-loop dynamic stretching strap",
    },
  },

  "424": {
    productId: "424",
    slug: "point-relief-lidospot-pain-relieving-patch-universal-4-x-6-5",
    tagline: "Topical lidocaine pain-relieving patch",
    overview: [
      "Point Relief LidoSpot Pain-Relieving Patch — Universal 4\\\" x 6\\\", 5/Pack — Topical lidocaine pain-relieving patch.",
      "Universal size — 4\\\" x 6\\\" 5 patches per pack.",
    ],
    highlights: [
      "Topical lidocaine pain-relieving patch",
      "Universal size — 4\\\" x 6\\\"",
      "5 patches per pack",
      "Provides targeted relief for muscle and joint pain",
      "Easy peel-and-stick application",
      "Discreet, wearable design",
    ],
    gallery: [
      { src: "/assets/products/fab/13-5310-5.jpg", alt: "Point Relief LidoSpot Pain-Relieving Patch — Universal 4\\\" x 6\\\", 5/Pack" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-5310-5" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/1353105",
    seo: {
      title: "Point Relief LidoSpot Pain-Relieving Patch — Universal 4\\\" x 6\\\", 5/Pack (FAB 13-5310-5) | GM Therapy",
      description: "Topical lidocaine pain-relieving patch",
    },
  },

  "425": {
    productId: "425",
    slug: "fablife-hip-kit-3-5-piece-adl-kit-32-reacher",
    tagline: "5-piece hip / ADL kit with 32\\\" reacher",
    overview: [
      "FabLife Hip Kit #3 — 5-Piece ADL Kit (32\\\" Reacher) — 5-piece hip / ADL kit with 32\\\" reacher.",
      "Includes: 32\\\" reacher, straight-handle bath sponge, deluxe sock aid, shoehorn, dressing stick Standard kit for post-op hip and knee precautions.",
    ],
    highlights: [
      "5-piece hip / ADL kit with 32\\\" reacher",
      "Includes: 32\\\" reacher, straight-handle bath sponge, deluxe sock aid, shoehorn, dressing stick",
      "Standard kit for post-op hip and knee precautions",
      "Helps patients dress, bathe, and reach independently",
      "Convenient bundle for discharge planning",
    ],
    gallery: [
      { src: "/assets/products/fab/86-0075.jpg", alt: "FabLife Hip Kit #3 — 5-Piece ADL Kit (32\\\" Reacher)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 86-0075" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/860075",
    seo: {
      title: "FabLife Hip Kit #3 — 5-Piece ADL Kit (32\\\" Reacher) (FAB 86-0075) | GM Therapy",
      description: "5-piece hip / ADL kit with 32\\\" reacher",
    },
  },

  "426": {
    productId: "426",
    slug: "theraputty-plus-antimicrobial-exercise-putty-green-medium-4-",
    tagline: "Antimicrobial hand-therapy putty — Green (Medium)",
    overview: [
      "TheraPutty Plus Antimicrobial Exercise Putty — Green (Medium), 4 oz — Antimicrobial hand-therapy putty — Green (Medium).",
      "4 oz portion — extended-use size Built-in antimicrobial agent inhibits bacteria, mold, and mildew.",
    ],
    highlights: [
      "Antimicrobial hand-therapy putty — Green (Medium)",
      "4 oz portion — extended-use size",
      "Built-in antimicrobial agent inhibits bacteria, mold, and mildew",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
    ],
    gallery: [
      { src: "/assets/products/fab/10-2623.jpg", alt: "TheraPutty Plus Antimicrobial Exercise Putty — Green (Medium), 4 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-2623" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/102623",
    seo: {
      title: "TheraPutty Plus Antimicrobial Exercise Putty — Green (Medium), 4 oz (FAB 10-2623) | GM Therapy",
      description: "Antimicrobial hand-therapy putty — Green (Medium)",
    },
  },

  "427": {
    productId: "427",
    slug: "cando-latex-free-band-pep-pack-easy-yellow-red-green",
    tagline: "PEP (Progressive Exercise Program) pack — Easy",
    overview: [
      "CanDo Latex-Free Band PEP Pack — Easy (Yellow / Red / Green) — PEP (Progressive Exercise Program) pack — Easy.",
      "Includes 3 latex-free bands: Yellow (X-Light), Red (Light), Green (Medium) Pre-cut lengths for individual home programs.",
    ],
    highlights: [
      "PEP (Progressive Exercise Program) pack — Easy",
      "Includes 3 latex-free bands: Yellow (X-Light), Red (Light), Green (Medium)",
      "Pre-cut lengths for individual home programs",
      "Color-coded progressive resistance",
      "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5680.jpg", alt: "CanDo Latex-Free Band PEP Pack — Easy (Yellow / Red / Green)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5680" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105680",
    seo: {
      title: "CanDo Latex-Free Band PEP Pack — Easy (Yellow / Red / Green) (FAB 10-5680) | GM Therapy",
      description: "PEP (Progressive Exercise Program) pack — Easy",
    },
  },

  "428": {
    productId: "428",
    slug: "cando-yoga-mat-68-x-24-x-1-6-blue-eco-friendly",
    tagline: "Eco-friendly yoga / exercise mat",
    overview: [
      "CanDo Yoga Mat — 68\\\" x 24\\\" x 1/6\\\", Blue (Eco-Friendly) — Eco-friendly yoga / exercise mat.",
      "68\\\" x 24\\\" x 1/6\\\" — blue Non-slip textured surface.",
    ],
    highlights: [
      "Eco-friendly yoga / exercise mat",
      "68\\\" x 24\\\" x 1/6\\\" — blue",
      "Non-slip textured surface",
      "Lightweight and easy to roll up for storage",
      "Ideal for floor exercises, stretching, and yoga",
      "PVC-free, latex-free",
    ],
    gallery: [
      { src: "/assets/products/fab/30-2400B.jpg", alt: "CanDo Yoga Mat — 68\\\" x 24\\\" x 1/6\\\", Blue (Eco-Friendly)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Other" },
          { label: "SKU", value: "FAB 30-2400B" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/302400b",
    seo: {
      title: "CanDo Yoga Mat — 68\\\" x 24\\\" x 1/6\\\", Blue (Eco-Friendly) (FAB 30-2400B) | GM Therapy",
      description: "Eco-friendly yoga / exercise mat",
    },
  },

  "429": {
    productId: "429",
    slug: "theraputty-exercise-putty-tan-xx-soft-2-oz",
    tagline: "Hand-therapy exercise putty — Tan (XX-Soft)",
    overview: [
      "TheraPutty Exercise Putty — Tan (XX-Soft), 2 oz — Hand-therapy exercise putty — Tan (XX-Soft).",
      "2 oz portion Lightest resistance — ideal for early rehab.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Tan (XX-Soft)",
      "2 oz portion",
      "Lightest resistance — ideal for early rehab",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0956.jpg", alt: "TheraPutty Exercise Putty — Tan (XX-Soft), 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0956" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100956",
    seo: {
      title: "TheraPutty Exercise Putty — Tan (XX-Soft), 2 oz (FAB 10-0956) | GM Therapy",
      description: "Hand-therapy exercise putty — Tan (XX-Soft)",
    },
  },

  "430": {
    productId: "430",
    slug: "waxwel-paraffin-bath-6-lb-unscented-paraffin-liners-mitt-boo",
    tagline: "Complete paraffin bath therapy kit, 110V",
    overview: [
      "WaxWel Paraffin Bath — 6 lb Unscented Paraffin, Liners, Mitt & Bootie, 110V — Complete paraffin bath therapy kit, 110V.",
      "Includes 6 lb unscented paraffin, liners, terry mitt, and bootie Soothing moist heat for hands and feet.",
    ],
    highlights: [
      "Complete paraffin bath therapy kit, 110V",
      "Includes 6 lb unscented paraffin, liners, terry mitt, and bootie",
      "Soothing moist heat for hands and feet",
      "Ideal for arthritis and stiff joints",
      "Standard clinical paraffin unit",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1600.jpg", alt: "WaxWel Paraffin Bath — 6 lb Unscented Paraffin, Liners, Mitt & Bootie, 110V" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1600" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111600",
    seo: {
      title: "WaxWel Paraffin Bath — 6 lb Unscented Paraffin, Liners, Mitt & Bootie, 110V (FAB 11-1600) | GM Therapy",
      description: "Complete paraffin bath therapy kit, 110V",
    },
  },

  "431": {
    productId: "431",
    slug: "theraputty-exercise-putty-red-soft-3-oz",
    tagline: "Hand-therapy exercise putty — Red (Soft)",
    overview: [
      "TheraPutty Exercise Putty — Red (Soft), 3 oz — Hand-therapy exercise putty — Red (Soft).",
      "3 oz portion Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Red (Soft)",
      "3 oz portion",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0968.jpg", alt: "TheraPutty Exercise Putty — Red (Soft), 3 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0968" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100968",
    seo: {
      title: "TheraPutty Exercise Putty — Red (Soft), 3 oz (FAB 10-0968) | GM Therapy",
      description: "Hand-therapy exercise putty — Red (Soft)",
    },
  },

  "432": {
    productId: "432",
    slug: "sup-r-band-latex-free-exercise-band-green-medium-50-yd-dispe",
    tagline: "Sup-R Band latex-free resistance band — Green (Medium)",
    overview: [
      "Sup-R Band Latex-Free Exercise Band — Green (Medium), 50 yd Dispenser — Sup-R Band latex-free resistance band — Green (Medium).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Sup-R Band latex-free resistance band — Green (Medium)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Premium latex-free band — superior tear resistance vs economy bands",
      "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6323.jpg", alt: "Sup-R Band Latex-Free Exercise Band — Green (Medium), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-6323" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106323",
    seo: {
      title: "Sup-R Band Latex-Free Exercise Band — Green (Medium), 50 yd Dispenser (FAB 10-6323) | GM Therapy",
      description: "Sup-R Band latex-free resistance band — Green (Medium)",
    },
  },
  "433": {
    productId: "433",
    slug: "cando-digi-flex-hand-finger-exerciser-red-3-0-lb",
    tagline: "Hand and finger exerciser \u2014 Red (3.0 lb resistance)",
    overview: [
      "CanDo Digi-Flex Hand/Finger Exerciser \u2014 Red (3.0 lb) \u2014 Hand and finger exerciser \u2014 Red (3.0 lb resistance).",
      "Independent finger pistons isolate each digit Strengthens grip, fingers, and intrinsic hand muscles.",
    ],
    highlights: [
      "Hand and finger exerciser \u2014 Red (3.0 lb resistance)",
      "Independent finger pistons isolate each digit",
      "Strengthens grip, fingers, and intrinsic hand muscles",
      "Color-coded progressive resistance",
      "Compact, portable design",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0741.jpg", alt: "CanDo Digi-Flex Hand/Finger Exerciser \u2014 Red (3.0 lb)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0741" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100741",
    seo: {
      title: "CanDo Digi-Flex Hand/Finger Exerciser \u2014 Red (3.0 lb) (FAB 10-0741) | GM Therapy",
      description: "Hand and finger exerciser \u2014 Red (3.0 lb resistance)",
    },
  },
  "434": {
    productId: "434",
    slug: "fablife-deluxe-formed-sock-aid-continuous-loop-handle",
    tagline: "Deluxe formed sock aid with continuous loop handle",
    overview: [
      "FabLife Deluxe Formed Sock Aid \u2014 Continuous Loop Handle \u2014 Deluxe formed sock aid with continuous loop handle.",
      "Helps patients don socks without bending Ideal for hip and back precautions.",
    ],
    highlights: [
      "Deluxe formed sock aid with continuous loop handle",
      "Helps patients don socks without bending",
      "Ideal for hip and back precautions",
      "Lightweight, durable plastic frame",
      "Standard clinical ADL aid",
    ],
    gallery: [
      { src: "/assets/products/fab/86-0040.jpg", alt: "FabLife Deluxe Formed Sock Aid \u2014 Continuous Loop Handle" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 86-0040" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/860040",
    seo: {
      title: "FabLife Deluxe Formed Sock Aid \u2014 Continuous Loop Handle (FAB 86-0040) | GM Therapy",
      description: "Deluxe formed sock aid with continuous loop handle",
    },
  },
  "436": {
    productId: "436",
    slug: "waxwel-paraffin-wax-refill-unscented-6-x-1-lb-blocks",
    tagline: "Unscented paraffin wax refill blocks",
    overview: [
      "WaxWel Paraffin Wax Refill \u2014 Unscented, 6 x 1 lb Blocks \u2014 Unscented paraffin wax refill blocks.",
      "Six 1-lb blocks (6 lb total) Compatible with WaxWel and most clinical paraffin baths.",
    ],
    highlights: [
      "Unscented paraffin wax refill blocks",
      "Six 1-lb blocks (6 lb total)",
      "Compatible with WaxWel and most clinical paraffin baths",
      "Soothing moist heat for hands and feet",
      "Ideal for arthritis and stiff joints",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1720-6.jpg", alt: "WaxWel Paraffin Wax Refill \u2014 Unscented, 6 x 1 lb Blocks" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1720-6" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/1117206",
    seo: {
      title: "WaxWel Paraffin Wax Refill \u2014 Unscented, 6 x 1 lb Blocks (FAB 11-1720-6) | GM Therapy",
      description: "Unscented paraffin wax refill blocks",
    },
  },
  "437": {
    productId: "437",
    slug: "cando-exercise-band-blue-heavy-50-yd-dispenser",
    tagline: "CanDo latex resistance band \u2014 Blue (Heavy)",
    overview: [
      "CanDo Exercise Band \u2014 Blue (Heavy), 50 yd Dispenser \u2014 CanDo latex resistance band \u2014 Blue (Heavy).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "CanDo latex resistance band \u2014 Blue (Heavy)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Economical clinical-grade band",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5224.jpg", alt: "CanDo Exercise Band \u2014 Blue (Heavy), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5224" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105224",
    seo: {
      title: "CanDo Exercise Band \u2014 Blue (Heavy), 50 yd Dispenser (FAB 10-5224) | GM Therapy",
      description: "CanDo latex resistance band \u2014 Blue (Heavy)",
    },
  },
  "439": {
    productId: "439",
    slug: "theraputty-exercise-putty-green-medium-1-lb",
    tagline: "Hand-therapy exercise putty \u2014 Green (Medium)",
    overview: [
      "TheraPutty Exercise Putty \u2014 Green (Medium), 1 lb \u2014 Hand-therapy exercise putty \u2014 Green (Medium).",
      "1 lb portion \u2014 clinical / multi-patient size Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty \u2014 Green (Medium)",
      "1 lb portion \u2014 clinical / multi-patient size",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0920.jpg", alt: "TheraPutty Exercise Putty \u2014 Green (Medium), 1 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0920" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100920",
    seo: {
      title: "TheraPutty Exercise Putty \u2014 Green (Medium), 1 lb (FAB 10-0920) | GM Therapy",
      description: "Hand-therapy exercise putty \u2014 Green (Medium)",
    },
  },
  "440": {
    productId: "440",
    slug: "sup-r-band-latex-free-exercise-band-red-light-50-yd-dispense",
    tagline: "Sup-R Band latex-free resistance band \u2014 Red (Light)",
    overview: [
      "Sup-R Band Latex-Free Exercise Band \u2014 Red (Light), 50 yd Dispenser \u2014 Sup-R Band latex-free resistance band \u2014 Red (Light).",
      "50 yard dispenser roll Cuts to any length for clinical or home use.",
    ],
    highlights: [
      "Sup-R Band latex-free resistance band \u2014 Red (Light)",
      "50 yard dispenser roll",
      "Cuts to any length for clinical or home use",
      "Color-coded progressive resistance",
      "Premium latex-free band \u2014 superior tear resistance vs economy bands",
      "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6322.jpg", alt: "Sup-R Band Latex-Free Exercise Band \u2014 Red (Light), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-6322" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106322",
    seo: {
      title: "Sup-R Band Latex-Free Exercise Band \u2014 Red (Light), 50 yd Dispenser (FAB 10-6322) | GM Therapy",
      description: "Sup-R Band latex-free resistance band \u2014 Red (Light)",
    },
  },
  "441": {
    productId: "441",
    slug: "baseline-taylor-reflex-hammer",
    tagline: "Standard Taylor (tomahawk) reflex hammer",
    overview: [
      "Baseline Taylor Reflex Hammer \u2014 Standard Taylor (tomahawk) reflex hammer.",
      "Triangular rubber head for percussion Lightweight metal handle.",
    ],
    highlights: [
      "Standard Taylor (tomahawk) reflex hammer",
      "Triangular rubber head for percussion",
      "Lightweight metal handle",
      "Standard clinical neuro evaluation tool",
      "Used to elicit deep tendon reflexes",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1500.jpg", alt: "Baseline Taylor Reflex Hammer" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-1500" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/121500",
    seo: {
      title: "Baseline Taylor Reflex Hammer (FAB 12-1500) | GM Therapy",
      description: "Standard Taylor (tomahawk) reflex hammer",
    },
  },
  "442": {
    productId: "442",
    slug: "baseline-pediatric-fingertip-pulse-oximeter",
    tagline: "Pediatric fingertip pulse oximeter",
    overview: [
      "Baseline Pediatric Fingertip Pulse Oximeter \u2014 Pediatric fingertip pulse oximeter.",
      "Measures SpO\u2082 and pulse rate Sized for pediatric fingertips.",
    ],
    highlights: [
      "Pediatric fingertip pulse oximeter",
      "Measures SpO\u2082 and pulse rate",
      "Sized for pediatric fingertips",
      "Bright LED display",
      "Batteries included",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1935.jpg", alt: "Baseline Pediatric Fingertip Pulse Oximeter" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-1935" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/121935",
    seo: {
      title: "Baseline Pediatric Fingertip Pulse Oximeter (FAB 12-1935) | GM Therapy",
      description: "Pediatric fingertip pulse oximeter",
    },
  },
  "443": {
    productId: "443",
    slug: "deluxe-cuff-weight-2-lb-white",
    tagline: "Deluxe adjustable cuff weight \u2014 2 lb (White)",
    overview: [
      "Deluxe Cuff Weight \u2014 2 lb, White \u2014 Deluxe adjustable cuff weight \u2014 2 lb (White).",
      "Soft, comfortable nylon shell with hook-and-loop closure Fits wrist or ankle.",
    ],
    highlights: [
      "Deluxe adjustable cuff weight \u2014 2 lb (White)",
      "Soft, comfortable nylon shell with hook-and-loop closure",
      "Fits wrist or ankle",
      "Color-coded by weight for easy identification",
      "Ideal for gait training, ROM, and strengthening exercises",
    ],
    gallery: [
      { src: "/assets/products/fab/10-2505.jpg", alt: "Deluxe Cuff Weight \u2014 2 lb, White" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-2505" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/102505",
    seo: {
      title: "Deluxe Cuff Weight \u2014 2 lb, White (FAB 10-2505) | GM Therapy",
      description: "Deluxe adjustable cuff weight \u2014 2 lb (White)",
    },
  },
  "444": {
    productId: "444",
    slug: "baseline-180-plastic-pocket-goniometer-6",
    tagline: "180\u00b0 clear plastic pocket goniometer",
    overview: [
      "Baseline 180\u00b0 Plastic Pocket Goniometer \u2014 6\" \u2014 180\u00b0 clear plastic pocket goniometer.",
      "6 inch length \u2014 fits in lab coat pocket Measures joint range of motion.",
    ],
    highlights: [
      "180\u00b0 clear plastic pocket goniometer",
      "6 inch length \u2014 fits in lab coat pocket",
      "Measures joint range of motion",
      "Clear plastic for easy alignment",
      "Standard clinical evaluation tool",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1005.jpg", alt: "Baseline 180\u00b0 Plastic Pocket Goniometer \u2014 6\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-1005" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/121005",
    seo: {
      title: "Baseline 180\u00b0 Plastic Pocket Goniometer \u2014 6\" (FAB 12-1005) | GM Therapy",
      description: "180\u00b0 clear plastic pocket goniometer",
    },
  },
  "445": {
    productId: "445",
    slug: "cando-extension-flexion-web-multi-resistance-yellow-green-14",
    tagline: "14\" hand exercise web \u2014 multi-resistance (Yellow/Green)",
    overview: [
      "CanDo Extension/Flexion Web \u2014 Multi-Resistance (Yellow/Green), 14\" \u2014 14\" hand exercise web \u2014 multi-resistance (Yellow/Green).",
      "Two resistance levels in a single web Trains finger extension and flexion.",
    ],
    highlights: [
      "14\" hand exercise web \u2014 multi-resistance (Yellow/Green)",
      "Two resistance levels in a single web",
      "Trains finger extension and flexion",
      "Latex web with finger loops",
      "Ideal for hand and finger rehabilitation",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0857.jpg", alt: "CanDo Extension/Flexion Web \u2014 Multi-Resistance (Yellow/Green), 14\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0857" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100857",
    seo: {
      title: "CanDo Extension/Flexion Web \u2014 Multi-Resistance (Yellow/Green), 14\" (FAB 10-0857) | GM Therapy",
      description: "14\" hand exercise web \u2014 multi-resistance (Yellow/Green)",
    },
  },
  "447": {
    productId: "447",
    slug: "cando-round-foam-roller-3-x-12-white",
    tagline: "Round foam roller \u2014 3\" diameter x 12\" length",
    overview: [
      "CanDo Round Foam Roller \u2014 3\" x 12\", White \u2014 Round foam roller \u2014 3\" diameter x 12\" length.",
      "White, standard density Compact size \u2014 ideal for cervical, hand, or targeted use.",
    ],
    highlights: [
      "Round foam roller \u2014 3\" diameter x 12\" length",
      "White, standard density",
      "Compact size \u2014 ideal for cervical, hand, or targeted use",
      "Closed-cell foam construction",
      "Lightweight and portable",
    ],
    gallery: [
      { src: "/assets/products/fab/30-2107.jpg", alt: "CanDo Round Foam Roller \u2014 3\" x 12\", White" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Foam Rollers" },
          { label: "SKU", value: "FAB 30-2107" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/302107",
    seo: {
      title: "CanDo Round Foam Roller \u2014 3\" x 12\", White (FAB 30-2107) | GM Therapy",
      description: "Round foam roller \u2014 3\" diameter x 12\" length",
    },
  },
  "448": {
    productId: "448",
    slug: "baseline-360-plastic-goniometer-6",
    tagline: "360\u00b0 clear plastic goniometer",
    overview: [
      "Baseline 360\u00b0 Plastic Goniometer \u2014 6\" \u2014 360\u00b0 clear plastic goniometer.",
      "6 inch length Measures joint range of motion in all directions.",
    ],
    highlights: [
      "360\u00b0 clear plastic goniometer",
      "6 inch length",
      "Measures joint range of motion in all directions",
      "Clear plastic for easy alignment",
      "Standard clinical evaluation tool",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1002.jpg", alt: "Baseline 360\u00b0 Plastic Goniometer \u2014 6\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-1002" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/121002",
    seo: {
      title: "Baseline 360\u00b0 Plastic Goniometer \u2014 6\" (FAB 12-1002) | GM Therapy",
      description: "360\u00b0 clear plastic goniometer",
    },
  },
  "449": {
    productId: "449",
    slug: "aps-dry-needling-needle-0-30-x-50-mm-pink-tip-100-box",
    tagline: "Single-use dry needling needles",
    overview: [
      "APS Dry Needling Needle \u2014 0.30 x 50 mm, Pink Tip, 100/Box \u2014 Single-use dry needling needles.",
      "0.30 mm x 50 mm \u2014 pink tip color code 100 needles per box.",
    ],
    highlights: [
      "Single-use dry needling needles",
      "0.30 mm x 50 mm \u2014 pink tip color code",
      "100 needles per box",
      "Sterile, individually packaged",
      "For licensed clinicians trained in dry needling",
    ],
    gallery: [
      { src: "/assets/products/fab/11-0338.jpg", alt: "APS Dry Needling Needle \u2014 0.30 x 50 mm, Pink Tip, 100/Box" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 11-0338" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/110338",
    seo: {
      title: "APS Dry Needling Needle \u2014 0.30 x 50 mm, Pink Tip, 100/Box (FAB 11-0338) | GM Therapy",
      description: "Single-use dry needling needles",
    },
  },
  "450": {
    productId: "450",
    slug: "theraputty-exercise-putty-green-medium-6-oz",
    tagline: "Hand-therapy exercise putty \u2014 Green (Medium)",
    overview: [
      "TheraPutty Exercise Putty \u2014 Green (Medium), 6 oz \u2014 Hand-therapy exercise putty \u2014 Green (Medium).",
      "6 oz portion Color-coded progressive resistance.",
    ],
    highlights: [
      "Hand-therapy exercise putty \u2014 Green (Medium)",
      "6 oz portion",
      "Color-coded progressive resistance",
      "Non-toxic, non-staining, latex-free",
      "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0912.jpg", alt: "TheraPutty Exercise Putty \u2014 Green (Medium), 6 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0912" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100912",
    seo: {
      title: "TheraPutty Exercise Putty \u2014 Green (Medium), 6 oz (FAB 10-0912) | GM Therapy",
      description: "Hand-therapy exercise putty \u2014 Green (Medium)",
    },
  },
  "454": {
    productId: "454",
    slug: "cando-exercise-band-loop-red-light-10",
    tagline: "Pre-made latex exercise band loop",
    overview: [
      "CanDo Exercise Band Loop — Red (Light), 10\" — Pre-made latex exercise band loop. 10\" length — Red / Light resistance.",
    ],
    highlights: [
      "Pre-made latex exercise band loop", "10\" length — Red / Light resistance", "Color-coded progressive resistance", "Ideal for hip, glute, and lower-extremity activation", "Convenient closed-loop design — no tying required", "Sold individually",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5252.jpg", alt: "CanDo Exercise Band Loop — Red (Light), 10\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5252" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105252",
    seo: {
      title: "CanDo Exercise Band Loop — Red (Light), 10\" (FAB 10-5252) | GM Therapy",
      description: "Pre-made latex exercise band loop",
    },
  },
  "457": {
    productId: "457",
    slug: "cando-exercise-band-loop-green-medium-10",
    tagline: "Pre-made latex exercise band loop",
    overview: [
      "CanDo Exercise Band Loop — Green (Medium), 10\" — Pre-made latex exercise band loop. 10\" length — Green / Medium resistance.",
    ],
    highlights: [
      "Pre-made latex exercise band loop", "10\" length — Green / Medium resistance", "Color-coded progressive resistance", "Ideal for hip, glute, and lower-extremity activation", "Convenient closed-loop design — no tying required", "Sold individually",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5253.jpg", alt: "CanDo Exercise Band Loop — Green (Medium), 10\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5253" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105253",
    seo: {
      title: "CanDo Exercise Band Loop — Green (Medium), 10\" (FAB 10-5253) | GM Therapy",
      description: "Pre-made latex exercise band loop",
    },
  },
  "458": {
    productId: "458",
    slug: "dycem-non-slip-material-roll-blue-16-x-6-5-ft",
    tagline: "Non-slip Dycem material roll — Blue",
    overview: [
      "Dycem Non-Slip Material Roll — Blue, 16\" x 6.5 ft — Non-slip Dycem material roll — Blue. 16\" wide x 6.5 foot length.",
    ],
    highlights: [
      "Non-slip Dycem material roll — Blue", "16\" wide x 6.5 foot length", "Cuts to any size — versatile clinical aid", "Stabilizes plates, cups, books, and equipment", "Latex-free, washable, reusable", "Ideal for ADL training and patient stability",
    ],
    gallery: [
      { src: "/assets/products/fab/50-1506B.jpg", alt: "Dycem Non-Slip Material Roll — Blue, 16\" x 6.5 ft" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 50-1506B" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/501506B",
    seo: {
      title: "Dycem Non-Slip Material Roll — Blue, 16\" x 6.5 ft (FAB 50-1506B) | GM Therapy",
      description: "Non-slip Dycem material roll — Blue",
    },
  },
  "459": {
    productId: "459",
    slug: "dycem-non-slip-material-roll-blue-8-x-6-5-ft",
    tagline: "Non-slip Dycem material roll — Blue",
    overview: [
      "Dycem Non-Slip Material Roll — Blue, 8\" x 6.5 ft — Non-slip Dycem material roll — Blue. 8\" wide x 6.5 foot length.",
    ],
    highlights: [
      "Non-slip Dycem material roll — Blue", "8\" wide x 6.5 foot length", "Cuts to any size — versatile clinical aid", "Stabilizes plates, cups, books, and equipment", "Latex-free, washable, reusable", "Ideal for ADL training and patient stability",
    ],
    gallery: [
      { src: "/assets/products/fab/50-1501B.jpg", alt: "Dycem Non-Slip Material Roll — Blue, 8\" x 6.5 ft" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 50-1501B" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/501501B",
    seo: {
      title: "Dycem Non-Slip Material Roll — Blue, 8\" x 6.5 ft (FAB 50-1501B) | GM Therapy",
      description: "Non-slip Dycem material roll — Blue",
    },
  },
  "460": {
    productId: "460",
    slug: "iontopatch-80-ma-min-6-patches-vials",
    tagline: "Self-contained iontophoresis patch system",
    overview: [
      "IontoPatch — 80 mA-min, 6 Patches/Vials — Self-contained iontophoresis patch system. 80 mA-min dose — 6 patches with drug vials.",
    ],
    highlights: [
      "Self-contained iontophoresis patch system", "80 mA-min dose — 6 patches with drug vials", "Wearable — no separate stim unit required", "Ideal for localized anti-inflammatory delivery", "Single-use, disposable design", "For licensed clinicians",
    ],
    gallery: [
      { src: "/assets/products/fab/13-5220.jpg", alt: "IontoPatch — 80 mA-min, 6 Patches/Vials" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-5220" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/135220",
    seo: {
      title: "IontoPatch — 80 mA-min, 6 Patches/Vials (FAB 13-5220) | GM Therapy",
      description: "Self-contained iontophoresis patch system",
    },
  },
  "461": {
    productId: "461",
    slug: "theraputty-plus-antimicrobial-exercise-putty-yellow-x-soft-4-oz",
    tagline: "Antimicrobial hand-therapy exercise putty — Yellow (X-Soft)",
    overview: [
      "TheraPutty Plus Antimicrobial Exercise Putty — Yellow (X-Soft), 4 oz — Antimicrobial hand-therapy exercise putty — Yellow (X-Soft). 4 oz portion.",
    ],
    highlights: [
      "Antimicrobial hand-therapy exercise putty — Yellow (X-Soft)", "4 oz portion", "Built-in antimicrobial protection", "Color-coded progressive resistance", "Non-toxic, non-staining, latex-free", "Ideal for clinical / multi-patient settings",
    ],
    gallery: [
      { src: "/assets/products/fab/10-2621.jpg", alt: "TheraPutty Plus Antimicrobial Exercise Putty — Yellow (X-Soft), 4 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-2621" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/102621",
    seo: {
      title: "TheraPutty Plus Antimicrobial Exercise Putty — Yellow (X-Soft), 4 oz (FAB 10-2621) | GM Therapy",
      description: "Antimicrobial hand-therapy exercise putty — Yellow (X-Soft)",
    },
  },
  "462": {
    productId: "462",
    slug: "plastic-hand-foot-liners-for-paraffin-bath-100-pack",
    tagline: "Disposable plastic liners for paraffin therapy",
    overview: [
      "Plastic Hand/Foot Liners for Paraffin Bath — 100/Pack — Disposable plastic liners for paraffin therapy. 100 liners per pack.",
    ],
    highlights: [
      "Disposable plastic liners for paraffin therapy", "100 liners per pack", "Fits hands and feet", "Prevents cross-contamination", "Compatible with all standard paraffin baths",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1713.jpg", alt: "Plastic Hand/Foot Liners for Paraffin Bath — 100/Pack" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1713" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111713",
    seo: {
      title: "Plastic Hand/Foot Liners for Paraffin Bath — 100/Pack (FAB 11-1713) | GM Therapy",
      description: "Disposable plastic liners for paraffin therapy",
    },
  },
  "463": {
    productId: "463",
    slug: "theraputty-scented-exercise-putty-banana-yellow-x-light-2-oz",
    tagline: "Scented hand-therapy exercise putty",
    overview: [
      "TheraPutty Scented Exercise Putty — Banana / Yellow (X-Light), 2 oz — Scented hand-therapy exercise putty. Banana scent — Yellow / X-Light resistance.",
    ],
    highlights: [
      "Scented hand-therapy exercise putty", "Banana scent — Yellow / X-Light resistance", "2 oz portion", "Color-coded progressive resistance", "Non-toxic, non-staining, latex-free", "Engaging option for pediatric hand therapy",
    ],
    gallery: [
      { src: "/assets/products/fab/10-2761.jpg", alt: "TheraPutty Scented Exercise Putty — Banana / Yellow (X-Light), 2 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-2761" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/102761",
    seo: {
      title: "TheraPutty Scented Exercise Putty — Banana / Yellow (X-Light), 2 oz (FAB 10-2761) | GM Therapy",
      description: "Scented hand-therapy exercise putty",
    },
  },
  "465": {
    productId: "465",
    slug: "theraputty-exercise-putty-yellow-x-soft-1-lb",
    tagline: "Hand-therapy exercise putty — Yellow (X-Soft)",
    overview: [
      "TheraPutty Exercise Putty — Yellow (X-Soft), 1 lb — Hand-therapy exercise putty — Yellow (X-Soft). 1 lb bulk size for clinic use.",
    ],
    highlights: [
      "Hand-therapy exercise putty — Yellow (X-Soft)", "1 lb bulk size for clinic use", "Color-coded progressive resistance", "Non-toxic, non-staining, latex-free", "Cost-effective for high-volume rehab", "Ideal for early-stage hand rehab",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0918.jpg", alt: "TheraPutty Exercise Putty — Yellow (X-Soft), 1 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0918" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100918",
    seo: {
      title: "TheraPutty Exercise Putty — Yellow (X-Soft), 1 lb (FAB 10-0918) | GM Therapy",
      description: "Hand-therapy exercise putty — Yellow (X-Soft)",
    },
  },
  "466": {
    productId: "466",
    slug: "cuff-weight-4-lb-turquoise",
    tagline: "Adjustable cuff weight — 4 lb (Turquoise)",
    overview: [
      "Cuff Weight — 4 lb, Turquoise — Adjustable cuff weight — 4 lb (Turquoise). Soft, comfortable nylon shell with hook-and-loop closure.",
    ],
    highlights: [
      "Adjustable cuff weight — 4 lb (Turquoise)", "Soft, comfortable nylon shell with hook-and-loop closure", "Fits wrist or ankle", "Color-coded by weight for easy identification", "Ideal for gait training, ROM, and strengthening exercises",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0208.jpg", alt: "Cuff Weight — 4 lb, Turquoise" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-0208" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100208",
    seo: {
      title: "Cuff Weight — 4 lb, Turquoise (FAB 10-0208) | GM Therapy",
      description: "Adjustable cuff weight — 4 lb (Turquoise)",
    },
  },
  "468": {
    productId: "468",
    slug: "cando-high-density-black-foam-roller-6-x-36",
    tagline: "High-density round foam roller",
    overview: [
      "CanDo High-Density Black Foam Roller — 6\" x 36\" — High-density round foam roller. 6\" diameter x 36\" length — full size.",
    ],
    highlights: [
      "High-density round foam roller", "6\" diameter x 36\" length — full size", "Black, extra-firm density", "Maintains shape under repeated use", "Ideal for myofascial release, balance, and core training",
    ],
    gallery: [
      { src: "/assets/products/fab/30-2280.jpg", alt: "CanDo High-Density Black Foam Roller — 6\" x 36\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Foam Rollers" },
          { label: "SKU", value: "FAB 30-2280" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/302280",
    seo: {
      title: "CanDo High-Density Black Foam Roller — 6\" x 36\" (FAB 30-2280) | GM Therapy",
      description: "High-density round foam roller",
    },
  },
  "469": {
    productId: "469",
    slug: "sup-r-band-latex-free-exercise-band-blue-heavy-50-yd-dispenser",
    tagline: "Sup-R Band latex-free resistance band — Blue (Heavy)",
    overview: [
      "Sup-R Band Latex-Free Exercise Band — Blue (Heavy), 50 yd Dispenser — Sup-R Band latex-free resistance band — Blue (Heavy). 50 yard dispenser roll.",
    ],
    highlights: [
      "Sup-R Band latex-free resistance band — Blue (Heavy)", "50 yard dispenser roll", "Cuts to any length for clinical or home use", "Color-coded progressive resistance", "Premium latex-free band — superior tear resistance vs economy bands", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6324.jpg", alt: "Sup-R Band Latex-Free Exercise Band — Blue (Heavy), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-6324" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106324",
    seo: {
      title: "Sup-R Band Latex-Free Exercise Band — Blue (Heavy), 50 yd Dispenser (FAB 10-6324) | GM Therapy",
      description: "Sup-R Band latex-free resistance band — Blue (Heavy)",
    },
  },
  "471": {
    productId: "471",
    slug: "baseline-sit-and-reach-box",
    tagline: "Standard sit-and-reach flexibility test box",
    overview: [
      "Baseline Sit-and-Reach Box — Standard sit-and-reach flexibility test box. Assesses lower-back and hamstring flexibility.",
    ],
    highlights: [
      "Standard sit-and-reach flexibility test box", "Assesses lower-back and hamstring flexibility", "Sliding measurement scale", "Used in fitness assessments and PE programs", "Standard clinical evaluation tool",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1085.jpg", alt: "Baseline Sit-and-Reach Box" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-1085" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/121085",
    seo: {
      title: "Baseline Sit-and-Reach Box (FAB 12-1085) | GM Therapy",
      description: "Standard sit-and-reach flexibility test box",
    },
  },
  "472": {
    productId: "472",
    slug: "cuff-weight-set-9-pieces-1-1-5-2-2-5-3-4-5-7-5-10-lb",
    tagline: "Complete cuff weight set — 9 pieces",
    overview: [
      "Cuff Weight Set — 9 Pieces (1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10 lb) — Complete cuff weight set — 9 pieces. One each: 1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10 lb.",
    ],
    highlights: [
      "Complete cuff weight set — 9 pieces", "One each: 1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10 lb", "Color-coded by weight", "Soft nylon shell with hook-and-loop closure", "Fits wrist or ankle", "Ideal for clinical strengthening programs",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0274.jpg", alt: "Cuff Weight Set — 9 Pieces (1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10 lb)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Weights" },
          { label: "SKU", value: "FAB 10-0274" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100274",
    seo: {
      title: "Cuff Weight Set — 9 Pieces (1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10 lb) (FAB 10-0274) | GM Therapy",
      description: "Complete cuff weight set — 9 pieces",
    },
  },
  "473": {
    productId: "473",
    slug: "dycem-non-slip-material-roll-blue-8-x-10-yd",
    tagline: "Non-slip Dycem material roll — Blue",
    overview: [
      "Dycem Non-Slip Material Roll — Blue, 8\" x 10 yd — Non-slip Dycem material roll — Blue. 8\" wide x 10 yard length — bulk size.",
    ],
    highlights: [
      "Non-slip Dycem material roll — Blue", "8\" wide x 10 yard length — bulk size", "Cuts to any size — versatile clinical aid", "Stabilizes plates, cups, books, and equipment", "Latex-free, washable, reusable", "Ideal for ADL training and patient stability",
    ],
    gallery: [
      { src: "/assets/products/fab/50-1500B.jpg", alt: "Dycem Non-Slip Material Roll — Blue, 8\" x 10 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 50-1500B" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/501500B",
    seo: {
      title: "Dycem Non-Slip Material Roll — Blue, 8\" x 10 yd (FAB 50-1500B) | GM Therapy",
      description: "Non-slip Dycem material roll — Blue",
    },
  },
  "474": {
    productId: "474",
    slug: "cando-latex-free-exercise-band-black-x-heavy-50-yd-dispenser",
    tagline: "Latex-free resistance band — Black (X-Heavy)",
    overview: [
      "CanDo Latex-Free Exercise Band — Black (X-Heavy), 50 yd Dispenser — Latex-free resistance band — Black (X-Heavy). 50 yard dispenser roll.",
    ],
    highlights: [
      "Latex-free resistance band — Black (X-Heavy)", "50 yard dispenser roll", "Cuts to any length for clinical or home use", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5625.jpg", alt: "CanDo Latex-Free Exercise Band — Black (X-Heavy), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5625" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105625",
    seo: {
      title: "CanDo Latex-Free Exercise Band — Black (X-Heavy), 50 yd Dispenser (FAB 10-5625) | GM Therapy",
      description: "Latex-free resistance band — Black (X-Heavy)",
    },
  },
  "476": {
    productId: "476",
    slug: "nustep-t5-recumbent-cross-trainer",
    tagline: "Low-impact total body recumbent cross trainer",
    overview: [
      "NuStep T5 Recumbent Cross Trainer — Low-impact total body recumbent cross trainer. Smooth-stepping motion engages arms and legs",
    ],
    highlights: [
      "Low-impact total body recumbent cross trainer", "Smooth-stepping motion engages arms and legs", "Easy step-through swivel seat for accessibility", "Adjustable resistance levels for all fitness levels", "Quiet hybrid brake system", "Ideal for rehab and senior wellness programs",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5982.jpg", alt: "NuStep T5 Recumbent Cross Trainer" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Cardio" },
          { label: "SKU", value: "FAB 10-5982" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105982",
    seo: {
      title: "NuStep T5 Recumbent Cross Trainer (FAB 10-5982) | GM Therapy",
      description: "Low-impact total body recumbent cross trainer",
    },
  },
  "477": {
    productId: "477",
    slug: "endurance-bed-1-0-gray",
    tagline: "Heavy-duty endurance treatment bed — gray upholstery",
    overview: [
      "Endurance Bed 1.0 — Gray — Heavy-duty endurance treatment bed — gray upholstery. Durable steel frame for long clinical life",
    ],
    highlights: [
      "Heavy-duty endurance treatment bed — gray upholstery", "Durable steel frame for long clinical life", "Reinforced padding for patient comfort", "Designed for high-traffic therapy environments", "Easy-to-clean vinyl surface",
    ],
    gallery: [
      { src: "/assets/products/fab/15-5399.jpg", alt: "Endurance Bed 1.0 — Gray" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Treatment Furniture" },
          { label: "SKU", value: "FAB 15-5399" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/155399",
    seo: {
      title: "Endurance Bed 1.0 — Gray (FAB 15-5399) | GM Therapy",
      description: "Heavy-duty endurance treatment bed — gray upholstery",
    },
  },
  "478": {
    productId: "478",
    slug: "strapit-athletic-tape-1-5-roll-box-of-32",
    tagline: "Premium athletic tape — 1.5\" (38 mm) wide",
    overview: [
      "Strapit Athletic Tape — 1.5\" Roll, Box of 32 — Premium athletic tape — 1.5\" (38 mm) wide. Box of 32 rolls — bulk clinical pack",
    ],
    highlights: [
      "Premium athletic tape — 1.5\" (38 mm) wide", "Box of 32 rolls — bulk clinical pack", "High-tack adhesive that stays put", "Excellent unwind and tear control", "Trusted for ankle and joint stabilization", "Standard for sports medicine and PT clinics",
    ],
    gallery: [
      { src: "/assets/products/fab/24-0191.jpg", alt: "Strapit Athletic Tape — 1.5\" Roll, Box of 32" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Splints & Support" },
          { label: "SKU", value: "FAB 24-0191" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/240191",
    seo: {
      title: "Strapit Athletic Tape — 1.5\" Roll, Box of 32 (FAB 24-0191) | GM Therapy",
      description: "Premium athletic tape — 1.5\" (38 mm) wide",
    },
  },
  "479": {
    productId: "479",
    slug: "cando-pneumatic-stool-without-back-black",
    tagline: "Pneumatic-adjust clinician stool — black",
    overview: [
      "CanDo Pneumatic Stool — Without Back, Black — Pneumatic-adjust clinician stool — black. Smooth height adjustment via gas lift",
    ],
    highlights: [
      "Pneumatic-adjust clinician stool — black", "Smooth height adjustment via gas lift", "Sturdy 5-caster base for mobility", "Padded seat for all-day comfort", "Backless design for unrestricted movement", "Ideal for treatment rooms and labs",
    ],
    gallery: [
      { src: "/assets/products/fab/07-7063.jpg", alt: "CanDo Pneumatic Stool — Without Back, Black" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Treatment Furniture" },
          { label: "SKU", value: "FAB 07-7063" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/077063",
    seo: {
      title: "CanDo Pneumatic Stool — Without Back, Black (FAB 07-7063) | GM Therapy",
      description: "Pneumatic-adjust clinician stool — black",
    },
  },
  "480": {
    productId: "480",
    slug: "airex-balance-pad-elite-blue-20-x-16-x-2-5",
    tagline: "Premium Airex balance pad — Elite series",
    overview: [
      "Airex Balance Pad Elite — Blue, 20\" x 16\" x 2.5\" — Premium Airex balance pad — Elite series. Dimensions: 20\" x 16\" x 2.5\"",
    ],
    highlights: [
      "Premium Airex balance pad — Elite series", "Dimensions: 20\" x 16\" x 2.5\"", "Soft, supportive foam for proprioceptive training", "Non-slip textured surface", "Closed-cell foam — easy to clean", "Made in Switzerland — clinical-grade quality",
    ],
    gallery: [
      { src: "/assets/products/fab/30-1915.jpg", alt: "Airex Balance Pad Elite — Blue, 20\" x 16\" x 2.5\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Balance" },
          { label: "SKU", value: "FAB 30-1915" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/301915",
    seo: {
      title: "Airex Balance Pad Elite — Blue, 20\" x 16\" x 2.5\" (FAB 30-1915) | GM Therapy",
      description: "Premium Airex balance pad — Elite series",
    },
  },
  "482": {
    productId: "482",
    slug: "cando-exercise-band-black-x-heavy-50-yd-dispenser",
    tagline: "Latex resistance band — Black (X-Heavy)",
    overview: [
      "CanDo Exercise Band — Black (X-Heavy), 50 yd Dispenser — Latex resistance band — Black (X-Heavy). 50 yard dispenser roll",
    ],
    highlights: [
      "Latex resistance band — Black (X-Heavy)", "50 yard dispenser roll", "Cut to length for individual exercises", "Color-coded progressive resistance", "Trusted CanDo quality for clinical use",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5225.jpg", alt: "CanDo Exercise Band — Black (X-Heavy), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5225" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105225",
    seo: {
      title: "CanDo Exercise Band — Black (X-Heavy), 50 yd Dispenser (FAB 10-5225) | GM Therapy",
      description: "Latex resistance band — Black (X-Heavy)",
    },
  },
  "483": {
    productId: "483",
    slug: "lafayette-manual-muscle-tester-rechargeable-w-bluetooth",
    tagline: "Lafayette MMT handheld dynamometer",
    overview: [
      "Lafayette Manual Muscle Tester — Rechargeable w/ Bluetooth — Lafayette MMT handheld dynamometer. Rechargeable battery — no disposable cells",
    ],
    highlights: [
      "Lafayette MMT handheld dynamometer", "Rechargeable battery — no disposable cells", "Bluetooth module for wireless data transfer", "Objective MMT documentation", "Lightweight ergonomic design", "Industry standard for muscle strength testing",
    ],
    gallery: [
      { src: "/assets/products/fab/12-0380.jpg", alt: "Lafayette Manual Muscle Tester — Rechargeable w/ Bluetooth" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-0380" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/120380",
    seo: {
      title: "Lafayette Manual Muscle Tester — Rechargeable w/ Bluetooth (FAB 12-0380) | GM Therapy",
      description: "Lafayette MMT handheld dynamometer",
    },
  },
  "484": {
    productId: "484",
    slug: "rep-latex-free-exercise-band-orange-light-50-yd",
    tagline: "REP latex-free resistance band — Orange (Light)",
    overview: [
      "REP Latex-Free Exercise Band — Orange (Light), 50 yd — REP latex-free resistance band — Orange (Light). 50 yard dispenser roll",
    ],
    highlights: [
      "REP latex-free resistance band — Orange (Light)", "50 yard dispenser roll", "Cuts to any length for clinical or home use", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1090.jpg", alt: "REP Latex-Free Exercise Band — Orange (Light), 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-1090" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/101090",
    seo: {
      title: "REP Latex-Free Exercise Band — Orange (Light), 50 yd (FAB 10-1090) | GM Therapy",
      description: "REP latex-free resistance band — Orange (Light)",
    },
  },
  "485": {
    productId: "485",
    slug: "stepone-total-body-recumbent-stepper-premium-seat",
    tagline: "StepONE total-body recumbent stepper — Premium Seat",
    overview: [
      "StepONE Total Body Recumbent Stepper — Premium Seat — StepONE total-body recumbent stepper — Premium Seat. Combined upper and lower body workout",
    ],
    highlights: [
      "StepONE total-body recumbent stepper — Premium Seat", "Combined upper and lower body workout", "Smooth, low-impact stepping motion", "Wide swivel seat with comfort upholstery", "Easy step-through access", "Ideal for rehab and adaptive fitness",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6038.jpg", alt: "StepONE Total Body Recumbent Stepper — Premium Seat" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Cardio" },
          { label: "SKU", value: "FAB 10-6038" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106038",
    seo: {
      title: "StepONE Total Body Recumbent Stepper — Premium Seat (FAB 10-6038) | GM Therapy",
      description: "StepONE total-body recumbent stepper — Premium Seat",
    },
  },
  "487": {
    productId: "487",
    slug: "cando-exercise-band-yellow-x-light-50-yd-dispenser",
    tagline: "Latex resistance band — Yellow (X-Light)",
    overview: [
      "CanDo Exercise Band — Yellow (X-Light), 50 yd Dispenser — Latex resistance band — Yellow (X-Light). 50 yard dispenser roll",
    ],
    highlights: [
      "Latex resistance band — Yellow (X-Light)", "50 yard dispenser roll", "Cuts to any length", "Color-coded progressive resistance", "Ideal for early-stage rehabilitation",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5221.jpg", alt: "CanDo Exercise Band — Yellow (X-Light), 50 yd Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5221" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105221",
    seo: {
      title: "CanDo Exercise Band — Yellow (X-Light), 50 yd Dispenser (FAB 10-5221) | GM Therapy",
      description: "Latex resistance band — Yellow (X-Light)",
    },
  },
  "488": {
    productId: "488",
    slug: "airex-balance-pad-elite-lava-black-20-x-16-x-2-5",
    tagline: "Premium Airex balance pad — Elite series",
    overview: [
      "Airex Balance Pad Elite — Lava/Black, 20\" x 16\" x 2.5\" — Premium Airex balance pad — Elite series. Lava/black colorway",
    ],
    highlights: [
      "Premium Airex balance pad — Elite series", "Lava/black colorway", "Dimensions: 20\" x 16\" x 2.5\"", "Soft supportive foam for proprioception", "Non-slip textured surface", "Made in Switzerland — clinical grade",
    ],
    gallery: [
      { src: "/assets/products/fab/30-1915LAV.jpg", alt: "Airex Balance Pad Elite — Lava/Black, 20\" x 16\" x 2.5\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Balance" },
          { label: "SKU", value: "FAB 30-1915LAV" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/301915LAV",
    seo: {
      title: "Airex Balance Pad Elite — Lava/Black, 20\" x 16\" x 2.5\" (FAB 30-1915LAV) | GM Therapy",
      description: "Premium Airex balance pad — Elite series",
    },
  },
  "489": {
    productId: "489",
    slug: "dycem-non-slip-material-roll-blue-16-x-10-yd",
    tagline: "Non-slip Dycem material roll — Blue",
    overview: [
      "Dycem Non-Slip Material Roll — Blue, 16\" x 10 yd — Non-slip Dycem material roll — Blue. 16\" wide x 10 yard length — bulk size",
    ],
    highlights: [
      "Non-slip Dycem material roll — Blue", "16\" wide x 10 yard length — bulk size", "Cuts to any size for versatile use", "Stabilizes plates, cups, books, and equipment", "Latex-free, washable, reusable", "Ideal for ADL training and patient stability",
    ],
    gallery: [
      { src: "/assets/products/fab/50-1505B.jpg", alt: "Dycem Non-Slip Material Roll — Blue, 16\" x 10 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "ADL / Daily Living" },
          { label: "SKU", value: "FAB 50-1505B" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/501505B",
    seo: {
      title: "Dycem Non-Slip Material Roll — Blue, 16\" x 10 yd (FAB 50-1505B) | GM Therapy",
      description: "Non-slip Dycem material roll — Blue",
    },
  },
  "490": {
    productId: "490",
    slug: "rep-latex-free-exercise-band-blue-heavy-50-yd",
    tagline: "REP latex-free resistance band — Blue (Heavy)",
    overview: [
      "REP Latex-Free Exercise Band — Blue (Heavy), 50 yd — REP latex-free resistance band — Blue (Heavy). 50 yard dispenser roll",
    ],
    highlights: [
      "REP latex-free resistance band — Blue (Heavy)", "50 yard dispenser roll", "Cuts to any length", "Color-coded progressive resistance", "Safe for latex-sensitive patients",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1092.jpg", alt: "REP Latex-Free Exercise Band — Blue (Heavy), 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-1092" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/101092",
    seo: {
      title: "REP Latex-Free Exercise Band — Blue (Heavy), 50 yd (FAB 10-1092) | GM Therapy",
      description: "REP latex-free resistance band — Blue (Heavy)",
    },
  },
  "491": {
    productId: "491",
    slug: "baseline-hydraulic-hand-dynamometer-digital-lcd-er-300-lb",
    tagline: "Baseline hydraulic hand dynamometer",
    overview: [
      "Baseline Hydraulic Hand Dynamometer — Digital LCD, ER 300 lb — Baseline hydraulic hand dynamometer. Digital LCD gauge — Extended Range 300 lb",
    ],
    highlights: [
      "Baseline hydraulic hand dynamometer", "Digital LCD gauge — Extended Range 300 lb", "Highly accurate hand-grip strength measurement", "Industry standard for clinical evaluation", "Comfortable adjustable handle", "Includes carrying case",
    ],
    gallery: [
      { src: "/assets/products/fab/12-0247.jpg", alt: "Baseline Hydraulic Hand Dynamometer — Digital LCD, ER 300 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-0247" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/120247",
    seo: {
      title: "Baseline Hydraulic Hand Dynamometer — Digital LCD, ER 300 lb (FAB 12-0247) | GM Therapy",
      description: "Baseline hydraulic hand dynamometer",
    },
  },
  "493": {
    productId: "493",
    slug: "baseline-lite-hydraulic-hand-dynamometer-200-lb",
    tagline: "Baseline LITE hydraulic hand dynamometer",
    overview: [
      "Baseline LITE Hydraulic Hand Dynamometer — 200 lb — Baseline LITE hydraulic hand dynamometer. Capacity: 200 lb",
    ],
    highlights: [
      "Baseline LITE hydraulic hand dynamometer", "Capacity: 200 lb", "Lightweight, easy-to-read analog dial", "Reliable grip-strength evaluation", "Compact for portable use", "Includes carrying case",
    ],
    gallery: [
      { src: "/assets/products/fab/12-0241.jpg", alt: "Baseline LITE Hydraulic Hand Dynamometer — 200 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-0241" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/120241",
    seo: {
      title: "Baseline LITE Hydraulic Hand Dynamometer — 200 lb (FAB 12-0241) | GM Therapy",
      description: "Baseline LITE hydraulic hand dynamometer",
    },
  },
  "494": {
    productId: "494",
    slug: "cando-pt-soft-medicine-ball-set-5-pc-2-4-7-11-15-lb",
    tagline: "CanDo PT soft medicine ball set — 5 pieces",
    overview: [
      "CanDo PT Soft Medicine Ball Set — 5 pc (2, 4, 7, 11, 15 lb) — CanDo PT soft medicine ball set — 5 pieces. Includes one each: 2, 4, 7, 11, and 15 lb",
    ],
    highlights: [
      "CanDo PT soft medicine ball set — 5 pieces", "Includes one each: 2, 4, 7, 11, and 15 lb", "Soft, no-bounce surface — safe for indoor use", "Color-coded by weight", "Ideal for rehab and conditioning programs",
    ],
    gallery: [
      { src: "/assets/products/fab/10-3176.jpg", alt: "CanDo PT Soft Medicine Ball Set — 5 pc (2, 4, 7, 11, 15 lb)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Exercise" },
          { label: "SKU", value: "FAB 10-3176" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/103176",
    seo: {
      title: "CanDo PT Soft Medicine Ball Set — 5 pc (2, 4, 7, 11, 15 lb) (FAB 10-3176) | GM Therapy",
      description: "CanDo PT soft medicine ball set — 5 pieces",
    },
  },
  "496": {
    productId: "496",
    slug: "cando-rickshaw-rehabilitation-exerciser",
    tagline: "CanDo Rickshaw rehabilitation exerciser",
    overview: [
      "CanDo Rickshaw Rehabilitation Exerciser — CanDo Rickshaw rehabilitation exerciser. Adjustable resistance for upper-body strengthening",
    ],
    highlights: [
      "CanDo Rickshaw rehabilitation exerciser", "Adjustable resistance for upper-body strengthening", "Heavy-duty steel construction", "Pulley-based dynamic resistance", "Ideal for shoulder, arm, and core rehab", "Used in clinical and athletic settings",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0690.jpg", alt: "CanDo Rickshaw Rehabilitation Exerciser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Exercise" },
          { label: "SKU", value: "FAB 10-0690" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100690",
    seo: {
      title: "CanDo Rickshaw Rehabilitation Exerciser (FAB 10-0690) | GM Therapy",
      description: "CanDo Rickshaw rehabilitation exerciser",
    },
  },
  "497": {
    productId: "497",
    slug: "airex-balance-pad-mini-10-x-16-x-2-5",
    tagline: "Compact Airex balance pad — Mini",
    overview: [
      "Airex Balance Pad Mini — 10\" x 16\" x 2.5\" — Compact Airex balance pad — Mini. Dimensions: 10\" x 16\" x 2.5\"",
    ],
    highlights: [
      "Compact Airex balance pad — Mini", "Dimensions: 10\" x 16\" x 2.5\"", "Soft foam for proprioceptive training", "Non-slip textured surface", "Closed-cell foam — easy to clean", "Made in Switzerland",
    ],
    gallery: [
      { src: "/assets/products/fab/30-1909.jpg", alt: "Airex Balance Pad Mini — 10\" x 16\" x 2.5\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Balance" },
          { label: "SKU", value: "FAB 30-1909" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/301909",
    seo: {
      title: "Airex Balance Pad Mini — 10\" x 16\" x 2.5\" (FAB 30-1909) | GM Therapy",
      description: "Compact Airex balance pad — Mini",
    },
  },
  "498": {
    productId: "498",
    slug: "sup-r-band-latex-free-black-x-heavy-50-yd",
    tagline: "Sup-R Band latex-free resistance band — Black (X-Heavy)",
    overview: [
      "Sup-R Band Latex-Free — Black (X-Heavy), 50 yd — Sup-R Band latex-free resistance band — Black (X-Heavy). 50 yard roll",
    ],
    highlights: [
      "Sup-R Band latex-free resistance band — Black (X-Heavy)", "50 yard roll", "Highest tear and snap resistance in its class", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6325.jpg", alt: "Sup-R Band Latex-Free — Black (X-Heavy), 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-6325" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106325",
    seo: {
      title: "Sup-R Band Latex-Free — Black (X-Heavy), 50 yd (FAB 10-6325) | GM Therapy",
      description: "Sup-R Band latex-free resistance band — Black (X-Heavy)",
    },
  },
  "501": {
    productId: "501",
    slug: "theraputty-exercise-putty-yellow-x-soft-5-lb",
    tagline: "Bulk hand-therapy exercise putty — Yellow (X-Soft)",
    overview: [
      "TheraPutty Exercise Putty — Yellow (X-Soft), 5 lb — Bulk hand-therapy exercise putty — Yellow (X-Soft). 5 lb tub for clinic-wide use",
    ],
    highlights: [
      "Bulk hand-therapy exercise putty — Yellow (X-Soft)", "5 lb tub for clinic-wide use", "Color-coded progressive resistance", "Non-toxic, non-staining, latex-free", "Ideal for early-stage hand rehab",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0923.jpg", alt: "TheraPutty Exercise Putty — Yellow (X-Soft), 5 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0923" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100923",
    seo: {
      title: "TheraPutty Exercise Putty — Yellow (X-Soft), 5 lb (FAB 10-0923) | GM Therapy",
      description: "Bulk hand-therapy exercise putty — Yellow (X-Soft)",
    },
  },
  "502": {
    productId: "502",
    slug: "theraputty-exercise-putty-red-soft-5-lb",
    tagline: "Bulk hand-therapy exercise putty — Red (Soft)",
    overview: [
      "TheraPutty Exercise Putty — Red (Soft), 5 lb — Bulk hand-therapy exercise putty — Red (Soft). 5 lb tub for clinic-wide use",
    ],
    highlights: [
      "Bulk hand-therapy exercise putty — Red (Soft)", "5 lb tub for clinic-wide use", "Color-coded progressive resistance", "Non-toxic, non-staining, latex-free", "Strengthens grip, fingers, and intrinsic hand muscles",
    ],
    gallery: [
      { src: "/assets/products/fab/10-0924.jpg", alt: "TheraPutty Exercise Putty — Red (Soft), 5 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hand Exercisers" },
          { label: "SKU", value: "FAB 10-0924" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/100924",
    seo: {
      title: "TheraPutty Exercise Putty — Red (Soft), 5 lb (FAB 10-0924) | GM Therapy",
      description: "Bulk hand-therapy exercise putty — Red (Soft)",
    },
  },
  "503": {
    productId: "503",
    slug: "rep-latex-free-exercise-band-lime-x-heavy-50-yd",
    tagline: "REP latex-free resistance band — Lime (X-Heavy)",
    overview: [
      "REP Latex-Free Exercise Band — Lime (X-Heavy), 50 yd — REP latex-free resistance band — Lime (X-Heavy). 50 yard dispenser roll",
    ],
    highlights: [
      "REP latex-free resistance band — Lime (X-Heavy)", "50 yard dispenser roll", "Cuts to any length for clinical or home use", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1091.jpg", alt: "REP Latex-Free Exercise Band — Lime (X-Heavy), 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-1091" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/101091",
    seo: {
      title: "REP Latex-Free Exercise Band — Lime (X-Heavy), 50 yd (FAB 10-1091) | GM Therapy",
      description: "REP latex-free resistance band — Lime (X-Heavy)",
    },
  },
  "504": {
    productId: "504",
    slug: "rep-latex-free-exercise-band-5-piece-50-yd-set-peach-plum",
    tagline: "Complete REP band set — five 50-yard rolls",
    overview: [
      "REP Latex-Free Exercise Band — 5-Piece 50 yd Set (Peach–Plum) — Complete REP band set — five 50-yard rolls. Color progression: Peach, Orange, Lime, Blueberry, Plum",
    ],
    highlights: [
      "Complete REP band set — five 50-yard rolls", "Color progression: Peach, Orange, Lime, Blueberry, Plum", "Cuts to any length for clinical use", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-1095.jpg", alt: "REP Latex-Free Exercise Band — 5-Piece 50 yd Set (Peach–Plum)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-1095" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/101095",
    seo: {
      title: "REP Latex-Free Exercise Band — 5-Piece 50 yd Set (Peach–Plum) (FAB 10-1095) | GM Therapy",
      description: "Complete REP band set — five 50-yard rolls",
    },
  },
  "505": {
    productId: "505",
    slug: "cando-latex-free-5-foot-singles-green-medium-30-dispenser",
    tagline: "Pre-cut 5-foot resistance band singles — Green (Medium)",
    overview: [
      "CanDo Latex-Free 5-Foot Singles — Green (Medium), 30/Dispenser — Pre-cut 5-foot resistance band singles — Green (Medium). 30-piece dispenser",
    ],
    highlights: [
      "Pre-cut 5-foot resistance band singles — Green (Medium)", "30-piece dispenser", "Latex-free for sensitive patients", "Color-coded progressive resistance", "Convenient ready-to-use clinical format",
    ],
    gallery: [
      { src: "/assets/products/fab/10-5743.jpg", alt: "CanDo Latex-Free 5-Foot Singles — Green (Medium), 30/Dispenser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-5743" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/105743",
    seo: {
      title: "CanDo Latex-Free 5-Foot Singles — Green (Medium), 30/Dispenser (FAB 10-5743) | GM Therapy",
      description: "Pre-cut 5-foot resistance band singles — Green (Medium)",
    },
  },
  "506": {
    productId: "506",
    slug: "magneciser-arm-leg-pedal-exerciser",
    tagline: "Compact pedal exerciser for arms or legs",
    overview: [
      "Magneciser Arm/Leg Pedal Exerciser — Compact pedal exerciser for arms or legs. Magnetic resistance — smooth and quiet",
    ],
    highlights: [
      "Compact pedal exerciser for arms or legs", "Magnetic resistance — smooth and quiet", "Adjustable tension knob", "Lightweight, portable design", "Ideal for low-impact rehab and circulation",
    ],
    gallery: [
      { src: "/assets/products/fab/01-8030.jpg", alt: "Magneciser Arm/Leg Pedal Exerciser" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Exercise" },
          { label: "SKU", value: "FAB 01-8030" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/018030",
    seo: {
      title: "Magneciser Arm/Leg Pedal Exerciser (FAB 01-8030) | GM Therapy",
      description: "Compact pedal exerciser for arms or legs",
    },
  },
  "507": {
    productId: "507",
    slug: "soothing-touch-basics-massage-cream-unscented-1-gallon",
    tagline: "Professional massage cream — unscented",
    overview: [
      "Soothing Touch Basics Massage Cream — Unscented, 1 Gallon — Professional massage cream — unscented. 1 gallon size for clinical use",
    ],
    highlights: [
      "Professional massage cream — unscented", "1 gallon size for clinical use", "Smooth, non-greasy formula", "Excellent glide and absorption", "Ideal for deep-tissue and Swedish massage",
    ],
    gallery: [
      { src: "/assets/products/fab/13-3224.jpg", alt: "Soothing Touch Basics Massage Cream — Unscented, 1 Gallon" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Massage Supplies" },
          { label: "SKU", value: "FAB 13-3224" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/133224",
    seo: {
      title: "Soothing Touch Basics Massage Cream — Unscented, 1 Gallon (FAB 13-3224) | GM Therapy",
      description: "Professional massage cream — unscented",
    },
  },
  "508": {
    productId: "508",
    slug: "soothing-touch-fragrance-free-lite-oil-1-gallon",
    tagline: "Lightweight massage oil — fragrance free",
    overview: [
      "Soothing Touch Fragrance-Free Lite Oil — 1 Gallon — Lightweight massage oil — fragrance free. 1 gallon size for clinical use",
    ],
    highlights: [
      "Lightweight massage oil — fragrance free", "1 gallon size for clinical use", "Smooth glide for extended sessions", "Non-staining, easily absorbed", "Ideal for sensitive-skin clients",
    ],
    gallery: [
      { src: "/assets/products/fab/13-3225.jpg", alt: "Soothing Touch Fragrance-Free Lite Oil — 1 Gallon" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Massage Supplies" },
          { label: "SKU", value: "FAB 13-3225" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/133225",
    seo: {
      title: "Soothing Touch Fragrance-Free Lite Oil — 1 Gallon (FAB 13-3225) | GM Therapy",
      description: "Lightweight massage oil — fragrance free",
    },
  },
  "509": {
    productId: "509",
    slug: "relief-pak-12-pack-mobile-heating-unit-110v",
    tagline: "Mobile hydrocollator heating unit",
    overview: [
      "Relief Pak 12-Pack Mobile Heating Unit — 110V — Mobile hydrocollator heating unit. Holds 12 moist heat packs",
    ],
    highlights: [
      "Mobile hydrocollator heating unit", "Holds 12 moist heat packs", "Includes (3) standard, (3) neck, (3) oversize packs", "110V operation", "Locking casters for clinical mobility", "Stainless-steel construction",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1965-2.jpg", alt: "Relief Pak 12-Pack Mobile Heating Unit — 110V" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1965-2" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111965-2",
    seo: {
      title: "Relief Pak 12-Pack Mobile Heating Unit — 110V (FAB 11-1965-2) | GM Therapy",
      description: "Mobile hydrocollator heating unit",
    },
  },
  "511": {
    productId: "511",
    slug: "baseline-lite-hydraulic-pinch-gauge-50-lb",
    tagline: "Baseline LITE hydraulic pinch gauge",
    overview: [
      "Baseline LITE Hydraulic Pinch Gauge — 50 lb — Baseline LITE hydraulic pinch gauge. 50 lb capacity",
    ],
    highlights: [
      "Baseline LITE hydraulic pinch gauge", "50 lb capacity", "Measures tip, key, and palmar pinch", "Easy-to-read analog dial", "Lightweight clinical evaluation tool", "Includes carrying case",
    ],
    gallery: [
      { src: "/assets/products/fab/12-0226.jpg", alt: "Baseline LITE Hydraulic Pinch Gauge — 50 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-0226" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/120226",
    seo: {
      title: "Baseline LITE Hydraulic Pinch Gauge — 50 lb (FAB 12-0226) | GM Therapy",
      description: "Baseline LITE hydraulic pinch gauge",
    },
  },
  "512": {
    productId: "512",
    slug: "baseline-electronic-smedley-hand-dynamometer-adult-200-lb-90-kg",
    tagline: "Electronic Smedley-style hand dynamometer",
    overview: [
      "Baseline Electronic Smedley Hand Dynamometer — Adult, 200 lb / 90 kg — Electronic Smedley-style hand dynamometer. Capacity: 200 lb / 90 kg",
    ],
    highlights: [
      "Electronic Smedley-style hand dynamometer", "Capacity: 200 lb / 90 kg", "Digital LCD display", "Adult adjustable handle", "Reliable grip-strength evaluation", "Compact and portable",
    ],
    gallery: [
      { src: "/assets/products/fab/12-0286.jpg", alt: "Baseline Electronic Smedley Hand Dynamometer — Adult, 200 lb / 90 kg" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-0286" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/120286",
    seo: {
      title: "Baseline Electronic Smedley Hand Dynamometer — Adult, 200 lb / 90 kg (FAB 12-0286) | GM Therapy",
      description: "Electronic Smedley-style hand dynamometer",
    },
  },
  "513": {
    productId: "513",
    slug: "relief-pak-moist-heat-pack-halfsize",
    tagline: "Moist heat therapy pack — halfsize",
    overview: [
      "Relief Pak Moist Heat Pack — Halfsize — Moist heat therapy pack — halfsize. Hydrocollator-style — retains heat 30+ minutes",
    ],
    highlights: [
      "Moist heat therapy pack — halfsize", "Hydrocollator-style — retains heat 30+ minutes", "Filled with hydrophilic silicate beads", "Smaller size ideal for joints and extremities", "Provides deep, soothing moist heat",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1313.jpg", alt: "Relief Pak Moist Heat Pack — Halfsize" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1313" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111313",
    seo: {
      title: "Relief Pak Moist Heat Pack — Halfsize (FAB 11-1313) | GM Therapy",
      description: "Moist heat therapy pack — halfsize",
    },
  },
  "514": {
    productId: "514",
    slug: "relief-pak-terry-cover-w-foam-standard",
    tagline: "Terry-with-foam cover for moist heat packs",
    overview: [
      "Relief Pak Terry Cover w/ Foam — Standard — Terry-with-foam cover for moist heat packs. Standard size",
    ],
    highlights: [
      "Terry-with-foam cover for moist heat packs", "Standard size", "Soft terry exterior with foam insulation", "Protects skin and extends pack heat retention", "Machine-washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1360.jpg", alt: "Relief Pak Terry Cover w/ Foam — Standard" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1360" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111360",
    seo: {
      title: "Relief Pak Terry Cover w/ Foam — Standard (FAB 11-1360) | GM Therapy",
      description: "Terry-with-foam cover for moist heat packs",
    },
  },
  "515": {
    productId: "515",
    slug: "relief-pak-terry-cover-w-foam-neck",
    tagline: "Terry-with-foam cover for moist heat packs",
    overview: [
      "Relief Pak Terry Cover w/ Foam — Neck — Terry-with-foam cover for moist heat packs. Neck contour size",
    ],
    highlights: [
      "Terry-with-foam cover for moist heat packs", "Neck contour size", "Soft terry exterior with foam insulation", "Protects skin and extends pack heat retention", "Machine-washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1361.jpg", alt: "Relief Pak Terry Cover w/ Foam — Neck" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1361" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111361",
    seo: {
      title: "Relief Pak Terry Cover w/ Foam — Neck (FAB 11-1361) | GM Therapy",
      description: "Terry-with-foam cover for moist heat packs",
    },
  },
  "516": {
    productId: "516",
    slug: "relief-pak-terry-cover-w-foam-oversize",
    tagline: "Terry-with-foam cover for moist heat packs",
    overview: [
      "Relief Pak Terry Cover w/ Foam — Oversize — Terry-with-foam cover for moist heat packs. Oversize for back, hips, or shoulders",
    ],
    highlights: [
      "Terry-with-foam cover for moist heat packs", "Oversize for back, hips, or shoulders", "Soft terry exterior with foam insulation", "Protects skin and extends pack heat retention", "Machine-washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1362.jpg", alt: "Relief Pak Terry Cover w/ Foam — Oversize" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1362" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111362",
    seo: {
      title: "Relief Pak Terry Cover w/ Foam — Oversize (FAB 11-1362) | GM Therapy",
      description: "Terry-with-foam cover for moist heat packs",
    },
  },
  "517": {
    productId: "517",
    slug: "fabstim-iontophoresis-kit-6-patch-vial-80-ma-min",
    tagline: "FabStim iontophoresis treatment kit",
    overview: [
      "FabStim Iontophoresis Kit — 6 Patch/Vial, 80 mA-min — FabStim iontophoresis treatment kit. 6 patches and 6 vials per kit",
    ],
    highlights: [
      "FabStim iontophoresis treatment kit", "6 patches and 6 vials per kit", "80 mA-min dosage", "Self-contained for in-clinic use", "Helps deliver medication through the skin", "Compatible with standard iontophoresis controllers",
    ],
    gallery: [
      { src: "/assets/products/fab/13-5270.jpg", alt: "FabStim Iontophoresis Kit — 6 Patch/Vial, 80 mA-min" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-5270" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/135270",
    seo: {
      title: "FabStim Iontophoresis Kit — 6 Patch/Vial, 80 mA-min (FAB 13-5270) | GM Therapy",
      description: "FabStim iontophoresis treatment kit",
    },
  },
  "518": {
    productId: "518",
    slug: "relief-pak-black-urethane-reusable-cold-pack-standard-11-x-14",
    tagline: "Heavy-duty reusable cold pack",
    overview: [
      "Relief Pak Black Urethane Reusable Cold Pack — Standard (11 x 14\") — Heavy-duty reusable cold pack. Black urethane construction — puncture resistant",
    ],
    highlights: [
      "Heavy-duty reusable cold pack", "Black urethane construction — puncture resistant", "Standard size: 11\" x 14\"", "Stays flexible when frozen", "Conforms to body contours", "Ideal for clinical cryotherapy",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1250.jpg", alt: "Relief Pak Black Urethane Reusable Cold Pack — Standard (11 x 14\")" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1250" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111250",
    seo: {
      title: "Relief Pak Black Urethane Reusable Cold Pack — Standard (11 x 14\") (FAB 11-1250) | GM Therapy",
      description: "Heavy-duty reusable cold pack",
    },
  },
  "519": {
    productId: "519",
    slug: "relief-pak-black-urethane-reusable-cold-pack-neck-6-x-23",
    tagline: "Heavy-duty reusable cold pack",
    overview: [
      "Relief Pak Black Urethane Reusable Cold Pack — Neck (6 x 23\") — Heavy-duty reusable cold pack. Black urethane construction — puncture resistant",
    ],
    highlights: [
      "Heavy-duty reusable cold pack", "Black urethane construction — puncture resistant", "Neck contour size: 6\" x 23\"", "Stays flexible when frozen", "Wraps around the cervical spine", "Ideal for clinical cryotherapy",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1251.jpg", alt: "Relief Pak Black Urethane Reusable Cold Pack — Neck (6 x 23\")" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1251" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111251",
    seo: {
      title: "Relief Pak Black Urethane Reusable Cold Pack — Neck (6 x 23\") (FAB 11-1251) | GM Therapy",
      description: "Heavy-duty reusable cold pack",
    },
  },
  "520": {
    productId: "520",
    slug: "relief-pak-black-urethane-reusable-cold-pack-oversize-11-x-21",
    tagline: "Heavy-duty reusable cold pack",
    overview: [
      "Relief Pak Black Urethane Reusable Cold Pack — Oversize (11 x 21\") — Heavy-duty reusable cold pack. Black urethane construction — puncture resistant",
    ],
    highlights: [
      "Heavy-duty reusable cold pack", "Black urethane construction — puncture resistant", "Oversize: 11\" x 21\"", "Stays flexible when frozen", "Large coverage for back, hips, or thighs", "Ideal for clinical cryotherapy",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1252.jpg", alt: "Relief Pak Black Urethane Reusable Cold Pack — Oversize (11 x 21\")" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1252" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111252",
    seo: {
      title: "Relief Pak Black Urethane Reusable Cold Pack — Oversize (11 x 21\") (FAB 11-1252) | GM Therapy",
      description: "Heavy-duty reusable cold pack",
    },
  },
  "521": {
    productId: "521",
    slug: "relief-pak-black-urethane-reusable-cold-pack-halfsize-7-x-11",
    tagline: "Heavy-duty reusable cold pack",
    overview: [
      "Relief Pak Black Urethane Reusable Cold Pack — Halfsize (7 x 11\") — Heavy-duty reusable cold pack. Black urethane construction — puncture resistant",
    ],
    highlights: [
      "Heavy-duty reusable cold pack", "Black urethane construction — puncture resistant", "Halfsize: 7\" x 11\"", "Stays flexible when frozen", "Ideal for joints and small areas", "Clinical cryotherapy use",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1253.jpg", alt: "Relief Pak Black Urethane Reusable Cold Pack — Halfsize (7 x 11\")" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1253" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111253",
    seo: {
      title: "Relief Pak Black Urethane Reusable Cold Pack — Halfsize (7 x 11\") (FAB 11-1253) | GM Therapy",
      description: "Heavy-duty reusable cold pack",
    },
  },
  "522": {
    productId: "522",
    slug: "sup-r-band-latex-free-tan-xx-light-50-yd",
    tagline: "Sup-R Band latex-free resistance band — Tan (XX-Light)",
    overview: [
      "Sup-R Band Latex-Free — Tan (XX-Light), 50 yd — Sup-R Band latex-free resistance band — Tan (XX-Light). 50 yard roll",
    ],
    highlights: [
      "Sup-R Band latex-free resistance band — Tan (XX-Light)", "50 yard roll", "Highest tear and snap resistance in its class", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6320.jpg", alt: "Sup-R Band Latex-Free — Tan (XX-Light), 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-6320" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106320",
    seo: {
      title: "Sup-R Band Latex-Free — Tan (XX-Light), 50 yd (FAB 10-6320) | GM Therapy",
      description: "Sup-R Band latex-free resistance band — Tan (XX-Light)",
    },
  },
  "523": {
    productId: "523",
    slug: "sup-r-band-latex-free-yellow-x-light-50-yd",
    tagline: "Sup-R Band latex-free resistance band — Yellow (X-Light)",
    overview: [
      "Sup-R Band Latex-Free — Yellow (X-Light), 50 yd — Sup-R Band latex-free resistance band — Yellow (X-Light). 50 yard roll",
    ],
    highlights: [
      "Sup-R Band latex-free resistance band — Yellow (X-Light)", "50 yard roll", "Highest tear and snap resistance in its class", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6321.jpg", alt: "Sup-R Band Latex-Free — Yellow (X-Light), 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-6321" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106321",
    seo: {
      title: "Sup-R Band Latex-Free — Yellow (X-Light), 50 yd (FAB 10-6321) | GM Therapy",
      description: "Sup-R Band latex-free resistance band — Yellow (X-Light)",
    },
  },
  "524": {
    productId: "524",
    slug: "sup-r-band-latex-free-silver-xx-heavy-50-yd",
    tagline: "Sup-R Band latex-free resistance band — Silver (XX-Heavy)",
    overview: [
      "Sup-R Band Latex-Free — Silver (XX-Heavy), 50 yd — Sup-R Band latex-free resistance band — Silver (XX-Heavy). 50 yard roll",
    ],
    highlights: [
      "Sup-R Band latex-free resistance band — Silver (XX-Heavy)", "50 yard roll", "Highest tear and snap resistance in its class", "Color-coded progressive resistance", "Safe for patients with latex allergies",
    ],
    gallery: [
      { src: "/assets/products/fab/10-6326.jpg", alt: "Sup-R Band Latex-Free — Silver (XX-Heavy), 50 yd" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Bands & Tubing" },
          { label: "SKU", value: "FAB 10-6326" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/106326",
    seo: {
      title: "Sup-R Band Latex-Free — Silver (XX-Heavy), 50 yd (FAB 10-6326) | GM Therapy",
      description: "Sup-R Band latex-free resistance band — Silver (XX-Heavy)",
    },
  },
  "528": {
    productId: "528",
    slug: "disposable-baseline-tactile-monofilament-evaluator-5-07-10g-40-pack-ada",
    tagline: "Disposable monofilament evaluator — 40 pack",
    overview: [
      "Disposable Baseline Tactile Monofilament Evaluator — 5.07 (10g), 40-pack (ADA) — Disposable monofilament evaluator — 40 pack.",
    ],
    highlights: [
      "Disposable tactile monofilament evaluator", "5.07 (10 gram) calibration", "40 evaluators per pack — ADA program", "Standard diabetic neuropathy screening", "Single-use for infection control",
    ],
    gallery: [
      { src: "/assets/products/fab/12-1671-40.jpg", alt: "Disposable Baseline Tactile Monofilament Evaluator — 5.07 (10g), 40-pack (ADA)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Evaluation" },
          { label: "SKU", value: "FAB 12-1671-40" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/121671-40",
    seo: {
      title: "Disposable Baseline Tactile Monofilament Evaluator — 5.07 (10g), 40-pack (ADA) (FAB 12-1671-40) | GM Therapy",
      description: "Disposable monofilament evaluator — 40 pack",
    },
  },
  "531": {
    productId: "531",
    slug: "cando-round-foam-roller-blue-6-x-36",
    tagline: "Round foam roller for myofascial release",
    overview: [
      "CanDo Round Foam Roller — Blue, 6\" x 36\" — Round foam roller for myofascial release.",
    ],
    highlights: [
      "6\" diameter x 36\" length", "Blue, medium-firm density", "Myofascial release and self-massage", "Core stability and balance training", "Lightweight closed-cell foam",
    ],
    gallery: [
      { src: "/assets/products/fab/30-2150.jpg", alt: "CanDo Round Foam Roller — Blue, 6\" x 36\"" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Exercise" },
          { label: "SKU", value: "FAB 30-2150" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/302150",
    seo: {
      title: "CanDo Round Foam Roller — Blue, 6\" x 36\" (FAB 30-2150) | GM Therapy",
      description: "Round foam roller for myofascial release",
    },
  },
  "532": {
    productId: "532",
    slug: "evenup-shoe-leveler-medium-sizes-9-11",
    tagline: "Shoe leveler to compensate for leg length discrepancy",
    overview: [
      "Evenup Shoe Leveler — Medium (sizes 9-11) — Shoe leveler to compensate for leg length discrepancy.",
    ],
    highlights: [
      "Compensates for leg length discrepancy", "Medium — fits shoe sizes 9-11", "Reduces gait asymmetry", "Slip-on attachment to existing shoe", "Sold individually",
    ],
    gallery: [
      { src: "/assets/products/fab/43-2091.jpg", alt: "Evenup Shoe Leveler — Medium (sizes 9-11)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "DME" },
          { label: "SKU", value: "FAB 43-2091" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/432091",
    seo: {
      title: "Evenup Shoe Leveler — Medium (sizes 9-11) (FAB 43-2091) | GM Therapy",
      description: "Shoe leveler to compensate for leg length discrepancy",
    },
  },
  "533": {
    productId: "533",
    slug: "straight-handle-contoured-sponge",
    tagline: "Long-handle contoured bath sponge",
    overview: [
      "Straight Handle Contoured Sponge — Long-handle contoured bath sponge.",
    ],
    highlights: [
      "Straight long handle for extended reach", "Contoured sponge head", "Helps users with limited mobility bathe independently", "Lightweight and easy to grip", "ADL self-care aid",
    ],
    gallery: [
      { src: "/assets/products/fab/45-2381.jpg", alt: "Straight Handle Contoured Sponge" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "DME" },
          { label: "SKU", value: "FAB 45-2381" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/452381",
    seo: {
      title: "Straight Handle Contoured Sponge (FAB 45-2381) | GM Therapy",
      description: "Long-handle contoured bath sponge",
    },
  },
  "534": {
    productId: "534",
    slug: "cando-inflatable-sitting-wedge-child",
    tagline: "Inflatable child sitting wedge for active sitting",
    overview: [
      "CanDo Inflatable Sitting Wedge — Child — Inflatable child sitting wedge for active sitting.",
    ],
    highlights: [
      "Inflatable air-filled wedge", "Child-sized", "Promotes active sitting and posture", "Improves core engagement", "Textured surface for sensory input",
    ],
    gallery: [
      { src: "/assets/products/fab/30-1926.jpg", alt: "CanDo Inflatable Sitting Wedge — Child" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Exercise" },
          { label: "SKU", value: "FAB 30-1926" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/301926",
    seo: {
      title: "CanDo Inflatable Sitting Wedge — Child (FAB 30-1926) | GM Therapy",
      description: "Inflatable child sitting wedge for active sitting",
    },
  },
  "535": {
    productId: "535",
    slug: "cando-hand-therapy-blocks-assorted-pack-of-12",
    tagline: "Hand therapy blocks — Extra-Soft through Firm",
    overview: [
      "CanDo Hand Therapy Blocks — Assorted, Pack of 12 — Hand therapy blocks — Extra-Soft through Firm.",
    ],
    highlights: [
      "Hand therapy progressive resistance blocks", "Pack of 12 — assorted resistances", "Extra-Soft through Firm", "Strengthens grip, fingers, and forearm", "Color-coded resistance levels",
    ],
    gallery: [
      { src: "/assets/products/fab/10-2468.jpg", alt: "CanDo Hand Therapy Blocks — Assorted, Pack of 12" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Exercise" },
          { label: "SKU", value: "FAB 10-2468" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/102468",
    seo: {
      title: "CanDo Hand Therapy Blocks — Assorted, Pack of 12 (FAB 10-2468) | GM Therapy",
      description: "Hand therapy blocks — Extra-Soft through Firm",
    },
  },
  "536": {
    productId: "536",
    slug: "atx-straight-knee-wrap-one-size",
    tagline: "ATX straight knee wrap for cold compression",
    overview: [
      "ATX Straight Knee Wrap — One Size — ATX straight knee wrap for cold compression.",
    ],
    highlights: [
      "ATX cold compression straight knee wrap", "One size fits all", "Targeted cold therapy and compression", "Used with ATX dual-temperature systems", "Post-surgical and rehab applications",
    ],
    gallery: [
      { src: "/assets/products/fab/13-2514.jpg", alt: "ATX Straight Knee Wrap — One Size" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 13-2514" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/132514",
    seo: {
      title: "ATX Straight Knee Wrap — One Size (FAB 13-2514) | GM Therapy",
      description: "ATX straight knee wrap for cold compression",
    },
  },
  "537": {
    productId: "537",
    slug: "fabstim-premium-gel-self-adhesive-electrode-2-round-40-bag",
    tagline: "Premium 2\" round self-adhesive electrodes",
    overview: [
      "FabStim Premium Gel Self-Adhesive Electrode — 2\" Round, 40/bag — Premium 2\" round self-adhesive electrodes.",
    ],
    highlights: [
      "FabStim Premium gel self-adhesive electrodes", "2\" round — white foam", "40 per bag (10 sheets of 4)", "High-quality conductive gel for TENS/EMS", "Long-lasting adhesive",
    ],
    gallery: [
      { src: "/assets/products/fab/13-1287-10.jpg", alt: "FabStim Premium Gel Self-Adhesive Electrode — 2\" Round, 40/bag" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-1287-10" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/131287-10",
    seo: {
      title: "FabStim Premium Gel Self-Adhesive Electrode — 2\" Round, 40/bag (FAB 13-1287-10) | GM Therapy",
      description: "Premium 2\" round self-adhesive electrodes",
    },
  },
  "539": {
    productId: "539",
    slug: "atx-ankle-wrap-large",
    tagline: "ATX ankle wrap, large (men's shoe sizes ≤11)",
    overview: [
      "ATX Ankle Wrap — Large — ATX ankle wrap, large (men's shoe sizes ≤11).",
    ],
    highlights: [
      "ATX cold compression ankle wrap", "Large — fits men's shoe sizes 11 and under", "Targeted cold therapy with compression", "Used with ATX dual-temperature systems", "Post-surgical and acute injury support",
    ],
    gallery: [
      { src: "/assets/products/fab/13-2511.jpg", alt: "ATX Ankle Wrap — Large" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 13-2511" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/132511",
    seo: {
      title: "ATX Ankle Wrap — Large (FAB 13-2511) | GM Therapy",
      description: "ATX ankle wrap, large (men's shoe sizes ≤11)",
    },
  },
  "540": {
    productId: "540",
    slug: "atx-shoulder-wrap-large-right",
    tagline: "ATX shoulder wrap, large right (chest 40-55\")",
    overview: [
      "ATX Shoulder Wrap — Large, Right — ATX shoulder wrap, large right (chest 40-55\").",
    ],
    highlights: [
      "ATX cold compression shoulder wrap", "Large — right shoulder", "Fits chest sizes 40\"-55\"", "Targeted cold and compression therapy", "Post-surgical and rehab applications",
    ],
    gallery: [
      { src: "/assets/products/fab/13-2526.jpg", alt: "ATX Shoulder Wrap — Large, Right" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 13-2526" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/132526",
    seo: {
      title: "ATX Shoulder Wrap — Large, Right (FAB 13-2526) | GM Therapy",
      description: "ATX shoulder wrap, large right (chest 40-55\")",
    },
  },
  "541": {
    productId: "541",
    slug: "atx-articulated-knee-wrap-one-size",
    tagline: "ATX articulated knee wrap for cold compression",
    overview: [
      "ATX Articulated Knee Wrap — One Size — ATX articulated knee wrap for cold compression.",
    ],
    highlights: [
      "ATX articulated cold compression knee wrap", "One size fits all", "Articulated design for full ROM", "Used with ATX dual-temperature systems", "Post-op knee rehabilitation",
    ],
    gallery: [
      { src: "/assets/products/fab/13-2515.jpg", alt: "ATX Articulated Knee Wrap — One Size" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 13-2515" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/132515",
    seo: {
      title: "ATX Articulated Knee Wrap — One Size (FAB 13-2515) | GM Therapy",
      description: "ATX articulated knee wrap for cold compression",
    },
  },
  "542": {
    productId: "542",
    slug: "atx-dual-connector-hose-sport",
    tagline: "Dual connector hose for ATX Sport system",
    overview: [
      "ATX Dual Connector Hose — Sport — Dual connector hose for ATX Sport system.",
    ],
    highlights: [
      "Dual connector hose accessory", "For ATX Sport cold compression system", "Connects two wraps simultaneously", "Durable kink-resistant tubing", "Replacement / accessory part",
    ],
    gallery: [
      { src: "/assets/products/fab/13-2542.jpg", alt: "ATX Dual Connector Hose — Sport" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 13-2542" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/132542",
    seo: {
      title: "ATX Dual Connector Hose — Sport (FAB 13-2542) | GM Therapy",
      description: "Dual connector hose for ATX Sport system",
    },
  },
  "543": {
    productId: "543",
    slug: "scotsman-prodigy-plus-nugget-ice-maker-420-lb",
    tagline: "Commercial nugget ice maker — 420 lb production",
    overview: [
      "Scotsman Prodigy Plus Nugget Ice Maker — 420 lb — Commercial nugget ice maker — 420 lb production.",
    ],
    highlights: [
      "Scotsman Prodigy Plus commercial ice maker", "Nugget-style ice — 420 lb daily production", "420 lb storage bin", "Energy-efficient design", "Ideal for clinical hot/cold therapy programs",
    ],
    gallery: [
      { src: "/assets/products/fab/66-0015.jpg", alt: "Scotsman Prodigy Plus Nugget Ice Maker — 420 lb" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 66-0015" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/660015",
    seo: {
      title: "Scotsman Prodigy Plus Nugget Ice Maker — 420 lb (FAB 66-0015) | GM Therapy",
      description: "Commercial nugget ice maker — 420 lb production",
    },
  },
  "544": {
    productId: "544",
    slug: "relief-pak-heat-pack-cover-terry-with-foam-standard-with-pocket",
    tagline: "Standard hydrocollator pack cover with pocket",
    overview: [
      "Relief Pak Heat Pack Cover — Terry with Foam, Standard with Pocket — Standard hydrocollator pack cover with pocket.",
    ],
    highlights: [
      "Relief Pak moist heat pack cover", "Terry exterior with foam insulation", "Standard size with pocket", "Insulates patient from hot pack", "Machine washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1364.jpg", alt: "Relief Pak Heat Pack Cover — Terry with Foam, Standard with Pocket" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1364" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111364",
    seo: {
      title: "Relief Pak Heat Pack Cover — Terry with Foam, Standard with Pocket (FAB 11-1364) | GM Therapy",
      description: "Standard hydrocollator pack cover with pocket",
    },
  },
  "545": {
    productId: "545",
    slug: "fabstim-premium-gel-self-adhesive-electrode-3-round-40-bag",
    tagline: "Premium 3\" round self-adhesive electrodes",
    overview: [
      "FabStim Premium Gel Self-Adhesive Electrode — 3\" Round, 40/bag — Premium 3\" round self-adhesive electrodes.",
    ],
    highlights: [
      "FabStim Premium gel self-adhesive electrodes", "3\" round — white foam", "40 per bag (10 sheets of 4)", "High-quality conductive gel for TENS/EMS", "Long-lasting adhesive",
    ],
    gallery: [
      { src: "/assets/products/fab/13-1288-10.jpg", alt: "FabStim Premium Gel Self-Adhesive Electrode — 3\" Round, 40/bag" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-1288-10" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/131288-10",
    seo: {
      title: "FabStim Premium Gel Self-Adhesive Electrode — 3\" Round, 40/bag (FAB 13-1288-10) | GM Therapy",
      description: "Premium 3\" round self-adhesive electrodes",
    },
  },
  "546": {
    productId: "546",
    slug: "relief-pak-heat-pack-cover-all-terry-standard",
    tagline: "Standard all-terry hydrocollator pack cover",
    overview: [
      "Relief Pak Heat Pack Cover — All Terry, Standard — Standard all-terry hydrocollator pack cover.",
    ],
    highlights: [
      "Relief Pak moist heat pack cover", "All-terry construction", "Standard size", "Soft, comfortable contact surface", "Machine washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1366.jpg", alt: "Relief Pak Heat Pack Cover — All Terry, Standard" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1366" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111366",
    seo: {
      title: "Relief Pak Heat Pack Cover — All Terry, Standard (FAB 11-1366) | GM Therapy",
      description: "Standard all-terry hydrocollator pack cover",
    },
  },
  "547": {
    productId: "547",
    slug: "relief-pak-heat-pack-cover-all-terry-neck",
    tagline: "Neck-shape all-terry hydrocollator pack cover",
    overview: [
      "Relief Pak Heat Pack Cover — All Terry, Neck — Neck-shape all-terry hydrocollator pack cover.",
    ],
    highlights: [
      "Relief Pak moist heat pack cover", "All-terry construction", "Neck (cervical) shape", "Soft, comfortable contact surface", "Machine washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1367.jpg", alt: "Relief Pak Heat Pack Cover — All Terry, Neck" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1367" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111367",
    seo: {
      title: "Relief Pak Heat Pack Cover — All Terry, Neck (FAB 11-1367) | GM Therapy",
      description: "Neck-shape all-terry hydrocollator pack cover",
    },
  },
  "548": {
    productId: "548",
    slug: "relief-pak-heat-pack-cover-all-terry-oversize",
    tagline: "Oversize all-terry hydrocollator pack cover",
    overview: [
      "Relief Pak Heat Pack Cover — All Terry, Oversize — Oversize all-terry hydrocollator pack cover.",
    ],
    highlights: [
      "Relief Pak moist heat pack cover", "All-terry construction", "Oversize", "Soft, comfortable contact surface", "Machine washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1368.jpg", alt: "Relief Pak Heat Pack Cover — All Terry, Oversize" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1368" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111368",
    seo: {
      title: "Relief Pak Heat Pack Cover — All Terry, Oversize (FAB 11-1368) | GM Therapy",
      description: "Oversize all-terry hydrocollator pack cover",
    },
  },
  "549": {
    productId: "549",
    slug: "relief-pak-heat-pack-cover-all-terry-halfsize",
    tagline: "Halfsize all-terry hydrocollator pack cover",
    overview: [
      "Relief Pak Heat Pack Cover — All Terry, Halfsize — Halfsize all-terry hydrocollator pack cover.",
    ],
    highlights: [
      "Relief Pak moist heat pack cover", "All-terry construction", "Halfsize", "Soft, comfortable contact surface", "Machine washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1369.jpg", alt: "Relief Pak Heat Pack Cover — All Terry, Halfsize" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1369" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111369",
    seo: {
      title: "Relief Pak Heat Pack Cover — All Terry, Halfsize (FAB 11-1369) | GM Therapy",
      description: "Halfsize all-terry hydrocollator pack cover",
    },
  },
  "550": {
    productId: "550",
    slug: "relief-pak-black-urethane-reusable-cold-pack-circular-10-diameter",
    tagline: "Heavy-duty 10\" circular urethane cold pack",
    overview: [
      "Relief Pak Black Urethane Reusable Cold Pack — Circular (10\" diameter) — Heavy-duty 10\" circular urethane cold pack.",
    ],
    highlights: [
      "Heavy-duty reusable cold pack", "Black urethane construction — puncture resistant", "Circular — 10\" diameter", "Stays flexible when frozen", "Ideal for shoulders, hips, and large joints",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1257.jpg", alt: "Relief Pak Black Urethane Reusable Cold Pack — Circular (10\" diameter)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1257" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111257",
    seo: {
      title: "Relief Pak Black Urethane Reusable Cold Pack — Circular (10\" diameter) (FAB 11-1257) | GM Therapy",
      description: "Heavy-duty 10\" circular urethane cold pack",
    },
  },
  "551": {
    productId: "551",
    slug: "relief-pak-heat-pack-cover-terry-with-foam-halfsize",
    tagline: "Halfsize hydrocollator pack cover with foam",
    overview: [
      "Relief Pak Heat Pack Cover — Terry with Foam, Halfsize — Halfsize hydrocollator pack cover with foam.",
    ],
    highlights: [
      "Relief Pak moist heat pack cover", "Terry exterior with foam insulation", "Halfsize", "Insulates patient from hot pack", "Machine washable",
    ],
    gallery: [
      { src: "/assets/products/fab/11-1363.jpg", alt: "Relief Pak Heat Pack Cover — Terry with Foam, Halfsize" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Hot & Cold Therapy" },
          { label: "SKU", value: "FAB 11-1363" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/111363",
    seo: {
      title: "Relief Pak Heat Pack Cover — Terry with Foam, Halfsize (FAB 11-1363) | GM Therapy",
      description: "Halfsize hydrocollator pack cover with foam",
    },
  },
  "552": {
    productId: "552",
    slug: "fabstim-premium-gel-self-adhesive-electrode-2-square-40-bag",
    tagline: "Premium 2\" square self-adhesive electrodes",
    overview: [
      "FabStim Premium Gel Self-Adhesive Electrode — 2\" Square, 40/bag — Premium 2\" square self-adhesive electrodes.",
    ],
    highlights: [
      "FabStim Premium gel self-adhesive electrodes", "2\" square — white foam", "40 per bag (10 sheets of 4)", "High-quality conductive gel for TENS/EMS", "Long-lasting adhesive",
    ],
    gallery: [
      { src: "/assets/products/fab/13-1291-10.jpg", alt: "FabStim Premium Gel Self-Adhesive Electrode — 2\" Square, 40/bag" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-1291-10" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/131291-10",
    seo: {
      title: "FabStim Premium Gel Self-Adhesive Electrode — 2\" Square, 40/bag (FAB 13-1291-10) | GM Therapy",
      description: "Premium 2\" square self-adhesive electrodes",
    },
  },
  "553": {
    productId: "553",
    slug: "fabstim-premium-gel-electrode-2-x-3-5-rectangle-40-bag",
    tagline: "Premium 2 x 3.5\" rectangle self-adhesive electrodes",
    overview: [
      "FabStim Premium Gel Electrode — 2 x 3.5\" Rectangle, 40/bag — Premium 2 x 3.5\" rectangle self-adhesive electrodes.",
    ],
    highlights: [
      "FabStim Premium gel self-adhesive electrodes", "2\" x 3.5\" rectangle — white foam", "40 per bag (10 sheets of 4)", "High-quality conductive gel for TENS/EMS", "Long-lasting adhesive",
    ],
    gallery: [
      { src: "/assets/products/fab/13-1293-10.jpg", alt: "FabStim Premium Gel Electrode — 2 x 3.5\" Rectangle, 40/bag" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 13-1293-10" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/131293-10",
    seo: {
      title: "FabStim Premium Gel Electrode — 2 x 3.5\" Rectangle, 40/bag (FAB 13-1293-10) | GM Therapy",
      description: "Premium 2 x 3.5\" rectangle self-adhesive electrodes",
    },
  },
  "554": {
    productId: "554",
    slug: "point-relief-coldspot-gel-pump-16-oz",
    tagline: "Cooling analgesic gel pump, 16 ounce",
    overview: [
      "Point Relief ColdSpot Gel Pump — 16 oz — Cooling analgesic gel pump, 16 ounce.",
    ],
    highlights: [
      "Point Relief ColdSpot topical analgesic", "Cooling menthol formula", "16 oz pump bottle", "Fast-absorbing — non-greasy", "Provides temporary relief from minor aches and pains",
    ],
    gallery: [
      { src: "/assets/products/fab/11-0710-1.jpg", alt: "Point Relief ColdSpot Gel Pump — 16 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 11-0710-1" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/110710-1",
    seo: {
      title: "Point Relief ColdSpot Gel Pump — 16 oz (FAB 11-0710-1) | GM Therapy",
      description: "Cooling analgesic gel pump, 16 ounce",
    },
  },
  "555": {
    productId: "555",
    slug: "point-relief-coldspot-gel-pump-32-oz",
    tagline: "Cooling analgesic gel pump, 32 ounce",
    overview: [
      "Point Relief ColdSpot Gel Pump — 32 oz — Cooling analgesic gel pump, 32 ounce.",
    ],
    highlights: [
      "Point Relief ColdSpot topical analgesic", "Cooling menthol formula", "32 oz pump bottle", "Fast-absorbing — non-greasy", "Clinical-size pump for high-volume use",
    ],
    gallery: [
      { src: "/assets/products/fab/11-0711-1.jpg", alt: "Point Relief ColdSpot Gel Pump — 32 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 11-0711-1" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/110711-1",
    seo: {
      title: "Point Relief ColdSpot Gel Pump — 32 oz (FAB 11-0711-1) | GM Therapy",
      description: "Cooling analgesic gel pump, 32 ounce",
    },
  },
  "556": {
    productId: "556",
    slug: "point-relief-coldspot-gel-pump-128-oz-1-gallon",
    tagline: "Cooling analgesic gel pump, 1 gallon",
    overview: [
      "Point Relief ColdSpot Gel Pump — 128 oz (1 gallon) — Cooling analgesic gel pump, 1 gallon.",
    ],
    highlights: [
      "Point Relief ColdSpot topical analgesic", "Cooling menthol formula", "128 oz (1 gallon) pump", "Fast-absorbing — non-greasy", "Bulk size for clinics and refill use",
    ],
    gallery: [
      { src: "/assets/products/fab/11-0712-1.jpg", alt: "Point Relief ColdSpot Gel Pump — 128 oz (1 gallon)" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 11-0712-1" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/110712-1",
    seo: {
      title: "Point Relief ColdSpot Gel Pump — 128 oz (1 gallon) (FAB 11-0712-1) | GM Therapy",
      description: "Cooling analgesic gel pump, 1 gallon",
    },
  },
  "557": {
    productId: "557",
    slug: "point-relief-coldspot-roll-on-3-oz",
    tagline: "Cooling analgesic roll-on, 3 ounce",
    overview: [
      "Point Relief ColdSpot Roll-On — 3 oz — Cooling analgesic roll-on, 3 ounce.",
    ],
    highlights: [
      "Point Relief ColdSpot topical analgesic", "Cooling menthol formula", "3 oz roll-on applicator", "Mess-free targeted application", "Travel-friendly size",
    ],
    gallery: [
      { src: "/assets/products/fab/11-0720-1.jpg", alt: "Point Relief ColdSpot Roll-On — 3 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 11-0720-1" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/110720-1",
    seo: {
      title: "Point Relief ColdSpot Roll-On — 3 oz (FAB 11-0720-1) | GM Therapy",
      description: "Cooling analgesic roll-on, 3 ounce",
    },
  },
  "558": {
    productId: "558",
    slug: "point-relief-coldspot-gel-tube-4-oz",
    tagline: "Cooling analgesic gel tube, 4 ounce",
    overview: [
      "Point Relief ColdSpot Gel Tube — 4 oz — Cooling analgesic gel tube, 4 ounce.",
    ],
    highlights: [
      "Point Relief ColdSpot topical analgesic", "Cooling menthol formula", "4 oz tube", "Fast-absorbing — non-greasy", "Convenient personal-size tube",
    ],
    gallery: [
      { src: "/assets/products/fab/11-0730-1.jpg", alt: "Point Relief ColdSpot Gel Tube — 4 oz" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 11-0730-1" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/110730-1",
    seo: {
      title: "Point Relief ColdSpot Gel Tube — 4 oz (FAB 11-0730-1) | GM Therapy",
      description: "Cooling analgesic gel tube, 4 ounce",
    },
  },
  "559": {
    productId: "559",
    slug: "point-relief-coldspot-gel-pack-5g-dispenser-of-100",
    tagline: "5g single-use gel packs, 100 per dispenser",
    overview: [
      "Point Relief ColdSpot Gel Pack — 5g, Dispenser of 100 — 5g single-use gel packs, 100 per dispenser.",
    ],
    highlights: [
      "Point Relief ColdSpot single-use gel packets", "5 gram each", "100 packets per dispenser", "Hygienic single-application servings", "Ideal for trial use and clinical handouts",
    ],
    gallery: [
      { src: "/assets/products/fab/11-0740-100.jpg", alt: "Point Relief ColdSpot Gel Pack — 5g, Dispenser of 100" },
    ],
    specGroups: [
      {
        title: "Specifications",
        rows: [
          { label: "Subcategory", value: "Modalities" },
          { label: "SKU", value: "FAB 11-0740-100" },
        ],
      },
    ],
    sourceUrl: "https://www.fab-ent.com/110740-100",
    seo: {
      title: "Point Relief ColdSpot Gel Pack — 5g, Dispenser of 100 (FAB 11-0740-100) | GM Therapy",
      description: "5g single-use gel packs, 100 per dispenser",
    },
  },

  // ===== Biodex / Sport Medical (exclusive dealer TX/OK/NM) =====
  "600": {
    productId: "600",
    slug: "biodex-system-4-pro",
    tagline:
      "The gold-standard multi-mode robotic dynamometer for objective strength assessment, isokinetic testing, and joint rehabilitation.",
    overview: [
      "The Biodex/Sport Medical System 4 Pro is the world's first multi-mode computerized robotic dynamometer and remains the most-cited isokinetic system in peer-reviewed research. Its versatile positioning chair offers 360° rotation, motorized seat adjustment, and exceptional stability — accommodating virtually every test position and exercise pattern in clinical practice today.",
      "The System 4 Pro provides isokinetic, isotonic, isometric, passive, and reactive eccentric resistance modes — letting clinicians identify, treat, and document neuromuscular, musculoskeletal, and orthopedic deficits across the full continuum of care. From sports medicine and return-to-play decision-making to neurorehabilitation and pediatric therapy, the System 4 Pro delivers the objective, normative-referenced data needed to communicate need, progress, and outcome with confidence.",
      "Advantage BX™ software produces easy-to-read color graphic reports — comparing patient results against extensive normative databases — so referring physicians, payers, and patients all see measurable evidence of recovery. As your authorized dealer for Texas, Oklahoma, and New Mexico, GM Therapy Solutions provides on-site installation, in-service training for your clinical team, software support, and factory-direct calibration & service.",
    ],
    highlights: [
      "Five resistance modes: isokinetic, isotonic, isometric, passive, reactive eccentric",
      "Versatile positioning chair — 360° rotation, motorized fore/aft & seat height",
      "Fastest patient setup in the industry with preset positions",
      "Color graphic reports vs. extensive normative database",
      "Industry-standard for ACL, shoulder, knee, and return-to-play research",
      "Used in top sports medicine, university, and military research facilities",
      "Advantage BX™ software with pediatric, isolated joint, and CPM protocols",
      "On-site clinical training included with GM Therapy installation",
    ],
    gallery: [
      { src: IMG("600"), alt: "Biodex/Sport Medical product hero — id 600" },
      { src: "/assets/products/biodex/600-a.png", alt: "Biodex/Sport Medical product detail — 600-a.png" },
      { src: "/assets/products/biodex/600-b.png", alt: "Biodex/Sport Medical product detail — 600-b.png" },
      { src: "/assets/products/biodex/600-c.png", alt: "Biodex/Sport Medical product detail — 600-c.png" },
      { src: "/assets/products/biodex/600-d.png", alt: "Biodex/Sport Medical product detail — 600-d.png" },
      { src: "/assets/products/biodex/600-e.jpg", alt: "Biodex/Sport Medical product detail — 600-e.jpg" },
    ],
    specGroups: [
      {
        title: "Capabilities",
        rows: [
          { label: "Resistance modes", value: "Isokinetic, isotonic, isometric, passive, reactive eccentric" },
          { label: "Concentric speed", value: "0–500°/sec (isokinetic)" },
          { label: "Eccentric speed", value: "0–300°/sec (passive & reactive eccentric)" },
          { label: "Torque (concentric)", value: "Up to 500 ft-lb (680 Nm)" },
          { label: "Torque (eccentric)", value: "Up to 360 ft-lb (490 Nm)" },
          { label: "Test positions", value: "20+ pre-programmed joint patterns (knee, shoulder, hip, ankle, elbow, wrist, trunk)" },
        ],
      },
      {
        title: "Chair & Dynamometer",
        rows: [
          { label: "Seat rotation", value: "360°" },
          { label: "Seat travel", value: "Motorized fore/aft and height adjust" },
          { label: "Patient capacity", value: "350 lb (159 kg)" },
          { label: "Footprint", value: 'Approx. 96"L x 72"W operational area' },
          { label: "Power", value: "120 V AC, 60 Hz (220/240 V available)" },
          { label: "Software", value: "Advantage BX™ — Windows-based" },
        ],
      },
      {
        title: "Clinical Documentation",
        rows: [
          { label: "Reports", value: "Single-test, progress, bilateral comparison, return-to-play" },
          { label: "Normative data", value: "Pediatric through geriatric, sport-specific" },
          { label: "Export", value: "PDF, EMR-ready CSV" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "White-glove on-site setup by GM Therapy" },
          { label: "Training", value: "On-site clinical in-service for your therapy team" },
          { label: "Service", value: "Factory-authorized calibration & repair" },
          { label: "Warranty", value: "Manufacturer parts & labor — extended plans available" },
        ],
      },
    ],
    sourceUrl: SOURCE("system-4-pro"),
    seo: {
      title: "Biodex/Sport Medical System 4 Pro Dynamometer — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Multi-mode robotic dynamometer for isokinetic testing, strength assessment, and rehab. Authorized dealer for Texas, Oklahoma, and New Mexico — call 940-334-5169.",
    },
  },

  "601": {
    productId: "601",
    slug: "biodex-system-4-quick-set",
    tagline:
      "Streamlined fixed-height isokinetic dynamometer designed for high-volume clinics that demand fast patient setup.",
    overview: [
      "The Biodex/Sport Medical System 4 Quick-Set delivers all of the testing and rehabilitation power of the System 4 Pro in a streamlined fixed-height chair built for fast, repeatable patient setup. Ideal for high-volume sports medicine clinics, university athletic programs, and outpatient rehab centers that need to move efficiently from one patient to the next without sacrificing the depth of Biodex/Sport Medical objective data.",
      "The Quick-Set retains every multi-mode capability — isokinetic, isotonic, isometric, passive, and reactive eccentric — and runs the same Advantage BX™ software with normative comparisons, return-to-play protocols, and EMR-ready reporting. The 360° rotating chair with front/back travel allows fast access for knee, shoulder, hip, ankle, elbow, and trunk testing.",
      "GM Therapy Solutions delivers the Quick-Set with on-site installation, clinician training, and factory-direct service across Texas, Oklahoma, and New Mexico.",
    ],
    highlights: [
      "Fixed-height positioning chair with 360° rotation & front/back travel",
      "Same five resistance modes as the System 4 Pro",
      "Faster patient setup — ideal for high-volume clinics",
      "Advantage BX™ software with normative comparisons",
      "Return-to-play & ACL protocols built-in",
      "Lower investment than System 4 Pro — full Biodex/Sport Medical clinical depth",
      "Local installation and clinical training included",
    ],
    gallery: [
      { src: IMG("601"), alt: "Biodex/Sport Medical product hero — id 601" },
      { src: "/assets/products/biodex/601-a.png", alt: "Biodex/Sport Medical product detail — 601-a.png" },
      { src: "/assets/products/biodex/601-b.png", alt: "Biodex/Sport Medical product detail — 601-b.png" },
      { src: "/assets/products/biodex/601-c.png", alt: "Biodex/Sport Medical product detail — 601-c.png" },
      { src: "/assets/products/biodex/601-d.png", alt: "Biodex/Sport Medical product detail — 601-d.png" },
      { src: "/assets/products/biodex/601-e.jpg", alt: "Biodex/Sport Medical product detail — 601-e.jpg" },
    ],
    specGroups: [
      {
        title: "Capabilities",
        rows: [
          { label: "Resistance modes", value: "Isokinetic, isotonic, isometric, passive, reactive eccentric" },
          { label: "Concentric speed", value: "0–500°/sec" },
          { label: "Eccentric speed", value: "0–300°/sec" },
          { label: "Torque (concentric)", value: "Up to 500 ft-lb (680 Nm)" },
          { label: "Torque (eccentric)", value: "Up to 360 ft-lb (490 Nm)" },
        ],
      },
      {
        title: "Chair & Setup",
        rows: [
          { label: "Chair type", value: "Fixed-height with 360° rotation, front/back travel" },
          { label: "Patient capacity", value: "350 lb (159 kg)" },
          { label: "Setup time", value: "Up to 50% faster than full System 4 Pro" },
          { label: "Software", value: "Advantage BX™" },
          { label: "Power", value: "120 V AC, 60 Hz" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "On-site setup by GM Therapy" },
          { label: "Training", value: "Clinical in-service included" },
          { label: "Service", value: "Factory-authorized calibration & repair" },
        ],
      },
    ],
    sourceUrl: SOURCE("system-4-quick-set"),
    seo: {
      title: "Biodex/Sport Medical System 4 Quick-Set — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Fast-setup isokinetic dynamometer with full multi-mode resistance and Advantage BX software. Authorized dealer for TX, OK, NM — call 940-334-5169.",
    },
  },

  "602": {
    productId: "602",
    slug: "biodex-sit2stand-trainer",
    tagline:
      "Squat-assist trainer that strengthens lower extremities and reinforces the most fundamental functional movement: sit-to-stand.",
    overview: [
      "The ability to rise from a seated position is the single most fundamental movement for functional independence. The Biodex/Sport Medical Sit2Stand™ Squat-Assist Trainer makes it possible to safely train this motion in a progressive, repeatable environment — building lower-extremity strength, endurance, and confidence across a wide range of patient populations.",
      "Variable assistance levels allow clinicians to scale the work to each patient — from older adults rebuilding independence after a fall, to post-surgical knee and hip rehab, to athletes targeting eccentric quad strength. The Sit2Stand also engages upper-extremity musculature, helping correct compensatory patterns that often develop with lower-extremity weakness.",
      "Conveniently located adjustment levers for seat height and assistance make patient turnover fast, and the open architecture lets therapists guide form and progression hands-on. Delivered, installed, and supported across Texas, Oklahoma, and New Mexico by GM Therapy Solutions.",
    ],
    highlights: [
      "Safely trains the sit-to-stand motion — the foundation of independence",
      "Variable squat assistance — scales from frail elderly to athletic populations",
      "Builds lower-extremity strength, endurance, and confidence",
      "Engages upper extremities to correct compensatory patterns",
      "Quick-adjust seat height and assistance levers — fast patient turnover",
      "Low-impact, joint-friendly progressive loading",
      "Ideal for older adults, post-op knee/hip, neuro rehab, and wellness",
    ],
    gallery: [
      { src: IMG("602"), alt: "Biodex/Sport Medical product hero — id 602" },
      { src: "/assets/products/biodex/602-a.png", alt: "Biodex/Sport Medical product detail — 602-a.png" },
      { src: "/assets/products/biodex/602-b.png", alt: "Biodex/Sport Medical product detail — 602-b.png" },
      { src: "/assets/products/biodex/602-c.png", alt: "Biodex/Sport Medical product detail — 602-c.png" },
      { src: "/assets/products/biodex/602-d.png", alt: "Biodex/Sport Medical product detail — 602-d.png" },
      { src: "/assets/products/biodex/602-e.jpg", alt: "Biodex/Sport Medical product detail — 602-e.jpg" },
    ],
    specGroups: [
      {
        title: "Training",
        rows: [
          { label: "Modes", value: "Variable squat assistance, eccentric loading" },
          { label: "Patient populations", value: "Geriatric, post-op ortho, neuro, wellness, athletic" },
          { label: "Adjustments", value: "Quick-set seat height & assistance levers" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Patient capacity", value: "300 lb (136 kg)" },
          { label: "Footprint", value: 'Approx. 48"L x 32"W' },
          { label: "Power", value: "Self-contained — no external power required for assistance mechanism" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "Local delivery & setup by GM Therapy" },
          { label: "Training", value: "Clinical protocols in-service available" },
        ],
      },
    ],
    sourceUrl: SOURCE("sit2stand-squat-assist-trainer"),
    seo: {
      title: "Biodex/Sport Medical Sit2Stand Squat-Assist Trainer — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Progressive squat-assist trainer that safely rebuilds sit-to-stand strength and independence. Authorized dealer for TX, OK, NM.",
    },
  },

  "603": {
    productId: "603",
    slug: "biodex-balance-system-sd",
    tagline:
      "The clinical standard for static and dynamic balance assessment, fall-risk screening, concussion management, and balance training.",
    overview: [
      "The Biodex/Sport Medical Balance System SD is the most widely-cited clinical platform for balance assessment and training. A single device supports static and dynamic testing, fall risk screening with normative data, athletic and tactical conditioning, neurocom-compatible CTSIB protocols, and the full Concussion Management Program — making it a foundational investment for any rehab, sports medicine, vestibular, or geriatric program.",
      "The instrumented platform provides 12 levels of progressive resistance and a large color touchscreen with intuitive interactive training games. Standardized testing modes — including Postural Stability, Limits of Stability, Fall Risk, and the Clinical Test of Sensory Integration on Balance (CTSIB) — produce objective, normative-referenced reports that document outcomes for payers, families, and referring physicians.",
      "GM Therapy Solutions installs every Balance System SD on-site across Texas, Oklahoma, and New Mexico, including clinician in-service training and ongoing software support.",
    ],
    highlights: [
      "Static + dynamic balance testing & training in one platform",
      "Fall Risk Screening with normative data by age",
      "Concussion Management Program included",
      "Athletic Single-Leg Stability & Limits of Stability protocols",
      "CTSIB (modified Clinical Test of Sensory Integration of Balance)",
      "12 levels of progressive instability",
      "Large color touchscreen — intuitive interactive games",
      "Objective documentation for payers, families, & physicians",
    ],
    gallery: [
      { src: IMG("603"), alt: "Biodex/Sport Medical product hero — id 603" },
      { src: "/assets/products/biodex/603-a.png", alt: "Biodex/Sport Medical product detail — 603-a.png" },
      { src: "/assets/products/biodex/603-b.png", alt: "Biodex/Sport Medical product detail — 603-b.png" },
      { src: "/assets/products/biodex/603-c.png", alt: "Biodex/Sport Medical product detail — 603-c.png" },
      { src: "/assets/products/biodex/603-d.png", alt: "Biodex/Sport Medical product detail — 603-d.png" },
      { src: "/assets/products/biodex/603-e.jpg", alt: "Biodex/Sport Medical product detail — 603-e.jpg" },
    ],
    specGroups: [
      {
        title: "Testing & Training",
        rows: [
          { label: "Standardized tests", value: "Postural Stability, Limits of Stability, Fall Risk, CTSIB, Athletic Single-Leg" },
          { label: "Programs", value: "Concussion Management, Sensory Integration, Bilateral Comparison" },
          { label: "Stability levels", value: "12 (static through fully dynamic)" },
          { label: "Training modes", value: "Maze Control, Random Control, Weight Shift, Limits of Stability" },
        ],
      },
      {
        title: "Hardware",
        rows: [
          { label: "Platform", value: 'Instrumented 21.5" diameter' },
          { label: "Display", value: "Large color touchscreen, articulating arm" },
          { label: "Patient capacity", value: "400 lb (181 kg)" },
          { label: "Footprint", value: 'Approx. 40"L x 26"W x 60"H' },
          { label: "Power", value: "120 V AC" },
        ],
      },
      {
        title: "Documentation",
        rows: [
          { label: "Reports", value: "Single test, progress, bilateral, normative comparison" },
          { label: "Export", value: "PDF, USB" },
          { label: "Software", value: "Latest v4.0+ — free updates via authorized dealer" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "On-site setup & calibration by GM Therapy" },
          { label: "Training", value: "Clinical in-service on all programs included" },
          { label: "Software", value: "Update support handled locally" },
        ],
      },
    ],
    sourceUrl: SOURCE("balance-system-sd"),
    seo: {
      title: "Biodex/Sport Medical Balance System SD — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Clinical balance, fall-risk, and concussion-management platform. Authorized dealer for Texas, Oklahoma, and New Mexico — installation and training included.",
    },
  },

  "604": {
    productId: "604",
    slug: "biodex-biosway",
    tagline:
      "Portable, lightweight balance assessment and training system that sets up in minutes — the Balance System SD's clinical depth in a mobile platform.",
    overview: [
      "The Biodex/Sport Medical BioSway™ is a portable balance system ideal for clinicians on the go. The lightweight instrumented platform with large touchscreen display is easy to transport and sets up in minutes — providing static balance testing and training capabilities in any environment: clinics, schools, athletic training rooms, home-health visits, and community fall-prevention screenings.",
      "BioSway runs the same standardized clinical protocols as the Balance System SD — Postural Stability, Limits of Stability, Fall Risk Test & Conditioning, Athletic Single-Leg Stability, and the Clinical Test of Sensory Integration on Balance (CTSIB). Choose from interactive training modes or standardized testing environments and export normative-referenced reports directly from the device.",
      "GM Therapy Solutions delivers and supports BioSway across Texas, Oklahoma, and New Mexico — including clinician training on protocols and reporting.",
    ],
    highlights: [
      "Portable — sets up in minutes anywhere",
      "Lightweight instrumented platform with large touchscreen",
      "Same standardized protocols as Balance System SD (static)",
      "Fall Risk Test & Conditioning Program",
      "CTSIB & Limits of Stability built in",
      "Wireless data export & on-board reporting",
      "Ideal for home health, schools, screenings, athletic training",
    ],
    gallery: [
      { src: IMG("604"), alt: "Biodex/Sport Medical product hero — id 604" },
      { src: "/assets/products/biodex/604-a.png", alt: "Biodex/Sport Medical product detail — 604-a.png" },
      { src: "/assets/products/biodex/604-b.png", alt: "Biodex/Sport Medical product detail — 604-b.png" },
      { src: "/assets/products/biodex/604-c.jpg", alt: "Biodex/Sport Medical product detail — 604-c.jpg" },
      { src: "/assets/products/biodex/604-d.png", alt: "Biodex/Sport Medical product detail — 604-d.png" },
      { src: "/assets/products/biodex/604-e.png", alt: "Biodex/Sport Medical product detail — 604-e.png" },
    ],
    specGroups: [
      {
        title: "Testing & Training",
        rows: [
          { label: "Standardized tests", value: "Postural Stability, Limits of Stability, Fall Risk, CTSIB, Athletic Single-Leg" },
          { label: "Training modes", value: "Maze Control, Random Control, Weight Shift" },
          { label: "Platform", value: "Static (instrumented force plate)" },
        ],
      },
      {
        title: "Portability",
        rows: [
          { label: "Total weight", value: "Approx. 25 lb (11 kg)" },
          { label: "Setup time", value: "< 5 minutes" },
          { label: "Power", value: "Battery + AC" },
          { label: "Display", value: "Large color touchscreen" },
        ],
      },
      {
        title: "Documentation",
        rows: [
          { label: "Reports", value: "Single test, progress, bilateral, normative" },
          { label: "Export", value: "USB, wireless" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "Local delivery + walkthrough by GM Therapy" },
          { label: "Training", value: "Clinical in-service on protocols included" },
        ],
      },
    ],
    sourceUrl: SOURCE("biosway"),
    seo: {
      title: "Biodex/Sport Medical BioSway Portable Balance System — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Portable static balance assessment & training. Same clinical protocols as Balance System SD. Authorized dealer for TX, OK, NM.",
    },
  },

  "605": {
    productId: "605",
    slug: "biodex-freesway-handles",
    tagline:
      'The "training wheels for balance" — floating handles that give patients confidence without compromising natural balance reactions.',
    overview: [
      "It is widely accepted that patients should avoid holding on during balance training in order to reap full functional benefits. But patients with a fear of falling require some degree of stability — and traditional handrails defeat the purpose. The Biodex/Sport Medical FreeSway™ Handles solve this problem.",
      "The handles \"float\" securely within support rings. If the patient sways too far or loses their balance, the handles touch the outer edge of the ring and allow the patient to correct the movement — giving them security without preventing the natural balance reactions that drive recovery. Think of them as training wheels for balance.",
      "FreeSway Handles enable fall-risk exercise for a much larger percentage of older adults who would otherwise avoid balance programs out of fear. Compatible with the Balance System SD. Available across Texas, Oklahoma, and New Mexico through GM Therapy Solutions.",
    ],
    highlights: [
      "Floating handles — security without impeding natural balance reactions",
      'The "training wheels" of balance therapy',
      "Enables fall-risk exercise for fearful older adults",
      "Compatible with Biodex/Sport Medical Balance System SD",
      "Improves safety AND treatment efficacy simultaneously",
      "Versatile, simple to install, easy to use",
    ],
    gallery: [
      { src: IMG("605"), alt: "Biodex/Sport Medical product hero — id 605" },
      { src: "/assets/products/biodex/605-a.png", alt: "Biodex/Sport Medical product detail — 605-a.png" },
      { src: "/assets/products/biodex/605-b.png", alt: "Biodex/Sport Medical product detail — 605-b.png" },
      { src: "/assets/products/biodex/605-c.png", alt: "Biodex/Sport Medical product detail — 605-c.png" },
      { src: "/assets/products/biodex/605-d.png", alt: "Biodex/Sport Medical product detail — 605-d.png" },
      { src: "/assets/products/biodex/605-e.jpg", alt: "Biodex/Sport Medical product detail — 605-e.jpg" },
    ],
    specGroups: [
      {
        title: "Compatibility",
        rows: [
          { label: "Works with", value: "Biodex/Sport Medical Balance System SD" },
          { label: "Installation", value: "Tool-free — mounts to existing platform" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Handle motion", value: "Floating within support rings" },
          { label: "Material", value: "Powder-coated steel & high-grip polymer" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Delivery & setup", value: "Local by GM Therapy" },
          { label: "Training", value: "Protocol guidance included" },
        ],
      },
    ],
    sourceUrl: SOURCE("freesway-handles"),
    seo: {
      title: "Biodex/Sport Medical FreeSway Handles — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Floating balance-training handles for the Balance System SD. Confidence without compromising natural balance reactions. Authorized dealer for TX, OK, NM.",
    },
  },

  "606": {
    productId: "606",
    slug: "biodex-vibrotactile-system",
    tagline:
      "Wireless vibrotactile biofeedback for vestibular rehabilitation — adds an objective sensory channel beyond visual and auditory cueing.",
    overview: [
      'You are expecting a call. You\'re in a place where a ringing cell phone is bad form, so you put your phone on vibrate. When the phone "rings" you don\'t see it or hear it — but you know exactly where it is. That is vibrotactile cueing.',
      "Real-time biofeedback is essential during balance and vestibular rehabilitation. Therapists typically cue patients with a tap or verbal command, but the Biodex/Sport Medical VibroTactile System replaces those subjective cues with a mechanized, reproducible, and objective sensory feedback channel. Once integrated with the Balance System SD or the portable BioSway, the VibroTactile System uses wireless wearable sensors to detect changes in postural sway and deliver directional vibration to help patients self-correct.",
      "Vibrotactile cueing is especially powerful for vestibular patients because it lets them safely train with their eyes closed — eliminating overreliance on the visual system and forcing the vestibular system to engage. Evidence-based and clinically proven, this is an essential add-on for any vestibular or fall-prevention program.",
    ],
    highlights: [
      "Wireless wearable sensor — directional vibration biofeedback",
      "Integrates with Balance System SD and BioSway",
      "Objective, reproducible sensory cueing",
      "Specifically designed for vestibular rehabilitation",
      "Lets patients safely train with eyes closed",
      "Evidence-based — improves postural control outcomes",
    ],
    gallery: [
      { src: IMG("606"), alt: "Biodex/Sport Medical product hero — id 606" },
      { src: "/assets/products/biodex/606-a.png", alt: "Biodex/Sport Medical product detail — 606-a.png" },
      { src: "/assets/products/biodex/606-b.png", alt: "Biodex/Sport Medical product detail — 606-b.png" },
      { src: "/assets/products/biodex/606-c.png", alt: "Biodex/Sport Medical product detail — 606-c.png" },
      { src: "/assets/products/biodex/606-d.png", alt: "Biodex/Sport Medical product detail — 606-d.png" },
      { src: "/assets/products/biodex/606-e.jpg", alt: "Biodex/Sport Medical product detail — 606-e.jpg" },
    ],
    specGroups: [
      {
        title: "Compatibility",
        rows: [
          { label: "Works with", value: "Biodex/Sport Medical Balance System SD, BioSway" },
          { label: "Connection", value: "Wireless" },
        ],
      },
      {
        title: "Clinical Use",
        rows: [
          { label: "Indications", value: "Vestibular disorders, postural sway, fall prevention" },
          { label: "Feedback type", value: "Directional vibrotactile (worn by patient)" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Delivery & setup", value: "Local by GM Therapy" },
          { label: "Training", value: "Vestibular protocols in-service available" },
        ],
      },
    ],
    sourceUrl: SOURCE("vibrotactile-system"),
    seo: {
      title: "Biodex/Sport Medical VibroTactile System — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Wireless vibrotactile biofeedback for vestibular rehab. Integrates with Balance System SD & BioSway. Authorized dealer for TX, OK, NM.",
    },
  },

  "607": {
    productId: "607",
    slug: "biodex-gait-trainer-3",
    tagline:
      "The only treadmill with an instrumented deck — measures step length, speed, and symmetry while delivering audio and visual biofeedback.",
    overview: [
      "The Biodex/Sport Medical Gait Trainer 3 is the only treadmill on the market with an instrumented deck that monitors and records step length, step speed, and step symmetry — letting clinicians prove patients are getting better, faster, and document the results for payers and physicians.",
      "More than a treadmill, the Gait Trainer 3 puts evidence-based gait training techniques at your fingertips. By combining audio cueing with real-time visual biofeedback, the Gait Trainer 3 promotes neuroplasticity — creating new pathways to movement. Patients see a comparison of their actual footfall to a target step length on the display, helping them stay on target through every phase of recovery.",
      "Designed specifically for the rehabilitation clinic, the Gait Trainer 3 features true zero starting speed, forward and reverse directions, powered incline AND decline, and a low-step-up deck. Music-enhanced training is supported through the integrated audio system. Installed and clinically supported across Texas, Oklahoma, and New Mexico by GM Therapy Solutions.",
    ],
    highlights: [
      "Instrumented deck — records step length, speed, symmetry",
      "Real-time visual biofeedback comparing footfall to target step length",
      "Audio cueing for cadence training",
      "True zero starting speed (0.1 mph minimum)",
      "Forward and reverse — powered incline AND decline",
      "Designed for the rehab clinic — low step-up, full handrails",
      "Documents outcomes objectively for payers and physicians",
      "Pairs with NxStep Unweighing System for body-weight-supported training",
    ],
    gallery: [
      { src: IMG("607"), alt: "Biodex/Sport Medical product hero — id 607" },
      { src: "/assets/products/biodex/607-a.png", alt: "Biodex/Sport Medical product detail — 607-a.png" },
      { src: "/assets/products/biodex/607-b.png", alt: "Biodex/Sport Medical product detail — 607-b.png" },
      { src: "/assets/products/biodex/607-c.png", alt: "Biodex/Sport Medical product detail — 607-c.png" },
      { src: "/assets/products/biodex/607-d.png", alt: "Biodex/Sport Medical product detail — 607-d.png" },
      { src: "/assets/products/biodex/607-e.jpg", alt: "Biodex/Sport Medical product detail — 607-e.jpg" },
    ],
    specGroups: [
      {
        title: "Treadmill",
        rows: [
          { label: "Speed", value: "0.1 – 10 mph (true zero start)" },
          { label: "Direction", value: "Forward & reverse" },
          { label: "Incline", value: "Powered, –3% to +15%" },
          { label: "Belt size", value: 'Approx. 22" x 70" (56 x 178 cm)' },
          { label: "Step-up height", value: "Low — accessible for rehab" },
        ],
      },
      {
        title: "Gait Analysis & Biofeedback",
        rows: [
          { label: "Measurements", value: "Step length, step speed, step symmetry, time on each foot" },
          { label: "Visual biofeedback", value: "Real-time footfall vs. target overlay" },
          { label: "Audio cueing", value: "Adjustable cadence + music input" },
          { label: "Reports", value: "Color graphic, normative-referenced" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Patient capacity", value: "400 lb (181 kg)" },
          { label: "Power", value: "120 V AC, dedicated 20 A circuit" },
          { label: "Footprint", value: 'Approx. 84"L x 38"W' },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "On-site setup, calibration & deck-load test by GM Therapy" },
          { label: "Training", value: "Gait protocols & biofeedback in-service included" },
          { label: "Service", value: "Factory-authorized parts & repair" },
        ],
      },
    ],
    sourceUrl: SOURCE("gait-trainer-3"),
    seo: {
      title: "Biodex/Sport Medical Gait Trainer 3 — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Instrumented-deck gait training treadmill with real-time biofeedback. Authorized dealer for Texas, Oklahoma, and New Mexico.",
    },
  },

  "608": {
    productId: "608",
    slug: "biodex-reactive-step-trainer",
    tagline:
      "Adds controllable perturbations — Slip, Trip, Step, Walk, e-Trip — to the Gait Trainer for evidence-based fall-recovery training.",
    overview: [
      "The Biodex/Sport Medical Reactive Step Trainer (RST) is the next evolution of the Gait Trainer 3. RST delivers pre-selected, fully controllable perturbation challenges — Slip, Trip, Step, Walk, and e-Trip patterns — that train patients to improve their compensatory step strategies and reduce the risk of falls.",
      "Combining all of the Gait Trainer's instrumented-deck biofeedback with customizable perturbation speed and intensity, RST is both a gait assessment tool and a fall-recovery training platform. It provides objective measurements of specific gait parameters as well as physiological measures of kinesthetic, proprioceptive, and neuromuscular control. RST must always be used in conjunction with a patient unweighing system — pairs perfectly with the Biodex/Sport Medical NxStep.",
      "Used in leading research and clinical fall-prevention programs nationwide. Installed and supported across Texas, Oklahoma, and New Mexico by GM Therapy Solutions.",
    ],
    highlights: [
      "All Gait Trainer 3 capabilities, plus reactive perturbation training",
      "Five perturbation types: Slip, Trip, Step, Walk, e-Trip",
      "Customizable perturbation speed and intensity",
      "Trains compensatory step strategies — reduces fall risk",
      "Objective measurement of kinesthetic & proprioceptive abilities",
      "Pairs with NxStep Unweighing System for safe training",
      "Evidence-based — used in leading fall-prevention research",
    ],
    gallery: [
      { src: IMG("608"), alt: "Biodex/Sport Medical product hero — id 608" },
      { src: "/assets/products/biodex/608-a.png", alt: "Biodex/Sport Medical product detail — 608-a.png" },
      { src: "/assets/products/biodex/608-b.png", alt: "Biodex/Sport Medical product detail — 608-b.png" },
      { src: "/assets/products/biodex/608-c.png", alt: "Biodex/Sport Medical product detail — 608-c.png" },
      { src: "/assets/products/biodex/608-d.png", alt: "Biodex/Sport Medical product detail — 608-d.png" },
      { src: "/assets/products/biodex/608-e.jpg", alt: "Biodex/Sport Medical product detail — 608-e.jpg" },
    ],
    specGroups: [
      {
        title: "Reactive Step Training",
        rows: [
          { label: "Perturbation types", value: "Slip, Trip, Step, Walk, e-Trip" },
          { label: "Customization", value: "Speed & intensity adjustable per patient" },
          { label: "Required pairing", value: "Patient unweighing system (e.g., NxStep)" },
        ],
      },
      {
        title: "Treadmill / Gait Analysis",
        rows: [
          { label: "Speed", value: "0.1 – 10 mph (true zero start)" },
          { label: "Direction", value: "Forward & reverse" },
          { label: "Incline", value: "Powered, –3% to +15%" },
          { label: "Measurements", value: "Step length, speed, symmetry + perturbation response" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Patient capacity", value: "400 lb (181 kg)" },
          { label: "Power", value: "120 V AC, dedicated 20 A" },
          { label: "Footprint", value: 'Approx. 84"L x 38"W (plus unweighing system)' },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "Combined RST + NxStep setup by GM Therapy" },
          { label: "Training", value: "Fall-prevention & perturbation protocols included" },
          { label: "Service", value: "Factory-authorized parts & repair" },
        ],
      },
    ],
    sourceUrl: SOURCE("reactive-step-trainer-rst"),
    seo: {
      title: "Biodex/Sport Medical Reactive Step Trainer (RST) — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Perturbation-based fall-recovery treadmill with instrumented deck. Authorized dealer for Texas, Oklahoma, and New Mexico.",
    },
  },

  "609": {
    productId: "609",
    slug: "biodex-nxstep-unweighing-system",
    tagline:
      "Single-point body-weight-supported training that preserves natural pelvic rotation and gives therapists open access to the patient.",
    overview: [
      "The Biodex/Sport Medical NxStep™ Unweighing System enables partial weight-bearing therapy with full open access to the patient. Offloading a percentage of body weight allows the opportunity for early rehabilitation while providing a safe environment for patient and therapist. Therapists can focus on treating their patients — not catching them.",
      "Unlike two-point suspension systems that restrict horizontal rotation, NxStep uses a dynamic single-point suspension that accommodates pelvic rotation and up to four inches of vertical displacement. This permits functional, neurologically-correct gait patterns to be practiced — including side-stepping, retro-walking, and turning — without compromising kinematics.",
      "The unique forward corner-mounted design lets therapists view patients from all angles, gives patients full visibility of the treadmill display, and allows natural arm swing — an essential component of neuroplasticity. NxStep pairs perfectly with the Gait Trainer 3 and the Reactive Step Trainer for a complete BWSTT environment. Installed and supported across TX, OK, and NM by GM Therapy Solutions.",
    ],
    highlights: [
      "Single-point dynamic suspension — preserves pelvic rotation",
      "Up to 4\" of vertical displacement at walking speed",
      "Forward corner-mounted design — open access to the patient",
      "Required pairing for Reactive Step Trainer (RST)",
      "Pairs with Gait Trainer 3 for full instrumented BWSTT",
      "Enables early rehab post-stroke, post-op, and SCI",
      "Supports side-stepping, retro-walking, turning",
      "Allows natural arm swing for neuroplasticity",
    ],
    gallery: [
      { src: IMG("609"), alt: "Biodex/Sport Medical product hero — id 609" },
      { src: "/assets/products/biodex/609-a.png", alt: "Biodex/Sport Medical product detail — 609-a.png" },
      { src: "/assets/products/biodex/609-b.png", alt: "Biodex/Sport Medical product detail — 609-b.png" },
      { src: "/assets/products/biodex/609-c.png", alt: "Biodex/Sport Medical product detail — 609-c.png" },
      { src: "/assets/products/biodex/609-d.png", alt: "Biodex/Sport Medical product detail — 609-d.png" },
      { src: "/assets/products/biodex/609-e.jpg", alt: "Biodex/Sport Medical product detail — 609-e.jpg" },
    ],
    specGroups: [
      {
        title: "Unweighing",
        rows: [
          { label: "Suspension type", value: "Single-point, dynamic" },
          { label: "Vertical displacement", value: 'Up to 4" at walking speed' },
          { label: "Patient capacity", value: "400 lb (181 kg)" },
        ],
      },
      {
        title: "Compatibility",
        rows: [
          { label: "Pairs with", value: "Biodex/Sport Medical Gait Trainer 3, Reactive Step Trainer (RST)" },
          { label: "Use case", value: "BWSTT, early rehab, RST perturbation training" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Mount", value: "Forward corner-mounted frame" },
          { label: "Footprint", value: "Wraps over treadmill — open patient access" },
          { label: "Power", value: "Self-contained suspension system" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "On-site assembly & treadmill alignment by GM Therapy" },
          { label: "Training", value: "BWSTT & harness fitting in-service included" },
        ],
      },
    ],
    sourceUrl: "https://smti.co/nxstep-unweighing-system",
    seo: {
      title: "Biodex/Sport Medical NxStep Unweighing System — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Single-point dynamic body-weight-supported training. Pairs with Gait Trainer 3 and RST. Authorized dealer for TX, OK, NM.",
    },
  },

  "610": {
    productId: "610",
    slug: "biodex-mobility-assist",
    tagline:
      "Motorized stand-assist device that brings patients from seated to standing with the protection of a safety harness — and lets them ambulate anywhere.",
    overview: [
      "Getting patients up and walking is one of the most important things therapists do. This basic activity overcomes circulation problems, prevents disuse atrophy, stimulates neural pathways, and plays a critical role in the psychology of a patient's sense of independence.",
      "The Biodex/Sport Medical Mobility Assist™ is a motorized stand-assist device that brings patients from a seated to standing position with the protection of a safety harness. As the patient stands using correct biomechanics, their center of gravity remains within the support of the device. Once standing, the patient has controlled body weight and standing balance — and can initiate ambulation. From bedside or wheelchair to anywhere in the clinic, hospital, or even outside, the Mobility Assist goes where the patient needs to go.",
      "Beyond patient safety, the Mobility Assist protects therapists, rehabilitation nurses, caregivers, and visiting family from the high-risk activity of manually lifting patients. Research increasingly supports using equipment for safety AND faster patient recovery. Available across Texas, Oklahoma, and New Mexico through GM Therapy Solutions.",
    ],
    highlights: [
      "Motorized sit-to-stand assistance with safety harness",
      "Patient ambulates anywhere — clinic, hospital, outdoors",
      "Maintains correct standing biomechanics",
      "Reduces caregiver/therapist injury risk during transfers",
      "Promotes early mobility and faster recovery",
      "Bedside, wheelchair, or chair transfers",
      "Battery-powered — no tether required",
    ],
    gallery: [
      { src: IMG("610"), alt: "Biodex/Sport Medical product hero — id 610" },
      { src: "/assets/products/biodex/610-a.png", alt: "Biodex/Sport Medical product detail — 610-a.png" },
      { src: "/assets/products/biodex/610-b.png", alt: "Biodex/Sport Medical product detail — 610-b.png" },
      { src: "/assets/products/biodex/610-c.png", alt: "Biodex/Sport Medical product detail — 610-c.png" },
      { src: "/assets/products/biodex/610-d.png", alt: "Biodex/Sport Medical product detail — 610-d.png" },
      { src: "/assets/products/biodex/610-e.jpg", alt: "Biodex/Sport Medical product detail — 610-e.jpg" },
    ],
    specGroups: [
      {
        title: "Capabilities",
        rows: [
          { label: "Function", value: "Motorized sit-to-stand + ambulation aid" },
          { label: "Harness", value: "Multiple sizes available" },
          { label: "Mobility", value: "Maneuverable — clinic, hospital, outdoor surfaces" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Patient capacity", value: "Up to 400 lb (181 kg)" },
          { label: "Power", value: "Rechargeable battery" },
          { label: "Footprint", value: "Maneuverable through standard doorways" },
        ],
      },
      {
        title: "Safety",
        rows: [
          { label: "Caregiver protection", value: "Reduces manual lifting risk" },
          { label: "Patient protection", value: "Safety harness + controlled ascent" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Delivery & setup", value: "Local by GM Therapy" },
          { label: "Training", value: "Safe-handling & harness fitting in-service included" },
        ],
      },
    ],
    sourceUrl: SOURCE("mobility-assist"),
    seo: {
      title: "Biodex/Sport Medical Mobility Assist — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Motorized sit-to-stand & ambulation aid. Protects patients and caregivers. Authorized dealer for Texas, Oklahoma, and New Mexico.",
    },
  },

  "611": {
    productId: "611",
    slug: "biodex-body-weight-support-harnesses",
    tagline:
      "Comfortable, clinical-grade harnesses for partial weight-bearing therapy with the NxStep Unweighing System and other PWBT devices.",
    overview: [
      "Biodex/Sport Medical body-weight-support harnesses are designed to provide comfortable, secure support for patients during partial weight-bearing therapy (PWBT). Multiple sizes accommodate everyone from pediatric lightweights to bariatric patients — ensuring proper fit, distributed load, and comfortable extended-session use.",
      "Use with the Biodex/Sport Medical NxStep Unweighing System or other PWBT devices. Selecting the correct harness size and style is critical for both patient comfort and therapy outcomes — GM Therapy Solutions provides on-site fitting guidance and clinical training as part of every order across Texas, Oklahoma, and New Mexico.",
    ],
    highlights: [
      "Multiple sizes — pediatric through bariatric",
      "Distributed load for comfortable extended sessions",
      "Clinical-grade construction and washable materials",
      "Compatible with Biodex/Sport Medical NxStep & other PWBT systems",
      "On-site fitting guidance from GM Therapy",
    ],
    gallery: [
      { src: IMG("611"), alt: "Biodex/Sport Medical product hero — id 611" },
      { src: "/assets/products/biodex/611-a.jpg", alt: "Biodex/Sport Medical product detail — 611-a.jpg" },
      { src: "/assets/products/biodex/611-b.png", alt: "Biodex/Sport Medical product detail — 611-b.png" },
      { src: "/assets/products/biodex/611-c.png", alt: "Biodex/Sport Medical product detail — 611-c.png" },
      { src: "/assets/products/biodex/611-d.png", alt: "Biodex/Sport Medical product detail — 611-d.png" },
      { src: "/assets/products/biodex/611-e.png", alt: "Biodex/Sport Medical product detail — 611-e.png" },
    ],
    specGroups: [
      {
        title: "Sizing & Fit",
        rows: [
          { label: "Sizes", value: "Pediatric, small, medium, large, bariatric (call for fit guidance)" },
          { label: "Adjustments", value: "Multi-point straps for personalized fit" },
        ],
      },
      {
        title: "Compatibility",
        rows: [
          { label: "Designed for", value: "Biodex/Sport Medical NxStep Unweighing System" },
          { label: "Also fits", value: "Most single-point PWBT devices (verify with GM Therapy)" },
        ],
      },
      {
        title: "Care",
        rows: [
          { label: "Cleaning", value: "Washable per manufacturer instructions" },
          { label: "Replacement", value: "Recommended per manufacturer wear schedule" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Fitting", value: "On-site fitting guidance by GM Therapy" },
          { label: "Reorders", value: "Local stocking and quick replacement" },
        ],
      },
    ],
    sourceUrl: "https://smti.co/our-products/body-weight-supported-training/harnesses",
    seo: {
      title: "Biodex/Sport Medical Body Weight Support Harnesses — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Clinical-grade harnesses for the NxStep Unweighing System and other PWBT devices. Authorized dealer for TX, OK, NM.",
    },
  },

  "612": {
    productId: "612",
    slug: "biodex-biostep-2",
    tagline:
      "Semi-recumbent elliptical cross-trainer — smooth, low-impact total-body cardio with the comfort, safety, and stability of a seated position.",
    overview: [
      "The feature-rich, durable Biodex/Sport Medical BioStep™ 2 Semi-Recumbent Elliptical accommodates a wide variety of users and promotes general strengthening and conditioning for any age group. Simple to use, requiring minimal supervision, and allowing exercise to progress at a natural pace, BioStep 2 is the workhorse of the rehab and wellness gym.",
      "The BioStep 2's elliptical motion is naturally smooth and continuous — exceptionally comfortable. Unlike recumbent steppers, the low-impact elliptical motion eliminates the jarring start/stop direction change and removes the need to lift or strike feet on the walking surface. The fluid motion is forgiving on knees, ankles, hips, and lower back: a natural closed-chain, low-impact, functional exercise.",
      "Ideal for older adults, post-cardiac patients, neurorehabilitation, and general wellness — the BioStep 2 strengthens the muscles most critical to maintaining function and independence. Easy step-through entry, comfortable supportive seat, and arm-and-leg engagement for true total-body cardio. Installed and supported across TX, OK, and NM by GM Therapy Solutions.",
    ],
    highlights: [
      "Smooth, continuous elliptical motion — no jarring direction change",
      "Semi-recumbent — comfort, safety, stability of a seated position",
      "Low-impact, closed-chain — easy on knees, ankles, hips, lower back",
      "Total-body — upper and lower extremity engagement",
      "Easy step-through entry — accommodates a wide range of users",
      "Ideal for older adults, post-cardiac, neuro rehab, wellness",
      "Self-powered — no electrical outlet required",
      "Heavy-duty construction for high-use clinical environments",
    ],
    gallery: [
      { src: IMG("612"), alt: "Biodex/Sport Medical product hero — id 612" },
      { src: "/assets/products/biodex/612-a.png", alt: "Biodex/Sport Medical product detail — 612-a.png" },
      { src: "/assets/products/biodex/612-b.png", alt: "Biodex/Sport Medical product detail — 612-b.png" },
      { src: "/assets/products/biodex/612-c.png", alt: "Biodex/Sport Medical product detail — 612-c.png" },
      { src: "/assets/products/biodex/612-d.png", alt: "Biodex/Sport Medical product detail — 612-d.png" },
      { src: "/assets/products/biodex/612-e.jpg", alt: "Biodex/Sport Medical product detail — 612-e.jpg" },
    ],
    specGroups: [
      {
        title: "Motion",
        rows: [
          { label: "Type", value: "Semi-recumbent elliptical (continuous, low-impact)" },
          { label: "Engagement", value: "Upper + lower extremity (total-body)" },
          { label: "Resistance", value: "Magnetic, multi-level" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Patient capacity", value: "400 lb (181 kg)" },
          { label: "Power", value: "Self-powered — no outlet required" },
          { label: "Entry", value: "Easy step-through" },
          { label: "Footprint", value: 'Approx. 60"L x 30"W' },
        ],
      },
      {
        title: "Console",
        rows: [
          { label: "Display", value: "Time, distance, RPM, calories, watts, heart rate" },
          { label: "Programs", value: "Quick-start, manual, interval, custom" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Installation", value: "Local delivery & setup by GM Therapy" },
          { label: "Service", value: "Factory-authorized parts & repair" },
        ],
      },
    ],
    sourceUrl: SOURCE("biostep-2-semi-recumbent-elliptical"),
    seo: {
      title: "Biodex/Sport Medical BioStep 2 Semi-Recumbent Elliptical — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Total-body, low-impact semi-recumbent elliptical for rehab and wellness. Authorized dealer for TX, OK, NM.",
    },
  },

  "613": {
    productId: "613",
    slug: "biodex-upper-body-cycle",
    tagline:
      "Self-powered upper-extremity ergometer built for high-use clinical environments — portable, durable, and ready wherever the patient is.",
    overview: [
      "The Biodex/Sport Medical Upper Body Cycle is a self-powered upper-extremity ergometer designed specifically for the demands of high-use clinical environments. Compact, portable, and user-friendly, it delivers smooth, consistent resistance for upper-body cardiovascular training, conditioning, and rehabilitation — from shoulder rehab to wheelchair-user fitness to general wellness.",
      "Because it is self-powered, the Upper Body Cycle goes wherever the patient is — bedside, in the gym, or at the wheelchair. No outlet, no battery, no setup time. Ergonomic handles, smooth bidirectional rotation, and quick-set resistance make it equally suited for the first day of post-op rehab and high-intensity conditioning sessions.",
      "Installed and supported across Texas, Oklahoma, and New Mexico by GM Therapy Solutions.",
    ],
    highlights: [
      "Self-powered — no outlet or battery required",
      "Portable — bring it to the patient",
      "Built for high-use clinical environments",
      "Bidirectional smooth rotation",
      "Ergonomic handles for shoulder/elbow rehab and conditioning",
      "Quick-adjust resistance",
      "Ideal for upper-extremity rehab, wheelchair-user fitness, general wellness",
    ],
    gallery: [
      { src: IMG("613"), alt: "Biodex/Sport Medical product hero — id 613" },
      { src: "/assets/products/biodex/613-a.png", alt: "Biodex/Sport Medical product detail — 613-a.png" },
      { src: "/assets/products/biodex/613-b.png", alt: "Biodex/Sport Medical product detail — 613-b.png" },
      { src: "/assets/products/biodex/613-c.png", alt: "Biodex/Sport Medical product detail — 613-c.png" },
      { src: "/assets/products/biodex/613-d.png", alt: "Biodex/Sport Medical product detail — 613-d.png" },
      { src: "/assets/products/biodex/613-e.jpg", alt: "Biodex/Sport Medical product detail — 613-e.jpg" },
    ],
    specGroups: [
      {
        title: "Capabilities",
        rows: [
          { label: "Type", value: "Self-powered upper extremity ergometer" },
          { label: "Rotation", value: "Bidirectional, smooth" },
          { label: "Resistance", value: "Quick-set, multi-level" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Power", value: "Self-powered — no outlet required" },
          { label: "Portability", value: "Tabletop or stand-mount" },
          { label: "Construction", value: "Heavy-duty for clinical use" },
        ],
      },
      {
        title: "Dealer Support (TX/OK/NM)",
        rows: [
          { label: "Delivery", value: "Local by GM Therapy" },
          { label: "Service", value: "Factory-authorized parts & repair" },
        ],
      },
    ],
    sourceUrl: SOURCE("upper-body-cycle"),
    seo: {
      title: "Biodex/Sport Medical Upper Body Cycle — Authorized Dealer TX/OK/NM | GM Therapy",
      description: "Self-powered upper-extremity ergometer for clinical rehab and conditioning. Authorized dealer for TX, OK, NM.",
    },
  },

  // Kinvent K-Deltas Portable Force Plates — product id "615"
  "615": {
    productId: "615",
    slug: "kinvent-k-deltas-force-plates",
    tagline:
      "Wireless portable force plates for balance, strength, and vertical jump assessment — powered by the Kinvent app.",
    overview: [
      "The Kinvent K-Deltas are connected, portable force plates that turn any clinic, gym, or performance lab into an objective testing environment. Two wireless plates pair with the Kinvent App on iOS or Android to deliver real-time force, power, and asymmetry data for jump, strength, and balance protocols.",
      "Used by physical therapists, sports medicine clinicians, and strength coaches, the K-Deltas quantify what used to be subjective: vertical jump mechanics (CMJ, SJ, Drop Jump, Reactive Strength Index), isometric strength (IMTP, ASH, McCall), Limb Symmetry Index (LSI), Force-Velocity profile, Dynamic Strength Index, and Center of Pressure for postural control.",
      "The plates integrate with the broader Kinvent ecosystem — K-Push, K-Pull, K-Power, K-Myo, K-Move — so you can build a complete assessment battery and trend patient progress over time inside one app.",
    ],
    highlights: [
      "Two wireless plates — large surface for double- and single-leg protocols",
      "Vertical jump: CMJ, SJ, Drop Jump, RSI, peak power, jump height",
      "Isometric strength: IMTP, ASH Test, McCall with Limb Symmetry Index",
      "Balance & postural control: Center of Pressure, velocity, load distribution",
      "Real-time biofeedback via the Kinvent App (iOS / Android)",
      "Force-Velocity profile & Dynamic Strength Index (DSI)",
      "Rechargeable, fully portable — set up anywhere in seconds",
      "Compatible with the full Kinvent ecosystem (K-Push, K-Pull, K-Power, K-Myo, K-Move)",
    ],
    gallery: [
      { src: "/assets/products/kinvent/k-deltas.jpg", alt: "Kinvent K-Deltas portable force plates" },
      { src: "/assets/products/kinvent/k-deltas-banner.jpg", alt: "Kinvent K-Deltas in use for vertical jump assessment" },
      { src: "/assets/products/kinvent/k-deltas-app.png", alt: "Kinvent App showing force plate data and analytics" },
      { src: "/assets/products/kinvent/k-deltas-3d.png", alt: "Kinvent K-Deltas force plate — product render" },
      { src: "/assets/products/kinvent/k-deltas-cmj-tablet.png", alt: "Kinvent K-Deltas CMJ jump test results on tablet" },
      { src: "/assets/products/kinvent/k-deltas-cmj-unipodal.jpg", alt: "Athlete performing unipodal CMJ on Kinvent K-Deltas" },
    ],
    specGroups: [
      {
        title: "Hardware",
        rows: [
          { label: "Configuration", value: "Two wireless plates (left / right)" },
          { label: "Connectivity", value: "Bluetooth — pairs with Kinvent App (iOS / Android)" },
          { label: "Power", value: "Rechargeable battery, fully portable" },
          { label: "Surface", value: "Large plate area — supports double- and single-leg testing" },
        ],
      },
      {
        title: "Assessment Protocols",
        rows: [
          { label: "Jump tests", value: "CMJ, Squat Jump, Drop Jump, Repeated Jumps, RSI" },
          { label: "Isometric strength", value: "IMTP, ASH Test, McCall — with LSI asymmetry" },
          { label: "Balance", value: "Center of Pressure, sway velocity, load distribution" },
          { label: "Advanced", value: "Force-Velocity profile, Dynamic Strength Index (DSI)" },
        ],
      },
      {
        title: "Software & Data",
        rows: [
          { label: "App", value: "Kinvent App — real-time biofeedback & reports" },
          { label: "Reporting", value: "Exportable PDF reports, trended patient data" },
          { label: "Ecosystem", value: "Integrates with K-Push, K-Pull, K-Power, K-Myo, K-Move" },
        ],
      },
      {
        title: "Dealer Support",
        rows: [
          { label: "Delivery", value: "Local by GM Therapy" },
          { label: "Training", value: "Clinical onboarding & protocol setup included" },
          { label: "Service", value: "Factory-authorized parts & repair" },
        ],
      },
    ],
    brochureTitle: "Kinvent K-Deltas",
    brochureUrl: "/assets/docs/615.pdf",
    specSheetUrl: "/assets/products/kinvent/downloads/product-sheet-3d-deltas-en.pdf",
    specSheetTitle: "Product Sheet (English)",
    sourceUrl: "https://kinvent.com/kinvent-product/force-plates-vertical-jump-k-deltas/",
    seo: {
      title: "Kinvent K-Deltas Portable Force Plates — Authorized Dealer TX/OK/NM | GM Therapy",
      description:
        "Wireless portable force plates for vertical jump, isometric strength, and balance assessment. Powered by the Kinvent App. Authorized dealer for TX, OK, NM.",
    },
  },

};

export const hasDetailPage = (productId: string): boolean =>
  Object.prototype.hasOwnProperty.call(productDetails, productId);
