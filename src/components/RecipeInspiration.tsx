import { motion } from "framer-motion";
import slide1 from "@/assets/hero-screen/hero-1.jpg";
import slide2 from "@/assets/hero-screen/hero-2.jpg";
import slide3 from "@/assets/hero-screen/hero-3.jpg";
import slide4 from "@/assets/hero-screen/hero-4.jpg";

const recipes = [
  { img: slide1, tag: "Sunday Roast", title: "Slow-Roasted Lamb with Rosemary & Garlic", time: "3h 20m" },
  { img: slide3, tag: "Weeknight Hero", title: "Cape Malay Chicken Curry", time: "45m" },
  { img: slide2, tag: "Family Table", title: "Grandmother's Boerewors with BBQ Spice", time: "1h 10m" },
  { img: slide4, tag: "Restaurant Plate", title: "Pan-Seared Beef with Tellicherry Crust", time: "30m" },
];

const RecipeInspiration = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-10">
        <div className="max-w-2xl">
          <p className="font-display italic text-primary text-sm mb-2">From Our Kitchen</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">Recipe Inspiration</h2>
          <p className="font-body text-muted-foreground mt-2 text-sm">
            Cook like Melissa. Four signature Kleo recipes to start with — more in your inbox.
          </p>
        </div>
      </div>

      <div className="-mx-4 px-4 overflow-x-auto scrollbar-none snap-x snap-mandatory">
        <div className="flex gap-4 md:gap-6 pb-2 min-w-min">
          {recipes.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="snap-start flex-shrink-0 w-[78vw] sm:w-[340px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-kleo">
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)" }}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 backdrop-blur text-primary-foreground text-[10px] font-body font-medium uppercase tracking-wider px-2.5 py-1 rounded-sm">
                    {r.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="font-display text-lg leading-tight mb-1">{r.title}</p>
                  <p className="font-body text-xs text-white/70">{r.time} · Easy</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RecipeInspiration;
