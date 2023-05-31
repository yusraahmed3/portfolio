import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";
import CatImage from "../assets/images/cat.jpg"

import Menu from "./Menu";

const headlineAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const subAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5,    ease: "easeIn" } },
};

const arrowAnimation = {
  hidden: { opacity: 0 },
  visible: {
    y: ["20px", "0px"],
    opacity: 1,
    transition: { duration: 0.4, yoyo: Infinity, ease: 'easeOut' },
  },
};

function Homepage({homeRef}) {
  return (
    <motion.div
    ref={homeRef}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.5 }}
      className="relative flex h-screen bg-black bg-opacity-90"
    >
      <img src={CatImage} alt="Cat Image" className="absolute w-full h-full object-cover object-left-top md:object-center opacity-30"/>
      <div className=" font-architects absolute  top-96 flex flex-col items-center w-full ">
        <h1 className=" text-terBg text-5xl text-left sm:text-7xl md:text-8xl lg:text-8xl  tracking-widest uppercase">
          <motion.span variants={headlineAnimation}>Hi,</motion.span> <motion.span variants={headlineAnimation}>I'm Yusra</motion.span>
        </h1>
        <motion.p
          variants={subAnimation}
          className=" text-gray-200 text-sm  md:text-2xl text-center mt-10  leading-relaxed font-thin "
        >
          I make websites and mobile applications.
        </motion.p>

        
        {/* <motion.span
          variants={arrowAnimation}
          className="text-white absolute bottom-10 left-1/2 text-xl"
        >
          <BsArrowDownShort />
        </motion.span> */}
      </div>
    </motion.div>
  );
}


export default Homepage;
