import { useEffect, useState } from "react";
import { Check, X, Copy, Trash2 } from "lucide-react";
import type { Product } from "@/data/products";

const STORAGE_KEY = "bsw-photo-review-v1";

type Verdict = "good" | "bad";
type Reviews = Record<string, Verdict>;

function loadReviews(): Reviews {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveReviews(r: Reviews) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(r));
}

/** Per-card overlay with ✅/❌ buttons. */
export function BswReviewButtons({ product }: { product: Product }) {
  const [reviews, setReviews] = useState<Reviews>({});

  useEffect(() => {
    setReviews(loadReviews());
    const onChange = () => setReviews(loadReviews());
    window.addEventListener("bsw-review-change", onChange);
    return () => window.removeEventListener("bsw-review-change", onChange);
  }, []);

  const verdict = reviews[product.sku];

  const set = (v: Verdict) => {
    const next = { ...loadReviews() };
    if (next[product.sku] === v) delete next[product.sku];
    else next[product.sku] = v;
    saveReviews(next);
    window.dispatchEvent(new Event("bsw-review-change"));
  };

  return (
    <div className="absolute top-2 right-2 z-10 flex gap-1">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          set("good");
        }}
        title="Mark photo correct"
        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md border-2 transition-all ${
          verdict === "good"
            ? "bg-green-500 border-green-600 text-white scale-110"
            : "bg-white/90 border-white text-green-700 hover:bg-green-100"
        }`}
      >
        <Check className="w-5 h-5" strokeWidth={3} />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          set("bad");
        }}
        title="Mark photo wrong"
        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md border-2 transition-all ${
          verdict === "bad"
            ? "bg-red-500 border-red-600 text-white scale-110"
            : "bg-white/90 border-white text-red-700 hover:bg-red-100"
        }`}
      >
        <X className="w-5 h-5" strokeWidth={3} />
      </button>
    </div>
  );
}

/** Sticky toolbar shown at the top of the products page in review mode. */
export function BswReviewToolbar({ bswProducts }: { bswProducts: Product[] }) {
  const [reviews, setReviews] = useState<Reviews>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setReviews(loadReviews());
    const onChange = () => setReviews(loadReviews());
    window.addEventListener("bsw-review-change", onChange);
    return () => window.removeEventListener("bsw-review-change", onChange);
  }, []);

  const goodCount = Object.values(reviews).filter((v) => v === "good").length;
  const badCount = Object.values(reviews).filter((v) => v === "bad").length;
  const total = bswProducts.length;
  const remaining = total - goodCount - badCount;

  const copyWrong = async () => {
    const wrong = bswProducts
      .filter((p) => reviews[p.sku] === "bad")
      .map((p) => ({ id: p.id, sku: p.sku, name: p.name }));
    await navigator.clipboard.writeText(JSON.stringify(wrong, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const reset = () => {
    if (!confirm("Clear all photo review marks?")) return;
    saveReviews({});
    window.dispatchEvent(new Event("bsw-review-change"));
  };

  return (
    <div className="sticky top-0 z-30 -mx-4 px-4 py-3 mb-4 bg-yellow-50 border-y-2 border-yellow-400 shadow-sm">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-4 text-sm">
          <span className="font-bold text-yellow-900 uppercase tracking-wide text-xs px-2 py-1 bg-yellow-300 rounded">
            Review Mode
          </span>
          <span className="text-foreground">
            <span className="text-green-700 font-semibold">✓ {goodCount}</span>
            {" · "}
            <span className="text-red-700 font-semibold">✗ {badCount}</span>
            {" · "}
            <span className="text-muted-foreground">{remaining} left of {total}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyWrong}
            disabled={badCount === 0}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-foreground text-background text-xs font-semibold uppercase tracking-wide disabled:opacity-40 hover:opacity-90"
          >
            <Copy className="w-3.5 h-3.5" />
            {copied ? "Copied!" : `Copy ${badCount} wrong SKU${badCount === 1 ? "" : "s"}`}
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs font-medium hover:bg-card"
            title="Clear all marks"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>
      <p className="text-xs text-yellow-900/80 mt-2">
        Click ✓ if the photo matches the product, ✗ if wrong. Marks are saved in your browser. When done, click "Copy wrong SKUs" and paste back into chat.
      </p>
    </div>
  );
}
