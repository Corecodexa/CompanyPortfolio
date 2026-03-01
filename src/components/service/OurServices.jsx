import React from "react";
import { 
  Palette, Code, Smartphone, BarChart, Search, Edit3, 
  Layers, Database, Globe, Image, UserCheck, Terminal, 
  Video, Users, ArrowUpRight 
} from "lucide-react";
import GlobalHeading from "../common/GlobalHeading";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative rounded-3xl p-[1px] transition-all duration-500 hover:scale-[1.02]">
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3fe8e2] via-transparent to-[#2DA3B4] opacity-10 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Body */}
      <div className="relative h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#2DA3B4]/20">
        
        {/* Icon Container */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2DA3B4]/10 text-[#2DA3B4] group-hover:bg-[#2DA3B4] group-hover:text-white transition-all duration-500">
          {React.cloneElement(icon, { size: 28 })}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-[#2DA3B4]">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="text-[#2DA3B4]" size={20} />
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  const services = [
    { 
      icon: <Palette />, 
      title: "Web Designing", 
      description: "We deliver modern, responsive web designs tailored to align with your brand identity and business objectives." 
    },
    { 
      icon: <Code />, 
      title: "Web Development", 
      description: "Our development team builds high-performance websites using the latest technologies to ensure scalability and security." 
    },
    { 
      icon: <Smartphone />, 
      title: "Mobile App Development", 
      description: "We develop robust and visually appealing cross-platform mobile applications using Flutter for Android, iOS, and the web." 
    },
    { 
      icon: <BarChart />, 
      title: "Digital Marketing", 
      description: "Our digital marketing strategies are designed to boost online visibility, engage audiences, and drive measurable growth." 
    },
    { 
      icon: <Search />, 
      title: "SEO", 
      description: "We offer professional SEO services aimed at improving search rankings, increasing web traffic, and maximizing ROI." 
    },
    { 
      icon: <Edit3 />, 
      title: "Content Writing", 
      description: "Our content team delivers impactful, SEO-optimized content tailored to your brand’s voice and target audience." 
    },
    { 
      icon: <Layers />, 
      title: "Full Stack Development", 
      description: "We provide comprehensive full stack development services, offering seamless integration between front-end and back-end systems." 
    },
    { 
      icon: <Database />, 
      title: "Laravel Development", 
      description: "Our Laravel development solutions are secure, scalable, and tailored to support complex business logic and workflows." 
    },
    { 
      icon: <Globe />, 
      title: "WordPress Development", 
      description: "We create custom WordPress websites that are user-friendly, mobile-responsive, and optimized for performance." 
    },
    { 
      icon: <Image />, 
      title: "Graphics Designing", 
      description: "Our design team crafts compelling graphics that enhance brand recognition and effectively communicate your message." 
    },
    { 
      icon: <UserCheck />, 
      title: "UI/UX Designing", 
      description: "We specialize in designing intuitive and engaging user experiences that drive user satisfaction and retention." 
    },
    { 
      icon: <Terminal />, 
      title: "Python Development", 
      description: "Our Python development team builds robust, scalable applications tailored to meet diverse business requirements." 
    },
    { 
      icon: <Video />, 
      title: "2D & 3D Animations", 
      description: "We produce high-quality 2D and 3D animations that enhance storytelling and captivate your audience across platforms." 
    },
    { 
      icon: <Users />, 
      title: "Lead Generation", 
      description: "Our lead generation services are designed to attract and convert high-quality prospects through data-driven strategies." 
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc] px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <GlobalHeading 
          badge="Services"
          title="Our Comprehensive"
          highlightText="Solutions"
          description="We provide a wide range of digital services designed to help your business thrive in the modern landscape."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
