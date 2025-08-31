import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import portfolio from "../../assets/portfolio.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7wvw] lg:px-[15vw] font-sans mt-16 md:mt-4 lg:mt-28"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md-w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Hii, I'm
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight">
            Hariom Gurjar
          </h2>

          {/* Skill with typing effect  */}

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
              style={{ color: "#8245ec"}}
            />
          </h3>
          <p className="text-base sm:text-lg md:text:lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Hi, I’m a passionate Full Stack Developer specializing in the MERN
            Stack. I love building modern, scalable, and user-friendly web
            applications that combine clean design with powerful functionality.
            💻 With expertise in JavaScript, React, Node.js, and MongoDB, I
            bring ideas to life by developing seamless frontends and efficient
            backends. 🎨 As a UI/UX enthusiast, I focus on creating intuitive
            interfaces and engaging user experiences. ☕ I also have strong
            experience in Java development, giving me a solid foundation in
            building robust applications. I’m always eager to learn new
            technologies, solve challenging problems, and contribute to
            impactful projects.
          </p>
          <a
            href="https://drive.google.com/file/d/1Ykq6cV1EvHCt89Lcec2Ufwk6bh6PqC5z/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-full mt-5 text-lg font-bold transition duration-300 hover:scale-105 bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-[0_0_2px_#8245ec,0_0_10px_#8245ec,0_0_20px_#8245ec]"
          >
            Download Resume
          </a>
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
              alt="Hariom Gurjar"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0..5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
