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
      desc: "Finalist at PolyFinTech Hackathon; built an AI-driven financial advisor for high-net-worth users, leveraging reinforcement learning and predictive analytics to provide personalized investment strategies. Focused on risk management, portfolio optimization, and user-friendly dashboards.",
      tech: ["Python", "TensorFlow", "DQN", "DDPG", "AI"],
      category: "AI/ML",
      demo: "https://drive.google.com/file/d/1rUqvJCAOVjksADYVtbPBIzQjBxDAsr_z/view?usp=drive_link",
      github: "https://github.com/abarnar16/nexora",
    },
    {
      title: "DQN Reinforcement Learning",
      desc: "Implemented Deep Q-Network on Pendulum environment for continuous control, experimenting with state-action value estimation and reward shaping. Demonstrated ability to model sequential decision-making and reinforcement learning pipelines.",
      tech: ["Python", "Gym", "DQN"],
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
      tech: ["React", "Node.js", "MongoDB", "UX Design"],
      category: "Web",
    },
    {
      title: "LAMP Stack Website Hosting Project",
      desc: "Deployed a WordPress site on a Linux-Apache-MySQL-PHP stack, managing server configuration, permissions, and database setup for production hosting.",
      tech: ["Linux", "Apache", "MySQL", "PHP", "WordPress"],
      category: "Web",
    },
  ];

  const skill = [
    "AI & Machine Learning",
    "Data Engineering & Visualization",
    "Full-Stack Development",
    "Creative Problem Solving",
  ];

  const skills = [
    { category: "AI & ML", items: ["TensorFlow", "PyTorch", "Keras", "scikit-learn"], levels: [90, 85, 80, 75] },
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
    {
      title: "National Youth Council Leadership Camp (NYCLC)",
      date: "Jun 2025",
      desc: "Participated in a leadership course for 3 days emphasizing team-building, communication, and civic engagement.",
    },
    {
      title: "Introduction to Deep Learning with Keras",
      date: "Jan 2025",
      desc: "Completed a DataCamp course on Keras fundamentals for deep learning.",
    },
    {
      title: "Supervised Learning with Scikit-learn",
      date: "Jan 2024",
      desc: "Completed a DataCamp course on supervised machine learning using scikit-learn at Singapore Polytechnic.",
    },
    {
      title: "Academic Highlights",
      date: "",
      desc: "Current grade: 3.95 CGPA; Director’s Honour Roll for AY2024/2025; Pursuing Certificate in Advanced Mathematics; Currently a Participant, Singapore Youth Leadership Programme.",
    },
    {
      title: "Hackathons & Collaboration",
      date: "",
      desc: "Competed in multiple hackathons including PolyFintech (Finalist) and NUS Humanity; Collaborated on interdisciplinary projects with peers from diverse backgrounds.",
    },
    {
      title: "Clubs & Courses",
      date: "",
      desc: "Active member of Singapore Polytechnic Astronomy Club and Life Arts Club. Completed courses: Supervised Learning with scikit-learn, Generative AI Concepts, Introduction to Data Visualization with Plotly, Introduction to Deep Learning with Keras.",
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
          <span className="font-bold text-indigo-400 text-xl">Abarna</span>
          <div className="flex gap-6 text-sm">
            {["about", "skills", "projects", "certifications", "contact"].map((link) => (
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
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-36 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
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
            Hi, I'm <span className="text-indigo-400">Abarna Rajarethinam</span>
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
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-300">Skills</h2>
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

   {/* Certifications & Achievements Section */}
<section id="certifications" className="px-6 py-16 max-w-5xl mx-auto bg-[#101727] rounded-xl">
  <h2 className="text-3xl font-bold mb-10 text-center text-indigo-300"> Certifications & Achievements</h2>
  <div className="relative border-l-2 border-indigo-400 pl-10 flex flex-col gap-8">
    {experiencesAndCerts.map((e, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.2 }}
        className="relative"
      >
        {/* Adjusted circle position */}
        <span className="absolute -left-6 top-1 w-5 h-5 bg-indigo-500 rounded-full"></span>
        <h3 className="text-xl font-semibold">{e.title}</h3>
        {e.date && <p className="text-indigo-300">{e.date}</p>}
        <p className="text-gray-400 text-sm">{e.desc}</p>
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
