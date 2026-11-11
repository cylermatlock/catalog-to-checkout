import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import photo1 from "@/assets/products/smarttools/smartcuffs-4-1.jpg.asset.json";
import photo2 from "@/assets/products/smarttools/smartcuffs-4-2.jpg.asset.json";
import photo3 from "@/assets/products/smarttools/smartcuffs-4-3.jpg.asset.json";
import photo4 from "@/assets/products/smarttools/smartcuffs-4-4.jpg.asset.json";

const cases = [
  { sku: "ST SCG4CLINICAL", id: "1015", contents: "Includes 8 SmartCuffs 4.0 — one pair of each size (S, M, L, XL)" },
  { sku: "ST SCG4LGPAIR", id: "1016", contents: "One pair of Large SmartCuffs 4.0 (2 cuffs), sized for legs" },
];

describe("Requested SmartCuffs 4.0 products", () => {
  for (const c of cases) {
    it(`lists ${c.sku} once as item ${c.id} with its contents`, () => {
      const matches = products.filter((p) => p.sku === c.sku);
      expect(matches).toHaveLength(1);
      expect(matches[0]?.id).toBe(c.id);
      expect(matches[0]?.description[0]).toBe(c.contents);
      expect(matches[0]?.bsw).toBeFalsy();
    });
    it(`has official photos and a details page for ${c.sku}`, () => {
      expect(productImages[c.id]).toBe(photo1.url);
      expect(productDetails[c.id]?.gallery.map((g) => g.src)).toEqual([photo1.url, photo2.url, photo3.url, photo4.url]);
    });
  }
  it("mirrors every SmartCuffs 4.0 photo to the repository", () => {
    for (const p of [photo1, photo2, photo3, photo4]) {
      expect(fs.statSync(`public/catalog-assets/${p.asset_id}/${p.original_filename}`).size).toBe(p.size);
    }
  });
});
