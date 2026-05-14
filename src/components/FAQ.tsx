import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are Kleo spices preservative-free?",
    a: "Yes. Every blend is hand-finished using whole, sun-dried ingredients with no artificial preservatives, MSG, or synthetic fillers.",
  },
  {
    q: "Do you ship across South Africa?",
    a: "We deliver nationwide via courier — typically 2 to 4 working days for urban centres. International shipping is available on request.",
  },
  {
    q: "How does the wholesale / reseller program work?",
    a: "Switch to Reseller mode at the top of any page to view 1kg pricing. Submit a quote request and our team will respond with custom rates within 24 hours.",
  },
  {
    q: "Can you create a custom blend for my restaurant?",
    a: "Absolutely. We offer custom blending for orders above 50kg, including private-label packaging. Contact us to start the conversation.",
  },
  {
    q: "What's the shelf life?",
    a: "Sealed jars stay fresh for 24 months. Once opened, store in a cool, dry place and use within 12 months for peak flavor.",
  },
];

const FAQ = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-10"
      >
        <p className="font-display italic text-primary text-sm mb-2">Good Questions</p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground">Frequently Asked</h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-sm bg-background px-5"
            style={{ border: "1px solid var(--border-gold)" }}
          >
            <AccordionTrigger className="font-display text-base text-foreground hover:text-primary py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
