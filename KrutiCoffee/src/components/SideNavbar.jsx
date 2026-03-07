import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  return (
    /* Flex row: Sidebar + content */
    <div className="flex flex-row relative z-10" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
     <aside
          className="flex z-50 flex-col fixed top-2 left-0 items-center justify-start gap-2  gradient-to-b from-[#4c2b23] to-[#1a0f0b] border-r-2
           border-[#b49e94] rounded-r-2xl p-6 w-[120px]  shadow-[4px_0_20px_rgba(0,0,0,0.4)]"
        >
          <div className="relative w-20 h-20 overflow-hidden border-2 border-[#b49e94] rounded-b-full shadow-[0_8px_20px_rgba(139,69,19,0.4)]">
            <Link to="/">
              <img
                src="/images/navbaricon.jpg"
                alt="Logo"
                className="object-cover w-full h-full"
              />
            </Link>
          </div>

          <nav className="flex flex-col items-center justify-center gap-1 mt-16 py-12 -mb-28 ">
            {[
              "HOME",
              "ORIGINAL COFFEE",
              "SHOP",
              "CAFES",
              // "ABOUT US",
              "HALL OF FAME",
              // "LOGIN",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="block transform -rotate-90 origin-left text-[#b49e94] text-[16px] p-8 font-bold 
    /* Glassmorphism Base */
    bg-white/5 backdrop-blur-lg 
    /* Premium Borders: Thin highlight on top, subtle on others */
    border border-white/20 border-l-white/40 
    /* Smooth for the Glow effect */
    transition-all duration-300 overflow-hidden shadow-2xl
    /* Hover: Increases brightness and adds a soft copper glow */
    hover:bg-[#581703]/30 hover:text-white hover:border-[#a16d5c]/60 
    hover:shadow-[0_0_25px_rgba(161,109,92,0.4)]
    /* Keep your layout values exactly as they were */
    ml-36 justify-center text-center h-25 w-35 rounded-r-2xl border-l-0  hover:z-10"
              >
                {/* Adding a subtle gloss overlay inside */}
                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none"></div>

                <span className="relative z-10 tracking-widest uppercase">
                  {item}
                </span>
              </a>
              // <a
              //   key={item}
              //   href="#"
              //   className="block transform -rotate-90 origin-left text-[#b49e94] text-[16px] p-8 font-bold bg-[#1e120f]
              //     rounded-r-2xl border border-l-0  hover:bg-[#a16d5c] hover:text-white transition-all overflow-hidden
              //      duration-300 shadow-sm ml-36  justify-center text-center h-25 w-35  border-[#b49e94]/40 "
              // >
              //   {item}
              // </a>
            ))}
          </nav>
        </aside>
    </div>
  );
};

export default SideNavbar;