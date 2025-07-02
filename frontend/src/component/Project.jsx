import React from "react";
import { project_data } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
const Project = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="project"
      className="mx-5 max-w-5xl sm:mx-auto px-3 py-5"
    >
      <h1 className="text-4xl font-semibold mb-8">Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-2 gap-8">
        {project_data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-lg rounded-3xl flex flex-col items-start justify-center gap-5 p-5"
          >
            <img
              src={item.image}
              className="border border-gray-300 rounded-3xl"
            />
            <p className="text-3xl font-semibold px-2 mt-3 ">{item.title}</p>
            <p className="text-lg text-gray-600 px-2">{item.description}.</p>
            <button
              onClick={() => navigate(`/project/${item.id}`)}
              className="flex items-center gap-2 justify-center px-2 py-2 rounded bg-gray-200 hover:scale-105 transition-all duration-400 cursor-pointer"
            >
              <p>View Project</p>
              <FaArrowRight className="w-3" />
              <img />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
