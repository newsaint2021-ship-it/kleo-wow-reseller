import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useStoreMode, type StoreMode } from "@/hooks/useStoreMode";
import kleoLogo from "@/assets/kleo-logo.svg";

const Header = () => {
  const { mode, toggleMode } = useStoreMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md" style={{ borderBottom: "1px solid var(--border-gold)" }}>
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs font-body">
          <div className="flex items-center gap-4">
            <a href="mailto:kleospiceherbs@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">kleospiceherbs@gmail.com</span>
            </a>
            <a href="tel:+27729838166" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+27 72 983 8166</span>
            </a>
          </div>
          <span className="font-display italic text-primary text-xs">Time to Wow</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img src={kleoLogo} alt="Kleo Spice & Herbs Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wide text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mode Toggle */}
        <div className="flex items-center gap-4">
          <div
            className="relative flex rounded-full p-0.5 btn-min-target"
            style={{ border: "1px solid var(--border-gold-strong)", background: mode === "reseller" ? "hsl(var(--kleo-emerald))" : "hsl(var(--kleo-cream))" }}
          >
            <button
              onClick={() => toggleMode("retail")}
              className={`relative z-10 rounded-full px-4 py-1.5 text-xs font-body font-medium btn-min-target flex items-center justify-center transition-all duration-300 ${
                mode === "retail" ? "bg-secondary text-secondary-foreground" : "text-secondary-foreground/60"
              }`}
              style={{ minHeight: "36px" }}
            >
              Retail
            </button>
            <button
              onClick={() => toggleMode("reseller")}
              className={`relative z-10 rounded-full px-4 py-1.5 text-xs font-body font-medium btn-min-target flex items-center justify-center transition-all duration-300 ${
                mode === "reseller" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
              style={{ minHeight: "36px" }}
            >
              Reseller
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden btn-min-target flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-background"
            style={{ borderTop: "1px solid var(--border-gold)" }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-body text-base py-3 text-foreground hover:text-primary transition-colors btn-min-target"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
