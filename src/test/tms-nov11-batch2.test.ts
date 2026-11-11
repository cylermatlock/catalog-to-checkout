import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import table from "@/assets/products/tms/tms-730004-099.jpg.asset.json";
import shelf from "@/assets/products/tms/tms-730008-001.jpg.asset.json";
import noseHole from "@/assets/products/tms/tms-730010-001.jpg.asset.json";
import bolsters from "@/assets/products/tms/tms-naugahyde-bolsters.jpg.asset.json";
import crescent from "@/assets/products/tms/tms-730147-knee-crescent.jpg.asset.json";

const cases = [
  { sku: "TMS 730004-099", id: "1050", must: "Custom color: Royal Blue", photo: table },
  { sku: "TMS 730008-001", id: "1051", must: "oak plywood", photo: shelf },
  { sku: "TMS 730010-001", id: "1052", must: "Optional 7.5\" nose hole", photo: noseHole },
  { sku: "TMS 730143-(xxx)", id: "1053", must: "6\" diameter x 24\" length", photo: bolsters },
  { sku: "TMS 730145-(xxx)", id: "1054", must: "8\" diameter x 36\" length", photo: bolsters },
  { sku: "TMS 730147-(xxx)", id: "1055", must: "knee crescent", photo: crescent },
];

describe("Tru-Medical table, options, bolsters and knee crescent requested Nov 11", () => {
  for (const c of cases) {
    it(`lists ${c.sku} once as item ${c.id} with its key detail`, () => {
      const matches = products.filter((p) => p.sku === c.sku);
      expect(matches).toHaveLength(1);
      expect(matches[0]?.id).toBe(c.id);
      expect(matches[0]!.description.join(" ")).toContain(c.must);
    });
    it(`has a photo, details page and repo photo copy for ${c.sku}`, () => {
      expect(productImages[c.id]).toBe(c.photo.url);
      expect(productDetails[c.id]?.gallery[0]?.src).toBe(c.photo.url);
      expect(fs.statSync(`public/catalog-assets/${c.photo.asset_id}/${c.photo.original_filename}`).size).toBe(c.photo.size);
    });
  }
});
