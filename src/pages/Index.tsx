import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ProductGrid from "@/components/ProductGrid";
import LifestyleStrip from "@/components/LifestyleStrip";
import AboutSection from "@/components/AboutSection";
import RecipeInspiration from "@/components/RecipeInspiration";
import RestaurantPartners from "@/components/RestaurantPartners";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Kleo Spice & Herbs — Premium South African Spices | Time to Wow"
      description="Cape Town–crafted spice blends and single origin herbs. From family kitchens to professional restaurants — discover Kleo's resilient flavor."
      path="/"
    />
    <Header />
    <main>
      <HeroSection />
      <TrustBadges />
      <ProductGrid />
      <LifestyleStrip />
      <AboutSection />
      <RecipeInspiration />
      <RestaurantPartners />
      <Testimonials />
      <InstagramGallery />
      <FAQ />
      <Newsletter />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
