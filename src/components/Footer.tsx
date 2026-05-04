import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/gm-therapy-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <img
            src={logo}
            alt="GM Therapy Solutions"
            width={200}
            height={64}
            loading="lazy"
            decoding="async"
            className="h-16 w-auto object-contain bg-background/95 p-2 rounded mb-3"
          />
          <p className="text-sm opacity-70">
            Your reliable rehab & wellness equipment partner.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <address className="not-italic space-y-2 text-sm opacity-80">
            <a href="tel:940-334-5169" className="flex items-center gap-2 hover:text-primary">
              <Phone className="w-4 h-4" /> 940-334-5169
            </a>
            <a href="mailto:sales@gmtherapytx.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" /> sales@gmtherapytx.com
            </a>
            <a
              href="https://maps.google.com/?q=7400+FM+2622+Ste+302+Ponder+TX+76259"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-primary"
            >
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                7400 FM 2622 Ste 302
                <br />
                Ponder, TX 76259
              </span>
            </a>
          </address>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-80">
            <a href="https://gmtherapytx.com" className="block hover:text-primary">← Main Site</a>
            <a href="https://gmtherapytx.com/services" className="block hover:text-primary">Services</a>
            <a href="https://gmtherapytx.com/about" className="block hover:text-primary">About Us</a>
            <a href="https://gmtherapytx.com/contact" className="block hover:text-primary">Contact</a>
            <a href="https://gmtherapytx.com/past-projects" className="block hover:text-primary">Past Projects</a>
            <a href="/products" className="block hover:text-primary">Product Catalog</a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} GM Therapy Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
