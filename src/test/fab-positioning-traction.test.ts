import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested FAB positioning, mobility and traction variants", () => {
  it.each([
    ["952", "FAB 30-3004"], ["953", "FAB 30-3016"],
    ["954", "FAB 43-1965"], ["955", "FAB 43-2010X"],
    ["956", "FAB 50-1010"], ["957", "FAB 50-1075"],
  ])("registers %s with exact SKU %s once", (id, sku) => {
    const matches = products.filter((p) => p.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });
  it("keeps the 36 by 10 inch roll", () => {
    expect(products.find((p) => p.sku === "FAB 30-3004")?.description).toContain("36 inch length x 10 inch diameter");
  });
  it("keeps the 24 by 28 by 10 inch wedge", () => {
    expect(products.find((p) => p.sku === "FAB 30-3016")?.description).toContain("24 x 28 x 10 inches");
  });
  it("keeps the large minimum-support stander package", () => {
    expect(products.find((p) => p.sku === "FAB 43-1965")?.description).toEqual(expect.arrayContaining(["Minimum support package", "Large size"]));
  });
  it("limits the stander to 280 lb", () => {
    expect(products.find((p) => p.sku === "FAB 43-1965")?.description).toContain("280 lb weight capacity");
  });
  it("keeps the stander user height range", () => {
    expect(products.find((p) => p.sku === "FAB 43-1965")?.description).toContain("User height range: 5' to 6'2\"");
  });
  it("keeps the offset adjustable cane silver and individually sold", () => {
    expect(products.find((p) => p.sku === "FAB 43-2010X")?.description).toEqual(expect.arrayContaining(["Aluminum cane", "Offset handle", "Adjustable height", "Silver finish", "Sold individually — 1 each"]));
  });
  it("includes the double pulley and door bracket", () => {
    expect(products.find((p) => p.sku === "FAB 50-1010")?.description).toEqual(expect.arrayContaining(["Double-pulley configuration", "Door bracket included"]));
  });
  it("includes the lumbar traction carry case", () => {
    expect(products.find((p) => p.sku === "FAB 50-1075")?.description).toContain("Carry case included");
  });
  it("leaves the six products off BSW", () => {
    const batch = products.filter((p) => Number(p.id) >= 952 && Number(p.id) <= 957);
    expect(batch).toHaveLength(6);
    expect(batch.every((p) => p.bsw !== true)).toBe(true);
  });
});