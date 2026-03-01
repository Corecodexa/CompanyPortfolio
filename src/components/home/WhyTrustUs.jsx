import React from "react";
import { ShieldCheck, Users, Zap, Award } from "lucide-react";

const WhyTrustUs = () => {
  const points = [
    { icon: <ShieldCheck />, title: "Secure", desc: "Enterprise-grade protection." },
    { icon: <Users />, title: "Expert", desc: "Top 1% industry talent." },
    { icon: <Zap />, title: "Fast", desc: "Rapid deployment cycles." },
    { icon: <Award />, title: "Proven", desc: "99% client retention." },
  ];

  return (
    <section className="py-12 bg-[#2DA3B4]/5 overflow-hidden">
      <div className=" mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Simplified Centered Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Why <span className="text-[#2DA3B4]">Core Codexa?</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#2DA3B4] mx-auto mt-4 rounded-full" />
        </div>

        {/* Eye-Catching Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((item, i) => (
            <div key={i} className="group text-center">
              {/* Animated Icon Circle */}
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-100 transition-all duration-500 group-hover:border-[#2DA3B4] group-hover:bg-[#2DA3B4] group-hover:text-white">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                
                {/* Floating "Ping" Animation */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DA3B4] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#2DA3B4]/20"></span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 transition-colors group-hover:text-[#2DA3B4]">
                {item.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;