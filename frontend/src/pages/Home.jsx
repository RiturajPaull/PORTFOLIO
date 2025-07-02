import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Project from "../component/Project";
import Touch from "../component/Touch";
import Footer from "../component/Footer";
import Experience from "../component/Experience";
const Home = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Experience />
      <Touch />
      <Footer />
    </div>
  );
};

export default Home;
