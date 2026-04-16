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
            className="h-16 w-auto object-contain bg-background/95 p-2 rounded mb-3"
          />
          <p className="text-sm opacity-70">
            PT Equipment & Supplies. Your reliable equipment partner.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm opacity-80">
            <a href="tel:940-600-1311" className="flex items-center gap-2 hover:text-primary">
              <Phone className="w-4 h-4" /> 940-600-1311
            </a>
            <a href="mailto:sales@gmtherapytx.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" /> sales@gmtherapytx.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Denton, TX
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-80">
            <a href="/products" className="block hover:text-primary">Products</a>
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
