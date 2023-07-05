import React from "react";
import { Icon } from "@iconify/react";
import "./PediHeader.css";
// import { NavLink } from "react-router-dom";

const PediHeader = ({ title }) => {
  return (
    <div className="UbiHearder-Container">
      <div className="box-ubicacion">
        {/* <NavLink to={"/account"}> */}
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            className="icono"
            style={{ color: "#58b96d", width: "25px", height: "25px" }}
          />
        {/* </NavLink> */}
        <span className="pediHeader-title">{title}</span>
      </div>
    </div>
  );
};
export default PediHeader;
