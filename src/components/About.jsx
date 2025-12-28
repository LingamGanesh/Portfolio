import React from "react";
import { motion } from "framer-motion";
import AboutSlider from "./AboutSlider";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section className="relative w-full bg-[#000000] px-6 md:px-16 py-20 flex flex-col justify-center overflow-hidden">
      
      {/* ⭐ HEADER */}
      <motion.div
        variants={textVariant()}
        className="relative z-10 text-center mx-auto max-w-3xl"
      >
        <p className="text-[#FCA311] uppercase tracking-widest font-semibold text-sm md:text-base">
          Introduction
        </p>

        <h1 className="mt-2 text-5xl md:text-6xl font-extrabold text-[#FFFFFF] leading-tight">
          <span>Get to </span>
          <span className="text-[#FCA311] drop-shadow-lg">
            Know Me
          </span>
        </h1>

        <div className="mt-3 h-1 w-28 bg-[#FCA311] rounded-full mx-auto shadow-md" />
      </motion.div>

      {/* ⭐ DESCRIPTION */}
      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="relative z-10 mt-6 text-center text-[#E5E5E5] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
      >
        I'm <span className="text-[#FCA311] font-semibold">Ganesh Lingam</span>, 
        a MERN Stack Developer skilled in JavaScript and TypeScript. I build clean, modern, 
        scalable apps with <span className="text-white font-medium">React, Next.js, Node.js, and MongoDB</span>.  
        I focus on delivering smooth UI, clean design, and powerful digital experiences.
      </motion.p>

      {/* ⭐ SLIDER SECTION BACKGROUND */}
      <div className="relative z-10 mt-20 flex justify-center w-full max-w-6xl mx-auto bg-[#14213D] p-6 rounded-2xl shadow-xl">
        <AboutSlider fullScreen />
      </div>

    </section>
  );
};

export default SectionWrapper(About, "about");
