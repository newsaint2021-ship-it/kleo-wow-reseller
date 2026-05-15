import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import { products } from "@/data/products";
import { useStoreMode } from "@/hooks/useStoreMode";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mode } = useStoreMode();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-40 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Product not found</h1>
          <Link to="/shop" className="font-body text-sm text-primary underline">Back to shop</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const isReseller = mode === "reseller";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.name} — ${product.subtitle} | Kleo Spice & Herbs`}
        description={`${product.name}: ${product.subtitle}. ${product.suggestions.slice(0, 2).join(", ")} and more. Crafted in Cape Town by Kleo.`}
        path={`/product/${product.id}`}
        type="product"
      />
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-primary mb-8 btn-min-target"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-malachite rounded-sm flex items-center justify-center shadow-kleo-lg"
              style={{ border: "1px solid var(--border-gold)" }}
            >
              <div className="text-center">
                <p className="font-display italic text-primary text-sm mb-2">Coming Soon</p>
                <p className="font-display text-4xl text-secondary-foreground">{product.name}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="font-display italic text-primary text-sm mb-2">{product.subtitle}</p>
              <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">{product.name}</h1>
              <p className="font-body text-muted-foreground mb-6 text-sm">Category: {product.category}</p>

              <div className="mb-8">
                <p className="font-display text-3xl text-foreground">
                  R{isReseller ? product.wholesalePrice : product.retailPrice}
                  <span className="font-body text-sm text-muted-foreground ml-2">
                    / {isReseller ? product.wholesaleUnit : product.retailUnit}
                  </span>
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-base text-foreground mb-2">Ingredients</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {product.ingredients.join(", ")}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-display text-base text-foreground mb-2">Culinary Pairings</h3>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  {product.suggestions.map((s) => (
                    <li key={s}>— {s}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={
                    isReseller
                      ? `https://wa.me/27729838166?text=${encodeURIComponent(`Wholesale quote for ${product.name}`)}`
                      : "/contact"
                  }
                  className="inline-flex items-center justify-center rounded-sm bg-secondary text-secondary-foreground font-body text-sm font-medium px-8 py-3 btn-min-target hover:opacity-90 transition-opacity"
                >
                  {isReseller ? "Request Wholesale Quote" : "Inquire to Order"}
                </a>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center rounded-sm font-body text-sm font-medium px-8 py-3 btn-min-target text-foreground border hover:bg-card transition-colors"
                  style={{ borderColor: "var(--border-gold-strong)" }}
                >
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>

          {related.length > 0 && (
            <div className="mt-24">
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">You May Also Love</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
