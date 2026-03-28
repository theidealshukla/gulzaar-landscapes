"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Home, TreePine, Flower2, Sun, Sprout, Droplets } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Farmhouse Design",
    description: "Expansive, natural elegance designed specifically for large estate landscapes.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: TreePine,
    title: "Theme Garden",
    description: "Curated gardens based on specific aesthetics like Zen, Tropical, or Mediterranean.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Flower2,
    title: "Terrace Garden",
    description: "Elevate your roof space with vibrant plants and comfortable outdoor living zones.",
    image: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Sun,
    title: "Balcony Garden",
    description: "Transform compact urban balconies into lush, intimate personal retreats.",
    image: "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Sprout,
    title: "Lawn Gardens",
    description: "Lush, perfectly manicured green carpets that breathe life into your exterior.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Droplets,
    title: "Indoor Plants",
    description: "Bring nature inside with expert advice on houseplant selection and care.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-cream relative z-10" id="services">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-xs font-body font-bold text-accent tracking-widest uppercase mb-6">
              Our Expertise
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-[1.1]">
              Expert Solutions for <br />
              <span className="text-secondary italic">Every Green Space</span>
            </h2>
            <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
              We don’t just plant gardens—we engineer ecosystems tailored to your lifestyle. 
              From expansive farmhouses to compact urban balconies, our specialized 
              services ensure your space flourishes year-round.
            </p>
          </div>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[450px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 group-hover:from-black/95">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-accent">
                  <service.icon className="text-white w-6 h-6" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                
                <p className="font-body text-white/80 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-2">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="font-body text-xs font-semibold tracking-widest uppercase text-white hover:text-accent transition-colors duration-300 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  Explore Service
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
