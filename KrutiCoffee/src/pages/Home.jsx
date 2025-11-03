import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import FoodDisplay from '../components/FoodDisplay/FoodDisplay.jsx';
import ExploreMenu from '../components/ExploreMenu/ExploreMenu.jsx';

const Home = ({ setShowLogin }) => {
  const [category, setCategory] = useState("All");

  return (
    <div className='w-full min-h-screen'>
      <Navbar setShowLogin={setShowLogin} />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};
export default Home;
