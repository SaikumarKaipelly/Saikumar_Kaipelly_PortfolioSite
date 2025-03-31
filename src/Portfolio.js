// ✅ FULL SUPERCHARGED PORTFOLIO PROJECT (ALL COMPONENTS)
import { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiArrowUpRight } from 'react-icons/fi';
import './App.css';

// Theme context
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

// Layout wrapper with theme toggle and page container
function Layout({ children }) {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300 font-sans`}>
      <div className="flex justify-between items-center p-6">
        <h1 onClick={() => (window.location.href = '/')} className="text-2xl font-bold cursor-pointer text-cyan-400">Sai Kumar Kaipelly</h1>
        <div className="flex gap-4 items-center">
          <a href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf" download className="text-sm border border-green-400 rounded px-3 py-1 flex items-center gap-2 hover:bg-green-400/10">
            Resume <FiArrowUpRight />
          </a>
          <button onClick={toggleTheme}>{darkMode ? <FiSun /> : <FiMoon />}</button>
        </div>
      </div>
      <main className="px-4 pb-10">{children}</main>
    </div>
  );
}

// Hero section
function Hero() {
  return (
    <div className="text-center py-24">
      <h1 className="text-5xl font-extrabold mb-4">Hi! I'm Sai 👋</h1>
      <p className="text-lg max-w-2xl mx-auto">
        A passionate Full Stack Developer with expertise in Java, Spring Boot, React, Angular, AWS, and modern web technologies.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="/projects" className="bg-blue-500 px-5 py-2 rounded text-white">Projects</a>
        <a href="/about" className="bg-purple-500 px-5 py-2 rounded text-white">About Me</a>
        <a href="/contact" className="bg-green-500 px-5 py-2 rounded text-white">Contact</a>
      </div>
    </div>
  );
}

// Projects section with cards
function Projects() {
  const data = [
    { title: 'Portfolio Website', tech: ['React', 'Tailwind'], link: '#', code: '#' },
    { title: 'E-Commerce App', tech: ['Node.js', 'MongoDB'], link: '#', code: '#' },
  ];
  return (
    <div className="py-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((proj, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-bold text-cyan-300">{proj.title}</h3>
            <p className="text-sm text-gray-400">{proj.tech.join(', ')}</p>
            <div className="flex gap-4 mt-3 text-sm">
              <a href={proj.link} className="text-blue-400 hover:underline">Live</a>
              <a href={proj.code} className="text-green-400 hover:underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// About section
function About() {
  return (
    <div className="py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed">
        With 4+ years in full stack development, I enjoy solving real-world problems through clean, efficient code and elegant design.
      </p>
      <div className="mt-8 text-sm italic text-gray-400">“Sai is incredibly consistent, creative, and reliable.” — Former Manager</div>
    </div>
  );
}

// Resume viewer (iframe based)
function Resume() {
  return (
    <div className="py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Interactive Resume</h2>
      <iframe src="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf" className="w-full h-[80vh] border rounded-lg"></iframe>
    </div>
  );
}

// Contact form
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="py-16 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      {submitted ? (
        <p className="text-center text-green-500">Thank you! Your message has been sent.</p>
      ) : (
        <form action="https://formspree.io/f/xdoqkzyz" method="POST" onSubmit={() => setSubmitted(true)} className="space-y-4">
          <input name="name" type="text" required placeholder="Your Name" className="w-full p-3 rounded bg-gray-900 text-white" />
          <input name="email" type="email" required placeholder="Your Email" className="w-full p-3 rounded bg-gray-900 text-white" />
          <textarea name="message" required placeholder="Your Message" className="w-full p-3 rounded bg-gray-900 text-white h-32"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded">Send Message</button>
        </form>
      )}
    </div>
  );
}

// Fun facts
function FunFacts() {
  const facts = ["I love chess ♟️", "Big fan of EDM 🎧", "Explore AI projects 🤖"];
  return (
    <div className="py-16 text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Fun Facts</h2>
      <ul className="space-y-3">
        {facts.map((fact, i) => (
          <li key={i} className="text-lg text-cyan-400">{fact}</li>
        ))}
      </ul>
    </div>
  );
}

// Blog placeholder
function Blog() {
  return (
    <div className="py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Case Studies & Blog</h2>
      <p className="text-gray-400">Coming soon... real-world project write-ups and technical insights.</p>
    </div>
  );
}

// Page transitions with AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/fun" element={<Layout><FunFacts /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
      </Routes>
    </AnimatePresence>
  );
}

// Main App component
export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') !== 'light');
  useEffect(() => localStorage.setItem('theme', darkMode ? 'dark' : 'light'), [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme: () => setDarkMode(!darkMode) }}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeContext.Provider>
  );
}
