import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// ⭐ CARD COMPONENT
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="
      p-[2px] rounded-3xl 
      bg-gradient-to-br from-[#7C3AED50] via-[#EC489950] to-[#3B82F650]
      shadow-[0_0_30px_rgba(236,72,153,0.3)]
    "
  >
    <div
      className="
        bg-[#0B0B0F]/70 backdrop-blur-xl
        p-8 rounded-3xl
        border border-white/10
      "
    >
      <p className="text-white text-[42px] font-black opacity-60">"</p>

      <p className="text-gray-200 tracking-wide text-[18px] leading-relaxed">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-3">
        <div className="flex flex-col">
          <p className="text-white font-semibold text-[17px]">
            <span
              className="
                bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
                bg-clip-text text-transparent
              "
            >
              @
            </span>{" "}
            {name}
          </p>
          <p className="text-gray-400 text-[13px]">
            {designation} • {company}
          </p>
        </div>

        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-white/20"
        />
      </div>
    </div>
  </motion.div>
);

// ⭐ MAIN COMPONENT (MATCHED WITH HERO)
const Feedbacks = () => {
  return (
    <section className="relative w-full py-28 overflow-hidden">

      {/* ⭐ MATCHING HERO BACKGROUND */}
      <div className="absolute inset-0">

        {/* Purple Glow */}
        <div className="absolute w-[800px] h-[800px] bg-[#7C3AED30]
          rounded-full blur-[180px] -top-10 -left-10" />

        {/* Pink Glow */}
        <div className="absolute w-[800px] h-[800px] bg-[#EC489930]
          rounded-full blur-[180px] bottom-0 right-0" />

        {/* Blue Ambient Glow */}
        <div className="absolute w-[900px] h-[900px] bg-[#38BDF840]
          rounded-full blur-[200px] top-1/2 left-1/3" />

        {/* Light Beam */}
        <div className="absolute inset-0 
          bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)]
          opacity-50" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            background:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzIwJyBoZWlnaHQ9JzIwJyBmaWxsPScjMDAwJy8+PHJlY3Qgd2lkdGg9JzEnIGhlaWdodD0nMScgeD0nNScgeT0nNScgZmlsbD0nI2ZmZicvPjwvc3ZnPg==' ) repeat",
          }}
        />
      </div>

      {/* ⭐ HEADING */}
      <motion.div
        variants={textVariant()}
        className="relative z-10 mb-20 text-center"
      >
        <p className={`${styles.sectionSubText} text-gray-300`}>
          What others say
        </p>

        <h2
          className={`
            ${styles.sectionHeadText}
            bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#38BDF8]
            bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]
          `}
        >
          Testimonials
        </h2>
      </motion.div>

      {/* ⭐ CARDS GRID */}
      <div
        className="
          relative z-10 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-12 px-6 md:px-16
        "
      >
        {testimonials.map((t, index) => (
          <FeedbackCard key={t.name} index={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
