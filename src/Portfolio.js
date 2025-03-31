import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone, FiSun, FiMoon } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-cyan-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

// Updated Layout with Background Image or Video
const Layout = ({ children, darkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Option 1: Background Image (Uncomment this for image)
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop'; // Stunning mountain landscape

  // Option 2: Background Video (Uncomment this for video)
  // const backgroundVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1610-large.mp4'; // Cosmic video

  return (
    <div className={`min-h-screen font-sans relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <CustomCursor />
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})`, opacity }}
      />
      {/* Background Video (Uncomment this block and comment the image block above if you want a video) */}
      {/* <motion.video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        style={{ opacity }}
      >
        <source src={backgroundVideoUrl} type="video/mp4" />
      </motion.video> */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-opacity-80 backdrop-blur-md py-4 px-6 flex justify-between items-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
          onClick={() => navigate('/')}
        >
          Sai Kumar Kaipelly
        </motion.h1>
        <nav className="flex gap-6 items-center">
          {['skills', 'experience', 'contact'].map((item, idx) => (
            <motion.a
              key={item}
              href={`/${item}`}
              onClick={(e) => { e.preventDefault(); navigate(`/${item}`); }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, color: '#00e6e6' }}
              className="text-sm font-medium"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ rotate: 180 }}
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
          <motion.a href="https://www.linkedin.com/in/saikumarkaipelly" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="hover:text-blue-500">
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf" download whileHover={{ scale: 1.05 }} className="flex items-center gap-1 text-sm border px-2 py-1 rounded border-green-500 bg-green-600/20 hover:bg-green-600/40 transition-colors">
            <FiDownload /> Resume
          </motion.a>
        </nav>
      </header>
      <main className="relative z-10 pt-24 pb-10 px-4">{children}</main>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center text-center min-h-[calc(100vh-6rem)]"
    >
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-opacity-20 bg-gray-800 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700/50"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={["Java Full Stack Developer", 2000, "Cloud Engineer", 2000, "Software Craftsman", 2000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
            Crafting scalable, secure, and performant web applications with 4+ years of experience in Java, React, AWS, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['skills', 'experience', 'contact'].map((item, idx) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/${item}`)}
                className={`px-6 py-3 text-lg rounded-lg text-white shadow-lg ${idx === 0 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : idx === 1 ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gradient-to-r from-yellow-400 to-orange-500'}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

const About = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-20 max-w-4xl mx-auto text-center"
  >
    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</h2>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
      I'm a detail-oriented Full Stack Developer with over 4 years of experience building scalable web applications and intuitive user interfaces. Passionate about clean code, creative UI, and cutting-edge technology.
    </p>
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-opacity-20 bg-gray-800 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-gray-700/50"
    >
      <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Testimonials</h3>
      <blockquote className="text-sm italic text-gray-400">
        "Sai is a dedicated and talented developer who always delivers high-quality work. He's a great asset to any team!" – Former Manager
      </blockquote>
    </motion.div>
  </motion.section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
    else setErrors(newErrors);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 max-w-xl mx-auto text-center"
    >
      <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contact Me</h2>
      {submitted ? (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400 font-semibold text-xl">Thank you! Your message has been sent.</motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-opacity-20 bg-gray-800 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700/50">
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className={`w-full p-3 rounded bg-gray-900/50 text-white border ${errors.name ? 'border-red-500' : 'border-gray-600/50'} focus:ring-2 focus:ring-cyan-400`}
              aria-label="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your Email"
              className={`w-full p-3 rounded bg-gray-900/50 text-white border ${errors.email ? 'border-red-500' : 'border-gray-600/50'} focus:ring-2 focus:ring-cyan-400`}
              aria-label="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Message"
              className={`w-full p-3 rounded bg-gray-900/50 text-white border ${errors.message ? 'border-red-500' : 'border-gray-600/50'} focus:ring-2 focus:ring-cyan-400`}
              aria-label="Your Message"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 transition-colors"
          >
            Send Message
          </motion.button>
        </form>
      )}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 space-y-2 text-sm text-gray-300">
        <div><FiMail className="inline mr-2" /> saikumar.k@mymailshub.com</div>
        <div><FiPhone className="inline mr-2" /> 816-352-4575</div>
      </motion.div>
    </motion.section>
  );
};

const skillsData = [
  { category: 'Languages', skills: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'], progress: 90 },
  { category: 'Frontend', skills: ['React.js', 'Angular.js', 'HTML5', 'CSS3', 'Bootstrap', 'Redux'], progress: 85 },
  { category: 'Backend', skills: ['Spring Boot', 'Spring MVC', 'Node.js', 'Express.js', 'GraphQL'], progress: 88 },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub', 'CI/CD'], progress: 80 },
];

const Skills = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="py-20 max-w-5xl mx-auto"
  >
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My Skills</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {skillsData.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="bg-opacity-20 bg-gray-800 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700/50"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.category}</h3>
          <p className="text-sm text-gray-300 mb-4">{skill.skills.join(', ')}</p>
          <div className="w-full bg-gray-700/50 rounded-full h-2.5">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const experiences = [
  { company: 'PNC Financial Services', role: 'Java Full Stack Developer', duration: 'Jul 2024 – Present', work: ['Optimized React caching, improved load time by 25%', 'Implemented OAuth 2.0 and AWS IAM', 'Adopted GraphQL and enhanced Spring Boot efficiency'] },
  { company: 'Zensar Technologies', role: 'Java Full Stack Developer', duration: 'Jun 2021 – Jun 2023', work: ['Modular Angular design with enhanced testability', 'Built scalable Java 11 services with GraphQL and MongoDB'] },
  { company: 'Fusion Software Technologies', role: 'Java Full Stack Developer', duration: 'Jan 2020 – May 2021', work: ['Built microservices and Angular interfaces', 'Containerized apps using AWS EKS'] },
];

const Experience = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="py-20 max-w-5xl mx-auto"
  >
    <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Professional Experience</h2>
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="bg-opacity-20 bg-gray-800 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-pink-400">{exp.company}</h3>
          <p className="text-sm italic text-gray-400">{exp.role} | {exp.duration}</p>
          <ul className="list-disc pl-6 mt-3 text-sm text-gray-300 space-y-2">
            {exp.work.map((w, i) => (
              <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>{w}</motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const SkillsLazy = lazy(() => Promise.resolve({ default: Skills }));
const ExperienceLazy = lazy(() => Promise.resolve({ default: Experience }));
const ContactLazy = lazy(() => Promise.resolve({ default: Contact }));
const AboutLazy = lazy(() => Promise.resolve({ default: About }));

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white text-5xl md:text-6xl font-extrabold tracking-widest"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="relative"
            >
              Sai Kumar Kaipelly
              <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 blur-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!showSplash && (
        <Suspense fallback={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 text-gray-400">Loading...</motion.div>}>
          <Routes>
            <Route path="/" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><Home /></Layout>} />
            <Route path="/skills" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><SkillsLazy /></Layout>} />
            <Route path="/experience" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><ExperienceLazy /></Layout>} />
            <Route path="/contact" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><ContactLazy /></Layout>} />
            <Route path="/about" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><AboutLazy /></Layout>} />
            <Route path="*" element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}><div className="text-center py-20 text-gray-400">404 - Page Not Found</div></Layout>} />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
}
