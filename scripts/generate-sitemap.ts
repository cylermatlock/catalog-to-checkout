import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://products.gmtherapytx.com";

/**
 * Vite plugin: generates public/sitemap.xml from src/data/products.ts at build start.
 * Runs on dev server start AND production build, so the file is always fresh.
 */
export function sitemapPlugin(): Plugin {
  return {
    name: "gm-therapy-sitemap",
    apply: () => true,
    buildStart() {
      try {
        const productsPath = path.resolve(process.cwd(), "src/data/products.ts");
        const src = fs.readFileSync(productsPath, "utf8");

        // Extract all product IDs (stable pattern: `id: "123"`).
        const ids = Array.from(src.matchAll(/\bid:\s*"([^"]+)"/g)).map((m) => m[1]);
        const today = new Date().toISOString().split("T")[0];

        const staticUrls = [
          { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
          { loc: `${SITE_URL}/products`, priority: "0.9", changefreq: "weekly" },
        ];

        const productUrls = ids.map((id) => ({
          loc: `${SITE_URL}/product/${id}`,
          priority: "0.7",
          changefreq: "monthly",
        }));

        const all = [...staticUrls, ...productUrls];
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          all
            .map(
              (u) =>
                `  <url>\n` +
                `    <loc>${u.loc}</loc>\n` +
                `    <lastmod>${today}</lastmod>\n` +
                `    <changefreq>${u.changefreq}</changefreq>\n` +
                `    <priority>${u.priority}</priority>\n` +
                `  </url>`
            )
            .join("\n") +
          `\n</urlset>\n`;

        const outPath = path.resolve(process.cwd(), "public/sitemap.xml");
        fs.writeFileSync(outPath, xml, "utf8");
        // eslint-disable-next-line no-console
        console.log(`[sitemap] wrote ${all.length} URLs to public/sitemap.xml`);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("[sitemap] generation failed:", err);
      }
    },
  };
}
