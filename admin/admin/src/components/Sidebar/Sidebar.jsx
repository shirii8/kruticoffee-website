import React from 'react'
import {assets} from "../../assets/assets"
import { NavLink } from 'react-router-dom'
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar w-[18%] bg-black h-[632.4px] border-r-1 border-[#b49e94] border-t-0 shadow-md'>
      <div className="sidebar-options text-white pt-9 pl-4 flex flex-col gap-8">
        <NavLink to='/add' className="sidebar-option flex items-center gap-4 border border-r-0 border-[#b49e94] px-8 py-4" style={{ borderRadius: "6px 0 0 6px" }}>
          <img className='bg-white rounded-full h-5 w-auto' src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to='/list' className="sidebar-option flex items-center gap-4 border border-r-0 border-[#b49e94] px-8 py-4" style={{ borderRadius: "6px 0 0 6px" }}>
          <img className='bg-white rounded-full h-5 w-auto' src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className="sidebar-option flex items-center gap-4 border border-r-0 border-[#b49e94] px-8 py-4" style={{ borderRadius: "6px 0 0 6px" }}>
          <img className='bg-white rounded-full h-5 w-auto' src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
        
    </div>
  )
}

export default Sidebar