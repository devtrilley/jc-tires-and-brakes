function FAQ() {
  const faqs = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
      question: "How do I book a service?",
      answer: (
        <>
          <span className="block font-semibold text-black mb-1">
            Call us at (704) 919-0401 or fill out our free estimate form.
          </span>
          We'll get back to you within 24 hours with pricing and availability.
        </>
      ),
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      ),
      question: "Where are you located?",
      answer: (
        <>
          <span className="block font-semibold text-black mb-1">
            4848 Brookshire Blvd, Charlotte NC.
          </span>
          We serve Charlotte and surrounding areas. Not sure? Give us a call.
        </>
      ),
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      question: "How long does a typical service take?",
      answer: (
        <>
          <span className="block font-semibold text-black mb-1">
            Most services are done same day, often under an hour.
          </span>
          Oil changes and inspections are usually 30–45 minutes. Bigger jobs
          like brakes or transmission may take a few hours.
        </>
      ),
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        />
      ),
      question: "What if I'm not satisfied?",
      answer: (
        <>
          <span className="block font-semibold text-black mb-1">
            We stand behind our work 100%.
          </span>
          If something isn't right after your service, bring it back and we'll
          make it right. No runaround.
        </>
      ),
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      question: "Are you a certified NC inspection station?",
      answer: (
        <>
          <span className="block font-semibold text-black mb-1">
            Yes. We are an official NC State Inspection Station.
          </span>
          We handle both safety and emissions inspections. Get your sticker fast
          without the dealership hassle.
        </>
      ),
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      question: "How much does it cost?",
      answer: (
        <>
          <span className="block font-semibold text-black mb-1">
            Pricing depends on the service and your vehicle.
          </span>
          Oil changes start at competitive rates. Fill out our free estimate
          form and we'll give you a straight answer fast.
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 scroll-mt-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--jc-black)] mb-12 text-center">
          Common Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="
                group
                rounded-2xl
                bg-white
                border border-gray-200
                p-6

                shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                transition-all duration-300 ease-out

                md:hover:-translate-y-1
                md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                md:hover:border-black
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    shrink-0
                    w-11 h-11
                    rounded-xl
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:scale-105
                  "
                  style={{
                    background: "linear-gradient(135deg, #b91c1c, #dc2626)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
