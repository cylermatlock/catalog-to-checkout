import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import c535r from "@/assets/products/sportsart/saa-c535r-1.jpg.asset.json";
import c575r from "@/assets/products/sportsart/saa-c575r-1.jpg.asset.json";

const cases = [
  { sku: "SAA C535R", id: "1013", name: "SportsArt C535R Foundation Recumbent Cycle", capacity: "400 lb", photo: c535r },
  { sku: "SAA C575R", id: "1014", name: "SportsArt C575R Recumbent Bike", capacity: "500 lb", photo: c575r },
];

describe("Requested SportsArt recumbent bikes", () => {
  for (const c of cases) {
    it(`lists ${c.sku} once with the requested name and ${c.capacity} capacity`, () => {
      const matches = products.filter((p) => p.sku === c.sku);
      expect(matches).toHaveLength(1);
      expect(matches[0]?.id).toBe(c.id);
      expect(matches[0]?.name).toBe(c.name);
      expect(matches[0]?.description).toContain(`${c.capacity} max user weight`);
    });
    it(`has a photo, details page and repository photo copy for ${c.sku}`, () => {
      expect(productImages[c.id]).toBe(c.photo.url);
      expect(productDetails[c.id]?.gallery[0]?.src).toBe(c.photo.url);
      expect(fs.statSync(`public/catalog-assets/${c.photo.asset_id}/${c.photo.original_filename}`).size).toBe(c.photo.size);
    });
  }
});
