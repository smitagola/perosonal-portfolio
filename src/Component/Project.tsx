import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  githubLink: string;
  deployLink?: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  imageSrc,
  title,
  description,
  githubLink,
  deployLink,
  technologies
}) => {
  return (
    <motion.div 
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 group"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={imageSrc} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-300 mb-4 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-full text-xs border border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg hover:bg-slate-700 transition-all duration-300 flex-1 text-sm"
          >
            <CodeBracketIcon className="w-4 h-4" />
            Code
          </a>
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex-1 text-sm"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;