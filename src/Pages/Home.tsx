import React from 'react';
import photo from '../img/phot2.png';
import Typewriter from 'typewriter-effect';
import resume from "../img/Resume.pdf" // Update with your resume path
import p1 from "../img/p2.png"
import { typewriteString } from '../constans';
const Home: React.FC = () => {
  return (
    <div 
    id="home" 
    className="min-h-screen px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20 bg-cover bg-center"
    style={{ backgroundImage: `url(${p1})` }}
  >
      {/* Uncomment this line to include the Navbar */}
      {/* <Navbar /> */}
      <div className="flex   flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="text-center mt-12 lg:mt-10 lg:text-left lg:w-1/2 space-y-2 lg:space-y-4">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-950 leading-tight">
            Hello
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950 leading-tight">
            My name is
          </p>
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-3xl md:text-4xl lg:text-5xl leading-tight">
            Smit
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-indigo-950 leading-tight">
            <Typewriter
              options={{
                strings: typewriteString,
                autoStart: true,
                loop: true,
                delay: 50,
                cursor: '_',
              }}
            />
          </p>
          <a
            href={resume}
            download
            className="inline-block px-6 py-3 mt-6 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-8 lg:mt-10 lg:w-1/2 flex justify-center">
          <div className="mt-10 relative">
            <img
              className=" h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 rounded-full border-4 border-transparent"
              src={photo}
              alt="Profile"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-400 to-pink-600 opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
