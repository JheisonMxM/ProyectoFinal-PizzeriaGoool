import React from "react";
import "./PagoCard.css";
import { Icon } from "@iconify/react";
export const PagoCard = ({ tipo }) => {
  let icono;
  if (tipo === "Pago por Tarjeta") {
    icono = "bx:bxs-credit-card";
  } else if (tipo === "Pago en Efectivo") {
    icono = "mdi:cash";
  } else {
    icono = "bx:qr";
  }
  return (
    <div className="pago_container">
      <Icon icon={icono} color="#ffd233" width="75" />
      <span className="tipo-pago">{tipo}</span>
    </div>
  );
};
