import React from "react";
import "./HistoryCard.css";
const HistoryCard = ({ imagen, titulo, descripcion, tamanio, precio }) => {
  return (
    <div className="history-cont">
      <div className="cantidad">
        <span className="cant-num">x3</span>
      </div>
      <div className="history-card">
        <div className="i-container">
          <img src={imagen} alt="" />
        </div>
        <div className="inf-cont">
          <h3 className="t-pizza">{titulo}</h3>
          <p className="des-p">{descripcion}</p>
          <div className="size-price">
            <span className="sizes-p">{tamanio}</span>
            <span className="price-p">{precio}Bs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
