import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import flatTop from "@/assets/products/tms/tms-730149-flat-top-wedge.jpg.asset.json";
import wedges from "@/assets/products/tms/tms-naugahyde-wedges.jpg.asset.json";
import dyno from "@/assets/products/tms/tms-770001-001.jpg.asset.json";
import largeBox from "@/assets/products/tms/tms-770025-001.jpg.asset.json";
import standardBox from "@/assets/products/tms/tms-770027-001.jpg.asset.json";

const cases = [
  { sku: "TMS 730149-(xxx)", id: "1056", must: "20\" x 32\" x 10\"", photo: flatTop },
  { sku: "TMS 730154-(xxx)", id: "1057", must: "10\" x 20\" x 22\"", photo: wedges },
  { sku: "TMS 730154-099", id: "1058", must: "Custom Naugahyde® color", photo: wedges },
  { sku: "TMS 730156-(xxx)", id: "1059", must: "12\" x 24\" x 28\"", photo: wedges },
  { sku: "TMS 770001-001", id: "1061", must: "0 to 200 lbs", photo: dyno },
  { sku: "TMS 770025-001", id: "1062", must: "80 lb capacity", photo: largeBox },
  { sku: "TMS 770027-001", id: "1063", must: "100 lb capacity", photo: standardBox },
];

describe("Tru-Medical wedges, dynamometer and lift boxes requested Nov 11", () => {
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

  it("lists the hi-lo foot switch TMS 730286-001 once as item 1060", () => {
    const matches = products.filter((p) => p.sku === "TMS 730286-001");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe("1060");
  });
});
