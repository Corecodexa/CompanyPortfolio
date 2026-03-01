import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const GlobalHeading = ({ 
  badge = "", 
  title = "", 
  highlightText = "", 
  description = "",
  center = true,
  className = "",
  light = false,
  isCard = false
}) => {
  const headerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  if (isCard) {
    return (
      <div className={`${center ? 'text-center' : 'text-left'} ${className}`}>
        {badge && (
          <div className={`inline-flex items-center gap-1 ${light ? 'bg-white/10 text-white' : 'bg-primary-muted text-primary'} uppercase tracking-widest text-[8px] font-black px-2 py-0.5 rounded-full mb-2`}> 
            <Star className="w-2 h-2" /> 
            {badge} 
          </div>
        )}
        <h3 className={`text-sm md:text-base font-black uppercase tracking-tight mb-1.5 transition-colors duration-300 ${light ? 'text-white' : 'text-gray-900'}`}>
          {title} <span className="text-primary">{highlightText}</span>
        </h3>
        {description && (
          <p className={`text-[10px] md:text-xs leading-relaxed line-clamp-3 transition-colors duration-300 font-medium ${light ? 'text-gray-200' : 'text-gray-500'}`}>
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div 
      className={`mb-6 sm:mb-8 ${center ? 'text-center' : 'text-left'} ${className}`} 
      initial="initial" 
      whileInView="animate" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={headerAnimation} 
    > 
      {badge && (
        <div className={`inline-flex items-center gap-1 ${light ? 'bg-white/10 text-white' : 'bg-primary-muted text-primary'} uppercase tracking-wider text-xs font-medium px-3 py-1 rounded-full mb-3`}> 
          <Star className="w-3 h-3" /> 
          {badge} 
        </div>
      )} 
      <h2 className={`text-xl sm:text-3xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-gray-900'} mb-2`}> 
        {title} <span className={light ? 'text-primary-light' : 'text-primary'}>{highlightText}</span> 
      </h2> 
      {description && (
        <p className={`text-sm sm:text-base lg:text-lg ${light ? 'text-white/80' : 'text-gray-600'} max-w-2xl mb-4 ${center ? 'mx-auto' : ''} px-4 leading-relaxed`}> 
          {description} 
        </p> 
      )}
    </motion.div>
  );
};

export default GlobalHeading;
