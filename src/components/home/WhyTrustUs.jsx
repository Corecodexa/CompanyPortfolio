import React from "react";
import { ShieldCheck, Users, Zap, Award } from "lucide-react";

const WhyTrustUs = () => {
  const points = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Enterprise Security",
      desc: "Advanced security architecture and compliance-first systems to safeguard critical business operations.",
    },
    {
      icon: <Users size={24} />,
      title: "Expert-Led Delivery",
      desc: "Senior engineers and solution architects focused on scalable, future-ready technology.",
    },
    {
      icon: <Zap size={24} />,
      title: "Operational Efficiency",
      desc: "Optimized development workflows that accelerate delivery without compromising quality.",
    },
    {
      icon: <Award size={24} />,
      title: "Proven Results",
      desc: "A strong track record of long-term partnerships and measurable business impact.",
    },
  ];

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#2DA3B4_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[#2DA3B4] uppercase mb-4 px-4 py-1.5 bg-[#2DA3B4]/10 rounded-full border border-[#2DA3B4]/20">
            Why Choose Core Codexa
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Built for Performance,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4]">
              Designed for Trust.
            </span>
          </h2>

          <p className="text-lg text-slate-600 mt-6 leading-relaxed">
            We help organizations build secure, scalable, and high-performing IT systems
            with a focus on long-term reliability and measurable growth.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-slate-200 p-8 rounded-2xl 
                         transition-all duration-500 ease-out
                         hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(45,163,180,0.15)] 
                         hover:border-[#2DA3B4]/30 overflow-hidden"
            >
              {/* THE BOTTOM ACCENT BAR
                  Property: transform (scale-x)
                  Effect: Grows from 0 to 100% width on hover starting from the left
              */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] 
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon Container */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl
                bg-slate-50 text-[#2DA3B4] mb-8 transition-all duration-500
                group-hover:bg-[#2DA3B4] group-hover:text-white group-hover:scale-110 group-hover:rotate-[8deg]">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2DA3B4] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
                {item.desc}
              </p>
              
              {/* Subtle Decorative Circle that appears on hover */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#2DA3B4]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;