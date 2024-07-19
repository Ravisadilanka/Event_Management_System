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
          <div className="card total-events">
            <h3>Total Events</h3>
            <p>120</p>
          </div>
          <div className="card total-attendees">
            <h3>Total Attendees</h3>
            <p>120</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
