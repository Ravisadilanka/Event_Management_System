import React, { useState } from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Hero from "../../components/hero/Hero";
import { MdDelete } from "react-icons/md";
import './Events.css';
import { useNavigate } from "react-router-dom";

const sampleEvents = [
  {
    id: 1,
    name: "Summer Festival",
    description: "Annual summer festival with music, food, and fun activities",
    date: "2024-08-15",
    location: "Central Park"
  },
  {
    id: 2,
    name: "Tech Conference",
    description: "Conference for tech enthusiasts",
    date: "2024-09-10",
    location: "Tech Park"
  },
  // Add more sample events here
];

const Events = () => {
  const [events, setEvents] = useState(sampleEvents);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    console.log(`Delete event with id: ${id}`);
    // Implement delete logic here
  };

  const handleNavigate = (id) => {
    navigate(`/events/${id}`);
  };

  const handleViewDetails = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="events-container">
      <Sidemenu />
      <div className="events-container-right">
        <Hero />
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
    </div>
  );
};

export default Events;
