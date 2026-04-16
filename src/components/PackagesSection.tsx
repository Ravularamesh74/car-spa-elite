import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "799",
    original: "999",
    duration: "30-45 min",
    badge: null,
    features: [
      "Full Exterior Steam Wash",
      "Vacuuming of Interior",
      "Dashboard & Door Pads Cleaning",
      "Wheel & Wheel Arch Cleaning",
      "Windshield Cleaning",
      "Tyre Dressing",
      "Full Body Waxing & Polishing",
      "Deodorizing",
    ],
  },
  {
    name: "Standard",
    price: "1,199",
    original: "1,499",
    duration: "45-60 min",
    badge: null,
    features: [
      "Everything in Basic",
      "Anti-Bacterial Steam Treatment",
      "Dashboard Sterilization",
      "AC Vents Sterilization",
      "Seat & Roof Sterilization",
      "Boot Space Sterilization",
      "Full Exterior Waxing & Polishing",
      "Dashboard & Door Polishing",
      "Headlights & Windshield Polishing",
      "Tyre Polishing",
    ],
  },
  {
    name: "Premium",
    price: "2,199",
    original: "2,999",
    duration: "2-3 hrs",
    badge: "Best Selling",
    features: [
      "Everything in Standard",
      "Interior Deep Clean (4 Layers)",
      "Seats Washing & Premium Polish",
      "Total Anti-Bacterial Treatment",
      "Engine Bay Steam Wash & Dressing",
      "Windshield Treatment",
      "Air Pressure Check — All Wheels",
      "Under Body Cleaning",
    ],
  },
  {
    name: "Spadex Pro",
    price: "3,499",
    original: "4,499",
    duration: "4-5 hrs",
    badge: "Ultimate",
    features: [
      "Everything in Premium",
      "Full Body Rubbing & Polishing",
      "Machine Compound Treatment",
      "Paint Correction & Restoration",
      "Leather Conditioning",
      "Scratch Removal",
      "Interior Fragrance Treatment",
      "6-Month Shine Guarantee",
    ],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">Choose Your Package</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            Special <span className="text-gradient-gold">Packages</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Limited period offer! MUVs, XUVs, 6+ seaters & premium cars — ₹300 extra
          </p>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-lg border ${
                pkg.badge === "Best Selling"
                  ? "border-primary/50 shadow-gold"
                  : "border-border"
              } bg-card overflow-hidden group hover:border-primary/30 transition-all`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-gradient-gold px-4 py-1.5">
                  <span className="font-heading text-xs uppercase tracking-wider font-bold text-primary-foreground flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-heading text-lg uppercase font-bold text-foreground">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold text-primary">₹{pkg.price}</span>
                  <span className="font-body text-sm text-muted-foreground line-through">₹{pkg.original}</span>
                </div>
                <div className="font-body text-xs text-muted-foreground mt-1">Duration: {pkg.duration}</div>

                <div className="glow-line w-full my-5" />

                <ul className="space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-body text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="https://wa.me/918333965678"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-6 block text-center font-heading uppercase text-sm tracking-wider font-semibold py-3 rounded-sm transition-all ${
                    pkg.badge === "Best Selling"
                      ? "bg-gradient-gold text-primary-foreground shadow-gold"
                      : "border border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
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

export default PackagesSection;
