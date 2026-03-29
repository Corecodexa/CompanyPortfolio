import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import GlobalHeading from "../common/GlobalHeading";
import team from "./teamData";
import TeamModal from "./TeamModal";

const TeamMember = ({ member, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group cursor-pointer [perspective:1000px]"
      onClick={() => onClick(member)}
    >
<<<<<<< HEAD
      <div className="relative space-y-5">
        
        <div className="relative aspect-[3.6/4] overflow-hidden bg-slate-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80";
            }}
          />
          
          <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
          <div className="absolute bottom-4 left-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
            {member.socials?.linkedin && (
              <div className="w-9 h-9 bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm">
                <FaLinkedinIn size={14} />
=======
      {/* Card Container with Flip Effect */}
      <div className="relative w-full h-[380px] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* ================= FRONT SIDE ================= */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                        transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(45,163,180,0.15)] border border-slate-100">

          {/* Image Section */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=500&fit=crop";
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>

          {/* Content Section */}
          <div className="p-5 relative">
            {/* Decorative Dot */}
            <div className="absolute -left-3 top-5 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Name */}
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            
            {/* Role */}
            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">
              {member.role}
            </p>
            
            {/* Bio */}
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-light">
              {member.bio}
            </p>
            
            {/* Bottom Accent */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Team Member</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors duration-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary/70 transition-colors duration-300 delay-75" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-primary/40 transition-colors duration-300 delay-150" />
>>>>>>> f03808aa8152741542b1428bbb01eb7ada8e68ea
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="space-y-2 px-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl font-light text-slate-900 tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
=======
        {/* ================= BACK SIDE ================= */}
        <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
                        [transform:rotateY(180deg)] [backface-visibility:hidden] border border-slate-100
                        transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(45,163,180,0.15)]">
          
          {/* Back Content */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-white to-slate-50">
            {/* Decorative Circle */}
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-primary">
                {member.name.charAt(0)}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
>>>>>>> f03808aa8152741542b1428bbb01eb7ada8e68ea
              {member.name}
            </h3>

            <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-4">
              {member.role}
            </p>

            <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light px-4">
              {member.bio}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {member.socials?.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-full 
                             text-slate-700 hover:bg-primary hover:text-white 
                             transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                >
                  <FaLinkedinIn size={16} />
                </a>
              )}

              {member.socials?.facebook && (
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-full 
                             text-slate-700 hover:bg-primary hover:text-white 
                             transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                >
                  <FaFacebookF size={16} />
                </a>
              )}

              {member.socials?.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-full 
                             text-slate-700 hover:bg-primary hover:text-white 
                             transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                >
                  <FaTwitter size={16} />
                </a>
              )}

              {member.socials?.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-full 
                             text-slate-700 hover:bg-primary hover:text-white 
                             transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                >
                  <FaInstagram size={16} />
                </a>
              )}

              {member.socials?.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-full 
                             text-slate-700 hover:bg-primary hover:text-white 
                             transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                >
                  <FaGithub size={16} />
                </a>
              )}
            </div>
            
            {/* View More Link */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClick(member);
              }}
              className="mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300 cursor-pointer"
            >
              View Full Profile →
            </button>
          </div>
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
<<<<<<< HEAD
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <GlobalHeading 
=======
    <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-full px-4">

        {/* Header Section */}
        <div className="mb-20 text-center">
          <GlobalHeading
>>>>>>> f03808aa8152741542b1428bbb01eb7ada8e68ea
            badge="Expertise"
            title="Our"
            highlightText="Team"
            description="A collective of strategic minds dedicated to technical excellence and creative growth."
            center={true}
            light={false}
          />
        </div>

        {/* Grid Layout - 3 Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

      {/* Modal */}
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default MeetOurTeam;