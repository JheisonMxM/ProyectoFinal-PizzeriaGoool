import React from "react";
import "./Pagos.css";
import PagoContainer from "../components/PagoCardContainer";
import PediHeader from "../components/PediHeader";

const Pagos = () => {
  return (
    <div className="pag">
      <PediHeader title="Tipo de pago" />
      <PagoContainer />
    </div>
  );
};
export default Pagos;
