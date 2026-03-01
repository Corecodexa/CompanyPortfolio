import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram, FaTimes, FaEnvelope } from 'react-icons/fa';

const TeamModal = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Content - Reduced from max-w-5xl to max-w-3xl (approx 20% reduction) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            className="relative w-full max-w-3xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 group flex items-center gap-2"
            >
              <div className="p-2 bg-slate-900 text-white transition-transform duration-300 group-hover:rotate-90">
                <FaTimes size={12} />
              </div>
            </button>

            {/* Left: Image Section (Fixed 40% width) */}
            <div className="w-full md:w-[40%] h-64 md:h-auto relative bg-slate-100 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80";
                }}
              />
            </div>

            {/* Right: Info Section (60%) */}
            <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-center bg-white">
              <header className="mb-6">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  {member.role}
                </p>
                <h2 className="text-3xl font-light text-slate-900 tracking-tight leading-tight">
                  {member.name.split(' ')[0]} <br />
                  <span className="font-serif italic text-2xl">{member.name.split(' ').slice(1).join(' ')}</span>
                </h2>
              </header>

              <div className="w-10 h-[1px] bg-slate-200 mb-6" />
              
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                {member.bio}
              </p>

              {/* Socials - Compact List */}
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {member.socials?.linkedin && (
                  <SocialLink href={member.socials.linkedin} icon={<FaLinkedinIn />} label="LI" />
                )}
                {member.socials?.twitter && (
                  <SocialLink href={member.socials.twitter} icon={<FaTwitter />} label="TW" />
                )}
                {member.socials?.github && (
                  <SocialLink href={member.socials.github} icon={<FaGithub />} label="GH" />
                )}
                {member.socials?.email && (
                  <SocialLink href={`mailto:${member.socials.email}`} icon={<FaEnvelope />} label="EM" />
                )}
              </div>
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
    className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors duration-300"
  >
    <span className="text-xs">{icon}</span>
    <span className="text-[9px] font-bold uppercase tracking-widest border-b border-transparent group-hover:border-primary">
      {label}
    </span>
  </a>
);

export default TeamModal;