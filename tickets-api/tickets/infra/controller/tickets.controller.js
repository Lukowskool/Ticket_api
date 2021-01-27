'use strict'

const Persistency = require('../persistency/tickets.sqlite');

class TicketsController{  
    constructor(){}

    async getAll(){
        return await Persistency.getAllTickets() 
    }

    async getByCustomer(customerId){
        return await Persistency.getByCustomer(customerId) 
    }

    async getTicketOwner(ticketId){
        return await Persistency.getTicketOwner(ticketId)
    } 
}
module.exports = new TicketsController();