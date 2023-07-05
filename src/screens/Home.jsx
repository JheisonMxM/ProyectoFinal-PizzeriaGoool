import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Home.css'
import PromoMes from "../components/PromoMes";
import PizzaSliderH from "../components/PizzaSliderH";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="page-container">
      <PromoMes />
      <button className="pedir-prom">Pedir</button>
      <h2 className="slider-headers">Para ti</h2>
      <PizzaSliderH />
      <h2 className="slider-headers">Lo mas vendido</h2>
      <PizzaSliderH />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
