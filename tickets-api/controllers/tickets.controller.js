'use strict'

const db = require('../database/tickets.db');

class TicketsController{  
    constructor(){}

    async getAll(){
        return db.getAllTickets() 
    }

    async getAvailableTickets(){
        return db.getAvailableTickets();
    } 

    async getSoldTickets(){
        return db.getSoldTickets();
    }

}
module.exports = new TicketsController();