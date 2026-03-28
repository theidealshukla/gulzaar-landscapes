"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submit
    setEmail("");
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 bg-cream border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* Label */}
          <span className="inline-block px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-xs font-body font-medium text-muted tracking-widest uppercase mb-5">
            Newsletter
          </span>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary leading-tight mb-4">
            Subscribe to our newsletter to get the{" "}
            <span className="text-accent">latest updates</span> on our new
            plants and gardens.
          </h2>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex gap-3 mt-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="flex-1 px-4 py-3 bg-white border border-border rounded-full text-sm font-body text-primary placeholder:text-muted-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-body font-semibold tracking-wide rounded-full hover:bg-accent-light transition-all duration-300 cursor-pointer"
            >
              Subscribe
              <ArrowUpRight size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
