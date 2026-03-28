"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const processes = [
  {
    step: "01",
    title: "Design",
    description: "Designing for the senses with a personalized approach and close collaborations. We provide 3D mockups and customized plant selection.",
  },
  {
    step: "02",
    title: "Execution",
    description: "Efficient and smart solutions delivered through skilled craftsmanship and strict quality assurance. Flawless installation guaranteed.",
  },
  {
    step: "03",
    title: "Maintenance",
    description: "Timely and efficient services through customised maintenance plans and expert advice for thriving landscapes year-round.",
  },
  {
    step: "04",
    title: "Consultation",
    description: "Smart consultations for use of materials, creative space optimization, and continuous improvement for your green spaces.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 bg-accent/5 border border-accent/10 rounded-full text-xs font-body font-bold text-accent tracking-widest uppercase mb-6">
              How We Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              A Seamless Journey to
              <br />
              <span className="text-accent italic">Your Perfect Garden</span>
            </h2>
            <p className="font-body text-secondary mb-10 text-lg leading-relaxed">
              We remove the guesswork and stress from landscaping. Our proven three-step 
              method guarantees that from sketch to soil, you are in expert hands.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-body text-sm font-semibold tracking-wide rounded-full hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start Your Project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="space-y-12">
            {processes.map((proc, index) => (
              <div key={proc.step} className="group flex gap-6 md:gap-8 items-start relative">
                {/* Decorator line */}
                {index !== processes.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-border group-hover:bg-accent/50 transition-colors duration-500 hidden md:block" />
                )}
                
                <div className="flex-shrink-0 w-12 h-12 bg-cream border border-border rounded-full flex items-center justify-center font-heading text-xl font-bold text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent z-10">
                  {proc.step}
                </div>
                
                <div className="pb-4">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {proc.title}
                  </h3>
                  <p className="font-body text-secondary/80 leading-relaxed text-sm md:text-base">
                    {proc.description}
                  </p>
                  <ul className="mt-5 space-y-3">
                    <li className="flex items-center gap-2 font-body text-xs text-muted uppercase tracking-widest font-semibold bg-cream w-max px-3 py-1.5 rounded flex-shrink-0">
                      <CheckCircle2 size={14} className="text-accent" /> Premium Quality
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
