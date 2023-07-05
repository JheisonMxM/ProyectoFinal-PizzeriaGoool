import React from "react";
import "./MiPedido.css";
import PediHeader from "../components/PediHeader";
import { PediContainer } from "../components/PediContainer";

const MiPedido = () => {
  return (
    <div className="appP">
      <PediHeader title={"Mi Pedido"}/>
      <PediContainer />
    </div>
  );
}
export default MiPedido;
