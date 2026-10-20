import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Matrix and TRX requested kits", () => {
  it.each([["832", "MF-G3-S76"], ["833", "MF-GFTEDG"], ["969", "MF-MD-S70BK"], ["830", "MF-MG-A52"], ["831", "MF-MXSLED-02"], ["253", "MFS TRXCLUB4"]])("lists %s as %s exactly once", (id, sku) => {
    const matches = products.filter((p) => p.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });
  it("includes the booster foot platform attached to the foot plate", () => {
    expect(products.find((p) => p.sku === "MF-MD-S70BK")?.description).toContain("Includes foot platform that attaches to the foot plate");
  });
  it("includes booster shoulder pad extensions for shorter users", () => {
    expect(products.find((p) => p.sku === "MF-MD-S70BK")?.description).toContain("Includes shoulder pad extensions to assist shorter users");
  });
  it.each(["Suspension trainer with antimicrobial handles and adjustable foot cradles", "Suspension anchor and door anchor included", "Locking carabiner included", "TRX extender included", "Mesh bag included"])("includes TRX accessory: %s", (accessory) => {
    expect(products.find((p) => p.sku === "MFS TRXCLUB4")?.description).toContain(accessory);
  });
  it("reuses the existing TRX product rather than leaving two PRO 4 kits", () => {
    expect(products.filter((p) => /TRX PRO 4/.test(p.name))).toHaveLength(1);
    expect(products.some((p) => p.sku === "MFS TRXPRO4")).toBe(false);
  });
});