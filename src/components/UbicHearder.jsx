import React from 'react'
import { Icon } from "@iconify/react";
import "./UbicHearder.css"
export const UbicHearder = () => {
    return (
        <div className='UbiHearder-Container'>
                <div className='box-ubicacion'>

            
                
              <span>Ubicación</span>
              <Icon
               icon="ooui:previous-ltr"
               className="icono"
             style={{ color: "#3a8f4d", width: "25px", height: "25px" }}
              />
                </div>
        </div>
      )
}