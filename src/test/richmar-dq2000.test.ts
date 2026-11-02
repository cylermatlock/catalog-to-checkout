import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested Richmar ultrasound SKU", () => {
  it("lists RICH DQ2000 exactly once as the TheraTouch UX2", () => {
    const matches = products.filter((product) => product.sku === "RICH DQ2000");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe("1005");
    expect(matches[0]?.name).toBe("Richmar TheraTouch UX2 Advanced Ultrasound Device");
  });
});