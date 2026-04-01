"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function PageHero({ title, description, imageSrc }: PageHeroProps) {
  return (
    <section className="relative w-full pt-24 pb-14 md:pt-40 md:pb-28 flex items-center bg-[#E5ECE7] overflow-hidden">
      
      {/* Background Image - Right aligned (desktop only) */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full z-0 hidden md:block">
        <Image src={imageSrc} alt={title} fill className="object-cover object-left" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E5ECE7] via-[#E5ECE7]/80 to-transparent w-full md:w-1/2"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A3626] font-bold leading-[1.1] mb-4 md:mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-[#1A3626]/80 font-body text-sm md:text-lg max-w-md leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
