import React from "react";

import "./Sing-in.css";
import { Icon } from '@iconify/react';
const Singin = () => {
  return (
    <div className="sing_container">
  
    <div className="box_sing">
    <img src="../static/logo2.png" alt="" />
        <span className="restaurant-tittle-sing">PIZZA GOOOL</span>
        <span className="sing-snap">El usuario fue correctamente registrado</span>
        <div className="icon-check"></div>
          <Icon icon="ph:check-circle-duotone" style={{margin:"15px 5px 0px 95px", width:"90px", height:"90px", color:"#FFD233"}} /> 
          </div>
          <button className='back_button_singin'>Volver</button>
    </div>
  );
};

export default Singin;
