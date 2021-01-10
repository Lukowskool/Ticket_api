package com.ticketapp.ticketsapi.service;

import com.ticketapp.ticketsapi.model.Ticket;
import com.ticketapp.ticketsapi.repository.ticketInterface;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ticketService<TicketInterface> {

    private final TicketInterface ticketInterface;

    public static List<Ticket>getTickets(){
        return ticketInterface.findAll();
    }
    public Optional<Ticket>getTicket(int id){
        return ticketInterface.findById(id);
    }
    public void deleteTicket(int id){
        ticketInterface.deleteById(id);
    }
}
