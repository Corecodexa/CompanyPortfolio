import React from 'react';
import GlobalSwiper from '../common/GlobalSwiper';
import { FaExternalLinkAlt, FaGithub, FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';

const ProjectSwiper = () => {
    const projectSlides = [
        {
            id: 1,
            bgImage: 'https://images.unsplash.com/photo-1551288049-bbda4e32f71d?auto=format&fit=crop&q=80',
            icon: FaCode,
            badge: 'Web Application',
            title: 'E-Commerce Nexus',
            subtitle: 'A high-performance, scalable e-commerce platform built with React and Node.js, featuring real-time inventory tracking.',
            button1: 'Live Demo',
            to1: 'https://demo.com',
            icon1: FaExternalLinkAlt,
            button2: 'Source Code',
            to2: 'https://github.com',
            icon2: FaGithub,
            showArrow2: true
        },
        {
            id: 2,
            bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
            icon: FaMobileAlt,
            badge: 'Mobile App',
            title: 'HealthTrack Pro',
            subtitle: 'A comprehensive health monitoring application with cross-platform support and wearable device integration.',
            button1: 'App Store',
            to1: 'https://apple.com',
            icon1: FaExternalLinkAlt,
            button2: 'Play Store',
            to2: 'https://google.com',
            icon2: FaExternalLinkAlt,
            showArrow2: true
        },
        {
            id: 3,
            bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
            icon: FaCloud,
            badge: 'Cloud Infrastructure',
            title: 'CloudSync Enterprise',
            subtitle: 'Automated cloud infrastructure management tool with focus on security, scalability, and cost optimization.',
            button1: 'Case Study',
            to1: '/case-study',
            icon1: FaCode,
            button2: 'Learn More',
            to2: '/service',
            icon2: FaExternalLinkAlt,
            showArrow2: true
        }
    ];

    return (
        <section className="w-full">
            <GlobalSwiper 
                slides={projectSlides} 
                buttonStyle="gradient" 
                showIcon={true} 
            />
        </section>
    );
};

export default ProjectSwiper;
