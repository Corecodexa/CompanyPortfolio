
import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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


  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* left column: header + accordion */}
        <div className="flex flex-col">
          <div className="text-left mb-8" style={{ opacity: 1, transform: 'none' }}>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-2">
              Everything you need to know about Core Condexa services.
            </p>
          </div>

          <div className="space-y-4 flex-1">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                style={{ opacity: 1, transform: 'none' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full group cursor-pointer px-5 py-2 text-left flex items-center justify-between hover:bg-gradient-to-r from-cyan-500/10 to-[#2DA3B4]/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="sm:w-12 w-8 sm:h-12 h-8 rounded-full flex items-center justify-center bg-[#2DA3B4] group-hover:bg-[#1a7a85] transition-all text-white"
                    >
                      <span className="text-white text-sm sm:text-lg font-bold">{index + 1}</span>
                    </div>
                    <span className="font-semibold text-gray-800 sm:text-lg group-hover:text-[#2DA3B4] transition-all">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-2xl font-light text-[#2DA3B4] group-hover:text-gray-800 transition-all">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                {/* collapsible answer */}
                {openIndex === index && (
                  <div className="px-5 py-4 text-gray-600 border-t border-gray-100 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* right column: image */}
        <div className="h-full flex" style={{ opacity: 1, transform: 'none' }}>
          <img
            alt="Core Condexa FAQ Illustration"
            className="rounded-2xl shadow-lg w-full h-full object-cover hover:translate-y-1 transition-all duration-300"
            src="https://lh7-us.googleusercontent.com/-TP8G9BYgYbI4Oq_7r6Pz4GoPBhJrDgT5BMq1PKP0KF826nAOHdK0aCxl4Ddk5us944nf5wvRPPTde3NcCutR2VReWjeCIH_Jhuwcr1scM5UdM5ZQyCDXP-CSql2E4AN5UlbmH_vukWDMdcSZuQWswQ"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;