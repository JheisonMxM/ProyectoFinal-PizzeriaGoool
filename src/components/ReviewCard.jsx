import React from "react";
import { Icon } from "@iconify/react";
import "./ReviewCard.css";
export const ReviewCard = () => {
  return (
    <div className="review-container">
      <div className="caja-top">
        <img src="/static/images/imgUsuario1.svg" alt="" />
        <div className="caja-top-name">
          <span className="name-review-card">Pablo</span>
          <i className="star-container">
            <Icon
              icon="solar:star-bold"
              className="icono"
              style={{ color: "#3a8f4d", width: "20px", height: "20px" }}
            />
            <Icon
              icon="solar:star-bold"
              className="icono"
              style={{ color: "#3a8f4d", width: "20px", height: "20px" }}
            />
            <Icon
              icon="solar:star-bold"
              className="icono"
              style={{ color: "#3a8f4d", width: "20px", height: "20px" }}
            />
            <Icon
              icon="solar:star-bold"
              className="icono"
              style={{ color: "#3a8f4d", width: "20px", height: "20px" }}
            />
            <Icon
              icon="solar:star-bold"
              className="icono"
              style={{ color: "#3a8f4d", width: "20px", height: "20px" }}
            />
          </i>
        </div>
      </div>
      <div className="review-comentario">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          recusandae pariatur eaque neque earum distinctio, cum quidem.
        </p>
      </div>
    </div>
  );
};
