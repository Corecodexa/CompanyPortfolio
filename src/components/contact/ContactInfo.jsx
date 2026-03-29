import React from 'react';
import { motion } from 'framer-motion';

// Refined Stagger Variants
const cardContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const ContactInfo = ({ MapPinIcon, PhoneIcon, MailIcon }) => {
  const contactDetails = [
    {
      icon: <MailIcon size={20} />,
      label: "Email",
      value: "corecodexa@gmail.com",
      subtext: "Typical reply: 24h",
    },
    {
      icon: <PhoneIcon size={20} />,
      label: "Phone",
      value: "+92 301 6981096",
      subtext: "Mon-Fri, 9AM-6PM",
    },
    {
      icon: <MapPinIcon size={20} />,
      label: "Office",
      value: "Core Codexa, Bahawalpur",
      subtext: "Pakistan",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardContainerVariants}
      className="relative overflow-hidden bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8"
    >
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3fe8e2]/5 rounded-full blur-3xl" />
      
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Get in <span className="text-[#2DA3B4]">Touch</span>
        </h3>
        <p className="text-slate-500 text-sm mt-1">We're here to help you scale.</p>
      </motion.div>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            className="group flex items-center gap-5 p-3 rounded-2xl transition-colors hover:bg-slate-50/50"
          >
            {/* Icon with Gradient Glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#3fe8e2] opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3fe8e2] to-[#2DA3B4] flex items-center justify-center text-white shadow-lg shadow-teal-200/50">
                {item.icon}
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">
                {item.label}
              </h4>
              <p className="font-semibold text-slate-800 text-base leading-tight">
                {item.value}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                {item.subtext}
              </p>
            </div>
            
            {/* Subtle arrow that appears on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 pr-2">
               →
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;