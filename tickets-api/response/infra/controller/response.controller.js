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

    async updateChoice(customerId, ticketId, choice){
        await Persistency.updateCurrency(ticketId);
        let res =  await Persistency.addOrUpdate(customerId, ticketId, choice);
        if(res){
            return true;
        } 
        return false;
    } 
}
module.exports = new ResponseController();