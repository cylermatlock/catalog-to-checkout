import { describe, expect, it } from "vitest";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";

describe("Requested TMS 730002 treatment table", () => {
  it("lists TMS 730002-(xxx) exactly once with the requested details", () => {
    const matches = products.filter((product) => product.sku === "TMS 730002-(xxx)");
    expect(matches).toHaveLength(1);
    const product = matches[0];
    expect(product?.id).toBe("1007");
    expect(product?.name).toBe('GMTS 30" X 78" DELUXE SOLID OAK TREATMENT TABLE');
    expect(product?.description).toContain('Surface height is 30"');
    expect(product?.description).toContain("Weight Capacity: 500 lbs.");
    expect(product?.description).toContain('"H" brace is standard on all models for extra stability');
  });

  it("has a photo and a details page", () => {
    expect(productImages["1007"]).toBeTruthy();
    expect(productDetails["1007"]?.slug).toBe("gmts-deluxe-oak-treatment-table-30x78");
  });
});
