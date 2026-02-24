import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function useFormState() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact
    name: "",
    email: "",
    phone: "",
    // Vehicle
    vehicleYear: "",
    vehicleMake: "",
    vehicleCustomMake: "",
    vehicleModel: "",
    mileage: "",
    // Service
    tier: "",
    // Symptoms
    symptoms: [],
    notes: "",
    // Urgency
    urgency: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // kept for compatibility but not used in JC form
  const toggleProjectScope = (value) => {
    const current = formData.symptoms || [];
    const updated = current.includes(value)
      ? current.filter((x) => x !== value)
      : [...current, value];
    setFormData({ ...formData, symptoms: updated });
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Required";
      if (!formData.email.trim()) newErrors.email = "Required";
      if (formData.email && !formData.email.includes("@"))
        newErrors.email = "Invalid email";
      if (!formData.phone.trim()) newErrors.phone = "Required";
    }
    if (step === 2) {
      if (!formData.vehicleYear) newErrors.vehicleYear = "Required";
      if (!formData.vehicleMake) newErrors.vehicleMake = "Required";
      if (
        formData.vehicleMake === "Other" &&
        !formData.vehicleCustomMake?.trim()
      ) {
        newErrors.vehicleCustomMake = "Please enter your vehicle make";
      }
      if (!formData.vehicleModel?.trim()) newErrors.vehicleModel = "Required";
    }
    if (step === 3) {
      if (!formData.tier) newErrors.tier = "Please select a service";
    }
    // step 4 (symptoms) is optional — no validation
    if (step === 5) {
      if (!formData.urgency) newErrors.urgency = "Please select a timeline";
    }
    return newErrors;
  };

  const isStepValid = (step) => {
    const errs = validateStep(step);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    const validationErrors = validateStep(formStep);
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setFormStep(formStep + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setErrors({});
    setFormStep(formStep - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          vehicleYear: formData.vehicleYear,
          vehicleMake:
            formData.vehicleMake === "Other"
              ? formData.vehicleCustomMake
              : formData.vehicleMake,
          vehicleModel: formData.vehicleModel,
          mileage: formData.mileage || "",
          tier: formData.tier,
          symptoms: formData.symptoms || [],
          notes: formData.notes || "",
          urgency: formData.urgency,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        resetForm();
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicleYear: "",
      vehicleMake: "",
      vehicleCustomMake: "",
      vehicleModel: "",
      mileage: "",
      tier: "",
      symptoms: [],
      notes: "",
      urgency: "",
    });
    setErrors({});
  };

  return {
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
    handleSubmit,
    resetForm,
    isStepValid,
  };
}
