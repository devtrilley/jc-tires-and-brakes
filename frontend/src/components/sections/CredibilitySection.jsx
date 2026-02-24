import CTAButton from "../CTAButton";

function CredibilitySection({ scrollToForm }) {
  const features = [
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "100% Satisfaction Guarantee",
      desc: "Not happy with the work? We'll make it right. No runaround, no questions asked.",
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Same-Day Service Available",
      desc: "Need your car fixed today? We offer same-day service on most jobs.",
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 7.072A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Licensed & Insured",
      desc: "Fully licensed and insured. Official NC State Inspection Station. Professional team you can trust.",
    },
  ];

  return (
    <section className="py-16" style={{ background: "#1f1f1f" }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6" style={{ color: "#ffffff" }}>
          Why Choose Us
        </h2>
        <div className="space-y-6">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--jc-red-600)] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18),_0_10px_25px_rgba(0,0,0,0.2)]">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={feature.icon}
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <CTAButton onClick={scrollToForm}>Get a Free Quote</CTAButton>
        </div>
      </div>
    </section>
  );
}

export default CredibilitySection;
