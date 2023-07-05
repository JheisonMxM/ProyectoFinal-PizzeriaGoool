import React from 'react'
import './LeftMenu.css'
import { Icon } from '@iconify/react';

const LeftMenu = () => {
  return (
    <div className='LeftMenu'>
        <div className="icon-arrow">
            <Icon icon="formkit:arrowleft" style={{margin:"0px 15px 0px 0px", width:"30px", height:"30px", color:"#3A8F4D"}}/>
        </div>
        <span className='tittle-lat-menu'>Mas acerca de Pizza Goool</span>
        <ul className='ul-left-menu'>
            <li>
                <Icon icon="material-symbols:info-outline" style={{margin:"0px 15px 0px 0px", width:"25px", height:"25px", color:"black"}}/>
                Informacion
            </li>
            <li>
                <Icon icon="solar:calendar-linear" style={{margin:"0px 15px 0px 0px", width:"25px", height:"25px", color:"black"}}/>
                Horarios
            </li>
            <li>
                <Icon icon="carbon:location" style={{margin:"0px 15px 0px 0px", width:"25px", height:"25px", color:"black"}}/>
                Ubicacion
            </li>
        </ul>
    </div>
  )
}

export default LeftMenu