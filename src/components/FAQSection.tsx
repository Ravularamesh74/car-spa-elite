import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does steam car washing work?", a: "We use high-pressure steam at 150°C+ to dissolve dirt, grease, and grime from your car's surface. The steam sanitizes, deodorizes, and cleans simultaneously using only 4-5 liters of RO water — making it 95% more water-efficient than traditional washing." },
  { q: "Is steam cleaning safe for my car's paint?", a: "Absolutely! Steam cleaning is one of the gentlest methods available. Unlike pressure washers that can chip paint, steam uses controlled temperature and minimal pressure, preserving your car's clear coat and finish perfectly." },
  { q: "How long does the detailing process take?", a: "Basic steam wash takes 30-45 minutes. Standard package takes 45-60 minutes. Premium deep cleaning takes 2-3 hours. Spadex Pro with full rubbing & polishing takes 4-5 hours. Ceramic and PPF coatings may take 1-2 days." },
  { q: "Do you come to my location?", a: "Yes! We provide doorstep service across Hyderabad. Our fully equipped mobile unit comes to your home, office, or any location of your choice. No need to drive anywhere." },
  { q: "What is ceramic coating and how long does it last?", a: "Ceramic coating is a liquid polymer that chemically bonds to your car's paint, creating a permanent or semi-permanent layer of protection. Our 9H ceramic coating lasts 5+ years and provides extreme hydrophobic properties, UV protection, and scratch resistance." },
  { q: "What is PPF (Paint Protection Film)?", a: "PPF is an invisible, self-healing thermoplastic urethane film applied to painted surfaces. It protects against stone chips, bug splatters, minor scratches, and UV damage. Our PPF comes with a 10-year warranty." },
  { q: "Are there extra charges for SUVs and larger vehicles?", a: "Yes, for MUVs, Mahindra Thar, XUVs, 6+ seaters, and premium branded cars, there is an additional ₹300 charge on the quoted package prices due to the larger surface area." },
  { q: "What payment methods do you accept?", a: "We accept all major payment methods including cash, UPI (GPay, PhonePe, Paytm), credit/debit cards, and net banking. Payment is collected after service completion." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">Got Questions?</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            Frequently <span className="text-gradient-gold">Asked</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-lg overflow-hidden bg-card/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading text-sm uppercase tracking-wide font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-5 pb-5"
                >
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
