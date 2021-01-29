'use strict'

const TicketsController = require('../../tickets/infra/controller/tickets.controller');
const ResponseController = require('../../response/infra/controller/response.controller')
const Response = require('../../response/domain/response.domain')
const ResponseCustomerManageChoiceUseCase = require('../../response/usecase/response.customerchoice');

const responseType = ["undefined", "keep", "reimburse"];

class CustomerManageChoiceUseCase{  
    constructor(){}

    async UpdateChoice(customerId, ticketId, choice){
        
    }

    async getChoices(customerId){
        const responses = await ResponseController.getCurrentByCustomer(customerId);
        const tickets = await TicketsController.getByCustomer(customerId)
        var result = []; 
        if(responses){
            responses.array.forEach(element => {
                let ticket = tickets.find(el => el.id === element.ticketId)
                result.push({
                    "id" : element.id,
                    "price" : ticket.price,
                    "customerId" : customerId,
                    "answer": responseType[element.choice] 
                })
            });
        }
        else{
            tickets.array.forEach(element => {
                tickets.array.forEach(element => {
                    ResponseCustomerManageChoiceUseCase.initResponses(customerId, element.id)
                    result.push({
                        "id" : element.id,
                        "price" : ticket.price,
                        "customerId" : customerId,
                        "answer": "undefined" 
                    }) 
                });
            });     
        } 
    }
}

module.exports = new CustomerManageChoiceUseCase();