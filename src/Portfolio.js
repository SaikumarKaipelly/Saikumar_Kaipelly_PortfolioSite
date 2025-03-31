import { motion } from 'framer-motion';
import { FiLinkedin, FiDownload, FiMail, FiPhone } from 'react-icons/fi';
import { useState } from 'react';

export default function Portfolio() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 font-sans overflow-x-hidden">
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-sm bg-gray-800/40 shadow-lg sticky top-0 z-50">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-cyan-400 drop-shadow-md cursor-pointer"
          onClick={() => setPage('home')}
        >
          Sai Kumar Kaipelly
        </motion.h1>
        <div className="flex space-x-6 items-center">
          <button
            onClick={() => setPage('contact')}
            className="text-sm hover:text-cyan-400 transition-colors"
          >
            Contact
          </button>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/saikumarkaipelly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FiLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://your-vercel-site.vercel.app/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-cyan-500 text-cyan-300 rounded-xl hover:bg-cyan-600/10 transition-colors"
          >
            <FiDownload />
            <span>Resume</span>
          </motion.a>
        </div>
      </nav>

      <main className="px-8">
        {page === 'home' && (
          <>
            <section className="py-20 flex flex-col items-center justify-center text-center">
              <motion.h2
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-semibold mb-4 text-white"
              >
                Java Full Stack Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="max-w-2xl text-lg text-gray-300 mb-8"
              >
                4+ years experienced in Java, Spring Boot, React, Angular, AWS, Docker, Kubernetes, GraphQL, CI/CD, and more. Passionate about crafting performant, secure, and elegant web applications.
              </motion.p>
            </section>

            <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/60 p-6 rounded-2xl shadow-xl border border-gray-700 backdrop-blur"
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
                className="bg-gray-800/60 p-6 rounded-2xl shadow-xl border border-gray-700 backdrop-blur"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Experience</h3>
                <ul className="text-left space-y-3 text-sm text-gray-200">
                  <li><b>PNC Financial Services</b><br />Optimized React & Spring Boot, improved AWS security.</li>
                  <li><b>Zensar Technologies</b><br />Enhanced Angular, GraphQL API integration, Java 11 services.</li>
                  <li><b>Fusion Software</b><br />Microservices + Angular UI, AWS EKS deployments.</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/60 p-6 rounded-2xl shadow-xl border border-gray-700 backdrop-blur"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Education</h3>
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
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8 max-w-xl">Feel free to reach out for opportunities, collaborations, or just to connect!</p>
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-center space-x-3">
                <FiMail className="text-cyan-400" />
                <span>saikumar.k@mymailshub.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FiPhone className="text-cyan-400" />
                <span>816-352-4575</span>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="py-6 text-center bg-gray-900 border-t border-gray-700 text-gray-500 text-sm">
        © {new Date().getFullYear()} Sai Kumar Kaipelly. All Rights Reserved.
      </footer>
    </div>
  );
}
