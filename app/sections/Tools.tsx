import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiMongoose,
  SiNodemon,
  SiBootstrap,
  SiJquery,
  SiRedux,
  SiVisualstudiocode,
  SiNetlify,
  SiVercel,
  SiCanva,
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"TOOLS IM USING."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] justify-center lg:max-w-[1200px]">
          <div className="mb-10 flex w-[100%] flex-col gap-10 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.2} text="Frontend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4 md:gap-10"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <SiReact size={50} data-blobity-tooltip={"React.js"} />
                <SiRedux size={50} data-blobity-tooltip={"Redux"} />

                <SiNextdotjs size={50} data-blobity-tooltip={"Next.js"} />
                <SiJavascript size={50} data-blobity-tooltip={"JavaScript"} />
                <SiTypescript size={50} data-blobity-tooltip={"TypeScript"} />
                <SiJquery size={50} data-blobity-tooltip={"Jquery"} />

                <SiTailwindcss size={50} data-blobity-tooltip={"TailwindCSS"} />
                <SiBootstrap size={50} data-blobity-tooltip={"Bootstrap"} />
                <SiFramer size={50} data-blobity-tooltip={"Framer Motion"} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-10 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.3} text="Backend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4 md:gap-10"
                delay={0.3}
                stepSize={0.1}
                iconSize={50}
              >
                <SiNodedotjs size={50} data-blobity-tooltip={"NodeJS"} />
                <SiExpress size={50} data-blobity-tooltip={"ExpressJS"} />
                <SiMongodb size={50} data-blobity-tooltip={"MongoDB"} />
                <SiPostman size={50} data-blobity-tooltip={"Postman"} />

                <SiNodemon size={50} data-blobity-tooltip={"Nodemon"} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-10 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.1} text="Design" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4 md:gap-10"
                delay={0.1}
                stepSize={0.1}
                iconSize={50}
              >
                <SiFigma size={50} data-blobity-tooltip={"Figma"} />
                <SiCanva size={50} data-blobity-tooltip={"Canva"} />
              </AnimatedTools>
            </div>
          </div>

          <div className="mb-10 flex w-[100%] flex-col gap-10 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="Other" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4 md:gap-10"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <SiGithub size={50} data-blobity-tooltip={"Github"} />
                <SiGit size={50} data-blobity-tooltip={"Git"} />
                <SiNetlify size={50} data-blobity-tooltip={"Netlify"} />
                <SiVercel size={50} data-blobity-tooltip={"Vercel"} />
                <SiVisualstudiocode
                  size={50}
                  data-blobity-tooltip={"Visual Studio Code"}
                />
              </AnimatedTools>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
