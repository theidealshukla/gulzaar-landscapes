"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

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

      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Abstract background decorative shape */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  Let's Build Something <br />
                  <span className="text-accent italic">Beautiful</span>
                </h2>
                <p className="font-body text-secondary text-lg max-w-md leading-relaxed">
                  We'd love to hear about your vision. Fill out the form or reach us directly using the details below.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream border border-border rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-primary mb-2">Visit Us</h4>
                    <p className="font-body text-secondary/80 text-sm leading-relaxed">
                      Apollo DB City, Nipania,<br />
                      Indore – 452010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream border border-border rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-primary mb-2">Call Us</h4>
                    <p className="font-body text-secondary/80 text-sm leading-relaxed">
                      +91 8770897676<br />
                      Mon-Sat: 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream border border-border rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-primary mb-2">Email Us</h4>
                    <p className="font-body text-secondary/80 text-sm leading-relaxed">
                      business@gulzaarlandscapes.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-card relative">
              <h3 className="font-heading text-3xl font-bold text-primary mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body text-xs font-semibold text-primary uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm font-body text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-xs font-semibold text-primary uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm font-body text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body text-xs font-semibold text-primary uppercase tracking-widest">
                    Service Required
                  </label>
                  <select className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm font-body text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 appearance-none">
                    <option value="">Select a service...</option>
                    <option value="farmhouse">Farmhouse Garden</option>
                    <option value="lawn">Lawn Renovation</option>
                    <option value="terrace">Balcony / Terrace Garden</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-body text-xs font-semibold text-primary uppercase tracking-widest">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm font-body text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-body text-sm font-semibold tracking-wide rounded-xl hover:bg-accent-light hover:shadow-card-hover transition-all duration-300"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
