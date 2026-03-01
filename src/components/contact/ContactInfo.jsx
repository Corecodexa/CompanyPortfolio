import React from 'react';
import { motion } from 'framer-motion';

// 4. Variants for the main cards (Info Cards) - for internal stagger
const cardContainerVariants = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

// 3. Variants for staggered items (list items)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};


const ContactInfo = ({ MapPinIcon, PhoneIcon, MailIcon, DownloadIcon, HistoryIcon, HelpCircleIcon }) => {
  return (
    <>
      {/* Contact Info Card */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg border border-slate-100 p-5 h-full"
        variants={cardContainerVariants}
      >
        <motion.h3 
          className="font-bold text-[#1e1e1e] text-base mb-5"
          variants={itemVariants}
        >
          Contact Information
        </motion.h3>

        <div className="space-y-5">
          {/* Email Item */}
          <motion.div className="flex gap-4 items-start" variants={itemVariants}>
            <div className="w-10 h-10 rounded-full bg-[#3fe8e2]/10 flex items-center justify-center shrink-0 text-[#2DA3B4]">
              <MailIcon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Email</h4>
              <p className="text-slate-500 text-sm">contact@corecodexa.com</p>
              <p className="text-slate-400 text-xs mt-1">Typically replies within 24 hours</p>
            </div>
          </motion.div>

          {/* Phone Item */}
          <motion.div className="flex gap-4 items-start" variants={itemVariants}>
            <div className="w-10 h-10 rounded-full bg-[#3fe8e2]/10 flex items-center justify-center shrink-0 text-[#2DA3B4]">
              <PhoneIcon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Phone</h4>
              <p className="text-slate-500 text-sm">+92 336-6760604</p>
              <p className="text-slate-400 text-xs mt-1">WhatsApp Available (9AM - 6PM PKT)</p>
            </div>
          </motion.div>

          {/* Office Item */}
          <motion.div className="flex gap-4 items-start" variants={itemVariants}>
            <div className="w-10 h-10 rounded-full bg-[#3fe8e2]/10 flex items-center justify-center shrink-0 text-[#2DA3B4]">
              <MapPinIcon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Office</h4>
              <p className="text-slate-500 text-sm">Core Codexa, Bahawalpur, Pakistan</p>
              <p className="text-slate-400 text-xs mt-1">Visit by appointment only</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Support Card */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg border border-slate-100 p-5 h-full"
        variants={cardContainerVariants}
      >
        <motion.div 
          className="flex items-center gap-3 mb-5"
          variants={itemVariants}
        >
          <div className="w-5 h-5 rounded-full bg-[#2DA3B4] text-white flex items-center justify-center text-xs font-bold">?</div>
          <h3 className="font-bold text-[#1e1e1e] text-base">Quick Support</h3>
        </motion.div>

        <div className="space-y-4">
          {/* Brochure */}
          <motion.a 
            href="#" 
            className="flex gap-4 group items-center p-2 rounded-lg hover:bg-[#3fe8e2]/10 transition-colors"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 rounded-full bg-[#3fe8e2]/10 flex items-center justify-center shrink-0 text-[#2DA3B4] group-hover:bg-[#2DA3B4] group-hover:text-white transition-all">
              <DownloadIcon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#2DA3B4] transition-colors">Download Brochure</h4>
              <p className="text-slate-500 text-xs">Access our company portfolio</p>
            </div>
          </motion.a>

          {/* Portfolio */}
          <motion.a 
            href="#" 
            className="flex gap-4 group items-center p-2 rounded-lg hover:bg-[#3fe8e2]/10 transition-colors"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 rounded-full bg-[#3fe8e2]/10 flex items-center justify-center shrink-0 text-[#2DA3B4] group-hover:bg-[#2DA3B4] group-hover:text-white transition-all">
              <HistoryIcon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#2DA3B4] transition-colors">Our Portfolio / FAQs</h4>
              <p className="text-slate-500 text-xs">View our projects and common questions</p>
            </div>
          </motion.a>

          {/* Help */}
          <motion.a 
            href="#" 
            className="flex gap-4 group items-center p-2 rounded-lg hover:bg-[#3fe8e2]/10 transition-colors"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 rounded-full bg-[#3fe8e2]/10 flex items-center justify-center shrink-0 text-[#2DA3B4] group-hover:bg-[#2DA3B4] group-hover:text-white transition-all">
              <HelpCircleIcon size={16} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm group-hover:text-[#2DA3B4] transition-colors">Need Help? Visit FAQs</h4>
              <p className="text-slate-500 text-xs">Find answers to common questions</p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default ContactInfo;