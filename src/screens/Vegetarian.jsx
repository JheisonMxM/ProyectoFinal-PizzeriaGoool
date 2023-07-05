import React from "react";
import PizzaCard from "../components/PizzaCard";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
const Vegetarian = () => {
  return (
    <div>
      <Header />
      <div className="container-v">
        <MenuOption category="Opciones Vegetarianas" nav={'/menu'}/>
      </div>
    </div>
  );
};

export default Vegetarian;
