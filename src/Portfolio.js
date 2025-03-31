import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone } from 'react-icons/fi';

export default function Portfolio() {
  const [page, setPage] = useState('home');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const backgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1650&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const navButtons = [
    { label: 'Skills', page: 'skills' },
    { label: 'Experience', page: 'experience' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <div className="min-h-screen text-white font-sans relative" style={backgroundStyle}>
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
        <>
          {/* Top-Left Name Display */}
          <div className="absolute top-4 left-6 z-40 text-2xl font-bold text-cyan-300 animate-pulse">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              Sai Kumar Kaipelly
            </motion.div>
          </div>

          {/* Home Navigation Buttons */}
          {page === 'home' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-screen flex flex-col justify-center items-center text-center px-4 backdrop-blur-sm bg-black/60"
            >
              <h1 className="text-5xl font-extrabold mb-8">Welcome</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {navButtons.map((btn, idx) => (
                  <motion.button
                    key={btn.page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPage(btn.page)}
                    className="px-8 py-4 text-xl rounded-xl font-semibold bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 shadow-xl hover:shadow-2xl transition-transform"
                  >
                    {btn.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Page */}
          {page === 'skills' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-20 px-6 bg-black/70">
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
          )}

          {/* Experience Page */}
          {page === 'experience' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-20 px-6 bg-black/70">
              <h2 className="text-4xl font-bold text-center mb-10">Professional Experience</h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {[
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
                ].map((exp, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-gray-800 p-6 rounded-xl cursor-pointer">
                    <h3 className="text-2xl font-bold text-pink-400">{exp.company}</h3>
                    <p className="text-sm italic">{exp.role} | {exp.duration}</p>
                    <ul className="list-disc pl-6 mt-3 text-sm space-y-1">
                      {exp.work.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contact Page */}
          {page === 'contact' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-20 px-6 bg-black/70">
              <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
              <form className="max-w-xl mx-auto space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600" />
                <textarea rows="5" placeholder="Your Message" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded font-semibold text-white hover:from-blue-500 hover:to-cyan-500 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
