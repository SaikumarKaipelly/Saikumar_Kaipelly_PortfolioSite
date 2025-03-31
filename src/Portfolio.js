import { motion } from 'framer-motion';
import { FiLinkedin, FiDownload } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold">Sai Kumar Kaipelly</h1>
        <div className="flex space-x-6 items-center">
          <a
            href="https://www.linkedin.com/in/saikumarkaipelly"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="/Sai_Kumar_Kaipelly_Java_Full_Stack_Developer.pdf"
            download
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <FiDownload />
            <span>Resume</span>
          </a>
        </div>
      </nav>

      <main className="px-8">
        <section className="py-16 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-semibold mb-4"
          >
            Java Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl text-lg mb-8"
          >
            4+ years experienced professional specializing in Java, Spring Boot, React, Angular, AWS, Docker, Kubernetes, and DevOps practices.
          </motion.p>
        </section>

        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="text-left list-disc pl-5">
              <li>Java, Spring Boot, React, Angular</li>
              <li>AWS, Docker, Kubernetes, GraphQL</li>
              <li>OAuth 2.0, IAM, VPC</li>
              <li>CI/CD: Jenkins, AWS CodePipeline</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <ul className="text-left space-y-3">
              <li><b>PNC Financial Services</b> - Optimized React & Spring Boot implementations, AWS security.</li>
              <li><b>Zensar Technologies</b> - Enhanced Angular modularity, Java 11 services, GraphQL.</li>
              <li><b>Fusion Software Technologies</b> - Microservices, Angular UI, Containerized apps on AWS EKS.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p>Master of Computer Science, University of Central Missouri</p>
          </motion.div>
        </section>
      </main>

      <footer className="py-4 text-center bg-gray-800">
        © {new Date().getFullYear()} Sai Kumar Kaipelly. All Rights Reserved.
      </footer>
    </div>
  );
}
