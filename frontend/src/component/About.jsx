import React from "react";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="border-gray-400 mx-5 max-w-5xl sm:mx-auto mb-10  rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 text-gray-700 px-10 py-5"
      >
        <h1 className="text-4xl text-black font-semibold mb-8">About</h1>
        <p className="text-xl">
          I'm Rituraj Paul, a passionate 23-year-old software engineer with a
          hands on experience and strong drive for building impactfull web
          experiences.
        </p>
        <p className="text-xl">
          My technological expertise covers full-stack development including
          frontend programming utilizing React.js and backend technologies like
          Node.js, Express.js, and MongoDB. With the use of these abilities, I
          can create apps that are user-friendly, dynamic, responsive, and
          provide excellent user experiences.
        </p>
        <p className="text-xl">
          I have a constant desire to learn and develop, and I strive to broaden
          my knowledge base and acquire new skills in order to improve my skill
          set. Together with like-minded experts, I appreciate contributing to
          creative initiatives in collaborative situations.
        </p>
        <p className="text-xl">
          I'm constantly looking for possibilities to use my full-stack and Java
          programming abilities in order to better my career in the digital
          sector and produce useful solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
