import React from 'react'
import Marquee from '../components/Marquee'

const TopSelling = () => {
  return (
    <div className='min-h-screen w-full bg-[#221512]' >


       {/* Marquee */}
          <div className="w-full px-8 pt-6">
          <Marquee/>
          </div>


        <div className="header font-bold italic text-4xl  text-[#b49e94] flex justify-center">
            Top Selling Products
        </div>
        <div className="h-[1px] w-[100%] bg-linear-to-r from-transparent via-[#b49e94] to-transparent my-3" />
    </div>
  )
}

export default TopSelling