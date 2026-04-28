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
};

export const hasDetailPage = (productId: string): boolean =>
  Object.prototype.hasOwnProperty.call(productDetails, productId);
