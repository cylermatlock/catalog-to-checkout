import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested rolling modality cart", () => {
  it("lists AMZ CART3S exactly once with a numeric product ID", () => {
    const matches = products.filter((product) => product.sku === "AMZ CART3S");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe("1004");
  });
});