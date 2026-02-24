function FormProgress({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3, 4, 5, 6].map((step) => (
        <div
          key={step}
          className={`w-2 h-2 rounded-full transition-all ${
            step === currentStep
              ? "bg-[var(--jc-red-600)] w-8"
              : step < currentStep
              ? "bg-[var(--jc-red-600)]/50"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default FormProgress;
