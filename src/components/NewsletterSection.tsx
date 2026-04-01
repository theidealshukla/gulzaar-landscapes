import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section id="contact" className="w-full relative py-16 md:py-28 flex flex-col items-center justify-center text-center mt-auto">
      <Image 
        src="/images/greennest/newsletter_bg.png" 
        alt="Lush green wall" 
        fill 
        className="object-cover brightness-50"
      />
      <div className="relative z-10 px-6 max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 text-white">
          Let's Discuss Your Project
        </h2>
        <p className="text-white/90 mb-6 md:mb-10 text-sm md:text-base">
          Leave your email and our design experts will get in touch with you shortly to schedule a site visit.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto bg-white p-2 sm:p-1.5 rounded-[2rem] sm:rounded-full shadow-lg">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 sm:px-5 py-3 sm:py-2.5 md:px-6 md:py-3 bg-transparent outline-none text-[#1A3626] font-body text-base sm:text-sm"
            required
          />
          <button type="submit" className="w-full sm:w-auto bg-[#1A3626] text-white px-6 md:px-8 py-3.5 sm:py-2.5 md:py-3 rounded-[1.5rem] sm:rounded-full text-base sm:text-sm font-medium mt-1 sm:mt-0 sm:ml-2 hover:bg-[#254d36] transition-colors whitespace-nowrap">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}
