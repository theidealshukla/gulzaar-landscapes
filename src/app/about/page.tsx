import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Leaf, Lightbulb, ShieldCheck } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Gulzaar Landscapes",
  description: "Learn about Gulzaar Landscapes' mission, sustainable practices, and passionate approach to modern farmhouse garden design.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovative Design",
    description: "Every landscape tells a unique story. We blend modern aesthetics with natural beauty tailored to your vision.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "We are committed to eco-friendly gardening, ensuring every project is environmentally conscious and thriving long-term.",
  },
  {
    icon: ShieldCheck,
    title: "Meticulous Quality",
    description: "From design to execution, our attention to detail guarantees breathtaking, high-quality outdoor spaces.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      <PageHero
        title="More Than Just Arranging Plants"
        description="At Gulzaar Landscapes, landscaping is creating a living work of art. Our passion is to bring your unique story to life."
        imageSrc="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Story Section */}
      <section className="py-14 md:py-32 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            {/* Image — shorter on mobile */}
            <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop"
                alt="Gardener tending to plants"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="max-w-xl">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 md:mb-8 leading-tight">
                Where Design <br />
                <span className="text-accent italic">Meets Nature</span>
              </h2>
              <div className="space-y-4 md:space-y-6 font-body text-sm md:text-base text-secondary leading-relaxed">
                <p>
                  We believe that an exceptional outdoor space has the power to
                  transform the way you live. What started as a shared passion for
                  beautiful greenery has grown into Gulzaar Landscapes—a dedicated team
                  of designers, horticulturists, and craftsmen in Indore.
                </p>
                <p>
                  We turn outdoor spaces into captivating havens. Whether it is a sprawling
                  modern farmhouse garden or an intimate balcony retreat, our vision
                  remains the same: harmony between nature and architecture.
                </p>
                <p className="border-l-4 border-accent pl-4 md:pl-6 py-2 mt-6 md:mt-8 text-primary font-semibold text-base md:text-lg italic">
                  "Every landscape tells a unique story; our passion is to bring that
                  story to life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-14 md:py-28 bg-cream border-t border-border">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-secondary text-sm md:text-base">
              The principles that guide our work, our team, and our relationship with nature.
            </p>
          </div>

          {/* Mobile: Compact horizontal list, Desktop: grid */}
          <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 hide-scrollbar">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex-shrink-0 w-[80vw] snap-center bg-white p-6 rounded-2xl shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-xl mb-4">
                  <val.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{val.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-3 gap-8 md:gap-12">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-soft hover:shadow-card-hover transition-all duration-300 border border-border cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center rounded-xl mb-6">
                  <val.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">{val.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
