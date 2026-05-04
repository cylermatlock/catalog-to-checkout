import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, Plus, Minus, ShoppingCart, FileDown, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { productDetails } from "@/data/productDetails";
import { useCart } from "@/contexts/CartContext";
import { getBrand } from "@/lib/brand";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const detail = id ? productDetails[id] : undefined;
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [id]);

  if (!product || !detail) {
    return <Navigate to="/products" replace />;
  }

  const handleAdd = () => {
    addItem(product, qty);
    toast.success(`${qty} × ${product.name} added to quote request`, {
      action: { label: "View quote request", onClick: openCart },
    });
    setQty(1);
  };

  const canonical = `https://products.gmtherapytx.com/product/${product.id}`;
  const ogImage = `https://products.gmtherapytx.com/og/products/${product.id}.jpg`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{detail.seo.title}</title>
        <meta name="description" content={detail.seo.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="GM Therapy Solutions" />
        <meta property="og:title" content={detail.seo.title} />
        <meta property="og:description" content={detail.seo.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={product.name} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={detail.seo.title} />
        <meta name="twitter:description" content={detail.seo.description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            sku: product.sku,
            mpn: product.sku,
            category: `${product.category} > ${product.subcategory}`,
            description: detail.tagline,
            image: detail.gallery.map((g) => g.src),
            brand: { "@type": "Brand", name: getBrand(product) },
            offers: {
              "@type": "Offer",
              url: canonical,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                description: "Contact for pricing",
              },
              seller: {
                "@type": "Organization",
                name: "GM Therapy Solutions",
                url: "https://products.gmtherapytx.com",
              },
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to={(typeof window !== "undefined" && sessionStorage.getItem("productsReturnUrl")) || "/products"}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to products
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <section aria-label="Product images">
              <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden border border-border flex items-center justify-center">
                <img
                  src={detail.gallery[activeIdx]?.src}
                  alt={detail.gallery[activeIdx]?.alt || `${getBrand(product)} ${product.name} — ${product.subcategory}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="mt-3 grid grid-cols-5 sm:grid-cols-6 gap-2">
                {detail.gallery.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Show image ${i + 1}: ${img.alt}`}
                    className={`aspect-square bg-secondary rounded border-2 overflow-hidden transition-all ${
                      i === activeIdx
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img.src} alt={`${product.name} thumbnail ${i + 1}`} loading="lazy" className="w-full h-full object-contain p-1" />
                  </button>
                ))}
              </div>
            </section>

            {/* Info */}
            <section>
              <p className="text-xs uppercase tracking-wider text-primary font-bold">
                {product.category} · {product.subcategory}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold mt-1 leading-tight">
                {product.name}
              </h1>
              <p className="text-muted-foreground mt-2">{detail.tagline}</p>
              <p className="text-xs text-muted-foreground mt-2">SKU: {product.sku}</p>

              <ul className="mt-5 space-y-1.5">
                {detail.highlights.map((h) => (
                  <li key={h} className="text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-lg border border-border bg-card">
                {product.price && (
                  <p className="font-display text-3xl font-bold mb-3">
                    ${product.price.toLocaleString()}
                  </p>
                )}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-border rounded-md">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 hover:bg-secondary transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-semibold">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="px-3 py-2 hover:bg-secondary transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <Button onClick={handleAdd} className="flex-1 font-semibold">
                    <ShoppingCart className="w-4 h-4 mr-1.5" />
                    Add to Quote Request
                  </Button>
                </div>
                {!product.price && (
                  <a
                    href="tel:940-600-1311"
                    className="mt-3 flex items-center justify-center gap-2 w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Or call 940-600-1311 for pricing
                  </a>
                )}
              </div>

      {detail.specSheetUrl && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={detail.specSheetUrl} target="_blank" rel="noopener noreferrer">
                      <FileDown className="w-4 h-4 mr-1.5" />
                      Download spec sheet (PDF)
                    </a>
                  </Button>
                </div>
              )}
            </section>
          </div>

          {/* Overview */}
          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold">Overview</h2>
            <div className="mt-3 space-y-3 text-muted-foreground max-w-3xl">
              {detail.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Specs */}
          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold">Specifications</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {detail.specGroups.map((group) => (
                <div key={group.title} className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-primary text-primary-foreground px-4 py-2 font-display font-bold uppercase text-sm tracking-wide">
                    {group.title}
                  </div>
                  <dl className="divide-y divide-border">
                    {group.rows.map((row) => (
                      <div key={row.label} className="grid grid-cols-3 gap-2 px-4 py-2.5 text-sm">
                        <dt className="font-semibold text-foreground col-span-1">{row.label}</dt>
                        <dd className="text-muted-foreground col-span-2">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
