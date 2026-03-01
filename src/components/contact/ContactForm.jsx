import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { sendEmail } from '../../utils/emailService';

// 4. Variants for the main cards (Form Card) - for internal stagger
const cardContainerVariants = {
  visible: {
    transition: {
      delayChildren: 0.1, // Start internal stagger slightly later
      staggerChildren: 0.08,
    },
  },
};

// 3. Variants for staggered items (inputs, list items)
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

// 5. Variants for the primary button (Send Message)
const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  // Adding hover effect using whileHover
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 15px -3px rgba(45, 163, 180, 0.4), 0 4px 6px -2px rgba(45, 163, 180, 0.2)",
  }
};

const ContactForm = ({ Icon, UserIcon, MailIcon, FileTextIcon, ChevronDownIcon, HelpCircleIcon, MessageSquareIcon }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await sendEmail(formRef.current);
    setLoading(false);

    if (result.success) {
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.',
      });
      formRef.current.reset();
    } else {
      toast.error('Failed to send message', {
        description: 'Please try again later or contact us directly.',
      });
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 h-full"
      variants={cardContainerVariants}
    >
      {/* Form Header */}
      <motion.div 
        className="bg-gradient-to-r from-[#00134F] to-[#2DA3B4] p-5 text-white flex items-center gap-3"
        variants={itemVariants}
      >
        <Icon className="w-5 h-5 -rotate-60" />
        <div>
          <h3 className="font-bold text-lg">Send us a Message</h3>
          <p className="text-cyan-100 text-xs">We'll respond as soon as possible</p>
        </div>
      </motion.div>

      {/* Form Fields */}
      <form ref={formRef} onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4">
        
        {/* Name */}
        <motion.div className="relative" variants={itemVariants}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UserIcon className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            name="user_name"
            required
            className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2DA3B4]/30 focus:border-[#2DA3B4] text-sm transition-all"
            placeholder="Your Full Name"
          />
        </motion.div>

        {/* Email */}
        <motion.div className="relative" variants={itemVariants}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MailIcon className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="email"
            name="user_email"
            required
            className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2DA3B4]/30 focus:border-[#2DA3B4] text-sm transition-all"
            placeholder="Your Email Address"
          />
        </motion.div>

        {/* Topic Select */}
        <motion.div className="relative" variants={itemVariants}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FileTextIcon className="h-4 w-4 text-slate-400" />
          </div>
          <select
            name="topic"
            required
            className="block w-full pl-9 pr-8 py-2.5 border border-slate-200 rounded-lg leading-5 bg-white text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2DA3B4]/30 focus:border-[#2DA3B4] text-sm appearance-none transition-all"
          >
            <option value="">Choose a Topic</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDownIcon className="h-3 w-3 text-slate-400" />
          </div>
        </motion.div>

        {/* Subject */}
        <motion.div className="relative" variants={itemVariants}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HelpCircleIcon className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            name="subject"
            required
            className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2DA3B4]/30 focus:border-[#2DA3B4] text-sm transition-all"
            placeholder="Subject"
          />
        </motion.div>

        {/* Message */}
        <motion.div className="relative" variants={itemVariants}>
          <textarea
            rows={5}
            name="message"
            required
            className="block w-full p-3 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2DA3B4]/30 focus:border-[#2DA3B4] text-sm transition-all resize-none"
            placeholder="Your Message"
          />
          <div className="absolute bottom-3 right-3">
            <MessageSquareIcon className="h-3 w-3 text-slate-300" />
          </div>
        </motion.div>

        {/* Send Button */}
        <motion.button 
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#00134F] to-[#2DA3B4] hover:from-[#2DA3B4] hover:to-[#00134F] text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          variants={buttonVariants}
          whileHover={!loading ? "hover" : undefined}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Icon className="w-3 h-3 -rotate-60" />
              Send Message
            </>
          )}
        </motion.button>

      </form>
    </motion.div>
  );
};

export default ContactForm;