import React, { useState } from "react";
import { Search, PenTool, Code, CheckCircle, Rocket, ArrowRight } from "lucide-react";
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
      color: "#06b6d4"
    },
    {
      icon: <PenTool />,
      title: "Design",
      tagline: "UI/UX Excellence",
      description: "Our design team crafts intuitive and visually stunning experiences. We focus on high-fidelity prototypes that resonate with your actual users.",
      color: "#6366f1"
    },
    {
      icon: <Code />,
      title: "Development",
      tagline: "Engineering Quality",
      description: "We bring designs to life with clean, scalable, and high-performance code. Our stack is modern, and our architecture is built for growth.",
      color: "#10b981"
    },
    {
      icon: <CheckCircle />,
      title: "Testing",
      tagline: "Quality Assurance",
      description: "Rigorous QA testing ensures a bug-free and seamless experience. We stress-test every edge case so your users never have to.",
      color: "#f59e0b"
    },
    {
      icon: <Rocket />,
      title: "Deployment",
      tagline: "Launch & Beyond",
      description: "We launch your product with precision and provide ongoing support. Deployment is just the beginning of our partnership.",
      color: "#ef4444"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <GlobalHeading 
          badge="Our Blueprint"
          title="Engineered for"
          highlightText="Success"
          description="A sophisticated methodology designed to bridge the gap between complex ideas and seamless execution."
        />

        <div className="mt-14 flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SIDE: Navigation */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`w-full flex items-center gap-6 p-4 rounded-xl transition-all duration-300 cursor-pointer border ${
                  activeStep === index 
                    ? "bg-white border-slate-200 shadow-lg shadow-slate-200/50 translate-x-3" 
                    : "bg-transparent border-transparent opacity-40 hover:opacity-80"
                }`}
              >
                <span className={`text-3xl font-black transition-colors duration-300 ${activeStep === index ? 'text-[#2DA3B4]' : 'text-slate-300'}`}>
                  0{index + 1}
                </span>
                <div className="text-left">
                  <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800">{step.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{step.tagline}</p>
                </div>
                {activeStep === index && (
                  <motion.div layoutId="arrow" className="ml-auto">
                    <ArrowRight size={18} className="text-[#2DA3B4]" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Visual Detail Card (With Hover Effects) */}
          <motion.div 
            className="lg:w-2/3"
            whileHover={{ y: -5 }} // Subtle lift on hover
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="group relative h-full min-h-[350px] w-full bg-white rounded-[32px] p-8 md:p-10 border border-slate-200 shadow-xl hover:shadow-2xl hover:border-[#2DA3B4]/30 transition-all duration-500 flex flex-col justify-center overflow-hidden">
              
              {/* Animated Glow Background - Increases opacity on card hover */}
              <motion.div 
                animate={{ 
                  backgroundColor: steps[activeStep].color,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blur-[100px] opacity-10 group-hover:opacity-20 rounded-full transition-all duration-700"
              />

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10"
                >
                  {/* Icon Container with hover scaling */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 inline-flex p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                    style={{ color: steps[activeStep].color }}
                  >
                    {React.cloneElement(steps[activeStep].icon, { size: 36, strokeWidth: 1.5 })}
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-slate-900 group-hover:text-black transition-colors">
                    {steps[activeStep].title}
                  </h2>
                  
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-light">
                    {steps[activeStep].description}
                  </p>

                  <div className="mt-8 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                    <motion.div 
                      animate={{ width: [40, 60, 40] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="h-px bg-slate-300" 
                    />
                    Step 0{activeStep + 1} of 05
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Background Number - Moves slightly on card hover */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`bg-num-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ x: -10, y: -10 }}
                  className="absolute -bottom-6 -right-6 text-[140px] font-black text-slate-100 select-none pointer-events-none transition-transform duration-500 group-hover:text-slate-200/50"
                >
                  {activeStep + 1}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;