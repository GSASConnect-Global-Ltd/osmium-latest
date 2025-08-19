import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "123 Tech Street, Innovation City, IC 12345",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1-123-456-7890",
      href: "tel:+11234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@techcompany.com",
      href: "mailto:info@techcompany.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Monday - Friday: 9AM - 5PM",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactInfo.map((info, index) => {
        const Icon = info.icon;
        const content = (
          <div
            key={index}
            className="p-6 text-center border border-gray-200 rounded-lg transition-shadow duration-300 hover:shadow-lg"
          >
            <Icon className="w-8 h-8 mx-auto mb-4 text-black" />
            <h3 className="font-semibold mb-2">{info.label}</h3>
            <p className="text-gray-600 text-sm">{info.value}</p>
          </div>
        );

        return info.href ? (
          <a key={index} href={info.href} className="block">
            {content}
          </a>
        ) : (
          content
        );
      })}
    </div>
  );
};

export default ContactDetails;
