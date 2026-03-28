"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left - Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1000&auto=format&fit=crop"
                alt="Beautiful but unkept garden space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            </motion.div>
            
            {/* Background Blob/Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[80px] -z-10" />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-xs font-body font-bold text-accent tracking-widest uppercase mb-6">
                The Disconnect
              </span>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary leading-[1.1] mb-6">
                Your outdoor space shouldn't feel like an <span className="text-accent italic">afterthought.</span>
              </h2>
              
              <p className="font-body text-base md:text-lg text-secondary leading-relaxed mb-8">
                Does your yard feel uninspired, chaotic, or simply too overwhelming to maintain? 
                When your surroundings lack harmony, you miss out on the ultimate place meant for 
                peace, connection, and relaxation.
              </p>

              <div className="space-y-4 font-body text-secondary text-sm md:text-base">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p>A bare, neglected lawn lowers your home’s value and warmth.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p>Empty balconies turn into wasted potential instead of personal retreats.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p>Poorly maintained plants create stress rather than serenity.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
