import React, { useState } from "react";
import styled from "styled-components";
import ProPic from "../assets/images/pic01.jpg";
import CatGif from "../assets/images/catgif.gif";
import { motion } from "framer-motion";

const LinkUnderLine = styled(motion.div)`
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#e0afa0, #e0afa0);
  :hover {
    background-size: 100% 1px;
    background-position: 0 100%;
    cursor: pointer;
  }
`;

const imageAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 120 },
  },
};

const h2Animation = {
  hidden: { y: "-20%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const textAnimation = {
  hidden: { y: "20%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const buttonAnimation = {
  hidden: { x: "-30%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.6 },
  },
};

export const About = ({ contactRef }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className="h-full w-full mt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.25 }}
        className="flex flex-col md:flex-row md:gap-x-10 items-center justify-center gap-y-12 md:w-3/4 m-auto"
      >
        <motion.div
          variants={imageAnimation}
          className="w-1/2 h-72 md:h-96 lg:w-1/3 rounded-md overflow-hidden shadow-[0_0_8px_rgba(255,255,255)]"
        >
          <img
            className=" object-cover h-full w-full  "
            src={ProPic}
            alt="Profile Pic"
          />
        </motion.div>

        <div className=" flex flex-col  w-3/4 -order-1 md:order-none">
          <motion.h2
            variants={h2Animation}
            className="text-terBg  text-2xl  md:text-3xl font-montserrat font-bold "
          >
            About Me
          </motion.h2>
          <motion.p
            variants={textAnimation}
            className="text-gray-200 text-sm leading-loose md:text-lg sm:leading-loose lg:text-lg lg:leading-loose font-montserrat mt-3 md:mt-6"
          >
            Hello there!. I'm Yusra and i am a developer based in Jeddah, KSA. I
            like making clean, simple and fancy websites, all the while being
            meticulous and punctual. I enjoy working in front-end development
            but also get a kick out of backend-development. I've built mobile
            and web apps using ReactJS, Flutter and NodeJS.
            <br />
            When I'm not coding, I like to sketch and spend time with family and
            my cat,
            <span
              className="underline decoration-wavy underline-offset-8 inline-flex ml-2"
              onMouseOver={() => setOnHover(true)}
              onMouseOut={() => setOnHover(false)}
            >
              {" "}
              Gigi.{" "}
              {onHover ? (
                <span className="relative w-20 md:w-32">
                  <img
                    src={CatGif}
                    alt="cat"
                    className="w-full h-14 md:h-24 rounded-md object-cover absolute -top-10 -right-5 md:-top-14 md:-right-8"
                  />
                </span>
              ) : (
                ""
              )}
            </span>
            <br />
            <br />
          </motion.p>
          <LinkUnderLine
            whileHover={{ translateX: 30 }}
            variants={buttonAnimation}
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-200 w-24 text-sm mt-2 md:mt-4  md:text-lg md:w-28 text-center font-montserrat font-bold"
          >
            Get in touch
          </LinkUnderLine>
        </div>
      </motion.div>
    </div>
  );
};
