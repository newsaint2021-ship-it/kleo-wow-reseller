import { StoreModeContext, useStoreModeProvider } from "@/hooks/useStoreMode";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const storeModeValue = useStoreModeProvider();

  return (
    <StoreModeContext.Provider value={storeModeValue}>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductGrid />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </StoreModeContext.Provider>
  );
};

export default Index;
