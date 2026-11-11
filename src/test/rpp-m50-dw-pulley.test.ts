import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import photo from "@/assets/products/rpp/rpp-m50-dw.jpg.asset.json";

describe("Requested Rehab Pro RPP M50-DW pulley", () => {
  it("lists RPP M50-DW exactly once as a 50 lb double wall mount", () => {
    const matches = products.filter((p) => p.sku === "RPP M50-DW");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe("1012");
    expect(matches[0]?.name).toContain("50 lb");
    expect(matches[0]?.name).toContain("Double Wall Mount");
    expect(matches[0]?.price).toBeUndefined();
  });
  it("has a photo, details page and a repository photo copy", () => {
    expect(productImages["1012"]).toBe(photo.url);
    expect(productDetails["1012"]?.gallery[0]?.src).toBe(photo.url);
    const mirror = `public/catalog-assets/${photo.asset_id}/${photo.original_filename}`;
    expect(fs.statSync(mirror).size).toBe(photo.size);
  });
});
