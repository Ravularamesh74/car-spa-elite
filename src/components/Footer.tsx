import { Phone, MapPin, Globe, MessageCircle, Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="font-heading text-2xl font-bold uppercase tracking-wider text-primary mb-4">
              AutoLux<span className="text-foreground">Detail</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Hyderabad's premium eco-friendly car detailing service. Steam technology, zero chemicals, showroom results at your doorstep.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>Steam Car Wash</li>
              <li>Interior Deep Clean</li>
              <li>Rubbing & Polishing</li>
              <li>Ceramic Coating</li>
              <li>PPF Protection</li>
              <li>Engine Bay Detail</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+918333965678" className="hover:text-primary transition-colors">+91 83339 65678</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>All Hyderabad — Doorstep Service</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="glow-line w-full mt-12 mb-6" />
        <div className="text-center font-body text-xs text-muted-foreground">
          © 2026 AutoLuxDetail. All rights reserved. Premium Car Detailing in Hyderabad.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
