import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='Explore-Menu' id='Explore-Menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-txt'>choose ndbjbcbjASBD AC HC Ajs SC ASCHBJC SC CJNJ  njnd dcnj</p>
        <div className="explore-menu-list">
            {menu_list.map((item,idx)=>{
                return(
                    <div key={idx} className='explore-menu-list-item'>
                        <div className='onClick={()=> setCategory(prev===item.menu_name? "All": item.menu_name)}'></div>
                        <img className={category===item.menu_name?"active": ""} src="item.menu_image" alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu