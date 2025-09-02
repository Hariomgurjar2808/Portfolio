// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import vena from "./assets/company_logo/vena.png";

// Education Section Logo's
import HCM from "./assets/education_logo/Hcm.jpg";
import GovtCLg from "./assets/education_logo/GovtClg.jpeg";
import SAM from "./assets/education_logo/SAM.jpeg";

// Project Section Logo's Dumi Data
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: vena,
    role: "Software Developer Intern",
    company: "Vena Solutions",
    date: "April 2025 - August 2025",
    desc: "I completed my internship at Vena Solutions, where I worked on Spring Boot and Java projects that strengthened my backend development skills. After the internship, I joined the Gen AI team, where I gained hands-on experience. I also worked on automation projects using Microsoft Copilot Studio and Power Apps. This journey not only enhanced my technical expertise but also allowed me to explore the practical applications of AI-driven automation in real-world business processes.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MySQL",
      "Spring Boot",
    ],
  },
  {
    id: 1,
    img: vena,
    role: "Service Desk Analyst",
    company: "Vena Solutions",
    date: "August 2025 - Present",
    desc: "I am currently working as a Service Desk Analyst at Vena Solutions, where I provide technical support, resolve IT-related issues, and assist end-users to ensure seamless business operations. This role has helped me strengthen my troubleshooting abilities, improve my communication skills, and gain deeper exposure to enterprise IT systems and service management practices.",
    skills: ["OKta", "M-365", "Microsoft Intune", "Azure"],
  },
];

export const education = [
  {
    id: 0,
    img: HCM,
    school: "The Hukumchand Memorial H.S. School, Sirali",
    date: "2018",
    grade: "90.20%",
    desc: "I completed my Class 10 education at The Hukumchand Memorial H.S. School, Sirali, under the Madhya Pradesh Board of Secondary Education.",
    degree: "10th",
  },
  {
    id: 1,
    img: HCM,
    school: "The Hukumchand Memorial H.S. School, Sirali",
    date: "2020",
    grade: "73.2%",
    desc: "I completed my Class 12 education at The Hukumchand Memorial H.S. School, Sirali, under the Madhya Pradesh Board of Secondary Education.",
    degree: "12th with PCM",
  },
  {
    id: 2,
    img: GovtCLg,
    school: "Government Arts and Commerce College, Harda",
    date: "2023",
    grade: "69%",
    desc: "I earned my Bachelor’s degree in Computer Science (B.Sc.) from Government Arts and Commerce College, Harda. During my studies, I explored a wide range of subjects that strengthened my foundation in computing and technology, while also gaining practical exposure to software development.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 3,
    img: SAM,
    school: "SAM Global University, Bhopal",
    date: "2025",
    grade: "8.5 CGPA",
    desc: "I completed my Master’s in Computer Applications (MCA) from SAM Global University, Bhopal. The program provided me with a strong foundation in programming, software development, and core computer science principles. My coursework included subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
    degree: "Master of Computer Applications - MCA",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "",
    webapp: "",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "",
    webapp: "",
  },
];
