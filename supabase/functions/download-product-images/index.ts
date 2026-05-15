// @ts-nocheck
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BASE = "https://products.gmtherapytx.com/assets/products/";
const BUCKET = "product-gallery";
const MIRROR_PREFIX = "mirror/products/";
const MANIFEST_KEY = "exports/gmts-product-images.manifest.json";
const CONCURRENCY = 4;

const IMAGE_PATHS: string[] = JSON.parse(`__PATHS__`);

function contentTypeFor(rel: string): string {
  const ext = rel.split(".").pop()?.toLowerCase() ?? "";
  return {
    jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png",
    webp: "image/webp", gif: "image/gif", svg: "image/svg+xml", avif: "image/avif",
  }[ext] ?? "application/octet-stream";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const url = new URL(req.url);
  const start = Math.max(0, parseInt(url.searchParams.get("start") ?? "0", 10));
  const count = Math.min(120, Math.max(1, parseInt(url.searchParams.get("count") ?? "80", 10)));
  const finalize = url.searchParams.get("finalize") === "1";

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const publicBase = `${Deno.env.get("SUPABASE_URL")}/storage/v1/object/public/${BUCKET}/${MIRROR_PREFIX}`;

  if (finalize) {
    // Build/refresh aggregated manifest assuming previous batches mirrored everything.
    const items = IMAGE_PATHS.map((rel) => ({
      rel,
      mirror_key: MIRROR_PREFIX + rel,
      url: publicBase + rel,
    }));
    const body = JSON.stringify({
      total: items.length,
      base_url: BASE,
      mirror_public_base: publicBase,
      note: "Each item.url is a public Supabase Storage URL mirroring https://products.gmtherapytx.com/assets/products/<rel>. wget -i with the urls field works.",
      urls: items.map((i) => i.url),
      items,
    }, null, 2);
    await supabase.storage.from(BUCKET).upload(MANIFEST_KEY, new TextEncoder().encode(body), {
      contentType: "application/json", upsert: true,
    });
    const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(MANIFEST_KEY);
    return new Response(JSON.stringify({ ok: true, manifest_url: pub.publicUrl, total: items.length }, null, 2), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const slice = IMAGE_PATHS.slice(start, start + count);
  const results: Array<{ rel: string; ok: boolean; bytes?: number; status?: number; error?: string; url?: string }> = [];

  let idx = 0;
  async function worker() {
    while (idx < slice.length) {
      const i = idx++;
      const rel = slice[i];
      try {
        const res = await fetch(BASE + rel, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; GMTSImageBundler/1.0)", "Accept": "image/*,*/*" },
        });
        if (!res.ok) {
          results.push({ rel, ok: false, status: res.status, error: `HTTP ${res.status}` });
          continue;
        }
        const buf = new Uint8Array(await res.arrayBuffer());
        const up = await supabase.storage.from(BUCKET).upload(MIRROR_PREFIX + rel, buf, {
          contentType: contentTypeFor(rel), upsert: true,
        });
        if (up.error) {
          results.push({ rel, ok: false, error: "upload: " + up.error.message });
        } else {
          results.push({ rel, ok: true, bytes: buf.length, url: publicBase + rel });
        }
      } catch (e) {
        results.push({ rel, ok: false, error: String(e) });
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  const next = start + slice.length;
  const done = next >= IMAGE_PATHS.length;
  return new Response(JSON.stringify({
    ok: true,
    range: { start, count: slice.length, end: next },
    total: IMAGE_PATHS.length,
    succeeded: results.filter((r) => r.ok).length,
    failed: results.filter((r) => !r.ok).length,
    next_url: done ? null : `${url.origin}${url.pathname}?start=${next}&count=${count}`,
    finalize_url: done ? `${url.origin}${url.pathname}?finalize=1` : null,
    results,
  }, null, 2), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
});
