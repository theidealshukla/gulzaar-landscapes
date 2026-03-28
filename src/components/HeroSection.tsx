"use client";

import { motion } from "framer-motion";
import { ArrowDown, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedFloral from "./AnimatedFloral";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2500&auto=format&fit=crop"
          alt="Premium luxury landscape design by Gulzaar"
          fill
          unoptimized
          className="object-cover scale-[1.03]"
          priority
          sizes="100vw"
        />
        {/* Dark elegant vignette/overlay for striking text contrast */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Animated Floral Touches */}
      <AnimatedFloral className="top-1/4 left-[10%] w-32 h-32 md:w-64 md:h-64 text-white opacity-10" delay={0} duration={14} />
      <AnimatedFloral className="bottom-[20%] right-[10%] w-40 h-40 md:w-80 md:h-80 text-white opacity-10" delay={2} duration={18} />

      {/* Hero Content - Centered Elegance */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 mt-8 md:mt-20 flex flex-col items-center text-center">
        
        {/* Micro-heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
            <Leaf size={16} className="text-accent drop-shadow-md" />
          </motion.div>
          <span className="font-body text-xs md:text-sm font-bold tracking-[0.2em] text-white/90 uppercase">
            Transform Your Environment
          </span>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
            <Leaf size={16} className="text-accent drop-shadow-md" />
          </motion.div>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] text-white font-bold leading-[1.05] tracking-tight mb-6 md:mb-8 drop-shadow-lg"
        >
          Art of the <br className="hidden md:block" />
          <span className="italic text-accent drop-shadow-none">Landscape</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 font-body text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed mb-10 md:mb-12 drop-shadow-md font-light px-2"
        >
          Gulzaar engineers breathtaking outdoor sanctuaries. From elite farmhouse estates to intimate urban terraces, we bring nature's poetry into your everyday life.
        </motion.p>

        {/* Call to Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto relative px-6 py-3 md:px-8 md:py-4 bg-accent text-white font-body text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full overflow-hidden transition-all hover:scale-105 text-center flex justify-center items-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Consultation
              <ArrowDown size={14} className="-rotate-90 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4 w-3.5 h-3.5" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          
          <Link
            href="/projects"
            className="group w-full sm:w-auto relative px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-body text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full transition-all hover:bg-white/20 text-center flex justify-center items-center"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-body text-[10px] text-white/60 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
