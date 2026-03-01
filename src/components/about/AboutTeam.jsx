import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutTeam = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      social: { linkedin: "#", twitter: "#" }
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-10 px-6  overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">Our Team</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Meet The <span className="text-cyan-400">Experts</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Our elite team combines diverse technical expertise with a shared passion for architecting exceptional digital experiences.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0E0D1D]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Gradient Overlay to ensure text/icons are visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020215] via-[#020215]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Social Icons Overlay (Sliding up on hover) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a href={member.social.linkedin} className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300">
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold text-white mb-1 tracking-wide">{member.name}</h3>
                <p className="text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutTeam;