export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  sku: string;
  description: string[];
  price?: number;
  image?: string;
}

export const categories = [
  "Rehab Furniture",
  "Modalities",
  "Cardio",
  "Strength Equipment",
  "Balance Products",
  "Compression",
  "Work Hardening",
  "Clinical Supplies",
];

export const products: Product[] = [
  // REHAB FURNITURE - Hi-Lo Tables
  { id: "1", name: "GMTS 3 Section Hi-Lo Treatment Table", category: "Rehab Furniture", subcategory: "Hi-Lo Tables", sku: "GMTS 3HL", description: ["4 Foot Pedal Controls", "Head section lowers -30°", "Gas-assisted struts", "Electric height from 18\"-38\"", "Foot section raises to 80°", "495LB Weight capacity", "3\" thick cushion", "3 year warranty"] },
  { id: "2", name: "GMTS Treatment Table with Adjustable Backrest", category: "Rehab Furniture", subcategory: "Wood Treatment Tables", sku: "GMTS 1020", description: ["Nosehole", "Adjustable backrest", "Full laminate shelf", "Scratch resistant topcoat finish", "Seamless rounded corner top", "2\" firm foam padding", "72\"L x 31\"H x 28\"W", "400 lb weight capacity"] },
  { id: "3", name: "GMTS 2 Section Bo-Bath 40\" Hi-Lo Table", category: "Rehab Furniture", subcategory: "Hi-Lo Tables", sku: "GMTS 2HL", description: ["Extra-wide 40\" base and cushion", "Gas-assisted struts control the recessed headrest", "Table height from 18\"-40\"", "Foot pedal control on all sides", "3 year warranty"] },
  { id: "4", name: "GMTS Flat Top Classic Treatment Table", category: "Rehab Furniture", subcategory: "Wood Treatment Tables", sku: "CLIN 100", description: ["Facehole", "H-brace construction", "2\" firm foam padding", "Choice of upholstery colors", "5 year limited warranty", "72\"L x 31\"H", "Available in 24\", 27\" & 30\" width", "400 lb weight capacity"] },
  { id: "5", name: "GMTS Electric Deluxe Hi-Lo Mat Table", category: "Rehab Furniture", subcategory: "Hi-Lo Tables", sku: "TMS 730258", description: ["Electronically controlled", "Height range of 20\"-31\"", "2\" thick foam padding", "Eleven vinyl colors", "Comes in 4'x7', 5'x7' & 6'x8'", "Hand crafted construction", "Available in solid oak"] },
  { id: "6", name: "GMTS Low Mat Table", category: "Rehab Furniture", subcategory: "Hi-Lo Tables", sku: "TMS 730057", description: ["Fixed mat table", "Sizes 4'x7', 5'x7' & 6'x8'", "2\" firm padding", "Extra stable construction", "Variety of available colors", "700 lb weight capacity"] },

  // REHAB FURNITURE - Parallel Bars
  { id: "7", name: "GMTS 10' Platform Mounted Parallel Bars", category: "Rehab Furniture", subcategory: "Parallel Bars", sku: "TMS 720760", description: ["Mounted to 1-1/2\" thick hardwood", "Safety tread at both ends", "Width adjustable", "Heavy uprights", "Easy height changes", "End bumpers on handrails", "400 lb weight capacity"] },
  { id: "8", name: "GMTS 7' Platform Mounted Parallel Bars", category: "Rehab Furniture", subcategory: "Parallel Bars", sku: "TMS 720761", description: ["Mounted to 1-1/2\" thick hardwood", "Safety tread at both ends", "Width adjustable", "Heavy uprights", "Easy height changes", "End bumpers on handrails", "400 lb weight capacity"] },
  { id: "9", name: "Armedica Power Parallel Bars", category: "Rehab Furniture", subcategory: "Parallel Bars", sku: "AM TM700", description: ["Digital user friendly display", "Memory buttons for storage", "Microprocessor control unit", "Heavy duty construction", "Height monitoring functions", "Slip-resistant platform", "400 lb weight capacity"] },

  // REHAB FURNITURE - Training Stairs
  { id: "10", name: "GMTS 2 Sided Stairs", category: "Rehab Furniture", subcategory: "Training Stairs", sku: "TMS 720515", description: ["Platform size is 30\"W x 24\"D x 12\"H", "Two 4\"x10\" steps on one side", "One 6\"x10\" step on other side", "All hardwood base", "Rigid mounted handrail", "Includes solid oak handrails", "400 lb weight capacity"] },
  { id: "11", name: "GMTS Single Sided Stairs", category: "Rehab Furniture", subcategory: "Training Stairs", sku: "TMS 720639", description: ["Platform size is 30\"W x 24\"D x 18\"H", "Three 6\"x10\" steps", "All hardwood base", "Rigid mounted handrail", "Requires a minimum 9' ceiling", "350 lb weight capacity"] },
  { id: "12", name: "GMTS Convertible Stairs", category: "Rehab Furniture", subcategory: "Training Stairs", sku: "TMS 720556", description: ["Platform is 36\"x36\"x18\" high", "104\"L straight mode", "54\" & 74\"L angled mode", "Rigid mounted handrail", "Requires a minimum 9' ceiling", "400 lb weight capacity"] },

  // REHAB FURNITURE - Storage & Traction
  { id: "13", name: "Ideal Dumbbell Wall Rack ", category: "Rehab Furniture", subcategory: "Storage", sku: "IM VWR30", description: ["Wall stand for smaller dumbbells", "Grey powdercoat finish", "Welded steel construction", "60 lb total capacity 10 hooks"] },
  { id: "14", name: "GMTS Combo Weight & Mirror Rack", category: "Rehab Furniture", subcategory: "Storage", sku: "TMS 720589", description: ["6 independent quick-change positions", "Mirror with ANSI safety backing", "Two large shelves for band storage", "2 locking casters", "Holds up to 48 cuff weights, 20 dumbbells, 6 rolls of exercise band"] },
  { id: "15", name: "GMTS Mini Cuff Weight Dumbbell Rack", category: "Rehab Furniture", subcategory: "Storage", sku: "TMS 720631", description: ["Dims 52.5\"H, 34\"W & 19\"D", "Weights and bands sold separately", "3\" swivel casters", "Holds up to 64 cuff weights and 10 dumbbells"] },
  { id: "16", name: "Chattanooga DTS 6M Decompression System", category: "Rehab Furniture", subcategory: "Traction Tables", sku: "CG 8250-6000002", description: ["Fully programmable pull patterns", "Isolation of pretension, progression, traction & regressions", "Variable speed control", "5 unique patterns", "Up to 80 user defined settings"] },
  
  { id: "18", name: "GMTS Traction Package", category: "Rehab Furniture", subcategory: "Traction Tables", sku: "GMTS TRAC-NEW", description: ["4 section MedSurface table", "TX traction head", "New accessories & belts"] },

  // REHAB FURNITURE - Stools
  { id: "19", name: "GMTS Pneumatic Stool", category: "Rehab Furniture", subcategory: "Stools", sku: "RICH SS7677", description: ["Soft durable vinyl seat", "High density fiberglass base", "5 smooth rolling casters", "Adjustable height 18\"-23.5\"", "300 lb weight capacity"] },
  // REHAB FURNITURE - Standing Frames
  { id: "22", name: "NK Electric Standing Frame", category: "Rehab Furniture", subcategory: "Standing Frames", sku: "NK 375", description: ["Hi-Lo standing table", "Electric patient lift", "350 lb lift capacity", "33\"x24\" laminate top", "Lift support harness", "Padded knee, chest & back"] },
  { id: "23", name: "EasyStand Evolve", category: "Rehab Furniture", subcategory: "Standing Frames", sku: "AMED PNG50162-1", description: ["Super comfortable for prolonged standing", "Easier transfers and independent standing position", "Available in three sizes"] },
  { id: "24", name: "EasyStand Strap Stand", category: "Rehab Furniture", subcategory: "Standing Frames", sku: "AMED P2000", description: ["No-transfer", "Full upright stretch possibilities while standing", "Ease of use leads to increased compliance", "Swing out legs for wide wheelchairs"] },

  // MODALITIES - TENS
  { id: "25", name: "Richmar InTENSity 12 TENS", category: "Modalities", subcategory: "Portable TENS", sku: "RICH DI1212", description: ["2 channels of independent stimulation", "6 body-part-specific settings", "18 program settings total", "Rechargeable lithium ion battery", "One-year warranty"] },
  { id: "26", name: "Richmar Intensity Select Combo II", category: "Modalities", subcategory: "Portable TENS", sku: "RICH DI2195", description: ["Extra large LCD display", "4-in-1 therapy modes: TENS, EMS, IF and Russian stimulation", "6 therapeutic body part buttons", "Preset body programs or user defined modes"] },
  { id: "27", name: "Richmar IF Combo II Portable TENS", category: "Modalities", subcategory: "Portable TENS", sku: "RICH D12738", description: ["Extra large LCD display", "4-in-1 therapy modes: TENS, EMS, IF and Russian stimulation", "6 therapeutic body part buttons", "Preset body programs or user defined modes"] },

  // MODALITIES - Hydrocollator
  { id: "28", name: "Richmar Hydratherm", category: "Modalities", subcategory: "Hydrocollator", sku: "RICH HT-R12-SW", description: ["Digital thermostat control", "Composite no rust tub with divider system", "Reduces number of cleanings", "12 hot pack capacity", "Low water sensor", "1 year warranty"] },
  { id: "29", name: "Chattanooga M-2 Hydrocollator", category: "Modalities", subcategory: "Hydrocollator", sku: "CG M2", description: ["High-quality stainless steel", "Thermostatically controlled temperature", "3\" swivel silent casters", "Holds up to 12 standard packs", "1 year warranty"] },
  { id: "30", name: "Chattanooga M-4 Hydrocollator", category: "Modalities", subcategory: "Hydrocollator", sku: "CG M4", description: ["High-quality stainless steel", "Thermostatically controlled temperature", "3\" swivel silent casters", "Holds up to 24 standard packs", "1 year warranty"] },

  // MODALITIES - E-Stim/Ultrasound
  { id: "31", name: "Richmar Theratouch EX4 Electrotherapy System", category: "Modalities", subcategory: "E-Stim/Ultrasound", sku: "RICH DQ7200", description: ["Treats up to 4 patients at once", "Multiple waveforms", "Large color LCD touchscreen", "Up to 10,000 Hz", "3 year warranty"] },
  { id: "32", name: "Richmar CX4 Electrotherapy and Ultrasound", category: "Modalities", subcategory: "E-Stim/Ultrasound", sku: "RM DQ8200", description: ["5 cm² sound head", "Treats up to 4 patients at once", "Multiple waveforms", "Large color LCD touchscreen", "3 year warranty"] },
  
  { id: "34", name: "Richmar CX2 Electrotherapy and Ultrasound", category: "Modalities", subcategory: "E-Stim/Ultrasound", sku: "RICH DQ8222", description: ["5 cm² sound head", "Multiple waveforms", "Large color LCD touchscreen", "3 year warranty", "Optional cart available"] },
  
  { id: "36", name: "Chattanooga Vectra Genisys w/EMG", category: "Modalities", subcategory: "E-Stim/Ultrasound", sku: "CG 2738", description: ["Fully functional 1 & 3.3 MHz", "110v or battery power", "10 user-defined protocols", "2 channel electrical stim"] },

  // MODALITIES - Laser
  { id: "37", name: "Richmar LX2 Cold Laser", category: "Modalities", subcategory: "Laser", sku: "RICH DQLLLT", description: ["Class 3B Laser", "Touch screen", "1040 mw of total power", "Built in dosage calculator", "Programmable treatment times", "100 user defined protocols"] },
  
  { id: "39", name: "Chattanooga Vectra Genisys Transport Laser", category: "Modalities", subcategory: "Laser", sku: "CG 2784", description: ["Fully functional device with independent control", "Display of dosage in joules or joules/cm²", "Continuous and pulsed treatment modes", "Real time feedback"] },

  // MODALITIES - Hivamat/Diathermy
  { id: "40", name: "Richmar Theradot", category: "Modalities", subcategory: "Hivamat/Diathermy", sku: "RICH DO1009", description: ["Deep oscillation treatment", "Pre-defined programs", "Battery operated, portable", "Uses electrostatic attractions", "Treats edema", "3 Year Warranty"] },
  { id: "41", name: "Richmar TheraTouch DX2 Shortwave Diathermy", category: "Modalities", subcategory: "Hivamat/Diathermy", sku: "RICH DQSWD2", description: ["Anatomical treatment guide", "Save up to 99 user favorites", "9 evidence based quick links", "Easy to use touch screen", "USB port for easy upgrades", "3 year warranty"] },
  

  // CARDIO - NuStep
  { id: "43", name: "NuStep T4R Cross Trainer", category: "Cardio", subcategory: "NuStep", sku: "NS T4R", description: ["Low impact total body", "400 lb weight capacity", "Smooth-stepping motion", "360° swivel seat", "Multiple workout programs", "Quiet hybrid brake system"] },
  { id: "44", name: "NuStep T6PRO Cross Trainer", category: "Cardio", subcategory: "NuStep", sku: "NS T6PRO", description: ["Low impact total body", "600 lb weight capacity", "Dual-screen console", "Reclining 360° swivel chair", "Locking handles & pedals", "T6 Max offers a wider seat"] },
  { id: "45", name: "NuStep T5XR Cross Trainer", category: "Cardio", subcategory: "NuStep", sku: "NS T5XR", description: ["Low impact total body", "600 lb weight capacity", "Smooth-stepping motion", "Adjustable resistance levels", "Low step-through swivel seat", "Quiet hybrid brake system"] },

  // CARDIO - SportsArt
  { id: "46", name: "SportsArt T655MS Treadmill", category: "Cardio", subcategory: "SportsArt", sku: "SAA T655MS", description: ["Bi-directional belt motion", "Decline to -3%", "Full Length Medical Handrails", "0.1MPH Starting Speed"] },
  { id: "47", name: "SportsArt T661M Treadmill", category: "Cardio", subcategory: "SportsArt", sku: "SAA T661M", description: ["Equipped for medical & rehab", "Starting speed of 0.1MPH", "Medical extended handrails", "Myflex plus deck cushioning", "Contact & telemetry heart rate"] },
  { id: "48", name: "SportsArt C575R Bike", category: "Cardio", subcategory: "SportsArt", sku: "SAA C535R", description: ["ComforDri vented back seat", "Adjustable handles", "Oversized pedals with straps", "Wireless heart rate monitoring", "400 lb weight capacity"] },

  // CARDIO - Spirit
  { id: "49", name: "Spirit CT800 Treadmill", category: "Cardio", subcategory: "Spirit", sku: "SFP CT800", description: ["85\"L x 35.8\"W x 60.6\"H", "Optional Medical Handrails", "0.5–12mph speed range", "450lb Weight Capacity", "5 Year Warranty"] },
  { id: "50", name: "Spirit CR800 Recumbent Bike", category: "Cardio", subcategory: "Spirit", sku: "SFP CR800", description: ["59.4\"L x 29.1\"W x 50.8\"H", "Heart Rate Monitors", "Self Generating", "450lb Weight Capacity", "5 Year Warranty"] },
  { id: "51", name: "Spirit CE800 Elliptical", category: "Cardio", subcategory: "Spirit", sku: "SFP CE800", description: ["78\"L x 24.2\"W x 62.2\"H", "Easy Rear Access", "Self Generating", "450lb Weight Capacity"] },
  { id: "52", name: "Spirit Functional Trainer", category: "Cardio", subcategory: "Spirit", sku: "SFP CSF-FUNT", description: ["60\"L x 33\"W x 83.5\"H", "Two 170lb Weight Stacks", "Durable Heavy Gauge Steel", "Simple trigger Pulley Height Adjustment"] },
  { id: "53", name: "Spirit Dual Leg Ext/Curl", category: "Cardio", subcategory: "Spirit", sku: "SFP CSD-LELC", description: ["55.4\"L x 54\"W x 62.2\"H", "225lb Weight Stack", "Range of Motion Adjustment", "5 Year Warranty"] },
  { id: "54", name: "Spirit Dual Leg Press/Calf", category: "Cardio", subcategory: "Spirit", sku: "SFP CSF-DLPC", description: ["76.4\"L x 44.7\"W x 62.2\"H", "220 Weight Stack", "Durable Heavy Gauge Steel", "700 lb weight capacity"] },

  // CARDIO - SciFit
  { id: "55", name: "SciFit Pro 1 - Upper Body", category: "Cardio", subcategory: "SciFit", sku: "SCI PRO100-INT", description: ["Adjustable tilt head", "Bi-directional exercise", "Very low starting resistance", "Wheelchair platform included", "Premium, standard and bariatric seat options"] },
  { id: "56", name: "SciFit Step One - Recumbent Stepper", category: "Cardio", subcategory: "SciFit", sku: "SCI SONE03", description: ["User defined stride length", "Arm-to-leg movement", "Low starting resistance", "Direct wheelchair access", "Full Color Touch Screen", "3 year parts warranty"] },
  { id: "57", name: "SciFit Pro 2 - Total Body", category: "Cardio", subcategory: "SciFit", sku: "SCI PRO230-INT", description: ["Upper, lower or total body", "Dependent motion", "Adjustable cranks", "Removable seat", "Very slow starting resistance", "3 year parts warranty"] },
  
  { id: "59", name: "SciFit Pro 1000 - Seated Upper Body", category: "Cardio", subcategory: "SciFit", sku: "SCI PRO1031-INT", description: ["Adjustable arm cranks: 3 ROM settings", "Step-through accessibility", "Bi-directional exercise", "191 levels of resistance", "Removable seat for wheelchair access"] },
  { id: "60", name: "SciFit Pro 1000 Sport - Seated Upper Body", category: "Cardio", subcategory: "SciFit", sku: "SCI PRO1030-INT", description: ["Get-on-and-go with limited adjustments", "Step-through accessibility", "Bi-directional exercise", "Very low starting resistance"] },

  // STRENGTH EQUIPMENT - Shuttle
  { id: "67", name: "Shuttle Systems TNT", category: "Strength Equipment", subcategory: "Shuttle Systems", sku: "CD 7100T", description: ["24\" seat height", "Adjustable hand grips", "PNF towers & pulley systems", "All aluminum construction", "Resistance from 6-300 lbs", "350 lb weight capacity"] },
  { id: "68", name: "Shuttle Recovery Senior", category: "Strength Equipment", subcategory: "Shuttle Systems", sku: "CD 5500", description: ["Supine Leg Press", "8 elasticords provide up to 300 lbs of progressive resistance", "Wide backrest with wobble board", "Supports bariatric and senior clients"] },
  { id: "69", name: "Shuttle Systems MVP Pro", category: "Strength Equipment", subcategory: "Shuttle Systems", sku: "CD 3200", description: ["Supine Leg Press", "All aluminum construction", "Closed chain protocols", "Jumping protocols", "Resistance from 12.5-650 lbs", "500 lb weight capacity"] },
  { id: "70", name: "Shuttle Ultimate", category: "Strength Equipment", subcategory: "Shuttle Systems", sku: "CD 9000", description: ["Supine Leg Press with 16 elasticords", "Up to 500 lbs of progressive resistance", "4 position adjustable backrest", "Fully adjustable kick plate"] },
  { id: "71", name: "Shuttle Systems 2000-1 Clinical", category: "Strength Equipment", subcategory: "Shuttle Systems", sku: "CD 2200", description: ["Supine Leg Press", "8 elasticords up to 160 lbs", "Early stage rehabilitation tool", "Resistance starts at 3 lbs"] },
  { id: "72", name: "Shuttle Ultimate Plus", category: "Strength Equipment", subcategory: "Shuttle Systems", sku: "CD 9100", description: ["Supine Leg Press with 16 elasticords", "Up to 500 lbs of progressive resistance", "4 position adjustable backrest", "PNF total body tower system"] },

  // STRENGTH EQUIPMENT - SportsArt
  { id: "73", name: "SportsArt N965 Horizontal Leg Press", category: "Strength Equipment", subcategory: "SportsArt", sku: "SAA N965", description: ["Seat reclines 90-180 degrees", "440 lbs steel weight stack", "Max user weight: 500lbs", "11 gauge steel frame"] },
  { id: "74", name: "Sports Art DF201 Leg Press / Calf Extension", category: "Strength Equipment", subcategory: "SportsArt", sku: "SAA DF201", description: ["Non-slip foot plate surface", "1:2 weight ratio resistance", "14-gauge machine welded frame", "Heavy-duty marine grade cushions"] },
  { id: "75", name: "SportsArt N961 Multi Hip", category: "Strength Equipment", subcategory: "SportsArt", sku: "SAA N961", description: ["Range of motion limiter", "Hip flexion and extension", "264lbs steel weight stack", "Max user weight: 500lbs"] },
  { id: "76", name: "Sports Art DS972 Functional Trainer", category: "Strength Equipment", subcategory: "SportsArt", sku: "SAA DS972", description: ["Adjustable 1:2 and 1:4 pulleys", "Dual weight stack", "41 pulley positions", "7-piece accessory set included"] },
  { id: "77", name: "Sports Art DF200 Leg Extension / Leg Curl", category: "Strength Equipment", subcategory: "SportsArt", sku: "SAA DF200", description: ["Spring-lock release knobs", "Adjustable seat-back cushion", "14-gauge machine welded frame", "Heavy-duty marine grade cushions"] },
  { id: "78", name: "Sports Art S973 Cable Tower", category: "Strength Equipment", subcategory: "SportsArt", sku: "SAA S973", description: ["Dual swivel pulleys", "36 incremental adjustments", "1:2 and 1:4 ratios", "Aircraft quality cable", "Marine-grade upholstery"] },

  // STRENGTH EQUIPMENT - TKO
  { id: "82", name: "TKO Defiant Custom Bay Single Station", category: "Strength Equipment", subcategory: "TKO", sku: "TKO DB-SUB-8-STAM", description: ["Accessories included", "Pull up bar", "4 tier storage", "Floor mounted system", "53\"x45\"x95\""] },
  { id: "83", name: "TKO Custom Storage Rack", category: "Strength Equipment", subcategory: "TKO", sku: "TKO 92ATT", description: ["72\"W x 72\"H x 33.5\"D", "Customizable", "Free Standing", "Tablet holder", "4 Heavy duty trays"] },
  { id: "84", name: "TKO 3 Tier Dumbbell Rack", category: "Strength Equipment", subcategory: "TKO", sku: "TKO 6235-B", description: ["55\"W x 30\"D x 40\"H", "174lbs", "Dumbbells sold separately", "Heavy duty frame"] },

  // BALANCE PRODUCTS
  { id: "85", name: "SHUTTLE BALANCE SPORT", category: "Balance Products", subcategory: "Balance", sku: "CD 8011", description: ["Dynamic Platform", "Simulates slip through motion", "Supports up to 500 lbs", "Adjustable suspension chains", "Safely train balance"] },
  { id: "86", name: "CANDO MULTI-AXIAL PRO SYSTEM (MAPS BOARD)", category: "Balance Products", subcategory: "Balance", sku: "FAB 10-1731", description: ["Facilitates lower limb rehab", "Develops strength, endurance, ROM, balance and coordination", "Includes platform, attachments, weight rods plates and wall rack"] },
  { id: "87", name: "Shuttle MiniPress", category: "Balance Products", subcategory: "Balance", sku: "CD 4100", description: ["Use with chair or wheelchair", "Only weighs 15 lbs", "Adjustable to 74°", "Resistance from 2 to 80 lbs", "Total knee rehabilitation"] },
  { id: "88", name: "Bosu Pro Balance Trainer", category: "Balance Products", subcategory: "Balance", sku: "FAB 30-1900", description: ["Enhanced Movement Capabilities", "Tone & Strengthen", "Improve Balance & Agility", "Next Level Functional Training"] },
  { id: "89", name: "Shuttle Square Rebounder", category: "Balance Products", subcategory: "Balance", sku: "CD 6100", description: ["Portable with wheels", "No assembly required", "High quality galvanized springs", "9 angles of adjustability", "Very quiet operation"] },
  { id: "90", name: "Airex Balance Pad", category: "Balance Products", subcategory: "Balance", sku: "FAB 30-1910", description: ["Super soft specialty foam", "Textured surface for better grip", "Antibacterial agent-treated", "19\"L x 16\"W x 2.5\"H"] },
  { id: "91", name: "Theraband Stability Trainer", category: "Balance Products", subcategory: "Balance", sku: "FAB 30-2132", description: ["Oval-shaped, color coded pad", "For balance and proprioception training", "Available in three densities"] },
  { id: "92", name: "Cando Vestibular Rocker Boards", category: "Balance Products", subcategory: "Balance", sku: "FAB 32-2023", description: ["Wooden boards covered with carpeting", "Stimulates balance control and vestibular responses"] },
  { id: "93", name: "Theraband Stability Disc Trainer", category: "Balance Products", subcategory: "Balance", sku: "FAB 30-2130", description: ["Upper and lower extremities", "Ankle and knee injury prevention", "Core strengthening and stability", "13\" Diameter"] },
  { id: "94", name: "Economy Wobble Rocker Boards", category: "Balance Products", subcategory: "Balance", sku: "FAB 10-1745", description: ["Cost-effective and fun", "Improve range-of-motion, balance and coordination", "Textured surface", "Lightweight and portable"] },
  { id: "95", name: "Cando Balance Discs", category: "Balance Products", subcategory: "Balance", sku: "FAB 30-1870G", description: ["Inflatable disc", "Relieves back pain, improves posture", "One flat side, one nubby side for tactile feedback"] },
  { id: "96", name: "Airex Vestibular Foam Balance Beam", category: "Balance Products", subcategory: "Balance", sku: "FAB 30-1913", description: ["Balance, stretching, physical therapy and rehabilitation", "Developed for clinical balance exercises", "64\"x2.5\"x9.5\""] },

  // COMPRESSION
  { id: "97", name: "Therm-X Compression", category: "Compression", subcategory: "Cold Compression", sku: "TXT TX0002", description: ["Incorporates cold, heat, contrast, and compression", "Ideal for post-surgical injuries", "Temperatures range from 34°-110°F", "Treatment cycles last up to 100 minutes"] },
  { id: "98", name: "Squid Cold Compression", category: "Compression", subcategory: "Cold Compression", sku: "PT SQ-KFU", description: ["Small portable unit", "Rechargeable battery", "50 uses on one full charge", "4 levels of compression", "Made in the USA"] },
  { id: "99", name: "Richmar REX Compression", category: "Compression", subcategory: "Cold Compression", sku: "RICH DVTREX", description: ["Designed for athletes and active individuals", "Compressor unit and inserts sold separately", "Wipe clean surface for multiple uses"] },
  { id: "100", name: "Game Ready PRPro 2.1", category: "Compression", subcategory: "Cold Compression", sku: "FAB 13-2500", description: ["Portable, light-weight, easy to operate", "Treats two patients at once", "3 settings of compression", "Cold therapy 35-50 degrees"] },

  // WORK HARDENING
  { id: "101", name: "Baseline Hand Dynamometer, 200 lb Capacity", category: "Work Hardening", subcategory: "Work Hardening", sku: "FAB 12-0240", description: ["Accurate grip strength readings", "Maximum reading remains until reset", "5 position adjustable handle"] },
  { id: "102", name: "Baseline Pinch Gauge, 50 lb Capacity", category: "Work Hardening", subcategory: "Work Hardening", sku: "FAB 12-0222", description: ["Hydraulic system for reliability", "50 pound hd standard head", "5 year manufacturers warranty"] },
  { id: "103", name: "Baseline Hand Evaluation, 3 Piece Set", category: "Work Hardening", subcategory: "Work Hardening", sku: "FAB 12-0220", description: ["Hydraulic hand dynamometer", "6\" stainless steel goniometer", "Hydraulic pinch gauge", "Protective carry case", "2 year warranty"] },

  // CLINICAL SUPPLIES
  { id: "104", name: "Stability Balls (Various Sizes)", category: "Clinical Supplies", subcategory: "Stability Balls", sku: "FAB 30-17", description: ["Available in multiple sizes (45cm-85cm)", "Anti-burst construction", "Ideal for core strengthening and balance"] },
  { id: "105", name: "Finger Webs", category: "Clinical Supplies", subcategory: "Hand Exercisers", sku: "FAB 10-0800", description: ["Resistive hand exerciser", "Develops finger strength and coordination"] },
  { id: "106", name: "Twist & Bend Bars", category: "Clinical Supplies", subcategory: "Hand Exercisers", sku: "FAB 10-1500", description: ["Flexible resistance bars", "Color-coded resistance levels", "For upper extremity strengthening"] },
  { id: "107", name: "Digi Flex Hand Exercisers", category: "Clinical Supplies", subcategory: "Hand Exercisers", sku: "FAB 10-0745", description: ["Individual finger exercise", "Color-coded resistance levels", "Develops isolated finger strength"] },
  { id: "108", name: "Sup-R Bands & Tubing", category: "Clinical Supplies", subcategory: "Bands & Tubing", sku: "FAB 71-0001", description: ["Latex-free resistance bands", "Color-coded resistance levels", "Available in rolls and pre-cut lengths"] },
  { id: "109", name: "Therabands & Tubing", category: "Clinical Supplies", subcategory: "Bands & Tubing", sku: "FAB 20-", description: ["8 color-coded resistance levels", "Professional grade latex", "Available in rolls, pre-cut lengths and sets"] },
  { id: "110", name: "Hand Putty (Various Resistances)", category: "Clinical Supplies", subcategory: "Hand Exercisers", sku: "FAB 10-09", description: ["Color-coded resistance levels", "Non-toxic and latex-free", "For hand and finger strengthening"] },
  { id: "111", name: "Biofreeze Professional", category: "Clinical Supplies", subcategory: "Pain Relief", sku: "BIO", description: ["Topical pain relief", "Available in gel, spray, and roll-on", "Professional strength formula"] },
  { id: "112", name: "Ultrasound Gel", category: "Clinical Supplies", subcategory: "Pain Relief", sku: "USG", description: ["Clinical grade ultrasound gel", "Hypoallergenic", "Available in various sizes"] },
  { id: "113", name: "Hot & Cold Packs", category: "Clinical Supplies", subcategory: "Hot & Cold Packs", sku: "HCP", description: ["Reusable hot and cold therapy", "Multiple sizes available", "Durable construction"] },
  { id: "114", name: "Bolsters & Wedges", category: "Clinical Supplies", subcategory: "Bolsters & Wedges", sku: "BWE", description: ["Support and positioning aids", "Multiple shapes and sizes", "Durable vinyl covering"] },
  { id: "115", name: "CanDo Composite Foam Rollers", category: "Clinical Supplies", subcategory: "Foam Rollers", sku: "FAB 30-22", description: ["Round and half-round options", "Various lengths available", "Durable composite construction"] },
  { id: "116", name: "CUFF WEIGHTS 7 PIECE SET", category: "Clinical Supplies", subcategory: "Cuff Weights", sku: "FAB 10-2550", description: ["Color-coded weight system", "Adjustable Velcro closure", "One of each 1lb, 2lb, 3lb, 4lb, 5lb, 7.5lb, 10lb"] },
  // MATRIX FITNESS - Endurance Series (LED Console)
  { id: "117", name: "Matrix Endurance Treadmill with LED Console", category: "Cardio", subcategory: "Treadmills", sku: "T-ES-LED", description: ["LED Console with intuitive controls", "Precision-engineered drive system for heavy daily use", "Durable deck stands up to tough environments", "Smart maintenance features minimize downtime", "Customizable workout experience", "Ideal for high-traffic facilities"] },
  { id: "118", name: "Matrix Endurance Suspension Elliptical with LED Console", category: "Cardio", subcategory: "Ellipticals", sku: "E-ES-LED", description: ["LED Console with intuitive controls", "Patented suspension design minimizes noise and friction", "Smart ergonomics for natural movement", "Low-impact, comfortable cardio workout", "Built to handle heavy daily use", "Streamlined service and maintenance"] },
  { id: "119", name: "Matrix Endurance ClimbMill with LED Console", category: "Cardio", subcategory: "Climbmills", sku: "C-ES-LED", description: ["LED Console with intuitive controls", "Heavy-duty design for secure, stable workouts", "Durable construction stands up to heavy use", "Easy to service to minimize downtime", "True stair-climbing workout experience", "Ideal for both beginners and enthusiasts"] },
  { id: "120", name: "Matrix Endurance Recumbent Cycle with LED Console", category: "Cardio", subcategory: "Recumbent Cycles", sku: "R-ES-LED", description: ["LED Console with intuitive controls", "Custom-molded, adjustable touchpoints", "Ergonomically sculpted seat and back pad", "Excellent weight distribution and support", "Low-impact cardio for all sizes and ability levels", "Smart design simplifies service and placement"] },
  { id: "121", name: "Matrix Endurance Upright Cycle with LED Console", category: "Cardio", subcategory: "Upright Cycles", sku: "U-ES-LED", description: ["LED Console with intuitive controls", "Race-inspired design with real outdoor ride feel", "Comfortable for long rides", "Accessible step-through design", "Smart features for easy service", "Compact footprint fits any facility"] },
  // MATRIX FITNESS - Lifestyle Series (LED Console)
  { id: "122", name: "Matrix Lifestyle Treadmill with LED Console", category: "Cardio", subcategory: "Treadmills", sku: "T-LS-LED", description: ["LED Console with intuitive controls", "Compact frame maximizes floor space", "Reliable drive system and durable deck", "Beautifully simple workout experience", "Streamlined maintenance to minimize downtime", "Ideal for light- to medium-use facilities"] },
  { id: "123", name: "Matrix Lifestyle Suspension Elliptical with LED Console", category: "Cardio", subcategory: "Ellipticals", sku: "E-LS-LED", description: ["LED Console with intuitive controls", "Compact frame fits any facility", "Patented suspension design extends product life", "Smart ergonomics for natural body movement", "Quiet, low-friction operation", "Convenience features for users and staff"] },
  { id: "124", name: "Matrix Lifestyle ClimbMill with LED Console", category: "Cardio", subcategory: "Climbmills", sku: "C-LS-LED", description: ["LED Console with intuitive controls", "Compact design fits facilities with lower ceilings", "Comfortable, secure climbing workout", "Durable components built to last", "Easy to service and ready when needed", "Ideal for low- to medium-volume facilities"] },
  { id: "125", name: "Matrix Lifestyle Recumbent Cycle with LED Console", category: "Cardio", subcategory: "Recumbent Cycles", sku: "R-LS-LED", description: ["LED Console with intuitive controls", "Ergo Form seat for all-day comfort", "Step-through design for easy access", "Self-balancing pedals", "Compact frame fits any space", "Reliable, low-impact cardio"] },
  { id: "126", name: "Matrix Lifestyle Upright Cycle with LED Console", category: "Cardio", subcategory: "Upright Cycles", sku: "U-LS-LED", description: ["LED Console with intuitive controls", "Ergo Form seat for comfort", "Dual-position handlebars", "Adjustable seat height with step-through design", "Self-balancing pedals and forged 3-piece crank", "Self-powered options simplify placement"] },
];
