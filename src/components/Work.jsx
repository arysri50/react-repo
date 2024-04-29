import React, { useState } from 'react'
import {motion,useMotionValueEvent, useScroll} from "framer-motion";

function Work() {

    const [images, setImages] = useState([
      {url: "https://images.unsplash.com/photo-1655437448735-a10513f37185?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "50%", left:"50%", isActive: false},
      {url: "https://w0.peakpx.com/wallpaper/568/599/HD-wallpaper-aryan-with-names-horizontal-text-aryan-name-happy-birtay-aryan-blue-neon-lights-with-aryan-name.jpg", top: "56%", left:"44%", isActive: false},
      {url: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/USoQ4J4ptAmoDcPuVzhU3xBb1R9Ege.jpg", top: "47%", left:"56%", isActive: false},
      {url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "60%", left:"53%", isActive: false},
      {url: "https://plus.unsplash.com/premium_photo-1685086785223-485f800ce410?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "43%", left:"40%", isActive: false},
      {url: " https://images.unsplash.com/photo-1579407364450-481fe19dbfaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0cml4fGVufDB8fDB8fHww", top: "65%", left:"55%", isActive: false},

  ])
    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      // console.log("Page scroll: ", latest)
      showAndHideImages(Math.floor(latest*100));
    })

    // function showAndHideImages(scrollval){
    //   console.log(scrollval);
    //   if(scrollval >= 1 && scrollval <=2){
    //     console.log("show first images");
    //   }
    //   else if(scrollval > 2 && scrollval <=3){
    //     console.log("show second images");
    //   }
    // }

//     function showAndHideImages(scrollval) {
//   console.log(scrollval);
//   const updatedImages = images.map((elem) =>
//     scrollval >= elem.range[0] && scrollval < elem.range[1]
//       ? { ...elem, isActive: true }
//       : { ...elem, isActive: false }
//   );
//   setImages(updatedImages);
// }


function showAndHideImages(scrollval) {
  console.log(scrollval);
  const updatedImages = images.map((elem, index) => ({
    ...elem,
    isActive: scrollval >= index+1 ,
  }));
  setImages(updatedImages);
}


  return (
    <div className='w-full mt-15'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>work</h1>

            <div className=' absolute top-0 w-full h-full '>
                {images.map((elem, index)=>(elem.isActive && 
                     (<img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top: elem.top, left: elem.left}} />) ) )}
            </div>

        </div>



    </div>
  )
}

export default Work