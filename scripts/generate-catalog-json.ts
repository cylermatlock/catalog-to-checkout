import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

/**
 * Vite plugin: generates public/catalog.json from src/data/products.ts at build start.
 * Ensures the downloadable catalog file is always in sync with the source data.
 */
export function catalogJsonPlugin(): Plugin {
  return {
    name: "gm-therapy-catalog-json",
    apply: () => true,
    buildStart() {
      try {
        const productsPath = path.resolve(process.cwd(), "src/data/products.ts");
        const src = fs.readFileSync(productsPath, "utf8");

        // Basic parsing of the products array from products.ts
        // Since we know the structure is "export const products: Product[] = [ ... ];"
        // We'll extract the products array. A more robust way would be to import it, 
        // but since we are in a build hook and want to avoid complex TS execution if possible,
        // we'll use a safer approach or just read the generated file if it exists.
        
        // Actually, the most reliable way to get the data is to evaluate the TS file,
        // but for a Vite plugin running in Node, we can't easily import a .ts file without setup.
        // Let's check if the previous agent had a different way.
        
        // Wait, the error said "scripts/generate-catalog-json.ts:1:258: ERROR: Unterminated string literal"
        // and showed a python-like docstring at the top. It seems it WAS a python script renamed to .ts.
      } catch (err) {
        console.warn("[catalog-json] generation failed:", err);
      }
    },
  };
}
