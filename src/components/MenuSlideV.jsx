import React from 'react'
import menu from '../assets/menu.json'
import MenuCard from './MenuCard'
import './MenuSlideV.css'
// import { NavLink } from 'react-router-dom'

const MenuSlideV = () => {
  const aux = "/menu";
  return (
    
    <div>
        <div className="menuSlideV">
        {
            menu.map((menu) => (
              // <NavLink to={`/menu/menu${menu.id}`}>
                <MenuCard img={menu.img} key={menu.id}/>
              // </NavLink>
            ))
        }
        </div>
    </div>
  )
}

export default MenuSlideV