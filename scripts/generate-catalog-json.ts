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
        const productsImagesPath = path.resolve(process.cwd(), "src/data/productImages.ts");
        
        if (!fs.existsSync(productsPath)) {
          console.warn("[catalog-json] src/data/products.ts not found");
          return;
        }

        const src = fs.readFileSync(productsPath, "utf8");
        
        // Use a simpler approach: extract the array contents using regex or string splitting
        const startMarker = "export const products: Product[] = [";
        const endMarker = "];";
        
        const startIdx = src.indexOf(startMarker);
        if (startIdx === -1) {
          console.warn("[catalog-json] Could not find products array in products.ts");
          return;
        }
        
        const endIdx = src.lastIndexOf(endMarker);
        if (endIdx === -1 || endIdx < startIdx) {
          console.warn("[catalog-json] Could not find end of products array");
          return;
        }
        
        const arrayStr = src.substring(startIdx + startMarker.length, endIdx).trim();
        
        const objectMatches = Array.from(arrayStr.matchAll(/\{[\s\S]*?\}/g));
        const products = objectMatches.map(m => {
          const objStr = m[0];
          const idMatch = objStr.match(/id:\s*"([^"]+)"/);
          const nameMatch = objStr.match(/name:\s*"([^"]+)"/);
          const categoryMatch = objStr.match(/category:\s*"([^"]+)"/);
          const subcategoryMatch = objStr.match(/subcategory:\s*"([^"]+)"/);
          const skuMatch = objStr.match(/sku:\s*"([^"]+)"/);
          const descriptionMatch = objStr.match(/description:\s*\[([\s\S]*?)\]/);
          const conditionMatch = objStr.match(/condition:\s*"([^"]+)"/);
          
          let description: string[] = [];
          if (descriptionMatch) {
            description = Array.from(descriptionMatch[1].matchAll(/"([^"]+)"/g)).map(dm => dm[1]);
          }
          
          const product: any = {
            id: idMatch ? idMatch[1] : "",
            name: nameMatch ? nameMatch[1] : "",
            category: categoryMatch ? categoryMatch[1] : "",
            subcategory: subcategoryMatch ? subcategoryMatch[1] : "",
            sku: skuMatch ? skuMatch[1] : "",
            description: description,
          };
          
          if (conditionMatch) product.condition = conditionMatch[1];
          
          return product;
        });

        if (fs.existsSync(productsImagesPath)) {
          const imgSrc = fs.readFileSync(productsImagesPath, "utf8");
          products.forEach(p => {
            const imgMatch = imgSrc.match(new RegExp(`["']?${p.id}["']?\\s*:\\s*["']([^"']+)["']`));
            if (imgMatch) {
              p.image = imgMatch[1];
            }
          });
        }

        const outPath = path.resolve(process.cwd(), "public/catalog.json");
        fs.writeFileSync(outPath, JSON.stringify({ products }, null, 2), "utf8");
        console.log(`[catalog-json] wrote ${products.length} products to public/catalog.json`);
      } catch (err) {
        console.warn("[catalog-json] generation failed:", err);
      }
    },
  };
}
