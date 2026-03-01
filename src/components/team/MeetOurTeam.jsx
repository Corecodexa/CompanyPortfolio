import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import GlobalHeading from '../common/GlobalHeading';
import team from './teamData';
import TeamModal from './TeamModal';

const TeamMember = ({ member, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative cursor-pointer"
      onClick={() => onClick(member)}
    >
      <div className="relative bg-white rounded-2xl p-6 border border-slate-100 group-hover:border-primary/20 group-hover:bg-slate-50/50 transition-all duration-500 shadow-sm hover:shadow-xl flex items-center gap-6">
        {/* Profile Image - Increased size by 30% (from 24 to 32) */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <div className="absolute inset-0 rounded-xl border border-slate-100 group-hover:border-primary transition-all duration-500 -z-10" />
          
          <div className="w-full h-full overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80";
              }}
            />
          </div>

          {/* Socials - Adjusted for larger size */}
          <div className="absolute -bottom-2 -right-2 flex flex-col gap-1.5 p-1.5 bg-white backdrop-blur-xl border border-slate-100 rounded-lg transition-all duration-500 shadow-lg z-20">
            {member.socials?.linkedin && (
              <div className="p-1 text-slate-400 hover:text-primary transition-colors">
                <FaLinkedin size={14} />
              </div>
            )}
            {member.socials?.facebook && (
              <div className="p-1 text-slate-400 hover:text-primary transition-colors">
                <FaFacebook size={14} />
              </div>
            )}
          </div>
        </div>

        {/* Content Section - Adjusted for larger size */}
        <div className="flex-grow min-w-0">
          <h3 className="text-base font-black text-slate-900 group-hover:text-primary transition-colors duration-300 uppercase tracking-tight truncate">
            {member.name}
          </h3>
          <p className="text-primary text-[9px] font-black uppercase tracking-[0.2em] mt-1.5">
            {member.role}
          </p>
          <div className="h-[2px] w-8 bg-slate-100 group-hover:w-16 group-hover:bg-primary transition-all duration-500 my-3" />
          <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 italic font-medium">
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <GlobalHeading 
          badge="Our Experts"
          title="Meet Our"
          highlightText="Creative Team"
          description="A diverse group of thinkers, builders, and innovators working together to elevate your business."
          center={true}
          light={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-16">
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

      <TeamModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default MeetOurTeam;
