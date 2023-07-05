import React from "react";
import PediHeader from "../components/PediHeader";
import "./Frequent.css";
import FrequentCard from "../components/FrequentCard";
import FrequentContainer from "../components/FrequentContainer";
const Frequent = () => {
  return (
    <div className="frequent-container">
      <PediHeader title={"Tus pedidos frecuentes"} />
      <FrequentContainer />
    </div>
  );
};

export default Frequent;
