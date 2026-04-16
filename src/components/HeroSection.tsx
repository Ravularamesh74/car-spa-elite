import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroCar} alt="Premium car detailing" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium px-6 py-2 border border-primary/30 rounded-full">
              Hyderabad's #1 Premium Car Care
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] mb-6">
            <span className="text-foreground">Beyond</span>
            <br />
            <span className="text-gradient-gold">Clean & Shine</span>
          </h1>

          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional steam car detailing at your doorstep. Eco-friendly technology using only 4-5 liters of RO water. Zero chemicals. 100% pristine results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/918333965678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-gold font-heading uppercase text-sm tracking-widest font-semibold px-10 py-4 rounded-sm text-primary-foreground shadow-gold flex items-center gap-3"
            >
              <Phone className="w-4 h-4" />
              Book Now — Get 5% OFF
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-heading uppercase text-sm tracking-widest font-medium px-10 py-4 rounded-sm border border-foreground/20 text-foreground hover:border-primary/50 transition-colors"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "5000+", label: "Cars Detailed" },
            { value: "4.9★", label: "Average Rating" },
            { value: "100%", label: "Eco-Friendly" },
            { value: "45min", label: "Quick Service" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-lg p-4">
              <div className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
