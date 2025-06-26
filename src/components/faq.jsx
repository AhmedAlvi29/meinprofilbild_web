import React from "react"
import { useState } from 'react';

const faqs = [
  "How do we use your images?",
  "What happens to my photos after processing?",
  "What type of photos should I upload?",
  "Which photo formats are supported?",
  "Can I use my generated profile pictures everywhere?",
  "How long does the process take?",
  "What is your refund policy?",
  "I'm interested in a partnership for my company. What do you offer for corporate clients?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold mb-6">FAQ</h1>
      <p className="mb-10 text-gray-700">
        If you have any further questions, please do not hesitate to contact us at{' '}
        <a href="mailto:info@meinprofilbild.de" className="text-blue-600 underline">
          info@meinprofilbild.de
        </a>
        .
      </p>
      <div className="space-y-4">
        {faqs.map((question, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {question}
              <span className="ml-4">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                <p>Answer content goes here.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};