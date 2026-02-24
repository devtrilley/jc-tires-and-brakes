function ReviewStep({ formData, setFormStep }) {
  const formatService = (tier) => {
    const map = {
      "oil-change": "Oil Change",
      "brake-repair": "Brake Repair",
      "tires-rotation": "Tires & Rotation",
      battery: "Battery Replacement",
      "nc-inspection": "NC State Inspection",
      alignment: "Wheel Alignment",
      diagnostics: "Engine Diagnostics",
      transmission: "Transmission Service",
      radiator: "Radiator Flush",
      ac: "AC Service",
      "tune-up": "Tune Up",
      "not-sure": "Not Sure — Diagnose It",
    };
    return map[tier] || tier;
  };

  const formatUrgency = (urgency) => {
    if (urgency === "asap") return "ASAP (1–3 days)";
    if (urgency === "this-week") return "This Week";
    if (urgency === "next-week") return "Next Week";
    if (urgency === "flexible") return "Flexible";
    return urgency;
  };

  const reviewItems = [
    { label: "Name", value: formData.name, step: 1 },
    { label: "Email", value: formData.email, step: 1 },
    { label: "Phone", value: formData.phone, step: 1 },
    {
      label: "Vehicle",
      value: `${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}`,
      step: 2,
    },
    {
      label: "Mileage",
      value: formData.mileage || "Not provided",
      step: 2,
    },
    { label: "Service", value: formatService(formData.tier), step: 3 },
    {
      label: "Symptoms",
      value:
        (formData.symptoms || []).length > 0
          ? formData.symptoms.join(", ")
          : "None selected",
      step: 4,
    },
    {
      label: "Notes",
      value: formData.notes || "None",
      step: 4,
    },
    { label: "Timeline", value: formatUrgency(formData.urgency), step: 5 },
  ];

  return (
    <div className="space-y-4 animate-fadeIn">
      <h3 className="text-2xl font-bold text-black mb-6 text-center">
        Review Your Info
      </h3>
      <div className="space-y-3">
        {reviewItems.map((item) => (
          <div
            key={item.label}
            className="flex items-start justify-between p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex-1 min-w-0 pr-4">
              <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">
                {item.label}
              </p>
              <p className="font-medium text-black text-sm break-words">
                {item.value}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFormStep(item.step)}
              className="text-xs font-bold text-[var(--jc-red-600)] hover:underline shrink-0"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewStep;
