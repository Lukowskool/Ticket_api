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

    async add(customerId, ticketId){
        return await Persistency.addOrUpdate(customerId, ticketId, 0);
    }

    async updateChoice(id, customerId, ticketId, choice){
        let res =  await Persistency.addOrUpdate(customerId, ticketId, choice);
        if(res){
            Persistency.updateCurrency(ticketId);
            return true;
        } 
        return false;
    } 
}
module.exports = new ResponseController();