import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {  motion } from "framer-motion";

const Carousal = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  //console.log(current)
  return (
    <div className="h-full w-full  relative overflow-hidden">
      <AiOutlineArrowLeft
        className="absolute top-1/2 left-5 text-black text-xl cursor-pointer z-30 ring-2 ring-black rounded-full hover:scale-125 transition duration-200 active:scale-95"
        onClick={nextSlide}
      />
      <AiOutlineArrowRight
        className="absolute top-1/2 right-5 text-black text-xl cursor-pointer z-10 ring-2 ring-black rounded-full hover:scale-125 transition duration-200 active:scale-95"
        onClick={prevSlide}
      />

      {images.map((imgs, index) => {
        return (
          <motion.div
            key={index}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {index === current ? (
              <img
                src={imgs}
                alt="port"
                className="absolute inset-0 block w-full h-full object-scale-down md:object-cover"
              />
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Carousal;
