import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">
            GM <span className="text-primary">Therapy</span> Solutions
          </h3>
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
            <a href="mailto:info@gmtherapytx.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" /> info@gmtherapytx.com
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
            <a href="/about" className="block hover:text-primary">About Us</a>
            <a href="/contact" className="block hover:text-primary">Contact Us</a>
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
