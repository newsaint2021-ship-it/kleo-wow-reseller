import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { heroImages } from "@/lib/heroImages";

const slideCopy = [
  {
    eyebrow: "Time to Wow",
    headline: ["The Resilience", "of Flavor."],
    subtext:
      "Slow-crafted blends from Cape Town — built on heritage, refined for restaurants, ready for your table.",
  },
  {
    eyebrow: "Around the Table",
    headline: ["Every Meal", "Tells a Story."],
    subtext:
      "From family dinners to celebrations — Kleo seasons the moments that matter.",
  },
  {
    eyebrow: "Chef Crafted",
    headline: ["Crafted to", "Impress."],
    subtext:
      "Restaurant-grade spice blends, hand-finished and trusted by professional kitchens.",
  },
  {
    eyebrow: "From Cape Town, with Pride",
    headline: ["From Cape Town", "to Every Table."],
    subtext:
      "African excellence, bottled — delivered across South Africa and beyond.",
  },
];

const SLIDE_DURATION = 6500;

const HeroSection = () => {
  const slides = useMemo(
    () =>
      heroImages.map((image, i) => ({
        image,
        ...slideCopy[i % slideCopy.length],
      })),
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_DURATION,
    );
    return () => clearInterval(id);
  }, [slides.length]);

  // Parallax: image moves slower than foreground on scroll
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const fgY = useTransform(scrollY, [0, 600], [0, -30]);

  if (slides.length === 0) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-kleo-deep text-white/60 font-body text-sm">
        Add hero images to <code className="mx-2">src/assets/hero-screen/</code> to populate the slideshow.
      </section>
    );
  }

  const current = slides[index];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden bg-kleo-deep"
    >
      {/* Slideshow background w/ parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{
              opacity: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 7, ease: "linear" },
            }}
          >
            <img
              src={current.image}
              alt={current.headline.join(" ")}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.55) 70%, hsl(156 96% 8%) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative container mx-auto px-4 pb-24 pt-72 sm:pt-64"
        style={{ y: fgY }}
      >
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <p className="font-display italic text-primary text-base sm:text-lg mb-4 tracking-wide animate-fade-up">
                {current.eyebrow}
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-wide mb-6 animate-fade-up"
                style={{ animationDelay: "120ms" }}
              >
                {current.headline[0]}
                <br />
                <span className="text-gold-gradient">{current.headline[1]}</span>
              </h1>
              <p
                className="font-body text-white/80 text-sm sm:text-base max-w-lg mb-10 leading-relaxed animate-fade-up"
                style={{ animationDelay: "260ms" }}
              >
                {current.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#products"
              className="inline-flex items-center justify-center rounded-sm bg-kleo-sage text-white font-body text-sm font-medium px-8 py-3 btn-min-target shadow-kleo transition-all duration-300 animate-breath"
              whileHover={{ y: -3, scale: 1.04 }}
            >
              Explore Collection
            </motion.a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-sm font-body text-sm font-medium px-8 py-3 btn-min-target text-white border border-white/40 hover:border-white/80 hover:bg-white/5 transition-all duration-300 bg-transparent"
            >
              Our Story
            </a>
          </div>

          {/* Slide indicators */}
          <div className="mt-12 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
                style={{
                  width: i === index ? 56 : 24,
                  background: "rgba(255,255,255,0.25)",
                }}
              >
                {i === index && (
                  <motion.span
                    key={`bar-${index}`}
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
