import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import resumeFile from "../assets/file/resume.pdf";
import emailjs from "emailjs-com";
import { Form } from "./Form";
import { EmailSent } from "./EmailSent";


const h1Animation = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
const textAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const iconVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const formAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      staggerChildren: 0.15,
    },
  },
};

const Contact = ({ forwardedRef }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);




  const submitForm = (values) => {
    setIsSubmitted(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div
      ref={forwardedRef}
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.15 }}
        className="flex flex-col md:flex-row md:space-x-8 md:space-y-0  space-y-8 p-8 w-full max-w-4xl shadow-xl "
      >
        <div className=" flex flex-col space-y-8 justify-between ">
          <div>
            <motion.h1
              variants={h1Animation}
              className="text-terBg font-bold text-2xl md:text-4xl font-montserrat"
            >
              Get in touch
            </motion.h1>
            <motion.p
              variants={textAnimation}
              className="text-gray-200 text-base md:text-lg mt-2"
            >
              Got a question? Interested in what we can make together? Let's
              talk!
            </motion.p>
          </div>

          <motion.div
            variants={textAnimation}
            className=" group hover:cursor-pointer inline-flex space-x-16 items-center w-28 "
            onClick={() =>
              (window.location.href = "mailto:yusraa190@gmail.com")
            }
          >
            <div className=" border border-white w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 relative ">
              <BsArrowRight className="text-terBg text-2xl lg:text-3xl absolute top-1/2 -translate-y-1/2 -left-2 group-hover:translate-x-3 lg:group-hover:translate-x-5 transition duration-500 " />
            </div>
            <span className="  text-base  text-center  text-gray-200 scale-95 group-hover:scale-105 transition duration-500 absolute">
              yusraa190@gmail.com
            </span>
          </motion.div>
          <div className="flex flex-row justify-between ">
            <div className="text-gray-200 text-lg md:text-xl  flex flex-row space-x-3">
              <motion.div
                whileHover={{ scale: 1.2, translateY: -10 }}
                whileTap={{ scale: 0.9 }}
                variants={iconVariants}
              >
                <a
                  href="https://twitter.com/yusraa190"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200"
                >
                  <FaTwitter className="hover:text-terBg hover:cursor-pointer" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, translateY: -10 }}
                whileTap={{ scale: 0.9 }}
                variants={iconVariants}
              >
                <a
                  href="https://www.linkedin.com/in/yusraa-ahmed/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200"
                >
                  <FaLinkedinIn className="hover:text-terBg hover:cursor-pointer" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, translateY: -10 }}
                whileTap={{ scale: 0.9 }}
                variants={iconVariants}
              >
                <a
                  href="https://github.com/yusraahmed3"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200"
                >
                  <FaGithub className="hover:text-terBg hover:cursor-pointer" />
                </a>
              </motion.div>
            </div>
            <motion.a
              variants={iconVariants}
              href={resumeFile}
              download="Resume"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 text-sm hover:text-gray-300 no-underline font-radioCanada mr-10"
            >
              Resume
            </motion.a>
          </div>
        </div>
        <motion.div
          variants={formAnimation}
          className=" p-8 md:w-96 rounded-lg shadow-xl border-2 border-terBg"
        >
          {isSubmitted ? <EmailSent /> : <Form submitForm={submitForm} />}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
