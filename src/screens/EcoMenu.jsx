import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
const EcoMenu = () => {
  return (
    <div>
      <Header />
      <div className="container-c">
        <MenuOption category="Menú Económico" nav={'/menu'}/>
      </div>
    </div>
  );
};

export default EcoMenu;
