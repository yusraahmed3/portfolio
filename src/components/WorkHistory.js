import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ModalPage } from "./ModalPage";
import ProjectData from "./ProjectData";

const h1Animation = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, type: "spring", stiffness: 100 },
  },
};

const imageBoxAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function WorkHistory() {
  let [showModal, setShowModal] = useState(false);
  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  const openModal = (project) => {
    setShowModal(true);
    setProjectInfo(project);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className={`${
        showModal ? "touch-none" : "touch-auto"
      } h-full font-montserrat p-2 md:p-0`}
    >
      <div className="text-center">
        <motion.h1
          variants={h1Animation}
          className=" text-terBg text-2xl md:text-4xl font-bold my-10 md:my-20"
        >
          Personal Projects
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 pr-5 gap-4">
        {Object.entries(ProjectData).map(([key, value], i) => {
          return (
            <motion.div
              key={key}
              variants={imageBoxAnimation}
              className="relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-full  h-64 md:h-80 rounded-2xl transition-all duration-500 ease-in-out group hover:cursor-pointer hover:bg-black hover:bg-opacity-60"
            >
              <img
                className="absolute w-full h-full transition-all duration-500 ease-in-out transform object-cover group-hover:scale-150 opacity-30"
                src={value.images[0]}
                alt="Portfolio  1"
              />
              <h2 className="absolute text-lg sm:text-3xl lg:text-4xl w-72 text-center font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-60 group-hover:scale-100">
                {value.title}
              </h2>
              <div
                onClick={() => openModal(value)}
                className="absolute bottom-12 transition-all duration-500 ease-in-out transform text-gray-200 group-hover:scale-150 group-hover:border group-hover:border-terBg p-1 sm:p-2 hidden group-hover:block hover:bg-black hover:bg-opacity-60 hover:text-terBg text-[10px] sm:text-xs lg:text-base rounded-lg"
              >
                Read More
              </div>
            </motion.div>
          );
        })}
        <ModalPage
          showModal={showModal}
          setShowModal={setShowModal}
          project={projectInfo}
        />
      </div>
    </motion.div>
  );
}

export default WorkHistory;
