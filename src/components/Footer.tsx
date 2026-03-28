"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "https://instagram.com/gulzaar_landscapes" },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <Link
            href="/"
            className="relative w-32 h-12 md:w-36 md:h-14 cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Gulzaar Landscapes"
              fill
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-secondary hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs text-muted hover:text-primary tracking-widest uppercase transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col items-center">
          <p className="font-body text-xs text-muted tracking-wide">
            All rights reserved &copy; {new Date().getFullYear()} Gulzaar Landscapes
          </p>
        </div>
      </div>
    </footer>
  );
}
