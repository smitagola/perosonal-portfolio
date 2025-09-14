import camtocor from "./img/certificate/camtocor.jpeg"
import hackerrank from "./img/certificate/hackerrank.png"
import react from "./img/skill/React.png"
import redux from "./img/skill/REDUX.png"
import Git from "./img/skill/Git.png"
import Java from "./img/skill/JAVA.png"
import JS from "./img//skill/JS.png"
import tailwind from "./img/skill/Tailwind.png"
// import TS from "./img/skill/TS.png"
import VS from "./img/skill/VS.png"
import iot from "./img/iot.png"
import ecom from "./img/E-commerce.jpg"
import tiktak from "./img/tik-tak-toe.jpg"

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
  
  export const sampleProjects: Project[] = [
    {
      imageSrc:`${tiktak}` , // Replace with actual image URL
      title: 'tik-tak-toe',
      description: 'it is a just a simple game which i have created with the react.js and use the state managment for two player game.',
      githubLink: 'https://github.com/smitagola/tik-tak-toe',
      deployLink: 'https://smit-tik-tak-toe.netlify.app/',
      sectionId: 'tik-tak-toe'
    },
    {
      imageSrc:`${ecom}`, // Replace with actual image URL
      title: 'E-commersite',
      description: 'it is and e-commerce site which devoped by me in this their is feature like listing the product , fliter product , search or manage user and order like that so many functionality is available in that .',
      githubLink: 'https://github.com/smitagola/bookmart',
      // deployLink: 'https://username.github.io/weather-app',
      sectionId: 'weather-app'
    },
    {
      imageSrc: `${iot}`, // Replace with actual image URL
      title: 'Smart parking system',
      description: 'it is project based on iot for managing a parking at complex area. it is acadmic project of 4th year.',
      githubLink: 'https://github.com/smitagola/smart-parking-system',
      sectionId: 'task-manager'
    }
  ];
  