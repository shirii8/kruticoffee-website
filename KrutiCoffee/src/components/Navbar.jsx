import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import SideNavbar from "./SideNavbar";
import TopNav from "./TopNav";
import Hero from "./Hero";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  
  // Logout logic maintained in the parent wrapper
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    window.location.replace("/"); // or use navigate("/") if within Router
  };

  return (
    <div className="w-full min-h-screen bg-[#1a0f0b] flex flex-row font-mono overflow-x-hidden">
      
      {/* 1. FIXED LEFT NAVIGATION */}
      <SideNavbar />

      {/* 2. MAIN CONTENT AREA */}
      {/* Note: We add ml-[120px] to push content past the fixed sidebar width */}
      <div className="flex-1 flex flex-col relative z-10 lg:ml-[120px]">
        
        {/* Top background aesthetic strip (Oolticx inspired) */}
        <div 
          className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#221512] to-transparent opacity-60 pointer-events-none" 
          style={{ zIndex: 0 }}
        />

        {/* 3. TOP UTILITY BAR (Search, Logo, Cart, Login) */}
        <TopNav 
          token={token} 
          getTotalCartAmount={getTotalCartAmount} 
          setShowLogin={setShowLogin} 
          logout={logout} 
        />

        {/* 4. THE HERO SECTION */}
        <Hero />
        
        {/* ArtisticRange can be placed here or in your Home.jsx page */}
      </div>

      {/* GLOBAL CUSTOM STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Custom scrollbar for a premium look */
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #1a0f0b;
        }
        ::-webkit-scrollbar-thumb {
          background: #4c2b23;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b49e94;
        }
      `}} />
    </div>
  );
};

export default Navbar;