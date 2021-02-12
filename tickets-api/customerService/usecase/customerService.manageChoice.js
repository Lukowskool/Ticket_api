'use strict'

const TicketsController = require('../../tickets/infra/controller/tickets.controller');
const ResponseController = require('../../response/infra/controller/response.controller')
const Response = require('../../response/domain/response.domain')
const ResponseCustomerManageChoiceUseCase = require('../../response/usecase/response.customerchoice');

const responseType = ["undefined", "keep", "reimburse"];

class CustomerServiceManageChoiceUseCase{  
    constructor(){}

    deleteAllChoices(){
        return await ResponseController.deleteAll()
    } 

    getAllChoices(){

    } 
}


module.exports = new CustomerServiceManageChoiceUseCase();