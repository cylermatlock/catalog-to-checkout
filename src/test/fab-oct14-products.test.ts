import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested Relief Pak products", () => {
  it.each([
    ["881", "FAB 11-1000"],
    ["882", "FAB 11-1001"],
    ["883", "FAB 11-1002"],
    ["884", "FAB 11-1821"],
    ["885", "FAB 11-1822"],
    ["886", "FAB 11-1961"],
  ])("registers product %s with exact SKU %s once", (id, sku) => {
    const matches = products.filter((product) => product.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });

  it("includes four standard packs with the four-pack heating unit", () => {
    const unit = products.find((product) => product.sku === "FAB 11-1961");
    expect(unit?.description).toContain("4-pack capacity");
    expect(unit?.description).toContain("Includes four standard moist heat packs");
  });
});