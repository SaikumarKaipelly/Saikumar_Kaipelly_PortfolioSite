import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

const backgroundImageUrl = 'https://unsplash.com/photos/black-computer-keyboard-DuHKoV44prg';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white font-sans relative" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute top-4 left-6 z-40 text-2xl font-bold text-cyan-300 cursor-pointer" onClick={() => navigate('/')}>Sai Kumar Kaipelly</div>
      <div className="absolute top-4 right-6 z-40 flex gap-4 items-center">
        <a href="https://www.linkedin.com/in/saikumarkaipelly" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FiLinkedin size={24} />
        </a>
        <a href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf" download className="hover:text-green-400 flex items-center gap-1 text-sm border px-3 py-1 rounded border-green-500 bg-green-600/10">
          <FiDownload /> <span>Resume</span>
        </a>
      </div>
      <main className="backdrop-blur bg-black/60 min-h-screen pt-24 pb-10 px-4">{children}</main>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
        <TypeAnimation
          sequence={["Java Full Stack Developer", 2000, "Cloud Engineer", 2000, "Software Craftsman", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="max-w-2xl mb-8 text-lg text-gray-300 backdrop-blur bg-black/40 px-6 py-4 rounded-xl">
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
      <div className="text-center mt-10 space-y-2 text-sm text-gray-300">
        <div><FiMail className="inline" /> saikumar.k@mymailshub.com</div>
        <div><FiPhone className="inline" /> 816-352-4575</div>
      </div>
    </motion.div>
  );
};

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
        </Routes>
      )}
    </Router>
  );
}

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
          <div key={idx} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-pink-400">{exp.company}</h3>
            <p className="text-sm italic">{exp.role} | {exp.duration}</p>
            <ul className="list-disc pl-6 mt-3 text-sm space-y-1">
              {exp.work.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
