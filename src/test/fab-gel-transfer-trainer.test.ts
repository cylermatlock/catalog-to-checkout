import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested FAB transfer, gel and therapy products", () => {
  it.each([
    ["958", "FAB 50-3005"], ["959", "FAB 50-5601-1"],
    ["961", "FAB 50-6056"],
    ["962", "FAB 69-0162"], ["963", "FAB 75-2863"],
  ])("registers %s with exact SKU %s once", (id, sku) => {
    const matches = products.filter((p) => p.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });
  it("keeps the wooden transfer board's two hand grips", () => {
    expect(products.find((p) => p.sku === "FAB 50-3005")?.description).toEqual(expect.arrayContaining(["Wood transfer board", "Two hand grips"]));
  });
  it.each(["FAB 50-5601-1"])("keeps %s as one 5-liter container", (sku) => {
    expect(products.find((p) => p.sku === sku)?.description).toEqual(expect.arrayContaining(["5 liter container", "Sold individually — 1 each"]));
  });
  it("does not list the rejected gel SKU or duplicate item", () => {
    expect(products.filter((p) => p.sku === "FAB 50-5601-4X" || p.id === "960")).toHaveLength(0);
  });
  it("keeps two 8 oz bottles as the warmer's capacity", () => {
    expect(products.find((p) => p.sku === "FAB 50-6056")?.description).toEqual(expect.arrayContaining(["Two-bottle capacity", "For 8 oz bottles"]));
  });
  it("keeps the eTrainer motorized passive-assist model", () => {
    expect(products.find((p) => p.sku === "FAB 69-0162")?.description).toEqual(expect.arrayContaining(["HCI eTrainer motorized trainer", "Passive-assist exercise mode"]));
  });
  it("keeps the knee wedge dimensions", () => {
    expect(products.find((p) => p.sku === "FAB 75-2863")?.description).toContain("22 inch width x 20 inch length x 10.25 inch height");
  });
  it("keeps black Naugahyde upholstery", () => {
    expect(products.find((p) => p.sku === "FAB 75-2863")?.description).toContain("Black Naugahyde upholstery");
  });
  it("leaves this batch off BSW", () => {
    const added = products.filter((p) => Number(p.id) >= 958 && Number(p.id) <= 963);
    expect(added).toHaveLength(5);
    expect(added.every((p) => p.bsw !== true)).toBe(true);
  });
});