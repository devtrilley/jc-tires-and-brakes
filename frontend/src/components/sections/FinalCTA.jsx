import CTAButton from "../CTAButton";

function FinalCTA({ scrollToForm }) {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <span className="relative text-xs font-semibold uppercase tracking-[0.25em] text-[var(--jc-red-400)] mb-6 inline-block">
          Charlotte’s Trusted Tire Shop
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-20 bg-white/70 rounded-full"></span>
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Ready to Get Back on the Road?
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Free estimate. No obligation. Straight answers. Fast turnaround.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <CTAButton
            onClick={scrollToForm}
            variant="white"
            className="px-12 py-4 text-lg"
          >
            Get a Free Estimate
          </CTAButton>

          <a
            href="tel:7049190401"
            className="text-white text-lg font-semibold hover:text-[var(--jc-red-500)] transition"
          >
            or call (704) 919-0401
          </a>
        </div>

        <p className="mt-8 text-sm text-white/70 uppercase tracking-wider">
          Licensed • Insured • Family Owned • Charlotte NC
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;
