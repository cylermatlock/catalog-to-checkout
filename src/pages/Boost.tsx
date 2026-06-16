import { Helmet } from "react-helmet-async";
import { Phone, Activity, HeartPulse, Gauge, ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import heroImage from "@/assets/boost-hero.jpg";

const boostProducts = products.filter((p) => p.category === "BOOST Treadmills");

const groups: { title: string; tagline: string }[] = [
  { title: "Microgravity Treadmills", tagline: "NASA-developed air-pressure unweighing — run up to 80% lighter" },
];

const Boost = () => {
  const canonical = "https://products.gmtherapytx.com/boost";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>BOOST Microgravity Treadmills Dealer | GM Therapy Solutions</title>
        <meta
          name="description"
          content="Shop BOOST Microgravity Treadmills — BOOST 2 Core (15 mph), BOOST 2 Elite (18 mph) and BOOST 3 anti-gravity treadmills. Clinical pricing from GM Therapy Solutions."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="BOOST Microgravity Treadmills — GM Therapy Solutions" />
        <meta property="og:description" content="BOOST 2 Core, BOOST 2 Elite, and BOOST 3 anti-gravity treadmills." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GM Therapy Solutions",
          url: canonical,
          telephone: "+1-940-334-5169",
          makesOffer: boostProducts.map((p) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: p.name, sku: p.sku, brand: "BOOST Treadmills" },
          })),
        })}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <img
          src={heroImage}
          alt="BOOST microgravity anti-gravity treadmill in a performance training facility"
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
              Authorized BOOST Dealer
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-primary">BOOST</span> Microgravity Treadmills
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
              Run up to 80% lighter. Using air-pressure technology developed at NASA, the BOOST 2
              Core, BOOST 2 Elite, and BOOST 3 deload bodyweight so athletes can train harder,
              recover faster, and stay injury-free.
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
                icon: Activity,
                title: "Top speed up to 18 mph",
                body: "Built for elite sprint training — speeds from 0.1 to 18 mph and 0–15% incline on the patented Woodway 4Front slat-belt surface.",
              },
              {
                icon: Gauge,
                title: "Reduce Bodyweight up to 80%",
                body: "Adjust bodyweight from 20–100% in 1% increments. Train smarter, protect joints, return to sport faster.",
              },
              {
                icon: HeartPulse,
                title: "Trusted by Elite Programs",
                body: "Used by NFL, MLB, and D1 collegiate athletic & sports medicine programs nationwide.",
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
          <h2 className="font-display text-3xl md:text-4xl font-bold">The BOOST Lineup</h2>
          <p className="text-muted-foreground mt-3">
            Three microgravity treadmill models — BOOST 2 Core (15 mph), BOOST 2 Elite (18 mph), and
            the next-generation BOOST 3. Call for clinical pricing.
          </p>
        </div>

        {groups.map((group) => {
          const items = boostProducts.filter((p) => p.subcategory === group.title);
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

export default Boost;
