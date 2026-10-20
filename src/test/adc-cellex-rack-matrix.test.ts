import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("ADC, Cellex, Ideal rack, Iron Neck and Matrix requests", () => {
  it.each([["964", "FAB 77-0028"], ["965", "FAB 77-0029"], ["966", "FAB ME-D0001"], ["967", "IM HCR6"], ["853", "IN 3PB Pro"], ["968", "MF-G3-MS20-03"]])("lists %s as exact SKU %s once", (id, sku) => {
    const matches = products.filter((p) => p.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });
  it.each([["FAB 77-0028", "Small adult cuff"], ["FAB 77-0029", "Large adult cuff"]])("keeps %s in the requested size and navy color", (sku, size) => {
    expect(products.find((p) => p.sku === sku)?.description).toEqual(expect.arrayContaining([size, "Navy color"]));
  });
  it("keeps the Cellex ten-pound Fluidotherapy container", () => {
    expect(products.find((p) => p.sku === "FAB ME-D0001")?.description).toEqual(expect.arrayContaining(["For Fluidotherapy units", "10 lb container"]));
  });
  it("keeps the stainless steel wall rack with six stationary hooks", () => {
    expect(products.find((p) => p.sku === "IM HCR6")?.description).toEqual(expect.arrayContaining(["Stainless steel drying rack", "Wall-mounted design", "Six stationary hooks"]));
  });
  it("includes Matrix inside delivery", () => {
    expect(products.find((p) => p.sku === "MF-G3-MS20-03")?.description).toContain("Includes WHITE-GLOVE inside delivery");
  });
  it("includes Matrix assembly", () => {
    expect(products.find((p) => p.sku === "MF-G3-MS20-03")?.description).toContain("Assembly included");
  });
  it("includes Matrix trash removal", () => {
    expect(products.find((p) => p.sku === "MF-G3-MS20-03")?.description).toContain("Trash removal included");
  });
  it("preserves the existing Iron Neck bundle contents", () => {
    expect(products.find((p) => p.sku === "IN 3PB Pro")?.description).toEqual(expect.arrayContaining(["Includes 3 interchangeable front pads for a custom fit", "25 lb resistance band included", "Door anchor, door belt, and cinch anchor for versatile setup", "Skullcap included"]));
  });
  it("does not add the new products to BSW", () => {
    const added = products.filter((p) => ["964", "965", "966", "967", "968"].includes(p.id));
    expect(added).toHaveLength(5);
    expect(added.every((p) => p.bsw !== true)).toBe(true);
  });
});