'use strict'

const sqlite = require("aa-sqlite")

class Database{
    constructor(){
        this.dbPath = "./TicketsAPI.db"
        sqlite.open(this.dbPath);
    }  
}
module.exports = Database;