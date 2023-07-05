import React from "react";
import { Icon } from "@iconify/react";
import "./PizzaEncabezado.css";
// import { NavLink } from "react-router-dom";
export const PizzaEncabezado = () => {
  return (
    <div className="pizza-signo">
      <div className="box-button">
      {/* <NavLink to={'/menu'}> */}
      <Icon
          icon="ooui:previous-ltr"
          className="icono-tam-pizzas"
          style={{ color: "#3a8f4d", width: "25px", height: "25px" }}
        />
      {/* </NavLink> */}
      </div>
      <span className="text-tam-pizzas">Pizzas</span>
    </div>
  );
};
