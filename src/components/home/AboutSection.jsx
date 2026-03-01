import React from "react";

const AboutSection = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-12 py-12 bg-gradient-to-b from-[#f8fafc] to-[#ffffff]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* LEFT COLUMN */}
        <div className="lg:w-1/2 max-w-xl w-full">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1 w-12 bg-[#2DA3B4] rounded-full"></span>
            <p className="text-sm font-bold text-[#2DA3B4] uppercase tracking-wider">Core Codexa</p>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            We design, develop, and{" "}
            <span className="bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent
">scale IT Systems</span> 
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            Core Codexa crafts innovative digital experiences with creativity, technical expertise, and a customer-first approach to elevate your business.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
            <div className="bg-white shadow-lg rounded-xl p-4 flex-1 text-center">
              <h3 className="text-3xl font-bold text-gray-900">99%</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Client Satisfaction</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 flex-1 text-center">
              <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Expert Support</p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-[#2DA3B4]/10 border-l-4 border-[#2DA3B4] rounded-xl p-6 shadow-md">
            <p className="italic text-gray-900 font-medium">
              "Our highly trained team delivers practical solutions and expert advice to meet your business goals."
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-full w-full mt-8 lg:mt-0">
          <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 relative">
            <img
              src="https://codesthinker.com/about/about2.jpg"
              alt="Our Team"
              className="w-full h-auto object-cover"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg text-center">
              <div className="text-[#2DA3B4] font-bold text-lg">10+</div>
              <div className="text-gray-700 text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;