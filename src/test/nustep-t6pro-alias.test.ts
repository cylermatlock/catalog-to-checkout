import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("NuStep T6PRO alias", () => {
  const p = products.find((x) => x.sku === "NS T6PRO");
  it("keeps NS T6PRO as the customer SKU", () => {
    expect(p?.id).toBe("44");
  });
  it("stores FAB 10-5980 as a hidden alias", () => {
    expect(p?.aliasSkus).toEqual(["FAB 10-5980"]);
    expect(p?.name).not.toContain("10-5980");
    expect(p?.description.join(" ")).not.toContain("10-5980");
  });
  it("does not use the alias as any product's main SKU", () => {
    expect(products.filter((x) => x.sku === "FAB 10-5980")).toHaveLength(0);
  });
});

describe("NuStep T6MAX alias", () => {
  const p = products.find((x) => x.sku === "NS T6MAX");
  it("stores FAB 10-8981 as a hidden alias", () => {
    expect(p?.id).toBe("1010");
    expect(p?.aliasSkus).toEqual(["FAB 10-8981"]);
    expect(p?.name + p?.description.join(" ")).not.toContain("10-8981");
  });
  it("does not use the alias as any product's main SKU", () => {
    expect(products.filter((x) => x.sku === "FAB 10-8981")).toHaveLength(0);
  });
});
