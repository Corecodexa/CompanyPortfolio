import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import GlobalButton from './GlobalButton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// 1. Define the main container variants for stagger effect
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
        },
    },
};

// 2. Define variants for individual content elements
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.17, 0.55, 0.55, 1],
        },
    },
};

// 3. Define variants for the background image
const bgImageVariants = {
    show: {
        scale: 1.1,
        transition: {
            duration: 2,
            ease: "linear",
        },
    },
    hidden: { scale: 1 },
};


const GlobalSwiper = ({ slides, buttonStyle = 'default', showIcon = false }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative group/swiper">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{ 
                    clickable: true,
                    el: '.custom-pagination'
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                loop={true}
                className="h-screen w-full"
            >
                {slides.map((slide) => {
                    const IconComponent = slide.icon;

                    return (
                        <SwiperSlide key={slide.id}>
                            {({ isActive }) => (
                                <div className="relative h-screen w-full">
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: `url(${slide.bgImage})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                        variants={bgImageVariants}
                                        initial="hidden"
                                        animate={isActive ? "show" : "hidden"}
                                        transition={{ duration: 2000, ease: "linear" }}
                                    />

                                    <div className="absolute inset-0 bg-black/30" />

                                    <motion.div
                                        className="relative h-full w-full flex items-center justify-center pt-24 pb-12 px-4"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate={isActive ? "show" : "hidden"}
                                    >
                                        <div className="max-w-4xl mx-auto text-center space-y-6">

                                            {(showIcon && IconComponent) ? (
                                                <motion.div
                                                    className="flex justify-center mb-2"
                                                    variants={itemVariants}
                                                >
                                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30">
                                                        <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                                                    </div>
                                                </motion.div>
                                            ) : slide.badge ? (
                                                <motion.span
                                                    className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/30"
                                                    variants={itemVariants}
                                                >
                                                    {slide.badge}
                                                </motion.span>
                                            ) : <motion.div variants={itemVariants} />}

                                            <motion.h1
                                                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug"
                                                variants={itemVariants}
                                            >
                                                {slide.title}
                                            </motion.h1>

                                            <motion.p
                                                className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
                                                variants={itemVariants}
                                            >
                                                {slide.subtitle || slide.description}
                                            </motion.p>

                                            <motion.div
                                                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                                                variants={itemVariants}
                                            >
                                                <GlobalButton 
                                                    text={slide.button1}
                                                    link={slide.to1}
                                                    variant={slide.variant1 || (buttonStyle === 'gradient' ? 'primary' : 'secondary')}
                                                    icon={slide.icon1}
                                                    className="md"
                                                    light={true}
                                                />
                                                <GlobalButton 
                                                    text={slide.button2}
                                                    link={slide.to2}
                                                    variant={slide.variant2 || "outline"}
                                                    icon={slide.icon2}
                                                    className="md"
                                                    showArrow={slide.showArrow2 !== undefined ? slide.showArrow2 : false}
                                                    light={true}
                                                />
                                            </motion.div>

                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Custom Navigation Buttons using GlobalButton */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20 opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300 hidden md:block">
                <div ref={prevRef}>
                    <GlobalButton 
                        variant="secondary" 
                        icon={FaChevronLeft} 
                        showArrow={false} 
                        className="sm"
                        showShine={false}
                        light={true}
                    />
                </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20 opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300 hidden md:block">
                <div ref={nextRef}>
                    <GlobalButton 
                        variant="secondary" 
                        icon={FaChevronRight} 
                        showArrow={false} 
                        className="sm"
                        showShine={false}
                        light={true}
                    />
                </div>
            </div>

            {/* Custom Pagination */}
            <div className="custom-pagination absolute bottom-8 left-0 w-full flex justify-center items-center gap-2 z-20" />

            <style dangerouslySetInnerHTML={{ __html: `
                .custom-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.3);
                    opacity: 1;
                    transition: all 0.3s ease;
                    border-radius: 2px;
                    margin: 0 !important;
                }

                .custom-pagination .swiper-pagination-bullet-active {
                    background: var(--color-primary, #3b82f6);
                    width: 40px;
                    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
                }
            `}} />
        </div>
    );
};

export default GlobalSwiper;