import { useState } from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiMoon, FiSun, FiLinkedin, FiDownload, FiMail, FiPhone } from "react-icons/fi";

/* -----------------------------------------
   LOCAL BACKGROUND IMAGE
-------------------------------------------- */
const BG_IMAGE = process.env.PUBLIC_URL + "/bg-tech.jpg";

/* =========================================
   LAYOUT WRAPPER
========================================= */
const Layout = ({ children, darkMode, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen relative ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm -z-10"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-blue-500/30 px-6 py-4 flex justify-between items-center">
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
            rel="noopener noreferrer"
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

      {/* CONTENT */}
      <main className="pt-28 pb-24 px-4">{children}</main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-xs border-t border-blue-500/20">
        © Sai Kumar Kaipelly 2026 — All Rights Reserved
      </footer>
    </div>
  );
};

/* =========================================
   HOME PAGE
========================================= */
const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center max-w-4xl mx-auto"
    >
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
        <motion.div className="bg-black/50 backdrop-blur-xl border border-blue-500/20 shadow-2xl rounded-3xl px-10 py-14">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">
            Java Full Stack Developer
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Building secure, scalable enterprise systems using Spring Boot, React.js,
            AWS, Azure, Kafka, Docker, Kubernetes, and modern microservice patterns.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["skills", "experience", "education", "contact"].map((btn) => (
              <motion.button
                key={btn}
                onClick={() => navigate(`/${btn}`)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600/40 border border-blue-500/30 rounded-lg hover:bg-blue-600/60 transition shadow-lg"
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

/* =========================================
   SKILLS
========================================= */
const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python", "SQL", "J2EE"],
    Frontend: ["React.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    Backend: ["Spring Boot", "Spring MVC", "REST API", "Hibernate", "JPA"],
    Cloud: ["AWS", "Azure"],
    Messaging: ["Kafka", "RabbitMQ"],
    DevOps: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "GitLab"],
    Databases: ["PostgreSQL", "MongoDB", "Oracle", "MySQL", "Neo4j"],
  };

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-black/40 border border-blue-500/20 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <p className="text-gray-300 text-sm">{items.join(", ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* =========================================
   EXPERIENCE
========================================= */
const Experience = () => {
  const jobs = [
    {
      company: "PNC Financial Services, USA",
      role: "Java Full Stack Developer",
      dates: "Jul 2024 – Present",
      bullets: [
        "Architected Spring Boot microservices reducing API latency.",
        "Developed React.js dashboards improving UX speed.",
        "Integrated Kafka event-driven pipelines improving reliability.",
        "Built AWS-native Lambda + API Gateway microservices.",
      ],
    },
    {
      company: "Zensar Technologies, India",
      role: "Java Full Stack Developer",
      dates: "2021 – 2023",
      bullets: [
        "Built scalable REST APIs with OAuth2 security.",
        "Improved SQL performance by 27%.",
        "Developed Angular UI dashboards.",
        "Implemented RabbitMQ message workflows.",
      ],
    },
    {
      company: "Fusion Software Technologies, India",
      role: "Junior Developer",
      dates: "2019 – 2021",
      bullets: [
        "Developed Spring MVC modules.",
        "Developed Angular components.",
        "Containerized apps using Docker + Azure.",
      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-black/40 border border-blue-500/20 shadow-xl"
          >
            <h3 className="text-2xl font-bold">{job.company}</h3>
            <p className="text-gray-300 italic">
              {job.role} | {job.dates}
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-3 space-y-2 text-sm">
              {job.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* =========================================
   EDUCATION
========================================= */
const Education = () => (
  <section className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-400 mb-12">Education</h2>

    <div className="p-8 rounded-2xl bg-black/40 border border-blue-500/20 shadow-xl">
      <h3 className="text-2xl font-semibold">University of Central Missouri</h3>
      <p className="text-gray-300 text-lg mt-2">
        Master of Science in Computer Science
      </p>
      <p className="text-blue-400 text-sm mt-1">Graduated: December 2024</p>
    </div>
  </section>
);

/* =========================================
   CONTACT (FormSubmit)
========================================= */
const Contact = () => {
  const query = new URLSearchParams(window.location.search);
  const success = query.get("success");

  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-12">Contact Me</h2>

      <form
        action="https://formsubmit.co/saikumarkaipelly24@gmail.com"
        method="POST"
        className="p-8 rounded-2xl bg-black/40 border border-blue-500/20 shadow-xl space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
        <input type="hidden" name="_autoresponse" value="Thank you for contacting me." />
        <input type="hidden" name="_next" value="https://saikumar-kaipelly-portfolio-site.vercel.app/#/contact?success=true" />

        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-3 bg-black/60 border border-blue-500/30 rounded text-white"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-black/60 border border-blue-500/30 rounded text-white"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 bg-black/60 border border-blue-500/30 rounded text-white"
          required
        />

        <button className="w-full py-3 bg-blue-600/40 border border-blue-500/40 rounded text-white hover:bg-blue-600/60">
          Send Message
        </button>
      </form>

      {success && (
        <p className="text-green-400 mt-4 font-semibold">
          Message sent successfully ✔
        </p>
      )}

      <div className="mt-6 text-gray-300 text-sm">
        <p><FiMail className="inline mr-1" /> saikumarkaipelly24@gmail.com</p>
        <p><FiPhone className="inline mr-1" /> 816-352-4575</p>
      </div>
    </section>
  );
};

/* =========================================
   MAIN APP
========================================= */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Home /></Layout>} />
        <Route path="/skills" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Skills /></Layout>} />
        <Route path="/experience" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Experience /></Layout>} />
        <Route path="/education" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Education /></Layout>} />
        <Route path="/contact" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}
