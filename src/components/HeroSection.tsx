"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlurText from "./BlurText";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "1000px" }}
    >
      {/* ─── Background Media (responsive) ─── */}
      {/* Desktop Video — hidden on mobile */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        src="/images/gifs/Serene_landscape_calm_202604011552.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Mobile Video — visible only on mobile */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover z-0"
        src="/images/gifs/Serene_landscape_calm_202604011602.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ─── Overlays ─── */}
      {/* Darkening overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Bottom gradient for seamless section transition */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{
          height: "300px",
          background: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* ─── Hero Content ─── */}
      <div className="relative z-10 flex flex-col items-center text-center h-full"
        style={{ paddingTop: "150px" }}
      >
        {/* Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-2.5 mb-8"
        >
          <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-body-glass)" }}
          >
            New
          </span>
          <span
            className="text-white/90 text-sm pr-3"
            style={{ fontFamily: "var(--font-body-glass)", fontWeight: 400 }}
          >
            Expert landscaping, reimagined.
          </span>
        </motion.div>

        {/* Main Heading — BlurText animation */}
        <BlurText
          text="The Landscape Your Home Deserves"
          className="text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[0.85] tracking-[-3px] max-w-5xl px-4"
          delay={0.3}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl px-6 text-base md:text-lg leading-relaxed"
          style={{
            fontFamily: "var(--font-body-glass)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Stunning gardens. Breathtaking layouts. Designed with precision,
          crafted by experts. This is landscaping, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Link
            href="/contact"
            className="liquid-glass-strong rounded-full px-7 py-3.5 text-white text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform active:scale-95"
            style={{ fontFamily: "var(--font-body-glass)" }}
          >
            Book a Consultation
            <ArrowUpRight size={16} className="stroke-[2]" />
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors px-4 py-3"
            style={{ fontFamily: "var(--font-body-glass)" }}
          >
            <Play size={16} className="fill-white/80" />
            View Our Work
          </Link>
        </motion.div>

        {/* ─── Trust Bar / Partners at bottom ─── */}
        <div className="mt-auto pb-8 pt-16 w-full flex flex-col items-center">
          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="liquid-glass rounded-3xl px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl w-full mx-4"
          >
            {/* Avatars + Rating */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black bg-gray-200 overflow-hidden relative shadow-sm"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p
                  className="font-medium mt-0.5 text-white/90 text-xs"
                  style={{ fontFamily: "var(--font-body-glass)" }}
                >
                  500+ Happy Clients
                </p>
              </div>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2"
              style={{ fontFamily: "var(--font-body-glass)" }}
            >
              <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                <Check className="w-4 h-4 text-green-400" />
                Free Consultations
              </div>
              <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                <Check className="w-4 h-4 text-green-400" />
                Custom 3D Designs
              </div>
              <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                <Check className="w-4 h-4 text-green-400" />
                1-Year Guarantee
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
