import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Welcome to the Kleo table.",
      description: "Check your inbox for 10% off your first order.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-kleo-deep text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(var(--kleo-emerald)) 0%, transparent 70%)" }}
      />
      <div className="relative container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display italic text-primary text-sm mb-3">Join the Kleo Circle</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-4">
            Receive <span className="text-gold-gradient">10% off</span> your first order.
          </h2>
          <p className="font-body text-white/70 mb-8 text-sm sm:text-base">
            Recipes, restocks, and reseller drops — sent thoughtfully, never spammy.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 backdrop-blur text-white placeholder:text-white/40 font-body text-sm pl-11 pr-4 py-3 rounded-sm btn-min-target focus:outline-none focus:ring-2 focus:ring-primary/40"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-3 btn-min-target hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
