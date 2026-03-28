"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=300&auto=format&fit=crop",
    stars: 5,
    quote:
      "They transformed our backyard into a calm, living retreat. Every detail, from the pathways to the plants, feels alive and intentional.",
    name: "Rajesh Sharma",
    role: "Farmhouse Owner, Indore",
    hasImage: true,
  },
  {
    image: null,
    stars: 5,
    quote:
      "Our space feels completely reborn. The design brought light, texture, and calm. It's like nature finally moved in with us.",
    name: "Priya Mehta",
    role: "Villa Owner",
    hasImage: false,
  },
  {
    image: null,
    stars: 5,
    quote:
      "Gulzaar Landscapes understood our vision perfectly. The terrace garden they created is now our family's favorite space.",
    name: "Anil Joshi",
    role: "Terrace Garden Client",
    hasImage: false,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`rounded-2xl border border-border p-6 flex flex-col ${
                t.hasImage ? "bg-cream" : "bg-white"
              }`}
            >
              {/* Image (first card only) */}
              {t.hasImage && t.image && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={t.image}
                    alt={`Project for ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-sm text-secondary leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading text-base font-bold text-primary">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted mt-0.5">
                    {t.role}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream border border-border flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
