"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "Farmhouse Design", desc: "Transform your farmhouse estate with expansive, nature-inspired layouts that blend rustic charm with modern elegance.", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800" },
  { title: "Theme Garden", desc: "Curated themed gardens — Japanese Zen, English Cottage, or Tropical Paradise — tailored to your aesthetic vision.", img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800" },
  { title: "Terrace Garden", desc: "Maximize your rooftop or terrace with vibrant, layered green spaces designed for relaxation and entertaining.", img: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800" },
  { title: "Balcony Garden", desc: "Compact yet lush balcony transformations that bring nature's serenity to even the smallest urban spaces.", img: "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=800" },
  { title: "Lawn Gardens", desc: "Perfectly manicured lawns with expert turf selection, irrigation design, and year-round maintenance plans.", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800" },
  { title: "Indoor Plants", desc: "Bring life indoors with carefully selected plants that purify air, add beauty, and thrive in your environment.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800" },
  { title: "Hardscaping", desc: "Elegant stone pathways, retaining walls, water features, and outdoor structures built to last a lifetime.", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800" },
  { title: "Maintenance", desc: "Comprehensive year-round garden care — pruning, fertilizing, pest control, and seasonal planting rotations.", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800" },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const current = services[currentIndex];

  return (
    <section id="services" className="py-16 md:py-20 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center bg-transparent z-10 relative">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-[#1A3626]">
        Our Signature Services
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
        We design, create and maintain breathtaking landscapes tailored to your lifestyle.
      </motion.p>

      {/* ═══════════════════════════════════════════
          MOBILE: Horizontal Slider Card
          ═══════════════════════════════════════════ */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Split Card: Image Left + Content Right */}
          <div className="flex h-[220px]">
            {/* Image Half */}
            <div className="w-[45%] relative flex-shrink-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.img}
                    alt={current.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Half */}
            <div className="w-[55%] flex flex-col justify-between p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  {/* Counter */}
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[#1A3626] mb-2 leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-4 flex-1">
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1A3626] hover:bg-[#1A3626] hover:text-white hover:border-[#1A3626] transition-all active:scale-90"
                    aria-label="Previous service"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1A3626] hover:bg-[#1A3626] hover:text-white hover:border-[#1A3626] transition-all active:scale-90"
                    aria-label="Next service"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <Link
                  href="/contact"
                  className="text-[10px] font-semibold text-[#1A3626] uppercase tracking-wider hover:underline"
                >
                  Get Quote →
                </Link>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-1.5 py-3 bg-gray-50/50">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-5 h-1.5 bg-[#1A3626]"
                    : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          DESKTOP: Original Grid Layout
          ═══════════════════════════════════════════ */}
      <div className="hidden md:block">
        {/* Filter Navigation */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="flex items-center justify-center gap-6 lg:gap-10 mb-12 border-b border-gray-200 pb-4 text-sm font-medium">
          <button className="text-[#1A3626] border-b-2 border-[#1A3626] px-2 py-1 whitespace-nowrap">All Services</button>
          <button className="text-gray-500 hover:text-[#1A3626] transition-colors px-2 py-1 whitespace-nowrap">Farmhouse</button>
          <button className="text-gray-500 hover:text-[#1A3626] transition-colors px-2 py-1 whitespace-nowrap">Terrace</button>
          <button className="text-gray-500 hover:text-[#1A3626] transition-colors px-2 py-1 whitespace-nowrap">Lawn & Indoor</button>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group flex flex-col relative bg-white border border-gray-100 rounded-2xl p-4 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1A3626] mb-1 drop-shadow-sm">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>

              {/* Hover Button */}
              <Link href="/contact" className="w-[calc(100%-2rem)] flex justify-center bg-[#1A3626] text-white py-2.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 group-hover:translate-y-0 shadow-lg hover:bg-[#254d36]">
                Request Quote
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
