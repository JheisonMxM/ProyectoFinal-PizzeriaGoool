import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
import "./MediumSize.css";
import Footer from "../components/Footer";
const MediumSize = () => {
  return (
    <div className="head">
      <Header />
      <div className="menu-option-container">
        <MenuOption category="Medianas" nav={'/menu/menu2'}/>
      </div>
    </div>
  );
};

export default MediumSize;
