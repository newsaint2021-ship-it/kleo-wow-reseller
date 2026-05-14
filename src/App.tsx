import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StoreModeContext, useStoreModeProvider } from "@/hooks/useStoreMode";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Index from "./pages/Index.tsx";
import Shop from "./pages/Shop.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Policy from "./pages/Policy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const storeModeValue = useStoreModeProvider();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreModeContext.Provider value={storeModeValue}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Policy slug="terms" />} />
              <Route path="/privacy" element={<Policy slug="privacy" />} />
              <Route path="/shipping" element={<Policy slug="shipping" />} />
              <Route path="/refund" element={<Policy slug="refund" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppFAB />
          </BrowserRouter>
        </TooltipProvider>
      </StoreModeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
