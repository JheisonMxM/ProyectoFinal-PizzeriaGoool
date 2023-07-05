import React from "react";
import "./MenuOption.css";
import { Icon } from "@iconify/react";
import PizzaCard from "./PizzaCard";
import DrinkCard from "./DrinkCard";
import sizes from "../assets/sizem.json";
import drinks from "../assets/drinkm.json";
// import { NavLink } from "react-router-dom";
const MenuOption = ({ category , nav}) => {
  let content;
  if (category === "Bebidas") {
    content = drinks.map((drink) => (
      <DrinkCard
        imagen={drink.imgsrc}
        titulo={drink.title}
        descripcion={drink.description}
        precio={drink.price}
        key={drink.id}
      />
    ));
  } else {
    content = sizes.map((size) => (
      <PizzaCard
        imagen={size.imgsrc}
        titulo={size.title}
        descripcion={size.description}
        numero={size.number}
        dispo={size.disponibility}
        precio={
          category === "Medianas"
            ? size.price[0]
            : category === "Grandes"
            ? size.price[1]
            : category === "Familiar"
            ? size.price[2]
            : category === "Stadium"
            ? size.price[3]
            : category === "Recomendaciones para Ti"
            ? size.price[0]
            : category === "Menú Económico"
            ? size.price[0]
            : category === "Opciones Vegetarianas"
            ? size.price[0]
            : null
        }
        key={size.id}
      />
    ));
  }
  return (
    <div className="option-container">
      <div className="type">
        {/* <NavLink to={nav}> */}
        <Icon
          className="back"
          icon="material-symbols:arrow-back-ios-new-rounded"
          color="#58b96d"
          width="24"
          height="24"
        />
        {/* </NavLink> */}
        <h2 className="options">{category}</h2>
      </div>
      <div className="pizza-card-container-janna">{content}</div>
    </div>
  );
};

export default MenuOption;
