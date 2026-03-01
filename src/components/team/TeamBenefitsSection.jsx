import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import { FaUsers, FaLaptopCode, FaCoffee, FaRocket } from 'react-icons/fa';

const BenefitCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(45,163,180,0.15)] border border-gray-100 flex flex-col h-full"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3fe8e2]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Container with Glass Effect */}
      <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-[#2DA3B4] transition-all duration-500 group-hover:bg-[#2DA3B4] group-hover:text-white group-hover:scale-110 group-hover:rotate-[10deg] shadow-sm">
        <div className="z-10 text-2xl">
          {icon}
        </div>
        {/* Subtle glow behind icon on hover */}
        <div className="absolute inset-0 rounded-2xl bg-[#2DA3B4] blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2DA3B4] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-[15px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>

      {/* Modern Bottom Accent - Expanding from center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] transition-all duration-500 group-hover:w-[80%] rounded-full" />
    </motion.div>
  );
};

const TeamBenefitsSection = () => {
  const benefits = [
    {
      title: 'Team Collaboration',
      description: 'Work with the best minds in the industry on challenging projects that push boundaries.',
      icon: <FaUsers />,
    },
    {
      title: 'Flexible Work',
      description: 'We trust you. Balance your life with our mature, remote-first work culture and flexible hours.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'Modern Office',
      description: 'Need a change of pace? Access our high-tech hubs and vibrant community spaces.',
      icon: <FaCoffee />,
    },
    {
      title: 'Growth Path',
      description: 'Fuel your ambition with dedicated learning budgets and clear, merit-based advancement.',
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-gray-50/50 rounded-[4rem] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <GlobalHeading
          badge="Our Culture"
          title="Why You'll Love"
          highlightText="Working Here"
          description="We've built a culture that empowers you to do your best work while living your best life."
          center={true}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} index={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamBenefitsSection;