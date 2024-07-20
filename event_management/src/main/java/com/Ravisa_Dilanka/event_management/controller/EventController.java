package com.Ravisa_Dilanka.event_management.controller;

import com.Ravisa_Dilanka.event_management.exception.EventNotFoundException;
import com.Ravisa_Dilanka.event_management.model.Event;
import com.Ravisa_Dilanka.event_management.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> updateEvent(@RequestBody Event event, @PathVariable int id) {
        try {
            event.setId(id);
            eventService.updateEvent(id, event);
            return ResponseEntity.ok("Event updated successfully");
        } catch (EventNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event not found with id: " + id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while updating the event");
        }
    }
    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable int id) {
        eventService.deleteEvent(id);
        return "Event deleted successfully";
    }

}
