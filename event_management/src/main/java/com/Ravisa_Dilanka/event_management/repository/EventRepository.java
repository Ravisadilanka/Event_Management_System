package com.Ravisa_Dilanka.event_management.repository;

import com.Ravisa_Dilanka.event_management.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    Optional<Event> findById(Integer id);
}
