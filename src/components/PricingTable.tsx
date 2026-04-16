import { motion } from "framer-motion";

const pricingData = [
  { service: "Car Inspection / Diagnostics", min: "₹399", max: "₹599" },
  { service: "Mini / Hatchback Car Wash", min: "₹249", max: "₹2,499" },
  { service: "Sedan Car Wash", min: "₹299", max: "₹2,699" },
  { service: "SUV & Premium Car Wash", min: "₹349", max: "₹2,990" },
  { service: "Car Interior Spa", min: "₹1,199", max: "₹1,599" },
  { service: "Car Rubbing & Polish", min: "₹1,499", max: "₹2,499" },
  { service: "Car Dry Cleaning", min: "₹1,599", max: "₹2,599" },
  { service: "Ceramic Coating", min: "₹5,999", max: "₹15,999" },
  { service: "PPF Coating", min: "₹15,000", max: "₹1,50,000" },
  { service: "Graphene Coating", min: "₹8,999", max: "₹25,999" },
  { service: "Teflon Coating", min: "₹2,999", max: "₹5,999" },
  { service: "Silencer Coating", min: "₹1,299", max: "₹1,699" },
];

const PricingTable = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">Transparent Pricing</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            Service <span className="text-gradient-gold">Charges</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">Approximate charges in Hyderabad</p>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-lg border border-border overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-card/80 border-b border-border px-6 py-4">
            <span className="font-heading text-sm uppercase tracking-wider text-primary font-semibold">Service</span>
            <span className="font-heading text-sm uppercase tracking-wider text-primary font-semibold text-center">Min Price</span>
            <span className="font-heading text-sm uppercase tracking-wider text-primary font-semibold text-right">Max Price</span>
          </div>
          {pricingData.map((row, i) => (
            <div
              key={row.service}
              className={`grid grid-cols-3 px-6 py-3.5 text-sm font-body ${
                i % 2 === 0 ? "bg-card/40" : "bg-card/20"
              } border-b border-border/50 hover:bg-primary/5 transition-colors`}
            >
              <span className="text-foreground">{row.service}</span>
              <span className="text-muted-foreground text-center">{row.min}</span>
              <span className="text-primary font-semibold text-right">{row.max}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;
