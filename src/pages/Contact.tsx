import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <div className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Contact <span className="text-primary">Us</span></h1>
        <p className="text-sm opacity-70 mt-2">We'd love to help you outfit your clinic.</p>
      </div>
    </div>
    <div className="container mx-auto px-4 py-12 flex-1 max-w-2xl">
      <div className="space-y-6">
        <a href="tel:940-600-1311" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Call Us</p>
            <p className="text-sm text-muted-foreground">940-600-1311</p>
          </div>
        </a>
        <a href="mailto:info@gmtherapytx.com" className="flex items-center gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Email Us</p>
            <p className="text-sm text-muted-foreground">info@gmtherapytx.com</p>
          </div>
        </a>
        <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Location</p>
            <p className="text-sm text-muted-foreground">Denton, TX</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
