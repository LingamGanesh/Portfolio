import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import carsecond from "../assets/carsecond.png";

/**
 * Auto-playing AboutSlider
 * - auto-plays every AUTO_PLAY_INTERVAL ms
 * - pauses on hover / focus
 * - manual next/prev resets autoplay timer
 * - accessible buttons + indicators
 */

const slides = [
  {
    photo: card1,
    message:
      "I'm Ganesh Lingam, a MERN Stack Developer passionate about building scalable, modern, and user-friendly web applications. I focus on writing clean code, implementing modern UI principles, and creating smooth user experiences that deliver real value.",
    alt: "Ganesh portrait 1",
  },
  {
    photo: carsecond,
    message:
      "Expert in React, Node.js, Express & MongoDB. I build scalable full-stack web applications, write clean and maintainable code, and implement modern frontend and backend architectures.",
    alt: "Project screenshot 2",
  },
  {
    photo: card3,
    message:
      "Strong problem-solving mindset and collaborative approach. I thrive in dynamic environments, work effectively in teams, and deliver solutions that make a real impact.",
    alt: "Ganesh working with team",
  },
  {
    photo: card4,
    message:
      "Delivered high-impact projects, building applications that improved user experience and performance. My work contributed to increased engagement and client satisfaction.",
    alt: "Project highlight 4",
  },
  {
    photo: card2,
    message:
      "“Code with passion, create with purpose, and always keep learning.” – My personal motto that drives every project I take on.",
    alt: "Inspirational quote card",
  },
];

const AUTO_PLAY_INTERVAL = 5000; // 5s, change if you want faster/slower

const AboutSlider = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  // Advance to next slide (wraps)
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  // Go to previous slide (wraps)
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Jump to a specific slide (used by indicators)
  const goToSlide = (i) => {
    setIndex(i % slides.length);
  };

  // Setup autoplay effect
  useEffect(() => {
    // clear any existing timer
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, AUTO_PLAY_INTERVAL);
    }

    // cleanup on unmount
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused]);

  // Reset autoplay when user manually navigates (makes UX predictable)
  const handleManualNav = (fn) => {
    fn();
    // restart autoplay by toggling pause briefly
    setIsPaused(true);
    // small timeout to allow user to read; autoplay resumes automatically
    setTimeout(() => setIsPaused(false), 1200);
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto mt-12 px-4 md:px-0 flex justify-center items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      // pause on keyboard focus for accessibility
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Slider content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 w-full text-center md:text-left"
        >
          {/* Image */}
          <motion.img
            src={slides[index].photo}
            alt={slides[index].alt || `Slide ${index + 1}`}
            className="w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="max-w-lg"
          >
            <p className="text-[#E5E5E5] text-lg md:text-xl leading-relaxed">
              {slides[index].message}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => handleManualNav(prevSlide)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-0 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCA311] ml-2"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={() => handleManualNav(nextSlide)}
        aria-label="Next slide"
        className="absolute top-1/2 right-0 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCA311] mr-2"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Indicators (dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManualNav(() => goToSlide(i))}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index
                ? "scale-125 bg-[#FCA311] shadow-[0_0_8px_rgba(252,163,17,0.35)]"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Live region for screen readers (announces slide changes) */}
      <div aria-live="polite" className="sr-only">
        Slide {index + 1} of {slides.length}
      </div>
    </div>
  );
};

export default AboutSlider;
