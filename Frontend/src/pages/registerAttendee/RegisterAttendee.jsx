import React, { useState } from "react";
import './RegisterAttendee.css';
import Sidemenu from "../../components/sidemenu/Sidemenu";
import axios from 'axios'
import { addAttendeeRoute } from "../../utils/APIRoutes";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterAttendee = () => {
  const { id } = useParams();
  const [attendee, setAttendee] = useState({
    name: "",
    email: ""
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendee((prevAttendee) => ({
      ...prevAttendee,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${addAttendeeRoute}/${id}`, attendee)
      toast.success(response.data, toastOptions)
    } catch (error) {
      toast.error("Error registering attendee", toastOptions)
    }
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
      <ToastContainer />
    </div>
  );
};

export default RegisterAttendee;
