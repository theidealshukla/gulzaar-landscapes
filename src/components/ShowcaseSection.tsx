"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden">
      {/* Full Width Image with Text Overlay */}
      <div className="relative min-h-[70vh] md:min-h-[85vh] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          alt="Panoramic view of luxury landscape garden with modern villa"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* View Villa Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-6 right-6 md:top-8 md:right-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            View Portfolio
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* Large Typography Overlay */}
        <div className="relative z-10 w-full pb-12 md:pb-16 pt-40">
          <div className="section-container">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(3rem,10vw,8rem)] font-bold text-white leading-[0.9] uppercase tracking-tight"
            >
              Live
              <br />
              Naturally
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
