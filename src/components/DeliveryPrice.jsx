import React from 'react'
import './DeliveryPrice.css'

const DeliveryPrice = () => {
  return (
    <div className='price-del-container'>
        <ul className='ul-del'>
            <li>
                <span className='zona-text'>Tembladerani:</span>  <span className='price-del-text'>10Bs</span>
            </li>
            <li>
            <span className='zona-text'>San Pedro:</span> <span className='price-del-text'>10Bs</span>
            </li>
            <li>
            <span className='zona-text'>Miraflores:</span> <span className='price-del-text'>10Bs</span>
            </li>
            <li>
            <span className='zona-text'>Villa Victoria:</span> <span className='price-del-text'>10Bs</span>
            </li>
            <li>
            <span className='zona-text'>Llojeta:</span> <span className='price-del-text'>10Bs</span>
            </li>
            <li>
            <span className='zona-text'>Ciudad Satélite:</span> <span className='price-del-text'>10Bs</span>
            </li>
            <li>
            <span className='zona-text'>Santiago II:</span> <span className='price-del-text'>10Bs</span>
            </li>
            <li>
            <span className='zona-text'>Villa Adela:</span> <span className='price-del-text'>10Bs</span>
            </li>
        </ul>
    </div>
  )
}

export default DeliveryPrice