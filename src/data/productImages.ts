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

// Catalog page screenshots as placeholders
import gmtsRehabPage from "@/assets/products/gmts-page-11-rehab.jpg";
import gmtsParallelPage from "@/assets/products/gmts-page-15-parallel.jpg";
import gmtsStoolsPage from "@/assets/products/gmts-page-26-stools.jpg";

// Map product IDs to their images
export const productImages: Record<string, string> = {
  // GMTS Rehab Furniture - individual photos
  "1": gmts3SectionHiLo,
  "2": gmtsTreatmentTableBackrest,
  "3": gmts2SectionBoBath,
  "4": gmtsFlatTopTable,
  "5": gmtsRehabPage,  // placeholder - Hi-Lo Mat Table
  "6": gmtsRehabPage,  // placeholder - Low Mat Table
  // GMTS Parallel Bars (page placeholder)
  "7": gmtsParallelPage,
  "8": gmtsParallelPage,
  // GMTS Training Stairs - individual photos
  "10": gmts2SidedStairs,
  "11": gmts1SidedStairs,
  "12": gmtsConvertibleStairs,
  // GMTS Storage - individual photos
  "14": gmtsMirrorRack,
  "15": gmtsMiniStorageRack,
  "18": gmtsRehabPage,  // placeholder - Traction Package
  // GMTS Stools (page placeholder)
  "19": gmtsStoolsPage,
  "20": gmtsStoolsPage,
  // Modalities - individual product images
  "25": richmarIntensity12,
  "26": richmarIntensitySelectComboII,
  "27": richmarIfComboII,
  "28": richmarHydratherm,
  "29": chattanoogaM2,
  "30": chattanoogaSS2,
  "31": richmarTheratouchEX4,
  "32": intensityCX4,
  "33": richmarWinnerEVO,
  "34": intensityCX2,
  "35": richmarTherasoundEVO,
  "36": chattanoogaVectraGenisys,
};
