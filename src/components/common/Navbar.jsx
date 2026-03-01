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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100]">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full h-[70px] px-6 md:px-12 flex items-center justify-between
            transition-all duration-500
          ${
            scrolled
              ? "bg-[#020215] "
              : "bg-[#020215]"
          }`}
        >
          {/* Inner Container */}
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Core Codexa"
                className="h-[70px] w-full rounded-lg brightness-110 contrast-110"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-2 relative">
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
                      className={`relative z-10 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>

                    {/* Hover Background */}
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 bg-white/5 rounded-full z-0"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Action Area */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Link to="/contact">
                  <Button
                    text="Contact Us"
                    className="!py-2 !px-6 !text-xs uppercase tracking-widest border-cyan-500/50"
                  />
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
              >
                <div
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[#0E0D1D]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-10 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-white hover:text-cyan-400 transition-all active:scale-95"
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="mt-6 px-10 py-4 bg-cyan-500 text-black font-bold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-105 transition-all">
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