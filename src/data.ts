import camtocor from "./img/certificate/camtocor.jpeg"
import hackerrank from "./img/certificate/hackerrank.png"
import react from "./img/skill/React.png"
import redux from "./img/skill/REDUX.png"
import Git from "./img/skill/Git.png"
import Java from "./img/skill/JAVA.png"
import JS from "./img//skill/JS.png"
import tailwind from "./img/skill/Tailwind.png"
import VS from "./img/skill/VS.png"
export const navs = [
    { id: 1, nav: 'Home', sectionId: 'home' },
    { id: 2, nav: 'About', sectionId: 'about' },
    { id: 3, nav: 'Tech Skills', sectionId: 'tech-skills' },
    { id: 4, nav: 'Projects', sectionId: 'projects' }, // Added Projects section
    { id: 5, nav: 'Contact', sectionId: 'contact' }
  ];
  




interface Education {
    id: number;
    degree:string;
    marks:string;
    institue:string;
    year:string;
}
export const SchoolDetail: Education[] = [
    {
        id: 1,
        degree:"Bacholer of Science (Bsc.it)",
        marks:"3.72 CGPA" ,
        institue:"K S SCHOOL OF BUSSINESS MANAGEMENT",
        year:"2020-23"
        
    },
    {
        id: 2,
        degree:"H.S.C",
        marks:"82%",
        institue:"V K Vidhyalay",
        year:"2019-20"
    },
    {
        id: 3,
        degree:"H.S.C",
        marks:"77%",
        institue:"Maruti Nanadan School",
        year:"2017-18"
    },
];




interface Certificate {
    image: string;
    title: string;
    details: string;
    date: string;
  }
  
export  const certificateData: Certificate[] = [
    {
      image:`${hackerrank}` , // Replace with your image path
      title: "HackerRank Javascript ( Basic )",
      details: "",
      date: "January 2023",
    },
    {
      image: `${camtocor}`, // Replace with your image path
      title: "Campus to Corporate",
      details: "it is certificate of a seminar which is held by gujarat university.",
      date: "February 2023",
    },
    // Add more certificates as needed
  ];
  
  export default certificateData;
  
  interface ImgItem {
    name:string;
    path: string;
}
export const Img: ImgItem[]=[
    {
        name:"js",
        path:`${JS}`
    },
    {
        name:"React",
        path:`${react}`
    },
    {
        name:"Tailwind",
        path:`${tailwind}`
    },
    {
        name:"redux",
        path:`${redux}`
    },
    {
        name:"java",
        path:`${Java}`
    },
    {
        name:"git",
        path:`${Git}`
    },
    {
        name:"Vs",
        path:`${VS}`
    },
    {
        name:"react",
        path:`${react}`
    }


]

// sampleProjects.ts

export interface Project {
    imageSrc: string;
    title: string;
    description: string;
    githubLink: string;
    deployLink?: string;
    sectionId: string;
  }
  
export const sampleProjects = [
  {
    sectionId: "project-1",
    imageSrc: "/api/placeholder/400/250", // Replace with actual images
    title: "Tic-Tac-Toe Game",
    description: "A simple two-player game built with React.js and state management with smooth UI and responsive design.",
    githubLink: "https://github.com/smitagola/tictactoe",
    deployLink: "https://smitagola.github.io/tictactoe",
    technologies: ["React", "JavaScript", "CSS", "State Management"]
  },
  {
    sectionId: "project-2", 
    imageSrc: "/api/placeholder/400/250",
    title: "E-commerce Site",
    description: "Full-featured e-commerce platform with product listing, filtering, search, and user management systems.",
    githubLink: "https://github.com/smitagola/ecommerce",
    deployLink: "https://smitagola.github.io/ecommerce",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"]
  },
  {
    sectionId: "project-3",
    imageSrc: "/api/placeholder/400/250",
    title: "Smart Parking System",
    description: "IoT-based parking management system for complex areas with real-time monitoring and automation.",
    githubLink: "https://github.com/smitagola/smart-parking",
    deployLink: "https://smitagola.github.io/smart-parking", 
    technologies: ["IoT", "JavaScript", "Hardware Integration", "API Development"]
  }
];
  

export const aboutMe = " The Generator App is an online tool that helps you export ready-made templates that can work as your future website. It allows you to combine slides, panels, and other components and export them as a set of static files: HTML/CSS/JS."