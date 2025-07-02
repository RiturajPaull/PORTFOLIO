import React from "react";
import { assets } from "../assets/assets";
import { FaLinkedin } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="mx-5 max-w-5xl sm:mx-auto px-3 py-5 mt-20 border-t border-gray-300">
      <p className="text-center text-2xl font-semibold text-gray-600 mb-2">
        Portfolio by Rituraj.Dev Copyright ©{" "}
      </p>
      <div className="flex item-center justify-center gap-5 py-5">
        <a
          href="https://www.linkedin.com/in/riturajpaull"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-10 w-10 hover:scale-110 transition-all duration-300 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/riitzzz_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiInstagram className="h-10 w-10 hover:scale-110 transition-all duration-300 cursor-pointer" />
        </a>
        <a
          href="https://github.com/RiturajPaull"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-10 w-10 hover:scale-110 transition-all duration-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
