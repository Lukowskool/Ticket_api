package com.ticketapp.ticketsapi.repository;

import com.ticketapp.ticketsapi.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ticketInterface extends JpaRepository<Ticket, Integer> {
}
