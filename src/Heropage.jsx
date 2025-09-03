import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Project";
import Skills from "./components/Skills/Skill";
import Home from "./components/Home/Home";

export default function Heropage() {
  return (
    <div className="bg-[#050414]">
      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
           linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:14px_20px] 
        [mask-image:linear-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      >
        {/* Background grid gradient */}
      </div>

      <div className="relative pt-20">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        {/* <Footer />  */}
      </div>
    </div>
  );
}
