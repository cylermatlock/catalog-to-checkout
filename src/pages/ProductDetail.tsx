import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, Plus, Minus, ShoppingCart, FileDown, ExternalLink, Phone, Star, Award, Wrench, MapPin } from "lucide-react";
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
        {detail.gallery[0]?.src && (
          <link rel="preload" as="image" href={detail.gallery[0].src} fetchPriority="high" />
        )}
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://products.gmtherapytx.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://products.gmtherapytx.com/products",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.category,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: product.subcategory,
              },
              {
                "@type": "ListItem",
                position: 5,
                name: product.name,
                item: canonical,
              },
            ],
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
                  fetchPriority="high"
                  decoding="async"
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
              {product.exclusiveDealer && (
                <span className="mt-3 inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  <Star className="w-3 h-3 fill-current" />
                  Exclusive Dealer · TX / OK / NM
                </span>
              )}
              <p className="text-muted-foreground mt-3">{detail.tagline}</p>
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
                    href="tel:940-334-5169"
                    className="mt-3 flex items-center justify-center gap-2 w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Or call 940-334-5169 for pricing
                  </a>
                )}
              </div>

              {(detail.specSheetUrl || detail.brochureUrl) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {detail.brochureUrl && (
                    <Button asChild variant="default" size="sm">
                      <a href={detail.brochureUrl} target="_blank" rel="noopener noreferrer" type="application/pdf">
                        <FileDown className="w-4 h-4 mr-1.5" />
                        {detail.brochureTitle ?? "GM Therapy brochure"} (PDF)
                      </a>
                    </Button>
                  )}
                  {detail.specSheetUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={detail.specSheetUrl} target="_blank" rel="noopener noreferrer">
                        <FileDown className="w-4 h-4 mr-1.5" />
                        Download spec sheet (PDF)
                      </a>
                    </Button>
                  )}
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

          {/* Exclusive dealer callout — TX/OK/NM emphasis */}
          {product.exclusiveDealer && (
            <section className="mt-12 rounded-lg overflow-hidden border-2 border-primary">
              <div className="bg-primary text-primary-foreground px-6 py-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-90">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Why Buy From GM Therapy
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">
                  Authorized Biodex/Sport Medical Dealer · TX, OK & NM
                </h2>
                <p className="opacity-90 mt-2 max-w-3xl">
                  We are the exclusive sales, service, and clinical-training partner for
                  Biodex/Sport Medical equipment across Texas, Oklahoma, and New Mexico.
                  Every purchase includes local delivery, on-site setup, and clinician in-service.
                </p>
              </div>
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-card">
                {[
                  { icon: Award, title: "On-Site Installation", body: "White-glove setup, calibration, and load-testing handled by our team — not a freight-only delivery." },
                  { icon: MapPin, title: "Local Clinical Training", body: "In-service training for your therapists on every protocol — included with every order." },
                  { icon: Wrench, title: "Factory-Authorized Service", body: "Direct manufacturer service path with regional response — calibration, repair, and parts." },
                ].map((c) => (
                  <div key={c.title} className="p-5">
                    <c.icon className="w-7 h-7 text-primary mb-2" />
                    <h3 className="font-display font-bold mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.body}</p>
                  </div>
                ))}
              </div>
              <div className="bg-secondary px-6 py-5 flex flex-wrap items-center justify-between gap-3 border-t border-border">
                <div>
                  <p className="font-display font-bold">Ready for a demo or quote?</p>
                  <p className="text-sm text-muted-foreground">We&apos;ll bring this product to your facility for evaluation.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="lg" className="font-semibold">
                    <a href="tel:940-334-5169">
                      <Phone className="w-4 h-4 mr-2" /> Call 940-334-5169
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-semibold">
                    <Link to="/biodex">
                      Browse Full Biodex/Sport Medical Line
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* Source link */}
          {detail.sourceUrl && (
            <p className="mt-10 text-xs text-muted-foreground">
              Manufacturer reference: {" "}
              <a href={detail.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                {detail.sourceUrl} <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
