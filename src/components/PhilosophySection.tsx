"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tags = ["GROW", "BREATHE", "BLOOM", "THRIVE", "BALANCE", "WILD", "ROOTS"];

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Tags + Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="tag-pill"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Description */}
            <p className="font-body text-secondary text-base md:text-lg leading-relaxed max-w-md">
              We turn outdoor spaces into captivating havens. Through expert design, precise 
              development, and dedicated maintenance, we give you back the sanctuary you deserve.
              Relax. We handle the greenery.
            </p>
          </motion.div>

          {/* Right - Large Typography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-section-title md:text-[3.5rem] lg:text-[4rem] font-bold text-primary leading-[1.05] tracking-tight">
              YOUR GARDEN,
              <br />
              <span className="text-gradient">EFFORTLESSLY</span>
              <br />
              DESIGNED FOR 
              <br />
              <span className="text-gradient italic">LIFE</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
