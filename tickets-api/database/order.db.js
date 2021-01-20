'use strict'

const sqlite = require("aa-sqlite");
const Database = require("./database")

class OrderDatabase extends Database{  
    constructor(){
        super()
        this.initialiseTable();
    }

    async initialiseTable(){
        const query = 'CREATE TABLE IF NOT EXISTS mail (' +
                      'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                      'price INTEGER NOT NULL,'+
                      'idUser INTEGER NOT NULL,'+
                      'date TEXT NOT NULL)';
        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }
}
module.exports = new OrderDatabase();