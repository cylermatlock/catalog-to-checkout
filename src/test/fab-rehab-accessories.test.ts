import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested FAB therapy and exercise accessories", () => {
  it.each([
    ["945", "FAB 13-2537"], ["946", "FAB 13-5255"],
    ["947", "FAB 14-1290"], ["948", "FAB 16-1701"],
    ["949", "FAB 30-1852X"], ["950", "FAB 30-2120BX"],
    ["951", "FAB 30-2300"],
  ])("registers %s with exact SKU %s once", (id, sku) => {
    const matches = products.filter((p) => p.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });
  it("preserves the large boot's GRPro 2.1-only restriction", () => {
    const p = products.find((p) => p.sku === "FAB 13-2537");
    expect(p?.description).toContain("Large size");
    expect(p?.description).toContain("Compatible with GRPro 2.1 ONLY");
  });
  it("keeps the butterfly kit size and box quantity", () => {
    const p = products.find((p) => p.sku === "FAB 13-5255");
    expect(p?.description).toEqual(expect.arrayContaining(["Butterfly configuration", '3.75" x 3.3"', "Box of 12"]));
  });
  it("keeps the orange 55 cm ball in a polybag", () => {
    const p = products.find((p) => p.sku === "FAB 30-1852X");
    expect(p?.description).toEqual(expect.arrayContaining(["21.7 inch / 55 cm diameter", "Orange", "Supplied in a polybag"]));
  });
  it("keeps the circular blue pad dimensions", () => {
    const p = products.find((p) => p.sku === "FAB 30-2120BX");
    expect(p?.description).toEqual(expect.arrayContaining(["Circular balance pad", "20 inch diameter", "2 inch thickness", "Blue"]));
  });
  it("leaves all seven off BSW", () => {
    const added = products.filter((p) => Number(p.id) >= 945 && Number(p.id) <= 951);
    expect(added).toHaveLength(7);
    expect(added.every((p) => p.bsw !== true)).toBe(true);
  });
});