"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    option: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      option: "",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-20 text-gray-900 bg-gray-50 lg:py-32">
      <div className="container max-w-4xl px-6 mx-auto lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            style={{
              fontFamily: "PP Editorial New",
              fontWeight: 200,
              fontStyle: "normal",
              fontSize: "48px",
              lineHeight: "57.6px",
              letterSpacing: "4%",
              textAlign: "center",
              width: "490px",
              margin: "0 auto",
            }}
            className="mb-6"
          >
            How Would You Like to Engage With Us?
          </p>

          <p
            style={{
              fontFamily: "Satoshi",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "1%",
              textAlign: "center",
              width: "597.64px",
              margin: "0 auto",
            }}
            className="text-gray-600"
          >
            Select the option that best describes your reason for reaching out
            so we can connect with the right team immediately.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-8 text-gray-600"
          style={{
            fontFamily: "Satoshi",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0%",
          }}
        >
          {/* Select Option */}
          <div className="space-y-2" style={{ width: "765px", gap: "12px" }}>
            <label htmlFor="option" className="block">
              Select Option
            </label>
            <select
              id="option"
              value={formData.option}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, option: e.target.value }))
              }
              className="w-full px-4 py-3 text-gray-600 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="">Choose your engagement type</option>
              <option value="project">Project Collaboration</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="investment">Investment Inquiry</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* First + Last Name */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ width: "765px", gap: "12px" }}
          >
            <div className="space-y-2">
              <label htmlFor="firstName" className="block">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                }
                placeholder="Enter your first name"
                required
                className="w-full px-4 py-3 text-gray-600 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block">
                Surname/Last name
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                }
                placeholder="Enter your last name"
                required
                className="w-full px-4 py-3 text-gray-600 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2" style={{ width: "765px", gap: "12px" }}>
            <label htmlFor="email" className="block">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 text-gray-600 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Message */}
          <div className="space-y-2" style={{ width: "765px", gap: "12px" }}>
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Tell us more about your inquiry..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 min-h-[120px] resize-none"
              required
            />
          </div>

          {/* Submit Button - aligned left */}
          <div className="w-full pt-4" style={{ width: "765px" }}>
            <button
              type="submit"
              style={{
                width: "267px",
                height: "56px",
                padding: "16px 24px",
                borderRadius: "12px",
                borderWidth: "2px",
              }}
              className="text-lg font-semibold text-white transition-colors bg-black hover:bg-gray-600"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Toast */}
        {submitted && (
          <div className="p-4 mt-6 font-medium text-center text-green-800 bg-green-100 rounded-lg">
            ✅ Message sent! We will get back to you within 24 hours.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
