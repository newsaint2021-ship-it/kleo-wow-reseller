import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import slide1 from "@/assets/hero/slide-1-meat.jpg";
import slide2 from "@/assets/hero/slide-2-family.jpg";
import slide3 from "@/assets/hero/slide-3-chef.jpg";
import slide4 from "@/assets/hero/slide-4-dining.jpg";

const tiles = [slide1, slide3, slide2, slide4, slide3, slide1];

const InstagramGallery = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <p className="font-display italic text-primary text-sm mb-2">@kleospiceherbs</p>
        <h2 className="font-display text-3xl sm:text-4xl text-foreground">From the Community</h2>
        <p className="font-body text-muted-foreground mt-2 text-sm">
          Tag us in your kitchen. We share our favourites every week.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
        {tiles.map((img, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="relative aspect-square overflow-hidden rounded-sm group"
          >
            <img
              src={img}
              alt={`Kleo community ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default InstagramGallery;
