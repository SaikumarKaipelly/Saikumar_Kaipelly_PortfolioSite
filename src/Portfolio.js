import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone, FiGithub, FiExternalLink } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
//import { loadFull } from 'tsparticles';

const backgroundImageUrl = process.env.PUBLIC_URL + '/bg-pattern.jpg';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white font-sans relative">
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImageUrl}
          alt="background"
          className="w-full h-full object-cover fixed"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur"></div>
      </div>
      <div className="absolute top-4 left-6 z-40 text-2xl font-bold text-cyan-300 cursor-pointer" onClick={() => navigate('/')}>Sai Kumar Kaipelly</div>
      <div className="absolute top-4 right-6 z-40 flex gap-4 items-center">
        <a href="https://www.linkedin.com/in/saikumarkaipelly" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FiLinkedin size={24} />
        </a>
        <a href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf" download className="hover:text-green-400 flex items-center gap-1 text-sm border px-3 py-1 rounded border-green-500 bg-green-600/10">
          <FiDownload /> <span>Resume</span>
        </a>
      </div>
      <main className="min-h-screen pt-24 pb-10 px-4">{children}</main>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A dynamic portfolio built with React and animations.',
      stack: ['React', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/',
      live: 'https://yourdomain.vercel.app/'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard for tracking orders, users, and analytics.',
      stack: ['React', 'Chart.js', 'Node.js'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
            <div className="text-xs mb-2 text-gray-400">{proj.stack.join(', ')}</div>
            <div className="flex gap-4 text-sm">
              <a href={proj.github} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1"><FiGithub /> Code</a>
              <a href={proj.live} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1"><FiExternalLink /> Live</a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">About Me</h2>
    <p className="text-lg text-gray-300 leading-relaxed">
      I'm a detail-oriented Full Stack Developer with over 4 years of experience building scalable web applications and intuitive user interfaces. Passionate about combining clean code, creative UI, and cutting-edge technology to solve real-world problems.
    </p>
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-3">Testimonials</h3>
      <div className="bg-gray-800 p-4 rounded-xl text-sm italic text-gray-400">
        "Sai is a dedicated and talented developer who always delivers high-quality work. He's a great asset to any team!" – Former Manager
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
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
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/skills" element={<Layout><Skills /></Layout>} />
          <Route path="/experience" element={<Layout><Experience /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
        </Routes>
      )}
    </Router>
  );
}
