import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import Logo from '../assets/images/Logo.png'
import {CgMenuRight} from 'react-icons/cg'
import {TfiClose} from 'react-icons/tfi'

function SideMenu({homeRef, contactRef, aboutRef, proRef}) {
    const [showMenu, setShowMenu] = useState(false);

    
    const menuAnimation = {
        hidden: {opacity: 0},
        visible: { opacity: 1, transition: { duration: 0.5,    ease: "easeIn" } },
      }

      useEffect(() => {
        if (showMenu) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
      });
   
    // const closeSideMenu = () => setShowMenu(false);
    
  return (
  
    <>
    <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}} src={Logo} alt='Logo letter' className='fixed left-0 lg:-top-16 z-10 w-40 lg:w-80   cursor-pointer' onClick={() => {
              homeRef.current?.scrollIntoView({ behavior: "smooth" })}}/>
              {showMenu ? <TfiClose className='fixed z-20 top-16 text-2xl text-white right-10 cursor-pointer lg:hidden ease-in' onClick={()=> {setShowMenu(false)}}/> : <CgMenuRight className='fixed z-10 top-16 text-2xl text-white right-10 cursor-pointer lg:hidden ease-in' onClick={()=> {setShowMenu(true)}}/>}
             <DesktopMenu menuAnimation={menuAnimation} homeRef={homeRef} aboutRef={aboutRef} proRef={proRef} contactRef={contactRef}/>
             {showMenu ? <MobileMenu setShowMenu={setShowMenu} menuAnimation={menuAnimation} homeRef={homeRef} aboutRef={aboutRef} proRef={proRef} contactRef={contactRef}/> : <></>}

 

   </>

  )
}

function DesktopMenu({ menuAnimation, homeRef, aboutRef, proRef, contactRef}){
        return (
<div className='font-architects text-white hidden fixed right-0  z-10 h-full lg:flex justify-center items-center lg:top-16 w-full lg:w-40 transition-all transform duration-150'>
    
    <motion.ul initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} className="flex flex-col  text-lg ">
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            homeRef.current?.scrollIntoView({ behavior: "smooth" })}}>Home</motion.li>
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" })}}>About Me</motion.li>
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            proRef.current?.scrollIntoView({ behavior: "smooth" })}}>Portfolio</motion.li>
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" })}}>Contact Me</motion.li>
  </motion.ul>
  </div>
        )
}

function MobileMenu({setShowMenu, menuAnimation, homeRef, aboutRef, proRef, contactRef}){
        return (
<div className='font-architects text-white  fixed inset-0  z-10 h-full flex justify-center items-center w-full bg-black bg-opacity-90 lg:hidden transition-all transform duration-150'>
    
    <motion.ul initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="flex flex-col  text-lg ">
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            homeRef.current?.scrollIntoView({ behavior: "smooth" }); setShowMenu(false) }}>Home</motion.li>
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" }); setShowMenu(false)}}>About Me</motion.li>
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            proRef.current?.scrollIntoView({ behavior: "smooth" }); setShowMenu(false)}}>Portfolio</motion.li>
    <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" }); setShowMenu(false)}}>Contact Me</motion.li>
  </motion.ul>
  </div>
        )
}

// const desktopMenu = ({menuAnimation, homeRef, aboutRef, proRef, contactRef}) => {
        
//         <div className='font-architects text-white  fixed right-0  z-10 h-full flex justify-center items-center lg:top-16 w-full lg:w-40 transition-all transform duration-150'>
    
//         <motion.ul initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} className="flex flex-col  text-lg ">
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 homeRef.current?.scrollIntoView({ behavior: "smooth" })}}>Home</motion.li>
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 aboutRef.current?.scrollIntoView({ behavior: "smooth" })}}>About Me</motion.li>
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 proRef.current?.scrollIntoView({ behavior: "smooth" })}}>Portfolio</motion.li>
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 contactRef.current?.scrollIntoView({ behavior: "smooth" })}}>Contact Me</motion.li>
//       </motion.ul>
//       </div>

// }

// const mobileMenu = () => {
//         <div className='font-architects text-white lg:fixed lg:right-0  z-10 lg:h-full lg:flex justify-center lg:items-center lg:top-16 w-full lg:w-40 transition-all transform duration-150'>
    
//         <motion.ul initial="hidden" animate="visible" transition={{ staggerChildren: 0.2 }} className="flex flex-col  text-lg ">
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 homeRef.current?.scrollIntoView({ behavior: "smooth" })}}>Home</motion.li>
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 aboutRef.current?.scrollIntoView({ behavior: "smooth" })}}>About Me</motion.li>
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 proRef.current?.scrollIntoView({ behavior: "smooth" })}}>Portfolio</motion.li>
//         <motion.li variants={menuAnimation} className="pb-8  transition-transform duration-200 cursor-pointer hover:line-through" onClick={() => {
//                 contactRef.current?.scrollIntoView({ behavior: "smooth" })}}>Contact Me</motion.li>
//       </motion.ul>
//       </div>
       
// }

export default SideMenu