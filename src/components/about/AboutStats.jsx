import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaSmile, FaGlobe, FaDollarSign, FaChartLine } from 'react-icons/fa';

const stats = [
  { id: 1, value: 5, suffix: '+', label: 'Years of Experience', icon: FaBriefcase },
  { id: 2, value: 150, suffix: '+', label: 'Satisfied Clients', icon: FaSmile },
  { id: 3, value: 17, suffix: '+', label: 'Countries We Operate', icon: FaGlobe },
  { id: 4, value: 20, suffix: '+', label: 'Managed Marketing Fund', icon: FaDollarSign },
  { id: 5, value: 150, suffix: '+', label: 'Clients Gains', icon: FaChartLine },
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
    <section className="py-16 px-6  text-center border-t border-white/5">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-14">
        <p className="text-xs border max-w-40 mx-auto rounded-3xl  bg-[#3dc7c3]/10 py-1 font-bold text-[#3dc7c3] uppercase tracking-widest mb-3">
          Our Achievements
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
          Measurable <span className='bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent'>Progress</span> 
        </h2>
        <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
          We connect your business directly to your target audience, eliminating the need to search for clients. They'll find their way to you.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
        {stats.map((stat) => {
          const count = useCountUp(stat.value);
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white/[0.02] border border-cyan-400/40 shadow shadow-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-colors hover:bg-white/[0.04]"
            >
              <Icon className="w-8 h-8 p-2 rounded-md bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4]  text-white mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#39d6d0] mb-1">
                {count.toLocaleString()}<span className="text-cyan-500">{stat.suffix}</span>
              </h3>
              <p className="text-gray-400 text-[11px] md:text-xs uppercase tracking-wider mt-1 text-center">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutStats;