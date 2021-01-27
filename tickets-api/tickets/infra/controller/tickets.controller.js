'use strict'

const Persistency = require('../persistency/tickets.sqlite');

class TicketsController{  
    constructor(){}

    async getAll(){
        return Persistency.getAllTickets() 
    }

    async getByCustomer(customerId){
        return Persistency.getByCustomer(customerId) 
    }
}
module.exports = new TicketsController();