import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone, FiSun, FiMoon } from 'react-icons/fi';

export default function Portfolio() {
  const [page, setPage] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const skills = {
    Languages: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    Frontend: ['React.js', 'Angular.js', 'HTML5', 'CSS3', 'Bootstrap', 'Redux'],
    Backend: ['Spring Boot', 'Spring MVC', 'Node.js', 'Express.js', 'GraphQL'],
    Cloud_DevOps: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub', 'CI/CD']
  };

  const experiences = [
    {
      company: 'PNC Financial Services',
      role: 'Java Full Stack Developer',
      duration: 'Jul 2024 – Present',
      details: [
        'Optimized React caching to reduce page load time by 25%',
        'Used Spring Boot auto-configuration to speed up development by 20%',
        'Integrated OAuth 2.0 and enhanced security with AWS IAM & VPC',
        'Adopted GraphQL for efficient data fetching'
      ],
      skills: ['React', 'Spring Boot', 'GraphQL', 'AWS', 'OAuth 2.0']
    },
    {
      company: 'Zensar Technologies',
      role: 'Java Full Stack Developer',
      duration: 'Jun 2021 – Jun 2023',
      details: [
        'Built modular Angular apps improving reusability by 40%',
        'Used Java 11 and Spring Boot for scalable backend services',
        'Streamlined data with GraphQL and MongoDB integration',
        'Used Mockito for test coverage and AWS CodeDeploy for CI/CD'
      ],
      skills: ['Angular', 'Java 11', 'GraphQL', 'MongoDB', 'CI/CD']
    },
    {
      company: 'Fusion Software Technologies',
      role: 'Java Full Stack Developer',
      duration: 'Jan 2020 – May 2021',
      details: [
        'Built microservices and dynamic Angular UI',
        'Wrote unit tests with JUnit and automated API testing',
        'Deployed to AWS EKS with scaling policies'
      ],
      skills: ['Microservices', 'JUnit', 'Angular', 'AWS EKS']
    }
  ];

  return (
    <div className={`${darkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900'} min-h-screen font-sans transition-colors duration-500`}>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-900 to-black text-white text-5xl font-bold"
          >
            Sai Kumar Kaipelly
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <nav className="flex justify-between items-center px-8 py-6 sticky top-0 z-50 bg-opacity-80 backdrop-blur bg-black">
            <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setPage('home')}>Portfolio</h1>
            <div className="flex gap-4 items-center">
              <button onClick={() => setPage('skills')}>Skills</button>
              <button onClick={() => setPage('experience')}>Experience</button>
              <button onClick={() => setPage('contact')}>Contact</button>
              <button onClick={toggleTheme} title="Toggle Theme">
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
              <a href="https://www.linkedin.com/in/saikumarkaipelly" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
              <a href="https://your-vercel-site.vercel.app/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf" target="_blank" rel="noopener noreferrer"><FiDownload /></a>
            </div>
          </nav>

          <main className="px-8 py-10">
            {page === 'home' && (
              <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
                <p className="text-lg">Java Full Stack Developer passionate about building dynamic web applications.</p>
              </motion.section>
            )}

            {page === 'skills' && (
              <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-gray-800 p-4 rounded-xl">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{category.replace('_', ' & ')}</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {items.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </motion.section>
            )}

            {page === 'experience' && (
              <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-3xl font-bold mb-4 text-center">Professional Experience</h2>
                {experiences.map((exp, i) => (
                  <div key={i} className="bg-gray-800 p-4 rounded-xl cursor-pointer" onClick={() => setExpandedCompany(exp.company === expandedCompany ? null : exp.company)}>
                    <h3 className="text-xl font-semibold text-pink-400">{exp.company}</h3>
                    <p className="text-sm italic">{exp.role} | {exp.duration}</p>
                    {expandedCompany === exp.company && (
                      <div className="mt-4 text-sm">
                        <ul className="list-disc pl-6 space-y-1">
                          {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
                        </ul>
                        <p className="mt-2"><b>Skills used:</b> {exp.skills.join(', ')}</p>
                      </div>
                    )}
                  </div>
                ))}
              </motion.section>
            )}

            {page === 'contact' && (
              <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                <h2 className="text-3xl font-bold mb-6 text-pink-400">Contact Me</h2>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-center items-center gap-2"><FiMail /> saikumar.k@mymailshub.com</div>
                  <div className="flex justify-center items-center gap-2"><FiPhone /> 816-352-4575</div>
                </div>
              </motion.section>
            )}
          </main>

          <footer className="text-center py-6 text-sm opacity-80 border-t border-gray-700">
            © {new Date().getFullYear()} Sai Kumar Kaipelly
          </footer>
        </>
      )}
    </div>
  );
}
