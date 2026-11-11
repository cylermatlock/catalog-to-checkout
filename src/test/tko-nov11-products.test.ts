import { describe, expect, it } from "vitest";
import fs from "node:fs";
import { products } from "@/data/products";
import { productImages } from "@/data/productImages";
import { productDetails } from "@/data/productDetails";
import collar from "@/assets/products/tko/tko-143sco-cm-1.jpg.asset.json";
import plyo from "@/assets/products/tko/tko-260plb-set.jpg.asset.json";
import ladder from "@/assets/products/tko/tko-281al-15-1.jpg.asset.json";
import b3100 from "@/assets/products/tko/tko-3100.jpg.asset.json";
import b3101 from "@/assets/products/tko/tko-3101.jpg.asset.json";
import b3102 from "@/assets/products/tko/tko-3102.jpg.asset.json";
import b3103 from "@/assets/products/tko/tko-3103.jpg.asset.json";
import b3104 from "@/assets/products/tko/tko-3104.jpg.asset.json";
import cmb10 from "@/assets/products/tko/tko-509cmb-10.jpg.asset.json";
import sbt6 from "@/assets/products/tko/tko-509sbt-6.jpg.asset.json";
import wb12 from "@/assets/products/tko/tko-509wb-12.jpg.asset.json";
import wb4 from "@/assets/products/tko/tko-509wb-4.jpg.asset.json";
import hyper from "@/assets/products/tko/tko-6130-b-1.jpg.asset.json";
import legExt from "@/assets/products/tko/tko-7062-g2.jpg.asset.json";
import db12 from "@/assets/products/tko/tko-804rx-12.jpg.asset.json";
import dbSet from "@/assets/products/tko/tko-804rx-a10-1.jpg.asset.json";
import ft from "@/assets/products/tko/tko-8060ft-bk-1.jpg.asset.json";
import hexBar from "@/assets/products/tko/tko-812hb-56-1.jpg.asset.json";
import powerBar from "@/assets/products/tko/tko-812ob-86.jpg.asset.json";
import barHolder from "@/assets/products/tko/tko-813bh2-1.jpg.asset.json";
import latBar from "@/assets/products/tko/tko-820tal-30.jpg.asset.json";

const cases = [
  { sku: "TKO 143SCO-CM", id: "1017", must: "sold as a pair", photo: collar },
  { sku: "TKO 260PLB12-36", id: "1018", must: "12\", 18\", 24\", 30\" and 36\"", photo: plyo },
  { sku: "TKO 281AL-15", id: "1019", must: "15 ft agility ladder", photo: ladder },
  { sku: "TKO 3100", id: "1020", must: "5-15 lb", color: "Orange, 1/4\"", photo: b3100 },
  { sku: "TKO 3101", id: "1021", must: "5-30 lb", color: "Red, 1/2\"", photo: b3101 },
  { sku: "TKO 3102", id: "1022", must: "20-60 lb", color: "Blue, 3/4\"", photo: b3102 },
  { sku: "TKO 3103", id: "1023", must: "30-80 lb", color: "Green, 1 1/8\"", photo: b3103 },
  { sku: "TKO 3104", id: "1024", must: "40-110 lb", color: "Silver, 1 3/4\"", photo: b3104 },
  { sku: "TKO 509CMB-10", id: "1025", must: "10 lb medicine ball", photo: cmb10 },
  { sku: "TKO 509SBT-6", id: "1026", must: "6 lb slam ball", photo: sbt6 },
  { sku: "TKO 509WB-12", id: "1027", must: "12 lb soft-shell wall ball", photo: wb12 },
  { sku: "TKO 509WB-4", id: "1028", must: "4 lb soft-shell wall ball", photo: wb4 },
  { sku: "TKO 509WB-6", id: "1029", must: "6 lb soft-shell wall ball", photo: wb4 },
  { sku: "TKO 509WB-8", id: "1030", must: "8 lb soft-shell wall ball", photo: wb4 },
  { sku: "TKO 6130-B", id: "1031", must: "Adjusts to 12 different positions", photo: hyper },
  { sku: "TKO 7062-G2", id: "1032", must: "200 lb weight stack", photo: legExt },
  { sku: "TKO 804RX-12", id: "1033", must: "12 lb rubber hex dumbbell", photo: db12 },
  { sku: "TKO 804RX-A10", id: "1034", must: "10 pairs, 5-50 lb", photo: dbSet },
  { sku: "TKO 8060FT-BK", id: "1035", must: "Dual 160 lb independent weight stacks", photo: ft },
  { sku: "TKO 812HB-56", id: "1036", must: "56\" combo deadlift", photo: hexBar },
  { sku: "TKO 812OB-86", id: "1037", must: "1,000 lb capacity", photo: powerBar },
  { sku: "TKO 813BH2", id: "1038", must: "Holds 9 Olympic bars", photo: barHolder },
  { sku: "TKO 820TAL-30", id: "1039", must: "30\" pro style lat bar", photo: latBar },
];

describe("TKO products requested Nov 11", () => {
  for (const c of cases) {
    it(`lists ${c.sku} once as item ${c.id} with its key detail`, () => {
      const matches = products.filter((p) => p.sku === c.sku);
      expect(matches).toHaveLength(1);
      expect(matches[0]?.id).toBe(c.id);
      const text = matches[0]!.description.join(" ");
      expect(text).toContain(c.must);
      if (c.color) expect(text).toContain(c.color);
    });
    it(`has a photo, details page and repo photo copy for ${c.sku}`, () => {
      expect(productImages[c.id]).toBe(c.photo.url);
      expect(productDetails[c.id]?.gallery[0]?.src).toBe(c.photo.url);
      expect(fs.statSync(`public/catalog-assets/${c.photo.asset_id}/${c.photo.original_filename}`).size).toBe(c.photo.size);
    });
  }
});
