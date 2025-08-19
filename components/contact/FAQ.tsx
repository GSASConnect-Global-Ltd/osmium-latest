"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in AI & Robotics, Machine Learning solutions, Process Automation, Tech Consulting, and Custom Development. Our team helps businesses leverage cutting-edge technology to solve complex challenges and drive innovation.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple automation projects may take 2-4 weeks, while comprehensive AI solutions can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work with startups or only large enterprises?",
      answer: "We work with organizations of all sizes, from innovative startups to Fortune 500 companies. Our solutions are scalable and can be tailored to fit your budget and requirements.",
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular check-ins and updates. Our process includes discovery, planning, development, testing, deployment, and ongoing support. You'll be involved throughout the entire journey.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and scaling assistance. Our team ensures your solution continues to perform optimally as your business grows.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement industry-leading security practices including encryption, secure APIs, compliance with GDPR/CCPA, and regular security audits. Your data protection is our top priority.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-6 py-4 bg-black text-white font-medium text-left hover:bg-gray-800 transition-colors"
          >
            {faq.question}
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white text-gray-800 border-t">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
