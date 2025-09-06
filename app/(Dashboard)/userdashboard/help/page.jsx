"use client";

import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
} from "react-icons/fa";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support request submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "How can I reset my password?",
      answer: "Go to Settings > Security to change your password.",
    },
    {
      question: "How do I update my payment method?",
      answer: "Navigate to Billing & Payments to update your card.",
    },
    {
      question: "How can I track my orders?",
      answer: "Go to Orders page and click on an order to track its status.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Support & Help
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find answers to common questions or contact our support team for
            assistance.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <FaQuestionCircle /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                  {faq.question}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mt-1">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <FaEnvelope /> Contact Support
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Live Support Section */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <FaHeadset /> Live Support
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl text-green-500" />
              <div>
                <p className="text-gray-700 dark:text-gray-200 font-semibold">
                  Call Us
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  +1 (123) 456-7890
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-3xl text-blue-500" />
              <div>
                <p className="text-gray-700 dark:text-gray-200 font-semibold">
                  Email Us
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  support@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
