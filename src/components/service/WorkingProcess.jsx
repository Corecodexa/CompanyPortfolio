import React, { useState } from "react";
import { Search, PenTool, Code, CheckCircle, Rocket, ArrowRight, Layers, Zap, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlobalHeading from "../common/GlobalHeading";

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Search />,
      title: "Discovery",
      tagline: "Strategy & Research",
      description: "We dive deep into your requirements and business goals to build a strategic foundation. We don't just build; we understand your 'why' first.",
      color: "#06b6d4",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <PenTool />,
      title: "Design",
      tagline: "UI/UX Excellence",
      description: "Our design team crafts intuitive and visually stunning experiences. We focus on high-fidelity prototypes that resonate with your actual users.",
      color: "#42BFDD",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      icon: <Code />,
      title: "Development",
      tagline: "Engineering Quality",
      description: "We bring designs to life with clean, scalable, and high-performance code. Our stack is modern, and our architecture is built for growth.",
      color: "#42BFDD",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: <CheckCircle />,
      title: "Testing",
      tagline: "Quality Assurance",
      description: "Rigorous QA testing ensures a bug-free and seamless experience. We stress-test every edge case so your users never have to.",
      color: "#42BFDD",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Rocket />,
      title: "Deployment",
      tagline: "Launch & Beyond",
      description: "We launch your product with precision and provide ongoing support. Deployment is just the beginning of our partnership.",
      color: "#42BFDD",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <GlobalHeading 
          badge="Our Blueprint"
          title="Engineered for"
          highlightText="Success"
          description="A sophisticated methodology designed to bridge the gap between complex ideas and seamless execution."
          className="mb-12 md:mb-16"
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* LEFT SIDE: Navigation */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 h-fit space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`w-full flex items-center gap-5 px-5 py-2 rounded-2xl transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
                    activeStep === index 
                      ? "bg-white border-cyan-500/30 shadow-lg shadow-cyan-500/10" 
                      : "bg-white/60 border-slate-200/60 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  {/* Active indicator */}
                  {activeStep === index && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <span className={`text-2xl md:text-3xl font-black transition-colors duration-300 relative z-10 ${
                    activeStep === index ? 'text-cyan-500' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    0{index + 1}
                  </span>
                  <div className="text-left relative z-10 flex-1">
                    <h4 className="text-base md:text-lg font-bold uppercase tracking-wider text-slate-800 group-hover:text-cyan-600 transition-colors">{step.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 font-medium">{step.tagline}</p>
                  </div>
                  {activeStep === index && (
                    <motion.div layoutId="arrow" className="relative z-10">
                      <ArrowRight size={18} className="text-cyan-500" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: Visual Detail Card */}
          <motion.div 
            className="lg:w-7/12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-full min-h-[400px] w-full rounded-[32px] p-8 md:p-12 border border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:border-cyan-500/20 transition-all duration-500 overflow-hidden group"
              >
                {/* Animated gradient background */}
                <motion.div 
                  animate={{ 
                    background: `linear-gradient(135deg, ${steps[activeStep].color}15 0%, transparent 60%)`,
                  }}
                  className="absolute inset-0 transition-all duration-700"
                />

                {/* Floating shapes */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-10 right-10 w-32 h-32 opacity-10"
                >
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${steps[activeStep].gradient}`} />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: [0, -360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-10 left-10 w-24 h-24 opacity-10"
                >
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${steps[activeStep].gradient}`} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="mb-6 inline-flex p-5 rounded-2xl bg-slate-100 border border-slate-200 group-hover:border-slate-300 transition-all duration-300"
                  >
                    {React.cloneElement(steps[activeStep].icon, { size: 40, strokeWidth: 1.5, color: steps[activeStep].color })}
                  </motion.div>

                  <motion.h2 
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-slate-900"
                  >
                    {steps[activeStep].title}
                  </motion.h2>
                  
                  <motion.p 
                    key={`desc-${activeStep}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-light"
                  >
                    {steps[activeStep].description}
                  </motion.p>

                  {/* Progress indicator */}
                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex gap-2">
                      {steps.map((_, idx) => (
                        <motion.div
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                            idx === activeStep 
                              ? "w-8 bg-gradient-to-r from-cyan-500 to-cyan-600" 
                              : "w-2 bg-slate-300 hover:bg-slate-400"
                          }`}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-500">
                      Step {activeStep + 1} of {steps.length}
                    </span>
                  </div>
                </div>

                {/* Large background number */}
                <motion.div 
                  key={`bg-num-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="absolute -bottom-8 -right-4 md:-right-8 text-[160px] md:text-[200px] font-black text-slate-200/50 select-none pointer-events-none"
                >
                  {activeStep + 1}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
