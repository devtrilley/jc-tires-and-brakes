function ContactStep({ formData, handleFieldChange, errors }) {
  const baseInput =
    "w-full px-4 py-3 rounded-lg border bg-white text-black placeholder-gray-400 transition focus:outline-none focus:ring-2";

  const getInputClass = (error) =>
    `${baseInput} ${
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-[var(--jc-red-600)]"
    }`;

  return (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-2xl font-bold text-black mb-6 text-center">
        How can we reach you?
      </h3>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
          className={getInputClass(errors.name)}
          placeholder="John Smith"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          className={getInputClass(errors.email)}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleFieldChange("phone", e.target.value)}
          className={getInputClass(errors.phone)}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>
    </div>
  );
}

export default ContactStep;
