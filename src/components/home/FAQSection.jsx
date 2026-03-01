import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer web development, data science solutions, WordPress customization, and UI/UX design tailored to client needs."
    },
    {
      id: 2,
      question: "How long does a project usually take?",
      answer: "Project timelines vary but typically range from 2 to 6 weeks depending on complexity and requirements."
    },
    {
      id: 3,
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide maintenance, updates, and technical support after your project goes live."
    },
    {
      id: 4,
      question: "Can I get a custom design for my brand?",
      answer: "Absolutely. We create custom designs that align with your brand identity and audience."
    },
    {
      id: 5,
      question: "How do I get started with a project?",
      answer: "Simply contact us through the form or email. We'll schedule a free consultation to understand your goals."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-4 md:px-16 bg-gray-50 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-gray-600 text-sm">Have You Any Question</p>
        <h1 className="text-2xl md:text-4xl font-bold">
          <span className="">Frequently</span>{' '}
          <span className='bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent'>Asked Questions</span>
        </h1>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* FAQ Accordion Column */}
        <div className="md:w-1/2 w-full">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="mb-4 overflow-hidden transition-all duration-500"
            >
              {/* FAQ Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-gray-800 flex justify-between items-center">
                  {faq.question}
                  <FaChevronDown 
                    className={`transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </h3>
              </button>

              {/* FAQ Answer Panel */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden bg-white border-l-4 border-[#2DA3B4] text-gray-700 rounded-b-lg shadow-inner px-4 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="py-3">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Illustration Column */}
        <div className="md:w-1/2 w-full group">
          <div className="shine-wrapper rounded-md overflow-hidden">
            <img 
              alt="FAQs Illustration" 
              className="w-full  max-w-md mx-auto rounded-md transform transition-transform duration-500 group-hover:scale-105"
              src="https://codesthinker.com/home/faqs.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;