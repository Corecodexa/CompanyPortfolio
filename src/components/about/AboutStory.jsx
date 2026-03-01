import React, { useEffect, useRef, useState } from "react";

const AboutStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 px-12   bg-gradient-to-b from-[#0c1f46]/10 via-white to-[#0c1f46]/10 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3fe8e2]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2DA3B4]/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#2DA3B4 1px, transparent 1px), linear-gradient(to right, #2DA3B4 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        {/* Left Column - Text */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] rounded-full" />
            <p className="text-sm font-bold text-[#2DA3B4] uppercase tracking-wider">Our Story</p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Building Tomorrow's{" "}
            <span className="bg-gradient-to-r from-[#3fe8e2] via-[#2DA3B4] to-[#1E6B7A] bg-clip-text text-transparent relative inline-block">
              Technology Today
            </span>
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
            <p className="text-lg">
              <span className="font-semibold text-[#2DA3B4]">Founded in 2014</span>, Core Codexa has grown from a small
              startup to a trusted technology partner for businesses worldwide.
            </p>
            <p>
              We specialize in web development, mobile applications, cloud solutions, and digital transformation services.
              Our team combines technical excellence with creative innovation to deliver solutions that drive real results.
            </p>
            <p className="italic border-l-4 border-[#3fe8e2] pl-4 py-2 bg-white/50 rounded-r-lg">
              "We pride ourselves on our client-focused approach, delivering projects on time and within budget while
              maintaining the highest quality standards."
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div
          className={`relative transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1580894908361-967195033215?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww"
              alt="Core Codexa team collaborating in modern office"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2DA3B4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating experience badge */}
            <div className="absolute -bottom-0 -left-0 bg-gradient-to-br from-[#2DA3B4] to-[#1E6B7A] rounded-xl px-5 py-3 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-white font-bold text-4xl leading-none">10+</div>
                  <div className="text-white/80 text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>

           
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 border-2 border-[#3fe8e2]/20 rounded-full animate-pulse" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 border-2 border-[#2DA3B4]/20 rounded-full animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
};

export default AboutStory;