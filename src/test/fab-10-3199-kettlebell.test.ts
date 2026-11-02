import { describe, expect, it } from "vitest";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";

describe("Requested FAB 10-3199 kettlebell set", () => {
  it("lists FAB 10-3199 exactly once with the requested details", () => {
    const matches = products.filter((product) => product.sku === "FAB 10-3199");
    expect(matches).toHaveLength(1);
    const product = matches[0];
    expect(product?.id).toBe("1009");
    expect(product?.subcategory).toBe("Kettlebells");
    expect(product?.description.join(" ")).toContain("5, 7.5, 10, 15 and 20 lb");
  });

  it("has a photo and a details page", () => {
    expect(productImages["1009"]).toBeTruthy();
    expect(productDetails["1009"]?.slug).toBe("cando-vinyl-coated-kettlebell-5-piece-set");
  });
});
