'use strict'

const ResponseController = require('../infra/controller/response.controller');

class ResponseCheckUseCase{  
    constructor(){}

    async checkAccess(customerId){
        let responses = await ResponseController.getCurrentByCustomer(customerId)
        responses.array.forEach(element => {
            if(element.choice == 0){
                return 0
            }
        });
        return 1;
    } 

}
module.exports = new ResponseCheckUseCase();