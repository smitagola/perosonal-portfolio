import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import ProjectPage from './Pages/ProjectPage';
import Contact from './Pages/Contact'; // Fixed import name

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectPage />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;