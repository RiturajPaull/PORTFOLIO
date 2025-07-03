import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="home"
      className=" border-gray-400 mx-5 max-w-5xl sm:mx-auto mb-20 rounded-lg scroll:smooth"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col justify-center items-center gap-8 py-4"
      >
        <img src={assets.logo} className="w-40 rounded-full" />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl"
        >
          Hi, I'm Rituraj Paul.
          <br />
          Software Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl sm:text-2xl text-gray-700 text-center mb-2 max-w-2xl"
        >
          Relentless self-taught developer, passionate about crafting{" "}
          <span className="text-black font-semibold text-3xl">MERN</span>{" "}
          solutions, and driven to grow in tech.
        </motion.p>
        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className="text-lg border px-4 py-1 rounded-lg bg-black text-white hover:scale-105 hover:bg-black/80"
          >
            Hire Me!
          </a>
          <p className="text-lg border px-4 py-1 rounded-full border-green-300 bg-green-100 text-green-600">
            <span className="mr-2">•</span>Available for Collaborations
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className=" mt-5 grid grid-cols-4 sm:grid-cols-4 justify-items-center sm:justify-evenly"
        >
          <img src={assets.nodejs} className="w-35 pt-4" />
          <img src={assets.reactjs} className="w-18 pt-9" />
          <img src={assets.mongo} className="w-25 " />
          <img src={assets.express} className="w-25 pt-2" />
        </motion.div>
      </motion.div>
      <div className="absolute -top-0 -z-1 opacity-50">
        <img src={assets.gradientBackground} />
      </div>
    </motion.div>
  );
};

export default Header;
