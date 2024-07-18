package com.Ravisa_Dilanka.event_management.repository;

import com.Ravisa_Dilanka.event_management.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer> {
}
