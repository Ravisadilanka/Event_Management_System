package com.Ravisa_Dilanka.event_management.controller;

import com.Ravisa_Dilanka.event_management.model.Attendee;
import com.Ravisa_Dilanka.event_management.service.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/attendees")
public class AttendeeController {

    @Autowired
    private AttendeeService attendeeService;

    @PostMapping("/{eventId}")
    public String registerAttendee(@RequestBody Attendee attendee, @PathVariable int eventId) {
        attendeeService.registerAttendee(attendee, eventId);
        return "Attendee added successfully";
    }
}
