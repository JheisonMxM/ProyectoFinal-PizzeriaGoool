import React from "react";
import "./OrderHistory.css";
import PediHeader from "../components/PediHeader";
import HistoryContainer from "../components/HistoryContainer";
export const OrderHistory = () => {
  return (
    <div className="ord-cont">
      <PediHeader title={"Tu historial de pedidos"} />
      <HistoryContainer />
    </div>
  );
};
