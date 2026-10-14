import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested Game Ready wraps", () => {
  it.each([
    ["893", "FAB 13-2513"], ["894", "FAB 13-2518"],
    ["895", "FAB 13-2519"], ["896", "FAB 13-2525"],
    ["897", "FAB 13-2527"], ["898", "FAB 13-2536"],
  ])("registers %s with exact SKU %s once", (id, sku) => {
    const matches = products.filter((product) => product.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });

  it("preserves GRPro 2.1-only compatibility for the medium full leg boot", () => {
    expect(products.find((p) => p.sku === "FAB 13-2536")?.description)
      .toContain("Compatible with GRPro 2.1 ONLY");
  });

  it("keeps new wraps off the BSW list", () => {
    for (const id of ["893", "894", "895", "896", "897", "898"]) {
      const product = products.find((p) => p.id === id);
      expect(product).toBeDefined();
      expect(product?.bsw === true).toBe(false);
    }
  });
});