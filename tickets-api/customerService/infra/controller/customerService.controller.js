'use strict'

const CustomerController = require('../../../customer/infra/controller/customer.controller')

class CustomerServiceController{  
    constructor(){}

    async getCustomer(id){
        return await CustomerController.getById(id)
    }

    async getByMail(mail){
        return await CustomerController.getByEmail(mail)
    }

    async getAllCustomers(){
        return await CustomerController.getCustomers()
    }


}
module.exports = new CustomerServiceController();