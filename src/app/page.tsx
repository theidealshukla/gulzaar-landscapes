import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />            {/* 1. Hook */}
      <ProblemSection />         {/* 2. Problem */}
      <PhilosophySection />      {/* 3. Solution */}
      <ServicesSection />        {/* 4. Services */}
      <ProcessSection />         {/* 5. Process */}
      <StatsSection />           {/* 6. Metrics */}
      <TestimonialsSection />    {/* 7. Social Proof */}
      <WhyChooseUsSection />     {/* 8. Why Choose Us */}
      <ShowcaseSection />        {/* 9. Visual / Emotional */}
      <FinalCtaSection />        {/* 10. Final CTA */}
      <Footer />
    </main>
  );
}
