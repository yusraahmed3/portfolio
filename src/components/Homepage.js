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
    transition: { duration: 0.4, yoyo: Infinity, ease: "easeOut" },
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
        <h1 className="font-radioCanada text-terBg text-3xl text-center sm:text-7xl md:text-8xl lg:text-9xl font-extralight italic">
          <motion.span variants={headlineAnimation}>Hi,</motion.span> <motion.span variants={headlineAnimation}>I'm Yusra</motion.span>
        </h1>
        <motion.p
          variants={subAnimation}
          className="font-montserrat text-gray-200 text-xs sm:text-base md:text-xl text-center mt-10  leading-relaxed font-bold"
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

{
  /* <video
        autoPlay
        loop
        muted
        className="absolute opacity-50 top-0 left-0 w-full h-screen  object-cover "
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex h-screen overflow-hidden ">
        <div className="m-auto cursor-default">
          <div className="text-white text-6xl sm:text-9xl font-sacramento  my-auto  ">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              I'm Yusra
            </motion.p>
          </div>
          <div className=" text-white text-center  font-montserrat text-lg sm:text-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              {" "}
              I'm a{" "}
              <Typical
                className="text-secBg"
                loop={Infinity}
                wrapper="b"
                steps={["Web Developer", 2000, "Mobile Developer", 2000]}
              />
            </motion.p>
            <br/>
          </div>
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1, transition:{duration: 3}}}

          whileHover={{scale: 1.2, transition:{
            duration: 0.5
          }}}

          whileTap={{scale: 0.9}}
          className="text-terBg text-xs text-center leading-loose mx-auto mt-3 font-montserrat hover:cursor-pointer border-b border-b-secBg w-32 md:w-40 md:text-base">
            Download resume
          </motion.div>
        </div>
      </div> */
}

export default Homepage;
