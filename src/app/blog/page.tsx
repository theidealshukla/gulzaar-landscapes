import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";

export const metadata = {
  title: "Journal & Stories | Gulzaar Landscapes",
  description: "Read our latest thoughts on landscape design, garden maintenance, and creating living works of art.",
};

const featuredPost = {
  slug: "art-of-modern-farmhouse-landscaping",
  title: "The Art of Modern Farmhouse Landscaping",
  excerpt: "Discover the secrets to blending rustic charm with contemporary elegance in large-scale outdoor spaces. From native plant selection to sustainable irrigation.",
  image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
  category: "Design",
  readTime: "5 min read",
  author: "Gulzaar Staff",
  date: "October 12, 2024",
};

const posts = [
  {
    slug: "5-best-indoor-plants-for-clean-air",
    title: "5 Best Indoor Plants to Purify Your Air",
    excerpt: "Looking to breathe easier? These low-maintenance indoor plants not only look stunning but actively filter out everyday household toxins.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    category: "Indoor Plants",
    readTime: "4 min read",
  },
  {
    slug: "terrace-garden-mistakes-to-avoid",
    title: "The Biggest Terrace Gardening Mistakes",
    excerpt: "Before throwing pots onto your roof, make sure you aren't making these critical structural and drainage errors.",
    image: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=800&auto=format&fit=crop",
    category: "Guides",
    readTime: "7 min read",
  },
  {
    slug: "zen-garden-philosophy",
    title: "Finding Peace: The Zen Garden Philosophy",
    excerpt: "How arranging stones, sand, and flora with deliberate minimalism can drastically lower daily stress and anxiety.",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
    category: "Philosophy",
    readTime: "6 min read",
  },
  {
    slug: "summer-lawn-care-routine",
    title: "Your Essential Summer Lawn Care Routine",
    excerpt: "Don't let the heat torch your beautiful green carpet. Follow this strict watering and mowing schedule to survive the peak summer.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=800&auto=format&fit=crop",
    category: "Maintenance",
    readTime: "3 min read",
  },
  {
    slug: "vertical-gardening-small-balconies",
    title: "Vertical Gardening for Small Balconies",
    excerpt: "Short on floor space? Look up. Mastering the vertical garden will turn even the most cramped apartment balcony into an oasis.",
    image: "https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=800&auto=format&fit=crop",
    category: "Balcony",
    readTime: "5 min read",
  },
  {
    slug: "choosing-right-soil-mix",
    title: "The Secret is in the Dirt: Soil Science 101",
    excerpt: "A beautiful garden starts underground. Here is exactly what soil mix you need for different types of decorative plants.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
    category: "Education",
    readTime: "5 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        title="Journal & Stories"
        description="Expert advice, design inspiration, and botanical musings from the Gulzaar Landscapes team."
        imageSrc="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-20 md:py-28 bg-cream border-t border-border">
        <div className="section-container max-w-5xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-6">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                Latest Publications
              </h3>
            </div>
            <div className="font-body text-sm text-muted">
              Discover {posts.length + 1} stories
            </div>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            
            {/* Featured Post (First item styled slightly larger) */}
            <article className="group flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
              <Link href={`/blog/${featuredPost.slug}`} className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
              </Link>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-xs font-bold text-white bg-accent px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="font-body text-xs text-muted flex items-center gap-1">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>
                
                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                </Link>
                
                <p className="font-body text-secondary text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-border">
                      <User size={18} />
                    </div>
                    <div>
                      <p className="font-body text-sm font-bold text-primary leading-none mb-1">{featuredPost.author}</p>
                      <p className="font-body text-xs text-muted leading-none">{featuredPost.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Separator line */}
            <div className="w-full h-px bg-border my-2" />

            {/* List of other posts */}
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col sm:flex-row gap-6 lg:gap-10">
                <Link href={`/blog/${post.slug}`} className="w-full sm:w-1/3 md:w-1/4 relative aspect-video sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                
                <div className="w-full sm:w-2/3 md:w-3/4 flex flex-col justify-center py-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-[10px] font-bold text-accent uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="font-body text-[11px] text-muted flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="font-body text-sm md:text-base text-secondary/80 leading-relaxed max-w-2xl mb-4 line-clamp-2 md:line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 font-body text-xs font-semibold text-primary uppercase tracking-widest mt-auto group-hover:text-accent transition-colors duration-200">
                    Read Story
                    <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
