'use strict'

const TicketsController = require('../infra/controller/tickets.controller');

class TicketCheckAccessUseCase{  
    constructor(){}

    async checkOwner(ticketId, customerId){
        let res = await TicketsController.getTicketOwner(ticketId);
        if(res == customerId)return true;
        return false;
    }

}
module.exports = new TicketCheckAccessUseCase();