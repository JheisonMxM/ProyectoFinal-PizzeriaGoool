import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
const Drinks = () => {
  return (
    <div>
      <Header />
      <div className="container-d">
        <MenuOption category="Bebidas" nav={'/menu'}/>
      </div>
    </div>
  );
}
export default Drinks;
