import CTAButton from "./CTAButton";

function Footer({ scrollToForm }) {
  return (
    <>
      {/* FOOTER */}
      <footer
        className="py-16"
        style={{
          background: "var(--jc-black)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* BRAND */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3 text-white">
                JC's Tire & Brakes
              </h3>
              <p className="text-white/80 text-sm mb-5 max-w-md">
                Charlotte's trusted tire and brake shop. Fast service, fair
                prices, family owned.
              </p>

              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="tel:+17049190401"
                  className="inline-flex items-center gap-2 font-semibold text-white hover:text-[var(--jc-red-500)] transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (704) 919-0401
                </a>

                <CTAButton
                  variant="lemon"
                  onClick={scrollToForm}
                  className="self-start inline-flex px-6 py-3 text-sm"
                >
                  Get a Free Quote
                </CTAButton>
              </div>
            </div>

            {/* LINKS */}
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button
                  onClick={() => {
                    const section = document.getElementById("services");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-white/80 hover:text-[var(--jc-red-500)] transition"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById("work");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-white/80 hover:text-[var(--jc-red-500)] transition"
                >
                  Our Work
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById("faq");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-white/80 hover:text-[var(--jc-red-500)] transition"
                >
                  FAQ
                </button>
                <button
                  onClick={scrollToForm}
                  className="block text-white/80 hover:text-[var(--jc-red-500)] transition"
                >
                  Get Quote
                </button>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>Tires & Rotation</p>
                <p>Brakes</p>
                <p>Oil Changes</p>
                <p>NC Inspections</p>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2026 JC's Tire & Brakes. All rights reserved.</p>
            <a
              href="tel:+17049190401"
              className="hover:text-[var(--jc-red-500)] transition"
            >
              (704) 919-0401
            </a>
          </div>
        </div>
      </footer>

      {/* STICKY CALL BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden py-3 px-4 bg-[#1a1a1a] shadow-[0_-6px_20px_rgba(0,0,0,0.25)]">
        <a
          href="tel:+17049190401"
          className="flex items-center justify-center gap-3 font-bold text-lg text-white"
        >
          <svg
            className="w-6 h-6 text-[var(--jc-red-500)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          (704) 919-0401
        </a>
      </div>
    </>
  );
}

export default Footer;
