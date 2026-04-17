"use client";

import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2" />

      {/* 🔥 FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -100, 0],
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

      <div className="relative z-10 text-center px-6">
        
        {/* 🔥 404 BIG TEXT */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-[120px] md:text-[180px] font-extrabold tracking-tight bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* 🔥 MESSAGE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/70 mb-8"
        >
          The page you’re looking for doesn’t exist.
        </motion.p>

        {/* 🔥 ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:scale-105 transition"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>

        {/* 🔥 HELPER LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-sm text-white/40"
        >
          Try visiting:
          <div className="mt-2 flex justify-center gap-4 flex-wrap">
            <button onClick={() => navigate("/services")} className="hover:text-white transition">
              Services
            </button>
            <button onClick={() => navigate("/pricing")} className="hover:text-white transition">
              Pricing
            </button>
            <button onClick={() => navigate("/contact")} className="hover:text-white transition">
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;