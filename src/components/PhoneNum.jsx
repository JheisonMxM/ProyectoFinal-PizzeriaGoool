import React from 'react'
import './PhoneNum.css'

const PhoneNum = () => {
  return (
    <div className='phones-container'>
        <span className='dep'>La Paz</span>
        <ul>
            <li>
                Tembladerani: 2419630
            </li>
            <li>
                San Pedro: 2483029
            </li>
            <li>
                Miraflores: 2228165
            </li>
            <li>
                Villa Victoria: 77521215
            </li>
            <li>
                Llojeta: 68068086
            </li>
        </ul>
        <span className='dep'>El Alto</span>
        <ul>
            <li>
                Ciudad Satélite: 63224545
            </li>
            <li>
                Santiago II: 69895757
            </li>
            <li>
                Villa Adela: 68107878
            </li>
        </ul>
    </div>
  )
}

export default PhoneNum