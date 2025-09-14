import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeBracketIcon, 
  EyeIcon, 
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Project data
const projects = [
  {
    id: 1,
    title: "Tic-Tac-Toe Game",
    description: "A modern two-player game built with React.js featuring smooth animations, responsive design, and local state management for an engaging user experience.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "JavaScript", "CSS3", "State Management", "UI/UX"],
    githubLink: "https://github.com/smitagola/tictactoe",
    deployLink: "https://smitagola.github.io/tictactoe",
    category: "frontend"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with product catalog, user authentication, shopping cart, and payment integration. Built with modern web technologies.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "REST API"],
    githubLink: "https://github.com/smitagola/ecommerce",
    deployLink: "https://smitagola.github.io/ecommerce",
    category: "fullstack"
  },
  {
    id: 3,
    title: "Smart Parking System",
    description: "IoT-based intelligent parking management system featuring real-time monitoring, automated slot allocation, and mobile app integration for seamless user experience.",
    image: "/api/placeholder/600/400",
    technologies: ["IoT", "JavaScript", "Hardware", "API Development", "Cloud"],
    githubLink: "https://github.com/smitagola/smart-parking",
    deployLink: "https://smitagola.github.io/smart-parking",
    category: "iot"
  }
];

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['all', 'frontend', 'fullstack', 'iot', 'backend'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (projectId, index) => {
    setActiveProject(projectId);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Close modal when clicking outside
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const currentProject = filteredProjects[currentIndex];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
            Projects & Work
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on during my education and career. 
            Each project represents my passion for creating innovative and user-friendly solutions.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openModal(project.id, index)}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={project.image} 
                    alt={project.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-purple-500/80 text-white rounded-full text-xs backdrop-blur-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-full text-xs border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700/30 text-slate-400 rounded-full text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg hover:bg-slate-700 transition-all duration-300 flex-1 text-sm"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      Code
                    </a>
                    {project.deployLink && (
                      <a
                        href={project.deployLink}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex-1 text-sm"
                      >
                        <EyeIcon className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {activeProject !== null && currentProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 rounded-full p-2 z-10 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </button>

                {/* Navigation Arrows */}
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      onClick={prevProject}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-700/80 hover:bg-slate-600 rounded-full p-3 z-10 transition-colors"
                    >
                      <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    
                    <button
                      onClick={nextProject}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-700/80 hover:bg-slate-600 rounded-full p-3 z-10 transition-colors"
                    >
                      <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}

                {/* Project Content */}
                <div className="mb-6">
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {currentProject.title}
                  </h2>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                    {currentProject.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {currentProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={currentProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition-all duration-300 flex-1 min-w-[200px] justify-center"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      View Code
                    </a>
                    {currentProject.deployLink && (
                      <a
                        href={currentProject.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex-1 min-w-[200px] justify-center"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Counter */}
                {filteredProjects.length > 1 && (
                  <div className="text-center text-slate-400 text-sm">
                    Project {currentIndex + 1} of {filteredProjects.length}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-slate-300 mb-6 text-lg">Want to see more of my work?</p>
          <a
            href="https://github.com/smitagola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
          >
            <CodeBracketIcon className="w-6 h-6" />
            Explore My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;