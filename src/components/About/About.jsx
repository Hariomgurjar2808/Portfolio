import React from "react";
import { motion } from "framer-motion"; 

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-4 px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-4 lg:mt-28"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-white-300 via-purple-300 to-blue-300 bg-[length:400%_400%]" />

      {/* 🔵 Section Content */}
      <motion.div
        className="relative z-10 px-6 py-20 flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white">ABOUT</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-6xl mt-10">
          {/* Left Info Box */}
          <div className="p-6 rounded-2xl shadow-lg  text-gray-400 text-xl leading-7">
            <p className="text-[25px]">
              Hello! I'm{" "}
              <span className="font-semibold text-purple-600">
                Hariom Gurjar
              </span>
            </p>
            <p className="mt-4">
              I’m a passionate and detail-oriented{" "}
              <strong>Full Stack Developer</strong> who enjoys building
              responsive, scalable, and secure web applications. I specialize in
              user-friendly frontends with React and Tailwind CSS, and robust
              backends with Node.js, Express, and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex gap-6 mt-8">
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1Ykq6cV1EvHCt89Lcec2Ufwk6bh6PqC5z/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-8 py-3 rounded-full text-lg font-bold transition duration-300 hover:scale-105 bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-[0_0_2px_#8245ec,0_0_10px_#8245ec,0_0_20px_#8245ec]"
              >
                Download Resume
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-full text-lg font-bold text-white bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-[0_0_2px_#8245ec,0_0_10px_#8245ec,0_0_20px_#8245ec] transition-transform hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}