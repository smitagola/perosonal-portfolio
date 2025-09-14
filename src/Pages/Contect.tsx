import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import Git from '../img/skill/Git.png';
import LinkedIn from "../img/linkedIn.png";
import Twitter from "../img/twitter.png";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center items-center">
      <div className="mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-950 mb-8">
        Contact Me
      </div>
      <div className="bg-gradient-to-r from-purple-400 to-pink-600 opacity-70 lg:text-3xl h-64 rounded-2xl w-72 sm:w-3/5 pt-7 pl-7">
        <div className="m-2 flex flex-col justify-center items-center">
          <Link 
            to="mailto:smitagola675@gmail.com" 
            className="flex items-center cursor-pointer hover:text-white"
            aria-label="Email"
          >
            <AlternateEmailOutlinedIcon className="mr-2" />
            smitagola675@gmail.com
          </Link>
        </div>
        <div className="flex gap-4 mt-7 justify-center items-center">
          <a href="https://github.com/smitagola" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img className="h-8 w-8 cursor-pointer" src={Git} alt="GitHub logo" />
          </a>
          <a href="https://x.com/3Agola11144" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img className="h-8 w-8 cursor-pointer" src={Twitter} alt="Twitter logo" />
          </a>
          <a href="https://www.linkedin.com/in/smit-agola-1562b626b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img className="h-8 w-8 cursor-pointer" src={LinkedIn} alt="LinkedIn logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
