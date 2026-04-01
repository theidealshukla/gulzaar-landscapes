"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import { Play, Check, Star, Leaf, RefreshCw, ShieldCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Every landscape tells a unique story. Gulzaar Landscapes transformed our balcony into a lush oasis. Their meticulous attention to detail and sustainable practices are truly unmatched!",
    name: "Priya S.",
    role: "Balcony Garden Client",
    img: "/images/greennest/testimonial_1.png",
  },
  {
    quote: "Our farmhouse garden feels like a private sanctuary now. The team expertly blended rustic charm with modern comfort. Truly breathtaking landscapes that inspire.",
    name: "Rahul M.",
    role: "Farmhouse Design Client",
    img: "/images/greennest/testimonial_2.png",
  },
];

const blogs = [
  { tag: "Inspiration", title: "Gardening Ideas for Farmhouse Plans", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600" },
  { tag: "Tips & Tricks", title: "Transform Your Space with Balcony Gardens", img: "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=600" },
  { tag: "Design", title: "Unique Rooftop Terrace Garden Ideas", img: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=600" },
];

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1A3626] font-body">

      {/* Fixed Navbar */}
      <Navbar />

      {/* --- 1. PREMIUM HERO SECTION --- */}
      <HeroSection />

      {/* --- 2. WHY CHOOSE US SECTION --- */}
      <section id="about" className="pt-24 md:pt-40 pb-16 md:pb-20 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-[#1A3626]"
        >
          Why Choose Gulzaar Landscapes?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-base"
        >
          We're passionate about bringing your story to life through sustainable, meticulously designed gardens and expert landscape architecture.
        </motion.p>

        {/* Mobile Layout: Image + Grid */}
        <div className="md:hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-48 h-48 relative mx-auto mb-10"
          >
            <Image src="/images/greennest/why_choose_center.png" alt="Why Choose Us" fill className="object-contain" />
            <div className="absolute inset-0 bg-[#1A3626]/5 blur-3xl rounded-full scale-75 -z-10"></div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 text-left">
            {[
              { icon: Leaf, title: "Innovative Design", desc: "Customized plans blending rustic charm with modern comfort." },
              { icon: Check, title: "Meticulous Execution", desc: "Scrupulous attention from soil prep to intricate hardscaping." },
              { icon: RefreshCw, title: "Sustainable Practices", desc: "Eco-friendly solutions and native plant selections." },
              { icon: ShieldCheck, title: "Ongoing Maintenance", desc: "Regular upkeep schedules tailored to your garden." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * i }} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] shadow-sm">
                  <item.icon className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1A3626]">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-12 lg:gap-8">
          <div className="flex-1 flex flex-col gap-12 text-left">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm"><Leaf className="w-5 h-5" /></div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Innovative Design</h3>
              <p className="text-base text-gray-600 leading-relaxed">Customized plans blending rustic charm with modern comfort, uniquely designed off the canvas of your space.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm"><Check className="w-5 h-5" /></div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Meticulous Execution</h3>
              <p className="text-base text-gray-600 leading-relaxed">Scrupulous attention to detail from soil preparation and turf selection to intricate hardscaping.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="flex-1 w-full max-w-sm relative aspect-square group">
            <Image src="/images/greennest/why_choose_center.png" alt="Why Choose Us" fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#1A3626]/5 blur-3xl rounded-full scale-75 -z-10 group-hover:scale-95 transition-transform duration-700"></div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-12 text-right items-end">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-3 items-end w-full group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm"><RefreshCw className="w-5 h-5" /></div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Sustainable Practices</h3>
              <p className="text-base text-gray-600 leading-relaxed text-right">Eco-friendly solutions and native plant selections ensuring beautiful, healthy lawns year-round.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col gap-3 items-end w-full group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm"><ShieldCheck className="w-5 h-5" /></div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Ongoing Maintenance</h3>
              <p className="text-base text-gray-600 leading-relaxed text-right">Regular upkeep schedules tailored to your garden to keep your landscape looking breathtaking.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. DUAL BANNER CATEGORIES --- */}
      {/* Mobile: Horizontal scroll snap, Desktop: Side-by-side */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 md:py-10 overflow-hidden">
        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-2 hide-scrollbar">
          {[
            { tag: "Expansive", title: "Farmhouse Gardens", desc: "Bring the rustic charm with our meticulously designed farmhouse landscapes.", img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200" },
            { tag: "Urban", title: "Balcony & Terrace", desc: "Connect with nature in the smallest urban living spaces.", img: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1200" },
          ].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] snap-center relative rounded-2xl overflow-hidden h-[220px]">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-6">
                <span className="bg-white/20 text-white backdrop-blur-md px-2.5 py-0.5 text-[10px] uppercase tracking-wider rounded-md w-max mb-2">{item.tag}</span>
                <h3 className="text-2xl font-heading text-white font-bold mb-1.5">{item.title}</h3>
                <p className="text-white/80 text-xs max-w-[200px] mb-4">{item.desc}</p>
                <Link href="/services" className="bg-white text-[#1A3626] rounded-full px-5 py-2 text-xs font-semibold w-max active:scale-95 transition-transform">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex-1 relative rounded-[2rem] overflow-hidden group h-[400px] shadow-lg hover:shadow-2xl transition-shadow duration-700 cursor-pointer">
            <Image src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200" alt="Farmhouse Garden" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-10">
              <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider rounded-md w-max mb-4">Expansive</span>
              <h3 className="text-3xl font-heading text-white font-bold mb-3">Farmhouse Gardens</h3>
              <p className="text-white/90 text-sm max-w-xs mb-8 font-body">Bring the rustic charm with our meticulously designed, expansive farmhouse garden landscapes.</p>
              <Link href="/services" className="bg-white text-[#1A3626] rounded-full px-6 py-2.5 text-sm font-semibold w-max hover:bg-white/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95">Explore Services</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex-1 relative rounded-[2rem] overflow-hidden group h-[400px] shadow-lg hover:shadow-2xl transition-shadow duration-700 cursor-pointer">
            <Image src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1200" alt="Terrace Garden" fill className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-10">
              <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider rounded-md w-max mb-4">Urban</span>
              <h3 className="text-3xl font-heading text-white font-bold mb-3">Balcony & Terrace</h3>
              <p className="text-white/90 text-sm max-w-xs mb-8 font-body">Connect with nature in even the smallest urban living spaces with targeted layouts.</p>
              <Link href="/services" className="bg-white text-[#1A3626] rounded-full px-6 py-2.5 text-sm font-semibold w-max hover:bg-white/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95">Explore More</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesSection />

      {/* --- 5. MAKEOVER BANNER --- */}
      <section className="w-full bg-[#E5ECE7] py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-xl text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 text-[#1A3626]">
              Ready for a Garden Makeover?
            </h2>
            <p className="text-sm md:text-lg text-[#1A3626]/80 mb-6 md:mb-8 max-w-md mx-auto md:mx-0 font-body">
              Book your free consultation today and let us engineer a beautiful ecosystem tailored to your lifestyle.
            </p>
            <Link href="/contact" className="bg-[#1A3626] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm font-medium hover:bg-[#254d36] hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg inline-block active:scale-95">
              Get a Free Estimate
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full md:w-1/2 h-[300px] md:h-[400px] mt-10 md:mt-0 relative hidden md:block">
            <Image src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800" alt="Decorative plants" fill className="object-contain object-right drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* --- 6. TESTIMONIALS --- */}
      <section className="py-16 md:py-24 bg-white w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-16 text-[#1A3626]">
          Our Happy Customers Say It Best
        </h2>

        {/* Mobile: Card slider with arrows */}
        <div className="md:hidden">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative">
            <Quote className="w-8 h-8 text-[#1A3626]/10 mb-3" />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#1A3626] text-sm leading-relaxed mb-4 italic text-left">
                  "{testimonials[testimonialIdx].quote}"
                </p>
                <div className="flex items-center gap-3 text-left">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={testimonials[testimonialIdx].img} alt={testimonials[testimonialIdx].name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[#F5B841] mb-0.5">
                      {[1,2,3,4,5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="font-bold text-[#1A3626] text-sm">{testimonials[testimonialIdx].name}</p>
                    <p className="text-xs text-gray-500">{testimonials[testimonialIdx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className={`rounded-full transition-all ${i === testimonialIdx ? 'w-5 h-1.5 bg-[#1A3626]' : 'w-1.5 h-1.5 bg-gray-300'}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#1A3626] active:scale-90 transition-transform">
                  <ChevronLeft size={14} />
                </button>
                <button onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#1A3626] active:scale-90 transition-transform">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Side by side */}
        <div className="hidden md:flex gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-1 bg-gray-50 rounded-[2rem] p-8 flex flex-row items-center gap-8 text-left border border-gray-100">
              <div className="relative w-48 h-56 rounded-2xl overflow-hidden flex-shrink-0">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#1A3626] text-base leading-relaxed mb-6 font-medium italic">"{t.quote}"</p>
                <div className="flex text-[#F5B841] mb-2">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-bold text-[#1A3626]">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. NEWSLETTER CTA --- */}
      <section id="contact" className="w-full relative py-16 md:py-28 flex flex-col items-center justify-center text-center">
        <Image src="/images/greennest/newsletter_bg.png" alt="Lush green wall" fill className="object-cover brightness-50" />
        <div className="relative z-10 px-6 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 text-white">
            Let's Discuss Your Project
          </h2>
          <p className="text-white/90 mb-6 md:mb-10 text-sm md:text-base">
            Leave your email and our design experts will get in touch with you shortly to schedule a site visit.
          </p>
          <form className="flex flex-col sm:flex-row items-center max-w-lg mx-auto w-full gap-3 sm:gap-0 sm:bg-white sm:p-1.5 sm:rounded-full">
            <input type="email" placeholder="Email Address" className="w-full px-6 py-3.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-white sm:bg-transparent outline-none text-[#1A3626] rounded-full text-sm shadow-lg sm:shadow-none" required />
            <button type="submit" className="w-full sm:w-auto bg-[#1A3626] text-white px-8 py-3.5 sm:px-6 md:px-8 sm:py-2.5 md:py-3 rounded-full text-sm font-medium sm:ml-2 hover:bg-[#254d36] transition-colors whitespace-nowrap shadow-lg sm:shadow-none">
              Contact Us
            </button>
          </form>
        </div>
      </section>

      {/* --- 8. BLOG / ARTICLES --- */}
      <section className="py-16 md:py-24 bg-white w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 text-[#1A3626]">
          From the Gulzaar Blog
        </h2>
        <p className="text-gray-600 mb-8 md:mb-16 text-sm md:text-base">
          Discover landscaping tips, ideas, and our latest outdoor features.
        </p>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-4 hide-scrollbar">
          {blogs.map((blog, i) => (
            <div key={i} className="flex-shrink-0 w-[75vw] snap-center border border-gray-100 rounded-2xl overflow-hidden">
              <div className="relative h-[140px] w-full overflow-hidden">
                <Image src={blog.img} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">{blog.tag}</span>
                <h3 className="font-heading text-base font-bold text-[#1A3626] mb-2 leading-snug">{blog.title}</h3>
                <Link href="#" className="bg-[#1A3626] text-white px-4 py-1.5 rounded-full text-[10px] font-medium hover:bg-[#254d36] transition-colors uppercase tracking-wider">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 text-left mb-12">
          {blogs.map((blog, i) => (
            <div key={i} className="flex flex-col border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image src={blog.img} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">{blog.tag}</span>
                <h3 className="font-heading text-xl font-bold text-[#1A3626] mb-3 leading-snug">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">Learn how to turn your outdoor space into an incredible opportunity to connect with nature through careful design...</p>
                <Link href="#" className="bg-[#1A3626] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#254d36] transition-colors w-max uppercase tracking-wider">Read More</Link>
              </div>
            </div>
          ))}
        </div>

        <Link href="/projects" className="inline-block mt-2 md:mt-4 border-2 border-gray-200 text-[#1A3626] font-bold text-xs md:text-sm uppercase tracking-wider px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:border-[#1A3626] transition-colors">
          View All Projects
        </Link>
      </section>

      <Footer />

    </main>
  );
}
