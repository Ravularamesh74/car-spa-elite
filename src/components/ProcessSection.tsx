import { motion } from "framer-motion";
import { CalendarCheck, Car, Sparkles, ThumbsUp } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Online", desc: "Schedule via WhatsApp or our website. Pick a time that works for you." },
  { icon: Car, title: "We Come to You", desc: "Our expert team arrives at your doorstep with professional-grade equipment." },
  { icon: Sparkles, title: "Deep Detail", desc: "Steam cleaning, sanitization, polishing — a thorough multi-layer treatment." },
  { icon: ThumbsUp, title: "Pristine Results", desc: "Drive away in a car that looks and feels brand new. Guaranteed satisfaction." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">How It Works</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            Simple <span className="text-gradient-gold">Process</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] glow-line" />
              )}
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center mb-5 bg-card relative">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold flex items-center justify-center font-heading text-xs font-bold text-primary-foreground">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-heading text-lg uppercase font-bold text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
