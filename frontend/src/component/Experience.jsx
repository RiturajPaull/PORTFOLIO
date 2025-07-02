import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ delay: 5, once: true }}
      id="experience"
      className=" mt-30 px-5 border-t border-gray-300 py-10 flex flex-col gap-5"
    >
      <p className="text-4xl font-semibold">Experience</p>
      <p className=" text-gray-500 mt-2">Jan 2025 - June 2025</p>
      <div className="border border-gray-300 rounded-4xl flex flex-col items-center py-3 px-5 gap-2  mt-10 sm:h-[350px]">
        <p className="text-2xl text-gray-500">Full Stack Developer Intern</p>
        <p className="text-lg text-gray-500">Aerodos Technologies</p>
        <div className="text-start text-xl px-3 mt-10 text-blue-600">
          <p>
            Developed a{" "}
            <span className="text-blue-800 font-semibold">
              responsive web application
            </span>{" "}
            using Reactjs and TailwindCSS imporving user experience engaging by
            15%. Also implemented{" "}
            <span className="text-blue-800 font-semibold">RESTful API</span>{" "}
            using Nodejs and Express, ensuring seamless data flow between the
            frontend and the backend. Optimized database quaries in MongoDB
            reducing query responsiveness time by 20%. Participaed in Code
            reviews and followed Agile methodologies, improving code quality and
            development efficiency.
          </p>
        </div>
      </div>
      <button className=" max-w-[170px] px-4 py-2 flex items-center mt-5 justify-between rounded bg-gray-200 hover:scale-105 transition-all duration-400 cursor-pointer">
        <a
          href="https://drive.google.com/file/d/1d-Vvfw9jdh0u8T667ow5HXon2nlVgjKp/view?usp=sharing"
          target="__blank"
          rel="noopener noreferrer"
          className=""
        >
          View Certificate
        </a>
        <FaArrowRight />
      </button>
    </motion.div>
  );
};

export default Experience;
