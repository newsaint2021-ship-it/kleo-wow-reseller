import { Mail, Phone, MapPin } from "lucide-react";
import kleoLogo from "@/assets/kleo-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={kleoLogo} alt="Kleo Spice & Herbs" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-sm text-secondary-foreground/70 text-left leading-relaxed">
              From resilience to excellence. Premium spices and herbs, crafted in Cape Town with Zimbabwean heritage.
            </p>
            <p className="font-display italic text-primary text-sm mt-3">Time to Wow</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors btn-min-target flex items-center"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-sm mb-4">Popular Spices</h4>
            <nav className="flex flex-col gap-2">
              {["Chicken Spice", "Curry Powder", "BBQ Spice", "Turmeric", "Black Pepper"].map((spice) => (
                <span key={spice} className="font-body text-sm text-secondary-foreground/70">
                  {spice}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:kleospiceherbs@gmail.com" className="flex items-center gap-2 font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                kleospiceherbs@gmail.com
              </a>
              <a href="tel:+27729838166" className="flex items-center gap-2 font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                +27 72 983 8166
              </a>
              <span className="flex items-center gap-2 font-body text-sm text-secondary-foreground/70">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                Cape Town, South Africa
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center" style={{ borderTop: "1px solid rgba(212, 175, 55, 0.15)" }}>
          <p className="font-body text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Kleo Spice & Herbs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
