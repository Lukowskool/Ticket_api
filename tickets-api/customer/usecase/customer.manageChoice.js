'use strict'

const CustomerController = require('../infra/controller/customer.controller');
const TicketsController = require('../../tickets/infra/controller/tickets.controller');
const ResponseController = require('../../response/infra/controller/response.controller')

class CustomerManageChoiceUseCase{  
    constructor(){}

    async addOrUpdateChoice(customerId, ticketId, choice){

    }

    async getChoices(){
        //getChoices
    } 

}
module.exports = new CustomerManageChoiceUseCase();