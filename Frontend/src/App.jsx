import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import ViewEvent from "./pages/viewEvent/ViewEvent";
import AddEvent from "./pages/addEvent/AddEvent";
import RegisterAttendee from "./pages/registerAttendee/RegisterAttendee";
import SelectEvent from "./pages/selectEvent/SelectEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/events/:id" element={<ViewEvent />}></Route>
        <Route path="/addevent" element={<AddEvent />}></Route>
        <Route path="/selectevent" element={<SelectEvent />}></Route>
        <Route path="/selectevent/:id" element={<RegisterAttendee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
