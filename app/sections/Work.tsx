import AnimatedTitle from "../animations/AnimatedTitle";
import ProjectGrid from "../components/work/ProjectGrid";
import React from "react";

const Work = () => {
  return (
    <section
      className="relative z-10  flex w-full flex-col items-center justify-start bg-[#0E1016] bg-cover bg-center py-16   md:py-20 lg:py-20"
      id="work"
    >
      <AnimatedTitle
        text={"FEATURED WORK."}
        className={
          "mb-10 px-5 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-12 md:text-[60px] lg:text-[80px]"
        }
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
      />
      <AnimatedTitle
        text={"Check out some of my work !"}
        className={
          "sm-ml-0 mb-10 ml-[-2.5rem] text-left text-[15px]  font-bold leading-[0.9em]  text-[#e4ded7] opacity-70 md:mb-16  md:text-[20px]  lg:text-[25px] "
        }
        wordSpace={"mr-[10px]"}
        charSpace={"mr-[0.001em]"}
      />

      <ProjectGrid />
    </section>
  );
};

export default Work;
