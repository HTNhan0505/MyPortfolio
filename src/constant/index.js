import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  angular,
  typescript,
  git,
  figma,
  fmp,
  viethas,
  fashion,
  myPortfolio,
  bakerFarm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Work In Groups",
    icon: creator,
  },
  {
    title: "Self-Study",
    icon: mobile,
  },
  {
    title: "Communication",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "InternShip",
    company_name: "FMP Company",
    icon: fmp,
    iconBg: "#fff",
    date: "April 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Assigned to handle login form access token/refesh token with redux-tool kit ",
    ],
  },
  {
    title: "InternShip",
    company_name: "Viethas Company",
    icon: viethas,
    iconBg: "#fff",
    date: "August 2023 - December 2023",
    points: [
      "Technologies: Angular , Bootstrap, NG-ZORRO , Angular Material",
      "Learn and get acquainted with the Angular language, TypeScript and some new libraries",
      "Participate in the company's main project, work with the design team to build and handle project functions and responsive project.",
      "Develop and fix components in the company's auto web project",
      "Working directly with the Tester team to address Frontend issues",
      "Following git workflows and handling merge conflicts",
    ],
  },
];
const projects = [
  {
    name: "BakerFarm Project",
    description:
      "Developed a clean and modern website using HTML, CSS, Javascript, SASS/SCSS.Web site uses SASS and BEM class to generate animation.Use grid system to responsive website on all devices",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SASS/SCSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: bakerFarm,
    source_code_link: "https://github.com/HTNhan0505/BakerFarmProject",
  },
  {
    name: "Fashion Shop",
    description:
      "To use the project, you must first register an account by clicking the 'menu' button on theleft on the header bar. After sign up, the system will send an OTP code to email . After successfully loggin the system will download the product",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "NG-Zorro Antd",
        color: "pink-text-gradient",
      },
    ],
    image: fashion,
    source_code_link: "https://fashion-shop-client-379b8.web.app/",
  },
  {
    name: "My Portfolio",
    description:
      "The Web page uses React Three fiber to create 3D effects with ThreeJS.Implement sending emails through a form on the website.Ensure responsiveness across all devices",
    tags: [
      {
        name: "React/Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "pink-text-gradient",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/HTNhan0505/MyPortfolio",
  },
];

export { services, technologies, experiences, projects };
