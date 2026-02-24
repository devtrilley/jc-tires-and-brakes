import CTAButton from "./CTAButton";

function Hero({ scrollToForm }) {
  return (
    <section className="relative min-h-[85vh] flex items-center text-white pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/jc-tires-building.jpg')",
        }}
      />

      {/* Gradient overlay instead of heavy black */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Charlotte’s Trusted Tire & Brake Shop
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-6">
            Tires, brakes, oil changes, inspections and more. Fast service. Fair
            pricing. Family owned.
          </p>

          <div className="inline-flex items-center mb-6">
            <span className="inline-block rounded-full bg-[var(--jc-red-600)] shadow-[0_2px_10px_var(--jc-accent-shadow)] border border-black/10 text-white px-4 py-1 mt-6 text-sm font-semibold">
              Charlotte's #1 Rated Tire & Brake Shop
            </span>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <CTAButton onClick={scrollToForm}>Get a Free Estimate</CTAButton>
            <span className="text-sm text-white/60">
              Free estimate • No obligation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
