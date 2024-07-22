import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import "./ViewEvent.css";
import { eventRoute, updateEventRoute } from "../../utils/APIRoutes";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${eventRoute}/${id}`);
        setEvent(response.data);
        setEditedEvent({
          ...response.data,
          date: formatDate(response.data.date),
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleAttendeeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAttendees = [...editedEvent.attendees];
    updatedAttendees[index] = { ...updatedAttendees[index], [name]: value };
    setEditedEvent((prevEvent) => ({
      ...prevEvent,
      attendees: updatedAttendees,
    }));
  };

  const handleSave = async () => {
    if (
      !editedEvent.name ||
      !editedEvent.description ||
      !editedEvent.date ||
      !editedEvent.location ||
      editedEvent.attendees.some(
        (attendee) => !attendee.name || !attendee.email
      )
    ) {
      toast.error("Please fill out all fields before saving.", toastOptions);
      return;
    }

    try {
      const updatedResponse = await axios.put(
        `${updateEventRoute}/${editedEvent.id}`,
        editedEvent
      );
      setEvent(editedEvent);
      setIsEditing(false);
      toast.success(updatedResponse.data, toastOptions);
    } catch (error) {
      console.error(error);
      toast.error("Error saving event.", toastOptions);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedEvent({
      ...event,
      date: formatDate(event.date),
    });
  };

  if (!editedEvent) {
    return (
      <div className="viewevent-container">
        <Sidemenu />
        <div className="viewevent-container-right">
          <div className="hero-container">
            <h1 className="hero-text">Event Details</h1>
          </div>
          <div className="event-details">
            <h2>No Events</h2>
          </div>
        </div>
      </div>
    );
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
                    required
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
                <h3 className="edit-attendee-title">Attendees</h3>
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
                <div className="event-buttons">
                  <button type="button" onClick={handleSave}>
                    Save
                  </button>
                  <button type="button" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              <h2>{event.name}</h2>
              <p>
                <strong>Description:</strong> {event.description}
              </p>
              <p>
                <strong>Date:</strong> {formatDate(event.date)}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <div className="attendees-list">
                <h3>Attendees</h3>
                <ul>
                  {event.attendees.map((attendee, index) => (
                    <li key={index}>
                      <p>
                        <strong>Name:</strong> {attendee.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {attendee.email}
                      </p>
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
      <ToastContainer />
    </div>
  );
};

export default ViewEvent;
