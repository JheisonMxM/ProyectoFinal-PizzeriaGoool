import React from "react";
import "./FrequentCard.css";
const FrequentCard = ({ imagen, titulo, descripcion, precio }) => {
  return (
    <div className="frequent-card-container">
      <div className="img-inf-cont">
        <div className="img-container">
          <img src={imagen} alt="" />
        </div>
        <div className="inform-container">
          <h3 className="title-pizza">{titulo}</h3>
          <p className="description">{descripcion}</p>
          <span className="price-a">{precio}Bs</span>
        </div>
      </div>
      <div className="btn-cont">
        <button className="btn-again">Volver a pedir</button>
      </div>
    </div>
  );
};

export default FrequentCard;
