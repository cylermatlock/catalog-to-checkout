import { describe, expect, it } from "vitest";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";

describe("Requested TMS 730606 mat table", () => {
  it("lists TMS 730606-(xxx) exactly once with the requested details", () => {
    const matches = products.filter((product) => product.sku === "TMS 730606-(xxx)");
    expect(matches).toHaveLength(1);
    const product = matches[0];
    expect(product?.id).toBe("1006");
    expect(product?.name).toBe("GMTS DELUXE OAK MAT TABLE — FIXED HEIGHT, 4 SIZES");
    expect(product?.description).toContain("Hand-crafted with high quality solid oak");
    expect(product?.description).toContain('Surface height is 20"');
    expect(product?.description).toContain("Offered in four sizes: 3' x 7', 4' x 7', 5' x 7' and 6' x 8'");
    expect(product?.description).toContain("Weight Capacity: 500 lbs.");
  });

  it("has a photo and a details page", () => {
    expect(productImages["1006"]).toBeTruthy();
    expect(productDetails["1006"]?.slug).toBe("gmts-deluxe-oak-mat-table-fixed-height");
  });
});
