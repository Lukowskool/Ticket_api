'use strict'

const ResponseController = require('../../response/infra/controller/response.controller');
const TicketsController = require('../../tickets/infra/controller/tickets.controller');

class CustomerFindTicketsUseCase{  
    constructor(){}

    async getAll(customerId){
        return await TicketsController.getByCustomer(customerId)
    } 

    async getResponses(customerId){
        return await ResponseController.getCurrentByCustomer(customerId)
    } 

}
module.exports = new CustomerFindTicketsUseCase();