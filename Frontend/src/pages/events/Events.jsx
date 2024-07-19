import React, { useState, useEffect } from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Hero from "../../components/hero/Hero";
import { MdDelete } from "react-icons/md";
import './Events.css';

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

  const handleEdit = (id) => {
    console.log(`Edit event with id: ${id}`);
    // Implement edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete event with id: ${id}`);
    // Implement delete logic here
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
