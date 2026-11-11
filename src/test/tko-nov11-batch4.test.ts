import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import rack from "@/assets/products/tko/tko-849mb-10-1.jpg.asset.json";
import kb10 from "@/assets/products/tko/tko-857kbv-10.jpg.asset.json";
import kb5 from "@/assets/products/tko/tko-857kbv-5.jpg.asset.json";
import rower from "@/assets/products/tko/tko-8ar-1.jpg.asset.json";
import landmine from "@/assets/products/tko/tko-99acc-p-on-921hr.jpg.asset.json";

const cases = [
  { sku: "TKO 849MB-10", id: "1040", must: "Holds up to 10 medicine balls", photo: rack },
  { sku: "TKO 857KBV-10", id: "1041", must: "10 lb vinyl-dipped kettlebell", photo: kb10 },
  { sku: "TKO 857KBV-5", id: "1042", must: "5 lb vinyl-dipped kettlebell", photo: kb5 },
  { sku: "TKO 8AR", id: "1043", must: "10 levels on the air damper", photo: rower },
  { sku: "TKO 99ACC-P", id: "1044", must: "Add-on for the TKO 921HR Half Rack", photo: landmine },
];

describe("TKO rack, kettlebells, rower and landmine requested Nov 11", () => {
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
