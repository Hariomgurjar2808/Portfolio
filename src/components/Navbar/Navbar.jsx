import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSetion, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll and navbar background change on scroll

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const handleMenuIteamClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full transition duration-300 z-50 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center ">
        {/* logo add */}
        <div className="text-lg font-semibold cursor-pointer">
          <span>Hariom</span>
          <span>Gurjar</span>
        </div>

        {/* Menu items */}

        <ul className="hidden md:flex space-x-8 text-grey-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSetion === item.id ? "text-[#8245ec]" : ""
              }`}
              onClick={() => handleMenuIteamClick(item.id)}
            >
              <button onClick={() => handleMenuIteamClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social icons */}

        <div className="hidden md:flex space-x-4 ">
          <a
            href="https://github.com/Hariomgurjar2808"
            target="_blank"
            rel="noopeener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/hariom-gurjar-7a8b5a361/"
            target="_blank"
            rel="noopeener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={25} />
          </a>
        </div>

        {/* Mobile Menu Icon  */}

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile menu Items  */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop:filter backdrop-blur-lg  rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white 
    ${activeSetion === item.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuIteamClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://github.com/Hariomgurjar2808"
                target="_blank"
                rel="noopeener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/hariom-gurjar-7a8b5a361/"
                target="_blank"
                rel="noopeener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
