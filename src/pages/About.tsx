import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32">
      <div className="container mx-auto px-4 mb-6">
        <p className="font-display italic text-primary text-sm">Empowerment Through Flavor</p>
        <h1 className="font-display text-4xl sm:text-5xl text-foreground">Our Story</h1>
      </div>
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default About;
