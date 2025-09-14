import React from 'react';
import Typewriter from 'typewriter-effect';
import resume from "../img/Resume.pdf";
import { typewriteString } from '../constans';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8 lg:gap-16">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left lg:w-1/2 space-y-6 min-w-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-200">
            Hello, I'm
          </p>
          
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent leading-tight">
            Smit Ba_
          </h1>
          
          {/* Typewriter with fixed container height */}
          <div className="h-12 md:h-14 lg:h-16 flex items-center justify-center lg:justify-start min-w-0">
            <div className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-mono whitespace-nowrap">
              <Typewriter
                options={{
                  strings: typewriteString,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursor: '_',
                }}
              />
            </div>
          </div>
          
          <motion.a
            href={resume}
            download
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
        
        {/* Profile Image Section */}
        <motion.div 
          className="lg:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center p-2 backdrop-blur-sm">
              <div className="w-full h-full bg-slate-800/80 rounded-xl overflow-hidden border-2 border-slate-700/50 flex items-center justify-center p-6">
                <img
                  src="https://undraw.co/api/illustrations/developer-activity"
                  alt="Smit Ba - Developer"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center';
                    fallback.innerHTML = `
                      <svg class="w-full h-full" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="180" fill="#1E293B" stroke="#7E22CE"/>
                        <rect x="120" y="150" width="160" height="100" rx="10" fill="#374151" stroke="#EC4899"/>
                        <rect x="140" y="170" width="40" height="10" rx="2" fill="#7E22CE"/>
                        <rect x="190" y="170" width="40" height="10" rx="2" fill="#EC4899"/>
                        <rect x="140" y="190" width="80" height="40" rx="5" fill="#4B5563"/>
                        <circle cx="260" cy="180" r="8" fill="#10B981"/>
                        <circle cx="260" cy="200" r="8" fill="#F59E0B"/>
                        <circle cx="260" cy="220" r="8" fill="#EF4444"/>
                      </svg>
                    `;
                    e.currentTarget.parentNode.appendChild(fallback);
                  }}
                />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-700/50">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">TS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-400 text-4xl"
        >
          ⌄
        </motion.div>
      </div>
    </section>
  );
};

export default Home;