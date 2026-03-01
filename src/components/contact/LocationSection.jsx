import React from 'react';
import { Navigation, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';

// --- Framer Motion Variants ---

// 1. Container variants for the entire section (fade in from below)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};

// 2. Variants for staggered items (Header elements, Map Card)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1], // Smooth custom ease
    },
  },
};

// 3. Variants for the map card container (to trigger its own internal stagger)
const mapCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.15, // Stagger map elements and footer elements
        },
    },
};

// 4. Variants for the buttons (subtle spring effect)
const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
        },
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 8px 20px -5px rgba(45, 163, 180, 0.5)",
        transition: { type: "spring", stiffness: 300 },
    }
};

const LocationSection = () => {
  return (
    <motion.div 
      className="w-full bg-white flex items-center justify-center"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when the component scrolls into view
      viewport={{ once: true, amount: 0.2 }} // Only animate once
    >
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <GlobalHeading
          badge="Location"
          title="Visit Our"
          highlightText="Office"
          description="We're conveniently located for your convenience. Stop by our office for inquiries, support, or to connect with our team in person."
          center={true}
        />

        {/* Map Container - Main Animation Entry */}
        <motion.div 
          className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
          variants={mapCardVariants} // Main entrance animation for the card
        >
          
          {/* Actual Map Iframe (Subtle fade/zoom) */}
          <motion.div 
            className="relative w-full h-[350px] md:h-[400px] bg-slate-100 overflow-hidden"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6 } 
                }
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1645666822942!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Office Location"
              className="grayscale-[0.3] contrast-[1.1] opacity-90"
            ></iframe>
          </motion.div>

          {/* Location Footer Bar (Staggered items) */}
          <div className="px-4 py-3 md:px-5 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 bg-white border-t border-slate-100">
            
            {/* Address Details */}
            <motion.div 
              className="text-center md:text-left"
              variants={itemVariants} // Animation for address block
            >
              <h4 className="font-bold text-[#1e1e1e] text-sm md:text-base">Headquarters</h4>
              <p className="text-slate-500 text-xs md:text-sm">Core Codexa, Bahawalpur, Punjab, Pakistan</p>
            </motion.div>
            
            {/* Buttons */}
            <div className="flex gap-2 flex-wrap justify-center">
              
              {/* Get Directions Button */}
              <motion.button 
                className="px-4 py-2 bg-gradient-to-r from-[#00134F] to-[#2DA3B4] text-white text-xs font-medium rounded-lg shadow-sm flex items-center gap-1.5"
                variants={buttonVariants}
                whileHover="hover"
                // Adding custom tap animation for interaction feel
                whileTap={{ scale: 0.95 }} 
              >
                <Navigation size={12} />
                Get Directions
              </motion.button>
              
              {/* Copy Address Button */}
              <motion.button 
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-lg shadow-sm flex items-center gap-1.5"
                variants={buttonVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Copy size={12} />
                Copy Address
              </motion.button>

            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LocationSection;