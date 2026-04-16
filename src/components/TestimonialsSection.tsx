import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh K.", car: "BMW 5 Series", text: "Absolutely stunned by the results! My car looks better than when I bought it. The ceramic coating is incredible — water just beads off.", rating: 5 },
  { name: "Priya M.", car: "Hyundai Creta", text: "The steam cleaning technology is amazing. No chemicals, no water waste, and my car interior smells so fresh. Highly recommend their Premium package!", rating: 5 },
  { name: "Arun S.", car: "Mercedes GLC", text: "Professional service at my doorstep. The team was punctual, thorough, and extremely careful with my car. Best detailing service in Hyderabad!", rating: 5 },
  { name: "Deepika R.", car: "Maruti Swift", text: "Great value for money! The Basic package itself was so comprehensive. My Swift has never looked this clean. Booking was super easy via WhatsApp.", rating: 5 },
  { name: "Vikram T.", car: "Toyota Fortuner", text: "Got the PPF coating done and the engine bay detail. The attention to detail is unmatched. These guys truly love what they do.", rating: 5 },
  { name: "Sneha P.", car: "Honda City", text: "I've tried many car wash services but nothing compares to this. The eco-friendly approach and stunning results make this a no-brainer!", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            What Clients <span className="text-gradient-gold">Say</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <div className="font-heading text-sm font-bold text-foreground uppercase">{t.name}</div>
              <div className="font-body text-xs text-muted-foreground">{t.car}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
