import React from 'react';
import GlobalHeading from '../common/GlobalHeading';
import { FaRocket, FaShieldAlt, FaLightbulb, FaUsers } from 'react-icons/fa';

const ValueCard = ({ title, description, icon, index }) => {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#2DA3B4]/20 hover:-translate-y-2 overflow-hidden border border-gray-100"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3fe8e2]/10 to-[#2DA3B4]/10 rounded-bl-[100px] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#2DA3B4]/10" />
      
      {/* Icon */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2DA3B4]/10 text-[#2DA3B4] transition-all duration-500 group-hover:bg-[#2DA3B4] group-hover:text-white group-hover:rotate-6">
        {React.cloneElement(icon, { size: 30 })}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2DA3B4] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>

      {/* Index Number Backdrop */}
      <div className="absolute bottom-[-10px] right-[-10px] text-8xl font-black text-gray-50 select-none group-hover:text-[#2DA3B4]/5 transition-colors">
        {index + 1}
      </div>
    </div>
  );
};

const TeamValuesSection = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions for the digital age.',
      icon: <FaRocket />,
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and ethical practices.',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Excellence',
      description:
        'Striving for the highest quality in every line of code we write.',
      icon: <FaLightbulb />,
    },
    {
      title: 'Collaboration',
      description:
        'Achieving more together through unified goals and teamwork.',
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-[#f8fafc] overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3fe8e2]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2DA3B4]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <GlobalHeading
          badge="Foundations"
          title="Our Core"
          highlightText="Values"
          description="The principles that drive every decision and line of code we write."
          center={true}
          className="mb-16"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamValuesSection;
