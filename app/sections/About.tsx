import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-start justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-[2rem] md:pt-20 md:pb-[5rem] lg:pt-[5rem] lg:pb-[10rem]"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Turning Ideas into Interactive Code and Stunning Designs. "}
          className={
            "mb-10 text-left text-[40px] font-bold  leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:mb-16 md:text-[40px] lg:text-[80px] "
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={`I'm  Keshav Dhawan , a frontend Developer with a flair for crafting captivating user experiences.Expertise in sculpting lightning-fast, responsive web applications. I am constantly seeking opportunities to learn and grow in this ever-evolving industry.`}
            />

            <AnimatedBody
              delay={0.1}
              text="Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
            />

            <AnimatedBody
              delay={0.2}
              text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
