import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested FAB heating and diagnostic SKUs", () => {
  it.each([
    ["887", "FAB 11-1981"],
    ["888", "FAB 11-1985"],
    ["889", "FAB 12-1001X"],
    ["890", "FAB 12-1205"],
    ["891", "FAB 12-1571"],
    ["892", "FAB 12-2220"],
  ])("registers %s with exact SKU %s once", (id, sku) => {
    const matches = products.filter((product) => product.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });

  it("keeps new products off the BSW list", () => {
    for (const id of ["887", "888", "889", "890", "891", "892"]) {
      const product = products.find((item) => item.id === id);
      expect(product).toBeDefined();
      expect(product?.bsw === true).toBe(false);
    }
  });
});