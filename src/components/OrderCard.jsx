import React from "react";
import "./OrderCard.css";
const OrderCard = () => {
  return (
    <div className="order-card-container">
      <h3 className="t">Mexicana</h3>
      <span className="s">Mediana</span>
      <div className="pizza-img">
        <img src="/static/images/pi1.png" alt="" />
      </div>
      <span className="ing">Ingredientes</span>
      <p className="ing-inf">Carne, Chorizo, Cebolla, Jalapeños.</p>
      <div className="add-cant">
        <span className="add">Añadir cantidad: </span>
        <input className="cant" placeholder="3" type="number" />
      </div>
      <button className="btn-pedir-b">Pedir</button>
    </div>
  );
};

export default OrderCard;
