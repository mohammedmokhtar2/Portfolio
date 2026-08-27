# Portfolio Master Document (Single Source of Truth)
**Domain**: `www.mohammed-mokhtar.com`  
**Owner**: Mohammed Mokhtar Soliman Salama  
**Title**: AI Software Engineer & Technology Builder  
**Target Audiences**:  
1. 🎓 **Scholarship / University Admissions** (Academic rigor, research mindset, trajectory, system analysis)  
2. 🤖 **GenAI / AI Software Engineering Jobs** (Production RAG, LangGraph, agents, robust fullstack deployment)  
3. 🤝 **Professional Networking & Business Opportunities** (IoT systems, end-to-end engineering, technology leadership)

---

## 1. PERSONAL IDENTITY

- **Full Name**: Mohammed Mokhtar Soliman Salama
- **Professional Name**: Mohammed Mokhtar
- **Professional Title**: AI Software Engineer & Technology Builder
- **Hero Headline**: Building intelligent software, GenAI applications, automation systems, and connected technologies.
- **Core Domains**: AI / GenAI · Software Engineering · IoT · Automation
- **Location**: Cairo, Egypt
- **Email**: `muhammedmukhtar822@gmail.com`
- **Social & Authority Links**:
  - Website: `https://www.mohammed-mokhtar.com`
  - GitHub: `https://github.com/mohammedmokhtar2`
  - LinkedIn: `https://www.linkedin.com/in/mohammedmokhtar2`
  - Hugging Face: `https://huggingface.co/mohammedmokhtar2`

### 1-Line Bio (Unified Across Web)
> Intelligent Systems & AI Engineer specializing in NLP, RAG architectures, and IoT integration.

### Core Philosophy (Short Homepage Intro)
> Building at the intersection of AI and real-world systems.
>
> I am Mohammed Mokhtar, an AI Software Engineer and technology builder interested in the intersection of **artificial intelligence, software engineering, IoT, automation, and digital transformation**.
>
> My approach to engineering is strongly project-driven. Rather than focusing only on individual technologies, I enjoy understanding a complete problem, designing the architecture, building the system, integrating its components, testing it, and turning the result into something that can be used in the real world.
>
> My long-term goal is to contribute to the development of intelligent and connected systems while continuing to grow as an engineer, researcher, entrepreneur, and technology leader.

---

## 2. EDUCATION

- **Institution**: Helwan National University
- **Degree / Field**: Intelligent Systems Engineering / Computer Science
- **Status**: Senior Undergraduate / Technology Builder
- **Relevant Coursework**:
  - Artificial Intelligence & Machine Learning
  - Natural Language Processing (NLP)
  - Embedded Systems & Microcontrollers
  - Computer Networks & Software-Defined Networks (SDN)
  - Data Structures & Algorithms
  - Database Management Systems & Polyglot Persistence
  - Operating Systems & Distributed Systems
- **Academic Interests**:
  - Retrieval-Augmented Generation (RAG) & Autonomous AI Agents
  - Real-time Sensor Fusion & Edge AI Execution
  - System Reliability & Deterministic Control Logic in IoT
  - Generative Engine Optimization (GEO) & Semantic Information Retrieval

---

## 3. EXPERIENCE

### 1. AI Software Engineer / IT Engineer (Part-Time)
**Company/Org**: Helwan Tech Plus (Helwan National University)  
**Duration**: July 2025 – Present  
**Achievements & Impact**:
- Engineered and deployed the university's official production RAG chatbot, serving thousands of students with 24/7 instant academic guidance.
- Designed a deterministic query routing engine using LangGraph, ChromaDB vector store, and Gemini API to eliminate LLM hallucinations for admissions and course data.
- Built Arabic text normalization and fuzzy query matching logic to resolve typos and informal student phrasing with zero performance degradation.

### 2. HCIP AI Engineer Intern
**Company/Org**: Huawei Academy (Port Said University)  
**Duration**: Professional Internship  
**Achievements & Impact**:
- Mastered key AI domains including Computer Vision (image preprocessing, feature extraction), Speech Recognition (GMM-HMM, DNN), and NLP vectorization.

### 3. AI Researcher Intern
**Company/Org**: Qayedny  
**Duration**: Internship  
**Achievements & Impact**:
- Orchestrated an automated AI recruitment pipeline using LangGraph, n8n, and Airtable.
- Built a custom CV parser extracting candidate skill vectors and auto-populating applicant evaluation forms, reducing manual recruiter screening by 70%.

### 4. Data Engineer Intern
**Company/Org**: Digital Egypt Pioneers Initiative (DEPI)  
**Duration**: Internship  
**Achievements & Impact**:
- Architected enterprise data pipelines using SSIS and Azure SQL, enforcing data governance and high availability for downstream analytics.

### 5. NLP & Computer Vision Intern
**Company/Org**: National Telecommunication Institute (NTI)  
**Duration**: Internship  
**Achievements & Impact**:
- Fine-tuned pre-trained transformer architectures for NLP similarity detection and TF-IDF representation.
- Applied Transfer Learning on ResNet and EfficientNet for complex multi-class image segmentation and classification.

### 6. IoT Engineer Intern
**Company/Org**: Information Technology Institute (ITI)  
**Duration**: Internship  
**Achievements & Impact**:
- Developed an automated Smart Parking System utilizing MQTT telemetry, ultrasonic proximity sensors, and microcontrollers.

---

## 4. TECHNICAL DOMAINS & STACK

### Artificial Intelligence & GenAI
- **Frameworks & Tools**: LangGraph, LangChain, PyTorch, TensorFlow, OpenCV, ChromaDB, Hugging Face Transformers
- **Techniques**: Retrieval-Augmented Generation (RAG), Autonomous Agents, Vector Embeddings, Fine-Tuning, Transfer Learning, Prompt Engineering
- **APIs & Models**: Gemini API, OpenAI API, ResNet, EfficientNet, YOLOv8/YOLOv11

### Software Engineering & Backend
- **Languages**: Python, C/C++, SQL, JavaScript (ES6+), TypeScript
- **Frameworks**: FastAPI, Next.js, Django, React, Tailwind CSS
- **Architecture & DevOps**: REST APIs, Microservices, Docker, Git/GitHub, Linux Admin, Polyglot Persistence, System Optimization

### IoT & Embedded Systems
- **Hardware & Boards**: ESP32, Raspberry Pi 4, Arduino, Microcontrollers
- **Protocols & Control**: MQTT, SoftAP, Serial/UART, Relay Controls, ATS Power Failover Logic
- **Embedded Software**: Embedded C/C++, Sensor Fusion, Deterministic Rule Engines, Threshold Calibration

### Automation & Systems Integration
- **Platforms**: n8n, Airtable, Webhooks, Custom Parser Pipelines
- **System Analysis**: Safety Interlocks, State Machine Verification, Hardware-Software Co-Design

---

## 5. FEATURED PROJECTS & CASE STUDY BLUEPRINTS

### Project 01 — KKU-SSAS: Enterprise Dual-Mode IoT Hydroponic System (`~/projects/SSAS`)
- **Domain**: IoT & Embedded Systems / Cloud Edge Architecture  
- **Stack**: ESP32 · Embedded C++ · Flutter · FastAPI · MQTT · TimescaleDB · Redis 7 · Docker  
- **Problem**: Commercial agricultural installations demand zero-downtime, hardware-level safety interlocks, closed-loop pH/EC dosing, and flexible operation in offline single-tower or multi-tower fleet environments.
- **System Architecture**:
  ```text
  Physical Sensors (pH/EC/NTU/DHT22) → ESP32 RuleEngine & Mutual-Exclusion Interlocks → Dual Mode (SoftAP HTTP REST / MQTT Edge Gateway) → TimescaleDB/Redis → Flutter Dashboard
  ```
- **Technical Challenges**: Hardware ATS power source failover isolation, pH UP/DOWN mutual exclusion interlocks, encrypted closed-source PyArmor container packaging.
- **Result**: Commercial V1 package deployed for King Khalid University supporting both offline field operation and enterprise 200+ tower fleet management.

### Project 02 — HNU Official University Web Platform (`~/projects/hnu-offical-website`)
- **Domain**: Web Software Engineering & Internationalization  
- **Stack**: Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · next-intl · Zod · Vercel  
- **Problem**: University portal needed a high-performance, accessible, bilingual (English & Arabic with full RTL support) web platform with zero-latency locale switching.
- **System Architecture**:
  ```text
  Locale Router ([locale]) → next-intl Message Bundle → Dynamic Tailwind 4 RTL Layout → Server State (TanStack Query) → Automated Vercel CI/CD
  ```
- **Technical Challenges**: Managing RTL/LTR layout parity, Turbopack App Router migration, Zod form schema validation across locales.
- **Result**: Official high-performance web platform built for Helwan National University.

### Project 03 — Production Academic RAG Chatbot (Helwan Tech Plus)
- **Domain**: GenAI & AI Software Engineering  
- **Stack**: Python · LangGraph · ChromaDB · Gemini API · FastAPI · Docker · Next.js  
- **Problem**: University students faced delayed responses and manual bottleneck visits for academic coordination, tuition details, and schedules.
- **Technical Contribution**: Engineered deterministic query routing engine with ChromaDB vector search and Arabic text normalization to eliminate hallucinations.

### Project 04 — RiskAI: Industrial Safety & Abnormal Event Predictor
- **Domain**: AI + IoT Systems  
- **Stack**: Python · React · ESP32 · SQLite · Machine Learning  
- **Problem**: Industrial safety hazards often trigger damage before manual operators can intervene.
- **Technical Contribution**: Real-time sensor anomaly detection combined with instant hardware relay cutoff and automated alert notifications.

### Project 05 — Fullstack AI Image Captioning Platform
- **Domain**: GenAI & Fullstack Engineering  
- **Stack**: PyTorch · Transformers · Docker · FastAPI · Next.js  
- **Problem**: E-commerce sales teams require automated, engaging product captions tailored to visual aesthetics.
- **Technical Contribution**: Integrated Vision Transformer (ViT) and GPT decoder into a microservice deployed via Docker & Vercel.

---

## 6. RESEARCH & TECHNICAL REPORTS

1. **Deterministic Rule Engine Architecture in Embedded Systems**  
   - *Investigation*: Analyzing state machine stability and hardware interlocks in ESP32 sensor-actuator control loops.
2. **Semantic Grounding in Arabic RAG Chatbots**  
   - *Investigation*: Evaluating fuzzy keyword routing vs pure dense vector embeddings for low-resource multi-dialect Arabic queries.
3. **Software-Defined Network Traffic Optimization**  
   - *Investigation*: Comparative load balancing latency analysis using Mininet and custom POX controller algorithms.

---

## 7. ACHIEVEMENTS & LEADERSHIP

- **Vice Head, Problem-Solving Committee @ Pixels Egypt**: Trained 250+ Egyptian university students in competitive programming, data structures, and algorithmic optimization.
- **Deputy Organizer @ Resala Charity Organization**: Coordinated medical camp logistics serving thousands of residents in rural Egyptian villages.
- **Student Union Chair Family Committee @ Helwan National University**: Organized university-wide academic initiatives and student development workshops.

---

## 8. FUTURE GOALS & TRAJECTORY

> **Academic & Professional Trajectory**:  
> I am committed to pursuing advanced research and engineering in **Intelligent Systems, Autonomous AI Agents, and Connected IoT Architectures**. My goal is to bridge the gap between abstract AI models and physical, real-world edge devices that solve real human and industrial problems.
