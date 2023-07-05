import React from "react";
import "./DatesCard.css";

export const DatesCard = (props) => {
    
  return (

  <div className='datos_container'>  
   
   <span className="subtittle_datos">{props.encabezado}</span>
   <input  className="register-input" type="text" placeholder={props.input} />
   
        
  </div>
     

       
  )
};

