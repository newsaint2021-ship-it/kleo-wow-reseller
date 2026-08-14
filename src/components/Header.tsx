import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useStoreMode } from "@/hooks/useStoreMode";


const Header = () => {
  const { mode, toggleMode } = useStoreMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-kleo-forest/80 backdrop-blur-md shadow-kleo border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Main header */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="flex items-center group btn-min-target"
          aria-label="Kleo Spice & Herbs — Home"
        >
          <img
            src={kleoLogo}
            alt="Kleo Spice & Herbs"
            className="h-11 sm:h-14 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>



        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-body text-sm tracking-wide text-white/90 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
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
            className="md:hidden btn-min-target flex items-center justify-center text-white"
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
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-body text-base py-3 text-foreground hover:text-primary transition-colors btn-min-target"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
