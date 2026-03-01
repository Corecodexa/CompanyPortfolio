import React from 'react';
import GlobalSwiper from '../common/GlobalSwiper';
import { FaLaptopCode, FaChartLine, FaShieldAlt, FaRocket, FaCloud, FaBullhorn } from 'react-icons/fa';

const ServiceSwiper = () => {
    const serviceSlides = [
        {
            id: 1,
            bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
            icon: FaLaptopCode,
            badge: 'Custom Solutions',
            title: 'Software Development',
            subtitle: 'We build robust, scalable, and high-performance custom software tailored to your specific business needs and goals.',
            button1: 'View Technologies',
            to1: '/service#tech',
            icon1: FaRocket,
            button2: 'Get a Quote',
            to2: '/contact',
            icon2: FaChartLine
        },
        {
            id: 2,
            bgImage: 'https://images.unsplash.com/photo-1551288049-bbda4e32f71d?auto=format&fit=crop&q=80',
            icon: FaChartLine,
            badge: 'Growth Focused',
            title: 'Digital Marketing',
            subtitle: 'Data-driven marketing strategies that increase brand visibility, drive engagement, and maximize your return on investment.',
            button1: 'Our Strategy',
            to1: '/service#marketing',
            icon1: FaBullhorn,
            button2: 'Start Now',
            to2: '/contact',
            icon2: FaRocket,
            showArrow2: true
        },
        {
            id: 3,
            bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
            icon: FaShieldAlt,
            badge: 'Security First',
            title: 'Cybersecurity',
            subtitle: 'Comprehensive security audits and implementation to protect your digital assets and ensure business continuity.',
            button1: 'Audit Services',
            to1: '/service#security',
            icon1: FaShieldAlt,
            button2: 'Consultation',
            to2: '/contact',
            icon2: FaCloud,
            showArrow2: true
        }
    ];

    return (
        <section className="w-full">
            <GlobalSwiper 
                slides={serviceSlides} 
                buttonStyle="gradient" 
                showIcon={true} 
            />
        </section>
    );
};

export default ServiceSwiper;
