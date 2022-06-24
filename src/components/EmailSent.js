import React from 'react'
import GifImage from "../assets/images/doggif.gif";

export const EmailSent = () => {
  return (
    <div className='text-center'>
        <h1 className='text-terBg text-xl md:text-3xl font-bold font-montserrat'>Email Recieved !</h1>
        <p className='text-gray-200 text-sm md:text-lg font-radioCanada font-light'>Will get back to you asap!</p>
        <img src={GifImage} alt="Giphy" className='m-auto'/>
    </div>
  )
}
