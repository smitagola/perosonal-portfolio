import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  TrophyIcon, 
  CalendarIcon, 
  BuildingOfficeIcon,
  CodeBracketIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  // Education data
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science (BSc IT)",
      school: "K S School of Business Management",
      score: "3.72 CGPA",
      year: "2020-2023"
    },
    {
      id: 2,
      degree: "H.S.C",
      school: "V K Vidhyalay",
      score: "82%",
      year: "2019-2020"
    },
    {
      id: 3,
      degree: "H.S.C",
      school: "Maruti Nandan School",
      score: "77%",
      year: "2017-2018"
    }
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      position: "Backend Developer",
      company: "eVitalRx",
      duration: "April 2025 - Present",
      description: "Developing and maintaining backend systems, implementing new features, and optimizing performance for healthcare applications.",
      technologies: ["Node.js", "Express", "PostgreSQL", "REST APIs"]
    },
    {
      id: 2,
      position: "Backend Intern",
      company: "eVitalRx",
      duration: "January 2025 - March 2025",
      description: "Learned backend development fundamentals, assisted in API development, and participated in code reviews and team collaborations.",
      technologies: ["JavaScript", "Node.js", "Express", "Git"]
    }
  ];

  // Technical skills
  const technicalSkills = [
    { category: "Language", skills: ["Java", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"] },
    { category: "Tools", skills: ["Git", "VS Code", "Postman", "Bit bucket"] }
  ];

  // Interests
  const interests = [
    "Backend Architecture",
    "API Development",
    "Database Optimization",
    "Cloud Technologies",
    "Open Source Projects",
    "Learning New Frameworks"
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate backend developer with experience in building scalable applications. 
            Currently working at eVitalRx while continuously learning and expanding my skill set.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="w-7 h-7 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50"
                  >
                    <h3 className="font-semibold text-white text-lg mb-1">{edu.degree}</h3>
                    <p className="text-slate-300 text-sm mb-2">{edu.school}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">{edu.year}</span>
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {edu.score}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <CodeBracketIcon className="w-7 h-7 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
              </div>

              <div className="space-y-4">
                {technicalSkills.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-white mb-3 text-lg">{category.category}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-full text-sm border border-slate-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience & Interests */}
          <div className="space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <BriefcaseIcon className="w-7 h-7 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-white text-lg">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                          <BuildingOfficeIcon className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                        <CalendarIcon className="w-4 h-4" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-3">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CogIcon className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Interests</h3>
                </div>

                <div className="space-y-2">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm">{interest}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrophyIcon className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-bold text-white">Certifications</h3>
                </div>

                <div className="bg-slate-700/40 rounded-lg p-4">
                  <h4 className="font-semibold text-white text-sm">HackerRank JavaScript (Basic)</h4>
                  <p className="text-slate-400 text-xs mt-1">January 2023</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;