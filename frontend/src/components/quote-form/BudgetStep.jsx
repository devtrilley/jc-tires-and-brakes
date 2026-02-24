function BudgetStep({ formData, handleFieldChange, errors }) {
  const urgencyOptions = [
    { value: "asap", label: "ASAP", sub: "1–3 days" },
    { value: "this-week", label: "This Week", sub: "4–7 days" },
    { value: "next-week", label: "Next Week", sub: "7–14 days" },
    { value: "flexible", label: "Flexible", sub: "No rush" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-black mb-2 text-center">
        When do you need service?
      </h3>
      <p className="text-sm text-gray-500 text-center mb-6">Select one</p>

      <div className="grid grid-cols-2 gap-3">
        {urgencyOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleFieldChange("urgency", opt.value)}
            className={`p-4 border-2 rounded-xl text-center transition-all hover:shadow-md active:scale-95 ${
              formData.urgency === opt.value
                ? "border-[var(--jc-red-600)] bg-red-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="font-bold text-black">{opt.label}</div>
            <div className="text-xs text-gray-500 mt-0.5">{opt.sub}</div>
          </button>
        ))}
      </div>

      {errors.urgency && (
        <p className="text-red-600 text-sm text-center">{errors.urgency}</p>
      )}
    </div>
  );
}

export default BudgetStep;