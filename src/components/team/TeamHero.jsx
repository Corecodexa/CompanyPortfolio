import React, { useEffect, useState } from "react";
import Button from "../common/Button";

const TeamHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 min-h-[90vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden"
      aria-label="Core Codexa Team Hero Section"
    >
      {/* Optimized background image with loading state */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] scale-105 hover:scale-110"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Our expert team collaborating"
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
            Meet the Experts
          </span>
        </div>

        {/* Main heading */}

        <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">

          Our{" "}
          <span className="bg-gradient-to-r from-[#3fe8e2] via-[#2DA3B4] to-[#1E6B7A] bg-clip-text text-transparent inline-block">
            Professional Team
          </span>
        </h1>

        {/* Description with animated underline */}
        <div className="relative">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 max-w-2xl lg:max-w-3xl mx-auto font-light">
            A diverse group of passionate innovators, designers, and developers 
            dedicated to turning your vision into digital reality.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] mx-auto rounded-full" />
        </div>

        {/* Stats section */}

        <div className="flex  items-center justify-center  gap-6 mt-6 mb-5 max-w-xl mx-auto">

          {[
            { value: '30+', label: 'Creative Minds' },
            // { value: '10+', label: 'Global Offices' },
            { value: '24/7', label: 'Dedicated Support' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center py-2 px-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <button className="text-xl md:text-2xl  md:px-4 font-bold text-[#3fe8e2]">{stat.value}</button><br />
              <button className="text-sm md:px-4 text-gray-300 mt-1">{stat.label}</button>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default TeamHero;
