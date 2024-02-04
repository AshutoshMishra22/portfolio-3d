import {
  nagarro,
  tcs,
  krypt,
  gpt,
  digital_wallet,
  ecommerce,
  paper,
} from "./assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "./assets/icons";

// Routes
const CONTACT_URL = "/contact";
const PROJECT_URL = "/project";
const ABOUT_URL = "/about";

// APP Stage
const STAGE_1 = "1";
const STAGE_2 = "2";
const STAGE_3 = "3";
const STAGE_4 = "4";

// Fox state
const IDLE = "idle";
const WALK = "walk";
const HIT = "hit";

// Alert State
const DANGER = "danger";
const WARN = "warn";
const SUCCESS = "success";

const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#adaabb",
    date: "August 2019 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Lead Developer",
    company_name: "Nagarro",
    icon: nagarro,
    iconBg: "#13294b",
    date: "April 2022 - Present",
    points: [
      "Developing and maintaining micro-frontend web applications using Next.js and other related technologies.",
      "Responsible for framework and sub-domains level design components development.",
      "Requirement gathering and planning, Code Review, Component and Page Design discussion.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: CONTACT_URL,
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/AshutoshMishra22",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ashutosh-mishra-001/",
  },
];

const projects = [
  {
    iconUrl: krypt,
    theme: "btn-back-red",
    name: "Krypt",
    description:
      "PWA using MetaMask for real-time transactions with Etherium. All transactions are logged in etherScan for authenticity and are also available in the latest transaction section.",
    link: "https://github.com/AshutoshMishra22/nft-react-project",
  },
  {
    iconUrl: gpt,
    theme: "btn-back-green",
    name: "OpenAI tool",
    description:
      "A PWA for autoregressive language model that uses deep learning to produce human-like text.",
    link: "https://github.com/AshutoshMishra22/site",
  },
  {
    iconUrl: digital_wallet,
    theme: "btn-back-blue",
    name: "Digital Wallet",
    description:
      "Designed and built a full-responsive web app for product purchase, subscription, bill payment in the market. (Company Restricted)",
    link: "",
  },
  {
    iconUrl: ecommerce,
    theme: "btn-back-blue",
    name: "E-Commerce Website",
    description:
      "A Fully responsive micro-frontend based architecture application, that sells health, beauty, and home care products through a network of independent business owners. (Company Restricted)",
    link: "",
  },
  {
    iconUrl: paper,
    theme: "btn-back-blue",
    name: "Insurance Policy Administration",
    description:
      "Cooperate internal usage application to maintain, track and distribute poilcy and respective products. (Company Restricted)",
    link: "",
  },
];

export {
  CONTACT_URL,
  PROJECT_URL,
  ABOUT_URL,
  skills,
  experiences,
  socialLinks,
  projects,
  DANGER,
  WARN,
  SUCCESS,
  IDLE,
  WALK,
  HIT,
  STAGE_1,
  STAGE_2,
  STAGE_3,
  STAGE_4,
};
