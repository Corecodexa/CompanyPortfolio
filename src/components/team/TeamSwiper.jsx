import React from 'react';
import GlobalSwiper from '../common/GlobalSwiper';
import { FaLinkedin, FaTwitter, FaGithub, FaRocket, FaCode, FaPaintBrush } from 'react-icons/fa';

const TeamSwiper = () => {
    const teamSlides = [
        {
            id: 1,
            bgImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
            icon: FaCode,
            badge: 'CEO & Founder',
            title: 'Alex Rivera',
            subtitle: 'A visionary leader with 15+ years of experience in digital transformation and software architecture.',
            button1: 'View LinkedIn',
            to1: 'https://linkedin.com',
            icon1: FaLinkedin,
            button2: 'Contact',
            to2: '/contact',
            icon2: FaRocket
        },
        {
            id: 2,
            bgImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
            icon: FaPaintBrush,
            badge: 'Creative Director',
            title: 'Sarah Chen',
            subtitle: 'Award-winning designer focused on creating intuitive, brand-first digital experiences that resonate.',
            button1: 'Portfolio',
            to1: '/portfolio',
            icon1: FaGithub,
            button2: 'Twitter',
            to2: 'https://twitter.com',
            icon2: FaTwitter,
            showArrow2: true
        },
        {
            id: 3,
            bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
            icon: FaRocket,
            badge: 'CTO',
            title: 'Marcus Thorne',
            subtitle: 'Tech innovator specialized in cloud scaling, AI integration, and building high-performance engineering teams.',
            button1: 'Tech Stack',
            to1: '/services',
            icon1: FaCode,
            button2: 'GitHub',
            to2: 'https://github.com',
            icon2: FaGithub,
            showArrow2: true
        }
    ];

    return (
        <section className="w-full">
            <GlobalSwiper 
                slides={teamSlides} 
                buttonStyle="gradient" 
                showIcon={true} 
            />
        </section>
    );
};

export default TeamSwiper;
