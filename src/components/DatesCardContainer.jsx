import React from "react";
import "./DatesCardContainer.css";
import { DatesCard } from "./DatesCard";

const DatesCardContainer = () => {
  return (
    <div className="Datecard-container">
         <DatesCard encabezado="First Name"input="Sarah" />
         <DatesCard encabezado="Last Name" input="Nielsen" />
         <DatesCard encabezado="Correo" input="saranielsen@gmail.com" />
         <DatesCard encabezado="Costraseña" input="123456789" />
    </div>
  );
};
export default DatesCardContainer;