import { describe, expect, it } from "vitest";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";

describe("Requested TMS 730011 lift back option", () => {
  it("lists TMS 730011-001 exactly once", () => {
    const matches = products.filter((product) => product.sku === "TMS 730011-001");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe("1008");
    expect(matches[0]?.name).toBe("GMTS TREATMENT TABLE OPTIONAL LIFT BACK");
    expect(matches[0]?.description.length).toBeGreaterThan(0);
  });

  it("has a photo and a details page", () => {
    expect(productImages["1008"]).toBeTruthy();
    expect(productDetails["1008"]?.slug).toBe("gmts-treatment-table-optional-lift-back");
  });
});
