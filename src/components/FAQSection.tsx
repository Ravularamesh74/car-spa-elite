"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  { q: "How does steam car washing work?", a: "We use high-pressure steam at 150°C+ to dissolve dirt, grease, and grime..." },
  { q: "How long does the detailing process take?", a: "Basic wash: 30–45 mins. Premium: 2–3 hours. Coatings: 1–2 days." },
  { q: "Is steam cleaning safe for paint?", a: "Yes. It’s gentler than pressure washing and preserves clear coat." },
  { q: "Do you come to my location?", a: "Yes, doorstep service across Hyderabad." },
  { q: "What is ceramic coating?", a: "A protective layer lasting 5+ years with hydrophobic properties." },
  { q: "What is PPF?", a: "Self-healing protective film with 10-year durability." },
  { q: "Extra charges for SUVs?", a: "Yes, ₹300 extra for larger vehicles." },
  { q: "Payment methods?", a: "UPI, cards, cash, net banking supported." },
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const [query, setQuery] = useState("");

  const toggle = (i: number) => {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(query.toLowerCase()) ||
        f.a.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section className="py-28 relative overflow-hidden">
      
      {/* 🔥 background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary">
            Support
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4">
            Frequently{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Asked
            </span>
          </h2>
        </motion.div>

        {/* 🔍 SEARCH */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your question..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white outline-none focus:border-primary"
          />
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIndexes.includes(i);

            return (
              <motion.div
                key={i}
                layout
                className="rounded-xl p-[1px] bg-gradient-to-br from-primary/30 to-transparent"
              >
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                  
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-5 text-left group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-primary transition">
                      {faq.q}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5"
                      >
                        <p className="text-sm text-white/70 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">
            Still have questions?
          </p>

          <button className="px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:scale-105 transition">
            Chat on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;