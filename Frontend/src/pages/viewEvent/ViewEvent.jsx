import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import "./ViewEvent.css";

// Sample data
const sampleEvents = [
  {
    id: 1,
    name: "Summer Festival",
    description: "Annual summer festival with music, food, and fun activities",
    date: "2024-08-15",
    location: "Central Park",
    attendees: [
      { name: "John Doe", email: "john@example.com" },
      { name: "Jane Smith", email: "jane@example.com" }
    ]
  },
  {
    id: 2,
    name: "Tech Conference",
    description: "Conference for tech enthusiasts",
    date: "2024-09-10",
    location: "Tech Park",
    attendees: [
      { name: "Alice Johnson", email: "alice@example.com" },
      { name: "Bob Brown", email: "bob@example.com" }
    ]
  }
];

const ViewEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState(sampleEvents);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(() =>
    events.find(event => event.id === parseInt(id))
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleAttendeeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAttendees = [...editedEvent.attendees];
    updatedAttendees[index] = { ...updatedAttendees[index], [name]: value };
    setEditedEvent(prevEvent => ({
      ...prevEvent,
      attendees: updatedAttendees
    }));
  };

  const handleAddAttendee = () => {
    setEditedEvent(prevEvent => ({
      ...prevEvent,
      attendees: [...prevEvent.attendees, { name: "", email: "" }]
    }));
  };

  const handleRemoveAttendee = (index) => {
    setEditedEvent(prevEvent => ({
      ...prevEvent,
      attendees: prevEvent.attendees.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === editedEvent.id ? editedEvent : event
      )
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedEvent(events.find(event => event.id === parseInt(id)));
  };

  const handleDelete = (id) => {
    console.log(`Delete event with id: ${id}`);
    // Implement delete logic here
  };

  if (!editedEvent) {
    return <div>Event not found</div>;
  }

  return (
    <div className="viewevent-container">
      <Sidemenu />
      <div className="viewevent-container-right">
        <div className="hero-container">
          <h1 className="hero-text">Event Details</h1>
        </div>
        <div className="event-details">
          {isEditing ? (
            <div className="event-form">
              <h2>Edit Event</h2>
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editedEvent.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={editedEvent.description}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Date:
                  <input
                    type="date"
                    name="date"
                    value={editedEvent.date}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Location:
                  <input
                    type="text"
                    name="location"
                    value={editedEvent.location}
                    onChange={handleChange}
                  />
                </label>
                <h3>Attendees</h3>
                {editedEvent.attendees.map((attendee, index) => (
                  <div key={index} className="attendee-form">
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={attendee.name}
                        onChange={(e) => handleAttendeeChange(index, e)}
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        value={attendee.email}
                        onChange={(e) => handleAttendeeChange(index, e)}
                      />
                    </label>
                  </div>
                ))}
                <button type="button" onClick={handleAddAttendee}>Add Attendee</button>
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
              </form>
            </div>
          ) : (
            <>
              <h2>{editedEvent.name}</h2>
              <p><strong>Description:</strong> {editedEvent.description}</p>
              <p><strong>Date:</strong> {editedEvent.date}</p>
              <p><strong>Location:</strong> {editedEvent.location}</p>
              <div className="attendees-list">
                <h3>Attendees</h3>
                <ul>
                  {editedEvent.attendees.map((attendee, index) => (
                    <li key={index}>
                      <p><strong>Name:</strong> {attendee.name}</p>
                      <p><strong>Email:</strong> {attendee.email}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="event-buttons">
                <button onClick={() => setIsEditing(true)}>Edit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewEvent;
