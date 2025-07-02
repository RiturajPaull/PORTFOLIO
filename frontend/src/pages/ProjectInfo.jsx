import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, project_info } from "../assets/assets";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
const ProjectInfo = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const fetchProjectInfo = async () => {
    const info = project_info.find((item) => item.id === id);
    setProjectData(info);
  };
  console.log(projectData);
  useEffect(() => {
    fetchProjectInfo();
  }, []);
  return projectData ? (
    <div className="mx-5 max-w-5xl sm:mx-auto px-2 py-5 ">
      <Navbar />
      <div className="flex flex-col px-3 py-5">
        <h1 className="text-5xl font-semibold mb-3">{projectData.title}</h1>
        <p className="text-xl text-gray-500 mb-6">{projectData.subTitle}</p>
        <div className="border shadow-md px-5 py-5 flex flex-col gap-5 border-gray-300 rounded-2xl bg-gray-100">
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-lg text-gray-600 border-b border-gray-300 pb-8">
            {projectData.description}
          </p>
          <h1 className="text-xl font-semibold mb-4">Technologies</h1>
          <div className="flex flex-wrap gap-5 items-center justify-between">
            {projectData.technologies.map((tech, index) => (
              <div
                key={index}
                className=" bg-green-200 text-green-700 py-2 px-5 rounded-lg hover:scale-106 transition-all cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex item-center justify-start gap-8 px-3 mt-5 h-30 mb-20">
        <a
          href=""
          className="flex items-center justify-center gap-3 border my-auto px-3 py-4 bg-black text-white rounded-xl cursor-pointer hover:scale-102"
        >
          <p>View Project</p>
          <FaExternalLinkAlt />
        </a>
        <a
          href={`${projectData.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 border my-auto px-3 py-4 bg-black text-white rounded-xl cursor-pointer hover:scale-102"
        >
          <p>Github</p>
          <FaGithub />
        </a>
      </div>
      <div className="border px-3 py-3 border-gray-300 rounded-xl">
        <img src={assets.screen} />
      </div>
      <Footer />
    </div>
  ) : (
    <div>Loading......</div>
  );
};

export default ProjectInfo;
