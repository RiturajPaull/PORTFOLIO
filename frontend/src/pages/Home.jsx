import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Project from "../component/Project";
import Touch from "../component/Touch";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Touch />
      <Footer />
    </div>
  );
};

export default Home;
