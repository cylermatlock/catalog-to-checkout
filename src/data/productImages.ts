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

// GMTS catalog page screenshots as placeholders (replace with individual product photos later)
import gmtsRehabPage from "@/assets/products/gmts-page-11-rehab.jpg";
import gmtsParallelPage from "@/assets/products/gmts-page-15-parallel.jpg";
import gmtsStoragePage from "@/assets/products/gmts-page-16-storage.jpg";
import gmtsStoolsPage from "@/assets/products/gmts-page-26-stools.jpg";

// Map product IDs to their images
export const productImages: Record<string, string> = {
  // GMTS Rehab Furniture - Hi-Lo & Treatment Tables (page 11 placeholder)
  "1": gmtsRehabPage,
  "2": gmtsRehabPage,
  "3": gmtsRehabPage,
  "4": gmtsRehabPage,
  "5": gmtsRehabPage,
  "6": gmtsRehabPage,
  // GMTS Parallel Bars (page 15 placeholder)
  "7": gmtsParallelPage,
  "8": gmtsParallelPage,
  // GMTS Training Stairs (page 15 placeholder)
  "10": gmtsParallelPage,
  "11": gmtsParallelPage,
  "12": gmtsParallelPage,
  // GMTS Storage & Traction (page 16 placeholder)
  "14": gmtsStoragePage,
  "15": gmtsStoragePage,
  "18": gmtsStoragePage,
  // GMTS Stools (page 26 placeholder)
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
