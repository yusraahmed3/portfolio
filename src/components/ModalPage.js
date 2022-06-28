import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Carousal from "./Carousal";

export const ModalPage = ({ showModal, setShowModal, project, ref }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const containerAnimation = {
    hidden: { y: -1000 },
    visible: {
      y: 0,
      transition: { duration: 0.1, type: "spring", stiffness: 120 },
    },
  };

  const h1Animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.14 }}
            ref={modalRef}
            onClick={closeModal}
            exit={{ opacity: 0 }}
            className="h-full w-full  flex fixed inset-0 backdrop-blur-sm justify-center items-center  "
          >
            <motion.div
              variants={containerAnimation}
              exit={{ y: -1000 }}
              className="w-4/5 md:w-1/2 h-full  rounded-lg relative overflow-hidden"
            >
              <MdClose
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-xl text-gray-200 z-10 cursor-pointer"
              />

              <div className="w-full h-full flex flex-col ">
                <div className="w-full h-[30%] flex flex-col gap-3 items-start p-6 justify-center bg-black bg-opacity-90 border-b-2 border-b-terBg">
                  <motion.h1
                    variants={h1Animation}
                    className="text-xl md:text-2xl font-bold font-montserrat text-terBg"
                  >
                    {project.title}
                  </motion.h1>
                  <motion.p
                    variants={textAnimation}
                    className=" text-gray-200 text-xs md:text-sm font-medium"
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    variants={textAnimation}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-terBg text-center text-gray-200 w-24 text-sm md:text-base md:w-32 rounded-md p-1 self-end font-bold hover:bg-terBg hover:bg-opacity-60 transition duration-100"
                  >
                    Demo
                  </motion.a>
                </div>

                <div className="w-full h-full bg-white md:bg-transparent">
                  <Carousal images={project.images} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

// top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-1
