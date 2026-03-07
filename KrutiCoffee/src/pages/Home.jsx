import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay.jsx";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu.jsx";
import Range from "../components/Range.jsx";
import About from "./About/About.jsx";

const Home = ({ setShowLogin }) => {
  const [category, setCategory] = useState("All");

  return (
    <div className="w-full min-h-screen overflow-hidden bg-[#1a0f0b]">
      <Navbar setShowLogin={setShowLogin} />
      
      {/* Step 1: Pass setCategory as a prop here */}
      <Range setCategory={setCategory} />
      
      <div className="ml-[120px]">
        {/* Step 2: Ensure ExploreMenu has an ID for the scroll anchor */}
        <div id="explore-menu">
           <ExploreMenu category={category} setCategory={setCategory} />
        </div>
        <FoodDisplay key={category} category={category} />
      </div>
    </div>
  );
};
export default Home;
