import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const AboutTeam = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-1 w-12 bg-[#2DA3B4] rounded-full"></span>
            <p className="text-sm font-bold text-[#2DA3B4] uppercase tracking-wider">Our Team</p>
            <span className="h-1 w-12 bg-[#2DA3B4] rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet The <span className="text-[#2DA3B4]">Experts</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our talented team of professionals brings together diverse expertise and shared 
            passion for delivering exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-[#f8fafc] rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2DA3B4] hover:text-white transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2DA3B4] hover:text-white transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#2DA3B4] text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
