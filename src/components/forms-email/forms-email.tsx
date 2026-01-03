import { useState } from "react";
import "./forms-email.css";
import { formsEmailContent } from "./forms-email.content";

type Language = "pt" | "en";

interface FormData {
  // Step 1
  name: string;
  instagram: string;
  email: string;
  phone: string;
  // Step 2
  eventType: string;
  eventLocation: string;
  eventDate: string;
  numberOfGuests: string;
  // Step 3
  observations: string;
}

const getSystemLanguage = (): Language => {
  const language = navigator.language.toLowerCase();
  return language.startsWith("pt") ? "pt" : "en";
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 || digits.length === 11;
};

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  const area = digits.slice(0, 2);
  const local = digits.slice(2);
  let formatted = `(${area}) `;

  if (local.length > 8) {
    const first = local.slice(0, 1);
    const middle = local.slice(1, 5);
    const last = local.slice(5, 9);
    formatted += `${first} ${middle}${last ? "-" + last : ""}`;
  } else if (local.length > 4) {
    const prefix = local.slice(0, 4);
    const suffix = local.slice(4, 8);
    formatted += `${prefix}${suffix ? "-" + suffix : ""}`;
  } else {
    formatted += local;
  }

  return formatted.trim();
};

export function FormsEmail() {
  const content = formsEmailContent[getSystemLanguage()];
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    instagram: "",
    email: "",
    phone: "",
    eventType: "Social",
    eventLocation: "",
    eventDate: "",
    numberOfGuests: "",
    observations: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? formatPhone(value) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
    // Clear error for this field when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "required";
      if (!formData.email.trim()) newErrors.email = "required";
      else if (!validateEmail(formData.email)) newErrors.email = "invalid";
      if (!formData.phone.trim()) newErrors.phone = "required";
      else if (!validatePhone(formData.phone)) newErrors.phone = "invalid";
    }

    if (step === 2) {
      if (!formData.eventLocation.trim()) newErrors.eventLocation = "required";
      if (!formData.eventDate) newErrors.eventDate = "required";
      if (
        !formData.numberOfGuests.trim() ||
        parseInt(formData.numberOfGuests) <= 0
      )
        newErrors.numberOfGuests = "required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the email content
      const emailBody = `
Nome: ${formData.name}
Instagram: ${formData.instagram || "N/A"}
Email: ${formData.email}
Telefone: ${formData.phone}

Tipo de Evento: ${formData.eventType}
Local do Evento: ${formData.eventLocation}
Data do Evento: ${formData.eventDate}
Número de Convidados: ${formData.numberOfGuests}

Observações:
${formData.observations || "N/A"}
      `.trim();

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_0zq0qus",
            template_id: "template_w0oq72s",
            user_id: "Yys9SxJ6OIKMpkSgG",
            template_params: {
              from_name: formData.name,
              instagram: formData.instagram || "N/A",
              from_email: formData.email,
              to_email: "tampixhits@gmail.com",
              phone: formData.phone,
              event_type: formData.eventType,
              event_location: formData.eventLocation,
              event_date: formData.eventDate,
              number_of_guests: formData.numberOfGuests,
              observations: formData.observations || "N/A",
            },
          }),
        }
      );

      if (response.ok) {
        // Success - show confirmation and reset
        alert(content.successMessage || "Orçamento enviado com sucesso!");
        setFormData({
          name: "",
          instagram: "",
          email: "",
          phone: "",
          eventType: "Social",
          eventLocation: "",
          eventDate: "",
          numberOfGuests: "",
          observations: "",
        });
        setCurrentStep(1);
      } else {
        alert(content.errorMessage || "Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(content.errorMessage || "Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote">
      <div className="forms-email">
        <h1>{content.title}</h1>
        <p className="forms-email__description">{content.description}</p>

        <div className="forms-email__container">
          {/* Progress Indicators */}
          <div className="forms-email__progress">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`forms-email__step-indicator ${
                  step === currentStep
                    ? "active"
                    : step < currentStep
                    ? "completed"
                    : ""
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="forms-email__step">
                <div className="forms-email__field">
                  <label>{content.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? "error" : ""}
                    placeholder={content.namePlaceholder}
                  />
                  {errors.name && (
                    <span className="forms-email__error">
                      {errors.name === "required"
                        ? content.fieldRequired
                        : content.invalidName}
                    </span>
                  )}
                </div>

                <div className="forms-email__field">
                  <label>{content.instagram}</label>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    placeholder={content.instagramPlaceholder}
                  />
                </div>

                <div className="forms-email__field">
                  <label>{content.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "error" : ""}
                    placeholder={content.emailPlaceholder}
                  />
                  {errors.email && (
                    <span className="forms-email__error">
                      {errors.email === "required"
                        ? content.fieldRequired
                        : content.invalidEmail}
                    </span>
                  )}
                </div>

                <div className="forms-email__field">
                  <label>{content.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? "error" : ""}
                    placeholder={content.phonePlaceholder}
                  />
                  {errors.phone && (
                    <span className="forms-email__error">
                      {errors.phone === "required"
                        ? content.fieldRequired
                        : content.invalidPhone}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="forms-email__button forms-email__button--next"
                >
                  {content.nextButton}
                </button>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="forms-email__step">
                <div className="forms-email__field">
                  <label>{content.eventType}</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                  >
                    <option value="private">
                      {content.eventTypeOptions.private}
                    </option>
                    <option value="corporate">
                      {content.eventTypeOptions.corporate}
                    </option>
                    <option value="wedding">
                      {content.eventTypeOptions.wedding}
                    </option>
                    <option value="other">
                      {content.eventTypeOptions.other}
                    </option>
                  </select>
                </div>

                <div className="forms-email__field">
                  <label>{content.eventLocation}</label>
                  <input
                    type="text"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleInputChange}
                    className={errors.eventLocation ? "error" : ""}
                    placeholder={content.eventLocationPlaceholder}
                  />
                  {errors.eventLocation && (
                    <span className="forms-email__error">
                      {content.fieldRequired}
                    </span>
                  )}
                </div>

                <div className="forms-email__field">
                  <label>{content.eventDate}</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className={errors.eventDate ? "error" : ""}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.eventDate && (
                    <span className="forms-email__error">
                      {content.fieldRequired}
                    </span>
                  )}
                </div>

                <div className="forms-email__field">
                  <label>{content.numberOfGuests}</label>
                  <input
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    className={errors.numberOfGuests ? "error" : ""}
                    placeholder={content.numberOfGuestsPlaceholder}
                  />
                  {errors.numberOfGuests && (
                    <span className="forms-email__error">
                      {content.fieldRequired}
                    </span>
                  )}
                </div>

                <div className="forms-email__buttons">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="forms-email__button forms-email__button--previous"
                  >
                    {content.previousButton}
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="forms-email__button forms-email__button--next"
                  >
                    {content.nextButton}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="forms-email__step">
                <div className="forms-email__field">
                  <label>{content.observations}</label>
                  <textarea
                    name="observations"
                    value={formData.observations}
                    onChange={handleInputChange}
                    placeholder={content.observationsPlaceholder}
                    rows={6}
                  />
                </div>

                <div className="forms-email__buttons">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="forms-email__button forms-email__button--previous"
                  >
                    {content.previousButton}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="forms-email__button forms-email__button--submit"
                  >
                    {isSubmitting ? content.submitting : content.submitButton}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
