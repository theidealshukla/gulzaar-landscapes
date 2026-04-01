"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page before scroll: transparent float with glass. After scroll or other pages: solid white.
  const isGlass = isHome && !isScrolled;

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isGlass
            ? "py-4 bg-transparent"
            : "py-3 bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-44 h-14 block group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Gulzaar Landscapes"
              fill
              className={`object-contain object-left pointer-events-none transition-all duration-300 group-hover:opacity-80 ${
                isGlass && !isMobileOpen ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Center: Glass Pill Navigation (Desktop) */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 ${
              isGlass
                ? "liquid-glass"
                : "bg-gray-100/80"
            }`}
            style={{ fontFamily: "var(--font-body-glass)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isGlass
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-[#1A3626]/80 hover:text-[#1A3626] hover:bg-white"
                } ${pathname === link.href ? (isGlass ? "bg-white/10 text-white" : "bg-white text-[#1A3626] shadow-sm") : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA inside pill */}
            <Link
              href="/contact"
              className={`ml-1 px-5 py-2 text-sm font-semibold rounded-full flex items-center gap-1.5 transition-all duration-300 active:scale-95 ${
                isGlass
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-[#1A3626] text-white hover:bg-[#254d36]"
              }`}
            >
              Get Started
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
          </nav>

          {/* Phone + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Phone (desktop only, kept from brand) */}
            <a
              href="tel:+919876543210"
              className={`hidden lg:flex items-center gap-2 text-sm font-semibold transition-colors group ${
                isGlass ? "text-white hover:text-white/80" : "text-[#1A3626] hover:text-green-600"
              }`}
              style={{ fontFamily: "var(--font-body-glass)" }}
            >
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all group-hover:scale-110 ${
                  isGlass ? "border-white/30" : "border-[#1A3626]/30"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="hidden xl:inline">+91 98765 43210</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden p-2 transition-colors z-50 relative ${
                isGlass && !isMobileOpen ? "text-white" : "text-[#1A3626]"
              }`}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── MOBILE MENU ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-5"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-3xl text-[#1A3626] font-semibold hover:text-[#254d36] transition-colors"
                  style={{ fontFamily: "var(--font-heading-glass)", fontStyle: "italic" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-col items-center gap-5"
            >
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-lg text-[#1A3626]/80 hover:text-[#1A3626] transition-colors"
                style={{ fontFamily: "var(--font-body-glass)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 98765 43210
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="bg-[#1A3626] text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2 active:scale-95 transition-transform"
                style={{ fontFamily: "var(--font-body-glass)" }}
              >
                Get Started
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
