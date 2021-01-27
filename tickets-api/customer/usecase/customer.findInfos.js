'use strict'

const CustomerController = require('../infra/controller/customer.controller');

class CustomerFindInfosUseCase{  
    constructor(){}

    async getInfos(id){
        return await CustomerController.getCustomer(id);
    } 

}
module.exports = new CustomerFindInfosUseCase();