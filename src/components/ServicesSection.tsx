import { motion } from "framer-motion";
import servicePolish from "@/assets/service-polish.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceWash from "@/assets/service-wash.jpg";
import servicePpf from "@/assets/service-ppf.jpg";
import serviceEngine from "@/assets/service-engine.jpg";

const services = [
  {
    title: "Steam Car Wash",
    description: "Eco-friendly exterior cleaning using high-pressure steam. Uses only 4-5 liters of RO water — zero chemicals, zero water waste.",
    image: serviceWash,
    features: ["Exterior Steam Wash", "Wheel & Arch Cleaning", "Windshield Cleaning", "Tyre Dressing"],
  },
  {
    title: "Interior Deep Clean",
    description: "Complete sanitization of dashboard, seats, door pads, AC vents, and boot space using medical-grade steam technology.",
    image: serviceInterior,
    features: ["Steam Sanitization", "Vacuum Cleaning", "Dashboard Polish", "AC Vent Treatment"],
  },
  {
    title: "Rubbing & Polishing",
    description: "Machine compound rubbing followed by premium wax polishing to restore your car's showroom-like mirror finish.",
    image: servicePolish,
    features: ["Machine Rubbing", "Compound Treatment", "Wax Polishing", "Paint Restoration"],
  },
  {
    title: "Ceramic Coating",
    description: "9H nano-ceramic shield that provides years of protection against scratches, UV rays, and contaminants with extreme hydrophobic properties.",
    image: serviceCeramic,
    features: ["9H Hardness Shield", "UV Protection", "Hydrophobic Layer", "5+ Year Durability"],
  },
  {
    title: "PPF Protection",
    description: "Invisible paint protection film that shields your car from stone chips, scratches, and road debris while maintaining the original look.",
    image: servicePpf,
    features: ["Self-Healing Film", "Stone Chip Protection", "Invisible Shield", "10 Year Warranty"],
  },
  {
    title: "Engine Bay Detailing",
    description: "Professional steam degreasing and dressing of the engine bay for improved performance and aesthetics.",
    image: serviceEngine,
    features: ["Steam Degreasing", "Component Dressing", "Hose Cleaning", "Corrosion Prevention"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium">What We Offer</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-3 text-foreground">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 shadow-card"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
