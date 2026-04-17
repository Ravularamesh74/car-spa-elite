"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  CalendarCheck,
  Car,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Online",
    desc: "Schedule via WhatsApp or website.",
  },
  {
    icon: Car,
    title: "We Come to You",
    desc: "Doorstep service with pro equipment.",
  },
  {
    icon: Sparkles,
    title: "Deep Detail",
    desc: "Steam cleaning + polishing layers.",
  },
  {
    icon: ThumbsUp,
    title: "Pristine Finish",
    desc: "Showroom-level shine guaranteed.",
  },
];

const StepCard = ({ step, i, progress }: any) => {
  const scale = useTransform(progress, [i * 0.25, (i + 1) * 0.25], [0.8, 1.1]);
  const opacity = useTransform(progress, [i * 0.25, (i + 1) * 0.25], [0.4, 1]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="relative min-w-[280px] max-w-[280px]"
    >
      <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-primary/40 to-transparent">
        
        {/* glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-primary/20 rounded-2xl transition duration-500" />

        <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
          
          {/* icon */}
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-primary/30 mb-4 relative">
            <step.icon className="w-7 h-7 text-primary" />
            
            {/* step number */}
            <div className="absolute -top-2 -right-2 w-6 h-6 text-xs rounded-full bg-primary flex items-center justify-center text-black font-bold">
              {i + 1}
            </div>
          </div>

          <h3 className="text-lg font-bold uppercase text-white mb-2">
            {step.title}
          </h3>

          <p className="text-sm text-white/60 leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden"
    >
      {/* 🔥 ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-black" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary">
            Process
          </span>

          <h2 className="text-5xl md:text-7xl font-extrabold mt-4">
            How It{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        {/* 🔥 PROGRESS LINE */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-primary to-yellow-400"
          />
        </div>

        {/* 🔥 HORIZONTAL SCROLL */}
        <motion.div className="flex gap-8 overflow-x-auto no-scrollbar pb-6">
          {steps.map((step, i) => (
            <StepCard
              key={step.title}
              step={step}
              i={i}
              progress={smoothProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;