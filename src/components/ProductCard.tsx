import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useStoreMode } from "@/hooks/useStoreMode";
import type { Product } from "@/data/products";

const QuickViewModal = lazy(() => import("./QuickViewModal"));

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { mode } = useStoreMode();
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const isRetail = mode === "retail";

  return (
    <>
      <motion.article
        className="group relative flex flex-col bg-card rounded-sm overflow-hidden shadow-kleo"
        style={{ border: "1px solid var(--border-gold)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* Image placeholder */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="font-display text-muted-foreground/40 text-sm italic">Image Coming Soon</span>
          </div>

          {/* Quick view overlay */}
          <button
            onClick={() => setQuickViewOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 cursor-pointer btn-min-target"
            aria-label={`Quick view ${product.name}`}
          >
            <span className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-sm px-4 py-2 text-xs font-body font-medium text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </span>
          </button>

          {/* Category badge */}
          <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-body font-medium uppercase tracking-wider px-2.5 py-1 rounded-sm">
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          <Link to={`/product/${product.id}`} className="font-display text-lg text-foreground leading-tight hover:text-primary transition-colors">
            {product.name}
          </Link>
          <p className="font-body text-xs text-muted-foreground mt-0.5 mb-3">{product.subtitle}</p>

          <div className="mt-auto">
            {isRetail ? (
              <>
                <p className="font-body text-lg font-semibold text-foreground tabular-nums">
                  R {product.retailPrice.toFixed(2)}
                  <span className="text-xs text-muted-foreground font-normal ml-1">/ {product.retailUnit}</span>
                </p>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-3 rounded-sm bg-secondary text-secondary-foreground font-body text-sm font-medium py-2.5 btn-min-target hover:opacity-90 transition-opacity duration-300"
                >
                  Add to Cart
                </motion.button>
              </>
            ) : (
              <>
                <p className="font-body text-sm text-primary font-medium">Bulk Pricing Available</p>
                <p className="font-body text-xs text-muted-foreground tabular-nums">
                  From R {product.wholesalePrice.toFixed(2)} / {product.wholesaleUnit}
                </p>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-3 rounded-sm font-body text-sm font-medium py-2.5 btn-min-target text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  style={{ border: "1px solid var(--border-gold-strong)" }}
                >
                  Request Wholesale Quote
                </motion.button>
              </>
            )}
          </div>
        </div>
      </motion.article>

      {quickViewOpen && (
        <Suspense fallback={null}>
          <QuickViewModal product={product} open={quickViewOpen} onClose={() => setQuickViewOpen(false)} />
        </Suspense>
      )}
    </>
  );
};

export default ProductCard;
