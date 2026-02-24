function VehicleStep({ formData, handleFieldChange, errors }) {
  const years = [];
  for (let y = 2026; y >= 1990; y--) years.push(y);

  const makes = [
    "Acura",
    "Audi",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Dodge",
    "Ford",
    "GMC",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jeep",
    "Kia",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Mazda",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Ram",
    "Subaru",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "Other",
  ];

  const handleMileageChange = (val) => {
    const digits = val.replace(/\D/g, "");
    if (!digits) {
      handleFieldChange("mileage", "");
      return;
    }
    const formatted = Number(digits).toLocaleString("en-US");
    handleFieldChange("mileage", formatted);
  };

  const handleModelChange = (val) => {
    const capitalized = val
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    handleFieldChange("vehicleModel", capitalized);
  };

  const handleCustomMakeChange = (val) => {
    const capitalized = val
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    handleFieldChange("vehicleCustomMake", capitalized);
  };

  const isOther = formData.vehicleMake === "Other";

  return (
    <div className="space-y-5 animate-fadeIn">
      <h3 className="text-2xl font-bold text-black mb-6 text-center">
        Tell us about your vehicle
      </h3>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-bold text-black mb-2">
            Year *
          </label>
          <select
            value={formData.vehicleYear || ""}
            onChange={(e) => handleFieldChange("vehicleYear", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 ${
              errors.vehicleYear
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[var(--jc-red-600)]"
            }`}
          >
            <option value="">Select year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          {errors.vehicleYear && (
            <p className="text-red-600 text-sm mt-1">{errors.vehicleYear}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-black mb-2">
            Make *
          </label>
          <select
            value={formData.vehicleMake || ""}
            onChange={(e) => {
              handleFieldChange("vehicleMake", e.target.value);
              if (e.target.value !== "Other") {
                handleFieldChange("vehicleCustomMake", "");
              }
            }}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 ${
              errors.vehicleMake
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[var(--jc-red-600)]"
            }`}
          >
            <option value="">Select make</option>
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          {errors.vehicleMake && (
            <p className="text-red-600 text-sm mt-1">{errors.vehicleMake}</p>
          )}
        </div>
      </div>

      {/* Custom make input — only shown when Other is selected */}
      {isOther && (
        <div>
          <label className="block text-sm font-bold text-black mb-2">
            Enter Make *
          </label>
          <input
            type="text"
            value={formData.vehicleCustomMake || ""}
            onChange={(e) => handleCustomMakeChange(e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.vehicleCustomMake
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[var(--jc-red-600)]"
            }`}
            placeholder="e.g. Ferrari, Bentley, Genesis"
          />
          {errors.vehicleCustomMake && (
            <p className="text-red-600 text-sm mt-1">
              {errors.vehicleCustomMake}
            </p>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-bold text-black mb-2">
          Model *
        </label>
        <input
          type="text"
          value={formData.vehicleModel || ""}
          onChange={(e) => handleModelChange(e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.vehicleModel
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-[var(--jc-red-600)]"
          }`}
          placeholder="e.g. Camry, F-150, Civic"
        />
        {errors.vehicleModel && (
          <p className="text-red-600 text-sm mt-1">{errors.vehicleModel}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-black mb-2">
          Mileage <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={formData.mileage || ""}
          onChange={(e) => handleMileageChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--jc-red-600)]"
          placeholder="e.g. 85,000"
          maxLength={10}
        />
      </div>
    </div>
  );
}

export default VehicleStep;
