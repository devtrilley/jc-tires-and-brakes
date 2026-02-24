function ServiceStep({ formData, handleFieldChange, errors }) {
  const services = [
    { value: "oil-change", label: "Oil Change", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { value: "brake-repair", label: "Brake Repair", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "tires-rotation", label: "Tires & Rotation", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
    { value: "battery", label: "Battery Replacement", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { value: "nc-inspection", label: "NC State Inspection", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { value: "alignment", label: "Wheel Alignment", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
    { value: "diagnostics", label: "Engine Diagnostics", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { value: "transmission", label: "Transmission Service", icon: "M4 7h16M4 12h16M4 17h7" },
    { value: "radiator", label: "Radiator Flush", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { value: "ac", label: "AC Service", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M12 21v-1M5.636 5.636l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" },
    { value: "tune-up", label: "Tune Up", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
    { value: "not-sure", label: "Not Sure — Diagnose It", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-2xl font-bold text-black mb-2 text-center">
        What service do you need?
      </h3>
      <p className="text-sm text-gray-500 text-center mb-4">Select one</p>

      <div className="grid grid-cols-1 gap-3">
        {services.map((s) => (
          <button
            key={s.value}
            type="button"
            onClick={() => handleFieldChange("tier", s.value)}
            className={`flex items-center gap-4 p-4 border-2 rounded-xl text-left transition-all hover:shadow-md active:scale-95 ${
              formData.tier === s.value
                ? "border-[var(--jc-red-600)] bg-red-50"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${formData.tier === s.value ? "bg-[var(--jc-red-600)] text-white" : "bg-gray-100 text-gray-500"}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
              </svg>
            </div>
            <span className="font-semibold text-black">{s.label}</span>
            {formData.tier === s.value && (
              <svg className="w-5 h-5 text-[var(--jc-red-600)] ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {errors.tier && <p className="text-red-600 text-sm text-center">{errors.tier}</p>}
    </div>
  );
}

export default ServiceStep;