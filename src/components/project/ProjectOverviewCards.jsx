import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe2, Layers, Target } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';

const OverviewCard = ({ icon: Icon, title, description, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
    >
      {/* Decorative Glow */}
      <div 
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10">
        {/* Icon Container */}
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          <Icon size={28} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2DA3B4] transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectOverviewCards = () => {
  const cards = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "We align every technical decision with your core business objectives and long-term market strategy.",
      color: "#0ea5e9" // Sky
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Building scalable, clean, and maintainable codebases that grow seamlessly with your user base.",
      color: "#2DA3B4" // Brand Primary
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Optimized performance and localization strategies to ensure your project succeeds in any market.",
      color: "#8b5cf6" // Violet
    },
    {
      icon: BarChart3,
      title: "Data Driven",
      description: "Integrating advanced analytics and tracking to provide actionable insights into user behavior.",
      color: "#3fe8e2" // Brand Secondary
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto">
        <GlobalHeading 
          badge="Overview"
          title="Our Strategic"
          highlightText="Approach"
          description="We blend technical excellence with business intelligence to deliver projects that truly move the needle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {cards.map((card, index) => (
            <OverviewCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewCards;
