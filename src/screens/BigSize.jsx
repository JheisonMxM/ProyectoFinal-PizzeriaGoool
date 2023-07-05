import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
const BigSize = () => {
  return (
    <div>
      <Header />
      <div className="container-b">
        <MenuOption category="Grandes" nav={'/menu/menu2'}/>
      </div>
    </div>
  );
};

export default BigSize;
