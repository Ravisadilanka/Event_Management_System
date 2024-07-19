import React from "react";
import './Sidemenu.css';

const Sidemenu = () => {
  return (
    <div className="sidemenu-container">
        <div className="sidemenu-header">
        <h3>Event Master</h3>
        <p>DASHBOARD</p>
        </div>
        <div className="sidemenu-items">
            <ul className="sidemenu-list">
                <li>View Events</li>
                <li>Add Events</li>
                <li>Register Attendee</li>
            </ul>
        </div>
    </div>
  );
};

export default Sidemenu;
