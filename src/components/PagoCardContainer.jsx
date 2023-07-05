import React from "react";
import { PagoCard } from "./PagoCard";
import "./PagoCardContainer.css";

const PagoContainer = () => {
  return (
    <div className="Pago-Card-Container">
      <h2 className="titulo-escoger">Escoger el tipo de pago</h2>
      <div className="card-con">
        <PagoCard tipo={"Pago por QR"} />
        <PagoCard tipo={"Pago por Tarjeta"} />
        <PagoCard tipo={"Pago en Efectivo"} />
      </div>
    </div>
  );
};
export default PagoContainer;
