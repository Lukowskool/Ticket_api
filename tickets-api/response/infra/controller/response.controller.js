'use strict'

const Persistency = require('../persistency/response.sqlite');

class ResponseController{  
    constructor(){}

    async getCurrent(){
        return await Persistency.getCurrent() 
    }

    async getHistory(){
        return await Persistency.getHistory()
    } 

    async getCurrentByCustomer(customerId){
        return await Persistency.getCurrentByCustomer(customerId)
    } 

    async getHistoryByCustomer(customerId){
        return await Persistency.getHistoryByCustomer(customerId)
    } 

    async deleteAll(){
        return await Persistency.deleteAll()
    } 
}
module.exports = new ResponseController();