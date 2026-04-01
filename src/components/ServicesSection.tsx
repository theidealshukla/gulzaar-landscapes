"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { title: "Farmhouse Design", desc: "Expansive natural elegance", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800" },
  { title: "Theme Garden", desc: "Curated specific aesthetics", img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800" },
  { title: "Terrace Garden", desc: "Vibrant patio living zones", img: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800" },
  { title: "Balcony Garden", desc: "Intimate personal retreats", img: "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=800" },
  { title: "Lawn Gardens", desc: "Manicured green carpets", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800" },
  { title: "Indoor Plants", desc: "Bring nature inside", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800" },
  { title: "Hardscaping", desc: "Stone pathways & features", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800" },
  { title: "Maintenance", desc: "Year-long garden upkeep", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center bg-transparent z-10 relative">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="font-heading text-4xl md:text-5xl font-semibold mb-3 text-[#1A3626]">
        Our Signature Services
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-600 mb-10 max-w-2xl mx-auto">
        We design, create and maintain breathtaking landscapes tailored to your lifestyle.
      </motion.p>

      {/* Filter Navigation */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="flex items-center justify-center gap-6 md:gap-10 mb-12 border-b border-gray-200 pb-4 overflow-x-auto text-sm font-medium hide-scrollbar">
        <button className="text-[#1A3626] border-b-2 border-[#1A3626] px-2 py-1 whitespace-nowrap">All Services</button>
        <button className="text-gray-500 hover:text-[#1A3626] transition-colors px-2 py-1 whitespace-nowrap">Farmhouse</button>
        <button className="text-gray-500 hover:text-[#1A3626] transition-colors px-2 py-1 whitespace-nowrap">Terrace</button>
        <button className="text-gray-500 hover:text-[#1A3626] transition-colors px-2 py-1 whitespace-nowrap">Lawn & Indoor</button>
      </motion.div>

      {/* Grid */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
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
    </section>
  );
}
