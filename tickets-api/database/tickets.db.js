'use strict'

const sqlite = require("aa-sqlite");
const Database = require("./database")

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

    async getSoldTickets(){
        const query = `SELECT * FROM tickets where sold = false`;
        const result = await sqlite.all(query).catch(function(err){
            console.error(err);
            return null;
        });
        return result;
    }

    async getAvailableTickets(){
        const query = `SELECT * FROM tickets where sold = false`;
        const result = await sqlite.all(query).catch(function(err){
            console.error(err);
            return null;
        });
        return result;
    }

    async initialiseTable(){
        const query = 'CREATE TABLE IF NOT EXISTS tickets (' +
                      'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                      'label TEXT NOT NULL,'+ 
                      'price INTEGER NOT NULL,'+
                      'sold BOOLEAN NOT NULL)';
        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }
}
module.exports = new TicketsDatabase();