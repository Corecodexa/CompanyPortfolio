import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Palette,
  Smartphone,
  Cloud,
  BarChart,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Button from "../common/Button";

/* =========================
   Modern Service Card
========================= */
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative rounded-3xl bg-white p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2DA3B4]/10 overflow-hidden">

      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Soft Glow Background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3fe8e2]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3fe8e2]/20 to-[#2DA3B4]/20 text-[#2DA3B4] group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon, { size: 26 })}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2DA3B4] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8 text-sm">
        {description}
      </p>

      {/* CTA */}
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#2DA3B4] transition-all duration-300 group-hover:gap-3"
      >
        Learn More
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </div>
  );
};

/* =========================
   Services Section
========================= */
const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description:
        "High-performance, scalable applications using React, Next.js and modern backend stacks.",
    },
    {
      icon: <Palette />,
      title: "UI/UX Design",
      description:
        "Creative interfaces focused on user psychology and seamless digital journeys.",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform apps built for speed, stability, and beautiful interaction.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Solutions",
      description:
        "Scalable infrastructure and DevOps that grow alongside your business demands.",
    },
    {
      icon: <BarChart />,
      title: "Digital Marketing",
      description:
        "Data-led strategies to dominate search results and convert traffic into revenue.",
    },
    {
      icon: <ShieldCheck />,
      title: "Cyber Security",
      description:
        "Modern encryption and threat protection to keep your digital assets safe 24/7.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-12 py-20 bg-[#f8fafc] overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3fe8e2]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2DA3B4]/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Services We{" "}
            <span className="bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            TOJO GLOBAL offers crypto solutions, targeted marketing, impactful
            design, custom development, and professional video editing to
            elevate your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button text="Enroll Now" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;