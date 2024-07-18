package com.Ravisa_Dilanka.event_management.repository;

import com.Ravisa_Dilanka.event_management.model.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendeeRepository extends JpaRepository<Attendee, Integer> {
}
