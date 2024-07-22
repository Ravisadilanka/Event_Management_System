import React, { useEffect, useState } from "react";
import "./SelectEventView.css";
import { eventRoute } from "../../utils/APIRoutes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import { useParams } from "react-router-dom";

const SelectEventView = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null); // Initialize event to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${eventRoute}/${id}`);
        setEvent(response.data);
        console.log(response.data);
      } catch (error) {
        toast.error("Error fetching event", toastOptions);
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

  if (!event) {
    return (
      <div className="selecteventview-container">
        <Sidemenu />
        <div className="selecteventview-container-right">
          <div className="hero-container">
            <h1 className="hero-text">Event Details</h1>
          </div>
          <div className="event-details">
            <h2>No Event Found</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="selecteventview-container">
      <Sidemenu />
      <div className="selecteventview-container-right">
        <div className="hero-container">
          <h1 className="hero-text">Event Details</h1>
        </div>
        <div className="event-details">
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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectEventView;
