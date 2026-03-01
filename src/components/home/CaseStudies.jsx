import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "../common/Button";

const CaseStudies = () => {
  const projects = useMemo(
    () => [
      { id: 1, title: "Insurance IT Solutions", category: "Insurance", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60" },
      { id: 2, title: "Enterprise IT Services", category: "IT Services", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60" },
      { id: 3, title: "Business Intelligence", category: "Analytics", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60" },
      { id: 4, title: "Strategic IT Consulting", category: "Consulting", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60" },
      { id: 5, title: "Managed Analytics", category: "Analytics", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&auto=format&fit=crop&q=60" },
      { id: 6, title: "Data Security", category: "Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60" },
    ],
    []
  );

  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category))];
    return ["All", ...unique];
  }, [projects]);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative px-6 py-8 bg-gradient-to-b from-[navy]/10 via-gray-200 to-[navy]/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Discover how we transform businesses through innovative and scalable solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 cursor-pointer py-2 rounded-full text-sm font-semibold transition-all duration-300 border 
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] text-white border-transparent shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2DA3B4] hover:text-[#2DA3B4]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <a
                  href="#"
                  className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <span className="absolute top-4 left-4 backdrop-blur-md bg-white/70 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2DA3B4] transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-[#2DA3B4] font-semibold text-sm">
                      View Details
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] group-hover:w-full transition-all duration-500" />
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button text="View All Projects" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;