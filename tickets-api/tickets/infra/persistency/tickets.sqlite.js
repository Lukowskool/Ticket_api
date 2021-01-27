'use strict'

const sqlite = require("aa-sqlite");

const Database = require("../../../application/index.sqlite")

class TicketsDatabase extends Database{  
    constructor(){
        super()
        this.initialiseTable();
    }

    async getAllTickets(){
        const query = `SELECT * FROM tickets`;
        const result = await sqlite.all(query).catch(function(err){
            console.error(err);
            return null;
        });
        return result;
    }

    async getByCustomer(customerId){
        const query = `SELECT * FROM tickets where customerId = ${customerId}`;
        const result = await sqlite.all(query).catch(function(err){
            console.error(err);
            return null;
        });
        return result;
    }

    async add(id, price, customerId){
        const query = `INSERT OR REPLACE INTO tickets (id, customerId, price) VALUES (${id},${customerId}, ${price})` ;
        await sqlite.run(query).catch(function(err){
            console.error(err );
        }); 
    } 

    async initialiseTable(){
        const query = 'CREATE TABLE IF NOT EXISTS tickets (' +
                      'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                      'customerId INTEGER NOT NULL,'+ 
                      'price INTEGER NOT NULL)';
        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }
}
module.exports = new TicketsDatabase();