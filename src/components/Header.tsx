import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ShoppingCart, ArrowLeft } from "lucide-react";
import logo from "@/assets/gm-therapy-logo.png";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { itemCount, openCart } = useCart();

  const links = [
    { to: "/products", label: "Products" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto flex items-stretch justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2 py-2">
          <img
            src={logo}
            alt="GM Therapy Solutions — PT Equipment & Supplies"
            className="h-20 w-auto bg-primary-foreground object-fill"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="https://gmtherapytx.com"
            className="font-display text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-primary flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Main Site
          </a>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-stretch">
          <a
            href="tel:940-600-1311"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-6 font-display text-base font-bold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            940-600-1311
          </a>
          <button
            onClick={openCart}
            className="relative flex items-center justify-center px-5 bg-foreground text-background hover:opacity-90 transition-opacity"
            aria-label="Open quote request"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative text-foreground"
            aria-label="Open quote request"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {itemCount}
              </span>
            )}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          <a
            href="https://gmtherapytx.com"
            className="flex items-center gap-1.5 py-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Main Site
          </a>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:940-600-1311"
            className="mt-2 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-display font-bold w-fit"
          >
            <Phone className="w-4 h-4" />
            940-600-1311
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
