"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Leaf, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Eco-Conscious Designs",
    description: "Every garden we build prioritizes native plants and sustainable materials, reducing water waste and ongoing maintenance.",
  },
  {
    icon: Leaf,
    title: "Master Horticulturists",
    description: "We don't just 'install plants'. Our team consists of documented plant experts who understand your exact local soil and climate.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Guardianship",
    description: "Our relationship doesn't end after installation. We provide reliable, expert maintenance plans to ensure your garden thrives.",
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background border-t border-border overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-gradient-to-l from-accent/5 to-transparent blur-3xl rounded-full" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-xs font-body font-bold text-accent tracking-widest uppercase mb-6">
            Our Advantage
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Why Partner With
            <br />
            <span className="text-accent italic">Gulzaar Landscapes?</span>
          </h2>
          <p className="font-body text-secondary text-base md:text-lg">
            Because a premium garden requires more than just shovels and seeds. 
            It requires deep expertise, meticulous care, and a vision for the future.
          </p>
        </div>

        <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white p-6 md:p-8 lg:p-10 rounded-[2rem] border border-border shadow-soft group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 w-[85vw] sm:w-[60vw] md:w-auto flex-shrink-0 snap-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cream rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-colors duration-300">
                <reason.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                {reason.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-secondary/80 leading-relaxed md:leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
