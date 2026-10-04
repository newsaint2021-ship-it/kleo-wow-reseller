import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { products } from "@/data/products";
import { useStoreMode } from "@/hooks/useStoreMode";
import ProductCard from "./ProductCard";
import catalogueAsset from "@/assets/Kleo_Spice_Herbs_Wholesale_Catalogue.pdf.asset.json";

const categories = ["All", "Blends", "Single Spices", "Herbs"];
type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const ProductGrid = () => {
  const { mode } = useStoreMode();
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.ingredients.some((i) => i.toLowerCase().includes(q))
      );
    }
    const priceOf = (p: typeof products[number]) => (mode === "retail" ? p.retailPrice : p.wholesalePrice);
    if (sort === "price-asc") list = [...list].sort((a, b) => priceOf(a) - priceOf(b));
    if (sort === "price-desc") list = [...list].sort((a, b) => priceOf(b) - priceOf(a));
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, query, sort, mode]);

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
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
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={catalogueAsset.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wide uppercase px-6 py-3 btn-min-target shadow-kleo hover:opacity-90 transition-opacity"
                  style={{ minHeight: "44px" }}
                >
                  Download Wholesale Catalogue
                </a>
                <a
                  href="https://wa.me/27729838166?text=I%27d%20like%20to%20place%20a%20Kleo%20wholesale%20order"
                  className="inline-flex items-center justify-center rounded-sm font-body text-sm font-medium tracking-wide uppercase px-6 py-3 btn-min-target border hover:bg-secondary-foreground/10 transition-colors"
                  style={{ minHeight: "44px", borderColor: "var(--border-gold-strong)" }}
                >
                  Request a Wholesale Order
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {mode === "retail" && (<>
        <div className="text-left mb-10">
          <p className="font-display italic text-primary text-sm mb-2">Our Collection</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            {mode === "retail" ? "Premium Spices & Herbs" : "Wholesale Catalog"}
          </h2>
          <p className="font-body text-muted-foreground mt-2 max-w-xl">
            22 carefully sourced spices and herbs, from Melissa Cleopatra's kitchen to yours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search spices, herbs, ingredients…"
              className="w-full bg-card border rounded-sm pl-10 pr-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition"
              style={{ borderColor: "var(--border-gold)" }}
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="bg-card border rounded-sm px-3 py-2.5 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            style={{ borderColor: "var(--border-gold)" }}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name (A–Z)</option>
          </select>
        </div>

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

        {filtered.length === 0 ? (
          <div className="py-16 text-center font-body text-muted-foreground">
            No products match your search. Try a different term.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
        </>)}
      </div>
    </section>
  );
};

export default ProductGrid;
