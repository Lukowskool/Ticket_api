package com.ticketapp.ticketsapi.controller;

import com.ticketapp.ticketsapi.model.Ticket;
import com.ticketapp.ticketsapi.repository.ticketInterface;
import com.ticketapp.ticketsapi.service.ticketService;

import java.util.List;

public class ticketController {


    public List<Ticket> getTickets(){
        return ticketService.getTickets();
    }


}
