import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => ({
  initial: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

const textVariant = () => ({
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.9 },
  },
});

// ⭐ Project Card
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div {...fadeIn("up", "spring", index * 0.25, 0.8)}>
      <Tilt
        className="relative bg-[#0f0f17]/50 border border-white/10 
        backdrop-blur-xl rounded-2xl p-4 w-full sm:w-[330px] 
        shadow-[0_0_25px_rgba(120,80,255,0.25)] hover:shadow-[0_0_40px_rgba(180,70,255,0.35)] 
        transition-all duration-500"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1200}
        scale={1.05}
      >
        {/* IMAGE */}
        <div className="relative w-full h-56 rounded-xl overflow-hidden bg-white/10 shadow-inner">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-3 right-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex justify-center items-center cursor-pointer hover:scale-110 transition"
            >
              <img src={github} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <h3 className="mt-4 text-white font-bold text-xl">{name}</h3>
        <p className="text-gray-300 text-sm mt-1 leading-relaxed">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Neon Hover Overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-30 
        bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 
        transition duration-500 pointer-events-none" />
      </Tilt>
    </motion.div>
  );
};

// ⭐ WORKS SECTION
const Works = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">

      {/* ⭐ Section Title */}
      <motion.div {...textVariant()} className="text-center max-w-3xl mx-auto">
        <p className="text-indigo-400 uppercase tracking-[4px] font-semibold text-sm md:text-base animate-pulse">
          Featured Work
        </p>

        <h2 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r 
          from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
            Projects
          </span>
        </h2>

        <div className="mt-3 h-1 w-32 bg-gradient-to-r 
        from-indigo-400 via-purple-500 to-pink-500 rounded-full mx-auto shadow-lg" />
      </motion.div>

      {/* Description */}
      <motion.p
        {...fadeIn("", "", 0.2, 1)}
        className="mt-8 text-gray-300 text-center max-w-2xl mx-auto text-lg leading-relaxed"
      >
        A showcase of the applications I've built — integrating modern UI, clean architecture, 
        and full MERN-stack functionality.
      </motion.p>

      {/* ⭐ Project Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {projects.map((project, i) => (
          <ProjectCard key={i} index={i} {...project} />
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(Works, "projects");
