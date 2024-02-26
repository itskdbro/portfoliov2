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
    id: 1,
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
    id: 2,
    name: "Coming Soon",
    description:
      "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
    technologies: [SiZig],
    techNames: ["Zig"],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/construction.webp",
    available: false,
  },
];
