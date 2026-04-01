"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      <Navbar />
      
      <PageHero
        title="Get In Touch"
        description="Ready to transform your outdoor space? Reach out to schedule a consultation with our expert landscape design team."
        imageSrc="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-14 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="section-container relative z-10">
          {/* Mobile: Compact contact strip + form. Desktop: Side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            
            {/* Contact Details */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-8 md:space-y-12">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                  Let's Build Something <br />
                  <span className="text-accent italic">Beautiful</span>
                </h2>
                <p className="font-body text-secondary text-sm md:text-lg max-w-md leading-relaxed">
                  We'd love to hear about your vision. Fill out the form or reach us directly.
                </p>
              </div>

              {/* Mobile: Horizontal compact strip. Desktop: Stacked */}
              <div className="flex gap-4 overflow-x-auto md:overflow-visible md:flex-col md:gap-8 -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0 hide-scrollbar">
                {[
                  { icon: MapPin, title: "Visit Us", lines: ["Apollo DB City, Nipania,", "Indore – 452010"], href: null },
                  { icon: Phone, title: "Call Us", lines: ["+91 8770897676", "Mon-Sat: 9am - 6pm"], href: "tel:+918770897676" },
                  { icon: Mail, title: "Email Us", lines: ["business@gulzaarlandscapes.com"], href: "mailto:business@gulzaarlandscapes.com" },
                ].map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-[200px] md:w-auto flex items-start gap-3 md:gap-4 group bg-cream/50 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none border border-border md:border-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-cream md:bg-cream border border-border rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm">
                      <item.icon className="text-accent group-hover:text-white w-4 h-4 md:w-5 md:h-5 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base md:text-xl font-bold text-primary mb-1 md:mb-2">{item.title}</h4>
                      {item.lines.map((line, li) => (
                        <p key={li} className="font-body text-secondary/80 text-xs md:text-sm leading-relaxed">
                          {item.href && li === 0 ? (
                            <a href={item.href} className="hover:text-accent transition-colors">{line}</a>
                          ) : line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl border border-border shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 relative">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2 group">
                    <label className="font-body text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest group-focus-within:text-green-700 transition-colors">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-cream/50 border border-border rounded-xl px-4 py-2.5 md:py-3 text-sm font-body text-primary focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2 group">
                    <label className="font-body text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest group-focus-within:text-green-700 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-cream/50 border border-border rounded-xl px-4 py-2.5 md:py-3 text-sm font-body text-primary focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2 group">
                  <label className="font-body text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest group-focus-within:text-green-700 transition-colors">
                    Service Required
                  </label>
                  <select className="w-full bg-cream/50 border border-border rounded-xl px-4 py-2.5 md:py-3 text-sm font-body text-primary focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 appearance-none shadow-sm cursor-pointer">
                    <option value="">Select a service...</option>
                    <option value="farmhouse">Farmhouse Garden</option>
                    <option value="lawn">Lawn Renovation</option>
                    <option value="terrace">Balcony / Terrace Garden</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>

                <div className="space-y-1.5 md:space-y-2 group">
                  <label className="font-body text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest group-focus-within:text-green-700 transition-colors">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-cream/50 border border-border rounded-xl px-4 py-2.5 md:py-3 text-sm font-body text-primary focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none shadow-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-accent text-white font-body text-sm font-semibold tracking-wide rounded-xl hover:bg-[#152c1e] hover:-translate-y-1 hover:shadow-card-hover active:scale-95 transition-all duration-300"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
