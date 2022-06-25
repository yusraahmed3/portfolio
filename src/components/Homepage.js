import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";

const headlineAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const subAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
};

const arrowAnimation = {
  hidden: { opacity: 0 },
  visible: {
    y: ["20px", "0px"],
    opacity: 1,
    transition: { duration: 0.4, yoyo: Infinity, ease: 'easeOut' },
  },
};

function Homepage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.5 }}
      className="relative flex h-screen"
    >
      <div className="m-auto">
        <h1 className="font-radioCanada text-terBg text-5xl text-center sm:text-7xl md:text-8xl lg:text-9xl font-extralight italic">
          <motion.span variants={headlineAnimation}>Hi,</motion.span> <motion.span variants={headlineAnimation}>I'm Yusra</motion.span>
        </h1>
        <motion.p
          variants={subAnimation}
          className="font-montserrat text-gray-200 text-sm  md:text-xl text-center mt-10  leading-relaxed font-bold"
        >
          I make fully-functional websites and mobile applications.
        </motion.p>
        <motion.span
          variants={arrowAnimation}
          className="text-white absolute bottom-10 left-1/2 text-xl"
        >
          <BsArrowDownShort />
        </motion.span>
      </div>
    </motion.div>
  );
}


export default Homepage;
