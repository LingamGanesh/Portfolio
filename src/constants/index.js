import viakhaLogo from "../assets/viakhaLogo.jpg";
import edu from "../assets/edu.png";
import lumpy from "../assets/lumpy.jpg";
import NxtWaveLogo from "../assets/nxtWave.png";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  intelligence,
  sun,
  payment,
  intelligence2,
  rental
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JWT",
    icon: nodejs,
  },
    {
    name: "Expres",
    icon: nodejs,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git hub",
    icon: figma,
  },
  
];
const experiences = [
  {
    title: "B.Tech in Computer Science",
    company_name: "Visakha Institute of Engineering and Technology",
    icon: viakhaLogo ,
    iconBg: "#383E56",
    date: "2020 – 2024",
    points: [
      "Strong foundation in programming, algorithms, and web development",
    ],
  },
   {
    title: "Cybersecurity Virtual Internship",
    company_name: "EduSkills & Palo Alto",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "Sep – Nov 2022",
    points: ["Completed virtual internship on cybersecurity fundamentals"],
  },
  {
    title: "Lumpy Skin Disease Detection App",
    company_name: "B.Tech Final Year Project",
    icon: lumpy,
    iconBg: "#383E56",
    date: "2023 – 2024",
    points: [
      "Developed ML web app for early LSD detection in cattle",
      "Technologies: Python, TensorFlow, OpenCV, Flask, HTML, CSS, JS",
      "Handled data preprocessing, CNN model training, and UI integration",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "NxtWave",
    icon: NxtWaveLogo,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Completed MERN stack training and built scalable web apps",
      "Worked on multiple projects using React, Node.js, Express, and MongoDB",
    ],
  },
  {
    title: "Frontend Development Internship",
    company_name: "Edunet / NxtWave",
    icon: NxtWaveLogo,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Completed Frontend Development training",
      "Gained hands-on experience with React.js, JavaScript, HTML, CSS",
      "Built multiple responsive web applications during the course",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jaser proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jaser does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jaser optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
 
  {
    name: "Todo Application",
    description:
      "Built backend API for managing todos with filtering by status, priority, category, and due date using Node.js, Express, and SQLite. Implemented CRUD operations and robust error handling.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
      { name: "sqlite", color: "green-text-gradient" },
    ],
    image: intelligence2,
    source_code_link: "",
  },
 
  {
      name: "Recipe Book Web App",
    description:
      "Developed a recipe book web app displaying recipes with images and ingredients. Implemented DOM manipulation and responsive UI development.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    image: rental,
    source_code_link: "",
  }
  ,
  {
      name: "Search Results Clone",
    description:
      "Created a Google-style search results interface for practice in UI layout and DOM logic. Handled dynamic display and interactive UI features.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    image: rental,
    source_code_link: "",
  }
  ,
  {
     name: "Nxt Trendz - Product Details",
    description:
      "Built a product details web app applying frontend concepts learned in NxtWave. Implemented responsive interface and dynamic display logic using React.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: rental,
    source_code_link: "",
  },
  ,
  {
     name: "Jobby App",
    description:
      "Developed a job listing web app with login, home, jobs, and job details pages. Implemented dynamic UI using React and handled API requests/responses for job data.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: rental,
    source_code_link: "",
  },
  ,
  {
      name: "Meetup App",
    description:
      "Developed a Meetup web app focusing on React Context for state management. Implemented routes for home, register, and not found pages with dynamic content rendering.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: rental,
    source_code_link: "",
  },
  ,
  {
     name: "Rock Paper Scissors",
    description:
      "Built a Rock Paper Scissors web app to practice interactive UI concepts learned in NxtWave. Implemented game logic and dynamic score tracking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: rental,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
