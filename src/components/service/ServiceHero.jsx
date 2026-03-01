import React, { useEffect, useState } from "react";
import Button from "../common/Button";

const ServiceHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative pt-12 h-screen flex items-center justify-center text-center overflow-hidden"
      aria-label="Core Codexa Services Hero Section"
    >
      {/* Optimized background image with loading state */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] scale-105 hover:scale-110"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1454165833767-027eeef1596e?auto=format&fit=crop&w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Our professional digital services"
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated accent lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[#3fe8e2]/30 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-[#3fe8e2]/30 rounded-br-3xl" />

      {/* Content with animation */}
      <div 
        className={`relative z-10 px-4 sm:px-6 max-w-4xl mx-auto transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Eyebrow text */}
        <div className="mb-4 inline-block">
          <span className="px-4 py-2 text-sm font-medium text-[#3fe8e2] bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Our Expertise
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Innovative{" "}
          <span className="bg-gradient-to-r from-[#3fe8e2] via-[#2DA3B4] to-[#1E6B7A] bg-clip-text text-transparent inline-block">
            Digital Services
          </span>
        </h1>

        {/* Description with animated underline */}
        <div className="relative">
          <p className="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 max-w-3xl mx-auto font-light">
            Empowering your business with cutting-edge technology solutions 
            tailored to drive growth and digital excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] mx-auto rounded-full" />
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 mb-5 max-w-2xl mx-auto">
          {[
            { value: '20+', label: 'Core Services' },
            { value: '24/7', label: 'Technical Support' },
            { value: '100%', label: 'Commitment' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center py-2 px-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#3fe8e2]">{stat.value}</div>
              <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button with hover effect */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            text="Explore Services" 
            variant="primary"
            size="large"
            className="group relative overflow-hidden bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] hover:from-[#2DA3B4] hover:to-[#3fe8e2] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3fe8e2]/20"
            icon={
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            }
          />
          
          {/* Secondary CTA */}
          <button className="px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group">
            <span>Free Consultation</span>
            <svg 
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
