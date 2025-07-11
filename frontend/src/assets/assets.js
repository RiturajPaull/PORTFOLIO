import brandLogo from "./brandLogo.png";
import email_icon from "./email_icon.png";
import facebook_icon from "./facebook_icon.svg";
import googleplus_icon from "./googleplus_icon.svg";
import gradientBackground from "./gradientBackground.png";
import logo from "./mylogo.png";
import nodejs from "./node-js-logo.png";
import reactjs from "./react.jpg";
import mongo from "./mongodb-logo.png";
import express from "./express-logo.png";
import project1 from "./Project1.png";
import project2 from "./Project2.png";
import screen from "./screen.png";
import blog from "./blog_image.png";
export const assets = {
  brandLogo,
  email_icon,
  facebook_icon,
  googleplus_icon,
  gradientBackground,
  logo,
  nodejs,
  reactjs,
  mongo,
  express,
  project1,
  screen,
  blog,
};

export const project_data = [
  {
    id: "12121212",
    image: project1,
    inProgress: false,
    title: "Text to Image Using AI",
    description:
      "This is a project that converts text into images using AI.The name of the AI is ClipDrop AI",
  },
  {
    id: "13131313",
    image: project2,
    inProgress: false,
    title: "AI powered Blogging Platform",
    description:
      " This is a project that uses Gemini AI and ImageKit API to create a blogging platform",
  },
];

export const project_info = [
  {
    id: "12121212",
    title: "Text to Image Using AI",
    subTitle:
      "Real-world use case, responsive UI, auth + protected routes, elegant dashboard",
    description:
      "I created a Full Stack Saas Application Using Mongodb,Express, React and Nodejs. Here user can convert text into images using AI. I have make a credit system to generate the image and user can purchase more credits using online payment gateway that I have intregated in this app. In This Full Stack AI project I have created user authentication using Mongo, Express, React and Node so that the user can create an account and login to an existing account. User account details will be stored in the mongodb databse. The images are generated usig clipdrop API.",
    technologies: [
      "React",
      "Tailwind CSS 4",
      "Nodejs",
      "MongoDB",
      "Express",
      "ClipDrop AI",
    ],
    link: "https://github.com/RiturajPaull/imagify_practice",
    vercel_link: "https://imagify-practice-ze9j.vercel.app",
    project_image: screen,
  },
  {
    id: "13131313",
    title: "Blogging application usin AI",
    subTitle:
      "Real-world use case, responsive UI, auth + protected routes, elegant dashboard",
    description:
      "I created a Full Stack Blog Application Using Mongodb,Express, React and Nodejs. Here user can write blogs, add comments and approve comments in the Admin dashboard. I have also implemented geminiAI to generate the blog based on the title given by admin. Admin acn also view all the comments and many more",
    technologies: [
      "React",
      "Tailwind CSS 4",
      "Nodejs",
      "MongoDB",
      "Express",
      "GeminiAI",
      "ImageKit API",
    ],
    link: "https://github.com/RiturajPaull/Blog",
    vercel_link: "https://blog-opjk.vercel.app",
    project_image: blog,
  },
];
