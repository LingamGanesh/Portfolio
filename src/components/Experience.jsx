import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// 🎨 Single experience card
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        boxShadow: "0px 10px 40px rgba(0,0,0,0.55)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(30,41,59,0.9)" }}
      date={<span className="text-indigo-300">{experience.date}</span>}
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
      icon={
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      }
    >
      <h3 className="text-white text-[22px] sm:text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-indigo-300 text-[16px] font-semibold">
        {experience.company_name}
      </p>

      <ul className="mt-4 list-disc ml-5 space-y-2 text-gray-300 text-[14px]">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// 🌟 Main Experience Section
const Experience = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 md:px-12 py-20 flex flex-col justify-center items-center">

      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center max-w-3xl mb-16 relative z-10">
        <p className="text-indigo-400 uppercase tracking-widest font-semibold text-sm animate-pulse">
          My Journey So Far
        </p>

        <h2 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight text-white">
          Work & Internship{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
            Experience
          </span>
        </h2>

        <div className="mt-3 h-1 w-28 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full mx-auto shadow-lg"></div>
      </motion.div>

      {/* Timeline */}
      <div className="mt-8 w-full max-w-5xl relative z-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
