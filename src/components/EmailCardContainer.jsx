import React from "react";
import "./EmailCardContainer.css";
import { EmailCard } from "./EmailCard";

const EmailCardContainer = () => {
  return (
    <div className="EmailCard-container">
        <EmailCard head_email="Correo" input_email="saranielsen@gmail.com"/>
        <EmailCard head_email="Contraseña" input_email="123456789"/>
        
    </div>
  );
};
export default EmailCardContainer;