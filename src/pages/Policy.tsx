import Header from "@/components/Header";
import Footer from "@/components/Footer";

const content: Record<string, { title: string; body: { h: string; p: string }[] }> = {
  terms: {
    title: "Terms & Conditions",
    body: [
      { h: "Acceptance", p: "By accessing kleospiceherbs you accept these terms in full." },
      { h: "Orders", p: "All orders are subject to availability and acceptance. Pricing is in ZAR and may change without notice." },
      { h: "Liability", p: "Kleo Spice & Herbs is not liable for indirect damages arising from use of our products outside their intended culinary purpose." },
      { h: "Governing Law", p: "These terms are governed by the laws of the Republic of South Africa." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    body: [
      { h: "What We Collect", p: "Name, email, phone, and delivery address — only what we need to fulfil your order or respond to your inquiry." },
      { h: "How We Use It", p: "To process orders, send order updates, and (with consent) share recipes and restock notices." },
      { h: "Sharing", p: "We never sell your data. We share only with delivery partners and payment processors required to complete your order." },
      { h: "Your Rights", p: "Email kleospiceherbs@gmail.com any time to access, correct, or delete your data." },
    ],
  },
  shipping: {
    title: "Shipping Policy",
    body: [
      { h: "Delivery Times", p: "Urban South Africa: 2–4 working days. Rural areas: 3–7 working days. International: by quote." },
      { h: "Costs", p: "Calculated at checkout by weight and destination. Free shipping on retail orders over R750." },
      { h: "Tracking", p: "Tracking number sent by email within 24 hours of dispatch." },
      { h: "Wholesale", p: "Wholesale orders ship via dedicated courier. Lead times confirmed on quote acceptance." },
    ],
  },
  refund: {
    title: "Refund Policy",
    body: [
      { h: "30-Day Promise", p: "If a product arrives damaged or doesn't meet our quality standard, contact us within 30 days for replacement or refund." },
      { h: "How to Claim", p: "Email kleospiceherbs@gmail.com with your order number and a photo of the product." },
      { h: "Wholesale", p: "Wholesale claims handled directly by your account manager. Contact +27 72 983 8166." },
    ],
  },
};

interface Props { slug: keyof typeof content; }

const Policy = ({ slug }: Props) => {
  const page = content[slug];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-display italic text-primary text-sm mb-2">Policies</p>
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-10">{page.title}</h1>
          <div className="space-y-8">
            {page.body.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-xl text-foreground mb-2">{s.h}</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground mt-12">
            Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long" })}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;
