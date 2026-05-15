// @ts-nocheck
import { Zip, ZipPassThrough, strToU8 } from "npm:fflate@0.8.2";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BASE = "https://products.gmtherapytx.com/assets/products/";
const BUCKET = "product-gallery";
const ZIP_KEY = "exports/gmts-product-images.zip";
const MANIFEST_KEY = "exports/gmts-product-images.manifest.json";
const CONCURRENCY = 6;

// ---- Embedded image paths (relative to /assets/products/) ----
const IMAGE_PATHS: string[] = JSON.parse(`__PATHS__`);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Stream zip into a growing chunk array (compressed bytes only — much smaller than raw)
  const chunks: Uint8Array[] = [];
  let totalSize = 0;
  let zipDone = false;
  let zipErr: unknown = null;

  const zip = new Zip((err, chunk, final) => {
    if (err) zipErr = err;
    if (chunk) {
      chunks.push(chunk);
      totalSize += chunk.length;
    }
    if (final) zipDone = true;
  });

  const manifest: Array<{ rel: string; zip_name: string; bytes: number; ok: boolean; error?: string; status?: number }> = [];

  async function addFile(rel: string) {
    const zipName = rel.replaceAll("/", "__");
    try {
      const res = await fetch(BASE + rel, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; GMTSImageBundler/1.0)",
          "Accept": "image/*,*/*",
        },
      });
      if (!res.ok) {
        manifest.push({ rel, zip_name: zipName, bytes: 0, ok: false, status: res.status, error: `HTTP ${res.status}` });
        return;
      }
      const buf = new Uint8Array(await res.arrayBuffer());
      const entry = new ZipPassThrough(zipName); // store, no recompress (images don't compress)
      zip.add(entry);
      entry.push(buf, true);
      manifest.push({ rel, zip_name: zipName, bytes: buf.length, ok: true });
    } catch (e) {
      manifest.push({ rel, zip_name: zipName, bytes: 0, ok: false, error: String(e) });
    }
  }

  // Concurrency-limited fetch -> zip pipeline
  let idx = 0;
  async function worker() {
    while (idx < IMAGE_PATHS.length) {
      const i = idx++;
      await addFile(IMAGE_PATHS[i]);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  // Add manifest into the zip too
  const summary = {
    total: IMAGE_PATHS.length,
    succeeded: manifest.filter((m) => m.ok).length,
    failed: manifest.filter((m) => !m.ok).length,
    base_url: BASE,
    note: "Filenames use '__' instead of '/' to preserve subfolders. Replace '__' with '/' to restore original path under /assets/products/.",
    manifest,
  };
  const manifestBytes = strToU8(JSON.stringify(summary, null, 2));
  const me = new ZipPassThrough("MANIFEST.json");
  zip.add(me);
  me.push(manifestBytes, true);

  zip.end();

  // Wait briefly for finalization
  for (let i = 0; i < 50 && !zipDone; i++) {
    await new Promise((r) => setTimeout(r, 50));
  }
  if (zipErr) {
    return new Response(JSON.stringify({ error: "zip_error", detail: String(zipErr) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Concat chunks into a single Uint8Array for upload
  const zipBytes = new Uint8Array(totalSize);
  let off = 0;
  for (const c of chunks) {
    zipBytes.set(c, off);
    off += c.length;
  }

  // Upload to public storage bucket
  const upZip = await supabase.storage
    .from(BUCKET)
    .upload(ZIP_KEY, zipBytes, { contentType: "application/zip", upsert: true });
  if (upZip.error) {
    return new Response(JSON.stringify({ error: "upload_zip_failed", detail: upZip.error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  await supabase.storage
    .from(BUCKET)
    .upload(MANIFEST_KEY, manifestBytes, { contentType: "application/json", upsert: true });

  const { data: pubZip } = supabase.storage.from(BUCKET).getPublicUrl(ZIP_KEY);
  const { data: pubMan } = supabase.storage.from(BUCKET).getPublicUrl(MANIFEST_KEY);

  return new Response(
    JSON.stringify({
      ok: true,
      total: summary.total,
      succeeded: summary.succeeded,
      failed: summary.failed,
      zip_url: pubZip.publicUrl,
      manifest_url: pubMan.publicUrl,
      zip_bytes: zipBytes.length,
    }, null, 2),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
  );
});
