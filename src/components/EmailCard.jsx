import React from "react";
import "./EmailCard.css";

export const EmailCard = (props) => {
    
  return (

    <div className='Emailcard_container'>  
   
    <span className="subtittle_email">{props.head_email}</span>
    <input  className="email_input" type="text" placeholder={props.input_email} />
    
         
   </div>

        
  )
};

