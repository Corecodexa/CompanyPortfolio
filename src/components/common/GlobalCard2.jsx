import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from './GlobalHeading';

const GlobalCard2 = ({ 
  icon, 
  title, 
  description, 
  badge,
  index,
  compact = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2 cursor-pointer ${
        compact ? 'p-5 md:p-6' : 'p-8'
      }`}
    >
      <div className={`${
        compact ? 'w-10 h-10 mb-4' : 'w-12 h-12 mb-6'
      } bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300`}>
        <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
          {icon && React.cloneElement(icon, { 
            size: compact ? 18 : 22,
            className: "transition-colors duration-300"
          })}
        </div>
      </div>
      
      <GlobalHeading 
        badge={badge}
        title={title}
        description={description}
        center={false}
        light={false}
        isCard={true}
        className="w-full"
      />
    </motion.div>
  );
};

export default GlobalCard2;
