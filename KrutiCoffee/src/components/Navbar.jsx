import React from 'react';
import Range from './Range';
import { Link } from 'react-router-dom';



const Navbar = ({setShowLogin}) => {


  return (

    <div className="w-full min-h-screen bg-[#221512] flex flex-col font-mono overflow-x">
      {/* Top background image strip */}
      <div
        className="w-full h-[336px] bg-[url('/images/bgCover.avif')] bg-cover bg-center opacity-85"
        style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
      />

      {/* Flex row: Sidebar + content */}
      <div className="flex flex-row relative z-10" style={{ minHeight: "100vh" }}>

        {/* Sidebar */}
        <aside className="sidenav flex flex-col items-center justify-start gap-2  -gradient-to-b from-[#4c2b23] to-[#1a0f0b] border-r-2
         border-[#b49e94] rounded-r-2xl p-6 w-[120px] shadow-[4px_0_20px_rgba(0,0,0,0.4)]">
          <div className="relative w-20 h-20 overflow-hidden border-2 border-[#b49e94] rounded-b-full shadow-[0_8px_20px_rgba(139,69,19,0.4)]">
            <Link to="/"><img
              src="/images/navbaricon.jpg"
              alt="Logo"
              className="object-cover w-full h-full"
            /></Link>
          </div>

          <nav className="flex flex-col items-center justify-center gap-4 mt-24 px-8 py-12 -mb-28">
            {[
              "HOME",
              "SPECIALTY COFFEE",
              "BEST SELLING",
              "SHOP",
              "CAFES",
              "ABOUT US",
              "HALL OF FAME",
              "LOGIN",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="block transform -rotate-90 origin-left text-[#b49e94] text-[16px] py-12 px-8 font-bold bg-[#1e120f]
                  rounded-r-2xl border border-l-0  hover:bg-[#a16d5c] hover:text-white transition-all 
                 duration-300 shadow-sm ml-36  justify-center text-center h-30 w-50  border-[#b49e94]/40 "
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content (vertical stack) */}
        <div className="flex-1 flex flex-col items-center justify-start">

          {/* Center Top Logo Section */}
          <div className="w-full flex flex-col items-center py-6 mt-4">
            <img
              src="/images/kclogo.png"
              alt="KC Logo"
              className="w-[310px] -mt-12 h-auto object-cover shadow-2xl border shadow-[#2e1c18] border-[#1a0f0b] rounded-b-full"
            />

            {/*RIGHT NAV SEARCH+CART+LOGIN POPUP */}
            <div className='nav-right flex flex-row absolute py-8 px-4 gap-4 top-0 right-0'>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZWFyY2gtaWNvbiBsdWNpZGUtc2VhcmNoIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg==" alt="search" className='h-10 w-10' />

             <Link to="/cart"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaG9wcGluZy1jYXJ0LWljb24gbHVjaWRlLXNob3BwaW5nLWNhcnQiPjxjaXJjbGUgY3g9IjgiIGN5PSIyMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMjEiIHI9IjEiLz48cGF0aCBkPSJNMi4wNSAyLjA1aDJsMi42NiAxMi40MmEyIDIgMCAwIDAgMiAxLjU4aDkuNzhhMiAyIDAgMCAwIDEuOTUtMS41N2wxLjY1LTcuNDNINS4xMiIvPjwvc3ZnPg==" alt="cart" className='h-10 w-10'/></Link> 

              <button onClick={()=>setShowLogin(true)} className='LoginBtn  text-white text-[20px] border border-white z-50 rounded-full px-4 py-2'>Login / Signup</button>
            </div>

            <p className="header-p font-bold text-lg tracking-wide italic mt-12 text-[#b49e94]">
              From the hearts and hands of Koraput
            </p>
            <div className="h-px w-[80%] bg-linear-to-r from-transparent via-[#b49e94] to-transparent my-3" />
          </div>

          {/* Range Bar */}
          <div className="w-full flex items-center justify-center py-2">
            <Range />
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
