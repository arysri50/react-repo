import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl py-10 flex gap-32 mx-auto'>
            <div className='basis-1/2'>
                <h1 className='text-[10rem] font-semibold leading-none tracking-tight'>Refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-5 '>
                <div className='basis-1/3'>
                    <h4 className='mb-8 text-zinc-500 capitalize'>Socials</h4>
                    {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => <a className='block mt-2  text-zinc-600 capitalize'>{item}</a>)}
                </div>

                <div className='basis-1/3'>
                    <h4 className='mb-8 text-zinc-500 capitalize'>Socials</h4>
                    {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => <a className='block mt-2  text-zinc-600 capitalize'>{item}</a>)}
                </div>

                <div className='basis-1/2'>
                    <p className='text-right flex flex-col items-end '>Refokus is a pioneering dgital agency driven by design and empowered by technology.</p>
                    <img src='https://www.redhat.com/rhdc/managed-files/rhb-logos-tech_partner_buttons-Ecosystem_catalog.svg' className='w-32 mt-10' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer