import React from 'react'
import './MenuCard.css'

const MenuCard = ({img}) => {
  return (
    <div className='menu-cards'>
        <img src={img} alt="" />
    </div>
  )
}

export default MenuCard