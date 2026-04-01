import Image from 'next/image';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative text-white pt-20 pb-10 font-body overflow-hidden mt-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/greennest/footer-bg.jpg" 
          alt="Lush leaves background" 
          fill 
          className="object-cover object-bottom" 
        />
        {/* Dark overlay ensuring perfect text contrast */}
        <div className="absolute inset-0 bg-[#0c1f13]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="relative w-44 h-16 block cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Gulzaar Landscapes Logo" 
                fill 
                className="object-contain object-left brightness-0 invert" 
              />
            </Link>
          </div>
          <p className="text-white/70 text-sm max-w-sm leading-relaxed mb-8">
            Where Design Meets Nature! We turn outdoor spaces into captivating havens with design, development, and maintenance expertise.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1A3626] hover:border-[#1A3626] hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1A3626] hover:border-[#1A3626] hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1A3626] hover:border-[#1A3626] hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide">Company</h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Tips</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-wide">Contact</h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5">📍</span>
              <span>Apollo DB City, Nipania,<br/>Indore – 452010</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+91 8770897676</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>business@gulzaarlandscapes.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        <p>© Gulzaarlandscapes 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
