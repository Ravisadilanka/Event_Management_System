package com.Ravisa_Dilanka.event_management.service;

import com.Ravisa_Dilanka.event_management.model.Event;

import java.util.List;

public interface EventService {
    Event addEvent(Event event);
    List<Event> getAllEvents();
    Event updateEvent(Event event);
    void deleteEvent(int id);
}
