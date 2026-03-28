import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects Portfolio | Gulzaar Landscapes",
  description: "View our recent landscaping masterpieces, from luxury farmhouse gardens to modern terrace and balcony renovations.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      
      <PageHero
        title="Our Masterpieces"
        description="Witness the harmony between nature and architecture. Whether balcony plants, home gardens, or exquisite lawns, we deliver breathtaking results."
        imageSrc="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Projects Grid Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Featured Works <br />& Completed Projects
              </h2>
              <p className="font-body text-secondary text-lg">
                Our portfolio spans diverse environments. Filter to see what inspires you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer block ${project.colSpan} ${project.rowSpan}`}
              >
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-body font-semibold text-white uppercase tracking-widest w-max mb-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-150">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
