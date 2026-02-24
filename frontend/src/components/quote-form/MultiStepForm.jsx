import { useFormState } from "../../hooks/useFormState";
import FormProgress from "./FormProgress";
import ContactStep from "./ContactStep";
import VehicleStep from "./VehicleStep";
import ServiceStep from "./ServiceStep";
import IssueStep from "./IssueStep";
import BudgetStep from "./BudgetStep";
import ReviewStep from "./ReviewStep";
import CTAButton from "../CTAButton";

function MultiStepForm({ scrollRef }) {
  const {
    formStep,
    setFormStep,
    formData,
    submitted,
    loading,
    errors,
    handleFieldChange,
    toggleProjectScope,
    handleNext,
    handleBack,
    handleSubmit: submitForm,
    resetForm,
    isStepValid,
  } = useFormState();

  // Scroll to top of form when changing steps
  const handleNextWithScroll = () => {
    handleNext();
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleBackWithScroll = () => {
    handleBack();
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleSubmitWithScroll = async () => {
    await submitForm();
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-black mb-4">Thank You!</h3>
        <p className="text-lg text-gray-600 mb-2">
          We've received your quote request and will get back to you within 24
          hours.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Check your spam folder if you don't see our email.
        </p>
        <CTAButton onClick={resetForm}>Submit Another Quote</CTAButton>
      </div>
    );
  }

  return (
    <div
      className="
    relative
    bg-white
    text-black
    rounded-2xl
    p-6 md:p-8
    min-h-100
    border
    border-[rgba(220,38,38,0.35)]
    shadow-[0_0_0_2px_rgba(220,38,38,0.6),0_0_40px_rgba(220,38,38,0.4),0_0_80px_rgba(0,0,0,0.8)]
  "
    >
      <FormProgress currentStep={formStep} />

      {formStep === 1 && (
        <ContactStep
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
      )}
      {formStep === 2 && (
        <VehicleStep
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
      )}
      {formStep === 3 && (
        <ServiceStep
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
      )}
      {formStep === 4 && (
        <IssueStep
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
      )}
      {formStep === 5 && (
        <BudgetStep
          formData={formData}
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
      )}
      {formStep === 6 && (
        <ReviewStep formData={formData} setFormStep={setFormStep} />
      )}

      <div className="flex gap-4 mt-8">
        {formStep > 1 && (
          <button
            type="button"
            onClick={handleBackWithScroll}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-black font-bold rounded-lg hover:border-black transition-all active:scale-95"
          >
            Back
          </button>
        )}
        {formStep < 6 ? (
          <button
            type="button"
            onClick={handleNextWithScroll}
            disabled={!isStepValid(formStep)}
            className="flex-1 px-6 py-3 jc-form-btn-primary transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 disabled:saturate-0"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmitWithScroll}
            disabled={loading}
            className="flex-1 px-6 py-3 jc-form-btn-primary transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 disabled:saturate-0 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Quote"
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
