import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/gm-therapy-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto flex items-stretch justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2 py-2">
          <img
            src={logo}
            alt="GM Therapy Solutions — PT Equipment & Supplies"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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

        <a
          href="tel:940-600-1311"
          className="hidden md:flex items-center gap-3 bg-primary text-primary-foreground px-6 font-display text-base font-bold hover:opacity-90 transition-opacity"
        >
          <Phone className="w-5 h-5" />
          940-600-1311
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
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
