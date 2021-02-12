'use strict'

const ResponseController = require('../infra/controller/response.controller');

class ResponseCustomerManageChoiceUseCase{  
    constructor(){}

    async initResponses(customerId, ticketId){
        return await ResponseController.add(customerId, ticketId)
    }

    async updateChoice(id, customerId, ticketId, choice){
        return await ResponseController.updateChoice(id, customerId, ticketId, choice)
    } 

    async getChoices(customerId){
        return await ResponseController.getCurrentByCustomer(customerId)
    } 

}
module.exports = new ResponseCustomerManageChoiceUseCase();