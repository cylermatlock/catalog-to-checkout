// Product images extracted from the 2025 catalog
import richmarIntensity12 from "@/assets/products/richmar-intensity-12-tens.jpg";
import richmarHydratherm from "@/assets/products/richmar-hydratherm.jpg";
import richmarIntensitySelectComboII from "@/assets/products/richmar-intensity-select-combo-ii.jpg";
import chattanoogaM2 from "@/assets/products/chattanooga-m2-hydrocollator.jpg";
import richmarIfComboII from "@/assets/products/richmar-if-combo-ii.jpg";
import chattanoogaSS2 from "@/assets/products/chattanooga-ss2-hydrocollator.jpg";
import richmarTheratouchEX4 from "@/assets/products/richmar-theratouch-ex4.jpg";
import intensityCX4 from "@/assets/products/intensity-cx4.jpg";
import richmarWinnerEVO from "@/assets/products/richmar-winner-evo.jpg";
import intensityCX2 from "@/assets/products/intensity-cx2.jpg";
import richmarTherasoundEVO from "@/assets/products/richmar-therasound-evo.jpg";
import chattanoogaVectraGenisys from "@/assets/products/chattanooga-vectra-genisys.jpg";

// Richmar product images from richmarweb.com
import richmarLX2Laser from "@/assets/products/richmar-lx2-laser.jpg";
import richmarTheradot from "@/assets/products/richmar-theradot.jpg";
import richmarDX2Diathermy from "@/assets/products/richmar-dx2-diathermy.jpg";
import richmarREXCompression from "@/assets/products/richmar-rex-compression.jpg";
import richmarHydrathermWeb from "@/assets/products/richmar-hydratherm-web.jpg";

// GMTS individual product photos
import gmts3SectionHiLo from "@/assets/products/gmts-3-section-hilo.png";
import gmtsTreatmentTableBackrest from "@/assets/products/gmts-treatment-table-backrest.png";
import gmts2SectionBoBath from "@/assets/products/gmts-2-section-bobath.png";
import gmtsFlatTopTable from "@/assets/products/gmts-flat-top-table.png";
import gmts2SidedStairs from "@/assets/products/gmts-2-sided-stairs.png";
import gmts1SidedStairs from "@/assets/products/gmts-1-sided-stairs.png";
import gmtsConvertibleStairs from "@/assets/products/gmts-convertible-stairs.png";
import gmtsMirrorRack from "@/assets/products/gmts-mirror-rack.png";
import gmtsMiniStorageRack from "@/assets/products/gmts-mini-storage-rack.png";
import gmtsLowMatTable from "@/assets/products/gmts-low-mat-table.png";
import gmtsParallelBars10ft from "@/assets/products/gmts-parallel-bars-10ft.png";
import gmtsParallelBars7ft from "@/assets/products/gmts-parallel-bars-7ft.png";

import gmtsDeluxeHiLoMat from "@/assets/products/gmts-deluxe-hi-lo-mat.png";

// Catalog page screenshots as placeholders
import gmtsRehabPage from "@/assets/products/gmts-page-11-rehab.jpg";

import gmtsStoolsPage from "@/assets/products/gmts-page-26-stools.jpg";

// Shuttle Systems product images
import shuttleTNT from "@/assets/products/shuttle-tnt-v2.png";
import shuttleRecovery from "@/assets/products/shuttle-recovery-v2.png";
import shuttleMVP from "@/assets/products/shuttle-mvp.png";
import shuttleUltimate from "@/assets/products/shuttle-ultimate-v2.png";
import shuttle2000 from "@/assets/products/shuttle-2000-1-clinical.png";
import shuttleBalance from "@/assets/products/shuttle-balance.jpg";
import shuttleMinipress from "@/assets/products/shuttle-minipress.jpg";
import shuttleRebounder from "@/assets/products/shuttle-rebounder.jpg";

// Spirit Fitness product images
import spiritCT800 from "@/assets/products/spirit-ct800.png";
import spiritCR800 from "@/assets/products/spirit-cr800.jpg";
import spiritCE800 from "@/assets/products/spirit-ce800.png";
import spiritFunctionalTrainer from "@/assets/products/spirit-functional-trainer.png";
import spiritLegExtCurl from "@/assets/products/spirit-leg-ext-curl.jpg";
import spiritLegPressCalf from "@/assets/products/spirit-leg-press-calf.jpg";

// SciFit product images from hyweb.com
import scifitPro1 from "@/assets/products/scifit-pro1.jpg";
import scifitStepOne from "@/assets/products/scifit-stepone.jpg";
import scifitPro2 from "@/assets/products/scifit-pro2.jpg";
import scifitPro1Sport from "@/assets/products/scifit-pro1-sport.jpg";
import scifitPro1000 from "@/assets/products/scifit-pro1000.jpg";

// Map product IDs to their images
export const productImages: Record<string, string> = {
  // GMTS Rehab Furniture - individual photos
  "1": gmts3SectionHiLo,
  "2": gmtsTreatmentTableBackrest,
  "3": gmts2SectionBoBath,
  "4": gmtsFlatTopTable,
  "5": gmtsDeluxeHiLoMat,
  "6": gmtsLowMatTable,
  // GMTS Parallel Bars
  "7": gmtsParallelBars10ft,
  "8": gmtsParallelBars7ft,
  // GMTS Training Stairs - individual photos
  "10": gmts2SidedStairs,
  "11": gmts1SidedStairs,
  "12": gmtsConvertibleStairs,
  // GMTS Storage
  "14": gmtsMirrorRack,
  "15": gmtsMiniStorageRack,
  "18": gmtsRehabPage,
  // GMTS Stools (page placeholder)
  "19": gmtsStoolsPage,
  "20": gmtsStoolsPage,
  // Modalities - Portable TENS (catalog + web)
  "25": richmarIntensity12,
  "26": richmarIntensitySelectComboII,
  "27": richmarIfComboII,
  // Modalities - Hydrocollator
  "28": richmarHydrathermWeb,
  "29": chattanoogaM2,
  "30": chattanoogaSS2,
  // Modalities - E-Stim/Ultrasound
  "31": richmarTheratouchEX4,
  "32": intensityCX4,
  "33": richmarWinnerEVO,
  "34": intensityCX2,
  "35": richmarTherasoundEVO,
  "36": chattanoogaVectraGenisys,
  // Modalities - Laser
  "37": richmarLX2Laser,
  "38": richmarLX2Laser, // Prism Probe - using LX2 image as placeholder
  // Modalities - Hivamat/Diathermy
  "40": richmarTheradot,
  "41": richmarDX2Diathermy,
  // Spirit Fitness - Cardio
  "49": spiritCT800,
  "50": spiritCR800,
  "51": spiritCE800,
  "52": spiritFunctionalTrainer,
  "53": spiritLegExtCurl,
  "54": spiritLegPressCalf,
  // SciFit - Cardio
  "55": scifitPro1,
  "56": scifitStepOne,
  "57": scifitPro2,
  
  "59": scifitPro1000,
  "60": scifitPro1000, // Pro 1000 Sport - using Pro 1000 image
  // Shuttle Systems - Strength Equipment
  "67": shuttleTNT,
  "68": shuttleRecovery,
  "69": shuttleMVP,
  "70": shuttleUltimate,
  "71": shuttle2000,
  "72": shuttleUltimate, // Ultimate Plus - using Ultimate image
  // Shuttle Systems - Balance Products
  "85": shuttleBalance,
  "87": shuttleMinipress,
  "89": shuttleRebounder,
  // Compression
  "99": richmarREXCompression,
};
