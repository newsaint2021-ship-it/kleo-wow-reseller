import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="font-display italic text-primary text-sm mb-2">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
              Empowerment<br />
              <span className="text-gold-gradient">Through Flavor</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground text-left leading-relaxed">
              <p>
                Melissa Cleopatra — known to everyone as Kleo — arrived in Cape Town from Zimbabwe with nothing but a suitcase of hand-ground spices and an unbreakable will. In a city that didn't know her name, she built a reputation one kitchen at a time.
              </p>
              <p>
                Kleo Spice & Herbs was born from the intersection of survival and mastery. Every blend in our collection carries the memory of Melissa's grandmother's kitchen in Harare, refined through years of professional culinary work in Cape Town's most demanding restaurants.
              </p>
              <p>
                Today, Kleo stands as more than a spice brand. It is a symbol of what happens when resilience meets craft — when the struggle against poverty transforms into a mission of culinary excellence. Every jar is a declaration: that heritage is power, that flavor is a language, and that excellence is non-negotiable.
              </p>
              <p className="text-foreground font-medium">
                Our mission is poverty alleviation through premium quality. We believe that when you elevate the product, you elevate the person behind it.
              </p>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div
              className="aspect-[3/4] rounded-sm bg-malachite flex items-center justify-center shadow-kleo-lg relative overflow-hidden"
              style={{ border: "1px solid var(--border-gold)" }}
            >
              <div className="text-center px-8">
                <p className="font-display italic text-primary text-4xl sm:text-5xl mb-4">"</p>
                <p className="font-display italic text-secondary-foreground text-lg sm:text-xl leading-relaxed mb-6">
                  Every spice jar is a symbol of professional grit and authentic heritage.
                </p>
                <div className="w-12 h-px bg-primary mx-auto mb-4" />
                <p className="font-body text-secondary-foreground/70 text-sm">Melissa Cleopatra</p>
                <p className="font-body text-secondary-foreground/50 text-xs">Founder, Kleo Spice & Herbs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
