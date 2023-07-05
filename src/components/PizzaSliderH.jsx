import React from 'react'
import PizzaContainer from './PizzaContainer'
import './PizzaSliderH.css'
import pizzas from '../assets/imagescard.json'

const PizzaSliderH = () => {
  return (
    <div className='pizza-slider-container'>
        {
            pizzas.map((pizza) =>(
                <PizzaContainer imagen={pizza.imageurl} nombre={pizza.pizza_name} descripcion={pizza.pizza_des} key={pizza.id}/>
            ))
        }
    </div>
  )
}

export default PizzaSliderH