import { describe, expect, it } from "vitest";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import photo from "@/assets/products/fab/therawrap-15-3352.jpg.asset.json";
import fs from "node:fs";

describe("Requested FAB Therawrap table", () => {
  it("registers FAB 15-3352 exactly once", () => {
    const matches = products.filter((p) => p.sku === "FAB 15-3352");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe("1011");
    expect(matches[0]?.price).toBeUndefined();
  });
  it("preserves the supplied table dimensions and adjustable height", () => {
    const table = products.find((p) => p.sku === "FAB 15-3352");
    expect(table?.description).toContain('72" wide x 48" deep; 18" tabletop depth');
    expect(table?.description).toContain('Height adjusts from 23" to 33" in 1" increments');
  });
  it("provides a product photo, details and a repository photo copy", () => {
    expect(productImages["1011"]).toBe(photo.url);
    expect(productDetails["1011"]?.gallery[0]?.src).toBe(photo.url);
    const mirror = `public/catalog-assets/${photo.asset_id}/${photo.original_filename}`;
    expect(fs.statSync(mirror).size).toBe(photo.size);
  });
});