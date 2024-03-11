import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { FaExternalLinkAlt } from "react-icons/fa";
import blob from "../components/blobity/Blobity";
import Link from "next/link";

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
            <Link
              href="https://drive.google.com/file/d/1Zk1JjrgtRm4W3EC4C8CdqtHJdjtk45ja/view?usp=drive_link"
              target="_blank"
              aria-label="download resume"
              className="relative mt-5 flex  w-[10rem] flex-1 items-center  px-5 py-5 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[10rempx] md:mt-3 md:h-[10px] md:w-[20rem] lg:mt-4"
            >
              <AnimatedTitle
                text={" My Resume"}
                className={
                  "ml-[-2rem]  flex w-[20rem] text-[20px] font-bold leading-[0.9em]  tracking-tighter text-[#e4ded7] sm:text-[25px] md:ml-[-1.5rem]  md:text-[40px] lg:text-[40px] "
                }
                wordSpace={"mr-[14px]"}
                charSpace={"mr-[0.001em]"}
              />

              <FaExternalLinkAlt className="absolute top-3 left-[7rem] h-[0.8rem] w-[5rem] sm:top-[0.4rem] sm:left-[15.5rem]  sm:h-[1.5rem]  " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
