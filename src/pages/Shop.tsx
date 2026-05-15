import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";

const Shop = () => (
  <div className="min-h-screen bg-background">
    <SEO title="Shop Spices & Herbs | Kleo Spice & Herbs" description="22 hand-finished spice blends and single origin herbs. Switch to Reseller mode for wholesale pricing." path="/shop" />
    <Header />
    <main className="pt-32">
      <div className="container mx-auto px-4 mb-6">
        <p className="font-display italic text-primary text-sm">The Kleo Catalog</p>
        <h1 className="font-display text-4xl sm:text-5xl text-foreground">Shop All Spices & Herbs</h1>
        <p className="font-body text-muted-foreground mt-3 max-w-xl">
          22 hand-finished blends and single spices. Switch to Reseller mode for wholesale pricing.
        </p>
      </div>
      <ProductGrid />
    </main>
    <Footer />
  </div>
);

export default Shop;
