import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";
const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  techNames,

  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      className={`relative z-10 h-[550px] w-[100%] items-start justify-center bg-cover bg-center bg-no-repeat py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <Container
        width="100%"
        height="100%"
        borderRadius={25}
        color="rgba(255, 255, 255, 0.1)"
        blur={true}
        grain={true}
        top="0px"
        left="0px"
        angle={0}
      >
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className={`absolute -bottom-2 w-[75%] opacity-70  drop-shadow-2xl sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
            id % 2 === 0
              ? "right-0 rounded-tl-[1.8rem]"
              : "left-0 rounded-tr-[1.8rem]"
          }`}
          priority={true}
        />
        <div
          className={`absolute top-0 text-[#0E1016] ${
            id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
          } mt-6 flex  items-center justify-center gap-4 lg:mt-10`}
        >
          {available ? (
            <>
              <div className="flex items-center justify-center">
                <Link
                  href={github}
                  target="_blank"
                  aria-label="Open GitHub Repository"
                  className="flex items-center justify-center rounded-full bg-white p-5  text-[20px]  md:text-[25px] lg:h-[65px] lg:w-[65px] lg:text-[30px]"
                  data-blobity
                  data-blobity-radius="35"
                  data-blobity-offset-x="4"
                  data-blobity-offset-y="4"
                  data-blobity-magnetic="false"
                >
                  <SiGithub />
                </Link>
              </div>
              <Link
                href={demo}
                target="_blank"
                aria-label="Open Live Demo"
                className="flex items-center justify-center rounded-full bg-white p-5  text-[20px]  md:text-[25px] lg:h-[65px] lg:w-[65px] lg:text-[30px]"
                data-blobity
                data-blobity-radius="35"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false"
              >
                <BsLink45Deg />
              </Link>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div
          className={`absolute text-white  ${
            !(id % 2 === 0)
              ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
              : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
          } mb-10  md:mb-16 lg:mb-14 `}
        >
          <AnimatedTitle
            text={name}
            className={
              "max-w-[90%] text-[35px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
            }
          />
          <div className="mt-9 mb-9 grid grid-cols-5 gap-5">
            {technologies.map((IconComponent, id) => (
              <div key={id} className={"relative"}>
                <Link
                  href={"/"}
                  className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                  data-blobity-tooltip={techNames[id]}
                  data-blobity-magnetic="false"
                >
                  <IconComponent />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectCard;
