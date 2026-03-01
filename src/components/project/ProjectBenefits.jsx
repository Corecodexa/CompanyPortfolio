import React from "react";
import { Lightbulb, CheckCircle, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import GlobalHeading from "../common/GlobalHeading";

const ProjectBenefits = () => {
  const benefits = [
    {
      icon: <Lightbulb strokeWidth={1.5} />,
      title: "Innovative Strategy",
      desc: "Tailored creative roadmaps that challenge industry norms and redefine user expectations."
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      title: "Quality Assurance",
      desc: "Rigorous automated and manual testing protocols ensuring 99.9% stability upon deployment."
    },
    {
      icon: <TrendingUp strokeWidth={1.5} />,
      title: "Proven Results",
      desc: "Performance-driven development focused on conversion optimization and scalable growth."
    },
    {
      icon: <Award strokeWidth={1.5} />,
      title: "Award Winning",
      desc: "Excellence recognized by global design platforms for superior UI/UX and technical execution."
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative py-24 bg-[#FCFDFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <GlobalHeading 
            badge="The Edge"
            title="Why Our Projects"
            highlightText="Stand Out"
            description="We bridge the gap between complex engineering and human-centric design."
            center={false}
          />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((item, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#2DA3B4]/20 transition-colors duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-700 transition-all duration-500 group-hover:bg-[#2DA3B4] group-hover:text-white shadow-inner">
                {React.cloneElement(item.icon, { size: 24 })}
              </div>

              {/* Text Content */}
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#2DA3B4] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectBenefits;