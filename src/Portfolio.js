import { motion } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone } from 'react-icons/fi';
import { useState } from 'react';
import bgImage from './assets/bg-pattern.jpg'; // Add a background image to your assets folder

export default function Portfolio() {
  const [page, setPage] = useState('home');

  return (
    <div
      className="min-h-screen text-gray-100 font-sans overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backdropFilter: 'blur(5px)'
      }}
    >
      <nav className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-purple-900/80 via-gray-900/80 to-cyan-900/80 shadow-xl sticky top-0 z-50">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-cyan-300 drop-shadow-lg cursor-pointer"
          onClick={() => setPage('home')}
        >
          Sai Kumar Kaipelly
        </motion.h1>
        <div className="flex space-x-6 items-center">
          <button
            onClick={() => setPage('contact')}
            className="text-sm hover:text-pink-400 transition-colors font-medium"
          >
            Contact
          </button>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/saikumarkaipelly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FiLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://your-vercel-site.vercel.app/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-pink-500 text-pink-300 rounded-xl hover:bg-pink-500/20 transition-colors"
          >
            <FiDownload />
            <span>Resume</span>
          </motion.a>
        </div>
      </nav>

      <main className="px-8">
        {page === 'home' && (
          <>
            <section className="py-24 flex flex-col items-center justify-center text-center">
              <motion.h2
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl font-extrabold text-white tracking-tight drop-shadow-lg"
              >
                Java Full Stack Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="max-w-2xl text-xl text-gray-200 mt-6 mb-10 backdrop-blur-sm bg-black/30 px-6 py-4 rounded-xl"
              >
                4+ years of experience in building powerful, secure, and modern web applications using Java, Spring Boot, React, Angular, and AWS. I bring ideas to life with code and creativity.
              </motion.p>
            </section>

            <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 p-6 rounded-2xl shadow-xl border border-cyan-700/40 backdrop-blur"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Skills</h3>
                <ul className="text-left list-disc pl-5 space-y-1 text-sm text-gray-200">
                  <li>Java, Spring Boot, React, Angular</li>
                  <li>AWS, Docker, Kubernetes, GraphQL</li>
                  <li>OAuth 2.0, IAM, VPC</li>
                  <li>CI/CD: Jenkins, AWS CodePipeline</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-pink-900 p-6 rounded-2xl shadow-xl border border-pink-500/40 backdrop-blur"
              >
                <h3 className="text-2xl font-bold mb-4 text-pink-300">Experience</h3>
                <ul className="text-left space-y-3 text-sm text-gray-200">
                  <li><b>PNC Financial Services</b><br />Optimized React & Spring Boot, improved AWS security.</li>
                  <li><b>Zensar Technologies</b><br />Enhanced Angular, GraphQL API integration, Java 11 services.</li>
                  <li><b>Fusion Software</b><br />Microservices + Angular UI, AWS EKS deployments.</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 p-6 rounded-2xl shadow-xl border border-blue-500/40 backdrop-blur"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Education</h3>
                <p className="text-sm text-gray-200">Master of Computer Science,<br />University of Central Missouri</p>
              </motion.div>
            </section>
          </>
        )}

        {page === 'contact' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20 flex flex-col items-center text-center"
          >
            <h2 className="text-4xl font-extrabold text-pink-400 mb-6">Get in Touch</h2>
            <p className="text-gray-200 mb-8 max-w-xl text-lg">Let’s connect and build something amazing together.</p>
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-center space-x-3">
                <FiMail className="text-pink-400" />
                <span>saikumar.k@mymailshub.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FiPhone className="text-pink-400" />
                <span>816-352-4575</span>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="py-6 text-center bg-black/50 border-t border-gray-700 text-gray-300 text-sm">
        © {new Date().getFullYear()} Sai Kumar Kaipelly. All Rights Reserved.
      </footer>
    </div>
  );
}
