import { motion } from 'framer-motion';
import { Img } from '../data';

const TechSkill = () => {
  return (
    <motion.div 
      className="container min-h-screen max-w-screen-lg mx-auto p-4"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="m-8 sm:mt-12 flex items-center text-center justify-center text-3xl font-bold text-indigo-900 w-auto max-w-96"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Tech Skill
      </motion.div>
      
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        With a strong foundation in JavaScript and TypeScript, I have developed and optimized numerous web applications focusing on efficient algorithms and responsive design. I specialize in utilizing modern tools like Tailwind CSS to craft visually appealing and performant user interfaces. My experience includes solving complex problems through data structures and algorithms. Additionally, I am proficient in React, where I have implemented smooth scrolling and dynamic layouts that enhance user experience across various devices.
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.3
            }
          }
        }}
      >
        {Img.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <img 
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
              src={item.path} 
              alt={item.name} 
            />
            <p className="mt-2 text-center text-xs sm:text-sm md:text-base text-gray-700">{item.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechSkill;
