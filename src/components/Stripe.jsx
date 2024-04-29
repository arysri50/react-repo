import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-10 py-5 border-t-2 border-r-2 border-b-2 border-zinc-700 flex justify-between items-cemter'>
        <img src={val.url} alt=""></img>
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe