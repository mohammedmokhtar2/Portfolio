

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
  fullName: "Mohammed Mokhtar Soliman Salama",
  role: "Intelligent Systems & AI Engineer",
  subheading: "Building intelligent software, GenAI applications, RAG architectures, automation systems, and connected IoT technologies.",
  domains: ["AI / GenAI", "Software Engineering", "IoT", "Automation"],
  location: "Cairo, Egypt",
  email: "muhammedmukhtar822@gmail.com",
  socialLinks: {
    github: "https://github.com/mohammedmokhtar2",
    linkedin: "https://www.linkedin.com/in/mohammedmokhtar2",
    huggingface: "https://huggingface.co/mohammedmokhtar2",
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
    role: "IT Engineer",
    company: "Helwan Tech Plus (Helwan National University)",
    duration: "Part-Time",
    description: "Optimized the student experience by providing 24/7 self-service access to critical information, eliminating the need for physical visits or phone calls.",
    tags: ["Docker,", "FastAPI", "Chatbots" , "ChromaDB" , "RAG"]
  },
  {
    role: "HCIP AI Engineer Intern",
    company: "Huawei Academy (portsaid university)",
    duration: "Internship",
    description: "pplied AI Domains: Acquired specialized skills in Computer Vision (Image Preprocessing, Feature Extraction), Speech Recognition (GMM-HMM, DNN), and NLP (Text Vectorization, Language Models).",
    tags: ["Speech Recognition", "NLP", "Full-Stack Strategy"]
  },
  {
    role: "AI Researcher Intern",
    company: "Qayedny",
    duration: "Internship",
    description: "Orchestrated an automated recruitment workflow using LangGraph, n8n, and Airtable, integrating a custom CV parser that extracts candidate skills and auto-fills application forms to eliminate manual data entry.",
    tags: ["LangGraph", "N8N", "Chatbots"]
  },
  {
    role: "Data Engineer Intern",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    duration: "Internship",
    description: "Architected scalable data pipelines using SSIS and Azure, ensuring data integrity and availability for warehousing and analytics.",
    tags: ["Azure", "SQL", "MLOps"]
  },
  {
    role: "NLP Engineer Intern",
    company: "National Telecommunication Institute (NTI)",
    duration: "Internship",
    description: "Optimized language models by applying advanced preprocessing techniques (TF-IDF, N-grams) and fine-tuning pre-trained models to improve context understanding and similarity detection.",
    tags: ["NLP", "LLMs", "Transformers"]
  },
  {
    role: "Computer Vision Engineer Intern",
    company: "National Telecommunication Institute (NTI)",
    duration: "Internship",
    description: "Enhanced model accuracy by leveraging Transfer Learning on state-of-the-art architectures like ResNet and EfficientNet for complex classification and segmentation tasks.",
    tags: ["Computer Vision", "TensorFlow", "PyTorch" , "Transfer Learning"]
  },
  {
    role: "IoT Engineer Intern",
    company: "Information Technology Institute (ITI)",
    duration: "Internship",
    description: "Developed a Smart Parking System using MQTT and proximity sensors.",
    tags: ["IoT", "MQTT", "Embedded"]
  }
];

// --- Projects ---
export const projectsData = [
  {
    title: "KKU-SSAS: Enterprise Dual-Mode IoT System",
    description: "Enterprise-grade autonomous hydroponic control system engineered for King Khalid University. Features closed-loop pH/EC dosing, mutual-exclusion safety interlocks, ATS power failover, and dual-mode execution (Standalone SoftAP & Multi-Tower Fleet Gateway).",
    image: "/images/kku-ssas.png",
    tags: ["ESP32", "Embedded C++", "Flutter", "FastAPI", "MQTT", "TimescaleDB", "Docker"],
    github: "https://github.com/mohammedmokhtar2/SSAS",
    demo: "",
    video: ""
  },
  {
    title: "HNU Official University Web Platform",
    description: "Modern, internationalized (English & Arabic with full RTL layout support) official web platform for Helwan National University built with Next.js 15, TypeScript, and Tailwind CSS 4.",
    image: "/images/hnu-website.jpeg",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "next-intl", "Zod"],
    github: "https://github.com/mohammedmokhtar2/website-hnu",
    demo: "",
    video: ""
  },
  {
    title: "Risk AI",
    description: "Built an intelligent Industrial Safety System which predicts if any abnormal event will occur. It sends real-time alerts and triggers automated actions to prevent hazards.",
    image: "/images/risk.png",
    tags: ["Python", "React", "ESP32", "SQLite"],
    github: "https://github.com/mohammedmokhtar2/RiskAI-IoT-System",
    demo: "", 
    video: "https://drive.google.com/file/d/1QhkTuzUDNEI8Q8u60g1QpOvZwDNOPrbZ/view?usp=sharing" 
  },
  {
    title: "AI Image Captioning",
    description: "Built an intelligent system that helps sales teams find the best captions for products to attract the audience. Combines Vision and NLP.",
    image: "/images/caption.png",
    tags: ["PyTorch", "Transformers", "Docker", "FastAPI", "Next.js", "CV"],
    github: "https://github.com/mohammedmokhtar2/AI-Image-Captioning-Fullstack", 
    demo: "https://captioning-hnu.vercel.app/",
    video: ""
  },
  {
    title: "Health Prediction",
    description: "Built an intelligent System that tracks physical health by analyzing user readings to predict vital metrics.",
    image: "/images/health.png",
    tags: ["Python", "ML", "Scikit-learn", "FastAPI", "Docker"],
    github: "https://github.com/mohammedmokhtar2/Health-prediction",
    demo: "https://health-prediction-web.vercel.app/",
    video: ""
  },
  {
    title: "Software-Defined Networks (SDN)",
    description: "Intelligent SDN Congestion Control & Load Balancing system to optimize network traffic flow.",
    image: "/images/SDN.jpeg",
    tags: ["Python", "Mininet", "POX Controller", "Networking"],
    github: "https://github.com/mohammedmokhtar2/Intelligent-SDN",
    demo: "",
    video: ""
  },
  {
    title: "Security System with Face Recognition",
    description: "Implemented a high-speed attendance system using YOLOv11, enabling contactless facial recognition that reduces check-in bottlenecks.",
    image: "/images/security.png",
    tags: ["YOLOv11", "Deep Learning", "Python"],
    github: "https://github.com/mohammedmokhtar2",
    demo: "",
    video: ""
  },
  {
    title: "Official University Chatbot",
    description: "Engineered a production-ready RAG chatbot for the university website using Gemini API and ChromaDB to provide instant academic resources.",
    image: "/images/chatbot.png",
    tags: ["LangGraph", "ChromaDB", "N8N", "NLP", "FastAPI", "Docker", "Vector DB"],
    github: "https://github.com/mohammedmokhtar2",
    demo: "", 
    video: ""
  },
  {
    title: "Autonomous Mobile Robot (Edge AI)",
    description: "Developed a dual-camera robotic system on Raspberry Pi 4, utilizing stereoscopic vision and YOLOv8 for real-time depth perception and obstacle avoidance.",
    image: "/images/robot.png",
    tags: ["Robotics", "YOLOv8", "OpenCV", "Raspberry Pi 4"],
    github: "https://github.com/mohammedmokhtar2",
    demo: "",
    video: "" 
  },
  {
    title: "AI Recruitment Automation",
    description: "Built an intelligent resume parser that extracts candidate skills and auto-fills application forms, reducing manual data entry.",
    image: "/images/parser.png",
    tags: ["Python", "Automation", "n8n", "AirTable"],
    github: "https://github.com/mohammedmokhtar2",
    demo: "",
    video: ""
  }
];

// --- Volunteering ---
export const volunteeringData = [
  {
    role: "Vice Head, Problem-Solving Committee",
    organization: "Pixels Egypt",
    description: "Trained 250+ University Students all around Egypt in algorithms and data structures; organized contests and events."
  },
  {
    role: "Deputy Organizer",
    organization: "Resala Charity Organization",
    description: "Led medical camp logistics to serve thousands in underserved Egyptian villages."
  },
  {
    role: "Student Union Chair Family Committee",
    organization: "Helwan National University",
    description: ""
  }
];