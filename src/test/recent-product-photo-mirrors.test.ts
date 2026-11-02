import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Repository photos for external quote tools", () => {
  const catalog = JSON.parse(readFileSync(resolve("public/catalog.json"), "utf8")) as {
    products: { sku: string; image: string }[];
  };

  for (const sku of ["TMS 730002-(xxx)", "TMS 730011-001", "FAB 10-3199"]) {
    it(`includes a real repository photo for ${sku}`, () => {
      const product = catalog.products.find((item) => item.sku === sku);
      expect(product?.image).toMatch(/^\/catalog-assets\//);
      if (!product?.image) throw new Error(`Missing image for ${sku}`);
      const photo = resolve("public", product.image.slice(1));
      expect(existsSync(photo)).toBe(true);
      expect(readFileSync(photo).subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
    });
  }
});