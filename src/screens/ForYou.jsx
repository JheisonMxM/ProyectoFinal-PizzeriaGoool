import React from "react";
import MenuOption from "../components/MenuOption";
import Header from "../components/Header";
const ForYou = () => {
  return (
    <div>
      <Header />
      <div className="container-for">
        <MenuOption category="Recomendaciones para Ti" nav={'/menu'}/>
      </div>
    </div>
  );
};

export default ForYou;
