import React from 'react'
import "./SchHeader.css"
import { Icon } from "@iconify/react";
export const SchHeader = () => {
  return (
    <div className='hearder-container'>   
    <div className='Horarios'>
    <Icon
          icon="ooui:previous-ltr"
          className="iconM"
          style={{ color: "#3a8f4d", width: "25px", height: "25px" }}
     />
     <span>Horarios</span>
    </div>  
        
    </div>
  )
}