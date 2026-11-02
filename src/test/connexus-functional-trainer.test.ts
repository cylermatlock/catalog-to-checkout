import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested Connexus Functional Trainer part number", () => {
  it("uses MF-GFTFT on the existing trainer without duplicates", () => {
    const trainers = products.filter((product) => product.name === "Matrix Connexus Functional Trainer");
    expect(trainers).toHaveLength(1);
    expect(trainers[0]?.sku).toBe("MF-GFTFT");
    expect(trainers[0]?.id).toBe("834");
    expect(products.some((product) => product.sku === "MF-GFT")).toBe(false);
  });
});