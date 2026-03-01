import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaSmile, FaGlobe, FaDollarSign, FaChartLine } from 'react-icons/fa';

const stats = [
  { id: 1, value: 4, suffix: '+', label: 'Years of Experience', icon: FaBriefcase },
  { id: 2, value: 50, suffix: '+', label: 'Satisfied Clients', icon: FaSmile },
  { id: 3, value: 17, suffix: '+', label: 'Countries We Operate', icon: FaGlobe },
  { id: 4, value: 20, suffix: '+', label: 'Managed Marketing Fund', icon: FaDollarSign },
  { id: 5, value: 290, suffix: '+', label: 'Clients Gains', icon: FaChartLine },
];

// Simple count-up hook
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [end, duration]);
  return count;
};

const AboutStats = () => {
  return (
    <section className="relative bg-gray-50 py-12 px-12 text-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2DA3B4]/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2DA3B4]/10 rounded-full translate-x-48 translate-y-48"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-3xl mx-auto mb-12">
        <p className="text-sm font-bold text-[#2DA3B4] uppercase tracking-wider mb-2">Our Achievements</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent">Progress</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          TOJO GLOBAL connects your business directly to your target audience, eliminating the need to search for clients. They'll find their way to you.
        </p>
      </div>

      {/* Stats grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {stats.map((stat) => {
          const count = useCountUp(stat.value);
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4]">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2DA3B4]">
                {count.toLocaleString()}{stat.suffix}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutStats;