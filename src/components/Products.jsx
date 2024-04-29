import {React, useState} from 'react'
import Product from "./Product"
import { motion } from 'framer-motion'

function products() {

    var products = [
        {title: "arqitel",
         description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
         live: true, 
         case: false},

         {title: "TTR",
         description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
         live: true, 
         case: false},

         {title: "YIR 2024",
         description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
         live: true,  
         case: true},

         {title: "Yahoo!",
         description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
         live: true, 
         case: true},


    ];

    const[pos, setPos] = useState(0);

    const mover = (val) => {
      setPos(val*23);
    }

  return (
    <div className='mt-32 relative'>
      {products.map((val, index) => (<Product val={val} mover = {mover} count={index}/>))}
      <div className='absolute top-0 pointer-events-none w-full h-full'>
        <motion.div initial={{y: pos, x:"-50%"}}
        animate={{y: pos+ `rem`}}
        transition={{ease:[0.76, 0, 0.24, 1], duration: .5}}
        
        className='window absolute w-[32rem] bg-white  h-[23rem] left-[44%] overflow-hidden'>
          <motion.div
           animate={{y: -pos + `rem`}}
        transition={{ease:[0.76, 0, 0.24, 1], duration: .5}}

            className=' w-full bg-sky-200  h-full '></motion.div>
          <motion.div
            animate={{y: -pos + `rem`}}
            transition={{ease:[0.76, 0, 0.24, 1], duration: .5}}

            className=' w-full bg-sky-300  h-full '></motion.div>
          <motion.div
           animate={{y: -pos + `rem`}}
            transition={{ease:[0.76, 0, 0.24, 1], duration: .5}}

            className=' w-full bg-sky-100  h-full '></motion.div>
          <motion.div
           animate={{y: -pos + `rem`}}
            transition={{ease:[0.76, 0, 0.24, 1], duration: .5}}

            className=' w-full bg-sky-400  h-full '></motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default products