import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome To Core Condexa",
      subtitle: "Building High-Converting Digital Experiences",
      description:
        "We design and develop scalable, secure and performance-driven web solutions that help brands grow faster.",
      highlight: ["Core", "Digital"],
      link: "/services",
    },
    {
      id: 2,
      title: "Innovative Design. Smart Technology.",
      subtitle: "Transforming Ideas Into Powerful Products",
      description:
        "From UI/UX to full-stack development, we create future-ready digital products that drive real business impact.",
      highlight: ["Innovative", "Smart"],
      link: "/about",
    },
    {
      id: 3,
      title: "Empowering Businesses Through Technology",
      subtitle: "Scale Faster With Modern Solutions",
      description:
        "Helping startups and enterprises build, launch and scale using modern web, mobile and cloud technologies.",
      highlight: ["Businesses", "Technology"],
      link: "/projects",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative h-screen flex pt-12 items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#020215]/80 to-black/70" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl px-6 transition-all duration-500 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {currentSlide.title.split(" ").map((word, i) => {
            const isHighlight = currentSlide.highlight?.includes(word);

            return (
              <span
                key={i}
                className={
                  isHighlight
                    ? "bg-gradient-to-r from-[#3fe8e2] to-[#2DA3B4] bg-clip-text text-transparent"
                    : "text-white"
                }
              >
                {word + " "}
              </span>
            );
          })}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          {currentSlide.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          {currentSlide.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={currentSlide.link}>
            <Button text="Explore Services" />
          </Link>

          <Link to="/contact">
            <button className="px-5 text-xl  py-2 cursor-pointer border border-[#2DA3B4] text-[#2DA3B4] rounded-lg hover:bg-[#2DA3B4] hover:text-white transition-all duration-300">
              Get Free Consultation
            </button>
          </Link>
        </div>

        {/* Dots */}
        <div className="flex space-x-3 mt-12 justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all cursor-pointer duration-500 rounded-full ${
                currentIndex === index
                  ? "bg-[#2DA3B4] w-8 h-3"
                  : "bg-white/30 w-3 h-3 hover:bg-[#2DA3B4]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;