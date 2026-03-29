import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope, FaTimes } from 'react-icons/fa';

const TeamModal = ({ member, isOpen, onClose }) => {
  // Handle Escape Key and Scroll Locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  if (!member) return null;

  const firstName = member.name.split(' ')[0];
  const lastName = member.name.split(' ').slice(1).join(' ');

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
<<<<<<< HEAD
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="relative w-full max-w-3xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row md:min-h-[450px] min-h-[350px]"
=======
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-sm border border-white/10"
>>>>>>> f03808aa8152741542b1428bbb01eb7ada8e68ea
          >
            {/* Close Button - More visible & accessible */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 z-50 group transition-all duration-300 active:scale-90"
            >
              <div className="p-3 bg-slate-900/5 hover:bg-slate-900 text-slate-900 hover:text-white transition-colors">
                <FaTimes size={16} />
              </div>
            </button>

<<<<<<< HEAD
            {/* Left: Image Section (Fixed 40% width) */}
            <div className="w-full md:w-[40%] h-50  md:h-auto relative bg-slate-100 overflow-hidden">
              <img
=======
            {/* Left: Image Section */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden bg-slate-200">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
>>>>>>> f03808aa8152741542b1428bbb01eb7ada8e68ea
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </div>

<<<<<<< HEAD
            {/* Right: Info Section (60%) */}
            <div className="w-full md:w-[60%] p-3 md:p-10 flex flex-col justify-center bg-white">
              <header className="mb-">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  {member.role}
                </p>
                <h2 className="text-3xl font-light text-slate-900 tracking-tight leading-tight">
                  {member.name.split(' ')[0]} {''}
                  <span className="font-serif italic text-2xl">{member.name.split(' ').slice(1).join(' ')}</span>
=======
            {/* Right: Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-white overflow-y-auto max-h-[70vh] md:max-h-full">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-[#2ba19d] text-[11px] font-black uppercase tracking-[0.3em] mb-3">
                  {member.role}
                </p>
                
                <h2 className="text-4xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
                  {firstName} 
                  {lastName && (
                    <> <br /><span className="font-serif italic text-3xl text-slate-700">{lastName}</span></>
                  )}
>>>>>>> f03808aa8152741542b1428bbb01eb7ada8e68ea
                </h2>

                <div className="w-12 h-[2px] bg-slate-900 mb-8" />
                
                <div className="prose prose-slate prose-sm">
                   <p className="text-slate-600 leading-relaxed font-normal mb-10 italic">
                    "{member.bio}"
                  </p>
                </div>

                {/* Socials */}
                <div className="flex flex-wrap gap-8 mt-auto pt-6 border-t border-slate-100">
                  {member.socials?.linkedin && <SocialLink href={member.socials.linkedin} icon={<FaLinkedinIn />} label="LinkedIn" />}
                  {member.socials?.twitter && <SocialLink href={member.socials.twitter} icon={<FaTwitter />} label="Twitter" />}
                  {member.socials?.github && <SocialLink href={member.socials.github} icon={<FaGithub />} label="Github" />}
                  {member.socials?.email && <SocialLink href={`mailto:${member.socials.email}`} icon={<FaEnvelope />} label="Email" />}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex flex-col items-start gap-1 transition-all duration-300"
  >
    <span className="text-slate-400 group-hover:text-slate-900 transition-colors">{icon}</span>
    <span className="text-[8px] font-bold uppercase tracking-tighter text-slate-400 group-hover:text-slate-900">
      {label}
    </span>
  </a>
);

export default TeamModal;