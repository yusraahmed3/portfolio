import React, { useRef } from "react";
import { motion } from "framer-motion";
import Useform from "./Useform";
import validate from "./ValidateInfo";
import gtag from 'ga-gtag'

const inputAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, type: "spring", bounce: 0.3 },
  },
};
const buttonAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, type: "spring", bounce: 0.6 },
  },
};

export const Form = ({ submitForm }) => {

  function trackContactButtonClick(){
    gtag('event', 'click_send_message_button', {
      button_title: 'Send message'
    })
  }

  const form = useRef();
  const { handleChange, values, handleSubmit, errors } = Useform(
    submitForm,
    validate
  );

  return (
    <form
      ref={form}
      className="flex flex-col space-y-6"
      onSubmit={handleSubmit}
    >
      <motion.div variants={inputAnimation} className="relative">
        <input
          type="email"
          id="email"
          className="peer w-full py-2  border-b border-gray-200 bg-transparent focus:border-terBg focus:border-b-2 text-gray-200 placeholder-transparent outline-none"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          formNoValidate
        />

        <label
          htmlFor="email"
          className="font-architects peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-200 absolute left-0 -top-3 text-terBg text-xs  sm:text-sm transition-all
    peer-focus:text-sm peer-focus:text-terBg peer-focus:-top-3"
        >
          Email
        </label>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </motion.div>
      <motion.div variants={inputAnimation} className="relative ">
        <input
          type="text"
          id="name"
          className="peer w-full py-2 border-b border-gray-200   bg-transparent focus:border-terBg focus:border-b-2 text-gray-200 placeholder-transparent outline-none"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <label
          htmlFor="name"
          className="font-architects peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-200 absolute left-0 -top-3 text-terBg text-sm transition-all
    peer-focus:text-sm peer-focus:text-terBg peer-focus:-top-3"
        >
          Name
        </label>
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </motion.div>
      <motion.div variants={inputAnimation} className="relative ">
        <input
          type="text"
          id="subject"
          className="peer w-full py-2 border-b border-gray-200   bg-transparent focus:border-terBg focus:border-b-2 text-gray-200 placeholder-transparent outline-none"
          placeholder="Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
        <label
          htmlFor="subject"
          className="font-architects peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-200 absolute left-0 -top-3 text-terBg text-sm transition-all
    peer-focus:text-sm peer-focus:text-terBg peer-focus:-top-3"
        >
          Subject
        </label>
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject}</p>
        )}
      </motion.div>
      <motion.div variants={inputAnimation} className="relative ">
        <textarea
          rows={2}
          id="subject"
          className="peer w-full h-auto py-2 border-b border-gray-200   bg-transparent focus:border-terBg focus:border-b-2 text-gray-200 placeholder-transparent outline-none overflow-auto"
          placeholder="Message"
          name="message"
          value={values.message}
          onChange={handleChange}
        />
        <label
          htmlFor="Message"
          className="font-architects peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-200 absolute left-0 -top-3 text-terBg text-sm transition-all
    peer-focus:text-sm peer-focus:text-terBg peer-focus:-top-3 resize-none"
        >
          Message
        </label>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </motion.div>

      <motion.button
        whileHover={{ translateX: -30 }}
        variants={buttonAnimation}
        type="submit"
        onClick={trackContactButtonClick}
        className="font-architects text-gray-200 hover:bg-black hover:bg-opacity-30 hover:text-terBg transition-colors duration-300 text-sm w-32 md:w-28 inline-block self-end p-1 border-2 border-terBg  rounded-lg"
      >
        Send Message
      </motion.button>
    </form>
  );
};
