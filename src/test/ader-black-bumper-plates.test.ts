import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("Requested Ader all-black bumper plates", () => {
  it.each([
    ["ASG O-10SRO", 10],
    ["ASG O-15SRO", 15],
    ["ASG O-25SRO", 25],
    ["ASG O-35SRO", 35],
    ["ASG O-45SRO", 45],
  ])("lists exact SKU %s once in its requested %s lb size", (sku, weight) => {
    const matches = products.filter((product) => product.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.name).toContain(`${weight} lb`);
    expect(matches[0]?.description).toContain(`${weight} lb plate`);
  });
});