import React from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';

export const About: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    let y = 15;

    // Use Times for a more professional serif look matching the original
    doc.setFont('times', 'bold');
    doc.setFontSize(24);
    doc.text('Aadina Jain', pageWidth / 2, y, { align: 'center' });
    y += 6;
    
    doc.setFontSize(9);
    doc.setFont('times', 'normal');
    doc.text('+91-9369921791 | aadinajain@gmail.com', pageWidth / 2, y, { align: 'center' });
    y += 4;
    doc.text('in aadina-jain | github aadinajain18 | https://aadinajain18', pageWidth / 2, y, { align: 'center' });
    y += 4;
    doc.text('Kanpur, Uttar Pradesh - India', pageWidth / 2, y, { align: 'center' });
    y += 10;

    const addSectionHeader = (title: string) => {
      doc.setFont('times', 'bold');
      doc.setFontSize(11);
      doc.text(title, margin, y);
      y += 1.5;
      doc.setLineWidth(0.1);
      doc.line(margin, y, pageWidth - margin, y);
      y += 5;
    };

    // OBJECTIVE
    addSectionHeader('OBJECTIVE');
    doc.setFont('times', 'normal');
    doc.setFontSize(9);
    const objective = "Seeking a challenging position in software engineering to leverage my expertise in problem-solving and web-development. Aiming to contribute to innovative projects at the intersection of artificial intelligence and practical problem-solving in fields.";
    const objLines = doc.splitTextToSize(objective, contentWidth);
    doc.text(objLines, margin, y);
    y += (objLines.length * 4) + 4;

    // EDUCATION
    addSectionHeader('EDUCATION');
    const edu = [
      { 
        name: 'Pranveer Singh Institute of Technology', 
        date: '2022-2026', 
        sub: 'B.tech - Computer Science and Engineering', 
        loc: 'Kanpur, India',
        detail: 'CGPA: 8.33(till 7th semester)' 
      },
      { 
        name: 'Dr.Virendra Swarup Education Centre', 
        date: '2022', 
        sub: 'Higher Secondary', 
        loc: 'Kanpur, India',
        detail: 'Grade: 90.1%' 
      },
      { 
        name: 'Dr.Virendra Swarup Education Centre', 
        date: '2020', 
        sub: 'High school', 
        loc: 'Kanpur, India',
        detail: 'Grade: 92.3%' 
      }
    ];

    edu.forEach(item => {
      doc.setFont('times', 'bold');
      doc.text(`• ${item.name}`, margin, y);
      doc.text(item.date, pageWidth - margin, y, { align: 'right' });
      y += 4;
      doc.setFont('times', 'italic');
      doc.text(item.sub, margin + 3, y);
      doc.setFont('times', 'normal');
      doc.text(item.loc, pageWidth - margin, y, { align: 'right' });
      y += 4;
      doc.text(`• ${item.detail}`, margin + 3, y);
      y += 6;
    });
    y += 2;

    // PROJECTS
    addSectionHeader('PROJECTS');
    const projects = [
      {
        name: 'Meet the Stranger:',
        date: '2023',
        tools: 'Tools: [VS code, HTML, CSS, Javascript, Node.js ]',
        bullets: [
          'Developed a video chat software solution for seamless and secure video communication experience for a wide range of users.',
          'Implemented Web RTC for seamless video calls.',
          'The core technology used in a videotelephony system is digital compression of audio and video streams in real time.'
        ]
      },
      {
        name: 'GPT Checker:',
        date: '2024',
        tools: 'Tools: [VS code, Python packages and libraries ]',
        bullets: [
          'Developed an AI plagiarism detector web application for data.',
          'It is a streamlit application with the ease of understanding and an effective user interface.',
          'Used nltk and transformers to implement the GPT model.'
        ]
      }
    ];

    projects.forEach(proj => {
      doc.setFont('times', 'bold');
      doc.text(`• ${proj.name}`, margin, y);
      doc.text(proj.date, pageWidth - margin, y, { align: 'right' });
      y += 4;
      doc.setFont('times', 'italic');
      doc.setFontSize(8);
      doc.text(proj.tools, margin + 3, y);
      y += 4;
      doc.setFont('times', 'normal');
      doc.setFontSize(9);
      proj.bullets.forEach(bullet => {
        const bLines = doc.splitTextToSize(`• ${bullet}`, contentWidth - 6);
        doc.text(bLines, margin + 3, y);
        y += (bLines.length * 4);
      });
      y += 2;
    });
    y += 4;

    // SKILLS
    addSectionHeader('SKILLS');
    const skills = [
      { label: 'Programming Languages:', val: 'C++, Python, JavaScript, C' },
      { label: 'Web Technologies:', val: 'HTML, CSS, React.js, NodeJs, Figma' },
      { label: 'Database Systems:', val: 'My SQL, MongoDB' },
      { label: 'Other Tools & Technologies:', val: 'Git, GitHub, VS code, Bootstrap, Microsoft Teams' },
      { label: 'Research Skills:', val: 'Problem solving, Project management' }
    ];
    skills.forEach(s => {
      doc.setFont('times', 'bold');
      doc.text(`• ${s.label}`, margin, y);
      doc.setFont('times', 'normal');
      doc.text(s.val, margin + 50, y);
      y += 5;
    });
    y += 4;

    // HONORS AND AWARDS
    addSectionHeader('HONORS AND AWARDS');
    const awards = [
      'AI Agentblazer Champion(Salesforce)',
      '5 star coder in hackerrank',
      'Solved more than 350 questions on leetcode',
      'AWS certified- Cloud Practitioner Essentials',
      'SQL (advanced)'
    ];
    awards.forEach(a => {
      doc.text(`• ${a}`, margin + 3, y);
      y += 4;
    });
    y += 6;

    // CERTIFICATIONS
    addSectionHeader('CERTIFICATIONS');
    const certs = [
      { name: 'Coursera: Introduction to Figma', date: 'March 2024' },
      { name: 'Coursera: Wordpress', date: 'March 2024' },
      { name: 'Oasis Infobyte: Internship Appericiation', date: 'July 2024' },
      { name: 'Infosys springboard: Introduction to Artificial Intelligence', date: 'August 2024' },
      { name: 'Infosys springboard: Introduction to Deep learning', date: 'August 2024' },
      { name: 'Infosys springboard: Natural Language Processing', date: 'August 2024' },
      { name: 'Codsoft: Internship Completion', date: 'September 2024' },
      { name: 'Geeks for Geeks: React.js', date: 'September 2025' },
      { name: 'Geeks for Geeks: Data Science', date: 'September 2025' }
    ];
    certs.forEach(c => {
      doc.text(`• ${c.name}`, margin, y);
      doc.text(c.date, pageWidth - margin, y, { align: 'right' });
      y += 4;
    });
    y += 6;

    // ADDITIONAL INFORMATION
    addSectionHeader('ADDITIONAL INFORMATION');
    doc.setFont('times', 'bold');
    doc.text('Languages:', margin, y);
    doc.setFont('times', 'normal');
    doc.text('English (Fluent), Hindi (Fluent)', margin + 20, y);
    y += 5;
    doc.setFont('times', 'bold');
    doc.text('Interests:', margin, y);
    doc.setFont('times', 'normal');
    doc.text('Painting, Music, Dance, Drawing', margin + 20, y);

    doc.save('Aadina_Jain_Resume.pdf');
  };

  return (
    <section id="about" className="py-24 px-6 md:px-24">
      <div className="container mx-auto">
        <div className="section-title-layered">
          <span className="bg">About</span>
          <h2 className="main">About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-none"
          >
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 interactive">
              <img 
                src="/profile.jpeg" 
                alt="Aadina Jain" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neon-teal/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-neon-teal opacity-50 group-hover:w-32 group-hover:h-32 transition-all duration-500" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-neon-teal opacity-50 group-hover:w-32 group-hover:h-32 transition-all duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl font-bold text-text-primary">
              Hi, I’m <span className="text-neon-teal">Aadina Jain</span>, a software engineer.
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I specialize in full stack web development and AI based applications. I thrive on transforming ideas into functional and visually appealing websites.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Throughout my studies, I have gained hands-on experience in various programming languages, including Python, Java, and C++. I have worked on several projects, which have honed my technical skills and strengthened my ability to collaborate within diverse teams.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Feel free to connect with me to discuss technology, projects, or collaboration opportunities!
            </p>
            
            <div id="resume" className="mt-8 flex items-center gap-8">
              <button 
                onClick={generatePDF}
                className="neon-button"
              >
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
