"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Leaf } from "lucide-react";

const stats = [
  { label: "Happy Clients", value: "720+", filled: 9 },
  { label: "Finished Projects", value: "523+", filled: 8 },
  { label: "Design Consultations", value: "500+", filled: 7 },
  { label: "Cities Served", value: "10+", filled: 6 },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {/* Left - Counter + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-cream rounded-3xl p-8 border border-border"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <span className="font-heading text-6xl md:text-7xl font-bold text-primary">
                1200+
              </span>
              <p className="font-body text-sm text-muted mt-1 tracking-wide">
                Plants nurtured
              </p>
            </motion.div>

            <div className="space-y-3 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span className="font-body text-xs text-muted tracking-wide">
                    {stat.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-[3px]">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <div
                          key={j}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            j < stat.filled ? "bg-primary" : "bg-border"
                          }`}
                          style={{ transitionDelay: `${j * 50}ms` }}
                        />
                      ))}
                    </div>
                    <span className="font-body text-xs font-semibold text-primary ml-2 min-w-[32px] text-right">
                      {stat.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center - Icon + Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
              <Leaf className="w-8 h-8 text-accent" />
            </div>
            <p className="font-body text-secondary text-base leading-relaxed">
              <span className="font-semibold text-primary">Designers</span>,{" "}
              <span className="font-semibold text-primary">horticulturists</span>,
              and{" "}
              <span className="text-accent font-semibold">sustainability</span>{" "}
              experts working hand in hand.
            </p>
          </motion.div>

          {/* Right - Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop"
              alt="Sustainable plant arrangements by Gulzaar Landscapes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 right-4">
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-body font-semibold text-primary tracking-wide">
                Sustainable Plants
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
