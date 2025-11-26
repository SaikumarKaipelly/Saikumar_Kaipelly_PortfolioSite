import { useEffect, useState, Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLinkedin, FiDownload, FiSun, FiMoon, FiMail, FiPhone } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

/* ----------------------------------
   Background Image (C4 - Ultra Subtle Tech Blur)
----------------------------------- */
const backgroundImageUrl =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=20";

/* ----------------------------------
   Layout Component
----------------------------------- */
const Layout = ({ children, darkMode, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0a0a0a] text-white" : "bg-white text-black"} relative`}>
      {/* Blurred Tech Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm -z-10"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-lg border-b border-blue-500/20 py-4 px-6 flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className="text-xl md:text-2xl font-bold text-blue-400 cursor-pointer"
        >
          Sai Kumar Kaipelly
        </h1>

        <nav className="flex gap-6 items-center text-sm">
          {["skills", "experience", "education", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/${item}`)}
              className="hover:text-blue-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* THEME SWITCH */}
          <button onClick={toggleTheme} className="hover:text-blue-400">
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/saikumarkaipelly"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FiLinkedin size={20} />
          </a>

          {/* RESUME */}
          <a
            href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf"
            download
            className="flex items-center gap-1 border border-blue-500/40 px-3 py-1 rounded hover:bg-blue-600/20"
          >
            <FiDownload /> Resume
          </a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-24 pb-20 px-4">{children}</main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-xs border-t border-blue-500/20">
        © Sai Kumar Kaipelly 2025 — All Rights Reserved
      </footer>
    </div>
  );
};

/* ----------------------------------
   HOME PAGE
----------------------------------- */
const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">
        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Cloud Engineer",
            2000,
            "Software Engineer",
            2000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-10">
        Java Full Stack Developer with 5+ years of experience building secure, scalable and cloud-native enterprise
        software using Spring Boot, React.js, Angular, AWS, Azure, Kafka, RabbitMQ, Docker, Kubernetes & CI/CD automation.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {["skills", "experience", "education", "contact"].map((btn) => (
          <button
            key={btn}
            onClick={() => navigate(`/${btn}`)}
            className="px-6 py-2 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-white rounded-lg transition"
          >
            {btn.charAt(0).toUpperCase() + btn.slice(1)}
          </button>
        ))}
      </div>
    </motion.section>
  );
};

/* ----------------------------------
   SKILLS
----------------------------------- */
const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python", "J2EE", "SQL", "PL/SQL"],
    Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Redux", "Angular"],
    Backend: ["Spring Boot", "Spring MVC", "Spring REST", "Spring Cloud", "Hibernate", "JPA"],
    Security: ["Spring Security", "OAuth2.0", "JWT"],
    Databases: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Neo4j", "Firebase"],
    Messaging: ["Kafka", "RabbitMQ", "JMS"],
    Cloud: ["AWS", "Azure"],
    "CI/CD": ["GitHub Actions", "GitLab", "Jenkins", "Docker", "Kubernetes"],
    Testing: ["JUnit", "Mockito", "React Testing Library"],
    "AI Tools": ["GitHub Copilot", "ChatGPT API Integration"],
  };

  return (
    <section className="max-w-5xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([cat, items]) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/20 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{cat}</h3>
            <p className="text-gray-300 text-sm">{items.join(", ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ----------------------------------
   EXPERIENCE
----------------------------------- */
const Experience = () => {
  const exp = [
    {
      company: "PNC Financial Services, USA",
      role: "Java Full Stack Developer",
      dates: "July 2024 – Present",
      bullets: [
        "Architected Spring Boot & Spring MVC microservices improving API latency by 32%.",
        "Developed Kafka pipelines reducing inter-service failures by 41%.",
        "Built React.js interfaces improving workflow speed by 28%.",
        "Developed AWS-native APIs using API Gateway, DynamoDB, CloudFormation.",
        "Integrated Neo4j graph models reducing fraud false-positives by 19%.",
        "Implemented CI/CD using GitHub Actions + automated testing pipelines.",
      ],
    },
    {
      company: "Zensar Technologies, India",
      role: "Java Full Stack Developer",
      dates: "June 2021 – June 2023",
      bullets: [
        "Created Spring REST microservices improving DB performance by 27%.",
        "Implemented OAuth2 RBAC reducing unauthorized access by 35%.",
        "Built React.js dashboards improving user efficiency by 22%.",
        "Created RabbitMQ pipelines improving message reliability by 40%.",
        "Deployed apps on AWS Lambda & EC2 reducing incident time by 30%.",
        "Containerized workloads using Kubernetes + GitLab pipelines.",
      ],
    },
    {
      company: "Fusion Software Technologies, India",
      role: "Junior Java Full Stack Developer",
      dates: "July 2019 – May 2021",
      bullets: [
        "Developed Spring MVC / Hibernate modules improving query speed by 18%.",
        "Created Angular components reducing UI bugs.",
        "Built JMS handlers reducing retry rates by 25%.",
        "Containerized apps using Docker & deployed to Azure.",
        "Implemented TDD raising test coverage above 75%.",
      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">Professional Experience</h2>

      <div className="space-y-10">
        {exp.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-300">{job.company}</h3>
            <p className="text-gray-300 italic">
              {job.role} | {job.dates}
            </p>

            <ul className="list-disc pl-6 mt-3 text-gray-300 space-y-2 text-sm">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ----------------------------------
   EDUCATION
----------------------------------- */
const Education = () => (
  <section className="max-w-3xl mx-auto py-16 text-center">
    <h2 className="text-4xl font-bold text-blue-400 mb-10">Education</h2>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-blue-500/20 shadow-lg"
    >
      <h3 className="text-2xl font-semibold text-white">University of Central Missouri</h3>
      <p className="text-gray-300 text-lg mt-2">Master of Science in Computer Science</p>
      <p className="text-blue-400 text-sm mt-1">Graduated: December 2024</p>
    </motion.div>
  </section>
);

/* ----------------------------------
   CONTACT — FULLY WORKING FORM USING FORMSUBMIT + GMAIL
----------------------------------- */
const Contact = () => {
  return (
    <section className="max-w-xl mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-10">Contact Me</h2>

      <form
        action="https://formsubmit.co/saikumarkaipelly24@gmail.com"
        method="POST"
        className="space-y-6 bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-blue-500/20"
      >
        {/* REQUIRED Hidden Inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
        <input type="hidden" name="_template" value="table" />

        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 bg-black/60 text-white border border-blue-500/30 rounded"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full p-3 bg-black/60 text-white border border-blue-500/30 rounded"
        />

        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="w-full p-3 bg-black/60 text-white border border-blue-500/30 rounded"
        />

        <button className="w-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-white py-3 rounded">
          Send Message
        </button>
      </form>

      <div className="mt-6 text-gray-300 text-sm">
        <p>
          <FiMail className="inline mr-1" /> saikumarkaipelly24@gmail.com
        </p>
        <p>
          <FiPhone className="inline mr-1" /> 816-352-4575
        </p>
      </div>
    </section>
  );
};

/* ----------------------------------
   MAIN APP COMPONENT
----------------------------------- */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Suspense fallback={<div className="text-center text-gray-400 py-20">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Home /></Layout>}
          />
          <Route
            path="/skills"
            element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Skills /></Layout>}
          />
          <Route
            path="/experience"
            element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Experience /></Layout>}
          />
          <Route
            path="/education"
            element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Education /></Layout>}
          />
          <Route
            path="/contact"
            element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Contact /></Layout>}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
