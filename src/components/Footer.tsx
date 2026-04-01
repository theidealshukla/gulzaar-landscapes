import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative text-white pt-12 md:pt-20 pb-8 md:pb-10 font-body overflow-hidden mt-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/greennest/footer-bg.jpg" 
          alt="Lush leaves background" 
          fill 
          className="object-cover object-bottom" 
        />
        <div className="absolute inset-0 bg-[#0c1f13]/75" />
      </div>

      {/* Mobile: 2-col compact layout. Desktop: 4-col grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mb-10 md:mb-16">
        
        {/* Logo + Description — full width */}
        <div className="mb-8 md:mb-0 md:float-left md:w-1/2 lg:w-1/2 md:pr-12">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Link href="/" className="relative w-36 md:w-44 h-14 md:h-16 block cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Gulzaar Landscapes Logo" 
                fill 
                className="object-contain object-left brightness-0 invert" 
              />
            </Link>
          </div>
          <p className="text-white/70 text-xs md:text-sm max-w-sm leading-relaxed mb-6 md:mb-8">
            Where Design Meets Nature! We turn outdoor spaces into captivating havens with design, development, and maintenance expertise.
          </p>
          <div className="flex gap-3 md:gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1A3626] hover:border-[#1A3626] hover:scale-110 active:scale-95 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1A3626] hover:border-[#1A3626] hover:scale-110 active:scale-95 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1A3626] hover:border-[#1A3626] hover:scale-110 active:scale-95 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Company + Contact — side by side on mobile */}
        <div className="grid grid-cols-2 gap-6 md:float-right md:w-1/2 lg:w-1/2 md:grid-cols-2">
          <div>
            <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6 tracking-wide">Company</h4>
            <ul className="space-y-2.5 md:space-y-4 text-white/70 text-xs md:text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Tips</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-white/70 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-white/50" />
                <span>Apollo DB City, Nipania,<br/>Indore – 452010</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-white/50" />
                <span>+91 8770897676</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-white/50" />
                <span className="break-all">business@gulzaarlandscapes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="clear-both"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-6 md:pt-8 border-t border-white/10 text-center text-xs md:text-sm text-white/50">
        <p>© Gulzaarlandscapes 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
