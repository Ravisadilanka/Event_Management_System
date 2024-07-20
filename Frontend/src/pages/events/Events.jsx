import React, { useEffect, useState } from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Hero from "../../components/hero/Hero";
import { MdDelete } from "react-icons/md";
import './Events.css';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { allEventsRoute } from "../../utils/APIRoutes";

const Events = () => {
  const [events, setEvents] = useState([]);
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
  },[])

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
