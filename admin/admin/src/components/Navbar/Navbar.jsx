import React from 'react'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='Navbar relative flex justify-between o=items-center px-4 py-2 bg-[#221512] text-[#cfb7ac]'>
      <div className='flex flex-col gap-1'>
      <img className="logo h-24 w-auto object-contain" src={assets.logo} alt="" />
      <p className='font-bold'>Admin Panel</p>
      </div>
       <div className="h-px w-[80%] absolute top-32 bg-linear-to-r from-transparent via-[#b49e94] to-transparent my-3" />
      
      <img className='profile mt-8 h-16 bg-white rounded-full w-auto rounded-full flex justify-center' src={assets.profile_image} alt="" />        
    </div>
  )
}

export default Navbar