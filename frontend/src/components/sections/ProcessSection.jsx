import React from "react";
import ProcessStepCard from "../cards/ProcessStepCard";

function ProcessSection() {
  const steps = [
    {
      num: 1,
      title: "Get a Free Estimate",
      desc: "Call us or fill out the form. We'll give you a straight price fast.",
    },
    {
      num: 2,
      title: "Drop Off or Schedule",
      desc: "Bring your vehicle in or schedule a time that works for you.",
    },
    {
      num: 3,
      title: "Drive Away Fixed",
      desc: "We do the work right the first time. Same day service when possible.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          How It Works
        </h2>

        {/* Mobile */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--jc-red-600)]/30" />
          {steps.map((step, i) => (
            <div key={i} className={`relative ${i < steps.length - 1 ? "mb-10" : ""}`}>
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--jc-red-600)] flex items-center justify-center z-10">
                  <span className="font-black text-white text-base">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet + Desktop */}
        <div className="hidden md:flex items-stretch justify-center gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <ProcessStepCard num={step.num} title={step.title} desc={step.desc} />
              {i < steps.length - 1 && (
                <svg className="w-8 h-8 text-gray-400 self-center shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;