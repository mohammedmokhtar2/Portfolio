

// src/data/index.js
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaDatabase, 
  FaRobot, 
  FaBrain, 
  FaChartBar, // Safe replacement for PowerBI
  FaMicrochip, // Safe replacement for Arduino/IoT
  FaServer,    // Safe replacement for SQL/Server
  FaCamera     // Safe replacement for OpenCV
} from 'react-icons/fa';

// --- Hero Section ---
export const heroData = {
  name: "Mohammed Mokhtar",
  role: "AI & ML Engineer | NLP Specialist",
  subheading: "Aspiring AI and IoT engineer with a strong foundation in intelligent systems, applying Machine Learning and Deep Learning to real-world automation.",
  location: "Cairo, Egypt",
  email: "muhammedmukhtar822@gmail.com",
  socialLinks: {
    github: "https://github.com/mohammedmokhtar2",
    linkedin: "https://www.linkedin.com/in/mohammedmokhtar2",
    email: "mailto:muhammedmukhtar822@gmail.com"
  }
};

// --- Skills (Using only Safe Icons) ---
export const skillsData = [
  { 
    category: "Programming", 
    skills: [
      { name: "Python", icon: FaPython },
      { name: "C/C++", icon: FaMicrochip },
      { name: "Java", icon: FaHtml5 }, // Placeholder
      { name: "SQL", icon: FaDatabase },
      { name: "JavaScript", icon: FaJs }
    ] 
  },
  { 
    category: "AI & Data Tools", 
    skills: [
      { name: "TensorFlow", icon: FaBrain },
      { name: "PyTorch", icon: FaBrain },
      { name: "OpenCV", icon: FaCamera },
      { name: "Azure", icon: FaServer }, 
      { name: "Power BI", icon: FaChartBar }, 
      { name: "LangChain", icon: FaRobot },
      { name: "N8N", icon: FaRobot }
    ] 
  }
];

// --- Experience ---
export const experienceData = [
  {
    role: "AI Intern",
    company: "Qayedny",
    duration: "Internship",
    description: "Built automations with LangGraph, N8N, and APIs. Created a CV parser to extract skills and autofill forms.",
    tags: ["LangGraph", "N8N", "Chatbots"]
  },
  {
    role: "Data Engineer Intern",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    duration: "Internship",
    description: "Trained on SQL, SSIS, Azure, and MLOps. Built real-world data pipelines and analytics practices.",
    tags: ["Azure", "SQL", "MLOps"]
  },
  {
    role: "NLP Intern",
    company: "National Telecommunication Institute (NTI)",
    duration: "Internship",
    description: "Performed NLP training using ML, DL, and LLMs. Capstone project involving syntax analysis and conversational AI.",
    tags: ["NLP", "LLMs", "Transformers"]
  },
  {
    role: "Computer Vision Intern",
    company: "National Telecommunication Institute (NTI)",
    duration: "Internship",
    description: "Hands-on experience with classification, detection, and face recognition using ResNet and EfficientNet.",
    tags: ["Computer Vision", "PyTorch"]
  },
  {
    role: "IoT Intern",
    company: "Information Technology Institute (ITI)",
    duration: "Internship",
    description: "Developed a Smart Parking System using MQTT and proximity sensors.",
    tags: ["IoT", "MQTT", "Embedded"]
  }
];

// --- Projects ---
export const projectsData = [
  {
    title: "Security & Attendance System",
    description: "Real-time face recognition & logging using YOLOv11.",
    image: "/images/security.png", 
    tags: ["YOLOv11", "Deep Learning"],
    github: "https://github.com/Mukhtar82"
  },
  {
    title: "Startup Matching Chatbot",
    description: "Intelligent chatbot matching interns with startups using Airtable and LangGraph.",
    image: "/images/chatbot.png",
    tags: ["LangGraph", "N8N", "NLP"],
    github: "https://github.com/Mukhtar82"
  },
  {
    title: "Autonomous Object Robot",
    description: "Dual-camera robot for object detection using YOLOv8 and OpenCV.",
    image: "/images/robot.png",
    tags: ["Robotics", "YOLOv8", "OpenCV"],
    github: "https://github.com/Mukhtar82"
  },
  {
    title: "AI CV Parser",
    description: "Automated tool that extracts skills from CVs and auto-fills application forms.",
    image: "/images/parser.png",
    tags: ["Python", "Automation"],
    github: "https://github.com/Mukhtar82"
  }
];

// --- Volunteering ---
export const volunteeringData = [
  {
    role: "Vice Head, Problem-Solving Committee",
    organization: "Pixels Egypt",
    description: "Trained volunteers in algorithms and data structures."
  },
  {
    role: "Deputy Organizer",
    organization: "Resala Charity Organization",
    description: "Led medical camp logistics to serve thousands."
  }
];