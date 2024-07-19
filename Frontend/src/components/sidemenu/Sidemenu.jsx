import React from "react";
import "./Sidemenu.css";
import { FaHome, FaPlusCircle, FaUserPlus } from "react-icons/fa";

const Sidemenu = () => {
  return (
    <div className="sidemenu-container">
      <div className="sidemenu-header">
        <h3>Event Master</h3>
        <p>DASHBOARD</p>
      </div>
      <div className="sidemenu-items">
        <ul className="sidemenu-list">
          <li className="sidemenu-item">
            <FaHome className="sidemenu-icon" />
            View Events
          </li>
          <li className="sidemenu-item">
            <FaPlusCircle className="sidemenu-icon" />
            Add Events
          </li>
          <li className="sidemenu-item">
            <FaUserPlus className="sidemenu-icon" />
            Register Attendee
          </li>
        </ul>
        <div className="sidemenu-profile">
          <img src="profile-pic-url" alt="Profile" className="profile-pic" />
          <p className="profile-name">Ravisa Dilanka</p>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
