import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import logo from "../../assets/logo.jpeg"
const Footer = () => {
  const quickLinks = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'Services', url: '/services' },
    { id: 3, name: 'Blog', url: '/' },
    { id: 4, name: 'Terms & Conditions', url: '/' }
  ];

  const services = [
    { id: 1, name: 'Cybersecurity Services', url: '/' },
    { id: 2, name: 'Mobile App Development', url: '/' },
    { id: 3, name: 'App UI/UX Design', url: '/' },
    { id: 4, name: 'Website Design & Development', url: '/' },
    { id: 5, name: 'On-Page SEO', url: '/' },
    { id: 6, name: 'GEO-Targeted SEO (Local SEO)', url: '/' }
  ];

  const socialLinks = [
    { id: 1, icon: FaFacebookF, label: 'Facebook', url: '#' },
    { id: 2, icon: FaTwitter, label: 'Twitter', url: '#' },
    { id: 3, icon: FaInstagram, label: 'Instagram', url: '#' },
    { id: 4, icon: FaLinkedinIn, label: 'Linkedin', url: '#' }
  ];

  return (
    <footer className="bg-[#0D0C1C]  border-t border-gray-800/50 py-12 pt-20 ">
      <div className="mx-auto w-[90%] xl:w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%]">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 sm:gap-8 mb-12 md:mb-10 sm:mb-8">

          {/* Brand Section */}
          <div className="lg:col-span-1 md:col-span-2">
            {/* Logo */}
            <a href="/" className="inline-block mb-5 md:mb-4 sm:mb-4">
              <img 
                src={logo}
                alt="Core cordexa Logo" 
                className="footer-logo w-25 rounded h-25 "
              />
            </a>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-sm sm:text-xs leading-relaxed mb-6 md:mb-5 sm:mb-4 max-w-sm">
              Your potential. Our dedication. Building the future of web together with innovative solutions and exceptional service.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-2.5 sm:gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-10 md:h-10 sm:w-9 sm:h-9 
                    bg-[#252a38] border border-gray-800 rounded-full 
                    flex items-center justify-center 
                    text-[#299caf] text-xl md:text-lg sm:text-base
                    hover:bg-[#299caf] hover:text-white 
                    hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(180,0,0,0.5)]
                    transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl md:text-lg sm:text-base font-bold text-white mb-5 md:mb-4 sm:mb-3 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-0.5 after:bg-[#299caf] pb-2">
              Quick Links
            </h4>

            <ul className="space-y-2.5 md:space-y-2 sm:space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.url}
                    className="text-gray-400 text-sm md:text-sm sm:text-xs hover:text-[#299caf] hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl md:text-lg sm:text-base font-bold text-white mb-5 md:mb-4 sm:mb-3 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-0.5 after:bg-[#299caf] pb-2">
              Our Services
            </h4>

            <ul className="space-y-2.5 md:space-y-2 sm:space-y-1.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a 
                    href={service.url}
                    className="text-gray-400 text-sm md:text-sm sm:text-xs hover:text-[#299caf] hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl md:text-lg sm:text-base font-bold text-white mb-5 md:mb-4 sm:mb-3 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-12 after:h-0.5 after:bg-[#299caf] pb-2">
              Contact Us
            </h4>
            
            <ul className="space-y-3.5 md:space-y-3 sm:space-y-2.5">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-[#299caf] hover:text-[#299caf] text-xl flex-shrink-0" />
                <a href="tel:92 336-6760604" className="hover:text-[#299caf] transition-colors duration-300">
                  92 336-6760604
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-[#299caf] hover:text-[#299caf] text-xl mt-1 flex-shrink-0" />
                <span className="leading-relaxed hover:text-[#299caf] transition-colors duration-300">
                 Core Codexa  Bahawalpur
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-6 md:pt-5 sm:pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3 sm:gap-2">
            <p className="text-gray-400 text-sm md:text-sm sm:text-xs text-center md:text-left">
              © 2026 Core Codexa. All Rights Reserved.
            </p>
            <div className="flex gap-4 md:gap-3 sm:gap-2 text-sm md:text-sm sm:text-xs">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-[#299caf] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-[#299caf] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;