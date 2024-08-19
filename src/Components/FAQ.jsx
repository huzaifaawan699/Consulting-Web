import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of consulting services including market research, brand strategy, and digital marketing."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us through our contact form on the website, or email us directly at contact@example.com."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the service package you choose. Please contact us for a detailed quote."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free initial consultation to understand your needs and provide you with a tailored proposal."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-8 bg-teal-200" id="faq">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mt-2">Find answers to some of the most common questions we receive.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border-b border-gray-300"
          >
            <button
              className="w-full text-left p-4 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <p className="p-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
