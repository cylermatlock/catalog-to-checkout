import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";

const requested: Record<string, [string, string]> = {
  "TXT TX0101": ["1065", "Therm-X Shoulder Garment (Durable)"],
  "TXT TX0102": ["1066", "Therm-X Knee Garment"],
  "TXT TX0105": ["1067", "Therm-X Back Garment"],
  "TXT TX0108": ["1068", "Therm-X Hip Garment"],
  "TXT TX0111": ["1069", "Therm-X Half Leg Boot"],
  "TXT TX0112": ["1070", "Therm-X Hand/Wrist Garment (Durable)"],
};

describe("Therm-X garments requested Nov 11", () => {
  for (const [sku, [id, name]] of Object.entries(requested)) {
    it(`lists ${sku} once as item ${id} with photo, details and repo photo copy`, () => {
      const matches = products.filter((p) => p.sku === sku);
      expect(matches).toHaveLength(1);
      expect(matches[0]?.id).toBe(id);
      expect(matches[0]?.name).toBe(name);
      expect(matches[0]?.description.length).toBeGreaterThanOrEqual(6);
      const detail = productDetails[id];
      expect(detail?.gallery[0]?.src).toBe(productImages[id]);
      const assetId = productImages[id]!.split("/")[3];
      const file = productImages[id]!.split("/")[4];
      expect(fs.existsSync(`public/catalog-assets/${assetId}/${file}`)).toBe(true);
    });
  }
});
