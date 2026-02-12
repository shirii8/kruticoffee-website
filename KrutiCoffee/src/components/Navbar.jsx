import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const navItems = [
  'HOME', 'SPECIALTY COFFEE', 'BEST SELLING', 'SHOP', 'CAFES', 'ABOUT US', 'HALL OF FAME', 'LOGIN',
];

const rightIcons = [
  {
    key: 'search',
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg==",
    alt: 'search',
  },
  {
    key: 'cart',
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSI4IiBjeT0iMjEiIHI9IjEiLz48Y2lyY2xlIGN4PSIxOSIgY3k9IjIxIiByPSIxIi8+PHBhdGggZD0iTTIuMDUgMi4wNWgzbDIuNjYgMTIuNDJhMiAyIDAgMCAwIDIgMS41OGg5Ljc4YTIgMiAwIDAgMCAxLjk1LTEuNTdsMS42NS03LjQzSDUuMTIiLz48L3N2Zz4=",
    alt: 'cart',
    link: '/cart',
  },
];

const profileMenu = [
  {
    key: 'orders',
    link: '/my-orders',
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMSA4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNloiLz48cGF0aCBkPSJtMy4zIDcgOC43IDUgOC43LTUiLz48cGF0aCBkPSJNMTIgMjJWMTIiLz48L3N2Zz4=",
    label: 'My Orders',
  },
  {
    key: 'logout',
    link: '/logout',
    img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Im0xNiAxNyA1LTUtNS01Ii8+PHBhdGggZD0iTTIxIDEySDkiLz48cGF0aCBkPSJNOTAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiLz48L3N2Zz4=",
    label: 'Logout',
    isLogout: true,
  },
];

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="w-full min-h-screen bg-[#221512] flex flex-col font-mono relative">
      {/* Background Cover Image */}
      <div
        className="w-full h-[336px] bg-[url('/images/bgCover.avif')] bg-cover bg-center opacity-85 absolute top-0 left-0 z-0"
      />

      {/* Main Layout Wrapper */}
      <div className="flex flex-row relative z-10 w-full min-h-screen">
        
        {/* SIDENAVBAR - Fixed Sticky Logic */}
        <aside className="sidenav flex z-50 flex-col sticky top-0 left-0 h-screen self-start items-center justify-start gap-2 bg-gradient-to-b from-[#4c2b23] to-[#1a0f0b] border-r-2 border-[#b49e94] rounded-r-2xl p-6 w-[120px] shadow-[4px_0_20px_rgba(0,0,0,0.4)]">
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden border-2 border-[#b49e94] rounded-b-full shadow-[0_8px_20px_rgba(139,69,19,0.4)]">
            <Link to="/">
              <img src="/images/navbaricon.jpg" alt="Logo" className="object-cover w-full h-full" />
            </Link>
          </div>

          <nav className="flex flex-col items-center justify-center gap-1 mt-20 py-12 -mb-28">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block transform -rotate-90 origin-left text-[#b49e94] text-[16px] py-4 px-2 font-bold bg-[#1e120f] rounded-r-2xl border border-l-0 hover:bg-[#a16d5c] hover:text-white transition-all duration-300 shadow-sm ml-36 justify-center text-center border-[#b49e94]/40"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* CONTENT AREA */}
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="w-full flex flex-col items-center py-6 mt-4 relative">
            
            {/* Main Center Logo */}
            <img
              src="/images/kclogo.png"
              alt="KC Logo"
              className="w-[310px] -mt-12 h-auto object-cover shadow-2xl border shadow-[#2e1c18] border-[#1a0f0b] rounded-b-full"
            />

            {/* Top Right Icons & Login */}
            <div className="nav-right flex flex-row absolute py-8 px-4 gap-4 top-0 right-0">
              {rightIcons.map((icon) => (
                <div key={icon.key} className="relative">
                  {icon.link ? (
                    <Link to={icon.link}>
                      <img src={icon.img} alt={icon.alt} className="h-10 w-10" />
                    </Link>
                  ) : (
                    <img src={icon.img} alt={icon.alt} className="h-10 w-10 cursor-pointer" />
                  )}

                  {icon.key === 'cart' && getTotalCartAmount() > 0 && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  )}
                </div>
              ))}

              {!token ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-white text-[18px] border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition"
                >
                  Login / Signup
                </button>
              ) : (
                <div className="relative group">
                  <div className="h-10 w-10 cursor-pointer rounded-sm border border-amber-500 bg-amber-950 flex items-center justify-center">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+"
                      alt="profile"
                      className="h-6 w-6"
                    />
                  </div>

                  <ul className="absolute right-0 mt-2 hidden group-hover:block bg-[#1e120f] text-white rounded-xl shadow-lg w-40 overflow-hidden z-[60]">
                    {profileMenu.map((item) => (
                      <li
                        key={item.key}
                        onClick={item.isLogout ? logout : () => navigate(item.link)}
                        className={`px-4 py-2 cursor-pointer transition-colors ${item.isLogout ? 'hover:bg-red-600' : 'hover:bg-[#a16d5c]'}`}
                      >
                        <div className="flex items-center gap-2">
                          <img src={item.img} alt={item.label} className="h-6 w-6 invert" />
                          <span>{item.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <p className="header-p font-bold text-lg tracking-wide italic mt-12 text-[#b49e94]">
              From the hearts and hands of Koraput
            </p>
            <div className="h-px w-[80%] bg-gradient-to-r from-transparent via-[#b49e94] to-transparent my-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useContext, useState } from 'react';
// import Range from './Range';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../context/StoreContext'; // FIXED: Removed getTotalCartAmount import

// const Navbar = ({setShowLogin}) => {
//   const [menu, setMenu]=useState("home");
//   const {getTotalCartAmount, token, setToken}=useContext(StoreContext);
//   const navigate = useNavigate();
//   // ADDED: logout function
//   const logout = () => {
//     setToken("");
//     localStorage.removeItem("token");
//     navigate("/")
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#221512] flex flex-col font-mono overflow-x">
//       {/* Top background image strip */}
//       <div
//         className="w-full h-[336px] bg-[url('/images/bgCover.avif')] bg-cover bg-center opacity-85"
//         style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
//       />

//       {/* Flex row: Sidebar + content */}
//       <div className="flex flex-row relative z-10" style={{ minHeight: "100vh" }}>

//         {/* Sidebar */}
//         <aside className="sidenav flex z-50 flex-col sticky top-0 left-0 items-center justify-start gap-2  gradient-to-b from-[#4c2b23] to-[#1a0f0b] border-r-2
//            border-[#b49e94] rounded-r-2xl p-6 w-[120px]  shadow-[4px_0_20px_rgba(0,0,0,0.4)]">
//           <div className="relative w-20 h-20 overflow-hidden border-2 border-[#b49e94] rounded-b-full shadow-[0_8px_20px_rgba(139,69,19,0.4)]">
//             <Link to="/"><img
//               src="/images/navbaricon.jpg"
//               alt="Logo"
//               className="object-cover w-full h-full"
//             /></Link>
//           </div>

//           <nav className="flex flex-col items-center justify-center gap-1 mt-20 py-12 -mb-28 ">
//             {[
//               "HOME",
//               "SPECIALTY COFFEE",
//               "BEST SELLING",
//               "SHOP",
//               "CAFES",
//               "ABOUT US",
//               "HALL OF FAME",
//               "LOGIN",
//             ].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="block transform -rotate-90 origin-left text-[#b49e94] text-[16px] py-4 px-2  font-bold bg-[#1e120f]
//                   rounded-r-2xl border border-l-0  hover:bg-[#a16d5c] hover:text-white transition-all 
//                    duration-300 shadow-sm ml-36  justify-center text-center h-25 w-35  border-[#b49e94]/40 "
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>
//         </aside>

//         {/* Main Content (vertical stack) */}
//         <div className="flex-1 flex flex-col items-center justify-start">

//           {/* Center Top Logo Section */}
//           <div className="w-full flex flex-col items-center py-6 mt-4">
//             <img
//               src="/images/kclogo.png"
//               alt="KC Logo"
//               className="w-[310px] -mt-12 h-auto object-cover shadow-2xl border shadow-[#2e1c18] border-[#1a0f0b] rounded-b-full"
//             />

//             {/*RIGHT NAV SEARCH+CART+LOGIN POPUP */}
//             <div className='nav-right flex flex-row absolute py-8 px-4 gap-4 top-0 right-0'>
//               <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZWFyY2gtaWNvbiBsdWNpZGUtc2VhcmNoIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg==" alt="search" className='h-10 w-10' />

//               {/* CART ICON */}
//               <div className="relative">
//                 <Link to="/cart">
//                   <img
//                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSI4IiBjeT0iMjEiIHI9IjEiLz48Y2lyY2xlIGN4PSIxOSIgY3k9IjIxIiByPSIxIi8+PHBhdGggZD0iTTIuMDUgMi4wNWgzbDIuNjYgMTIuNDJhMiAyIDAgMCAwIDIgMS41OGg5Ljc4YTIgMiAwIDAgMCAxLjk1LTEuNTdsMS42NS03LjQzSDUuMTIiLz48L3N2Zz4="
//                     alt="cart"
//                     className="h-10 w-10"
//                   />
//                 </Link>

//                 {/* Cart item indicator */}
//                 {getTotalCartAmount() > 0 && (
//                   <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//                 )}
//               </div>

//               {/* LOGIN / PROFILE BASED ON TOKEN */}
//               {!token ? (
//                 <button
//                   onClick={() => setShowLogin(true)}
//                   className="text-white text-[18px] border border-white rounded-full px-4 py-2
//                   hover:bg-white hover:text-black transition"
//                 >
//                   Login / Signup
//                 </button>
//               ) : (
//                 <div className="relative group">

//                   {/* Profile Icon */}
//                    <Link to="/profile">
//                   <img
//                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItaWNvbiBsdWNpZGUtdXNlciI+PHBhdGggZD0iTTE5IDIxdi0yYTQgNCAwIDAgMC00LTRIOWE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4="
//                     alt="profile"
//                     className="h-10 w-10 cursor-pointer flex flex-col gap-2.5 rounded-sm border border-amber-500 bg-amber-950 px-[25px] py-[12px] hover:flex"
//                   />
//                 </Link>

//                   {/* Profile Dropdown */}
//                   <ul className="absolute right-0 mt-2 hidden group-hover:block
//                     bg-[#1e120f] text-white rounded-xl shadow-lg w-40 overflow-hidden">

//                     <li className="px-4 py-2 hover:bg-[#a16d5c] cursor-pointer">
                     
//                   <Link to="/ My Orders">
//                   <img
//                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJveC1pY29uIGx1Y2lkZS1ib3giPjxwYXRoIGQ9Ik0yMSA4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNloiLz48cGF0aCBkPSJtMy4zIDcgOC43IDUgOC43LTUiLz48cGF0aCBkPSJNMTIgMjJWMTIiLz48L3N2Zz4="
//                     alt=" My Orders"
//                     className="h-10 w-10 cursor-pointer rounded-full border border-white"
//                   />
//                 </Link>
//                     </li>

//                     <li
//                       onClick={logout} // FIXED: now properly defined
//                       className="px-4 py-2 hover:bg-red-600 cursor-pointer"
//                     >
//                       <Link to="/Logout">
//                   <img
//                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvZy1vdXQtaWNvbiBsdWNpZGUtbG9nLW91dCI+PHBhdGggZD0ibTE2IDE3IDUtNS01LTUiLz48cGF0aCBkPSJNMjEgMTJIOSIvPjxwYXRoIGQ9Ik05IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNCIvPjwvc3ZnPg=="
//                     alt="Logout"
//                     className="h-10 w-10 cursor-pointer rounded-full border border-white"
//                   />
//                 </Link>
                      
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <p className="header-p font-bold text-lg tracking-wide italic mt-12 text-[#b49e94]">
//               From the hearts and hands of Koraput
//             </p>
//             <div className="h-px w-[80%] bg-linear-to-r from-transparent via-[#b49e94] to-transparent my-3" />
//           </div>

//           {/* Range Bar */}
//           <div className="w-full flex items-center justify-center py-2">
//             {/* <Range /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



 