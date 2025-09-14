import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navs } from '../data';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItem {
  id: number;
  nav: string;
  sectionId: string;
}

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700/30 py-3">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            SMiT
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navs.map((item: NavItem) => (
              <Link
                key={item.id}
                to={item.sectionId}
                smooth={true}
                duration={500}
                offset={-80}
                className={`cursor-pointer transition-colors py-2 px-1 border-b-2 ${
                  activeSection === item.sectionId 
                    ? 'text-purple-400 border-purple-400' 
                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-400'
                }`}
              >
                {item.nav}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/30">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navs.map((item: NavItem) => (
                <Link
                  key={item.id}
                  to={item.sectionId}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer transition-colors py-2 ${
                    activeSection === item.sectionId 
                      ? 'text-purple-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.nav}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;