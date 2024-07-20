package com.Ravisa_Dilanka.event_management.controller;

import com.Ravisa_Dilanka.event_management.model.Event;
import com.Ravisa_Dilanka.event_management.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/add")
    public String add(@RequestBody Event event){
        eventService.addEvent(event);
        return "Event added successfully";
    }

    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public Event getAnEvent(@PathVariable int id) {
        return eventService.getAnEvent(id);
    }

    @PutMapping("/update/{id}")
    public String updateEvent(@RequestBody Event event, @PathVariable int id) {
        event.setId(id);
        return "Event updated successfully";
    }

    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable int id) {
        eventService.deleteEvent(id);
        return "Event deleted successfully";
    }

}
