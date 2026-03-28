import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, CalendarDays, Share2 } from "lucide-react";

export default function SingleBlogPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch data based on params.slug.
  // Using static luxury placeholder content for demonstration.
  
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Article Header Container */}
        <header className="max-w-4xl mx-auto px-6 lg:px-8 mb-16 md:mb-20 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300 mb-8 md:mb-12"
          >
            <ArrowLeft size={16} /> Back to Journal
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="font-body text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-widest">
              Design & Architecture
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span className="font-body text-xs text-muted flex items-center gap-1.5">
              <Clock size={14} /> 6 Min Read
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-[1.1] mb-8">
            The Art of Modern Farmhouse <span className="text-secondary italic">Landscaping</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                  alt="Author"
                  width={48}
                  height={48}
                  unoptimized
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-left">
                <p className="font-body text-sm font-bold text-primary">Sarah Jenkins</p>
                <p className="font-body text-xs text-muted">Lead Landscape Architect</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-10 bg-border" />
            
            <div className="flex items-center gap-2 font-body text-sm text-secondary/80">
              <CalendarDays size={16} className="text-muted" />
              Published on October 12, 2024
            </div>
          </div>
        </header>

        {/* Expansive Hero Image */}
        <div className="w-full max-w-[1920px] mx-auto mb-16 md:mb-24 px-4 md:px-8">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl md:rounded-[40px] overflow-hidden shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop"
                alt="Modern farmhouse exterior"
                fill
                unoptimized
                className="object-cover"
                priority
              />
              {/* Soft overlay for premium feel */}
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            </div>
            <p className="text-center font-body text-xs text-muted mt-4 md:mt-6">
              Image: A sprawling 5-acre estate designed by the Gulzaar team in early 2024.
            </p>
        </div>

        {/* Article Body Content */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative">
          
          {/* Floating Share Side-bar (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-4 absolute -left-20 top-0 sticky top-32">
            <p className="font-body text-xs font-bold uppercase tracking-widest text-muted -rotate-90 origin-left mb-8 whitespace-nowrap -ml-2">
              Share Article
            </p>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors duration-300">
              <Share2 size={18} />
            </button>
          </div>

          <div className="prose-container font-body text-lg text-secondary leading-[1.85] md:text-xl space-y-8 md:space-y-10">
            {/* Drop Cap Paragraph */}
            <p>
              <span className="float-left text-7xl font-heading font-bold text-primary leading-[0.8] pr-3 pt-2">
                T
              </span>
              he essence of modern farmhouse landscaping lies incredibly close to the idea
              of balancing wild natural asymmetry with hyper-clean architectural lines.
              When people initially purchase a sprawling estate or a country home, the
              first instinct is often to tame the wilderness completely—turning organic,
              breathing ecosystems into sterile, flat lawns. 
              But true landscape alchemy occurs when we let the wild in, just a little bit.
            </p>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-16 mb-8 leading-[1.2]">
              The Magic of Native Planting
            </h2>

            <p>
              Importing exotic species might sound luxurious, but a true farmhouse narrative 
              is rooted deeply in its local geography. By utilizing native shrubs, resilient 
              ornamental grasses, and locally surviving perennials, you ensure that the garden 
              doesn't just survive—it <span className="font-semibold text-primary">thrives</span> with 
              a fraction of the required maintenance. 
            </p>

            <p>
              Native plants have evolved alongside the local wildlife and climate over millennia. 
              This simply means they are highly resistant to local pests and require minimal 
              supplemental watering once established. The "Modern" touch stems from how we arrange them.
            </p>

            <blockquote className="my-12 py-6 pl-8 md:pl-10 border-l-[3px] border-accent bg-accent/5 rounded-r-2xl italic font-heading text-2xl md:text-3xl text-primary leading-[1.4]">
              "A beautifully designed garden isn't a battleground against nature; it is a 
              collaboration with it."
            </blockquote>

            <p>
              Instead of scattering native flora randomly, modern design relies on large, 
              deliberate mass-plantings. Think sweeping bands of Russian Sage or massive 
              drifts of fountain grass. This repetition creates a highly soothing, architectural 
              look while maintaining the chaotic beauty of the plant itself.
            </p>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-16 mb-8 leading-[1.2]">
              Structured Hardscaping
            </h2>

            <p>
              You need heavy, permanent anchors to contrast the softness of the plants. 
              This is where hardscaping enters the stage. Modern farmhouses excel when using 
              natural, rugged materials styled in a contemporary layout.
            </p>

            <ul className="space-y-4 my-8 pl-4 border-l border-border md:ml-4">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cream text-accent flex items-center justify-center font-bold text-sm mt-1">1</span>
                <div>
                  <span className="font-bold text-primary">Bluestone Pavers:</span> 
                  Laid in a strict geometric grid, but separated with moss or dwarf grass joints.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cream text-accent flex items-center justify-center font-bold text-sm mt-1">2</span>
                <div>
                  <span className="font-bold text-primary">Weathered Steel (Corten):</span>
                  Used as hyper-sharp retaining walls or planters that naturally rust to a warm orange over time.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cream text-accent flex items-center justify-center font-bold text-sm mt-1">3</span>
                <div>
                  <span className="font-bold text-primary">Gravel Courtyards:</span> 
                  A staple that provides structural noise (the crunch) and acts as an excellent permeable surface for rainwater.
                </div>
              </li>
            </ul>

            <div className="relative aspect-[16/10] w-full my-12 rounded-2xl overflow-hidden shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1200&auto=format&fit=crop"
                alt="Close up of structural hardscaping"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <p>
              When a crisp straight line of corten steel intersects with an unruly, blooming Hydrangea bush, 
              the resulting visual friction is the exact definition of the modern farmhouse aesthetic.
            </p>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-16 mb-8 leading-[1.2]">
              Final Thoughts
            </h2>

            <p>
              Your farmhouse should be your escape. By leaning into native horticulture and structuring the 
              wilderness with deliberate, heavy materials, you avoid building just a "yard." Instead, you 
              build a sanctuary that grows more beautiful with each passing season.
            </p>
          </div>

          {/* Article Footer & Tags */}
          <div className="mt-16 md:mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {['Landscaping', 'Farmhouse', 'Architecture', 'Nature'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-cream text-secondary font-body text-xs font-semibold rounded-lg hover:bg-border transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Mobile share */}
            <div className="flex lg:hidden items-center gap-4">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-muted">Share:</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary transition-colors"><Share2 size={16} /></button>
              </div>
            </div>
          </div>
          
        </div>
      </article>

      {/* Suggested Articles */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="font-heading text-3xl font-bold text-primary mb-10">Read Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/terrace-garden-mistakes" className="group flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-2xl shadow-soft hover:shadow-card-hover transition-all duration-300">
              <div className="relative w-full sm:w-48 aspect-video sm:aspect-square rounded-xl overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=400&auto=format&fit=crop" alt="Thumbnail" fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex flex-col justify-center py-2 pr-2">
                <span className="font-body text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Guides</span>
                <h4 className="font-heading text-xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">The Biggest Terrace Gardening Mistakes</h4>
                <div className="flex items-center gap-2 font-body text-xs text-muted mt-auto"><Clock size={12} /> 7 min read</div>
              </div>
            </Link>
            
            <Link href="/blog/zen-garden-philosophy" className="group flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-2xl shadow-soft hover:shadow-card-hover transition-all duration-300">
              <div className="relative w-full sm:w-48 aspect-video sm:aspect-square rounded-xl overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=400&auto=format&fit=crop" alt="Thumbnail" fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex flex-col justify-center py-2 pr-2">
                <span className="font-body text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Philosophy</span>
                <h4 className="font-heading text-xl font-bold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">Finding Peace: The Zen Garden Philosophy</h4>
                <div className="flex items-center gap-2 font-body text-xs text-muted mt-auto"><Clock size={12} /> 6 min read</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
