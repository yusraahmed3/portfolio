import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';
import Logo from '../assets/images/Logo.png'


function SideMenu({homeRef, contactRef, aboutRef, proRef}) {
    const [showMenu, setShowMenu] = useState(false);

    const showSideMenu = () => setShowMenu(!showMenu);

    const menuAnimation = {
      hidden: {opacity: 0},
      visible: { opacity: 1, transition: { duration: 0.5,    ease: "easeIn" } },
    }
    // const closeSideMenu = () => setShowMenu(false);
    
  return (
  
    <>
    <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2}} src={Logo} alt='Logo letter' className='fixed left-0 md:-top-16 z-10 w-40 md:w-80 h-auto  cursor-pointer' onClick={() => {
              homeRef.current?.scrollIntoView({ behavior: "smooth" })}}/>
    <div className="font-architects text-white  fixed md:right-0  z-10 h-full flex justify-end md:items-center top-16 w-full md:w-40 transition-all transform duration-150">
    
      <motion.ul initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} className="flex md:flex-col  md:text-lg text-sm">
      <motion.li variants={menuAnimation} className="pr-8 md:pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
              homeRef.current?.scrollIntoView({ behavior: "smooth" })}}>Home</motion.li>
      <motion.li variants={menuAnimation} className="pr-8 md:pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })}}>About Me</motion.li>
      <motion.li variants={menuAnimation} className="pr-8 md:pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
              proRef.current?.scrollIntoView({ behavior: "smooth" })}}>Portfolio</motion.li>
      <motion.li variants={menuAnimation} className="pr-8 md:pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" })}}>Contact Me</motion.li>
    </motion.ul>
   
   </div>
   </>

  )
}

export default SideMenu