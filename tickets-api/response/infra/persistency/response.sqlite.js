'use strict'

const sqlite = require("aa-sqlite");

const Database = require("../../../application/index.sqlite")

class ResponseDatabase extends Database{  
    constructor(){
        super()
        this.initialiseTable();
    }

    async addOrUpdate(customerId, ticketId, choice){
        let date = Date.now().toLocaleString()
        const query = `INSERT INTO tickets (customerId, ticketId, date, choice) ` + 
                      `VALUES (${customerId},${ticketId}, ${date}, ${choice})` ;
        await sqlite.run(query).catch(function(err){
            console.error(err );
        }); 
    } 

    async getByCustomer(customerId){
        let query = `SELECT * FROM response WHERE customerId = ${customerId}`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;  
    } 

    async getCurrentByCustomer(customerId){
        let query = `SELECT * FROM response WHERE customerId = ${customerId} AND current = 1`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;  
    } 

    async getHistoryByCustomer(customerId){
        let query = `SELECT * FROM response WHERE customerId = ${customerId} AND current = 0`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;  
    } 

    async getCurrent(){
        let query = `SELECT * FROM response WHERE current = 1 ORDER BY customerId`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;  
    } 

    async getHistory(){
        let query = `SELECT * FROM response WHERE current = 0 ORDER BY customerId`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;  
    } 

    async deleteAll(){
        let query = `DELETE FROM response`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result; 
    } 

    async updateCurrency(ticketId){
        let query = `UPDATE response SET current = 0 WHERE ticketId = ${ticketId} AND current = 1`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;
    } 

    async initialiseTable(){
        const query = 'CREATE TABLE IF NOT EXISTS response (' +
                      'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                      'customerId INTEGER NOT NULL,'+
                      'ticketId INTEGER NOT NULL,'+ 
                      'date TEXT NOT NULL,' +
                      'choice INTEGER NOT NULL,'+
                      'current INTEGER NOT NULL)';

        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }
}
module.exports = new ResponseDatabase();