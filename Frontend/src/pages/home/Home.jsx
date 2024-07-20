import React, { useEffect, useState } from "react";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Hero from "../../components/hero/Hero";
import "./Home.css";
import axios from 'axios'
import { allAttendeesRoute, allEventsRoute } from "../../utils/APIRoutes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([])
  const [attendees, setAttendees] = useState([])
  const navigate =  useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEvents = await axios.get(allEventsRoute)
        setEvents(responseEvents.data)

        const responseAttendees = await axios.get(allAttendeesRoute)
        setAttendees(responseAttendees.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[])

  const handleEventNavigate = () => {
    navigate('/events')
  }
  return (
    <div className="home-container">
      <Sidemenu />
      <div className="home-container-right">
        <Hero />
        <div className="home-card">
          <div className="card total-events" onClick={handleEventNavigate}>
            <h3>Total Events</h3>
            <p>{events.length}</p>
          </div>
          <div className="card total-attendees">
            <h3>Total Attendees</h3>
            <p>{attendees.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
