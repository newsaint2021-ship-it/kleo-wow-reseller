import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <SEO title="Contact Kleo Spice & Herbs | Cape Town" description="Reach Kleo Spice & Herbs for orders, wholesale partnerships, and custom blends. Email kleospiceherbs@gmail.com or call +27 72 983 8166." path="/contact" />
    <Header />
    <main className="pt-32">
      <div className="container mx-auto px-4 mb-6">
        <p className="font-display italic text-primary text-sm">Get in Touch</p>
        <h1 className="font-display text-4xl sm:text-5xl text-foreground">Contact Kleo</h1>
        <p className="font-body text-muted-foreground mt-3 max-w-xl">
          Questions, wholesale inquiries, partnerships — we'd love to hear from you.
        </p>
      </div>
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
