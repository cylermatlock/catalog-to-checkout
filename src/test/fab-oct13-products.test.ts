import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("October 13 FAB additions", () => {
  it.each([
    ["875", "FAB 10-6745"],
    ["876", "FAB 10-7215"],
    ["877", "FAB 10-7222"],
    ["878", "FAB 11-0615"],
    ["879", "FAB 11-0620"],
    ["880", "FAB 11-0621"],
  ])("adds product %s with exact SKU %s once", (id, sku) => {
    const matches = products.filter((p) => p.sku === sku);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.id).toBe(id);
  });
});