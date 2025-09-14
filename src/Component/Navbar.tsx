import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navs } from '../data';
interface NavItem {
  id: number;
  nav: string;
  sectionId: string; // Holds the section id for scrolling
}

const Navbar: React.FC = () => {
  const [shownav, setShownavs] = useState<boolean>(false);

  const handleEvent = () => {
    setShownavs(!shownav);
  };

  return (
    <>
      <div className="absolute h-14 w-full flex flex-row md:flex-row md:gap-8 items-center justify-between px-4 bg-gray-800 text-white">
        <div className="h-full w-24 flex items-center text-2xl font-bold">
          SMiT
        </div>
        <div className="hidden md:flex gap-6">
          {navs.map((item: NavItem) => (
            <Link
              key={item.id}
              to={item.sectionId}
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              {item.nav}
            </Link>
          ))}
        </div>
        
        <button className="md:hidden flex" onClick={handleEvent}>
          |||
        </button>
      </div>
      {shownav && (
        <div className="md:hidden flex flex-col items-center w-full bg-gray-800 text-white p-4">
          {navs.map((item: NavItem) => (
            <Link
              key={item.id}
              to={item.sectionId}
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition-colors cursor-pointer mb-4"
            >
              {item.nav}
            </Link>
          ))}
         
        </div>
      )}
    </>
  );
};

export default Navbar;
