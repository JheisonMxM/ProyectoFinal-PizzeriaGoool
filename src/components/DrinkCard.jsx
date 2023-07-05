import React from "react";
import "./DrinkCard.css";
const DrinkCard = ({ imagen, titulo, descripcion, precio }) => {
  return (
    <div className="drink-card-container">
      <div className="drink-card">
        <div className="drink-img">
          <img src={imagen} alt="" />
        </div>
        <div className="drink-inf">
          <h3 className="title-drink">{titulo}</h3>
          <p className="inf">{descripcion}</p>
          <span className="drink-price">{precio}Bs</span>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
