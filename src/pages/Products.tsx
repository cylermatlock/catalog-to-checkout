import { useState, useMemo } from "react";
import { products, categories, type Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter } from "lucide-react";

// Ordered list — longer/multi-word names first so they win over single-word matches.
const BRAND_MATCHERS: { label: string; test: (name: string) => boolean }[] = [
  { label: "Sports Art", test: (n) => /\b(sportsart|sports art)\b/i.test(n) },
  { label: "Game Ready", test: (n) => /\bgame ready\b/i.test(n) },
  { label: "EasyStand", test: (n) => /\beasystand\b/i.test(n) },
  { label: "Therm-X", test: (n) => /\btherm-?x\b/i.test(n) },
  { label: "Shuttle", test: (n) => /\bshuttle\b/i.test(n) },
  { label: "GMTS", test: (n) => /\bgmts\b/i.test(n) },
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
  { label: "NK", test: (n) => /\bnk\b/i.test(n) },
  { label: "Ideal", test: (n) => /\bideal\b/i.test(n) },
  { label: "Squid", test: (n) => /\bsquid\b/i.test(n) },
  { label: "Biofreeze", test: (n) => /\bbiofreeze\b/i.test(n) },
  { label: "Sup-R", test: (n) => /\bsup-?r\b/i.test(n) },
];

const getBrand = (p: Product): string => {
  for (const b of BRAND_MATCHERS) if (b.test(p.name)) return b.label;
  return "Other";
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [search, setSearch] = useState("");

  const subcategories = useMemo(() => {
    if (selectedCategory === "All") return [];
    const subs = new Set(
      products
        .filter((p) => p.category === selectedCategory)
        .map((p) => p.subcategory)
    );
    return Array.from(subs);
  }, [selectedCategory]);

  const [selectedSub, setSelectedSub] = useState<string>("All");

  // Brands available within the currently selected category (or all).
  const brands = useMemo(() => {
    const scoped = products.filter(
      (p) => selectedCategory === "All" || p.category === selectedCategory
    );
    const set = new Set(scoped.map(getBrand));
    return Array.from(set).sort((a, b) => {
      if (a === "Other") return 1;
      if (b === "Other") return -1;
      return a.localeCompare(b);
    });
  }, [selectedCategory]);

  const filtered = useMemo(() => {
    const matched = products.filter((p) => {
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const matchSub = selectedSub === "All" || p.subcategory === selectedSub;
      const matchBrand = selectedBrand === "All" || getBrand(p) === selectedBrand;
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase()) ||
        p.description.some((d) =>
          d.toLowerCase().includes(search.toLowerCase())
        );
      return matchCat && matchSub && matchBrand && matchSearch;
    });

    // When viewing "All Categories", surface Cardio products at the top
    // while preserving the original order within each group.
    if (selectedCategory === "All") {
      const cardio = matched.filter((p) => p.category === "Cardio");
      const rest = matched.filter((p) => p.category !== "Cardio");
      return [...cardio, ...rest];
    }

    return matched;
  }, [selectedCategory, selectedSub, selectedBrand, search]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <div className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Product <span className="text-primary">Catalog</span>
          </h1>
          <p className="text-sm opacity-70 mt-2">
            Browse our full line of rehab and wellness equipment. Call for clinical pricing on any product.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products by name, SKU, or feature..."
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-md bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <select
              className="border border-border rounded-md bg-card text-foreground text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSub("All");
              }}
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Subcategory pills */}
        {subcategories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedSub("All")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedSub === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              All
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSub(sub)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedSub === sub
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No products found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
