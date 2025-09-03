import React from "react";
import Tilt from "react-parallax-tilt";
import portfolio from "../../assets/portfolio.png";
import { LuSend } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";


export default function Home() {
  return (
    <section
      id="home"
      className="py-4 px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-4 lg:mt-28"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Hii, I'm
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight">
            Hariom Gurjar
          </h2>

          {/* Skill with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight mt-5">
            <span className="text-white mr-4">I am a</span>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "UI/UX Designer",
                2000,
                "JavaScript Developer",
                2000,
                "React Developer",
                2000,
                "Java Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={30}
              repeat={Infinity}
              cursor={true}
              style={{ color: "#8245ec" }}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a Full Stack Developer skilled in building responsive and
            scalable web apps using React, Tailwind CSS, Node.js, Express, and
            MongoDB. I handle both front-end and back-end development, from
            UI/UX design to API and database management.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#Contact"
              className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full text-lg font-bold transition duration-300 hover:scale-105 bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-[0_0_2px_#8245ec,0_0_10px_#8245ec,0_0_20px_#8245ec]"
            >
              Hire me
              <LuSend className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full shadow-[0_0_2px_#8245ec,0_0_10px_#8245ec,0_0_20px_#8245ec]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
          >
            <img
              src={portfolio}
              alt="Portfolio"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
