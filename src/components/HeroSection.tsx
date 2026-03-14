import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kleo.webp";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Kleo Spice & Herbs - Premium spices from Cape Town"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(156 96% 10% / 0.7) 0%, transparent 60%)" }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-20 pt-40">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.p
            className="font-display italic text-primary text-lg mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Time to Wow
          </motion.p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary-foreground leading-[1.1] mb-6">
            The Resilience<br />
            <span className="text-gold-gradient">of Flavor.</span>
          </h1>
          <p className="font-body text-secondary-foreground/90 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Melissa Cleopatra's mission to transform the culinary landscape of South Africa, one spice at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-sm bg-secondary text-secondary-foreground font-body text-sm font-medium px-8 py-3 btn-min-target shadow-kleo hover:opacity-90 transition-opacity duration-300"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-sm font-body text-sm font-medium px-8 py-3 btn-min-target text-secondary-foreground transition-colors duration-300"
              style={{ border: "1px solid var(--border-gold-strong)" }}
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
