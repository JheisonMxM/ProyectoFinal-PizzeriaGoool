import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Footer.css";
// import { NavLink } from "react-router-dom";
import "../services/login"
import Login from "../screens/Login";
import { login } from "../services/login";

const Footer = () => {
  const account = login()
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="footer-container">
      <div className="tabs">
        <div onClick={() => toggleTab(1)} className="tab">
          {/* <NavLink to={'/'}> */}
          <Icon
            className={toggleState === 1 ? "icon active-icon" : "tabs"}
            icon="tabler:home"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 1 ? "title active-span" : "tabs"}>
            Inicio
          </span>
          {/* </NavLink> */}
        </div>

        <div onClick={() => toggleTab(2)} className="tab">
        {/* <NavLink to={'/menu'}> */}
          <Icon
            className={toggleState === 2 ? "icon active-icon" : "tabs"}
            icon="ion:pizza-outline"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 2 ? "title active-span" : "tabs"}>
            Menú
          </span>
          {/* </NavLink> */}
        </div>
        <div onClick={() => toggleTab(3)} className="tab">
          {/* <NavLink to={'/resenias'}> */}
          <Icon
            className={toggleState === 3 ? "icon active-icon" : "tabs"}
            icon="foundation:comments"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 3 ? "title active-span" : "tabs"}>
            Reseñas
          </span>
          {/* </NavLink> */}
        </div>
        <div onClick={() => toggleTab(4)} className="tab">
          {/* <NavLink to={account}> */}
            {
              console.log(account)
            }
          <Icon
            className={toggleState === 4 ? "icon active-icon" : "tabs"}
            icon="ion:person-outline"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 4 ? "title active-span" : "tabs"}>
            Cuenta
          </span>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
