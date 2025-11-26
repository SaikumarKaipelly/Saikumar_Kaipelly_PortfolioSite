import { useEffect, useState, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiDownload, FiSun, FiMoon, FiMail, FiPhone } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

/* ----------------------------------
   ❌ Removed Custom Cursor Completely
----------------------------------- */

/* ----------------------------------
   Global Background — C4 Tech Blur
----------------------------------- */
const backgroundImageUrl =
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=30"; 
// Super subtle, low-clarity, professional abstract tech background

/* ----------------------------------
   Layout Component (Navigation + Footer)
----------------------------------- */
const Layout = ({ children, darkMode, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0a0a0a] text-white" : "bg-white text-black"} relative`}>
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm -z-10"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* Header */}
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

          {/* Dark/Light toggle */}
          <button onClick={toggleTheme} className="hover:text-blue-400">
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saikumarkaipelly"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FiLinkedin size={20} />
          </a>

          {/* Resume */}
          <a
            href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf"
            download
            className="flex items-center gap-1 border border-blue-500/40 px-3 py-1 rounded hover:bg-blue-600/20"
          >
            <FiDownload /> Resume
          </a>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-24 pb-20 px-4">{children}</main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-xs border-t border-blue-500/20">
        © Sai Kumar Kaipelly 2025 — All Rights Reserved
      </footer>
    </div>
  );
};

/* ----------------------------------
   HOME PAGE (with your real summary)
----------------------------------- */
const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">
        <TypeAnimation
          sequence={[
            "Java Full Stack Developer", 2000,
            "Cloud Engineer", 2000,
            "Software Engineer", 2000
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-10">
        Java Full Stack Developer with 5+ years of experience building secure, scalable, and cloud-ready 
        enterprise applications using Spring Boot, Spring MVC, REST APIs, React.js, Angular, AWS and Azure. 
        Expertise in microservices, event-driven systems, OAuth2.0, JWT, PostgreSQL, MongoDB, DynamoDB, 
        Kafka, RabbitMQ, Docker, Kubernetes, and CI/CD automation with GitHub Actions, GitLab, Jenkins. 
        Strong focus on performance, API optimization, and test-driven development (JUnit, Mockito).
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
   SKILLS (Real Data from Resume) :contentReference[oaicite:1]{index=1}
----------------------------------- */
const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python", "J2EE", "SQL", "PL/SQL"],
    "Frontend": ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Redux", "Angular", "REST API"],
    "Backend": ["Spring Boot", "Spring MVC", "Spring REST", "Spring Cloud", "JPA", "Hibernate"],
    "Security": ["Spring Security", "OAuth2.0", "JWT"],
    "Databases": ["MySQL", "PostgreSQL", "Oracle", "Neo4j", "MongoDB", "Firebase"],
    "Messaging": ["Kafka", "RabbitMQ", "JMS"],
    "Cloud": ["AWS", "Azure"],
    "CI/CD & DevOps": ["Docker", "Kubernetes", "GitHub Actions", "GitLab", "Jenkins"],
    "Testing": ["JUnit", "Mockito", "React Testing Library"],
    "AI Tools": ["GitHub Copilot", "ChatGPT API Integration"]
  };

  return (
    <section className="max-w-5xl mx-auto py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/20 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{category}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ----------------------------------
   EXPERIENCE (Card Layout + Real Resume Data) :contentReference[oaicite:2]{index=2}
----------------------------------- */
const Experience = () => {
  const exp = [
    {
      company: "PNC Financial Services, USA",
      role: "Java Full Stack Developer",
      dates: "July 2024 – Present",
      bullets: [
        "Architected Spring Boot & Spring MVC microservices improving API latency by 32%.",
        "Built Kafka real-time pipelines reducing inter-service sync failures by 41%.",
        "Developed React.js interfaces improving analyst task efficiency by 28%.",
        "Built AWS-native APIs using API Gateway, DynamoDB, CloudFormation.",
        "Implemented Neo4j graph models reducing fraud false-positives by 19%.",
        "Automated CI/CD with GitHub Actions & AI tools increasing release frequency by 25%."
      ]
    },
    {
      company: "Zensar Technologies, India",
      role: "Java Full Stack Developer",
      dates: "June 2021 – June 2023",
      bullets: [
        "Developed Spring REST microservices improving query performance by 27%.",
        "Implemented OAuth2 RBAC reducing unauthorized access by 35%.",
        "Built React.js dashboards improving workflow efficiency by 22%.",
        "Integrated RabbitMQ improving message reliability by 40%.",
        "Developed AWS Lambda & EC2 workloads reducing incident time by 30%.",
        "Containerized workloads using Kubernetes & GitLab pipelines."
      ]
    },
    {
      company: "Fusion Software Technologies, India",
      role: "Jr. Java Full Stack Developer",
      dates: "July 2019 – May 2021",
      bullets: [
        "Developed Spring MVC/Hibernate modules improving query time by 18%.",
        "Built Angular workflows reducing UI defect tickets.",
        "Developed JMS handlers reducing retry rates by 25%.",
        "Containerized microservices with Docker & Azure deployments.",
        "Practiced TDD increasing coverage to 75%."
      ]
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-400">Professional Experience</h2>

      <div className="space-y-10">
        {exp.map((job) => (
          <div
            key={job.company}
            className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-blue-500/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-300">{job.company}</h3>
            <p className="text-gray-300 italic">{job.role} | {job.dates}</p>

            <ul className="list-disc pl-6 mt-3 text-gray-300 space-y-2 text-sm">
              {job.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
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
    <h2 className="text-4xl font-bold mb-10 text-blue-400">Education</h2>

    <div className="bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-blue-500/20 shadow-lg">
      <h3 className="text-2xl font-semibold text-white">University of Central Missouri</h3>
      <p className="text-gray-300 text-lg mt-2">Master of Science in Computer Science</p>
      <p className="text-blue-400 text-sm mt-1">Graduated: December 2024</p>
    </div>
  </section>
);

/* ----------------------------------
   CONTACT (kept same)
----------------------------------- */
const Contact = () => (
  <section className="max-w-xl mx-auto py-16 text-center">
    <h2 className="text-4xl font-bold text-blue-400 mb-10">Contact Me</h2>

    <form
      action="https://formsubmit.co/saikumar.k@mymailshub.com"
      method="POST"
      className="space-y-6 bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-blue-500/20"
    >
      <input type="hidden" name="_captcha" value="false" />

      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 bg-black/60 text-white border border-blue-500/30 rounded"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 bg-black/60 text-white border border-blue-500/30 rounded"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full p-3 bg-black/60 text-white border border-blue-500/30 rounded"
      />

      <button className="w-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-white py-3 rounded">
        Send Message
      </button>
    </form>

    <div className="mt-6 text-gray-300 text-sm">
      <p><FiMail className="inline mr-1" /> saikumar.k@mymailshub.com</p>
      <p><FiPhone className="inline mr-1" /> 816-352-4575</p>
    </div>
  </section>
);

/* ----------------------------------
   MAIN APP (No Splash Cursor Gone)
----------------------------------- */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Suspense fallback={<div className="text-center text-gray-400 py-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Home /></Layout>} />
          <Route path="/skills" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Skills /></Layout>} />
          <Route path="/experience" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Experience /></Layout>} />
          <Route path="/education" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Education /></Layout>} />
          <Route path="/contact" element={<Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}><Contact /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
