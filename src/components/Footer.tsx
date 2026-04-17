"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Play,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black pt-20 pb-10 border-t border-white/10">
      
      {/* 🔥 background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        {/* 🔥 TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wider text-primary mb-4">
              AutoLux<span className="text-white">Detail</span>
            </h2>

            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Premium eco-friendly car detailing in Hyderabad. Steam technology,
              zero chemicals, showroom-level finish at your doorstep.
            </p>

            {/* 🔥 NEWSLETTER */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <input
                placeholder="Enter email"
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="hover:text-primary transition">Steam Wash</li>
              <li className="hover:text-primary transition">Interior Detail</li>
              <li className="hover:text-primary transition">Polishing</li>
              <li className="hover:text-primary transition">Ceramic Coating</li>
              <li className="hover:text-primary transition">PPF Protection</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["Services", "Pricing", "Gallery", "FAQ", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-primary transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-4 text-white">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9640059577</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Hyderabad — Doorstep Service</span>
              </div>
            </div>

            {/* 🔥 SOCIAL ICONS */}
            <div className="flex gap-3 mt-6">
              {[Globe, MessageCircle, Play].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:border-primary hover:text-primary transition"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-12" />

        {/* 🔥 BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 AutoLuxDetail. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>

      {/* 🔥 STICKY CTA */}
      <motion.a
        href="https://wa.me/919640059577"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-6 right-6 bg-green-500 text-black px-5 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 z-50"
      >
        <MessageCircle className="w-4 h-4" />
        Book Now
      </motion.a>
    </footer>
  );
};

export default Footer;