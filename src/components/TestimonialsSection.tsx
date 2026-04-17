"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  { name: "Rajesh K.", car: "BMW 5 Series", text: "Absolutely stunned by the results! My car looks better than when I bought it. The ceramic coating is incredible — water just beads off.", rating: 5 },
  { name: "Priya M.", car: "Hyundai Creta", text: "The steam cleaning technology is amazing. No chemicals, no water waste, and my car interior smells so fresh. Highly recommend their Premium package!", rating: 5 },
  { name: "Arun S.", car: "Mercedes GLC", text: "Professional service at my doorstep. The team was punctual, thorough, and extremely careful with my car. Best detailing service in Hyderabad!", rating: 5 },
  { name: "Deepika R.", car: "Maruti Swift", text: "Great value for money! The Basic package itself was so comprehensive.", rating: 5 },
  { name: "Vikram T.", car: "Toyota Fortuner", text: "Got the PPF coating done. Attention to detail is unmatched.", rating: 5 },
  { name: "Sneha P.", car: "Honda City", text: "Eco-friendly approach and stunning results make this a no-brainer!", rating: 5 },
];

const Card = ({ t, i }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  // 🔥 cursor reactive lighting
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
      style={{ rotateX, rotateY }}
      className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 to-transparent"
    >
      {/* glow layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 bg-primary/20 rounded-2xl" />

      <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary/30">
        
        <Quote className="w-8 h-8 text-primary/40 mb-3" />

        <p className="text-sm text-white/70 leading-relaxed mb-5">
          "{t.text}"
        </p>

        {/* ⭐ rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: t.rating }).map((_, j) => (
            <motion.div
              key={j}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </motion.div>
          ))}
        </div>

        <div className="text-sm font-bold uppercase text-white tracking-wide">
          {t.name}
        </div>
        <div className="text-xs text-white/50">{t.car}</div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      
      {/* 🔥 background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary">
            Testimonials
          </span>

          <h2 className="text-5xl md:text-7xl font-extrabold mt-4">
            What Clients{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* 🔥 AUTO SCROLL GRID */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[320px] flex-shrink-0">
              <Card t={t} i={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;