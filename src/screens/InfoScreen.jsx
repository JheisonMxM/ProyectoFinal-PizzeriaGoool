import React from 'react'
import './InfoScreen.css'
import InfoHead from '../components/InfoHead'
import PhoneNum from '../components/PhoneNum'
import DeliveryPrice from '../components/DeliveryPrice'

const InfoScreen = () => {
  return (
    <div className='info-screen'>
        <InfoHead />
        <div className="info-container">
            <span className='yellow-text-info'>
                Pizza Goool, vivimos la misma pasión por el fútbol al igual que por elaborar la mejor pizza.
            </span>
            <span className='head-info'>Numeros de telefono</span>
            <PhoneNum />
            <span className='head-info'>Zonas para envios</span>
            <DeliveryPrice />

        </div>
    </div>
  )
}

export default InfoScreen