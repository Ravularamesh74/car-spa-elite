import { motion } from "framer-motion";
import beforeAfter from "@/assets/before-after.jpg";
import serviceWash from "@/assets/service-wash.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceEngine from "@/assets/service-engine.jpg";
import servicePolish from "@/assets/service-polish.jpg";

const images = [
  { src: beforeAfter, alt: "Before & After Detailing", span: "md:col-span-2" },
  { src: serviceWash, alt: "High Pressure Wash" },
  { src: serviceInterior, alt: "Interior Steam Clean" },
  { src: serviceCeramic, alt: "Ceramic Coating" },
  { src: serviceEngine, alt: "Engine Bay Detail" },
  { src: servicePolish, alt: "Hand Polish", span: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">Our Work</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            Stunning <span className="text-gradient-gold">Results</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-lg group ${img.span || ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-heading text-sm uppercase tracking-widest text-primary">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
