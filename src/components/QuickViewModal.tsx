import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useStoreMode } from "@/hooks/useStoreMode";
import type { Product } from "@/data/products";

interface QuickViewModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ product, open, onClose }: QuickViewModalProps) => {
  const { mode } = useStoreMode();
  const isRetail = mode === "retail";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-background rounded-sm shadow-kleo-lg overflow-hidden"
            style={{ border: "1px solid var(--border-gold)" }}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 btn-min-target flex items-center justify-center rounded-sm bg-background/80 backdrop-blur-sm text-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="font-display text-muted-foreground/40 italic">Image Coming Soon</span>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-[10px] font-body font-medium uppercase tracking-wider text-primary">{product.category}</span>
              <h2 className="font-display text-2xl text-foreground mt-1">{product.name}</h2>
              <p className="font-body text-sm text-muted-foreground">{product.subtitle}</p>

              {/* Price */}
              <div className="mt-4 mb-5 pb-5" style={{ borderBottom: "1px solid var(--border-gold)" }}>
                {isRetail ? (
                  <p className="font-body text-2xl font-semibold text-foreground tabular-nums">
                    R {product.retailPrice.toFixed(2)}
                    <span className="text-sm text-muted-foreground font-normal ml-2">/ {product.retailUnit}</span>
                  </p>
                ) : (
                  <div>
                    <p className="font-body text-lg font-semibold text-primary">Bulk Pricing Available</p>
                    <p className="font-body text-sm text-muted-foreground tabular-nums">
                      From R {product.wholesalePrice.toFixed(2)} / {product.wholesaleUnit}
                    </p>
                  </div>
                )}
              </div>

              {/* Ingredients */}
              <div className="mb-4">
                <h3 className="font-display text-sm text-foreground mb-2">Ingredients</h3>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="bg-muted text-muted-foreground text-xs font-body px-2.5 py-1 rounded-sm">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="mb-6">
                <h3 className="font-display text-sm text-foreground mb-2">Culinary Suggestions</h3>
                <ul className="grid grid-cols-2 gap-1.5">
                  {product.suggestions.map((sug) => (
                    <li key={sug} className="font-body text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">•</span>
                      {sug}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              {isRetail ? (
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full rounded-sm bg-secondary text-secondary-foreground font-body text-sm font-medium py-3 btn-min-target hover:opacity-90 transition-opacity"
                >
                  Add to Cart — R {product.retailPrice.toFixed(2)}
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full rounded-sm font-body text-sm font-medium py-3 btn-min-target text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  style={{ border: "1px solid var(--border-gold-strong)" }}
                >
                  Request Wholesale Quote
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
