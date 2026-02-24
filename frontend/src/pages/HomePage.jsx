import { useRef, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import CredibilitySection from "../components/sections/CredibilitySection";
import WhoWeServeSection from "../components/sections/WhoWeServeSection";
import ProcessSection from "../components/sections/ProcessSection";
import FinalCTA from "../components/sections/FinalCTA";
import MultiStepForm from "../components/quote-form/MultiStepForm";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToForm={scrollToForm}
      />
      <Hero scrollToForm={scrollToForm} />
      <StatsBar />
      <Services scrollToForm={scrollToForm} />
      <CredibilitySection scrollToForm={scrollToForm} />
      <Testimonials />
      <WhoWeServeSection scrollToForm={scrollToForm} />
      <Gallery />
      <ProcessSection />

      {/* QUOTE FORM SECTION */}
      <section
        id="quote"
        ref={formRef}
        className="relative py-20 md:py-28 scroll-mt-10 bg-[var(--jc-black)] overflow-hidden text-white"
      >
        {/* Background texture layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--jc-red-700)]/30 via-transparent to-transparent pointer-events-none" />
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--jc-red-600)] to-transparent" />

        <div className="relative max-w-xl mx-auto px-4">
          {/* Eyebrow */}
          <p className="text-center text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--jc-red-600)] mb-4">
            Free · No Obligation · Fast Response
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-base md:text-lg text-gray-400 text-center mb-10">
            Tell us what's going on. We'll get back to you within 24 hours.
          </p>
          <MultiStepForm scrollRef={formRef} />
        </div>
      </section>

      <FAQ />
      <FinalCTA scrollToForm={scrollToForm} />
      <Footer scrollToForm={scrollToForm} />
    </div>
  );
}

export default HomePage;
