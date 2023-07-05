import React from 'react'
import './PromoMes.css'

const PromoMes = () => {
  return (
    <div className='PromoMes'>
        <img src="../static/pizzapromo.png" className='promoimage' alt="" />
        <div className="text-container">
            <span className='tittle-prom'>Promocion del mes</span>
            <span className='description-prom'> 2 pizzas duo mas una coca cola 300 ml</span>
            <span className='price-prom'> A tan solo 45 Bs</span>
        </div>
    </div>
  )
}

export default PromoMes