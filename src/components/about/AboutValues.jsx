import React from "react";
import { ShieldCheck, Handshake, Trophy } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Integrity",
      description: "We hold ourselves to a strong ethical and moral code, ensuring transparency in every interaction.",
    },
    {
      id: 2,
      icon: Handshake,
      title: "Trust",
      description: "We are dependable, loyal, and hardworking to achieve the same goal, building lasting relationships.",
    },
    {
      id: 3,
      icon: Trophy,
      title: "Excellence",
      description: "We consistently strive to deliver high-quality work without room for error, exceeding expectations.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-1 w-12 bg-[#2DA3B4] rounded-full"></span>
            <p className="text-sm font-bold text-[#2DA3B4] uppercase tracking-wider">Our Values</p>
            <span className="h-1 w-12 bg-[#2DA3B4] rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What <span className="bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent">We Value</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision we make and every solution we deliver
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div 
              key={value.id} 
              className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#2DA3B4]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2DA3B4] group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-8 h-8 text-[#2DA3B4] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] border-2 border-white shadow-lg"
              />
            ))}
          </div>
          <p className="text-gray-600">
            <span className="font-bold text-gray-900">100+</span> trusted partners worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;