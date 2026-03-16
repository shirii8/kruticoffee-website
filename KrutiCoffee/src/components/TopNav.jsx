import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TopNav = ({ token, getTotalCartAmount, setShowLogin, logout }) => {
  const navigate = useNavigate(); // Necessary for the navigate() call in your li

  return (
    /* Floating Action Hub Wrap */
    <div className="absolute top-0 right-0 z-[100] py-10 px-8 lg:px-12">
      {/* GLASSMORPHISM TAB: The Control Slab */}
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {/* UTILITIES GROUP (Search & Cart) */}
        <div className="flex items-center gap-5 px-4">
          {/* Search */}
          <button className="group relative">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg=="
              alt="search"
              className="h-5 w-5 opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110"
            />
          </button>

          {/* Cart */}
          <div className="relative group">
            <Link to="/cart">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSI4IiBjeT0iMjEiIHI9IjEiLz48Y2lyY2xlIGN4PSIxOSIgY3k9IjIxIiByPSIxIi8+PHBhdGggZD0iTTIuMDUgMi4wNWgzbDIuNjYgMTIuNDJhMiAyIDAgMCAwIDIgMS41OGg5Ljc4YTIgMiAwIDAgMCAxLjk1LTEuNTdsMS42NS03LjQzSDUuMTIiLz48L3N2Zz4="
                alt="cart"
                className="h-5 w-5 opacity-40 group-hover:opacity-100 transition-all group-hover:scale-110"
              />
            </Link>
            {getTotalCartAmount() > 0 && (
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#b49e94] rounded-full shadow-[0_0_8px_#b49e94] animate-pulse"></span>
            )}
          </div>
        </div>

        {/* Vertical Aesthetic Divider */}
        <div className="h-8 w-[1px] bg-white/10 mx-1"></div>

        {/* DYNAMIC AUTH SECTION */}
        {!token ? (
          <div className="flex items-center gap-1 pl-2">
            <button
              onClick={() => setShowLogin(true)}
              className="px-6 py-3 bg-[#b49e94] text-[#1a0f0b] text-[10px] font-black tracking-[0.2em] uppercase rounded-xl transition-all hover:bg-white hover:scale-[1.02] active:scale-95 shadow-xl"
            >
              Join / Sign In
            </button>
          </div>
        ) : (
          <div className="relative group px-2 py-2">
            {" "}
            {/* Added padding to bridge the gap for hover */}
            {/* Profile Avatar Trigger */}
            <div className="h-8 w-8 opacity-40 group-hover:opacity-100 group-hover:scale-110 cursor-pointer rounded-full border border-white/10 p-[2px] group-hover:border-[#b49e94]/60 transition-all bg-white/5 overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/user.svg"
                alt="profile"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity invert"
              />
            </div>
            {/* Slab Dropdown */}
            <ul className="absolute right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#1a0f0b]/95 border border-white/10 text-white rounded-2xl shadow-2xl w-48 overflow-hidden backdrop-blur-3xl z-[110]">
              <li onClick={() => navigate("/myorders")}>
                <div className="flex items-center px-6 py-4 text-[9px] tracking-[0.2em] font-black uppercase hover:bg-white/5 transition-all text-white/60 hover:text-[#b49e94] cursor-pointer">
                  My Orders
                </div>
              </li>
              <li
                onClick={logout}
                className="px-6 py-4 text-[9px] tracking-[0.2em] font-black uppercase text-red-400/60 hover:text-red-400 hover:bg-red-500/5 cursor-pointer border-t border-white/5 transition-all"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
