import React from "react";
import { Icon } from "@iconify/react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="tittle">
        <Icon
          icon="ri:menu-3-fill"
          className="iconM"
          style={{ color: "F8B908", width: "25px", height: "25px" }}
        />
        <div className="pizza">
          <img src="../static/logo.png" alt="" />
          <span className="restaurant">Pizza Goool</span>
        </div>
      </div>
      <div className="box">
        <Icon
          icon="material-symbols:search"
          className="iconS"
          style={{ color: "F8B908", width: "24px", height: "24px" }}
        />
        <input type="text" placeholder="Buscar" className="texto" />
      </div>
    </div>
  );
};
export default Header;
