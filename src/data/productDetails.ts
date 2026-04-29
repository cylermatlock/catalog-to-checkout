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
};

export const hasDetailPage = (productId: string): boolean =>
  Object.prototype.hasOwnProperty.call(productDetails, productId);
