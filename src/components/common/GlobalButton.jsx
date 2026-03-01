import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GlobalButton = ({ 
  text, 
  link, 
  className = "", 
  variant = "primary", // primary, secondary, outline, dark
  showArrow = true,
  showShine = true,
  onClick,
  icon: Icon,
  type = "button",
  isActive = false,
  light = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-300 group overflow-hidden";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-sm hover:shadow-lg transition-all",
    secondary: `bg-slate-50 ${light ? '!bg-white/10 !text-white !border-white/20 hover:!bg-white/20' : 'text-slate-900 border-slate-200 hover:bg-slate-100'} border`,
    outline: `bg-transparent ${light ? '!text-white !border-white/40 hover:!border-white hover:!bg-white/5' : 'text-slate-900 border-slate-300 hover:border-primary hover:text-primary'} border`,
    dark: "bg-slate-900 hover:bg-slate-950 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-50 border border-slate-100"
  };

  const activeStyles = {
    primary: "ring-2 ring-primary ring-offset-2",
    secondary: "bg-primary/10",
    outline: "bg-white text-primary",
    dark: "ring-2 ring-gray-900 ring-offset-2",
    ghost: "bg-primary text-white border-primary shadow-lg shadow-primary/20"
  };

  const sizes = {
    sm: "py-1.5 px-3.5 text-xs",
    md: "py-2.5 px-6 text-sm",
    lg: "py-3.5 px-8 text-base"
  };

  const currentSize = typeof sizes[className] !== 'undefined' ? sizes[className] : sizes.md;

  const content = (
    <>
      {/* Button Shine Effect */}
      {showShine && variant !== 'dark' && (
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon size={16} className="flex-shrink-0" />}
        {text}
        {showArrow && (
          <motion.svg 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </motion.svg>
        )}
      </span>
    </>
  );

  if (link) {
    return (
      <Link 
        to={link}
        className={`${baseStyles} ${isActive ? activeStyles[variant] : variants[variant]} ${currentSize} rounded-lg ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${isActive ? activeStyles[variant] : variants[variant]} ${currentSize} rounded-lg ${className}`}
    >
      {content}
    </button>
  );
};

export default GlobalButton;
