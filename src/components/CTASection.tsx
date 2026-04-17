import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">Get In Touch</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            Ready For A <span className="text-gradient-gold">Shine?</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-heading text-sm uppercase font-bold text-foreground">Call / WhatsApp</div>
                <a href="tel:+918333965678" className="font-body text-muted-foreground hover:text-primary transition-colors">+91 83339 65678</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-heading text-sm uppercase font-bold text-foreground">Location</div>
                <p className="font-body text-muted-foreground">Serving all of Hyderabad — Doorstep Service</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-heading text-sm uppercase font-bold text-foreground">Working Hours</div>
                <p className="font-body text-muted-foreground">Mon – Sun: 7:00 AM – 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-heading text-sm uppercase font-bold text-foreground">Email</div>
                <p className="font-body text-muted-foreground">info@autoluxdetail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-heading text-xl uppercase font-bold text-foreground mb-6">Book Your Appointment</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <select
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option>Select Service</option>
                <option>Steam Car Wash</option>
                <option>Interior Deep Clean</option>
                <option>Rubbing & Polishing</option>
                <option>Ceramic Coating</option>
                <option>PPF Protection</option>
                <option>Engine Bay Detailing</option>
                <option>Complete Car Detailing</option>
                <option>Bike Wash</option>
                <option>Scooter Wash</option>
                <option>Electric Vehicle Wash</option>
                <option>Other</option>
              </select>
              <select
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option>Select Car Type</option>
                <option>Hatchback</option>
                <option>Sedan</option>
                <option>SUV / MUV</option>
                <option>Luxury / Premium</option>
                <option>Commercial Vehicle</option>
                <option>Bike</option>
                <option>Scooter</option>
                <option>Electric Vehicle</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Any special requests..."
                rows={3}
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-gold font-heading uppercase text-sm tracking-widest font-semibold py-4 rounded-sm text-primary-foreground shadow-gold"
              >
                Get Free Quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
