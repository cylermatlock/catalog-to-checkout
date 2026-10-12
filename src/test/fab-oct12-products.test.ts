import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested FAB catalog SKUs", () => {
  const requested = [
    ["868", "FAB 10-1620X"],
    ["869", "FAB 10-2032"],
    ["870", "FAB 10-3331-2"],
    ["871", "FAB 10-5099"],
    ["872", "FAB 10-5109DS"],
    ["873", "FAB 10-5869"],
    ["874", "FAB 10-6743"],
  ];

  it.each(requested)("registers %s with the exact SKU %s once", (id, sku) => {
    const matches = products.filter((product) => product.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });

  it("keeps the requested 100-foot tubing rolls and pre-made fabric loops", () => {
    expect(products.find((p) => p.id === "873")?.sku).toBe("FAB 10-5869");
    expect(products.find((p) => p.id === "874")?.sku).toBe("FAB 10-6743");
    expect(products.some((p) => /^FAB 10-(?:549[23]|612[35])$/.test(p.sku))).toBe(false);
  });
});