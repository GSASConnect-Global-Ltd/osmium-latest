"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  captcha: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    captcha: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email format is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.captcha) newErrors.captcha = "Please verify you're not a robot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Optional: replace toast with alert
      alert("Thanks! We'll respond within 24 hours.");
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-8 border rounded-lg text-center shadow-lg">
        <CheckCircle className="w-16 h-16 text-black mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-700">We will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 border rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="font-medium">Name *</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={e => handleInputChange("name", e.target.value)}
              className={`w-full p-3 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="font-medium">Email *</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => handleInputChange("email", e.target.value)}
              className={`w-full p-3 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="font-medium">Phone *</label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={e => handleInputChange("phone", e.target.value)}
              className={`w-full p-3 border rounded ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label htmlFor="service" className="font-medium">Service Interested In *</label>
            <select
              id="service"
              value={formData.service}
              onChange={e => handleInputChange("service", e.target.value)}
              className={`w-full p-3 border rounded ${errors.service ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select a service</option>
              <option value="ai-robotics">AI & Robotics</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="automation">Process Automation</option>
              <option value="consulting">Tech Consulting</option>
              <option value="custom-development">Custom Development</option>
            </select>
            {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="font-medium">Message *</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={e => handleInputChange("message", e.target.value)}
            className={`w-full p-3 border rounded min-h-[8rem] ${errors.message ? "border-red-500" : "border-gray-300"}`}
            placeholder="Tell us about your project or inquiry..."
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* CAPTCHA */}
        <div className="flex items-center space-x-2">
          <input
            id="captcha"
            type="checkbox"
            checked={formData.captcha}
            onChange={e => handleInputChange("captcha", e.target.checked)}
            className={`w-4 h-4 ${errors.captcha ? "border-red-500" : "border-gray-300"}`}
          />
          <label htmlFor="captcha" className="text-sm">I am not a robot (CAPTCHA verification) *</label>
        </div>
        {errors.captcha && <p className="text-sm text-red-500">{errors.captcha}</p>}

        <button
          type="submit"
          className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
