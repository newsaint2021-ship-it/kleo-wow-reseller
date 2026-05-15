import { motion } from "framer-motion";
import { CheckCircle2, Truck, Package, HeartHandshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const benefits = [
  { icon: Package, title: "Bulk Pricing", body: "Tiered wholesale rates from 1kg, with volume discounts above 50kg." },
  { icon: Truck, title: "Reliable Supply", body: "Consistent stock and delivery across South Africa for restaurants and retailers." },
  { icon: HeartHandshake, title: "Account Manager", body: "A dedicated point of contact for forecasting, custom blends, and reorders." },
  { icon: CheckCircle2, title: "Custom Blending", body: "House blends developed to your spec — branded packaging available on request." },
];

const tiers = [
  { name: "Starter", units: "1 – 10 kg", note: "For boutique kitchens & cafés" },
  { name: "Growth", units: "10 – 50 kg", note: "For restaurants & specialty retailers" },
  { name: "Enterprise", units: "50 kg+", note: "Custom pricing, white-label available" },
];

const Wholesale = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Wholesale Spices & Herbs | Kleo Spice & Herbs"
      description="Wholesale and reseller pricing for restaurants, retailers, and chefs. Premium South African blends, bulk supply, and custom formulations from Kleo."
      path="/wholesale"
    />
    <Header />
    <main className="pt-32 pb-20">
      <section className="container mx-auto px-4 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="font-display italic text-primary text-sm">For Restaurants, Retailers & Resellers</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2 mb-4">
            Kleo Wholesale Programme
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl leading-relaxed">
            Restaurant-grade spice blends and single origin herbs, packed for kitchens that move fast.
            Built in Cape Town, trusted by chefs, ready to scale with your menu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/27729838166?text=I%27d%20like%20a%20Kleo%20wholesale%20quote"
              className="inline-flex items-center justify-center rounded-sm bg-kleo-sage text-white font-body text-sm font-medium px-8 py-3 btn-min-target shadow-kleo hover:-translate-y-0.5 transition-transform"
            >
              Request a Quote on WhatsApp
            </a>
            <a
              href="mailto:kleospiceherbs@gmail.com?subject=Kleo%20Wholesale%20Inquiry"
              className="inline-flex items-center justify-center rounded-sm font-body text-sm font-medium px-8 py-3 btn-min-target text-foreground border hover:bg-card transition-colors"
              style={{ borderColor: "var(--border-gold-strong)" }}
            >
              Email Sales Team
            </a>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card rounded-sm p-6 shadow-kleo"
              style={{ border: "1px solid var(--border-gold)" }}
            >
              <b.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display text-lg text-foreground mb-1">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <h2 className="font-display text-3xl text-foreground mb-8">Volume Tiers</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="bg-secondary text-secondary-foreground rounded-sm p-8 shadow-kleo"
              style={{ border: "1px solid var(--border-gold-strong)" }}
            >
              <p className="font-display italic text-primary text-sm">{t.name}</p>
              <p className="font-display text-3xl mt-2">{t.units}</p>
              <p className="font-body text-sm text-secondary-foreground/70 mt-3">{t.note}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-muted-foreground mt-4">
          Pricing scales with volume. All Kleo wholesale orders ship from Cape Town with full traceability.
        </p>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-card rounded-sm p-8 sm:p-12 text-center shadow-kleo-lg" style={{ border: "1px solid var(--border-gold)" }}>
          <p className="font-display italic text-primary text-sm mb-2">Time to Wow</p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">Let's build your menu together.</h2>
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mb-6">
            Tell us your category, monthly volume, and any blends you'd like to develop. We respond within one business day.
          </p>
          <a
            href="mailto:kleospiceherbs@gmail.com?subject=Kleo%20Wholesale%20Inquiry"
            className="inline-flex items-center justify-center rounded-sm bg-secondary text-secondary-foreground font-body text-sm font-medium px-8 py-3 btn-min-target hover:opacity-90 transition-opacity"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Wholesale;
