"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  // 🔥 scroll progress
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // 🔥 detect section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 smooth scroll
  const handleClick = (e: any, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* 🔥 TOP PROGRESS BAR */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 origin-left z-50"
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/60 border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <a className="text-2xl font-bold text-primary tracking-wider">
            AutoLux<span className="text-white">Detail</span>
          </a>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-sm uppercase tracking-wider transition ${
                    active === link.href
                      ? "text-primary"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    active === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            ))}

            {/* CTA */}
            <motion.a
              href="https://wa.me/919640059577"
              whileHover={{ scale: 1.08 }}
              className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-3.5 h-3.5" />
              Book Now
            </motion.a>
          </div>

          {/* MOBILE BTN */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* 🔥 MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-2xl uppercase text-white/80 hover:text-primary"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/919640059577"
              whileHover={{ scale: 1.1 }}
              className="mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold flex items-center gap-2"
            >
              <Phone />
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;