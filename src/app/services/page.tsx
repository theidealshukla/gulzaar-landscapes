import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Services | Gulzaar Landscapes",
  description: "Explore our expert gardening & landscaping services: Farmhouse Gardens, Lawn Renovation, Balcony Gardens, and ongoing maintenance in Indore.",
};

const processes = [
  {
    step: "01",
    title: "Initial Consultation & Design",
    description: "We begin with understanding your space, requirements, and vision. We provide 3D design mockups and customized plant selection based on local ecology.",
  },
  {
    step: "02",
    title: "Execution & Hardscaping",
    description: "Our horticulturists and builders execute the design flawlessly, from soil preparation and irrigation setup to structural hardscaping elements.",
  },
  {
    step: "03",
    title: "Ongoing Maintenance",
    description: "True gardens grow. We offer regular upkeep schedules to ensure a healthy, vibrant landscape year-round, using eco-friendly practices.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Expert Gardening & Landscaping"
        description="We specialize in creating breathtaking outdoor spaces that showcase the beauty and functionality of nature, from sprawling farmhouse lawns to intimate balcony gardens."
        imageSrc="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Services Grid (reusing home page section) */}
      <div className="-mt-20">
        <ServicesSection />
      </div>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Our Proven Work
                <br />
                <span className="text-accent italic">Process</span>
              </h2>
              <p className="font-body text-secondary mb-10 text-lg">
                Delivering a breathtaking landscape requires meticulous planning, an
                expert eye, and dedicated craftsmanship. Here is how we ensure your
                garden thrives.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-body text-sm font-semibold tracking-wide rounded-full hover:bg-accent-light transition-all duration-300"
              >
                Request a Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="space-y-12">
              {processes.map((proc, index) => (
                <div key={proc.step} className="group flex gap-6 md:gap-8 items-start relative">
                  {/* Decorator line */}
                  {index !== processes.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-border group-hover:bg-accent/50 transition-colors duration-500" />
                  )}
                  
                  <div className="flex-shrink-0 w-12 h-12 bg-cream border border-border rounded-full flex items-center justify-center font-heading text-xl font-bold text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                    {proc.step}
                  </div>
                  
                  <div className="pb-4">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {proc.title}
                    </h3>
                    <p className="font-body text-secondary/80 leading-relaxed text-sm md:text-base">
                      {proc.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2 font-body text-xs text-muted uppercase tracking-widest font-semibold">
                        <CheckCircle2 size={14} className="text-accent" /> Premium Quality
                      </li>
                      <li className="flex items-center gap-2 font-body text-xs text-muted uppercase tracking-widest font-semibold">
                        <CheckCircle2 size={14} className="text-accent" /> Expert Execution
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
