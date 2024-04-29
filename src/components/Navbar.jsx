import React from 'react'
import Button from './Button';


function Navbar() {
    let navName = ["Home", "Work", "Culture", "", "News"];
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
        
        <div className='nleft flex items-center'>
        <img src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg'></img>

        <div className='links flex gap-14 ml-20'>
            {navName.map((elem, index) => (

            elem.length === 0 ? <span className='rounded-sm w-1.5 h-7 bg-zinc-700 '></span> :
        
            <a className='font-regular text-sm flex items-center gap-1 ' href='#'>
        
            {index === 1 && ( <span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block rounded-full w-1.5 h-1.5 bg-green-500'></span>) }
        
            {elem}</a>

            ))}
        </div>
        </div>

        <Button/>
    
    </div>
  )
}

export default Navbar