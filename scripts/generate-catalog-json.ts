import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

/**
 * Vite plugin: generates public/catalog.json from src/data/products.ts at build start.
 * Output shape (consumed by the quote-PDF generator):
 *   { generatedAt, products: [{ id, sku, name, brand, category, subcategory,
 *                               condition, image, images, description }] }
 */

type BrandMap = {
  skuOverrides: Record<string, string>;
  nameKeywords: Record<string, string>;
  skuPrefixes: Record<string, string>;
  skuPrefixPatterns: Record<string, string>;
  categoryFallbacks: Record<string, string>;
  defaultBrand: string;
};

function resolveBrand(bm: BrandMap, sku: string, name: string, category: string): string {
  if (sku && bm.skuOverrides[sku]) return bm.skuOverrides[sku];

  const lower = name.toLowerCase();
  for (const [kw, brand] of Object.entries(bm.nameKeywords)) {
    if (lower.includes(kw)) return brand;
  }

  if (sku) {
    // Pre-owned SKUs are prefixed "U-" (e.g. "U-SAA C545R" / "U-NS-T4")
    const bare = sku.replace(/^U-/, "");
    for (const [pattern, brand] of Object.entries(bm.skuPrefixPatterns)) {
      if (new RegExp(pattern).test(bare)) return brand;
    }
    const prefix = bare.split(/[\s-]/)[0];
    if (bm.skuPrefixes[prefix]) return bm.skuPrefixes[prefix];
    if (bm.skuPrefixes[bare]) return bm.skuPrefixes[bare];
  }

  if (bm.categoryFallbacks[category]) return bm.categoryFallbacks[category];
  return bm.defaultBrand;
}

/** Normalise an image reference to a path relative to /public. */
function toPublicPath(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  return src.startsWith("/") ? src : `/${src}`;
}

export function catalogJsonPlugin(): Plugin {
  return {
    name: "gm-therapy-catalog-json",
    apply: () => true,
    buildStart() {
      try {
        const root = process.cwd();
        const productsPath = path.resolve(root, "src/data/products.ts");
        const productsImagesPath = path.resolve(root, "src/data/productImages.ts");
        const productDetailsPath = path.resolve(root, "src/data/productDetails.ts");
        const brandMapPath = path.resolve(root, "src/data/brand-map.json");

        if (!fs.existsSync(productsPath)) {
          console.warn("[catalog-json] src/data/products.ts not found");
          return;
        }

        const src = fs.readFileSync(productsPath, "utf8");

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

        const bm: BrandMap = fs.existsSync(brandMapPath)
          ? JSON.parse(fs.readFileSync(brandMapPath, "utf8"))
          : ({
              skuOverrides: {},
              nameKeywords: {},
              skuPrefixes: {},
              skuPrefixPatterns: {},
              categoryFallbacks: {},
              defaultBrand: "GM Therapy Solutions",
            } as BrandMap);

        // id -> primary image
        const imageById: Record<string, string> = {};
        if (fs.existsSync(productsImagesPath)) {
          const imgSrc = fs.readFileSync(productsImagesPath, "utf8");
          for (const m of imgSrc.matchAll(
            /["'](\d+)["']\s*:\s*productAsset\(\s*["']([^"']+)["']\s*\)/g,
          )) {
            imageById[m[1]] = `/assets/products/${m[2]}`;
          }
          // plain string entries, e.g. "42": "/assets/products/x.png"
          for (const m of imgSrc.matchAll(/["'](\d+)["']\s*:\s*["'](\/[^"']+)["']/g)) {
            imageById[m[1]] = m[2];
          }
        }

        // id -> gallery images from productDetails.ts
        const galleryById: Record<string, string[]> = {};
        if (fs.existsSync(productDetailsPath)) {
          const detSrc = fs.readFileSync(productDetailsPath, "utf8");
          const blocks = detSrc.split(/productId:\s*["'](\d+)["']/);
          for (let i = 1; i < blocks.length; i += 2) {
            const id = blocks[i];
            const body = blocks[i + 1] ?? "";
            const galMatch = body.match(/gallery:\s*\[([\s\S]*?)\]/);
            if (!galMatch) continue;
            const srcs = Array.from(galMatch[1].matchAll(/src:\s*(?:`|")([^`"]+)(?:`|")/g))
              .map((m) => m[1])
              .filter((s) => !s.includes("${"));
            if (srcs.length) galleryById[id] = srcs.map(toPublicPath);
          }
        }

        const products = objectMatches.map((m) => {
          const objStr = m[0];
          const grab = (re: RegExp) => {
            const r = objStr.match(re);
            return r ? r[1] : "";
          };
          const id = grab(/id:\s*"([^"]*)"/);
          const name = grab(/name:\s*"((?:[^"\\]|\\.)*)"/).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
          const category = grab(/category:\s*"([^"]*)"/);
          const subcategory = grab(/subcategory:\s*"([^"]*)"/);
          const sku = grab(/sku:\s*"([^"]*)"/);
          const conditionMatch = objStr.match(/condition:\s*"([^"]+)"/);

          const descriptionMatch = objStr.match(/description:\s*\[([\s\S]*?)\]/);
          const description = descriptionMatch
            ? Array.from(descriptionMatch[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)).map((dm) =>
                dm[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\"),
              )
            : [];

          const image = imageById[id] ?? null;
          const gallery = galleryById[id] ?? [];
          const images = Array.from(new Set([...(image ? [image] : []), ...gallery]));

          return {
            id,
            sku,
            name,
            brand: resolveBrand(bm, sku, name, category),
            category,
            subcategory,
            condition: conditionMatch ? conditionMatch[1] : "new",
            image,
            images,
            description,
          };
        });

        // Warn about duplicate, non-empty SKUs — they break quote lookups.
        const seen = new Map<string, string>();
        for (const p of products) {
          if (!p.sku) continue;
          if (seen.has(p.sku)) {
            console.warn(
              `[catalog-json] duplicate SKU "${p.sku}" on products ${seen.get(p.sku)} and ${p.id}`,
            );
          } else {
            seen.set(p.sku, p.id);
          }
        }

        const outPath = path.resolve(root, "public/catalog.json");
        fs.writeFileSync(
          outPath,
          JSON.stringify({ generatedAt: new Date().toISOString(), products }, null, 2),
          "utf8",
        );
        console.log(`[catalog-json] wrote ${products.length} products to public/catalog.json`);
      } catch (err) {
        console.warn("[catalog-json] generation failed:", err);
      }
    },
  };
}
