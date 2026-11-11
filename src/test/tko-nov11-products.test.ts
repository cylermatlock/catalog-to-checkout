import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import collar from "@/assets/products/tko/tko-143sco-cm-1.jpg.asset.json";
import plyo from "@/assets/products/tko/tko-260plb-set.jpg.asset.json";
import ladder from "@/assets/products/tko/tko-281al-15-1.jpg.asset.json";
import b3100 from "@/assets/products/tko/tko-3100.jpg.asset.json";
import b3101 from "@/assets/products/tko/tko-3101.jpg.asset.json";
import b3102 from "@/assets/products/tko/tko-3102.jpg.asset.json";

const cases = [
  { sku: "TKO 143SCO-CM", id: "1017", must: "sold as a pair", photo: collar },
  { sku: "TKO 260PLB12-36", id: "1018", must: "12\", 18\", 24\", 30\" and 36\"", photo: plyo },
  { sku: "TKO 281AL-15", id: "1019", must: "15 ft agility ladder", photo: ladder },
  { sku: "TKO 3100", id: "1020", must: "5-15 lb", color: "Orange, 1/4\"", photo: b3100 },
  { sku: "TKO 3101", id: "1021", must: "5-30 lb", color: "Red, 1/2\"", photo: b3101 },
  { sku: "TKO 3102", id: "1022", must: "20-60 lb", color: "Blue, 3/4\"", photo: b3102 },
];

describe("TKO products requested Nov 11", () => {
  for (const c of cases) {
    it(`lists ${c.sku} once as item ${c.id} with its key detail`, () => {
      const matches = products.filter((p) => p.sku === c.sku);
      expect(matches).toHaveLength(1);
      expect(matches[0]?.id).toBe(c.id);
      const text = matches[0]!.description.join(" ");
      expect(text).toContain(c.must);
      if (c.color) expect(text).toContain(c.color);
    });
    it(`has a photo, details page and repo photo copy for ${c.sku}`, () => {
      expect(productImages[c.id]).toBe(c.photo.url);
      expect(productDetails[c.id]?.gallery[0]?.src).toBe(c.photo.url);
      expect(fs.statSync(`public/catalog-assets/${c.photo.asset_id}/${c.photo.original_filename}`).size).toBe(c.photo.size);
    });
  }
});
