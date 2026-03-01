import React from "react";
import { ShieldCheck, Handshake, Trophy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const OurValues = () => {
  const values = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Integrity",
      description: "We uphold a strict ethical code, ensuring radical transparency in every project phase and interaction.",
    },
    {
      id: 2,
      icon: Handshake,
      title: "Trust",
      description: "Building lasting partnerships through dependability, treating your business goals as our own mission.",
    },
    {
      id: 3,
      icon: Trophy,
      title: "Excellence",
      description: "Our standard is perfection. High-impact digital solutions with zero error and maximum scalability.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="relative py-7 px-6 bg-[#020215] overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

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
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">Core Foundations</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            The Principles Behind <span className="text-cyan-400">Our Craft</span>
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Elevating digital standards through quality and ethical innovation.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value) => (
            <motion.div 
              key={value.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative group p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Icon Container with Accent Color */}
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                  <value.icon className="w-6 h-6 text-cyan-400 group-hover:text-black transition-colors" />
                </div>
                
                {/* Text forced to White and Silver-Gray */}
                <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </div>

              {/* Minimized Decorative Icon */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-20 transition-opacity">
                 <CheckCircle2 className="w-8 h-8 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurValues;