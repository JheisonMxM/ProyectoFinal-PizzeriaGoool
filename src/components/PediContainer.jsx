import React from "react";
import "./PediContainer.css";
import { PediCard } from "./PediCard";
export const PediContainer = () => {
  return (
    <div className="Pcontainer">
      <PediCard />
      <PediCard />
      <PediCard />
      <PediCard />
      <div className="Tiempo">
        <p>Tiempo aproximado de entrega 30 min</p>
      </div>
    </div>
  );
};
