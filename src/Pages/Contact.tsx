import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Git from '../img/skill/Git.png';
import LinkedIn from "../img/linkedIn.png";
import Twitter from "../img/twitter.png";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-slate-900 py-20 px-4">
      <motion.div 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.div>
      
      <motion.div 
        className="bg-gradient-to-r from-purple-500 to-pink-600 lg:text-3xl rounded-2xl w-full max-w-md p-8 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="m-2 flex flex-col justify-center items-center">
          <a 
            href="mailto:smitagola675@gmail.com" 
            className="flex items-center cursor-pointer hover:text-white text-white text-lg md:text-xl"
          >
            <EnvelopeIcon className="w-6 h-6 mr-2" />
            smitagola675@gmail.com
          </a>
        </div>
        
        <div className="flex gap-6 mt-8 justify-center items-center">
          <a href="https://github.com/smitagola" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform" src={Git} alt="GitHub logo" />
          </a>
          <a href="https://x.com/3Agola11144" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform" src={Twitter} alt="Twitter logo" />
          </a>
          <a href="https://www.linkedin.com/in/smit-agola-1562b626b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform" src={LinkedIn} alt="LinkedIn logo" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;