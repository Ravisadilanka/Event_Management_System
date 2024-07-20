package com.Ravisa_Dilanka.event_management.service;

import com.Ravisa_Dilanka.event_management.exception.EventNotFoundException;
import com.Ravisa_Dilanka.event_management.model.Attendee;
import com.Ravisa_Dilanka.event_management.model.Event;
import com.Ravisa_Dilanka.event_management.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService{

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public Event getAnEvent(int id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new EventNotFoundException("Event not found with id: " + id));
    }

    @Override
    public Event updateEvent(int id, Event event) {
        Event existingEvent = eventRepository.findById(id)
                .orElseThrow(() -> new EventNotFoundException("Event not found with id: " + id));

        existingEvent.setName(event.getName());
        existingEvent.setDescription(event.getDescription());
        existingEvent.setDate(event.getDate());
        existingEvent.setLocation(event.getLocation());

        existingEvent.getAttendees().clear();
        existingEvent.getAttendees().addAll(event.getAttendees());

        for (Attendee attendee : existingEvent.getAttendees()) {
            attendee.setEvent(existingEvent);
        }

        return eventRepository.save(existingEvent);
    }

    @Override
    public void deleteEvent(int id) {
        eventRepository.deleteById(id);
    }
}
