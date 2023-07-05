import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
const StadiumSize = () => {
  return (
    <div>
      <Header />
      <div className="container-s">
        <MenuOption category="Stadium" nav={'/menu/menu2'}/>
      </div>
    </div>
  );
};

export default StadiumSize;
