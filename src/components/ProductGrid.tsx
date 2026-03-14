import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { useStoreMode } from "@/hooks/useStoreMode";
import ProductCard from "./ProductCard";

const categories = ["All", "Blends", "Single Spices", "Herbs"];

const ProductGrid = () => {
  const { mode } = useStoreMode();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        {/* Wholesale banner */}
        <AnimatePresence>
          {mode === "reseller" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-10 rounded-sm bg-secondary text-secondary-foreground p-6 shadow-kleo overflow-hidden"
              style={{ border: "1px solid var(--border-gold)" }}
            >
              <h3 className="font-display text-xl mb-1">Wholesale Benefits</h3>
              <p className="font-body text-sm text-secondary-foreground/80 max-w-2xl">
                Competitive bulk pricing from 1kg units. Dedicated account management, consistent supply, and custom blending available for orders above 50kg. Contact us for tailored pricing.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section header */}
        <div className="text-left mb-10">
          <p className="font-display italic text-primary text-sm mb-2">Our Collection</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            {mode === "retail" ? "Premium Spices & Herbs" : "Wholesale Catalog"}
          </h2>
          <p className="font-body text-muted-foreground mt-2 max-w-xl">
            22 carefully sourced spices and herbs, from Melissa Cleopatra's kitchen to yours.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs font-medium px-4 py-2 rounded-sm btn-min-target transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
