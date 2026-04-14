import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import { Phone, Truck, Shield, Clock, ChevronRight } from "lucide-react";

const Index = () => {
  const categoryIcons: Record<string, string> = {
    "Rehab Furniture": "🏥",
    "Modalities": "⚡",
    "Cardio": "🏃",
    "Strength Equipment": "💪",
    "Balance Products": "⚖️",
    "Compression": "❄️",
    "Work Hardening": "🔧",
    "Clinical Supplies": "🩹",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-foreground text-background py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            New & Pre-owned
            <br />
            <span className="text-primary">Physical Therapy</span> Equipment
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
            Your reliable PT equipment partner. Full service outfitting for clinics, hospitals, and rehab facilities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Browse Products
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:940-600-1311"
              className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-6 py-3 rounded-md font-semibold text-sm hover:bg-background/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Full Service", desc: "From planning to installation, we handle everything so you can focus on patients." },
              { icon: Clock, title: "Any Timeline", desc: "We deliver on time, every time, so you can get back to treating patients." },
              { icon: Truck, title: "White Glove Delivery", desc: "Our team handles layout, training, heavy lifting & assembly." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Shop by <span className="text-primary">Category</span>
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-10">
            Browse our complete catalog of PT equipment and supplies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="group bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{categoryIcons[cat] || "📦"}</div>
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {cat}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Outfit Your Clinic?
          </h2>
          <p className="mt-3 opacity-90 max-w-xl mx-auto">
            Ask about our pre-owned inventory — savings up to 80% off new equipment pricing.
          </p>
          <a
            href="tel:940-600-1311"
            className="mt-6 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Us Today: 940-600-1311
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
