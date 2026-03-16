import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

// Components
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Shop from "./components/Shop";
import Marquee from './components/Marquee';

// Pages
import Home from "./pages/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Verify from "./pages/Verify/Verify";
import About from "./pages/About/About";
import OurStory from "./components/OurStory";
import Delivery from "./components/Delivery";
import Privacypolicy from "./components/Privacypolicy";
import MyOrders from "./pages/MyOrders/MyOrders";

// HELPER: Forces the window to top/ID when the URL changes
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="bg-[#221512] min-h-screen text-[#b49e94]">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      
      {/* 1. Logic Helper */}
      <ScrollToTop />

      {/* 2. Main Page Content */}
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin} />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Delivery/>} />
          <Route path="/about" element={<Privacypolicy/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>

      {/* 3. Global Components (Persistent across pages) */}
      {/* Added responsive padding and corrected layout flow */}
      <div className="w-full pl-0 lg:pl-[120px]"> 
        <Shop />
        
        <div className="w-full pt-6"> 
          <Marquee />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;