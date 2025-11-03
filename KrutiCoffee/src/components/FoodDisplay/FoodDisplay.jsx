import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list}= useContext(StoreContext)

  return (
    <div className='food-display mt-8 bg-[#221512]' id='food-display'>
        <h2 className='text-[16px] font-bold'>Top Dishes near you</h2>
     <div
            className="food-display-list grid mt-8 gap-8"
            style={{ gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))" }}
          >

          {food_list.map((item,index)=>{
            if(category==="All" || category===item.category){

            }
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description}  price={item.price} image={item.image}/>
          })}
        </div>
    </div>
  )
}

export default FoodDisplay;