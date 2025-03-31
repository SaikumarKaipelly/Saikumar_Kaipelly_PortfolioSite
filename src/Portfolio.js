
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone, FiSun, FiMoon } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';

const backgroundImageUrl = process.env.PUBLIC_URL + '/bg-pattern.jpg';

const Layout = ({ children, darkMode, toggleTheme }) => {
  const navigate = useNavigate();
  return (
    <div className={`min-h-screen font-sans relative ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 z-0">
        <Particles options={{
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: darkMode ? '#ffffff' : '#000000' },
          }
        }} />
      </div>
      <div className="absolute top-4 left-6 z-40 text-2xl font-bold text-cyan-400 cursor-pointer" onClick={() => navigate('/')}>Sai Kumar Kaipelly</div>
      <div className="absolute top-4 right-6 z-40 flex gap-4 items-center">
        <button onClick={toggleTheme} className="hover:text-yellow-400">
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <a href="https://www.linkedin.com/in/saikumarkaipelly" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FiLinkedin size={20} />
        </a>
        <a href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf" download className="hover:text-green-400 flex items-center gap-1 text-sm border px-2 py-1 rounded border-green-500 bg-green-600/10">
          <FiDownload /> <span>Resume</span>
        </a>
      </div>
      <main className="relative z-10 pt-24 pb-10 px-4 backdrop-blur-md">{children}</main>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        <TypeAnimation
          sequence={["Java Full Stack Developer", 2000, "Cloud Engineer", 2000, "Software Craftsman", 2000]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </h1>
      <p className="max-w-2xl mb-8 text-lg backdrop-blur bg-black/30 px-6 py-4 rounded-xl">
        I’m a passionate full stack developer with 4+ years of experience crafting scalable, secure, and performant web applications. I specialize in Java, Spring Boot, React, Angular, AWS, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigate('/skills')} className="px-6 py-4 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white shadow-lg">Skills</motion.button>
        <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigate('/experience')} className="px-6 py-4 text-xl bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white shadow-lg">Experience</motion.button>
        <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigate('/contact')} className="px-6 py-4 text-xl bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white shadow-lg">Contact</motion.button>
      </div>
    </motion.div>
  );
};

const About = () => (
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="py-10 max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">About Me</h2>
    <p className="text-lg leading-relaxed">
      I'm a detail-oriented Full Stack Developer with over 4 years of experience building scalable web applications and intuitive user interfaces. Passionate about combining clean code, creative UI, and cutting-edge technology to solve real-world problems.
    </p>
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-3">Testimonials</h3>
      <div className="bg-gray-800 p-4 rounded-xl text-sm italic text-gray-300">
        "Sai is a dedicated and talented developer who always delivers high-quality work. He's a great asset to any team!" – Former Manager
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My own professional portfolio built with React and Tailwind.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Manager App',
      description: 'To-do list web app with authentication and cloud sync.',
      tech: ['React', 'Firebase', 'Bootstrap'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-cyan-400 mb-1">{p.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{p.description}</p>
            <p className="text-xs mb-4 text-gray-400">{p.tech.join(', ')}</p>
            <div className="flex gap-4 text-sm">
              <a href={p.github} className="text-blue-400 hover:underline">GitHub</a>
              <a href={p.live} className="text-green-400 hover:underline">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      {submitted ? (
        <div className="text-center text-green-400 font-semibold">Thank you! Your message has been sent.</div>
      ) : (
        <form
          action="https://formspree.io/f/xdoqkzyz"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="max-w-xl mx-auto space-y-6"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded font-semibold text-white hover:from-blue-500 hover:to-cyan-500 transition-colors">
            Send Message
          </button>
        </form>
      )}
      <div className="text-center mt-10 space-y-2 text-sm">
        <div><FiMail className="inline" /> saikumar.k@mymailshub.com</div>
        <div><FiPhone className="inline" /> 816-352-4575</div>
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10">
    <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
    <div className="grid gap-8 max-w-4xl mx-auto">
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Languages</h3>
        <p>Java, C++, Python, JavaScript, TypeScript, SQL</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Frontend</h3>
        <p>React.js, Angular.js, HTML5, CSS3, Bootstrap, Redux</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Backend</h3>
        <p>Spring Boot, Spring MVC, Node.js, Express.js, GraphQL</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Cloud & DevOps</h3>
        <p>AWS, Docker, Kubernetes, Jenkins, GitHub, CI/CD</p>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      company: 'PNC Financial Services',
      role: 'Java Full Stack Developer',
      duration: 'Jul 2024 – Present',
      work: [
        'Optimized React caching, improved load time by 25%',
        'Implemented OAuth 2.0 and AWS IAM',
        'Adopted GraphQL and enhanced Spring Boot efficiency'
      ]
    },
    {
      company: 'Zensar Technologies',
      role: 'Java Full Stack Developer',
      duration: 'Jun 2021 – Jun 2023',
      work: [
        'Modular Angular design with enhanced testability',
        'Built scalable Java 11 services with GraphQL and MongoDB'
      ]
    },
    {
      company: 'Fusion Software Technologies',
      role: 'Java Full Stack Developer',
      duration: 'Jan 2020 – May 2021',
      work: [
        'Built microservices and Angular interfaces',
        'Containerized apps using AWS EKS'
      ]
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Professional Experience</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-pink-400">{exp.company}</h3>
            <p className="text-sm italic">{exp.role} | {exp.duration}</p>
            <ul className="list-disc pl-6 mt-3 text-sm space-y-1">
              {exp.work.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-5xl font-extrabold tracking-widest"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
              Sai Kumar Kaipelly
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!showSplash && (
        <Routes>
          <Route path="/" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><Home /></Layout>} />
          <Route path="/skills" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><Skills /></Layout>} />
          <Route path="/experience" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><Experience /></Layout>} />
          <Route path="/contact" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><Contact /></Layout>} />
          <Route path="/about" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><About /></Layout>} />
          <Route path="/projects" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><Projects /></Layout>} />
        </Routes>
      )}
    </Router>
  );
}
