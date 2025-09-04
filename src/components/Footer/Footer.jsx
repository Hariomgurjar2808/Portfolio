import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Footer() {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (sectionId === "home") {
        // Get the navbar height and extra space (pt-24 = 6rem = 96px)
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const extraSpace = 96; // pt-24 in Tailwind
        const offset = navbarHeight + extraSpace;
        const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Hariom Gurjar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hariom-gurjar-7a8b5a361/" },
            { icon: <FaInstagram />, link: "#" },


          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Hariom Gurjar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}