import React from "react";
import "./UbicCard.css";

export const UbicCard = () => {
  return (
    <div className="Ubcard-container">
      <button>
        <div className="button-container">
          <div className="ubicacion">
            <img src="/static/images/iconoUbi.svg" alt="" />
            <span>Tembladerani</span>
          </div>
          <div className="direccion">
            <p>Av. Mario Mercado N° 155 (A media cuadra del mercado de Lojeta)</p>
          </div>
        </div>
      </button>
    </div>
  );
};
