"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Leaf, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = !isHome || isScrolled;

  return (
    <>
      <header className={`z-50 transition-all duration-300 ${isSolid ? 'fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm py-4' : 'absolute top-0 w-full py-6 bg-transparent'}`}>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="relative w-44 h-14 block group">
            <Image 
              src="/logo.png" 
              alt="Gulzaar Landscapes" 
              fill 
              className={`object-contain object-left pointer-events-none transition-all duration-300 group-hover:opacity-80 ${!isSolid ? 'brightness-0 invert' : ''}`}
            />
          </Link>
          
          <nav className={`hidden md:flex items-center gap-8 text-[15px] font-medium font-body transition-colors duration-300 ${isSolid ? 'text-[#1A3626]' : 'text-white/90'}`}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-green-500 hover:-translate-y-0.5 transition-all">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={`hidden md:flex items-center gap-6 transition-colors duration-300 ${isSolid ? 'text-[#1A3626]' : 'text-white'}`}>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-semibold hover:text-green-500 transition-colors group">
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:border-green-500 group-hover:scale-110 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span className="hidden lg:inline">+91 98765 43210</span>
            </a>
            <Link href="/contact" className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 ${isSolid ? 'bg-[#1A3626] text-white hover:bg-[#254d36]' : 'bg-white text-[#1A3626] hover:bg-gray-100'}`}>
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 transition-colors z-50 relative ${isSolid || isMobileOpen ? 'text-[#1A3626]' : 'text-white'}`}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-white/95 flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-3xl font-heading font-semibold text-[#1A3626] hover:text-green-600 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="mt-6 flex flex-col items-center gap-6"
            >
              <a href="tel:+919876543210" className="flex items-center gap-2 text-lg font-semibold text-[#1A3626]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 98765 43210
              </a>
              <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="bg-[#1A3626] text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg active:scale-95 transition-transform">
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
