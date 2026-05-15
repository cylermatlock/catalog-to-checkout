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
const IMAGE_PATHS: string[] = ["airex-balance-beam.jpg", "airex-balance-pad.png", "ancore-pro-1.png", "ancore-rack-mount.png", "armedica-am-ba350.png", "armedica-power-parallel-bars.png", "baps-board.png", "baseline-hand-dynamometer.jpg", "baseline-hand-eval.jpg", "baseline-mmt-electronic.png", "baseline-pinch-gauge.jpg", "biodex/600.png", "biodex/601.png", "biodex/602.png", "biodex/603.png", "biodex/604.png", "biodex/605.png", "biodex/606.png", "biodex/607.png", "biodex/608.png", "biodex/609.png", "biodex/610.png", "biodex/611.png", "biodex/612.png", "biodex/613.png", "bolsters-wedges.png", "bsw/am-400.png", "bsw/am-ba334.png", "bsw/anc-ap-65-01.png", "bsw/anc-at-as-01.png", "bsw/anc-at-pd-01-sm.png", "bsw/anc-at-rp-01-25.jpg", "bsw/anc-at-tm-01.png", "bsw/asg-11360b-10.jpg", "bsw/asg-11360b-25.jpg", "bsw/asg-11360b-5.jpg", "bsw/asg-1136zr-10.png", "bsw/asg-1136zr-25.jpg", "bsw/asg-1136zr-35.png", "bsw/asg-1136zr-45.jpg", "bsw/asg-ob-60b.jpg", "bsw/asg-ob-72al.jpg", "bsw/asg-ob-86uc.jpg", "bsw/asg-oqlj-2.jpeg", "bsw/asg-rm-12s.jpg", "bsw/asg-rm-14ts.jpg", "bsw/asg-rss-165b.jpg", "bsw/asg-tph-1.jpg", "bsw/asg-tph-2.jpg", "bsw/bk-gr639.jpg", "bsw/clin-5-4334.png", "bsw/fab-00-1410.png", "bsw/fab-00-3102.png", "bsw/fab-00-4759.jpg", "bsw/fab-00-7040k.jpg", "bsw/fab-10-0250.jpg", "bsw/fab-10-0565.jpg", "bsw/fab-10-0575.jpg", "bsw/fab-10-1182.jpg", "bsw/fab-10-4334.jpg", "bsw/fab-10-6328.jpg", "bsw/fab-10-7298.jpg", "bsw/fab-10-7303.jpg", "bsw/fab-12-0381w.jpg", "bsw/fab-12-1028x.jpg", "bsw/fab-12-1056.jpg", "bsw/fab-30-1803x.jpg", "bsw/fab-30-1805x.jpg", "bsw/fab-30-1870bx.jpg", "bsw/fab-30-2401b.jpg", "bsw/fab-30-4921.jpg", "bsw/fab-38-0011.jpg", "bsw/fab-43-1966.jpg", "bsw/fab-50-5130-72x.jpg", "bsw/fi-slantl.jpg", "bsw/gm-ws-shelf.png", "bsw/mda-bb-cxt.jpg", "bsw/mfs-trxpro4.jpg", "bsw/nc-94700.jpg", "bsw/nc14600.jpg", "bsw/parts-reformer-box.jpg", "bsw/phs-am-660.png", "bsw/phs-smdc-007-57lg.png", "bsw/rich-400-8722.jpg", "bsw/rich-dq8200.jpg", "bsw/rich-dqcart-2.jpg", "bsw/rich-hp-1711-cx.jpg", "bsw/rich-hp-1713-os.jpg", "bsw/rich-ht-tu-d12.jpg", "bsw/rpp-m30-sw.jpg", "bsw/saa-df-300.png", "bsw/saa-n973.png", "bsw/saa-p873.png", "bsw/saa-ube521m.png", "bsw/sfp-636225.png", "bsw/sfp-cr900.jpg", "bsw/st-proset.jpg", "bsw/st-smtg3prost.jpg", "bsw/strp-spine78.jpg", "bsw/strps-ankstr25.jpg", "bsw/strps-griphandle.jpg", "bsw/strps-punch.jpg", "bsw/strps-ss36h-o4.png", "bsw/strps-ss36l-o4.png", "bsw/strps-ss36m-o4.png", "bsw/strps-ss36vl-o4.png", "bsw/tko-262plbs.jpg", "bsw/tko-263plbs.jpg", "bsw/tko-278ps.jpg", "bsw/tko-509cmb-6.jpg", "bsw/tko-509cmb-8.jpg", "bsw/tko-509sb-15.jpg", "bsw/tko-509sb-20.jpg", "bsw/tko-509sb-25.jpg", "bsw/tko-509wb-10.jpg", "bsw/tko-509wb-14.jpg", "bsw/tko-509wb-20.jpg", "bsw/tko-509wb-30.jpg", "bsw/tko-802bp2-10.jpg", "bsw/tko-802bp2-15.jpg", "bsw/tko-802bp2-25.jpg", "bsw/tko-802bp2-35.jpg", "bsw/tko-802bp2-45.jpg", "bsw/tko-803or-10.jpg", "bsw/tko-803or-2-5.jpg", "bsw/tko-803or-25.jpg", "bsw/tko-803or-35.jpg", "bsw/tko-803or-45.jpg", "bsw/tko-803or-5.jpg", "bsw/tko-804rx-15.jpg", "bsw/tko-804rx-20.jpg", "bsw/tko-804rx-25.jpg", "bsw/tko-804rx-30.jpg", "bsw/tko-804rx-35.jpg", "bsw/tko-804rx-40.jpg", "bsw/tko-804rx-45.jpg", "bsw/tko-804rx-50.jpg", "bsw/tko-811ob-86.jpg", "bsw/tko-812lbc.jpg", "bsw/tko-813ob-86mb.jpg", "bsw/tko-824fid-bk.jpg", "bsw/tko-853fbr3-b.jpg", "bsw/tko-857kbv-15.jpg", "bsw/tko-857kbv-20.jpg", "bsw/tko-857kbv-25.jpg", "bsw/tko-857kbv-30.jpg", "bsw/tko-857kbv-35.jpg", "bsw/tko-857kbv-40.jpg", "bsw/tko-8ab.jpg", "bsw/tko-921hr.png", "bsw/tko-92att-db.jpg", "bsw/tms-720169-002.png", "bsw/tms-720515-001.jpg", "bsw/tms-720589-001.jpg", "bsw/tms-720639-001.jpg", "bsw/tms-720761-001.png", "bsw/tms-720870-001.jpg", "bsw/tms-730144.png", "bsw/tms-730155.jpg", "bsw/tms-730259.png", "bsw/tms-730260.png", "bsw/tms-730400-002.png", "cando-balance-discs.jpg", "cando-hand-putty.png", "cando-vestibular-rocker.png", "chattanooga-dts-6m.png", "chattanooga-m2-hydrocollator.jpg", "chattanooga-m4-hydrocollator.png", "chattanooga-vectra-genisys.png", "chattanooga-vectra-laser.png", "digi-flex.png", "easystand-evolve.png", "easystand-strap-stand.png", "economy-wobble-rocker.jpg", "fab-30-1900.png", "fab/01-8030.jpg", "fab/07-7063.jpg", "fab/10-0203.jpg", "fab/10-0205.jpg", "fab/10-0206.jpg", "fab/10-0207.jpg", "fab/10-0208.jpg", "fab/10-0209.jpg", "fab/10-0274.jpg", "fab/10-0690.jpg", "fab/10-0741.jpg", "fab/10-0815.jpg", "fab/10-0857.jpg", "fab/10-0900.jpg", "fab/10-0901.jpg", "fab/10-0902.jpg", "fab/10-0903.jpg", "fab/10-0905.jpg", "fab/10-0906.jpg", "fab/10-0907.jpg", "fab/10-0908.jpg", "fab/10-0911.jpg", "fab/10-0912.jpg", "fab/10-0918.jpg", "fab/10-0919.jpg", "fab/10-0920.jpg", "fab/10-0923.jpg", "fab/10-0924.jpg", "fab/10-0956.jpg", "fab/10-0968.jpg", "fab/10-1010.jpg", "fab/10-1090.jpg", "fab/10-1091.jpg", "fab/10-1092.jpg", "fab/10-1095.jpg", "fab/10-1199.jpg", "fab/10-1295.jpg", "fab/10-1350.jpg", "fab/10-1385.jpg", "fab/10-1474.jpg", "fab/10-1480.jpg", "fab/10-1510.jpg", "fab/10-1525.jpg", "fab/10-1570.jpg", "fab/10-1620.jpg", "fab/10-1700.jpg", "fab/10-1715.jpg", "fab/10-1750.jpg", "fab/10-1760.jpg", "fab/10-1825.jpg", "fab/10-2468.jpg", "fab/10-2500.jpg", "fab/10-2505.jpg", "fab/10-2603.jpg", "fab/10-2621.jpg", "fab/10-2623.jpg", "fab/10-2761.jpg", "fab/10-3176.jpg", "fab/10-3900.jpg", "fab/10-4200.jpg", "fab/10-5221.jpg", "fab/10-5222.jpg", "fab/10-5223.jpg", "fab/10-5224.jpg", "fab/10-5225.jpg", "fab/10-5251.jpg", "fab/10-5252.jpg", "fab/10-5253.jpg", "fab/10-5334.jpg", "fab/10-5621.jpg", "fab/10-5622.jpg", "fab/10-5623.jpg", "fab/10-5624.jpg", "fab/10-5625.jpg", "fab/10-5680.jpg", "fab/10-5743.jpg", "fab/10-5800.jpg", "fab/10-5982.jpg", "fab/10-6038.jpg", "fab/10-6320.jpg", "fab/10-6321.jpg", "fab/10-6322.jpg", "fab/10-6323.jpg", "fab/10-6324.jpg", "fab/10-6325.jpg", "fab/10-6326.jpg", "fab/11-0338.jpg", "fab/11-0710-1.jpg", "fab/11-0711-1.jpg", "fab/11-0712-1.jpg", "fab/11-0720-1.jpg", "fab/11-0730-1.jpg", "fab/11-0740-100.jpg", "fab/11-1250.jpg", "fab/11-1251.jpg", "fab/11-1252.jpg", "fab/11-1253.jpg", "fab/11-1257.jpg", "fab/11-1310.jpg", "fab/11-1311.jpg", "fab/11-1312.jpg", "fab/11-1313.jpg", "fab/11-1360.jpg", "fab/11-1361.jpg", "fab/11-1362.jpg", "fab/11-1363.jpg", "fab/11-1364.jpg", "fab/11-1366.jpg", "fab/11-1367.jpg", "fab/11-1368.jpg", "fab/11-1369.jpg", "fab/11-1600.jpg", "fab/11-1713.jpg", "fab/11-1720-6.jpg", "fab/11-1965-2.jpg", "fab/12-0226.jpg", "fab/12-0241.jpg", "fab/12-0247.jpg", "fab/12-0286.jpg", "fab/12-0380.jpg", "fab/12-1000.jpg", "fab/12-1002.jpg", "fab/12-1005.jpg", "fab/12-1085.jpg", "fab/12-1500.jpg", "fab/12-1671-20.jpg", "fab/12-1671-40.jpg", "fab/12-1926.jpg", "fab/12-1935.jpg", "fab/13-1235-2.jpg", "fab/13-1287-10.jpg", "fab/13-1288-10.jpg", "fab/13-1291-10.jpg", "fab/13-1293-10.jpg", "fab/13-2511.jpg", "fab/13-2514.jpg", "fab/13-2515.jpg", "fab/13-2526.jpg", "fab/13-2542.jpg", "fab/13-3224.jpg", "fab/13-3225.jpg", "fab/13-3226.jpg", "fab/13-3227.jpg", "fab/13-3231.jpg", "fab/13-5220.jpg", "fab/13-5223.jpg", "fab/13-5270.jpg", "fab/13-5310-5.jpg", "fab/14-1050.jpg", "fab/15-5399.jpg", "fab/24-0191.jpg", "fab/30-1909.jpg", "fab/30-1915.jpg", "fab/30-1915LAV.jpg", "fab/30-1926.jpg", "fab/30-2100.jpg", "fab/30-2107.jpg", "fab/30-2150.jpg", "fab/30-2280.jpg", "fab/30-2290.jpg", "fab/30-2400B.jpg", "fab/43-2091.jpg", "fab/45-2381.jpg", "fab/50-1023.jpg", "fab/50-1100.jpg", "fab/50-1500B.jpg", "fab/50-1501B.jpg", "fab/50-1505B.jpg", "fab/50-1506B.jpg", "fab/66-0015.jpg", "fab/68-0016.jpg", "fab/70-0170.jpg", "fab/86-0030.jpg", "fab/86-0040.jpg", "fab/86-0070.jpg", "fab/86-0072.jpg", "fab/86-0074.jpg", "fab/86-0075.jpg", "finger-webs.png", "game-ready-prpro.jpg", "gmts-2-section-bobath.png", "gmts-3-section-hilo.png", "gmts-convertible-stairs.png", "gmts-deluxe-hi-lo-mat.png", "gmts-low-mat-table.png", "gmts-mini-storage-rack.png", "gmts-parallel-bars-10ft.png", "gmts-stools.png", "gmts-traction-package.png", "gmts-treatment-table-backrest.png", "gmts/oak-treatment-tables/view-1.jpg", "ideal-dumbbell-storage-vwr30.png", "matrix-endurance-climbmill-led.jpg", "matrix-endurance-elliptical-led.jpg", "matrix-endurance-recumbent-led.jpg", "matrix-endurance-treadmill-led.jpg", "matrix-endurance-upright-led.jpg", "matrix-go-ft-functional-trainer.png", "matrix-lifestyle-climbmill-led.jpg", "matrix-lifestyle-elliptical-led.jpg", "matrix-lifestyle-recumbent-led.jpg", "matrix-lifestyle-treadmill-led.jpg", "matrix-lifestyle-upright-led.jpg", "matrix-magnum-pro-xl-half-rack.png", "matrix-r3xm-recumbent.png", "matrix-t3xm-treadmill.jpg", "matrix-upper-body-cycle-ubcm.png", "matrix-versa-ab-low-back.png", "matrix-versa-abdominal.png", "matrix-versa-back-extension.png", "matrix-versa-bicep-curl.png", "matrix-versa-bicep-tricep.png", "matrix-versa-chin-dip-assist.png", "matrix-versa-converging-chest-press.png", "matrix-versa-converging-shoulder-press.png", "matrix-versa-diverging-lat-pulldown.png", "matrix-versa-diverging-seated-row.png", "matrix-versa-functional-trainer-18.png", "matrix-versa-functional-trainer-30.png", "matrix-versa-glute.png", "matrix-versa-hip-abductor-adductor.png", "matrix-versa-lat-pulldown-seated-row.png", "matrix-versa-leg-extension-leg-curl.png", "matrix-versa-leg-extension.png", "matrix-versa-leg-press-calf-press.png", "matrix-versa-md-adjustable-pulley.png", "matrix-versa-md-leg-extension-leg-curl.png", "matrix-versa-md-leg-press.png", "matrix-versa-multi-press.png", "matrix-versa-pec-fly-rear-delt.png", "matrix-versa-seated-leg-curl.png", "matrix-versa-triceps-press.png", "medsurface/ms-33100-3-section-hilo.png", "moist-heat-packs.jpg", "nk-electric-standing-frame.png", "nustep-t4r.png", "nustep-t5xr.jpg", "nustep-t6pro.jpg", "richmar-cx2.png", "richmar-cx4.jpg", "richmar-dx2-diathermy.jpg", "richmar-hydratherm-web.jpg", "richmar-if-combo-ii.jpg", "richmar-intensity-12-tens.jpg", "richmar-intensity-select-combo-ii.jpg", "richmar-lx2-laser.jpg", "richmar-rex-compression.jpg", "richmar-theradot.jpg", "richmar-theratouch-ex4.png", "scifit-pro1.jpg", "scifit-pro1000.jpg", "scifit-pro2.jpg", "scifit-stepone.jpg", "shuttle-2000-1-clinical.png", "shuttle-balance.png", "shuttle-minipress.jpg", "shuttle-mvp.png", "shuttle-rebounder.png", "shuttle-recovery-v2.png", "shuttle-tnt-v2.png", "shuttle-ultimate-v2.png", "spirit-ce800.png", "spirit-cr800.jpg", "spirit-ct800.png", "spirit-cu800.jpg", "spirit-leg-ext-curl.jpg", "spirit-leg-press-calf.jpg", "sportsart-c565r.png", "sportsart-df201.jpg", "sportsart-ds972.jpg", "sportsart-n961.jpg", "sportsart-s973.jpg", "sportsart-t655ms.png", "sportsart-t661m-new.png", "squid-cold-compression.jpg", "theraband-stability-disc.jpg", "theraband-stability-trainer.jpg", "therm-x-compression.jpg", "tko-defiant.jpg", "tko-dumbbell-rack.png", "tms-730001.jpg", "twist-bend-bars.png"];

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
