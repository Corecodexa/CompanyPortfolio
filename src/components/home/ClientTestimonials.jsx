import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote:
      "Core Codexa transformed our digital presence. Their team delivered a stunning website that increased our conversions by 60%!",
  },
  {
    rating: 5,
    name: "Michael Chen",
    role: "Founder, DigitalHub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote:
      "Professional, timely, and incredibly talented. Core Codexa understood our vision and brought it to life perfectly.",
  },
  {
    rating: 5,
    name: "Emily Davis",
    role: "Marketing Director, BrandCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote:
      "Our new website has received countless compliments. Core Codexa exceeded all expectations with their design skills.",
  },


];

// Helper to render stars including half stars
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) stars.push(<FaStar key={i} />);
    else if (i < rating) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaStar key={i} className="opacity-30" />);
  }
  return <div className="flex text-[#001C55] gap-1">{stars}</div>;
};

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    key={testimonial.name}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="bg-white backdrop-blur-md border border-white/10 rounded-3xl px-6 py-6 shadow-2xl relative hover:scale-[1.02] transition-transform"
  >
    <FaQuoteLeft className="absolute top-6 right-6 text-white/10 text-6xl" />
    <div className="flex items-center justify-between mb-4">
      <StarRating rating={testimonial.rating} />
      <span className="text-white font-mono">{testimonial.rating.toFixed(1)}</span>
    </div>

    <blockquote className="text-gray-100 text-lg md:text-xl italic leading-relaxed mb-6">
      "{testimonial.quote}"
    </blockquote>

    <div className="flex items-center gap-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-14 h-14 rounded-2xl border-2 border-[#001C55] object-cover p-1"
      />
      <div>
        <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
        <p className="text-blue-300 text-sm uppercase tracking-widest">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const ClientReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, nextTestimonial]);

  const active = testimonials[activeIndex];

  return (
    <section
  className="relative px-8 bg-gradient-to-r from-[#0f172a] to-[hsl(206,64%,33%)] overflow-hidden"
  aria-live="polite"
>
  {/* Background decor */}
  <div className="absolute top-0 left-0 bg-blue-800/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
    {/* Left Heading */}
    <div className="md:w-2/5 text-center md:text-left w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
        Our <span className="text-[#32DFF1]">Clients,</span> <br />
        In Their Own Words
      </h2>
      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        We help brands grow by creating digital experiences that people love.
      </p>
    </div>

    {/* Right Testimonial */}
    <div
      className="md:w-3/5 w-full min-h-[350px] sm:min-h-[400px] flex flex-col justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-6 shadow-2xl relative hover:scale-[1.02] transition-transform"
        >
          <FaQuoteLeft className="absolute top-6 right-6 text-white/20 text-6xl" />

          {/* Stars & Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => {
                if (i < Math.floor(active.rating)) return <FaStar key={i} className="text-[#32DFF1]" />;
                else if (i < active.rating) return <FaStarHalfAlt key={i} className="text-[#32DFF1]" />;
                return <FaStar key={i} className="text-gray-400/50" />;
              })}
            </div>
            <span className="text-[#32DFF1] font-mono">{active.rating.toFixed(1)}</span>
          </div>

          {/* Quote */}
          <blockquote className="text-gray-200 text-lg md:text-xl italic leading-relaxed mb-6">
            "{active.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <img
              src={active.avatar}
              alt={active.name}
              className="w-15 h-15 rounded-full border-2 border-[#32DFF1] object-cover p-1"
            />
            <div>
              <h3 className="text-white font-bold text-lg">{active.name}</h3>
              <p className="text-gray-300 text-sm uppercase tracking-widest">{active.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-center mt-8 px-4">
        <div className="flex gap-3">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 transition-all cursor-pointer duration-500 rounded-full ${
                idx === activeIndex ? "w-4 bg-[#32DFF1]" : "w-2 bg-gray-400/50 hover:bg-[#32DFF1]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              layout
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default ClientReviews;