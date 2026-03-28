"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AnimatedFloral from "./AnimatedFloral";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <AnimatedFloral className="-right-20 -bottom-20 w-64 h-64 md:w-96 md:h-96 text-primary opacity-[0.03]" delay={1} duration={20} />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-semibold text-primary leading-[1.15] mb-6">
            From serene gardens to lush green landscapes, every project we design
            celebrates balance, life, and renewal.
          </h2>

          <p className="font-body text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-2xl">
            Our approach blends design and ecology, turning outdoor spaces into
            living works of art. Every landscape tells a unique story — our passion
            is to bring that story to life.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-body text-sm font-semibold tracking-wide rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group"
          >
            More Details
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
