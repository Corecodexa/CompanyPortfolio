import React from "react";
import { Link } from "react-router-dom";
import { 
  Code, Palette, Smartphone, Cloud, 
  BarChart, ShieldCheck, ArrowUpRight 
} from "lucide-react";
import Button from "../common/Button";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative rounded-3xl p-[1px] transition-all duration-500 hover:scale-[1.02]">
      {/* Animated Border Gradient (The Glow) */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3fe8e2] via-transparent to-[#2DA3B4] opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Body */}
      <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#2DA3B4]/20">
        
        {/* Floating Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] text-white shadow-lg shadow-[#2DA3B4]/30 group-hover:-translate-y-2 transition-transform duration-300">
          {React.cloneElement(icon, { size: 30 })}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

        {/* Action Link */}
        <Link
          to="/contact"
          className="flex items-center gap-2 font-bold text-[#2DA3B4] group-hover:text-[#00134F] transition-colors"
        >
          Explore More <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    { icon: <Code />, title: "Web Development", description: "High-performance, scalable applications using React, Next.js and modern backend stacks." },
    { icon: <Palette />, title: "UI/UX Design", description: "Creative interfaces focused on user psychology and seamless digital journeys." },
    { icon: <Smartphone />, title: "Mobile Apps", description: "Native and cross-platform apps built for speed, stability, and beautiful interaction." },
    { icon: <Cloud />, title: "Cloud Solutions", description: "Scalable infrastructure and DevOps that grow alongside your business demands." },
    { icon: <BarChart />, title: "Digital Marketing", description: "Data-led strategies to dominate search results and convert traffic into revenue." },
    { icon: <ShieldCheck />, title: "Cyber Security", description: "Modern encryption and threat protection to keep your digital assets safe 24/7." },
  ];

  return (
    <section  className="relative px-12 bg-[#f8fafc] py-12  overflow-hidden">
      
      {/* --- VIBRANT BACKGROUND ELEMENTS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3fe8e2]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2DA3B4]/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- CENTERED HEADING --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Services We <span className="relative inline-block bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent">
              Offer
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 120 2 199 5.5" stroke="#3fe8e2" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 ">
            TOJO GLOBAL offers crypto solutions, targeted marketing, impactful design, custom development, and professional video editing to elevate your brand.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        {/* --- CENTERED CTA --- */}
        <div className="mt-12 text-center">
          <Link to="/contact">
           <Button text="Enrolled Now" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;