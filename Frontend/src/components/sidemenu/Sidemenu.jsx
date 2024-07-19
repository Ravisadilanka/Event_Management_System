import React from "react";
import "./Sidemenu.css";
import { FaHome, FaPlusCircle, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidemenu = () => {
  const navigate = useNavigate()

  function handleViewEvents(){
    navigate('/events')
  }

  function handleNavigate(){
    navigate('/')
  }

  function handleAddEvent(){
    navigate('/addevent')
  }

  return (
    <div className="sidemenu-container">
      <div className="sidemenu-header">
        <h3 onClick={handleNavigate}>Event Master</h3>
        <p onClick={handleNavigate}>DASHBOARD</p>
      </div>
      <div className="sidemenu-items">
        <ul className="sidemenu-list">
          <li className="sidemenu-item" onClick={handleViewEvents}>
            <FaHome className="sidemenu-icon" />
            View Events
          </li>
          <li className="sidemenu-item" onClick={handleAddEvent}>
            <FaPlusCircle className="sidemenu-icon" />
            Add Event
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
