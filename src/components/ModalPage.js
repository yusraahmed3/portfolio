import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Carousal from "./Carousal";

export const ModalPage = ({ showModal, setShowModal, project }) => {
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
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
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
              className="w-4/5 md:w-1/2 h-4/5  rounded-lg relative overflow-hidden"
            >
                <MdClose
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-3 text-xl text-black z-10 cursor-pointer"
                />

              <div className="w-full h-full flex flex-col ">
                <div className="w-full h-1/3 flex flex-col  items-start p-5 justify-center bg-white border-b-2 border-b-mainBg">
                  <motion.h1
                    variants={h1Animation}
                    className="text-lg md:text-2xl font-bold font-montserrat"
                  >
                    {project.title}
                  </motion.h1>
                  <motion.p
                    variants={textAnimation}
                    className=" text-black text-xs md:text-sm font-medium"
                  >
                    {project.description}
                  </motion.p>
                </div>
                <div className="w-full h-full">
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
