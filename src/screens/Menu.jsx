import React from "react";
import Menu_App from "../components/MenuApp";
import Footer from "../components/Footer";
import "./Menu.css";
// import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="page_container_menu">
      <div className="menuApp-container">
        {/* <NavLink to={"/account/mipedido"}> */}
          <Menu_App menuapp_input="Mi Pedido" />
        {/* </NavLink> */}
        {/* <NavLink to={"/account/frecuentes"}> */}
          <Menu_App menuapp_input="Pedidos Frecuentes" />
        {/* </NavLink> */}
        {/* <NavLink to={"/account/historial"}> */}
          <Menu_App menuapp_input="Historial de Pedidos" />
        {/* </NavLink> */}
        {/* <NavLink to={"/account/pagos"}> */}
          <Menu_App menuapp_input="Tipo de Pago" />
        {/* </NavLink> */}
        {/* <NavLink to={"/account/invita"}> */}
          <Menu_App menuapp_input="Invita a tus amigos" />
        {/* </NavLink> */}
      </div>
      <Footer />
    </div>
  );
};
export default Menu;
