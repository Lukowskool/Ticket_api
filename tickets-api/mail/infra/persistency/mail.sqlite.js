'use strict'

const sqlite = require("aa-sqlite");
const Database = require("../../../application/index.sqlite")

class MailDatabase extends Database{  
    constructor(){
        super()
        this.initialiseTable();
    }

    async createMail(receiver, content){
        if(!receiver|| receiver == ""){
            return null
        }
        if(!content|| content == ""){
            return null
        }
        let date = Date.now().toLocaleString()
        let query = `INSERT INTO mail (receiver, content, date) VALUES(${receiver}, ${content}, ${date})`;
        
        return await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    } 

    async initialiseTable(){
        const query = 'CREATE TABLE IF NOT EXISTS mail (' +
                      'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                      'receiver TEXT NOT NULL,'+
                      'content TEXT NOT NULL,'+
                      'date TEXT NOT NULL)';
        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }
}
module.exports = new MailDatabase();