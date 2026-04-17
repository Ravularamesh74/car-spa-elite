"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const ref = useRef(null);

  // 🔥 scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // 🔥 mouse spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouse = (e: any) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px at ${x}px ${y}px, rgba(255,215,0,0.15), transparent 80%)`
  );

  // 🔥 smooth scroll spring
  const smoothY = useSpring(yBg, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 PARALLAX BACKGROUND */}
      <motion.div style={{ y: smoothY }} className="absolute inset-0">
        <img
          src={heroCar}
          className="w-full h-full object-cover scale-110"
          alt="Premium detailing"
        />
      </motion.div>

      {/* 🔥 DARK + COLOR OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      <motion.div
        style={{ background: spotlight }}
        className="absolute inset-0"
      />

      {/* 🔥 FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block text-xs tracking-[0.4em] uppercase text-primary border border-primary/30 px-6 py-2 rounded-full mb-6"
          >
            Hyderabad’s #1 Premium Detailing
          </motion.span>

          {/* headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6">
            <span className="text-white">Beyond</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Clean & Shine
            </span>
          </h1>

          {/* subtext */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Steam-powered detailing at your doorstep. Eco-friendly. Zero chemicals.
            Showroom finish every time.
          </p>

          {/* 🔥 CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <motion.a
              href="https://wa.me/919640059577"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold flex items-center gap-3 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        {/* 🔥 STATS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "5000+", label: "Cars Detailed" },
            { value: "4.9★", label: "Rating" },
            { value: "95%", label: "Water Saved" },
            { value: "45min", label: "Avg Time" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5"
            >
              <div className="text-2xl font-bold text-primary">
                {s.value}
              </div>
              <div className="text-sm text-white/50 mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔽 scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;