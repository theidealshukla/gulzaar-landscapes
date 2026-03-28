import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// Next.js requires params to be accessible
interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params so the pages are pre-rendered at build time
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Gulzaar Landscapes`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background">
      <Navbar />

      {/* Dynamic Project Hero Header */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-end pb-12 overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 mix-blend-multiply" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm font-medium tracking-wide mb-6 md:mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-md rounded-full text-xs font-body font-bold text-white uppercase tracking-widest mb-4">
            {project.category}
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Overview Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left sidebar info (Client, Duration, Category) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 bg-cream border border-border rounded-[2rem]">
                <h3 className="font-heading text-xl font-bold text-primary mb-6">Project Details</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent flex-shrink-0">
                      <User size={18} />
                    </div>
                    <div>
                      <span className="block font-body text-xs text-muted uppercase tracking-wider mb-1">Client</span>
                      <strong className="font-body font-semibold text-primary">{project.client}</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="block font-body text-xs text-muted uppercase tracking-wider mb-1">Duration</span>
                      <strong className="font-body font-semibold text-primary">{project.duration}</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent flex-shrink-0">
                      <Tag size={18} />
                    </div>
                    <div>
                      <span className="block font-body text-xs text-muted uppercase tracking-wider mb-1">Category</span>
                      <strong className="font-body font-semibold text-primary">{project.category}</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right main descriptive content */}
            <div className="lg:col-span-8">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">The Vision</h2>
              <p className="font-body text-lg text-secondary leading-relaxed mb-12">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 bg-background border border-border rounded-3xl">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    The Challenge
                  </h3>
                  <p className="font-body text-secondary leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-8 bg-accent/5 border border-accent/20 rounded-3xl">
                  <h3 className="font-heading text-2xl font-bold text-accent mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-accent" />
                    The Solution
                  </h3>
                  <p className="font-body text-primary leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Dynamic Image Gallery */}
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">Creation Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className={`relative rounded-2xl overflow-hidden shadow-soft ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}>
                    <Image
                      src={img}
                      alt={`${project.title} gallery image ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Next Step / Call to Action */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
            Ready to bring your own outdoor vision to life?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10 max-w-xl">
            Our experts are ready to transform your space into a timeless natural haven. Let's discuss your ideas today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-body text-sm font-semibold tracking-wide rounded-full hover:bg-white hover:text-primary transition-all duration-300"
          >
            Start Your Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
