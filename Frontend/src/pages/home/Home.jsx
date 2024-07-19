import React from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Hero from "../../components/hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Sidemenu />
      <div className="home-container-right">
        <Hero />
        <div className="home-card">
          <div className="home-item-card">
            <h3>Summer Festival</h3>
            <div className="info">
              <p>Date:</p>
              <p>2023.05.10</p>
            </div>
            <div className="info">
              <p>Location:</p>
              <p>Central Park</p>
            </div>
            <p className="description">Enjoy your day!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
