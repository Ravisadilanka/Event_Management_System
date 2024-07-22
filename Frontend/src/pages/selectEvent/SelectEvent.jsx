import React, { useEffect, useState } from "react";
import "./SelectEvent.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { allEventsRoute } from "../../utils/APIRoutes";
import Sidemenu from "../../components/sidemenu/Sidemenu";

const SelectEvent = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleRegisterAttendee = (id) => {
    navigate(`/selectevent/registerattendee/${id}`);
  };
  const handleViewDetails = (id) => {
    navigate(`/selectevent/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(allEventsRoute);
        setEvents(response.data);
      } catch (error) {
        toast.error("Error fetching event", toastOptions);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="selectevent-container">
      <Sidemenu />
      <div className="selectevent-container-right">
        <div className="hero-container">
          <h1 className="hero-text">Upcoming Events</h1>
        </div>
        <div className="selectevent-list">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="selectevent-card">
                <h3>{event.name}</h3>
                <div className="selectevent-buttons">
                  <button onClick={() => handleViewDetails(event.id)}>
                    View More Details
                  </button>
                  <button onClick={() => handleRegisterAttendee(event.id)}>
                    Register Attendee
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="selectevent-card">
              <h3>No Upcoming Events</h3>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectEvent;
