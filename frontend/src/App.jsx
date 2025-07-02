import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import Home from "./pages/Home";
import ProjectInfo from "./pages/ProjectInfo";
const App = () => {
  return (
    <div className="border-r border-l border-gray-300 max-w-5xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
      </Routes>
    </div>
  );
};

export default App;
