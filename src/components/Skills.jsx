import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/javascript.png";
import reactLogo from "../assets/skills/reactjs.png";
import typescriptLogo from "../assets/skills/typescript.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import reduxLogo from "../assets/skills/redux.png";

import { SectionWrapper } from "../hoc";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const frontendSkills = [
    { name: "HTML", img: htmlLogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", img: cssLogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", img: jsLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", img: reactLogo, link: "https://reactjs.org/" },
    { name: "TypeScript", img: typescriptLogo, link: "https://www.typescriptlang.org/" },
    { name: "Tailwind CSS", img: tailwindLogo, link: "https://tailwindcss.com/" },
    { name: "Redux", img: reduxLogo, link: "https://redux.js.org/" },
  ];

  const backendSkills = [
    { name: "Node.js", img: jsLogo, link: "https://nodejs.org/" },
    { name: "Express.js", img: jsLogo, link: "https://expressjs.com/" },
    { name: "Python", img: jsLogo, link: "https://www.python.org/" },
  ];

  const toolsSkills = [
    { name: "Git", img: jsLogo, link: "https://git-scm.com/" },
    { name: "Docker", img: jsLogo, link: "https://www.docker.com/" },
    { name: "Figma", img: jsLogo, link: "https://www.figma.com/" },
    { name: "VS Code", img: jsLogo, link: "https://code.visualstudio.com/" },
  ];

  const categories = { frontend: frontendSkills, backend: backendSkills, tools: toolsSkills };

  return (
    <section className="relative w-full min-h-screen px-6 md:px-12 py-20 flex flex-col justify-center items-center">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="text-[#FCA311] uppercase tracking-widest font-semibold text-sm md:text-base">
          Skills Showcase
        </p>

        <h2 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight text-[#FFFFFF]">
          Explore <span className="text-[#FCA311]">My Skills</span>
        </h2>

    <div className="relative mt-3 h-1 w-28 bg-[#FCA311] rounded-full mx-auto shadow-lg overflow-visible">

  {/* ⭐ Random Twinkling Stars */}
  <div className="absolute -top-4 -left-6 w-4 h-4 star-shape star-gold animate-star-blink"></div>

  <div className="absolute -top-6 left-1/4 w-3 h-3 star-shape star-blue animate-star-blink-fast"></div>

  <div className="absolute -top-5 left-1/2 w-5 h-5 star-shape star-white animate-star-blink"></div>

  <div className="absolute -top-7 right-1/3 w-3 h-3 star-shape star-purple animate-star-blink-slow"></div>

  <div className="absolute -top-4 -right-6 w-4 h-4 star-shape star-pink animate-star-blink-fast"></div>

  <div className="absolute -top-8 right-2 w-3 h-3 star-shape star-gold animate-star-blink"></div>

</div>



      </motion.div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-10 mb-16 flex-wrap relative">
        {Object.keys(categories).map((cat) => (
          <div key={cat} className="relative">
            <button
              onClick={() => setActiveCategory(cat)}
              className={`text-lg md:text-xl font-semibold transition-all ${
                activeCategory === cat
                  ? "text-[#FFFFFF] scale-110"
                  : "text-[#E5E5E5] hover:text-[#FFFFFF]"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>

            {activeCategory === cat && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 h-1 w-full bg-[#FCA311] rounded"
              />
            )}
          </div>
        ))}
      </div>

      {/* Skills Grid (ONLY THIS HAS BACKGROUND) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 justify-items-center
          bg-[#0F1A30] p-10 rounded-3xl shadow-xl border border-[#FCA311]/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7 }}
        >
          {categories[activeCategory].map((skill) => (
            <motion.a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center justify-center w-full p-6 rounded-3xl
                bg-[#FFFFFF] shadow-lg border border-[#E5E5E5]
                hover:shadow-[0_0_20px_#FCA311] hover:scale-110 transition"
              whileHover={{ y: -12 }}
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4 rounded-full bg-[#F0F0F0] shadow-inner">
                <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain" />
              </div>

              <span className="text-[#14213D] font-bold text-center text-lg">{skill.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
};

export default SectionWrapper(Skills, "skills");
