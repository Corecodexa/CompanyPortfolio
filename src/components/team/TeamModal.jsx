import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram, FaTimes, FaEnvelope } from 'react-icons/fa';

const TeamModal = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl min-h-[350px] md:h-[420px] bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-all duration-300 border border-slate-100"
            >
              <FaTimes size={18} />
            </button>

            {/* Left: Image Section */}
            <div className="w-full md:w-2/5 h-40 md:h-full relative shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-slate-900/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent md:hidden" />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
            </div>

            {/* Right: Content Section */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col h-full overflow-y-auto custom-scrollbar bg-white">
              <div className="mb-6">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                  {member.role}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                  {member.name}
                </h2>
                <div className="h-1 w-12 bg-primary mt-3" />
              </div>

              <div className="space-y-4 flex-grow">
                <div>
                  <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">About Me</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                    "{member.bio}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">Connect With Me</h4>
                  <div className="flex flex-wrap gap-3">
                    {member.socials?.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-lg text-slate-600 hover:text-primary transition-all duration-300">
                        <FaLinkedin className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">LinkedIn</span>
                      </a>
                    )}
                    {member.socials?.facebook && (
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-lg text-slate-600 hover:text-primary transition-all duration-300">
                        <FaFacebook className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">Facebook</span>
                      </a>
                    )}
                    {member.socials?.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-lg text-slate-600 hover:text-primary transition-all duration-300">
                        <FaInstagram className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">Instagram</span>
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-lg text-slate-600 hover:text-primary transition-all duration-300">
                        <FaTwitter className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">Twitter</span>
                      </a>
                    )}
                    {member.socials?.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-lg text-slate-600 hover:text-primary transition-all duration-300">
                        <FaGithub className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">GitHub</span>
                      </a>
                    )}
                    {member.socials?.email && (
                      <a href={`mailto:${member.socials.email}`} className="flex items-center gap-3 px-4 py-2 bg-slate-50 hover:bg-primary/5 border border-slate-200 hover:border-primary/30 rounded-lg text-slate-600 hover:text-primary transition-all duration-300">
                        <FaEnvelope className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider">Email</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
