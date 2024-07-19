import React, { useState } from "react";
import './RegisterAttendee.css';
import Sidemenu from "../../components/sidemenu/Sidemenu";

const RegisterAttendee = () => {
  const [attendee, setAttendee] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendee((prevAttendee) => ({
      ...prevAttendee,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attendee registered:", attendee);
    // Implement registration logic here
  };

  return (
    <div className="registerattendee-container">
      <Sidemenu />
      <div className="registerattendee-container-right">
        <div className="hero-container">
          <h1 className="hero-text">Register New Attendee</h1>
        </div>
        <div className="registerattendee">
          <form className="registerattendee-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={attendee.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={attendee.email}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAttendee;
