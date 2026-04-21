import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Meet the Stranger',
    date: '2023',
    description: 'Built a real-time video chat application using WebRTC, enabling peer-to-peer communication with low latency. Implemented frontend using HTML, CSS, and JavaScript, focusing on debugging, performance optimization, and seamless user interaction.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    github: 'https://github.com/aadinajain18/Meet-the-stranger-Web-application',
  },
  {
    id: '02',
    title: 'Smart Expense Tracker (AI-powered)',
    date: '2024',
    description: 'Developed a scalable full-stack Smart Expense Tracker using React, Node.js, and MongoDB with secure authentication and REST APIs, featuring AI-powered insights, a chatbot for natural language queries, real-time sync, and voice-based expense entry. Deployed on Render and familiar with cloud deployment workflows. Followed Agile practices and collaborated using Git for version control.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    github: 'https://github.com/aadinajain18/smart-expense-tracker',
  },
  {
    id: '03',
    title: 'Pack Track AI',
    date: '2026',
    description: 'Developed an AI-based parcel verification system using Python, YOLO, and TensorFlow for object detection and quality analysis. Built backend APIs using Flask for data processing and integrated automation workflows to improve operational efficiency.',
    tech: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'Flask'],
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-24">
      <div className="container mx-auto">
        <div className="section-title-layered">
          <span className="bg">Projects</span>
          <h2 className="main">Projects</h2>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.02,
                rotateX: index % 2 === 0 ? 2 : -2,
                rotateY: index % 2 === 0 ? -2 : 2,
                z: 50
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="group relative grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 hover:glow-border perspective-1000"
            >
              <div className="text-4xl font-mono font-black text-neon-teal/20 group-hover:text-neon-teal transition-colors duration-500">
                {project.id}
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-neon-teal transition-colors duration-500">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-text-muted">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-neon-teal transition-colors interactive"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs font-mono tracking-widest text-neon-teal/60 uppercase">
                  {project.date}
                </p>

                <p className="text-text-secondary leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-white/10 rounded-full text-text-muted group-hover:border-neon-teal/30 group-hover:text-text-primary transition-all duration-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
