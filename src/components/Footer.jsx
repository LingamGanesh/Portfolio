import React from "react";
import { motion } from "framer-motion";
import { github, linkedin, twitter, instagram } from "../assets";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0f2027] text-white py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[50%] h-[50%] -top-32 -left-32 bg-purple-600/20 rounded-full blur-3xl animate-[pulse_12s_infinite]"></div>
        <div className="absolute w-[40%] h-[40%] -bottom-24 -right-28 bg-indigo-500/20 rounded-full blur-3xl animate-[pulse_15s_infinite]"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Ganesh <span className="text-purple-400">Lingam</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-1">
            MERN Stack Developer | Crafting modern web experiences
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-5"
        >
          {[github, linkedin, twitter, instagram].map((icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                         bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-110 
                         transition-all duration-300 shadow-lg"
            >
              <img src={icon} alt="social" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="border-t border-gray-700 mt-8 mx-6 md:mx-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-gray-400 text-sm mt-4"
      >
        &copy; {new Date().getFullYear()} Ganesh Lingam. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
