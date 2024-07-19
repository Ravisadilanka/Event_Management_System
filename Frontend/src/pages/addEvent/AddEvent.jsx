import React, { useState } from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import "./AddEvent.css";

const AddEvent = () => {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    attendees: [{ name: "", email: "" }]
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event submitted:", event);
    // Implement form submission logic here
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
    </div>
  );
};

export default AddEvent;
