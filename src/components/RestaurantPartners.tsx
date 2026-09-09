import { motion } from "framer-motion";

const partners = [
  "Sea Point Bistro",
  "Heritage Kitchen",
  "Table Bay Grill",
  "Kalk Bay Smoke",
  "Cape Spice Co.",
  "Long Street Eatery",
];

const RestaurantPartners = () => (
  <section className="py-16 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display italic text-primary text-sm text-center mb-6"
      >
        Trusted in professional kitchens across South Africa
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4 items-center">
        {partners.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="text-center"
          >
            <p className="font-display text-sm sm:text-base text-secondary-foreground/70 tracking-wide uppercase">
              {p}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RestaurantPartners;
