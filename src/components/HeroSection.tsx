import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kleo.webp";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
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
        {/* Dark vignette overlay */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%, rgba(0,0,0,0.6) 70%, hsl(156 96% 10%) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-20 pt-64">
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
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.2] tracking-wide mb-6">
            The Resilience<br />
            <span className="text-gold-gradient">of Flavor.</span>
          </h1>
          <p className="font-body text-white/80 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            Melissa Cleopatra's mission to transform the culinary landscape of South Africa, one spice at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#products"
              className="inline-flex items-center justify-center rounded-sm bg-kleo-sage text-white font-body text-sm font-medium px-8 py-3 btn-min-target shadow-kleo transition-all duration-300"
              whileHover={{ y: -3, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.3)" }}
            >
              Explore Collection
            </motion.a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-sm font-body text-sm font-medium px-8 py-3 btn-min-target text-white border border-white/40 hover:border-white/70 transition-colors duration-300 bg-transparent"
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
