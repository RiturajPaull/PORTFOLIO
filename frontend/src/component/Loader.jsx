import React from "react";

const Loader = () => {
  return (
    <div className="w-full border h-screen flex items-center justify-center bg-white">
      <div className="border-3 w-20 h-20 rounded-full border-gray-500 border-t-0 animate-spin"></div>
    </div>
  );
};

export default Loader;
