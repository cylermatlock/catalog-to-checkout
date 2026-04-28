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
};

export const hasDetailPage = (productId: string): boolean =>
  Object.prototype.hasOwnProperty.call(productDetails, productId);
