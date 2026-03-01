import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import GlobalHeading from '../common/GlobalHeading';

const ProjectPortfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Revolution",
      category: "Web App",
      image: "https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg",
      description: "A high-performance online marketplace built with React and Node.js.",
      tech: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Health & Fitness App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "Cross-platform mobile application for personalized nutrition plans.",
      tech: ["Flutter", "Firebase"]
    },
    {
      title: "SaaS Dashboard",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "B2B dashboard for managing team workflows and project resources.",
      tech: ["Next.js", "Tailwind"]
    },
    {
      title: "Crypto Wallet",
      category: "Mobile App",
      image: "https://etimg.etb2bimg.com/photo/81925386.cms",
      description: "Secure digital asset management with real-time market data integration.",
      tech: ["React Native", "Web3.js"]
    },
    {
      title: "Modern Brand Identity",
      category: "UI/UX Design",
      image: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/05/ui-ux-scaled.jpg.optimal.jpg",
      description: "Complete visual rebranding and digital style guide for a creative agency.",
      tech: ["Figma", "Adobe XD"]
    },
    {
      title: "Smart Home Interface",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
      description: "Intuitive control system design for integrated home automation devices.",
      tech: ["Figma", "Prototyping"]
    }
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'UI/UX Design'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <GlobalHeading 
          badge="Portfolio"
          title="Refined Digital"
          highlightText="Solutions"
          description="A curated showcase of our latest digital transformations and innovative software solutions."
        />

        {/* Minimalist Filter Bar */}
        <div className="flex justify-center mb-16 border-b border-gray-100">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${
                  filter === cat ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="portfolio-underline" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DA3B4]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Professional Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button className="p-3 bg-white rounded-full shadow-xl hover:text-[#2DA3B4] transition-colors translate-y-4 group-hover:translate-y-0 duration-500">
                      <Github size={20} />
                    </button>
                    <button className="p-3 bg-white rounded-full shadow-xl hover:text-[#2DA3B4] transition-colors translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-[10px] font-bold text-[#2DA3B4] uppercase tracking-widest mb-1">
                        {project.category}
                      </p>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#2DA3B4] transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <div className="p-2 rounded-full bg-gray-50 group-hover:bg-[#2DA3B4]/10 transition-colors">
                      <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#2DA3B4] transition-colors" />
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-1 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;