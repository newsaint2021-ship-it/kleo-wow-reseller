import { motion } from "framer-motion";
import slide2 from "@/assets/hero/slide-2-family.jpg";
import slide3 from "@/assets/hero/slide-3-chef.jpg";
import slide4 from "@/assets/hero/slide-4-dining.jpg";

const tiles = [
  { img: slide3, label: "Restaurant Grade", caption: "Trusted by professional kitchens." },
  { img: slide2, label: "Family First", caption: "Heritage-driven, table-ready blends." },
  { img: slide4, label: "From Cape Town", caption: "African flavor, served worldwide." },
];

const LifestyleStrip = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-left mb-10 max-w-2xl">
        <p className="font-display italic text-primary text-sm mb-2">A Life Seasoned</p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground">Where Kleo Belongs</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {tiles.map((t, i) => (
          <motion.figure
            key={t.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer"
          >
            <img
              src={t.img}
              alt={t.label}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }}
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-display italic text-primary text-xs mb-1">{t.label}</p>
              <p className="font-display text-xl leading-tight">{t.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default LifestyleStrip;
