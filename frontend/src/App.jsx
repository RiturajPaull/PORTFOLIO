import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import Home from "./pages/Home";
import ProjectInfo from "./pages/ProjectInfo";
const App = () => {
  return (
    <div className="border-r border-l border-gray-300 max-w-5xl mx-auto scroll-smooth">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
