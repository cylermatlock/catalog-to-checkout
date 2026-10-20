import { describe, expect, it } from "vitest";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";

describe("Norco, NuStep, Pivotal, Piedmont and Richmar additions", () => {
  it.each([
    ["970", "NC 14700"],
    ["971", "NS 75-7242"],
    ["972", "PHS ATT-300"],
    ["973", "PM P29754PRO"],
    ["974", "RICH 400-852-MIC"],
    ["975", "RICH 400-872-MIC"],
    ["976", "RICH 400-8782"],
  ])("lists %s as %s exactly once", (id, sku) => {
    const matches = products.filter((p) => p.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });

  it.each(["970", "971", "972", "973", "974", "975", "976"])("has a photo for product %s", (id) => {
    expect(productImages[id]).toBeTruthy();
  });

  it("includes the NuStep bundle contents", () => {
    const desc = products.find((p) => p.sku === "NS 75-7242")?.description ?? [];
    expect(desc).toContain("Includes unilateral leg stabilizer");
    expect(desc).toContain("Includes one WellGrip set");
    expect(desc).toContain("Includes hip and torso belt");
  });

  it("lists the stretcher pad dimensions and universal corners", () => {
    const desc = products.find((p) => p.sku === "PM P29754PRO")?.description ?? [];
    expect(desc).toContain('29" W x 75" L x 4" thick');
    expect(desc.some((d) => /universal corners/i.test(d))).toBe(true);
  });

  it("sells both MicroBlock electrode packs 4 per pack", () => {
    for (const sku of ["RICH 400-852-MIC", "RICH 400-872-MIC"]) {
      expect(products.find((p) => p.sku === sku)?.description).toContain("Sold 4 per pack");
    }
  });
});
