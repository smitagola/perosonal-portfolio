import React from 'react';
import Carasoul from '../Component/Carasoul';
import { SchoolDetail } from '../data';

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen ml-4 mr-4 mt-8 md:ml-20 md:mr-20 md:mt-12">
      <div className="flex flex-col items-center max-w-screen-lg mx-auto px-4">
        <div className="mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-950">
          About Me
        </div>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-center">
          The Generator App is an online tool that helps you export ready-made templates that can work as your future website. It allows you to combine slides, panels, and other components and export them as a set of static files: HTML/CSS/JS.
        </p>
        <div className="mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-950">
          Education
        </div>
        {SchoolDetail.map((item) => (
          <div key={item.id} className="pl-4 mb-6 w-full">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div className="underline text-lg sm:text-xl text-fuchsia-400">{item.degree}</div>
              <div className="text-sm sm:text-base">Pass with {item.marks}</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="text-sm sm:text-base">{item.institue}</div>
              <div className="bg-lime-300 rounded-xl px-3 py-1 text-xs sm:text-sm">{item.year}</div>
            </div>
          </div>
        ))}
        <div className="mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-950">
          Certificate
        </div>
        <Carasoul />
      </div>
    </div>
  );
};

export default About;
