import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from './GlobalHeading';

const GlobalCard1 = ({ 
  icon, 
  title, 
  description, 
  badge,
  variants, 
  index,
  bgImage
}) => {
  return (
    <motion.div 
      className={`relative rounded-2xl p-4 flex flex-col items-center justify-center border transition-all duration-300 aspect-square cursor-pointer group overflow-hidden max-w-[280px] mx-auto ${
        bgImage 
          ? 'border-white/10 hover:border-primary hover:shadow-2xl' 
          : 'bg-white border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5'
      }`}
      variants={variants}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image with Overlay */}
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/80 group-hover:via-slate-900/70 transition-colors duration-300" />
        </>
      )}

      <div className="relative z-10 flex justify-center mb-3">
        <div className={`rounded-xl p-2.5 transition-all duration-300 ${
          bgImage 
            ? 'bg-white/10 backdrop-blur-md text-white group-hover:bg-primary group-hover:text-white' 
            : 'bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white'
        }`}>
          {icon && React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
      </div>
      
      <GlobalHeading 
        badge={badge}
        title={title}
        description={description}
        center={true}
        light={!!bgImage}
        isCard={true}
        className="relative z-10"
      />
    </motion.div>
  );
};

export default GlobalCard1;
