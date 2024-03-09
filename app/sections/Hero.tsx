import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
        >
          <Logo width={300} height={300} />
          {/* <AnimatedTitle
            text={"Keshav Dhawan. "}
            className={
              "mb-10 text-left text-[40px] font-bold  leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:mb-16 md:text-[40px] lg:text-[80px] "
            }
            wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"}
          /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
