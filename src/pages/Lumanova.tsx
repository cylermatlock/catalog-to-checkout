import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, Sparkles, Activity, HeartPulse, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import heroImage from "@/assets/lumanova-hero.jpg";

const lumanovaProducts = products.filter(
  (p) => p.category === "LumaNova - Red Light Therapy"
);

const groups: { title: string; tagline: string }[] = [
  { title: "Beds & Pods", tagline: "Full-body clinical red & near-infrared light therapy" },
  { title: "Bags & Mats", tagline: "Wrap-around sleeping bags for whole-body recovery" },
  { title: "Wearables", tagline: "Targeted vests, belts, and wraps for on-the-go therapy" },
  { title: "Panels & Towers", tagline: "Focused panels for face, neck, and spot treatment" },
  { title: "Pads & Accessories", tagline: "Portable pads, gloves, and add-ons" },
  { title: "Vitamin D Lights", tagline: "Patented UVB systems that boost vitamin D3 levels" },
];

const Lumanova = () => {
  const canonical = "https://products.gmtherapytx.com/lumanova";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>LumaNova Red Light Therapy Dealer | GM Therapy Solutions</title>
        <meta
          name="description"
          content="Shop the full LumaNova red light therapy line — LumaPod beds, LumaBag sleeping bags, LumaD vitamin D lamps, wearables, panels, and pads. Clinical pricing from GM Therapy Solutions."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="LumaNova Red Light Therapy — GM Therapy Solutions" />
        <meta property="og:description" content="Full LumaNova red light therapy catalog: beds, bags, wearables, panels, and vitamin D lamps." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GM Therapy Solutions",
          url: canonical,
          telephone: "+1-940-334-5169",
          makesOffer: lumanovaProducts.map((p) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: p.name, sku: p.sku, brand: "LumaNova" },
          })),
        })}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <img
          src={heroImage}
          alt="LumaNova red light therapy bed, panel, and wearable lineup"
          width={1600}
          height={896}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded mb-5">
              <Star className="w-3.5 h-3.5 fill-current" />
              Authorized LumaNova Dealer
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Luma<span className="text-primary">Nova</span> Red Light Therapy
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
              The highest-irradiance, most effective red light beds available — plus clinical-grade
              red and near-infrared devices and patented UVB vitamin D systems that double D3 levels
              in 90 days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <a href="tel:940-334-5169">
                  <Phone className="w-4 h-4 mr-2" /> Call 940-334-5169
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold bg-background/10 border-background/40 text-background hover:bg-background/20 hover:text-background"
              >
                <a href="#catalog">
                  Browse Products <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: HeartPulse,
                title: "Health & Wellness Professionals",
                body: "Boost practice revenue by 20% with proven patient outcomes.",
              },
              {
                icon: Activity,
                title: "Elite Athletes & Performance Teams",
                body: "Reduce recovery time by 25% with optimized training integration.",
              },
              {
                icon: Sparkles,
                title: "Biohackers & Wellness Optimizers",
                body: "Enhance longevity with a 30% increase in skin elasticity after 12 weeks.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-lg p-6">
                <c.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">The Full LumaNova Line</h2>
          <p className="text-muted-foreground mt-3">
            From clinical full-body LumaPod beds to wearable belts, panels, and patented vitamin D
            lamps — call for clinical pricing on any product.
          </p>
        </div>

        {groups.map((group) => {
          const items = lumanovaProducts.filter((p) => p.subcategory === group.title);
          if (items.length === 0) return null;
          return (
            <div key={group.title} className="mb-14">
              <div className="flex items-end justify-between border-b-2 border-primary pb-2 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {group.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{group.tagline}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {items.length} product{items.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} featured />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
};

export default Lumanova;
