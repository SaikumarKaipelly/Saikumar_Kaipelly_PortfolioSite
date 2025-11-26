import { useState } from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiMoon, FiSun, FiLinkedin, FiDownload, FiMail, FiPhone } from "react-icons/fi";

/* ----------------------------------
   BACKGROUND IMAGE (Option A)
   — CORS SAFE & Works 100% on Vercel
----------------------------------- */
const BG_IMAGE =
  "https://cdn.pixabay.com/photo/2015/07/02/09/28/digital-828795_1280.jpg";

/* ==================================
        LAYOUT WRAPPER
================================== */
const Layout = ({ children, darkMode, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 blur-sm -z-10"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-blue-500/20 px-6 py-4 flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-blue-400 cursor-pointer tracking-wide"
        >
          Sai Kumar Kaipelly
        </h1>

        <nav className="flex items-center gap-6 text-sm">
          {["skills", "experience", "education", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => navigate(`/${link}`)}
              className="hover:text-blue-400 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}

          <button onClick={toggleTheme} className="hover:text-blue-400">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a
            href="https://www.linkedin.com/in/saikumarkaipelly"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FiLinkedin size={22} />
          </a>

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
      <main className="pt-28 pb-24 px-4">{children}</main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-xs border-t border-blue-500/20">
        © Sai Kumar Kaipelly 2025 — All Rights Reserved
      </footer>
    </div>
  );
};

/* ==================================
        HOME (H1 — BIG HERO)
================================== */
const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center max-w-4xl mx-auto"
    >
      {/* 3D TILT BOX */}
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={900} scale={1.02}>
        <motion.div
          className="bg-black/50 backdrop-blur-xl border border-blue-500/30 shadow-2xl rounded-3xl px-10 py-14"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 drop-shadow-md">
            Java Full Stack Developer
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Building secure, scalable, cloud-ready enterprise applications using
            Spring Boot, React.js, AWS, Azure, Kafka, Docker, Kubernetes, and
            microservices architectures.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {["skills", "experience", "education", "contact"].map((btn) => (
              <motion.button
                key={btn}
                onClick={() => navigate(`/${btn}`)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-blue-600/40 border border-blue-500/30 hover:bg-blue-600/60 shadow-xl"
              >
                {btn.charAt(0).toUpperCase() + btn.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

/* ==================================
        SKILLS
================================== */
const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python", "SQL", "J2EE"],
    "Frontend": ["React.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    "Backend": ["Spring Boot", "Spring MVC", "REST API", "Hibernate", "JPA"],
    "Cloud": ["AWS", "Azure"],
    "Messaging": ["Kafka", "RabbitMQ"],
    "DevOps": ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "GitLab"],
    "Databases": ["PostgreSQL", "MongoDB", "Oracle", "MySQL", "Neo4j"],
  };

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([title, items]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-black/40 border border-blue-500/20 backdrop-blur-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-300 text-sm">{items.join(", ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ==================================
        EXPERIENCE
================================== */
const Experience = () => {
  const data = [
    {
      company: "PNC Financial Services, USA",
      role: "Java Full Stack Developer",
      dates: "Jul 2024 – Present",
      bullets: [
        "Architected Spring Boot microservices reducing API latency by 32%.",
        "Integrated Kafka pipelines reducing sync failures by 41%.",
        "Developed React.js dashboards improving efficiency by 28%.",
        "Built AWS-native APIs (Lambda, API Gateway, DynamoDB).",
      ],
    },
    {
      company: "Zensar Technologies, India",
      role: "Java Full Stack Developer",
      dates: "2021 – 2023",
      bullets: [
        "Developed scalable Spring REST APIs with OAuth2 security.",
        "Improved DB performance by 27% using optimized queries.",
        "Built React.js UI components and dashboards.",
        "Developed RabbitMQ flows improving reliability by 40%.",
      ],
    },
    {
      company: "Fusion Software Technologies, India",
      role: "Junior Full Stack Developer",
      dates: "2019 – 2021",
      bullets: [
        "Built Spring MVC modules reducing response times.",
        "Created Angular UI features with reusable components.",
        "Containerized workloads using Docker and Azure.",
      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Professional Experience
      </h2>

      <div className="space-y-10">
        {data.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-black/40 border border-blue-500/20 backdrop-blur-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-300">{job.company}</h3>
            <p className="text-gray-300 italic">
              {job.role} | {job.dates}
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-300 text-sm">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ==================================
        EDUCATION
================================== */
const Education = () => (
  <section className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-400 mb-12">Education</h2>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl bg-black/40 border border-blue-500/20 backdrop-blur-lg shadow-xl"
    >
      <h3 className="text-2xl font-semibold">University of Central Missouri</h3>
      <p className="text-gray-300 text-lg mt-2">
        Master of Science in Computer Science
      </p>
      <p className="text-blue-400 text-sm mt-1">Graduated: December 2024</p>
    </motion.div>
  </section>
);

/* ==================================
        CONTACT (WORKING FORM)
================================== */
const Contact = () => (
  <section className="max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-400 mb-12">Contact Me</h2>

    <form
      action="https://formsubmit.co/saikumarkaipelly24@gmail.com"
      method="POST"
      className="p-8 rounded-2xl bg-black/40 border border-blue-500/20 backdrop-blur-lg shadow-xl space-y-6"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
      <input type="hidden" name="_template" value="table" />

      <input
        className="w-full p-3 rounded bg-black/60 border border-blue-500/30 text-white"
        placeholder="Your Name"
        name="name"
        required
      />

      <input
        className="w-full p-3 rounded bg-black/60 border border-blue-500/30 text-white"
        placeholder="Your Email"
        name="email"
        type="email"
        required
      />

      <textarea
        className="w-full p-3 rounded bg-black/60 border border-blue-500/30 text-white"
        rows="5"
        placeholder="Your Message"
        name="message"
        required
      />

      <button className="w-full py-3 rounded bg-blue-600/40 border border-blue-500/40 hover:bg-blue-600/60 text-white font-semibold transition">
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

/* ==================================
        MAIN APP
================================== */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
              <Skills />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/education"
          element={
            <Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
              <Education />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
