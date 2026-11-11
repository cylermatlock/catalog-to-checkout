import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import walker from "@/assets/products/drive/drive-wkaaw2b-walker.jpg.asset.json";

describe("Drive Medical ProBasics walker requested Nov 11", () => {
  it("lists RM WKAAW2B once as item 1064 with its key details", () => {
    const matches = products.filter((p) => p.sku === "RM WKAAW2B");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe("1064");
    const text = matches[0]!.description.join(" ");
    expect(text).toContain("300 pounds");
    expect(text).toContain('5" front wheels');
    expect(text).toContain("5'2\" to 6'4\"");
  });

  it("has a photo, details page and repo photo copy", () => {
    expect(productImages["1064"]).toBe(walker.url);
    expect(productDetails["1064"]?.gallery[0]?.src).toBe(walker.url);
    expect(
      fs.statSync(`public/catalog-assets/${walker.asset_id}/${walker.original_filename}`).size,
    ).toBe(walker.size);
  });

  it("resolves RM WKAAW2B to Drive Medical, not the Richmar RM prefix", () => {
    const brandMap = JSON.parse(fs.readFileSync("src/data/brand-map.json", "utf8"));
    expect(brandMap.skuOverrides["RM WKAAW2B"]).toBe("Drive Medical");
    expect(brandMap.skuPrefixes["RM"]).toBe("Richmar");
  });
});
