// Richmar product images sourced from richmarweb.com (authoritative)
import richmarIntensity10 from "@/assets/products/richmar-intensity-10-tens.jpg";
import richmarIntensitySelectComboII from "@/assets/products/richmar-intensity-select-combo-ii.jpg";
import richmarIfComboII from "@/assets/products/richmar-if-combo-ii.jpg";
import richmarHydrathermWeb from "@/assets/products/richmar-hydratherm-web.jpg";
import richmarTheratouchEX4 from "@/assets/products/richmar-theratouch-ex4.jpg";
import richmarCX4 from "@/assets/products/richmar-cx4.jpg";
// Note: CX2, ComboCare, and TheraTouch UX2 images failed to download from richmarweb.com
// Using placeholder until proper images are sourced
import richmarLX2Laser from "@/assets/products/richmar-lx2-laser.jpg";
import richmarTheradot from "@/assets/products/richmar-theradot.jpg";
import richmarDX2Diathermy from "@/assets/products/richmar-dx2-diathermy.jpg";
import richmarREXCompression from "@/assets/products/richmar-rex-compression.jpg";

// Other manufacturer product images
import chattanoogaM2 from "@/assets/products/chattanooga-m2-hydrocollator.jpg";
import chattanoogaM4 from "@/assets/products/chattanooga-m4-hydrocollator.png";
import chattanoogaVectraGenisys from "@/assets/products/chattanooga-vectra-genisys.jpg";

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
import armedicaPowerParallelBars from "@/assets/products/armedica-power-parallel-bars.png";
import idealDumbbellStorageVWR30 from "@/assets/products/ideal-dumbbell-storage-vwr30.png";

import gmtsDeluxeHiLoMat from "@/assets/products/gmts-deluxe-hi-lo-mat.png";
import chattanoogaDts6m from "@/assets/products/chattanooga-dts-6m.png";
import gmtsTractionPackage from "@/assets/products/gmts-traction-package.png";

// Catalog page screenshots as placeholders
import gmtsRehabPage from "@/assets/products/gmts-page-11-rehab.jpg";
import gmtsStools from "@/assets/products/gmts-stools.png";

// Standing Frames
import nkElectricStandingFrame from "@/assets/products/nk-electric-standing-frame.png";
import easystandEvolve from "@/assets/products/easystand-evolve.png";
import easystandStrapStand from "@/assets/products/easystand-strap-stand.png";

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

// Generic placeholder for products without a dedicated image
import placeholderProduct from "@/assets/products/placeholder-product.jpg";

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
  "9": armedicaPowerParallelBars,
  // GMTS Training Stairs - individual photos
  "10": gmts2SidedStairs,
  "11": gmts1SidedStairs,
  "12": gmtsConvertibleStairs,
  // GMTS Storage
  "13": idealDumbbellStorageVWR30,
  "14": gmtsMirrorRack,
  "15": gmtsMiniStorageRack,
  "16": chattanoogaDts6m,
  "18": gmtsTractionPackage,
  // GMTS Stools (page placeholder)
  "19": gmtsStools,
  "20": gmtsStools,
  // Modalities - Portable TENS (images from richmarweb.com)
  "25": richmarIntensity10,
  "26": richmarIntensitySelectComboII,
  "27": richmarIfComboII,
  // Modalities - Hydrocollator
  "28": richmarHydrathermWeb,
  "29": chattanoogaM2,
  "30": chattanoogaM4,
  // Modalities - E-Stim/Ultrasound (Richmar images from richmarweb.com)
  "31": richmarTheratouchEX4,
  "32": richmarCX4,
  "33": placeholderProduct, // ComboCare - image pending
  "34": placeholderProduct, // CX2 - image pending
  "35": placeholderProduct, // TheraTouch UX2 - image pending
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

  // Placeholder fallbacks for products without a dedicated photo yet.
  // Click any of these in the editor to swap them out with the real image.
  "22": nkElectricStandingFrame,
  "23": easystandEvolve,
  "24": easystandStrapStand,
  "39": placeholderProduct,
  "42": placeholderProduct,
  "43": placeholderProduct,
  "44": placeholderProduct,
  "45": placeholderProduct,
  "46": placeholderProduct,
  "47": placeholderProduct,
  "48": placeholderProduct,
  "73": placeholderProduct,
  "74": placeholderProduct,
  "75": placeholderProduct,
  "76": placeholderProduct,
  "77": placeholderProduct,
  "78": placeholderProduct,
  "79": placeholderProduct,
  "80": placeholderProduct,
  "81": placeholderProduct,
  "82": placeholderProduct,
  "83": placeholderProduct,
  "84": placeholderProduct,
  "86": placeholderProduct,
  "88": placeholderProduct,
  "90": placeholderProduct,
  "91": placeholderProduct,
  "92": placeholderProduct,
  "93": placeholderProduct,
  "94": placeholderProduct,
  "95": placeholderProduct,
  "96": placeholderProduct,
  "97": placeholderProduct,
  "98": placeholderProduct,
  "100": placeholderProduct,
  "101": placeholderProduct,
  "102": placeholderProduct,
  "103": placeholderProduct,
  "104": placeholderProduct,
  "105": placeholderProduct,
  "106": placeholderProduct,
  "107": placeholderProduct,
  "108": placeholderProduct,
  "109": placeholderProduct,
  "110": placeholderProduct,
  "111": placeholderProduct,
  "112": placeholderProduct,
  "113": placeholderProduct,
  "114": placeholderProduct,
  "115": placeholderProduct,
  "116": placeholderProduct,
};
