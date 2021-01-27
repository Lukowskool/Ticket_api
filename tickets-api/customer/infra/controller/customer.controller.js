'use strict'

const Persistency = require('../persistency/customer.sqlite');

class CustomerController{  
    constructor(){}

    async getCustomer(id){
        return await Persistency.getById(id)
    }

    async getByMail(mail){
        return await Persistency.getByEmail(mail)
    }

    async getAllCustomers(){
        return await Persistency.getCustomers()
    }
}
module.exports = new CustomerController();