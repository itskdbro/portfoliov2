import {
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiZig,
  SiRedux,
  SiJavascript,
  SiNpm,
  SiNodedotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Log-lume ",
    description:
      "Log-lume is a lightweight npm package designed to enhance the console logging experience in web browsers. With Log-lume, you can colorify your console.log text, making it more visually appealing and easier to distinguish.",
    technologies: [SiNodedotjs, SiNpm, SiTypescript],
    techNames: ["NodeJS", "Npm", "TypeScript"],
    github: "https://github.com/itskdbro/Log-lume",
    demo: "https://www.npmjs.com/package/log-lume",
    image: "/projects/npmProject.png",
    available: true,
  },
  {
    id: 1,
    name: "MEGAMART ",
    description:
      "A meticulously crafted e-commerce platform built entirely on React.js. With a focus on modern frontend practices, this project embodies innovation and user-centric design.",
    technologies: [SiReact, SiRedux, SiTailwindcss, SiJavascript],
    techNames: ["React", "Redux", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/itskdbro/MegaMart",
    demo: "https://megamart-by-kd.netlify.app/",
    image: "/projects/megamart.png",
    available: true,
  },
  {
    id: 2,
    name: "Simon Game",
    description:
      " Remember the challenge of memorizing and replicating color sequences? I've brought that thrilling experience to the digital realm, complete with vibrant colors and engaging gameplay.",
    technologies: [SiHtml5, SiCss3, SiJavascript],
    techNames: ["Html", "CSS", "JavaScript"],
    github: "https://github.com/nuIIpointerexception/codewars",
    demo: "https://simongame-by-kd.netlify.app/",
    image: "/projects/simongame.png",
    available: true,
  },
  {
    id: 3,
    name: "Coming Soon",
    description:
      "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
    technologies: [],
    techNames: [],
    github: "",
    demo: "",
    image: "/projects/construction.webp",
    available: false,
  },
];
