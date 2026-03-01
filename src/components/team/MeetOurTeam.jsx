import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import GlobalHeading from '../common/GlobalHeading';
import team from './teamData';
import TeamModal from './TeamModal';

const TeamMember = ({ member, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      onClick={() => onClick(member)}
      className="group cursor-pointer"
    >
      <div className="relative space-y-5">
        {/* Image Wrapper */}
        <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80";
            }}
          />
          
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Minimal Social Buttons */}
          <div className="absolute bottom-4 left-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            {member.socials?.linkedin && (
              <div className="w-9 h-9 bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">
                <FaLinkedinIn size={14} />
              </div>
            )}
            {member.socials?.facebook && (
              <div className="w-9 h-9 bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">
                <FaFacebookF size={14} />
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2 px-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl font-light text-slate-900 tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            <span className="h-[1px] flex-grow bg-slate-100 group-hover:bg-primary/30 transition-colors duration-500" />
          </div>
          
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            {member.role}
          </p>
          
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-light opacity-80">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const MeetOurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <GlobalHeading 
            badge="Expertise"
            title="Our"
            highlightText="Team"
            description="A collective of strategic minds dedicated to technical excellence and creative growth."
            center={false} // Minimalist designs often look better left-aligned
            light={false}
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <TeamMember 
              key={member.id || index} 
              member={member} 
              index={index} 
              onClick={handleMemberClick}
            />
          ))}
        </div>
      </div>

      {/* Modal logic remains the same */}
      <TeamModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default MeetOurTeam;