import { useRef } from "react";

function Services({ scrollToForm }) {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  const services = [
    {
      name: "Oil Change",
      tag: "Most Popular",
      featured: true,
      desc: "Fast oil + filter swap. No dealership wait or price.",
      keyword: "oil change Charlotte NC",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      name: "Brake Repair",
      tag: "Safety",
      desc: "Pads, rotors, calipers. Stop safely every time.",
      keyword: "brake repair Charlotte NC",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      name: "Tires & Rotation",
      tag: "Tires",
      desc: "New tires, rotation, balancing, and flat repair.",
      keyword: "tire shop Charlotte NC",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    },
    {
      name: "Battery Replacement",
      tag: "Electrical",
      desc: "Test, replace, and get back on the road fast.",
      keyword: "car battery replacement Charlotte",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      name: "NC State Inspection",
      tag: "State Required",
      desc: "Official NC inspection station. Get your sticker fast.",
      keyword: "NC state inspection Charlotte",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      name: "Wheel Alignment",
      tag: "Tires",
      desc: "Stop pulling to one side. Protect your tires.",
      keyword: "wheel alignment Charlotte NC",
      icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      name: "Engine Diagnostics",
      tag: "Check Engine",
      desc: "Check engine light on? We'll find out why.",
      keyword: "check engine light Charlotte NC",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      name: "Transmission Service",
      tag: "Drivetrain",
      desc: "Fluid flush, filter change, and full inspection.",
      keyword: "transmission service Charlotte NC",
      icon: "M4 7h16M4 12h16M4 17h7",
    },
    {
      name: "Radiator Flush",
      tag: "Cooling",
      desc: "Prevent overheating. Flush and refill coolant system.",
      keyword: "radiator flush Charlotte NC",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      name: "AC Service",
      tag: "Climate",
      desc: "Recharge and repair your AC before summer hits.",
      keyword: "car AC repair Charlotte NC",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      name: "Tune Up",
      tag: "Maintenance",
      desc: "Spark plugs, filters, and full engine tune up.",
      keyword: "tune up Charlotte NC",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      name: "Headlight Service",
      tag: "Lighting",
      desc: "Bulb replacement and lens restoration.",
      keyword: "headlight replacement Charlotte NC",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M12 21v-1M5.636 5.636l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z",
    },
    {
      name: "Fuel Injector Service",
      tag: "Engine",
      desc: "Clean injectors. Better mileage and performance.",
      keyword: "fuel injector cleaning Charlotte NC",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      name: "CV Axle Repair",
      tag: "Drivetrain",
      desc: "Clicking when you turn? We fix CV joints and axles.",
      keyword: "CV axle repair Charlotte NC",
      icon: "M4 7h16M4 12h16M4 17h7",
    },
    {
      name: "Wheel Refurbishing",
      tag: "Wheels",
      desc: "Restore scratched or curb-damaged rims.",
      keyword: "rim repair Charlotte NC",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    },
    {
      name: "Car Wash & Detail",
      tag: "Detailing",
      desc: "Full wash and detailing to keep your car looking clean.",
      keyword: "car wash Charlotte NC",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white scroll-mt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER ROW */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[var(--jc-black)]">
            Our Services
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((item, i) => (
            <div
              key={i}
              className={`
                snap-start shrink-0
                w-[240px] sm:w-[260px] md:w-[240px]
                rounded-2xl border p-5 flex flex-col gap-3
                transition hover:-translate-y-1 hover:shadow-lg
                ${
                  item.featured
                    ? "border-[var(--jc-red-600)] bg-red-50/40 shadow-md"
                    : "border-gray-200 bg-white shadow-sm"
                }
              `}
            >
              {/* TOP ROW */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.featured
                      ? "bg-[var(--jc-red-600)] text-white"
                      : "bg-red-50 text-[var(--jc-red-600)]"
                  }`}
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    item.featured
                      ? "bg-[var(--jc-red-600)] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {item.tag}
                </span>
              </div>

              {/* NAME + DESC */}
              <div>
                <h3 className="text-base font-bold text-[var(--jc-black)] leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className={`mt-auto w-full py-2 rounded-xl text-sm font-bold transition ${
                  item.featured
                    ? "bg-[var(--jc-red-600)] text-white hover:bg-[var(--jc-red-700)]"
                    : "bg-gray-100 text-[var(--jc-black)] hover:bg-gray-200"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* SCROLL HINT */}
        <p className="text-xs text-gray-400 text-center mt-3 md:hidden">
          Swipe to see all 16 services →
        </p>
        <p className="text-xs text-gray-400 text-center mt-3 hidden md:block">
          Use the arrows or scroll to see all 16 services →
        </p>
      </div>
    </section>
  );
}

export default Services;
