import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.jpeg";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/our-services", label: "Services" },
    { path: "/project", label: "Projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Trigger change a bit later for a smoother feel
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100]">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`w-full transition-all duration-500 ease-in-out border-b ${
            scrolled 
              ? "bg-[#020215]/95 backdrop-blur-md py-2 border-white/10 shadow-xl" 
              : "bg-transparent py-4 border-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
            
            {/* Logo - Adjusted height for scroll state */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src={logo}
                alt="Core Codexa"
                className={`transition-all duration-500 rounded-lg object-contain ${
                  scrolled ? "h-10 md:h-12" : "h-12 md:h-16"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ path, label }, index) => {
                const isActive = location.pathname === path;
                return (
                  <li
                    key={path}
                    className="relative px-4 py-2"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      to={path}
                      className={`relative z-10 text-xs xl:text-sm  uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? "text-cyan-400"
                          : scrolled ? "text-gray-300 hover:text-white" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>

                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="nav-hover"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute inset-0 bg-cyan-500/10 rounded-full z-0"
                        />
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Action Area */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <Link to="/contact">
                  <Button
                    text="Contact Us"
                    className={` py-2 px-6 !text-[10px] uppercase tracking-[0.2em] transition-all ${
                      scrolled 
                        ? "bg-cyan-600 text-white border-none" 
                        : "bg-transparent border-cyan-500/50 text-white hover:bg-cyan-500/10"
                    }`}
                  />
                </Link>
              </div>

              {/* Mobile Toggle - Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-cyan-400 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#020215] flex flex-col items-center justify-center p-8 lg:hidden"
          >
            {/* Close button inside menu for better UX */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-cyan-400 text-sm tracking-widest"
            >
              CLOSE
            </button>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold tracking-tighter transition-all ${
                    location.pathname === link.path ? "text-cyan-400" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                <button className="px-8 py-4 bg-cyan-500 text-black font-black rounded-sm shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform">
                  LET'S CONNECT
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;