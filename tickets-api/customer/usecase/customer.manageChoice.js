'use strict'

const TicketsController = require('../../tickets/infra/controller/tickets.controller');
const ResponseController = require('../../response/infra/controller/response.controller')
const Response = require('../../response/domain/response.domain')
const ResponseCustomerManageChoiceUseCase = require('../../response/usecase/response.customerchoice');

const responseType = ["undefined", "keep", "reimburse"];

class CustomerManageChoiceUseCase{  
    constructor(){}

    async UpdateChoice(customerId, ticketId, choice){
        return await ResponseController.updateChoice(customerId, ticketId, choice)
    }

    async getChoices(customerId){
        const responses = await ResponseController.getHistoryByCustomer(customerId);
        const tickets = await TicketsController.getByCustomer(customerId)
        if(responses != undefined){
            let res = []; 
            responses.forEach(elem => {
                res.push({
                    "id" : elem.id,
                    "price" : ticket.price,
                    "customerId" : customerId,
                    "answer": responseType[element.choice] 
                })
            });
            return res;
        }
        else{
            var res = []; 
            
            tickets.forEach(elem => {
                ResponseController.add(customerId, elem.id)
                var el = JSON.stringify({
                    "id" : elem.id,
                    "price" : elem.price,
                    "customerId" : customerId,
                    "answer": "undefined" 
                })
                res.push(el)
            })
            return res;     
        } 
    }
}

module.exports = new CustomerManageChoiceUseCase();