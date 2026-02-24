function IssueStep({ formData, handleFieldChange }) {
  const symptoms = [
    "Check engine light is on",
    "Squeaking or grinding brakes",
    "Car won't start",
    "Pulling to one side",
    "Vibration or shaking",
    "Overheating",
    "AC not blowing cold",
    "Loud noise while driving",
    "Leaking fluid",
    "Rough idle or stalling",
  ];

  const toggleSymptom = (s) => {
    const current = formData.symptoms || [];
    const updated = current.includes(s)
      ? current.filter((x) => x !== s)
      : [...current, s];
    handleFieldChange("symptoms", updated);
  };

  return (
    <div className="space-y-5 animate-fadeIn">
      <h3 className="text-2xl font-bold text-black mb-2 text-center">
        What's going on?
      </h3>
      <p className="text-sm text-gray-500 text-center mb-4">
        Select any symptoms (optional)
      </p>

      <div className="grid grid-cols-1 gap-2">
        {symptoms.map((s) => {
          const selected = (formData.symptoms || []).includes(s);
          return (
            <button
              key={s}
              type="button"
              onClick={() => toggleSymptom(s)}
              className={`flex items-center gap-3 w-full p-3 border-2 rounded-xl text-left transition-all active:scale-95 ${
                selected
                  ? "border-[var(--jc-red-600)] bg-red-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center shrink-0 ${selected ? "bg-[var(--jc-red-600)] border-[var(--jc-red-600)]" : "border-gray-300"}`}>
                {selected && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium text-black">{s}</span>
            </button>
          );
        })}
      </div>

      <div>
        <label className="block text-sm font-bold text-black mb-2">Additional notes (optional)</label>
        <textarea
          value={formData.notes || ""}
          onChange={(e) => handleFieldChange("notes", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none resize-none"
          rows={3}
          placeholder="Anything else we should know..."
        />
      </div>
    </div>
  );
}

export default IssueStep;