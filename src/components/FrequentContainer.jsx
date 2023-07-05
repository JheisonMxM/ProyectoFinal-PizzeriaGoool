import React from "react";
import sizes from "../assets/sizem.json";
import FrequentCard from "./FrequentCard";
import "./FrequentContainer.css";
const FrequentContainer = () => {
  return (
    <div className="frequent-cont">
      <div className="card-frequent-cont">
        {sizes.map((size) => {
          return (
            <FrequentCard
              imagen={size.imgsrc}
              titulo={size.title}
              descripcion={size.description}
              precio={size.price[0]}
              key={size.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FrequentContainer;
