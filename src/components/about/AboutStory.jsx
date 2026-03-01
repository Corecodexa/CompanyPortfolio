import React from "react";
import { motion } from "framer-motion";

const AboutStory = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-10 px-6  overflow-hidden">
      {/* Dark Mode Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Column - Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <motion.div variants={slideRight} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">Our Story</span>
          </motion.div>

          <motion.h2 variants={slideRight} className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-8 leading-[1.1] tracking-tight">
            Building Tomorrow's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technology Today
            </span>
          </motion.h2>

          <div className="space-y-3 text-gray-400 leading-relaxed ">
            <motion.p variants={fadeUp} className="text-base ">
              <span className="font-bold text-black">Founded in 2014</span>, Core Codexa has evolved from a passionate tech startup into a trusted digital partner for visionary businesses worldwide.
            </motion.p>

            <motion.p variants={fadeUp}>
              We specialize in robust web development, intuitive mobile applications, scalable cloud solutions, and complete digital transformation. Our elite team blends technical mastery with creative innovation to architect solutions that drive measurable growth.
            </motion.p>

            {/* Dark Mode Styled Quote */}
            <motion.div variants={fadeUp} className="relative border-l-2 border-cyan-400 pl-6 py-4 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-r-xl">
              <p className="italic text-black/40 font-medium">
                "We pride ourselves on our client-centric architecture—delivering complex projects on timeline and budget, while setting new benchmarks for quality."
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Image & Floating Badge */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
        >
          {/* Main Image Container */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
            {/* Image with grayscale-to-color hover effect */}
            <img
              src="https://images.unsplash.com/photo-1580894908361-967195033215?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="Core Codexa engineering team"
              className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Dark gradient overlay so the image doesn't clash with dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020215] via-transparent to-transparent opacity-80" />

            {/* Subtle cyan glow overlay on hover */}
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating Glassmorphism Experience Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            /* Changed padding to py-4 px-6 to reduce empty vertical space and rounded to xl for a smoother look */
            className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-[#0E0D1D]/90 backdrop-blur-xl border border-white/10 rounded-xl py-2 px-6 shadow-xl group cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl pointer-events-none" />

            <div className="relative z-10 flex items-center gap-4">
              {/* Increased height to h-12 to perfectly match the combined height of the number and text */}
              <div className="w-1 h-4 bg-cyan-400 rounded-full" />

              <div className="flex flex-col justify-center">
                {/* Increased text size to 3xl/4xl and forced line-height to none to remove invisible gaps */}
                <div className="text-white font-black text-2xl tracking-tighter leading-none mb-1">
                  10<span className="text-cyan-400">+</span>
                </div>

                {/* Made subtitle uppercase and widened tracking for a high-end agency feel */}
                <div className="text-gray-400 text-[10px]  leading-tight">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Corner Accents */}
          <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute -z-10 -bottom-6 -right-12 w-32 h-32 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutStory;