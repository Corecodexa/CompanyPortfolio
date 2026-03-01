import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Zap } from "lucide-react";
import GlobalHeading from "../common/GlobalHeading";

const ExpertiseCard = ({ icon, title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-3xl bg-gray-900 border border-white/10 shadow-sm overflow-hidden transition-all duration-500 min-h-[340px] flex flex-col justify-end"
    >
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Minimal Black Overlay for Text Visibility */}
      <div className="absolute inset-0 z-10 bg-black/50 group-hover:bg-black/70 transition-colors duration-500" />

      {/* Background Decoration (Top Right Glow) */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3fe8e2]/20 to-transparent rounded-bl-full z-20 transition-all duration-500 group-hover:scale-150" />
      
      {/* Content Container */}
      <div className="relative z-20">
        {/* Icon Container */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2DA3B4]/20 backdrop-blur-md text-[#3fe8e2] border border-white/10 transition-all duration-500 group-hover:bg-[#2DA3B4] group-hover:text-white group-hover:rotate-6">
          {React.cloneElement(icon, { size: 28 })}
        </div>

        {/* Text Content */}
        <h3 className="text-xl font-bold text-white mb-3 transition-colors group-hover:text-[#3fe8e2]">
          {title}
        </h3>
        <p className="text-gray-200 leading-relaxed text-sm opacity-90 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectExpertise = () => {
  const expertise = [
    {
      icon: <Cpu />,
      title: "Advanced Stack",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      description: "We utilize the latest frameworks and technologies to ensure your project is built on a future-proof foundation."
    },
    {
      icon: <Globe />,
      title: "Global Scalability",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      description: "Our solutions are designed to handle millions of users across multiple regions with zero latency."
    },
    {
      icon: <Shield />,
      title: "Security First",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      description: "Enterprise-grade encryption and security protocols are baked into every layer of our development process."
    },
    {
      icon: <Zap />,
      title: "Rapid Delivery",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      description: "Agile methodologies allow us to ship high-quality features faster without compromising on stability."
    }
  ];

  return (
    <section className="py-24 bg-[#fdfdfd] px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <GlobalHeading 
          badge="Expertise"
          title="Our Project"
          highlightText="Capabilities"
          description="We bring deep technical knowledge and industry-best practices to every digital transformation we undertake."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExpertise;