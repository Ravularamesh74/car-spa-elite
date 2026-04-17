"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone } from "lucide-react";

const pricingData = [
  { service: "Mini / Hatchback Wash", min: 249, max: 2499, category: "wash" },
  { service: "Sedan Wash", min: 299, max: 2699, category: "wash" },
  { service: "SUV Wash", min: 349, max: 2990, category: "wash" },
  { service: "Interior Spa", min: 1199, max: 1599, category: "interior" },
  { service: "Rubbing & Polish", min: 1499, max: 2499, category: "interior" },
  { service: "Ceramic Coating", min: 5999, max: 15999, category: "coating", popular: true },
  { service: "PPF Coating", min: 15000, max: 150000, category: "coating" },
  { service: "Graphene Coating", min: 8999, max: 25999, category: "coating" },
];

const categories = ["all", "wash", "interior", "coating"];

const PricingSection = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? pricingData
      : pricingData.filter((p) => p.category === active);

  return (
    <section className="py-28 relative overflow-hidden">
      
      {/* 🔥 background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-primary">
            Pricing
          </span>

          <h2 className="text-5xl font-extrabold mt-4">
            Transparent{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Charges
            </span>
          </h2>
        </div>

        {/* 🔥 FILTERS */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition ${
                active === c
                  ? "bg-primary text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-primary/30 to-transparent"
            >
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative">

                {/* 🔥 popular badge */}
                {item.popular && (
                  <div className="absolute top-4 right-4 text-xs bg-primary text-black px-2 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.service}
                </h3>

                <div className="text-2xl font-bold text-primary mb-4">
                  ₹{item.min.toLocaleString()} — ₹{item.max.toLocaleString()}
                </div>

                <motion.a
                  href="https://wa.me/919640059577"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;