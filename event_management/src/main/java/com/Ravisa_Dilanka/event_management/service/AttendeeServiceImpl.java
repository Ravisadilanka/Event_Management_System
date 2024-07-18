package com.Ravisa_Dilanka.event_management.service;

import com.Ravisa_Dilanka.event_management.model.Attendee;
import com.Ravisa_Dilanka.event_management.repository.AttendeeRepository;
import com.Ravisa_Dilanka.event_management.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttendeeServiceImpl implements  AttendeeService{

    @Autowired
    private AttendeeRepository attendeeRepository;

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Attendee registerAttendee(Attendee attendee, int eventId) {
        return eventRepository.findById(eventId).map(event -> {
            attendee.setEvent(event);
            return attendeeRepository.save(attendee);
        }).orElseThrow(() -> new RuntimeException("Event not found"));
    }
}
