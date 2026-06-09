import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";
import { build } from "esbuild";

/**
 * Vite plugin: generates public/catalog.json from the catalog data modules
 * (products.ts, productDetails.ts, productImages.ts) at dev server start AND
 * production build start. Keeps the JSON in sync with every catalog update so
 * external tools can read it from
 * https://raw.githubusercontent.com/cylermatlock/catalog-to-checkout/main/public/catalog.json
 */
export function catalogJsonPlugin(): Plugin {
  let generating = false;

  async function generate() {
    if (generating) return;
    generating = true;
    try {
      const root = process.cwd();
      const entry = path.resolve(root, "src/data/products.ts");
      const detailsEntry = path.resolve(root, "src/data/productDetails.ts");
      const imagesEntry = path.resolve(root, "src/data/productImages.ts");

      // Bundle the three data modules to a single ESM file so we can import
      // them at build time without a TS loader. They are pure data — no React
      // or DOM deps — so esbuild handles them cleanly.
      const result = await build({
        entryPoints: [
          {
            in: path.resolve(root, "scripts/_catalog-entry.ts"),
            out: "catalog-bundle",
          } as any,
        ],
        bundle: true,
        format: "esm",
        platform: "node",
        target: "node18",
        write: false,
        logLevel: "warning",
        absWorkingDir: root,
        // Inject a virtual entry that re-exports everything we need.
        stdin: {
          contents: `
            export { products, categories } from ${JSON.stringify(entry)};
            export { productDetails } from ${JSON.stringify(detailsEntry)};
            export { productImages } from ${JSON.stringify(imagesEntry)};
          `,
          resolveDir: root,
          sourcefile: "catalog-entry.ts",
          loader: "ts",
        },
      });

      const code = result.outputFiles[0].text;
      const dataUrl =
        "data:text/javascript;base64," + Buffer.from(code).toString("base64");
      const mod: any = await import(dataUrl);

      const payload = {
        generatedAt: new Date().toISOString(),
        site: "https://products.gmtherapytx.com",
        categories: mod.categories ?? [],
        products: (mod.products ?? []).map((p: any) => ({
          ...p,
          image: mod.productImages?.[p.id] ?? p.image ?? null,
          detail: mod.productDetails?.[p.id] ?? null,
        })),
      };

      const outPath = path.resolve(root, "public/catalog.json");
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
      // eslint-disable-next-line no-console
      console.log(
        `[catalog-json] wrote ${payload.products.length} products to public/catalog.json`,
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("[catalog-json] generation failed:", err);
    } finally {
      generating = false;
    }
  }

  return {
    name: "gm-therapy-catalog-json",
    apply: () => true,
    async buildStart() {
      await generate();
    },
    configureServer(server) {
      // Re-generate when catalog data changes during dev.
      const watched = [
        "src/data/products.ts",
        "src/data/productDetails.ts",
        "src/data/productImages.ts",
      ].map((p) => path.resolve(process.cwd(), p));
      server.watcher.on("change", (file) => {
        if (watched.includes(file)) generate();
      });
    },
  };
}
