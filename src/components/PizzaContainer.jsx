import React from 'react'
import './PizzaContainer.css'

const PizzaContainer = ({imagen, nombre, descripcion}) => {
    // const pizza = props.pizza
  return (
    <div className="pizza-card-container">
        <img src={imagen} alt="" />
        <span className='pizza-name-card'>{nombre}</span>
        <span className='pizza-description-card'>{descripcion}</span>
    </div>
  )
}

export default PizzaContainer