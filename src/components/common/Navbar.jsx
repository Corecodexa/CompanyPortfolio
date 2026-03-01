import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import GlobalButton from './GlobalButton';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Service', path: '/service' },
        { name: 'Project', path: '/project' },
        { name: 'Team', path: '/team' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg border-b border-gray-100' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="text-2xl md:text-3xl font-black tracking-tighter flex items-center">
                        <span className="text-gray-900 group-hover:text-primary transition-colors duration-300">CORE</span>
                        <span className="text-primary ml-1">CODEXA</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                                location.pathname === link.path ? 'text-primary' : 'text-gray-600'
                            }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                                location.pathname === link.path ? 'w-full' : ''
                            }`} />
                        </Link>
                    ))}
                    <GlobalButton 
                        text="Get Started" 
                        variant="primary" 
                        className="sm" 
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-gray-900 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-semibold ${
                                        location.pathname === link.path ? 'text-primary' : 'text-gray-900'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <GlobalButton 
                                    text="Get Started" 
                                    variant="primary" 
                                    className="w-full" 
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
