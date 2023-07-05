import React from "react";
import "./HistoryContainer.css";
import HistoryCard from "./HistoryCard";
import MonthCard from "./MonthCard";
import histories from "../assets/history.json";
import months from "../assets/month.json";
const HistoryContainer = () => {
  return (
    <div className="history-container">
      <div className="month-card-container">
        {months.map((month) => {
          return <MonthCard mes={month.month} key={month.id} />;
        })}
      </div>

      <div className="history-card-container">
        {histories.map((history) => {
          return (
            <HistoryCard
              imagen={history.imgsrc}
              titulo={history.title}
              descripcion={history.description}
              tamanio={history.size[0]}
              precio={history.price[0]}
              key={history.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryContainer;
