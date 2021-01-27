'use strict'

const CustomerController = require('../infra/controller/customer.controller');
const TicketsController = require('../../tickets/infra/controller/tickets.controller');

class CustomerFindTicketsUseCase{  
    constructor(){}

    async getAll(customerId){
        return await TicketsController.getByCustomer(customerId)
    } 

}
module.exports = new CustomerFindTicketsUseCase();