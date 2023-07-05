import React from "react";
// import { NavLink } from "react-router-dom";
import "./ShareLink.css";
import { Icon } from "@iconify/react";

const ShareLink = () => {
  return (
    <div className="cuenta_container">
      <div className="icon-arrow">
        {/* <NavLink to={"/account"}> */}
          <Icon
            icon="formkit:arrowleft"
            style={{
              margin: "25px 15px 0px 15px",
              width: "30px",
              height: "30px",
              color: "#F8B908",
            }}
          />
        {/* </NavLink> */}
      </div>

      <div className="box-tittle">
        <img src="../static/logo2.png" alt="" />
        <span className="restaurant-tittle">PIZZA GOOOL</span>
        <span className="Share-snap">
          Invita a todos tus amigos a disfrutar de un fabulosa Pizza!!!
        </span>
        <div className="icon-link"></div>
        <Icon
          icon="icon-park-solid:copy-link"
          style={{
            margin: "15px 5px 0px 95px",
            width: "90px",
            height: "90px",
            color: "#D5D765",
          }}
        />
      </div>
      <snap className="share-snap2">(copia el link para compartir)</snap>
    </div>
  );
};

export default ShareLink;
