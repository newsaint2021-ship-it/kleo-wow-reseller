import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ProductGrid from "@/components/ProductGrid";
import LifestyleStrip from "@/components/LifestyleStrip";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <TrustBadges />
      <ProductGrid />
      <LifestyleStrip />
      <AboutSection />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
