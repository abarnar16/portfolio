"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projectCategories = ["All", "AI/ML", "Web", "Database", "Visualization"];
  
const projects = [
    {
      title: "Nexora – AI-Powered Wealth Management",
      desc: "Finalist at PolyFinTech Hackathon; prototyped an AI-driven financial advisor for high-net-worth users, leveraging reinforcement learning and predictive analytics to provide personalized investment strategies. Focused on risk management, portfolio optimization, and user-friendly dashboards.",
      tech: ["Typescript", "AI"],
      category: "AI/ML",
      demo: "https://drive.google.com/file/d/1rUqvJCAOVjksADYVtbPBIzQjBxDAsr_z/view?usp=drive_link",
      github: "https://github.com/abarnar16/nexora",
    },
    {
      title: "DQN Reinforcement Learning",
      desc: "Implemented Deep Q-Network on Pendulum environment for continuous control, experimenting with state-action value estimation and reward shaping. Demonstrated ability to model sequential decision-making and reinforcement learning pipelines.",
      tech: ["Python", "Gym", "DQN",'RL'],
      category: "AI/ML",
      github: "https://github.com/abarnar16/dqn-RL",
    },
    {
      title: "Comparative Study: DQN vs DDPG",
      desc: "Conducted a research study comparing DQN and DDPG performance on continuous control tasks, analyzing sample efficiency, stability, and reward convergence. Includes research paper and reproducible experiments.",
      tech: ["Python", "Gym", "DQN", "DDPG", "Research"],
      category: "AI/ML",
      github: "https://github.com/abarnar16/dqn-vs-ddpg",
    },
    {
      title: "ACGAN EMNIST Image Generation",
      desc: "Trained an Auxiliary Classifier GAN to generate class-conditioned EMNIST character images, enhancing generative modeling skills. Focused on improving image quality using conditional loss and class embedding techniques.",
      tech: ["PyTorch", "ACGAN", "EMNIST", "Generative AI"],
      category: "AI/ML",
      github: "https://github.com/abarnar16/acgan_emnistGeneration",
    },
    {
      title: "Sentiment Analysis using RNN (Keras)",
      desc: "Built an LSTM-based RNN model to classify movie reviews as positive or negative. Demonstrated preprocessing, embedding layers, and sequential learning for text classification tasks.",
      tech: ["Python", "Keras", "LSTM", "NLP"],
      category: "AI/ML",
      github: "https://github.com/abarnar16/RNN-movieReviews",
    },
    {
      title: "Fruit & Vegetable Classifier using CNN",
      desc: "Developed a convolutional neural network for classifying fruit and vegetable images. Applied data augmentation, dropout, and batch normalization to improve accuracy.",
      tech: ["Python", "Keras", "TensorFlow", "CNN"],
      category: "AI/ML",
      github: "https://github.com/abarnar16/CNN_vegClassifer",
    },
    {
      title: "Customer Segmentation with Clustering & PCA",
      desc: "Applied K-Means clustering and PCA for market segmentation, identifying patterns in customer behavior and generating actionable business insights.",
      tech: ["Python", "scikit-learn", "PCA", "K-Means", "Data Analysis"],
      category: "AI/ML",
    },
    {
      title: "Machine Status Prediction (Classification)",
      desc: "Predicted factory machine health using classification models in scikit-learn, demonstrating predictive maintenance capabilities.",
      tech: ["Python", "scikit-learn", "Classification", "ML"],
      category: "AI/ML",
    },
    {
      title: "House Price Prediction (Regression)",
      desc: "Built regression models to estimate house prices, performing feature engineering, scaling, and evaluation to improve predictive performance.",
      tech: ["Python", "scikit-learn", "Regression", "ML"],
      category: "AI/ML",
    },
    {
      title: "HDB Resale Price Analysis",
      desc: "Created interactive Tableau dashboards to visualize HDB resale trends over time, enabling exploratory data analysis and data-driven insights for housing decisions.",
      tech: ["Tableau", "Data Visualization", "Analytics"],
      category: "Visualization",
    },
    {
      title: "Hospital OLTP Database Design (MySQL)",
      desc: "Designed and implemented a relational database for hospital operations, covering patient records, appointments, and billing. Optimized database normalization and query performance.",
      tech: ["MySQL", "Database Design", "ERD"],
      category: "Database",
    },
    {
      title: "Invoice PDF Generator for ARP Engineering",
      desc: "Developed a backend PDF generator using Flask and PDFKit to automate invoice creation, including dynamic item lists, multi-page handling, and templated formatting.",
      tech: ["Python", "Flask", "PDFKit", "Automation"],
      category: "Web",
      github: "https://github.com/abarnar16/arp-document-generator",
    },
    {
      title: "Fantasy Fitness Challenge Game (Full-stack Web)",
      desc: "Built a gamified full-stack fitness web game using HTML, CSS, and JavaScript, implementing user tracking, challenges, and point-based rewards.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"],
      category: "Web",
      github: "https://github.com/abarnar16/game-of-fitness",
    },
    {
      title: "Wellniverse – Gamified Fitness App for Children",
      desc: "Designed a prototype for a gamified fitness app targeting children, featuring avatars, daily challenges, and progress tracking to encourage healthy habits.",
      tech: ["React", "Node.js", "UX Design"],
      category: "Web",
    },
    {
      title: "LAMP Stack Website Hosting Project",
      desc: "Deployed a WordPress site on a Linux-Apache-MySQL-PHP stack, managing server configuration, permissions, and database setup for production hosting.",
      tech: ["Linux", "Apache", "MySQL", "PHP", "WordPress"],
      category: "Web",
    },
    {
  title: "Keyword Cipher Encrypted Message Analyzer",
  desc: "Built a full menu-driven cryptographic analysis system for keyword ciphers, supporting encryption/decryption, frequency analysis, batch decryption, cipher strength evaluation, and keyword inference. Designed with modular architecture and CLI-based interaction for algorithmic clarity and scalability.",
  tech: ["Python", "Cryptography", "Algorithms", "DSAA"],
  category: "Database",
  github: "",
},
{
  title: "DASK Expression Evaluator ",
  desc: "Developed a full expression evaluation engine supporting dependency-aware computation, parse tree optimisation, cycle detection, and smart evaluation. Includes expression validation, complexity ranking, optimisation via tree rewriting, and performance-aware execution.",
  tech: ["Python", "Data Structures", "Algorithms", "Parse Trees"],
  category: "Database",
  github: "",
}
  ];

  const skill = [
    "AI & Machine Learning",
    "Data Engineering & Visualization",
    "Full-Stack Development",
    "Creative Problem Solving",
  ];

  const skills = [
    { category: "AI & ML", items: ["TensorFlow", "PyTorch", "Keras", "scikit-learn"], levels: [90, 85, 80, 90] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Tableau", "Power BI"], levels: [95, 90, 85, 80] },
    { category: "Web & App Dev", items: ["React", "Node.js", "Flask", "WordPress"], levels: [90, 85, 80, 75] },
    { category: "Databases", items: ["MySQL", "MongoDB", "Data Warehousing"], levels: [85, 80, 70] },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const categories = ["All", ...skills.map(s => s.category)];

  

const experiencesAndCerts = [
    // 🎓 Academics
  {
    category: "Academics",
    title: "Director’s Honour Roll",
    date: "April 2025",
    desc: "Achieved a current GPA of 3.94; awarded the Director’s Honour Roll for AY2024/2025. Pursuing Certificate in Advanced Mathematics and participating in the Singapore Youth Leadership Programme.",
  },
 
{
  category: "Experiences",
  title: "PolyFintech Finalist",
  date: "2024",
  desc: "Finalist in the PolyFintech Hackathon, where I collaborated with a cross-disciplinary team to design and pitch innovative fintech solutions addressing real-world financial challenges. Also participated in the NUS Humanity Hackathon, applying AI-driven approaches to social impact projects.",
},

    // 🎯 Experiences
  {
    category: "Experiences",
    title: "National Youth Council Leadership Camp (NYCLC)",
    date: "Jun 2025",
    desc: "Participated in a 3-day leadership camp emphasizing team-building, communication, and civic engagement through experiential learning activities.",
  },

  // 📘 Certifications
  {
    category: "Certifications",
    title: "Introduction to Deep Learning with Keras",
    date: "Jan 2025",
    desc: "Completed a DataCamp course covering the fundamentals of deep learning using Keras, including building, training, and evaluating neural networks.",
  },
  {
    category: "Certifications",
    title: "Supervised Learning with Scikit-learn",
    date: "Jan 2024",
    desc: "Completed a DataCamp course focused on implementing supervised learning models such as regression, classification, and model evaluation using scikit-learn.",
  },
  {
    category: "Certifications",
    title: "Generative AI Concepts",
    date: "2024",
    desc: "Completed a DataCamp course introducing the concepts of generative AI, including GANs, diffusion models, and applications in creative AI.",
  },
  {
    category: "Certifications",
    title: "Introduction to Data Visualization with Plotly",
    date: "2024",
    desc: "Completed a DataCamp course on data visualization, learning to create interactive and insightful dashboards with Plotly in Python.",
  },

 

  // 🌟 Extracurriculars
  {
    category: "Extracurriculars",
    title: "Clubs & Activities",
    date: "",
    desc: "Active member of the Singapore Polytechnic Astronomy Club and Life Arts Club, contributing to both scientific curiosity and creative exploration.",
  },
];


  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen font-sans scroll-smooth">

{/* Navbar */}
<nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
    <a
      href="#hero"
      className="font-bold text-indigo-400 text-xl hover:text-indigo-300 transition"
    >
      My portfolio
    </a>

    <div className="flex gap-6 text-sm flex-wrap justify-end">
      {[
        "skills",
        "projects",
        "hackathons",
        "leadership",
        "work",
        "osip",
        "volunteering",
        "ongoing",
        "certifications",
        "contact",
      ].map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className="hover:text-indigo-400 transition"
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section id = 'hero' className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-36 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2/3 h-1/4 bg-gradient-to-r from-cyan-500/10 via-purple-400/5 to-pink-500/10 blur-3xl rounded-full"
              animate={{
                x: [Math.random() * 300 - 150, Math.random() * 300 - 150],
                y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                opacity: [0.05, 0.4, 0.05],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
              style={{
                top: `${Math.random() * 900}px`,
                left: `${Math.random() * 1400}px`,
              }}
            />
          ))}
        </div>

        {/* Left Column */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left z-10 space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide font-orbitron">
            Hi, I&apos;m <span className="text-indigo-400">Abarna Rajarethinam</span>
          </h1>
          <motion.div
            className="text-cyan-300 text-lg md:text-xl font-mono h-8 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Innovating with AI to solve real problems",
                  "Engineering practical intelligent systems",
                  "Exploring data to create meaningful impact",
                  "Designing solutions that make a difference"
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </motion.div>
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed backdrop-blur-sm px-3 py-2 rounded-md bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            I build{" "}
            <span className="text-indigo-400 hover:text-indigo-500 transition-all cursor-pointer">
              intelligent systems
            </span>{" "}
            and{" "}
            <span className="text-indigo-400 hover:text-indigo-500 transition-all cursor-pointer">
              data-driven solutions
            </span>{" "}
            that create real-world impact while fostering{" "}
            <span className="text-indigo-400 hover:text-indigo-500 transition-all cursor-pointer">
              innovation
            </span>.
          </motion.p>
          <motion.a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 inline-block bg-indigo-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right Column */}
        <div className="relative w-full md:w-[32rem] h-[32rem] mt-10 md:mt-0 z-10 flex items-center justify-start">
          <div
            className="absolute w-112 h-112 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-60 animate-pulse pointer-events-none z-0"
            style={{ bottom: '10%', left: '20%' }}
          />
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400/50 via-purple-400/30 to-pink-400/50 blur-2xl"
                animate={{
                  x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                  y: [Math.random() * 150 - 75, Math.random() * 150 - 75],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 12 + Math.random() * 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
                style={{
                  top: `${Math.random() * 400}px`,
                  left: `${Math.random() * 600}px`,
                }}
              />
            ))}
          </div>
          <motion.img
            src="/images/profile.png"
            alt="Abarna"
            className="relative w-[28rem] h-[28rem] object-contain rounded-xl z-10 -translate-y-12"
            style={{
              filter: "drop-shadow(0 0 30px rgba(99,102,241,0.8)) drop-shadow(0 0 20px rgba(99,102,241,0.5))",
            }}
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(99,102,241,0.5)) drop-shadow(0 0 10px rgba(99,102,241,0.3))",
                "drop-shadow(0 0 50px rgba(99,102,241,0.9)) drop-shadow(0 0 30px rgba(99,102,241,0.7))",
                "drop-shadow(0 0 20px rgba(99,102,241,0.5)) drop-shadow(0 0 10px rgba(99,102,241,0.3))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 px-4 w-[14rem]">
            {skill.map((item, i) => (
              <motion.div
                key={item}
                className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-lg px-4 py-3 text-white text-sm font-mono hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] transition-all shadow-md border border-indigo-500/30 relative group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.3, duration: 0.6 }}
              >
                <div className="absolute inset-0 rounded-lg border border-indigo-500/20 animate-pulse pointer-events-none" />
                <p className="font-bold text-center">{item}</p>
                <span className="absolute -inset-0.5 rounded-lg border border-cyan-400/50 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16 bg-[#101727]">
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-300">Technical Skills</h2>
        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-500 text-black shadow-[0_0_15px_rgba(99,102,241,0.7)]"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredSkills.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm"
            >
              <h3 className="font-semibold mb-4 text-indigo-400 flex items-center gap-2">
                <Code size={18} /> {s.category}
              </h3>
              <div className="flex flex-col gap-3">
                {s.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="text-sm w-32">{item}</span>
                    <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.levels[j]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center"> Projects</h2>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === cat
                  ? "bg-indigo-500 border-indigo-400"
                  : "border-gray-700 hover:bg-gray-800"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 text-indigo-300 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline text-sm">
                    Demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline text-sm">
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>


{/* Hackathons Section */}
<section id="hackathons" className="px-6 py-16 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-3 text-center text-indigo-300">
    Hackathons & Applied AI Systems
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
    A collection of applied AI and systems-focused hackathons where I designed
    and built end-to-end prototypes across fintech, education, governance, and
    machine learning infrastructure.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    {/* FINTECH */}
    <motion.div whileHover={{ scale: 1.02 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
    >
      <div className="h-48 w-full bg-black flex items-center justify-center p-2">
        <video
          src="/images/fintech.mp4"
          controls
          className="h-full w-auto object-contain rounded-md"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white">
          PolyFinTech Hackathon
        </h3>

        <p className="text-indigo-300 text-sm mb-2">
          Finalist • Smart Banking & AI Investment Assistant
        </p>

        <p className="text-gray-400 text-sm flex-1">
          Built a smart banking prototype integrating an AI chatbot with real-time
          financial news analysis to support investment decision-making. The system
          processes live market signals and contextual news data to generate
          actionable insights for users, simulating an intelligent personal finance
          assistant.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {["AI/ML", "NLP", "FinTech", "Real-time Systems"].map((t) => (
            <span key={t} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

    {/* HUMANITY */}
    <motion.div whileHover={{ scale: 1.02 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
    >
      <div className="h-48 w-full bg-black flex items-center justify-center p-2">
        <img
          src="/images/humanity.jpeg"
          className="h-full w-auto object-contain rounded-md"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white">
          NUS Humanity Hackathon
        </h3>

        <p className="text-indigo-300 text-sm mb-2">
          AI for Education & Behavioural Design
        </p>

        <p className="text-gray-400 text-sm flex-1">
          Developed a gamified food ordering system for primary school students
          designed to encourage healthy eating habits. Students earn or lose points
          based on nutritional value, which can later be redeemed for school rewards.
          The system applies behavioural reinforcement principles to promote long-term
          healthy lifestyle habits.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {["AI/UX Design", "Gamification", "Behavioural Systems"].map((t) => (
            <span key={t} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

    {/* NAISC */}
    <motion.div whileHover={{ scale: 1.02 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
    >
      <div className="h-48 w-full bg-black flex items-center justify-center p-2">
        <img
          src="/images/naisc.jpeg"
          className="h-full w-auto object-contain rounded-md"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white">
          NAISC (Singtel AI Challenge)
        </h3>

        <p className="text-yellow-300 text-sm mb-2">
          Selected Participant • AI Drift Detection System (Ongoing)
        </p>

        <p className="text-gray-400 text-sm flex-1">
          Currently developing an AI monitoring system for detecting data and model
          drift in machine learning pipelines. The solution includes a professional
          analytics dashboard that visualizes drift patterns and model performance
          degradation, along with mitigation strategies for maintaining model stability
          over time.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {["Machine Learning", "MLOps", "Model Monitoring"].map((t) => (
            <span key={t} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <p className="text-xs text-yellow-400 mt-3">
          In progress — focused on system design & evaluation
        </p>
      </div>
    </motion.div>

    {/* ASEAN YOUTH */}
    <motion.div whileHover={{ scale: 1.02 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
    >
      <div className="h-48 w-full">
        <iframe
          src="https://www.youtube.com/embed/0isP7FiSwkA"
          className="h-full w-full"
          allowFullScreen
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white">
          ASEAN Youth Challenge
        </h3>

        <p className="text-indigo-300 text-sm mb-2">
          Regional AI & Legal Tech Innovation (Ongoing)
        </p>

        <p className="text-gray-400 text-sm flex-1">
          Developed “FairContract AI”, a system designed to support small business
          owners and migrant workers by analyzing contracts for unfair or misleading
          clauses. The model compares contract terms against market benchmarks,
          highlights discrepancies such as underpayment risks, and generates
          negotiation suggestions. The system also integrates a lawyer-in-the-loop
          mechanism where human legal volunteers assist when AI confidence is low.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {["AI/ML", "Legal Tech", "NLP", "Human-in-the-loop"].map((t) => (
            <span key={t} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <p className="text-xs text-yellow-400 mt-3">
          Ongoing — system design & prototype stage
        </p>
      </div>
    </motion.div>

  </div>
</section>


  {/* Leadership & Programmes Section */}
<section
  id="leadership"
  className="px-6 py-16 max-w-5xl mx-auto"
>
  <h2 className="text-3xl font-bold text-center text-indigo-300 mb-3">
    Leadership & Programmes
  </h2>

  <p className="text-center text-gray-400 mb-10">
    A reflection of my leadership journey through immersive national programmes
    that shaped my understanding of teamwork, resilience, communication, and civic awareness.
  </p>

  <div className="space-y-10">

    {/* NYCLC */}
    <motion.div
      className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-1">
        National Youth Council Leadership Camp (NYCLC)
      </h3>

      <p className="text-indigo-300 text-sm mb-4">
        Singapore Young Leaders Programme | 3D2N Experiential Leadership Camp | Youths across Singapore
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        NYCLC was one of the most transformative leadership experiences I have
        participated in. Over three days and two nights, I was immersed in a
        diverse environment of youth from across Singapore, each bringing
        different perspectives, personalities, and strengths. This diversity
        challenged me to adapt my communication style and learn how to work
        effectively with individuals outside my usual circle.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        A defining moment for me was the high-elements challenge. Initially,
        I felt a strong sense of hesitation and fear when faced with physically
        demanding obstacles at height. However, I chose to push through this
        discomfort. Completing the challenge taught me that leadership is not
        about avoiding fear, but about acknowledging it and still moving forward
        with clarity and composure.
      </p>

      {/* NYCLC IMAGES (SMALLER + SIDE STYLE MAINTAINED) */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <img src="/images/nyclc_1.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
        <img src="/images/nyclc_2.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
        <img src="/images/nyclc_3.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
      </div>

      <p className="text-gray-400 leading-relaxed">
        Beyond physical challenges, NYCLC reshaped my understanding of leadership.
        I learned that effective leadership is deeply rooted in communication,
        empathy, and trust. It is about creating an environment where team members
        feel supported and empowered to contribute, especially in situations where
        uncertainty or pressure is present.
      </p>
    </motion.div>

    {/* POLY FORUM */}
    <motion.div
      className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-1">
        Poly Forum
      </h3>

      <p className="text-indigo-300 text-sm mb-4">
        6-Day National Governance & Dialogue Programme | 3D2N Residential Stay | Students from all 5 Polytechnics
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        Poly Forum was a six-day national-level programme that brought together
        students from all five polytechnics in Singapore, creating a highly
        diverse environment for dialogue and collaboration. The programme focused
        on understanding Singapore’s governance structures, national policies,
        and the broader socio-political context shaping the country’s development.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        A key highlight was the 3-day, 2-night residential component, where we
        engaged in intensive discussions, group tasks, and structured debates.
        Being placed in mixed groups with students from different institutions
        challenged me to step out of my comfort zone and actively engage in
        conversations with individuals I had never met before. This environment
        required me to quickly build rapport, listen actively, and contribute
        meaningfully despite differing viewpoints.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        Throughout the programme, I took initiative in group discussions and
        deliberately pushed myself to contribute more confidently during
        structured sharing sessions. This allowed me to strengthen my public
        speaking abilities, especially in articulating ideas clearly under time
        pressure and in front of a wider audience.
      </p>

      {/* PF IMAGES (MATCH NYCLC SIZE EXACTLY) */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <img src="/images/pf_1.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
        <img src="/images/pf_2.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
        <img src="/images/pf_3.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
        <img src="/images/pf_4.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
        <img src="/images/pf_5.jpeg" className="rounded-lg border border-gray-700 object-cover h-40 w-full" />
      </div>

      <p className="text-gray-400 leading-relaxed">
        Overall, Poly Forum strengthened my understanding of Singapore’s
        governance and civic landscape, while also helping me grow in confidence,
        leadership, and communication.
      </p>
    </motion.div>

    {/* YMAC */}
    <motion.div
      className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-1">
        Youth Model ASEAN Conference (YMAC)
      </h3>

      <p className="text-indigo-300 text-sm mb-4">
        ASEAN Diplomatic Simulation
      </p>

      <p className="text-gray-400 leading-relaxed">
        YMAC provided me with the opportunity to step into the role of a
        diplomatic representative, engaging in structured debates and negotiations
        on regional issues. Through this experience, I developed a stronger ability
        to think critically under pressure, articulate positions clearly, and
        respond thoughtfully in real-time discussions.
        <br /><br />
        More importantly, it gave me a deeper appreciation for diplomacy and the
        complexity of international cooperation, where outcomes are shaped not just
        by ideas, but by communication, compromise, and mutual understanding.
      </p>
    </motion.div>

  </div>
</section>

{/* Work Experience Section */}
<section
  id="work"
  className="px-6 py-20 max-w-6xl mx-auto"
>
  <h2 className="text-3xl font-bold text-center text-indigo-300 mb-3">
    Work Experience
  </h2>

  <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
    Real-world experience spanning administrative operations, customer service, and software development,
    with a focus on improving efficiency, communication, and practical problem-solving.
  </p>

  <div className="space-y-20">

    {/* ================= ARP ENGINEERING ================= */}
    <motion.div
      className="grid md:grid-cols-2 gap-10 items-center bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* LEFT TEXT */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2">
          Administrative Assistant — ARP Engineering
        </h3>

        <p className="text-indigo-300 text-sm mb-4">
          Jan 2024 – Feb 2024
        </p>

        <p className="text-gray-400 leading-relaxed mb-4">
          Worked as an administrative assistant handling document processing,
          invoice generation, and operational paperwork within the company.
          This exposed me to real business workflows and inefficiencies in
          manual Excel-based systems.
        </p>

        <p className="text-gray-400 leading-relaxed mb-4">
          I independently developed a web-based invoice generation system
          to automate and streamline this process. The solution reduced manual
          effort, improved consistency, and significantly increased operational efficiency,
          bridging the gap between administrative work and software engineering.
        </p>

        <a
          href="https://github.com/abarnar16/arp-document-generator"
          target="_blank"
          className="text-indigo-400 hover:underline text-sm"
        >
          View Project Repository →
        </a>
      </div>

      {/* RIGHT IMAGE SPOTLIGHT */}
      <div className="grid gap-3">
        <div className="bg-black/30 rounded-xl p-3">
          <img
            src="/images/arp_1.jpeg"
            className="w-full h-auto max-h-[220px] object-contain rounded-lg"
          />
        </div>

        <div className="bg-black/30 rounded-xl p-3">
          <img
            src="/images/arp_2.jpeg"
            className="w-full h-auto max-h-[220px] object-contain rounded-lg"
          />
        </div>
      </div>

    </motion.div>

    {/* ================= RIDA VIDEO CENTRE ================= */}
    <motion.div
      className="grid md:grid-cols-2 gap-10 items-center bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* LEFT IMAGE */}
      <div className="bg-black/30 rounded-xl p-3 flex justify-center">
        <img
          src="/images/rida_1.jpeg"
          className="w-full max-h-[350px] object-contain rounded-lg"
        />
      </div>

      {/* RIGHT TEXT */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2">
          Sales Associate — RIDA Video Centre
        </h3>

        <p className="text-indigo-300 text-sm mb-4">
          Oct 2025 – Feb 2026
        </p>

        <ul className="text-gray-400 space-y-2 list-disc pl-5 leading-relaxed">
          <li>Provided customer service and handled sales transactions in one of Singapore’s remaining DVD rental stores</li>
          <li>Managed inventory and assisted customers with product selection</li>
          <li>Adapted to a niche retail environment, gaining experience in customer engagement and store operations</li>
        </ul>
      </div>

    </motion.div>

  </div>
</section>

{/* OSIP SECTION */}
<section id="osip" className="px-6 py-24 text-white">

  {/* Title */}
  <div className="text-center mb-14 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-indigo-300">
      Overseas Sustainable Impact Programme (OSIP)
    </h2>
    <p className="text-gray-500 mt-3">
      A two-week overseas engineering programme in Indonesia focused on designing and implementing real-world solutions.
    </p>
  </div>

  {/* CONTAINER */}
  <div className="relative max-w-4xl mx-auto">

    {/* LEFT IMAGES (STRONGER GLOW) */}
    <div className="hidden md:block absolute -left-48 top-[-20px] space-y-10">
      <img src="/images/osip_1.jpeg" className="w-44 rotate-[-6deg] rounded-xl border border-gray-700 shadow-2xl shadow-indigo-500/40" />
      <img src="/images/osip_3.jpeg" className="w-44 rotate-[5deg] rounded-xl border border-gray-700 shadow-2xl shadow-indigo-500/40" />
      <img src="/images/osip_6.jpeg" className="w-44 rotate-[-4deg] rounded-xl border border-gray-700 shadow-2xl shadow-indigo-500/40" />
      <img src="/images/osip_8.jpeg" className="w-44 rotate-[3deg] rounded-xl border border-gray-700 shadow-2xl shadow-indigo-500/40" />
    </div>

    {/* RIGHT IMAGES (STRONGER GLOW, osip_2 removed) */}
    <div className="hidden md:block absolute -right-48 top-[-10px] space-y-10">
      <img src="/images/osip_4.jpeg" className="w-44 rotate-[-5deg] rounded-xl border border-gray-700 shadow-2xl shadow-indigo-500/40" />
      <img src="/images/osip_7.jpeg" className="w-44 rotate-[4deg] rounded-xl border border-gray-700 shadow-2xl shadow-indigo-500/40" />
      <img src="/images/osip_10.jpeg" className="w-44 rotate-[-3deg] rounded-xl border border-gray-700 shadow-2xl shadow-indigo-500/40" />
    </div>

    {/* CENTER TEXT (SHORTER + MATCHED GREY) */}
    <div className="text-gray-400 leading-relaxed text-[15px]
      bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-9 shadow-2xl space-y-5">

      <p>
OSIP (Overseas Sustainable Innovation Project) was a 12-day programme in Makassar, Indonesia that pushed me far out of my comfort zone and placed me in a completely unfamiliar engineering and cultural environment. Working in rural Gowa, I collaborated directly with MSME owner Pak Didi and his team, where I was exposed to the realities of cascara production, a fully manual, labour-intensive process that was slow, inconsistent, and heavily dependent on external factors such as weather. Seeing these constraints firsthand made me realise how deeply operational inefficiencies can directly affect productivity and the livelihoods of workers in rural communities.
</p>

<p>
This experience fundamentally reshaped how I approach engineering problems. What initially appeared to be a simple optimisation challenge revealed itself to be a human-centred system where even small design improvements could significantly reduce physical strain and improve daily output. During the ideation phase, I played an active role in leading idea generation within my team, helping to structure discussions, evaluate feasibility under real constraints, and translate field observations into practical engineering directions. Together, we designed a low-cost mechanical separation system using locally available materials, with a strong emphasis on simplicity, durability, and real-world usability rather than technical complexity, ensuring it could realistically be adopted, maintained, and trusted by the community.
</p>

<p>
Throughout the 12 days, constant iteration based on field feedback forced me to think critically under constraints, challenge assumptions, and communicate ideas clearly in an unfamiliar and resource-limited environment, strengthening both my adaptability and teamwork. Beyond the technical work, the experience was equally transformative on a personal level, as collaborating with people from different backgrounds significantly improved my leadership, communication, and ability to operate in high-pressure, unfamiliar settings. Overall, OSIP reshaped my understanding of engineering as a discipline grounded in empathy, constraint-driven problem solving, and real-world impact, where success is defined not by complexity but by usability, adoption, and tangible improvement in people’s lives.
</p>

    </div>

  </div>
</section>

{/* VOLUNTEERING SECTION */}
<section id="volunteering" className="px-6 text-white">

  {/* Title */}
  <div className="text-center mb-14 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-indigo-300">
      Volunteering
    </h2>
    <p className="text-gray-400 mt-3">
      Community outreach experience with Homeless SG, focused on supporting vulnerable individuals and understanding social inequality through direct engagement.
    </p>
  </div>

  {/* CARD CONTAINER */}
  <div className="max-w-5xl mx-auto bg-gray-900/60 border border-gray-800 backdrop-blur-md rounded-2xl p-6 shadow-lg">

    {/* TEXT */}
    <p className="text-gray-400 leading-relaxed mb-4">
      Volunteering with Homeless SG gave me direct exposure to the realities faced by individuals experiencing homelessness in Singapore. It was a grounding experience that challenged my assumptions and deepened my awareness of social inequality beyond what is visible in daily life.
    </p>

    <p className="text-gray-400 leading-relaxed mb-4">
      Through outreach activities, I supported the distribution of essential items and engaged in meaningful conversations with individuals from different walks of life. These interactions reinforced the importance of empathy, respect, and treating every person with dignity regardless of their circumstances.
    </p>

    {/* IMAGES INSIDE CARD */}
    <div className="grid grid-cols-2 gap-4 my-6">
      <img
        src="/images/vol_1.jpeg"
        className="w-full h-78 object-cover rounded-xl shadow-2xl border border-gray-700"
      />
      <img
        src="/images/vol_2.jpeg"
        className="w-full h-78 object-cover rounded-xl shadow-2xl border border-gray-700"
      />
    </div>

    {/* FINAL TEXT */}
    <p className="text-gray-400 leading-relaxed">
      This experience strengthened my communication skills in sensitive environments and deepened my sense of social responsibility. It also helped me understand how consistent, small acts of support can create meaningful impact within a community.
    </p>

  </div>

</section>


<section id="ongoing" className="px-6 py-24 text-white">

  {/* Title */}
  <div className="text-center mb-14 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-indigo-300">
      Current Projects & Startups
    </h2>
    <p className="text-gray-400 mt-3">
      Ongoing ventures where I take ownership across product design, engineering, and deployment, working closely with real stakeholders and end users.
    </p>
  </div>

  {/* ROW CARDS */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

    {/* SLA CARD */}
    <div className="bg-gray-900/60 border border-gray-800 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col">

      <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
        SLA – Material Prediction System
      </h3>

      <p className="text-gray-400 leading-relaxed mb-4">
        Led product direction and core engineering for a real-world SLA collaboration project. Built and trained a machine learning model that predicts material composition from 3D building scan files, deployed into a working application used for evaluation workflows.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        Owned full pipeline from model development to UI improvements and CI/CD optimisation, ensuring smooth deployment and real-time usability for stakeholders.
      </p>

      {/* VIDEO PREVIEW */}
      <div className="w-full h-[320px] rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
        <iframe
          src="https://drive.google.com/file/d/1BT8lOY5iZJzcXyfYOB7LErMdi0WDLDny/preview"
          className="w-full h-full"
          allow="autoplay"
        />
      </div>
    </div>

    {/* SKIPSLIDES CARD */}
    <div className="bg-gray-900/60 border border-gray-800 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col">

      <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
        SkipSlides – AI Slide Generation Startup
      </h3>

      <p className="text-gray-400 leading-relaxed mb-4">
        Co-founded a productivity platform that converts technical projects (codebases / ZIP files) into structured presentation slides automatically, removing the manual effort students face during deadlines.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        Built the core pipeline for parsing project structure and extracting key insights, with current focus on improving slide formatting, layout quality, and visual consistency.
      </p>

      {/* IMAGE PREVIEW */}
      <img
        src="/images/slides_1.jpeg"
        className="w-full h-[320px] object-cover rounded-xl shadow-2xl border border-gray-700"
      />
    </div>

  </div>
</section>


{/* Certifications & Achievements Section */}
<section
  id="certifications"
  className="px-6 py-20 max-w-6xl mx-auto"
>
  <h2 className="text-4xl font-bold mb-14 text-center text-indigo-300">
    Certifications & Achievements
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {experiencesAndCerts.map((e, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
        className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition-all"
      >

        {/* CATEGORY TAG */}
        <span className="inline-block text-xs mb-3 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
          {e.category}
        </span>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-white mb-1">
          {e.title}
        </h3>

        {/* DATE */}
        {e.date && (
          <p className="text-indigo-400 text-sm mb-3">
            {e.date}
          </p>
        )}

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {e.desc}
        </p>

      </motion.div>
    ))}

  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-6">Want to collaborate or chat about AI? Reach me here:</p>
        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={() => navigator.clipboard.writeText("arprajarethinam@gmail.com")}
            className="bg-indigo-500 hover:shadow-lg hover:scale-105 px-6 py-3 rounded-xl transition"
          >
            Copy Email
          </button>
          <a
            href="https://www.linkedin.com/in/abarna-rj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            LinkedIn Profile
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © 2025 Abarna Rajarethinam
      </footer>
    </div>
  );
}
