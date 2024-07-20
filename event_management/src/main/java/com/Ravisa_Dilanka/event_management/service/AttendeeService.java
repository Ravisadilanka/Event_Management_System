package com.Ravisa_Dilanka.event_management.service;

import com.Ravisa_Dilanka.event_management.model.Attendee;

import java.util.List;

public interface AttendeeService {
    Attendee registerAttendee(Attendee attendee, int eventId);
    List<Attendee> getAllAttendees();
}
