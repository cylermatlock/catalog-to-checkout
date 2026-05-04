import type { Product } from "@/data/products";

// Ordered: longer/more-specific name matches first.
const NAME_MATCHERS: { label: string; test: (n: string) => boolean }[] = [
  { label: "Sports Art", test: (n) => /\b(sportsart|sports art)\b/i.test(n) },
  { label: "Game Ready", test: (n) => /\bgame ready\b/i.test(n) },
  { label: "EasyStand", test: (n) => /\beasystand\b/i.test(n) },
  { label: "Therm-X", test: (n) => /\btherm-?x\b/i.test(n) },
  { label: "Relief Pak", test: (n) => /\brelief pak\b/i.test(n) },
  { label: "Point Relief", test: (n) => /\bpoint relief\b/i.test(n) },
  { label: "Shuttle", test: (n) => /\bshuttle\b/i.test(n) },
  { label: "Richmar", test: (n) => /\brichmar\b/i.test(n) },
  { label: "Chattanooga", test: (n) => /\bchattanooga\b/i.test(n) },
  { label: "Armedica", test: (n) => /\barmedica\b/i.test(n) },
  { label: "NuStep", test: (n) => /\bnustep\b/i.test(n) },
  { label: "Spirit", test: (n) => /\bspirit\b/i.test(n) },
  { label: "SciFit", test: (n) => /\bscifit\b/i.test(n) },
  { label: "TKO", test: (n) => /\btko\b/i.test(n) },
  { label: "Matrix", test: (n) => /\bmatrix\b/i.test(n) },
  { label: "CanDo", test: (n) => /\bcando\b/i.test(n) },
  { label: "Theraband", test: (n) => /\bthera-?band\b/i.test(n) },
  { label: "Airex", test: (n) => /\bairex\b/i.test(n) },
  { label: "Bosu", test: (n) => /\bbosu\b/i.test(n) },
  { label: "Baseline", test: (n) => /\bbaseline\b/i.test(n) },
  { label: "Biofreeze", test: (n) => /\bbiofreeze\b/i.test(n) },
  { label: "TRX", test: (n) => /\btrx\b/i.test(n) },
  { label: "Merrithew", test: (n) => /\bmerrithew\b/i.test(n) },
];

// SKU-prefix fallback (e.g., "GMTS 3HL" → "GMTS").
const SKU_PREFIX: Record<string, string> = {
  GMTS: "GMTS",
  FAB: "Fabrication Enterprises",
  TMS: "TMS",
  BSW: "BSW",
  CLIN: "Clinton",
};

export function getBrand(p: Pick<Product, "name" | "sku">): string {
  for (const b of NAME_MATCHERS) if (b.test(p.name)) return b.label;
  const prefix = p.sku.split(/\s|-/)[0]?.toUpperCase();
  if (prefix && SKU_PREFIX[prefix]) return SKU_PREFIX[prefix];
  return "GM Therapy";
}
