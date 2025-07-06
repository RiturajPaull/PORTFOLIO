import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" max-w-2xl mx-auto my-8 relative">
      <div className=" w-full flex items-start justify-around text-white bg-black/90 -z-1 px-2 py-2 rounded-full mb-30 ">
        <img
          src={assets.brandLogo}
          onClick={() => navigate("/")}
          className="w-20 cursor-pointer"
        />
        <a href="#home" className="cursor-pointer hover:scale-105">
          Home
        </a>
        <a
          href="#project"
          className="cursor-pointer hover:scale-105 hidden sm:block"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="cursor-pointer hover:scale-105 hidden sm:block"
        >
          Experience
        </a>
        <div className="border-l pl-5 flex items-center justify-between gap-5">
          <div className="relative group">
            <a
              href="https://github.com/RiturajPaull"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-6 h-6" />
            </a>
            <div className="absolute  group-hover:block hidden top-14 -z-10 bg-black/80 text-white px-1 py-2 rounded">
              <p>Github</p>
            </div>
          </div>
          <div className="relative group">
            <a href="Updated_Resume.pdf" download>
              {" "}
              <IoNewspaperOutline className="cursor-pointer w-6 h-6 hover:scale-105 transition-all duration-200" />
            </a>
            <div className="absolute hidden group-hover:block top-14 z-10 bg-black/80 px-1 py-3 rounded">
              <p>Resume</p>
            </div>
          </div>
          <a href="#contact" className="flex gap-5 items-center">
            <button
              href="#contact"
              className="text-lg px-4 py-2 bg-white text-black rounded hover:scale-105 transition-all"
            >
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
