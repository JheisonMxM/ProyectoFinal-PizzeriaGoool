import React from "react";
import "./MonthCard.css";
const MonthCard = ({ mes }) => {
  return (
    <div className="month-container">
      <h3 className="title-month">{mes}</h3>
      <hr />
    </div>
  );
};

export default MonthCard;
