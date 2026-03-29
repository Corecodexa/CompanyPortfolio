import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser'; // Make sure to npm install @emailjs/browser

// Animation Variants
const cardContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.6
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ContactForm = ({ Icon, UserIcon, MailIcon, FileTextIcon, ChevronDownIcon, HelpCircleIcon, MessageSquareIcon }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Configuration
    const SERVICE_ID = "service_og6u2al";
    const TEMPLATE_ID = "template_n268753";
    const PUBLIC_KEY = "5rdVBXHI_svOaqGAq";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        toast.success('Message sent successfully!', {
          description: "We'll get back to you shortly.",
        });
        formRef.current.reset();
      }, (error) => {
        toast.error('Failed to send message', {
          description: "Please check your connection or try again later.",
        });
        console.error("EmailJS Error:", error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const inputClasses = "block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#2DA3B4]/10 focus:border-[#2DA3B4] focus:bg-white text-sm transition-all duration-300";

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={cardContainerVariants}
      className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 h-full overflow-hidden"
    >
      {/* Header Section */}
      <div className="p-8 pb-4">
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00134F] to-[#2DA3B4] flex items-center justify-center text-white shadow-lg shadow-cyan-200/50">
            <Icon size={20} className="-rotate-45" />
          </div>
          <h3 className="font-extrabold text-2xl text-slate-900 tracking-tight">Send a Message</h3>
        </motion.div>
        <p className="text-slate-500 text-sm ml-1">Have a project? We'd love to hear from you.</p>
      </div>

      {/* Form Section */}
      <form ref={formRef} onSubmit={handleSubmit} className="p-8 pt-2 space-y-4">
        
        {/* Name and Email in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <UserIcon size={18} />
            </div>
            <input type="text" name="user_name" required className={inputClasses} placeholder="Full Name" />
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <MailIcon size={18} />
            </div>
            <input type="email" name="user_email" required className={inputClasses} placeholder="Email Address" />
          </motion.div>
        </div>

        {/* Topic and Subject in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <FileTextIcon size={18} />
            </div>
            <select name="topic" required className={`${inputClasses} appearance-none`}>
              <option value="">Select Topic</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Consultation">Consultation</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
              <ChevronDownIcon size={14} />
            </div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <HelpCircleIcon size={18} />
            </div>
            <input type="text" name="subject" required className={inputClasses} placeholder="Subject" />
          </motion.div>
        </div>

        {/* Message Box */}
        <motion.div className="relative" variants={itemVariants}>
          <textarea
            rows={4}
            name="message"
            required
            className="block w-full p-4 border border-slate-200 rounded-2xl bg-slate-50/50 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#2DA3B4]/10 focus:border-[#2DA3B4] focus:bg-white text-sm transition-all resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button 
          type="submit"
          disabled={loading}
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-slate-900 hover:bg-[#00134F] text-white font-bold py-4 rounded-2xl shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Send Message
              <Icon size={16} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;