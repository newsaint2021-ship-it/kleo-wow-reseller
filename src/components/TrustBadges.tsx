import { Award, Truck, Leaf, ShieldCheck } from "lucide-react";

const badges = [
  { icon: Award, label: "Restaurant Grade", note: "Used by professional chefs" },
  { icon: Leaf, label: "100% Natural", note: "No fillers, no MSG, no shortcuts" },
  { icon: Truck, label: "Nationwide Delivery", note: "Cape Town to your door" },
  { icon: ShieldCheck, label: "Quality Guaranteed", note: "30-day satisfaction promise" },
];

const TrustBadges = () => (
  <section className="py-12 bg-background border-y" style={{ borderColor: "var(--border-gold)" }}>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-3 text-left">
            <div
              className="w-11 h-11 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0"
              style={{ border: "1px solid var(--border-gold-strong)" }}
            >
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display text-sm text-foreground leading-tight">{b.label}</p>
              <p className="font-body text-xs text-muted-foreground leading-tight mt-0.5">{b.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
