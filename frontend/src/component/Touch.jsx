import React, { useState } from "react";
import { API } from "../utils/axios";
import { SummaryAPI } from "../API/SummaryAPI";
import toast from "react-hot-toast";

const Touch = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await API({
        ...SummaryAPI.email,
        data: data,
      });
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  console.log(data);
  return (
    <div id="contact" className="mx-5 max-w-5xl sm:mx-auto px-3 py-5 mt-20">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-semibold mb-5">Get in touch</h1>
        <p className="text-xl text-gray-600 mb-4">
          Whether it's a freelance gig, a collaboration, or a full-time
          opportunity, or want to say hi? I'm always excited to connect with
          people who love building meaningful things. Drop a message, and I'll
          get back to you as soon as I can!
        </p>
        <form
          onSubmit={handleSubmit}
          className=" w-full flex flex-col px-5 py-3 gap-5"
        >
          <div className="flex-col sm:flex justify-center items-center space-y-5">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Name"
              className="text-lg border-gray-200 border outline-none w-full h-18 bg-gray-200 px-7 rounded-xl"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              className="text-lg border-gray-200 border outline-none w-full h-18 bg-gray-200 px-7 rounded-xl"
            />
          </div>

          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            placeholder="Message me to connect"
            className="text-lg border-gray-200 border outline-none w-full h-40 bg-gray-200 px-7 rounded-xl py-3"
          />
          {isLoading ? (
            <button className="bg-black text-white hover:bg-gray-900 border py-5 text-xl rounded-xl cursor-pointer">
              <div className="border-3 border-white animate-spin border-t-0 w-8 h-8 mx-auto rounded-full"></div>
            </button>
          ) : (
            <button className="bg-black text-white hover:bg-gray-900 border py-5 text-xl rounded-xl cursor-pointer">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Touch;
