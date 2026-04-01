"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import { Play, Check, Star, Leaf, RefreshCw, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A3626] font-body">

      {/* Fixed Navbar */}
      <Navbar />

      {/* --- 1. PREMIUM HERO SECTION --- */}
      <HeroSection />

      {/* --- 2. WHY CHOOSE US SECTION --- */}
      <section id="about" className="pt-40 pb-20 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-[#1A3626]"
        >
          Why Choose Gulzaar Landscapes?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          We're passionate about bringing your story to life through sustainable, meticulously designed gardens and expert landscape architecture.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Features */}
          <div className="flex-1 flex flex-col gap-12 text-left">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Innovative Design</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Customized plans blending rustic charm with modern comfort, uniquely designed off the canvas of your space.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Meticulous Execution</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Scrupulous attention to detail from soil preparation and turf selection to intricate hardscaping.
              </p>
            </motion.div>
          </div>

          {/* Center Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-sm relative aspect-square group"
          >
            <Image 
              src="/images/greennest/why_choose_center.png" 
              alt="Potted Monstera Plant" 
              fill 
              className="object-contain group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft backdrop glow to enhance depth */}
            <div className="absolute inset-0 bg-[#1A3626]/5 blur-3xl rounded-full scale-75 -z-10 group-hover:scale-95 transition-transform duration-700"></div>
          </motion.div>

          {/* Right Features */}
          <div className="flex-1 flex flex-col gap-12 text-left md:text-right md:items-end">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-3 md:items-end w-full group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Sustainable Practices</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed md:text-right">
                Eco-friendly solutions and native plant selections ensuring beautiful, healthy lawns year-round.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col gap-3 md:items-end w-full group">
              <div className="w-12 h-12 rounded-2xl bg-[#E5ECE7] flex items-center justify-center text-[#1A3626] group-hover:bg-[#1A3626] group-hover:text-white transition-colors duration-300 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1A3626]">Ongoing Maintenance</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed md:text-right">
                Regular upkeep schedules tailored to your garden to keep your landscape looking breathtaking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. DUAL BANNER CATEGORIES --- */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row gap-8 overflow-hidden">
        
        {/* Farmhouse Banner */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex-1 relative rounded-[2rem] overflow-hidden group h-[300px] md:h-[400px] shadow-lg hover:shadow-2xl transition-shadow duration-700">
          <Image 
            src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200" 
            alt="Farmhouse Garden" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-10">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white/20 text-white backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider rounded-md w-max mb-4 shadow-sm">
              Expansive
            </motion.span>
            <h3 className="text-3xl font-heading text-white font-bold mb-3 drop-shadow-md">Farmhouse Gardens</h3>
            <p className="text-white/90 text-sm max-w-xs mb-8 drop-shadow-sm font-body">
              Bring the rustic charm with our meticulously designed, expansive farmhouse garden landscapes.
            </p>
            <Link href="/services" className="bg-white text-[#1A3626] rounded-full px-6 py-2.5 text-sm font-semibold w-max hover:bg-white/90 transition-all block text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Terrace Banner */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex-1 relative rounded-[2rem] overflow-hidden group h-[300px] md:h-[400px] shadow-lg hover:shadow-2xl transition-shadow duration-700">
          <Image 
            src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1200" 
            alt="Terrace Garden" 
            fill 
            className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-10">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white/20 text-white backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider rounded-md w-max mb-4 shadow-sm">
              Urban
            </motion.span>
            <h3 className="text-3xl font-heading text-white font-bold mb-3 drop-shadow-md">Balcony & Terrace</h3>
            <p className="text-white/90 text-sm max-w-xs mb-8 drop-shadow-sm font-body">
              Connect with nature in even the smallest urban living spaces with targeted layouts.
            </p>
            <Link href="/services" className="bg-white text-[#1A3626] rounded-full px-6 py-2.5 text-sm font-semibold w-max hover:bg-white/90 transition-all block text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              Explore More
            </Link>
          </div>
        </motion.div>

      </section>

      <ServicesSection />

      {/* --- 5. MAKEOVER BANNER --- */}
      <section className="w-full bg-[#E5ECE7] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-xl text-left">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-[#1A3626]">
              Ready for a Garden Makeover?
            </h2>
            <p className="text-lg text-[#1A3626]/80 mb-8 max-w-md font-body">
              Book your free consultation today and let us engineer a beautiful ecosystem tailored to your lifestyle.
            </p>
            <Link href="/contact" className="bg-[#1A3626] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#254d36] hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg inline-block active:scale-95">
              Get a Free Estimate
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full md:w-1/2 h-[300px] md:h-[400px] mt-10 md:mt-0 relative hidden md:block">
            {/* Some decorative plant images could stay here */}
            <Image 
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800" 
              alt="Decorative plants" 
              fill 
              className="object-contain object-right drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* --- 6. TESTIMONIALS --- */}
      <section className="py-24 bg-white w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-16 text-[#1A3626]">
          Our Happy Customers Say It Best
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Testimonial 1 */}
          <div className="flex-1 bg-gray-50 rounded-[2rem] p-8 flex flex-col sm:flex-row items-center gap-8 text-left border border-gray-100">
            <div className="relative w-32 h-40 sm:w-48 sm:h-56 rounded-2xl overflow-hidden flex-shrink-0">
              <Image src="/images/greennest/testimonial_1.png" alt="Customer" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#1A3626] text-sm md:text-base leading-relaxed mb-6 font-medium italic">
                "Every landscape tells a unique story. Gulzaar Landscapes transformed our balcony into a lush oasis. Their meticulous attention to detail and sustainable practices are truly unmatched!"
              </p>
              <div className="flex text-[#F5B841] mb-2">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-bold text-[#1A3626]">Priya S.</p>
              <p className="text-sm text-gray-500">Balcony Garden Client</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-1 bg-gray-50 rounded-[2rem] p-8 flex flex-col sm:flex-row items-center gap-8 text-left border border-gray-100">
            <div className="relative w-32 h-40 sm:w-48 sm:h-56 rounded-2xl overflow-hidden flex-shrink-0">
              <Image src="/images/greennest/testimonial_2.png" alt="Customer" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#1A3626] text-sm md:text-base leading-relaxed mb-6 font-medium italic">
                "Our farmhouse garden feels like a private sanctuary now. The team expertly blended rustic charm with modern comfort. Truly breathtaking landscapes that inspire."
              </p>
              <div className="flex text-[#F5B841] mb-2">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-bold text-[#1A3626]">Rahul M.</p>
              <p className="text-sm text-gray-500">Farmhouse Design Client</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-[#1A3626]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </section>

      {/* --- 7. NEWSLETTER CTA --- */}
      <section id="contact" className="w-full relative py-28 flex flex-col items-center justify-center text-center">
        <Image 
          src="/images/greennest/newsletter_bg.png" 
          alt="Lush green wall" 
          fill 
          className="object-cover brightness-50"
        />
        <div className="relative z-10 px-6 max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-white">
            Let's Discuss Your Project
          </h2>
          <p className="text-white/90 mb-10">
            Leave your email and our design experts will get in touch with you shortly to schedule a site visit.
          </p>
          <form className="flex flex-col sm:flex-row items-center max-w-lg mx-auto bg-white p-1.5 rounded-full">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-6 py-3 bg-transparent outline-none text-[#1A3626] rounded-full"
              required
            />
            <button type="submit" className="w-full sm:w-auto bg-[#1A3626] text-white px-8 py-3 rounded-full font-medium sm:ml-2 hover:bg-[#254d36] transition-colors whitespace-nowrap">
              Contact Us
            </button>
          </form>
        </div>
      </section>

      {/* --- 8. BLOG / ARTICLES --- */}
      <section className="py-24 bg-white w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-[#1A3626]">
          From the Gulzaar Blog
        </h2>
        <p className="text-gray-600 mb-16">
          Discover landscaping tips, ideas, and our latest outdoor features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
          {[
            { tag: "Inspiration", title: "Gardening Ideas for Farmhouses Plans", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600" },
            { tag: "Tips & Tricks", title: "Transform Your Space with Balcony Gardens", img: "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=600" },
            { tag: "Design", title: "Unique Rooftop Terrace Garden Ideas", img: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=600" },
          ].map((blog, i) => (
            <div key={i} className="flex flex-col border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image src={blog.img} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">{blog.tag}</span>
                <h3 className="font-heading text-xl font-bold text-[#1A3626] mb-3 leading-snug">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  Learn how to turn your outdoor space into an incredible opportunity to connect with nature through careful design...
                </p>
                <Link href="#" className="bg-[#1A3626] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#254d36] transition-colors w-max uppercase tracking-wider">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link href="/projects" className="inline-block mt-4 border-2 border-gray-200 text-[#1A3626] font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-full hover:border-[#1A3626] transition-colors">
          View All Projects
        </Link>
      </section>

      <Footer />

    </main>
  );
}
