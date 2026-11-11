import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import electrode from "@/assets/products/tms/tms-710280-003.jpg.asset.json";
import doorPulley from "@/assets/products/tms/tms-720050-002.jpg.asset.json";
import stools from "@/assets/products/tms/tms-720105-001.jpg.asset.json";
import mirror from "@/assets/products/tms/tms-720169-001.jpg.asset.json";
import wallPulley from "@/assets/products/tms/tms-720806-001.jpg.asset.json";
import table from "@/assets/products/tms/tms-730003.jpg.asset.json";

const cases = [
  { sku: "TMS 710280-003", id: "1045", must: "2.75\" round, cloth-backed", photo: electrode },
  { sku: "TMS 720050-002", id: "1046", must: "non-scratch door anchor", photo: doorPulley },
  { sku: "TMS 720105-001", id: "859", must: "Set of 4 stools which nest for storage", photo: stools },
  { sku: "TMS 720169-001", id: "1047", must: "natural oak finish", photo: mirror },
  { sku: "TMS 720806-001", id: "1048", must: "18\" H x 5\" W x 20\" D", photo: wallPulley },
  { sku: "TMS 730003-(xxx)", id: "1049", must: "30\" W x 72\" L", photo: table },
];

describe("Tru-Medical items requested Nov 11", () => {
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
