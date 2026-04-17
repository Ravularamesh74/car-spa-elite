"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import beforeAfter from "@/assets/before-after.jpg";
import serviceWash from "@/assets/service-wash.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceEngine from "@/assets/service-engine.jpg";
import servicePolish from "@/assets/service-polish.jpg";

const images = [
  { src: beforeAfter, alt: "Before & After Detailing", span: "md:col-span-2", type: "before-after" },
  { src: serviceWash, alt: "High Pressure Wash" },
  { src: serviceInterior, alt: "Interior Steam Clean" },
  { src: serviceCeramic, alt: "Ceramic Coating" },
  { src: serviceEngine, alt: "Engine Bay Detail" },
  { src: servicePolish, alt: "Hand Polish", span: "md:col-span-2" },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = () => setActiveIndex((prev) => (prev! + 1) % images.length);
  const prev = () => setActiveIndex((prev) => (prev! - 1 + images.length) % images.length);

  return (
    <section className="py-28 relative overflow-hidden">
      
      {/* 🔥 background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary">
            Portfolio
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4">
            Stunning{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              className={`relative cursor-pointer overflow-hidden rounded-xl group ${img.span || ""}`}
              onClick={() => setActiveIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-sm tracking-widest text-white">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50"
          >
            {/* close */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X />
            </button>

            {/* image */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex].src}
              alt=""
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-h-[80vh] rounded-xl"
            />

            {/* navigation */}
            <button
              onClick={prev}
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={next}
              className="absolute right-6 text-white"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;