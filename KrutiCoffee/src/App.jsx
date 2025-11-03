import React, { useState } from "react";
import "./index.css";
import Home from "./pages/Home";
import TopSelling from "./pages/TopSelling";
import Footer from "./components/ExploreMenu/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
          {showLogin && <LoginPopup setShowLogin={setShowLogin} />}{" "}
      <div className="w-full font-extrabold">
        <Routes>
          <Route path="/" element={<Home setShowLogin={setShowLogin} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <TopSelling />
      <Footer />
    </>
  );
};
export default App;
