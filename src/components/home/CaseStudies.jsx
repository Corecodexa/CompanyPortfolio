import React from 'react';
import Button from '../common/Button';

const CaseStudies = () => {
  const projects = [
    {
      id: 1,
      title: "Insurance IT Solutions",
      category: "Insurance IT Solutions",
      image: "https://images.unsplash.com/photo-1767202113040-6f8aa25112fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMHNraWxsfGVufDB8fDB8fHww",
      alt: "Insurance IT Solutions"
    },
    {
      id: 2,
      title: "IT Services",
      category: "IT Services",
      image: "https://media.istockphoto.com/id/607463118/photo/industrial-designers-at-the-office-discussing-project-on-the-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=wfxz8UWNHBZUdV6HJcwgvu0PLJMxHPoCkzP2sn2QD5Q=",
      alt: "IT Services"
    },
    {
      id: 3,
      title: "Business Intelligence",
      category: "Business Intelligence",
      image: "https://media.istockphoto.com/id/929302920/photo/office-talk.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ur_6qXsdI76VrouUoAbngOmAeV6TEpdOxklZPm4ANgg=",
      alt: "Business Intelligence"
    },
    {
      id: 4,
      title: "IT Consulting",
      category: "IT Consulting",
      image: "https://plus.unsplash.com/premium_photo-1663091226871-2878f62a524d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGRpZ2l0YWwlMjBza2lsbHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "IT Consulting"
    },
    {
      id: 5,
      title: "Managed Analytics",
      category: "Managed Analytics",
      image: "https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGRpZ2l0YWwlMjBza2lsbHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Managed Analytics"
    },
    {
      id: 6,
      title: "Data Security",
      category: "Data Security",
      image: "https://images.unsplash.com/photo-1766066014237-00645c74e9c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGRpZ2l0YWwlMjBza2lsbHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Data Security"
    },
  ];

  return (
    <section id="project" className="py-8 bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h6 className="text-lg text-gray-500 uppercase tracking-widest">Featured Works</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Case <span className='bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent'>Studies</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer">
              {/* Image */}
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-72 md:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <a href="#" className="hover:underline">{project.title}</a>
                </h3>
                <p className="text-sm text-gray-200 mb-4">{project.category}</p>
                <a href="#" className="inline-flex items-center gap-2 text-white font-medium text-base hover:gap-3 transition-all">
                  View Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button text="View All Projects" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;