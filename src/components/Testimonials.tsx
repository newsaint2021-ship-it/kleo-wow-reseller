import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Kleo's Chicken Spice changed our Sunday roast. My grandmother would be proud — and that's the highest praise I can give.",
    name: "Naledi M.",
    role: "Home cook, Johannesburg",
  },
  {
    quote: "We use the BBQ blend across all three of our Cape Town locations. Consistent, deeply layered, and our chefs swear by it.",
    name: "Chef Daniel R.",
    role: "Head Chef, Sea Point",
  },
  {
    quote: "I bulk-order the curry powder for my food truck. Customers ask me what makes it different — I just smile and say Kleo.",
    name: "Sipho K.",
    role: "Food Truck Owner",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4">
      <div className="text-left mb-12 max-w-2xl">
        <p className="font-display italic text-primary text-sm mb-2">Voices at the Table</p>
        <h2 className="font-display text-3xl sm:text-4xl">What Our Community Says</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-sm p-6 bg-secondary-foreground/5 backdrop-blur-sm"
            style={{ border: "1px solid var(--border-gold)" }}
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="font-display italic text-secondary-foreground/90 text-lg leading-relaxed mb-6">
              "{t.quote}"
            </blockquote>
            <figcaption>
              <p className="font-body text-sm font-medium">{t.name}</p>
              <p className="font-body text-xs text-secondary-foreground/60">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
