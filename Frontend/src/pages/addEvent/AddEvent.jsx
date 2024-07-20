import React, { useState } from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import "./AddEvent.css";
import axios from 'axios'
import { addEventRoute, eventRoute } from "../../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvent = () => {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    location: ""
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
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleAttendeeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAttendees = [...event.attendees];
    updatedAttendees[index] = { ...updatedAttendees[index], [name]: value };
    setEvent((prevEvent) => ({
      ...prevEvent,
      attendees: updatedAttendees
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(addEventRoute, event)
      toast.success(response.data , toastOptions)
    } catch (error) {
      toast.error('Error adding event', toastOptions)
    }
  };

  return (
    <div className="addevent-container">
      <Sidemenu />
      <div className="addevent-container-right">
        <div className="hero-container">
          <h1 className="hero-text">Add New Event</h1>
        </div>
        <div className="addevent">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={event.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={event.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={event.date}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={event.location}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddEvent;
