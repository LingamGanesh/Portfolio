import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.png";
import x from "../assets/x.svg";
import ComputersCanvas from "./canvas/Computers";
// ⭐ TYPEWRITER ROLE
const TypewriterRole = () => {
  const roles = ["Front-End Developer", "Back-End Developer", "MERN Stack Engineer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (charIndex < current.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [charIndex, roleIndex]);

  return (
    <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide 
      text-[#FCA311] flex items-center justify-center md:justify-start gap-2 font-[Fira_Code]">
      {text}
      <span className="animate-pulse text-[#FFFFFF] font-bold">|</span>
    </p>
  );
};

// ⭐ SOCIAL LINKS
const SocialLinks = () => (
  <div className="flex gap-4 mt-4 hidden md:flex">
    <a href="https://linkedin.com/in/lingam-ganesh" target="_blank" rel="noreferrer">
      <img src={linkedin} className="w-8 h-8 hover:scale-110 transition" />
    </a>
    <a href="https://github.com/LingamGanesh" target="_blank" rel="noreferrer">
      <img src={github} className="w-8 h-8 hover:scale-110 transition" />
    </a>
    <a href="#" target="_blank" rel="noreferrer">
      <img src={x} className="w-8 h-8 hover:scale-110 transition" />
    </a>
  </div>
);

// ⭐ HERO SECTION
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center 
      px-6 md:px-16 pt-20 md:pt-24 font-[Inter] bg-[#14213D]">

      {/* CONTENT CONTAINER */}
      <div className="relative w-full max-w-6xl flex flex-col-reverse md:flex-row 
        items-center md:justify-between gap-8 md:gap-16 z-10">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start 
          text-center md:text-left space-y-4 md:space-y-6 w-full md:w-1/2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
            text-[#FFFFFF] leading-tight">
            Hi, I’m Ganesh 👋
          </h1>

          <TypewriterRole />

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#E5E5E5] mt-1">
            Based in India
          </h2>

          <p className="text-[#E5E5E5] text-base sm:text-lg md:text-lg 
            max-w-md leading-relaxed">
            MERN Stack Developer passionate about creating clean UI, smooth user experiences, 
            and ultra-scalable backend systems.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">

            {/* GOLD BUTTON */}
            <button className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold 
              rounded-xl bg-[#FCA311] text-[#14213D] shadow-md 
              hover:scale-110 hover:shadow-[0_0_15px_#FCA31190] transition">
              Hire Me
            </button>

            {/* OUTLINE BUTTONS */}
            <button className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl 
              border border-[#FFFFFF80] text-[#FFFFFF] bg-transparent
              hover:bg-[#FFFFFF10] hover:border-[#FCA311] hover:text-[#FCA311] 
              transition">
              View Projects
            </button>

            <button className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl 
              border border-[#FFFFFF80] text-[#FFFFFF] bg-transparent
              hover:bg-[#FFFFFF10] hover:border-[#FCA311] hover:text-[#FCA311] 
              transition">
              Resume
            </button>

          </div>

          <SocialLinks />
        </motion.div>

        {/* RIGHT: PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center w-full md:w-1/2 mt-8 md:mt-0"
        >
          <img
            src="/planet/card1.png"
            alt="Ganesh"
            className="w-40 sm:w-56 md:w-72 lg:w-80 rounded-full object-cover 
              shadow-xl shadow-black/50"
          />
        </motion.div>

      </div>
    </section>
  );
}
