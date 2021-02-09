'use strict'

const ResponseController = require('../infra/controller/response.controller');

class ResponseCustomerManageChoiceUseCase{  
    constructor(){}

    async initResponses(customerId, ticketId){
        return await ResponseController.add(customerId, ticketId)
    }

    async updateChoice(id, customerId, ticketId, choice){
        return await ResponseController
    } 

    async getChoices(){
        
    } 

}
module.exports = new ResponseCustomerManageChoiceUseCase();