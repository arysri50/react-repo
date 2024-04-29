import React from 'react'
import {motion} from 'framer-motion';

function Marquee({imagesurl, direction}) {

  return (
    <div className='flex w-full overflow-hidden'>
        

        <motion.div 
        initial={{x: direction ==="left" ? "0" : "-100%"}} 
        animate={{x:direction ==="left" ? "-100%" : "0"}} 
        transition={{ease: "linear", duration: 15, repeat:Infinity}} 
        className='flex flex-shrink-0  gap-40 py-10 pr-40 '>
          {imagesurl.map((url,index) => (
          <img src={url} key={index} className='object-cover w-20 h-10' />
          ))}
        </motion.div>
          
        <motion.div
         initial={{x: direction ==='left' ? "0" : "-100%"}} 
         animate={{x:direction ==='left' ? "-100%" : "0"}} 
         transition={{ease: "linear", duration: 15, repeat:Infinity}} 
         className='flex flex-shrink-0  gap-40 py-10 pr-40 '>
          {imagesurl.map((url,index) => (
          <img src={url} key={index} className='object-cover w-20 h-10' />
          ))}
        </motion.div>


    </div>
  )
}

export default Marquee