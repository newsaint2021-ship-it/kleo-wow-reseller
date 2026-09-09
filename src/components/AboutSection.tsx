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
              From Resilience<br />
              <span className="text-gold-gradient">To Flavour</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground text-left leading-relaxed">
              <p>
                Kleo Spice &amp; Herbs was born from a simple belief: exceptional flavour can transform an ordinary meal into a memorable experience.
              </p>
              <p>
                At the heart of Kleo is Melissa Cleopatra — an entrepreneur who turned personal challenges into a pursuit of excellence. Rather than allowing difficult circumstances to define her journey, she chose to build something meaningful: a brand centred around quality, flavour, creativity and opportunity.
              </p>
              <p>
                Kleo represents that transformation. Every blend and every spice is carefully selected with one purpose — to help people create food worth remembering.
              </p>
              <p>
                Because food is more than something we eat. It brings people together. It creates memories. It turns a table into a gathering. It gives a chef confidence. It gives a home cook the ability to create something extraordinary.
              </p>
              <p className="text-foreground font-medium">
                This is what Kleo means by Empowerment Through Flavor. Every jar represents resilience, professional grit and the belief that quality can come from anywhere — making great flavour accessible while building a brand founded on quality, ambition and purpose. Time to Wow.
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
