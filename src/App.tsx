import './App.css';
import Navbar from './Component/Navbar'; // Import Navbar
import About from './Pages/About';
import Home from './Pages/Home';
import TechSkill from './Pages/TechSkill';
import ProjectPage from './Pages/ProjectPage'; // Import ProjectPage
import Contect from './Pages/Contect';

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tech-skills">
        <TechSkill />
      </div>
      <div id="projects">
        <ProjectPage />
      </div>
      <div id="contect">
        <Contect />
      </div>
    </>
  );
}

export default App;
