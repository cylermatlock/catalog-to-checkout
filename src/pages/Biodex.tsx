import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MapPin, Award, ShieldCheck, Wrench, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import heroImage from "@/assets/biodex-hero.jpg";

const biodexProducts = products.filter((p) => p.category === "Biodex / Sport Medical");

const groups: { title: string; tagline: string }[] = [
  { title: "Strength", tagline: "Objective isokinetic testing & training" },
  { title: "Balance", tagline: "Static and dynamic balance assessment" },
  { title: "Gait", tagline: "Gait analysis, training, and unweighing" },
  { title: "Cycles & Ergometers", tagline: "Accessible cardio rehabilitation" },
];

const Biodex = () => {
  const canonical = "https://products.gmtherapytx.com/biodex";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Biodex Dealer — Texas, Oklahoma & New Mexico | GM Therapy</title>
        <meta
          name="description"
          content="GM Therapy Solutions is the exclusive Biodex / Sport Medical dealer for TX, OK, and NM. System 4, Balance System SD, BioSway, Gait Trainer 3, and more — local sales, service, and clinical training."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Biodex Dealer — Texas, Oklahoma & New Mexico" />
        <meta property="og:description" content="Exclusive Biodex / Sport Medical dealer for TX, OK, NM. Local sales, service, and clinical support." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GM Therapy Solutions",
          url: "https://products.gmtherapytx.com/biodex",
          telephone: "+1-940-334-5169",
          areaServed: ["Texas", "Oklahoma", "New Mexico"],
          makesOffer: biodexProducts.map((p) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: p.name, sku: p.sku, brand: "Biodex" },
          })),
        })}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <img
          src={heroImage}
          alt="Biodex rehabilitation equipment in a modern clinic"
          width={1600}
          height={896}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          fetchPriority="high"
        />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded mb-5">
              <Star className="w-3.5 h-3.5 fill-current" />
              Exclusive Dealer · TX / OK / NM
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Biodex <span className="text-primary">/ Sport Medical</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
              GM Therapy Solutions is the authorized exclusive dealer for Biodex
              physical-medicine equipment across Texas, Oklahoma, and New Mexico
              — backed by local clinical training, service, and support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <a href="tel:940-334-5169">
                  <Phone className="w-4 h-4 mr-2" /> Call 940-334-5169
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background/10 border-background/40 text-background hover:bg-background/20 hover:text-background">
                <a href="#catalog">
                  Browse Products <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why exclusive */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Authorized Exclusive Dealer", body: "The only authorized Biodex / Sport Medical sales partner across Texas, Oklahoma, and New Mexico." },
              { icon: MapPin, title: "Local Clinical Support", body: "On-site demos, in-service training, and installation — all coordinated from our Ponder, TX headquarters." },
              { icon: Wrench, title: "Service & Calibration", body: "Direct manufacturer service path with regional response times for Biodex System 4, Balance, and Gait products." },
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

      {/* Catalog grouped by sub */}
      <section id="catalog" className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">The Full Biodex Line</h2>
          <p className="text-muted-foreground mt-3">
            From the gold-standard System 4 isokinetic dynamometer to portable balance
            and gait systems — call for clinical pricing on any product.
          </p>
        </div>

        {groups.map((group) => {
          const items = biodexProducts.filter((p) => p.subcategory === group.title);
          if (items.length === 0) return null;
          return (
            <div key={group.title} className="mb-14">
              <div className="flex items-end justify-between border-b-2 border-primary pb-2 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{group.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{group.tagline}</p>
                </div>
                <span className="text-xs text-muted-foreground">{items.length} product{items.length !== 1 ? "s" : ""}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((p) => <ProductCard key={p.id} product={p} featured />)}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="w-10 h-10 mx-auto mb-3" />
          <h2 className="font-display text-2xl md:text-3xl font-bold">Ready for a demo or quote?</h2>
          <p className="mt-2 opacity-90">We&apos;ll bring Biodex equipment to your facility for evaluation.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <a href="tel:940-334-5169">
                <Phone className="w-4 h-4 mr-2" /> 940-334-5169
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/products">View Full Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Biodex;
