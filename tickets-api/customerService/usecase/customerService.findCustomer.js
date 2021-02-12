'use strict'

const CustomerServiceController = require('../infra/controller/customerService.controller');

class CustomerServiceFindInfosUseCase{  
    constructor(){}

    async getInfos(id){
        return await CustomerController.getCustomer(id);
    } 

    async getAll(){
        return await CustomerServiceController.getAllCustomers();
    } 

}
module.exports = new CustomerServiceFindInfosUseCase();