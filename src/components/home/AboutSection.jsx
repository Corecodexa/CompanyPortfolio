import React from "react";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-b from-[#f8fafc] to-white">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#2DA3B4]/20 rounded-full blur-3xl opacity-40"></div>

<<<<<<< HEAD
        {/* LEFT COLUMN */}
        <div className="lg:w-2/2 max-w-xl w-full">
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
              <h3 className="text-3xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Client Satisfaction</p>
=======
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-14 bg-[#2DA3B4] rounded-full"></span>
              <p className="text-sm font-semibold text-[#2DA3B4] uppercase tracking-widest">
                Core Codexa
              </p>
>>>>>>> f03808aa8152741542b1428bbb01eb7ada8e68ea
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
              We design, develop, and{" "}
              <span className="bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent">
                scale IT systems
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Core Codexa crafts innovative digital experiences with creativity,
              technical expertise, and a customer-first approach to elevate your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl px-5 py-2 text-center shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">99%</h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Client Satisfaction
                </p>
              </div>

              <div className="bg-white rounded-2xl px-5 py-2 text-center shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Expert Support
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative bg-[#2DA3B4]/10 rounded-2xl px-5 py-3 border border-[#2DA3B4]/20 shadow-sm">
              <p className="text-gray-800 text-lg italic font-medium leading-relaxed">
                “Our highly trained team delivers practical solutions and expert
                advice to meet your business goals.”
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://codesthinker.com/about/about2.jpg"
                alt="Our Team"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-8 py-5 shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-[#2DA3B4]">10+</div>
              <div className="text-sm font-medium text-gray-600">
                Years Experience
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;