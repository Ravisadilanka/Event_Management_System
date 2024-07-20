import React, { useEffect, useState } from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Hero from "../../components/hero/Hero";
import { MdDelete } from "react-icons/md";
import './Events.css';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { allEventsRoute,eventRoute } from "../../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${eventRoute}/${id}`);
      toast.success(response.data, toastOptions);
    } catch (error) {
      toast.error("Failed to delete event", toastOptions);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/events/${id}`);
  };

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(allEventsRoute)
        setEvents(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[handleDelete])

  return (
    <div className="events-container">
      <Sidemenu />
      <div className="events-container-right">
      <div className="hero-container">
          <h1 className="hero-text">Upcoming Events</h1>
        </div>
        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <div className="event-buttons">
                <button onClick={() => handleViewDetails(event.id)}>View More Details</button>
                <button onClick={() => handleDelete(event.id)}><MdDelete /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Events;
