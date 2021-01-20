'use strict'

const sqlite = require("aa-sqlite")

const Database = require("./database")

class UserDatabase extends Database{  
    constructor(){
        super()
        this.initialiseTable()
    }
    
    async initialiseTable(){
        const query = 'CREATE TABLE IF NOT EXISTS users (' +
                      'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                      'firstname TEXT NOT NULL,'+
                      'lastname TEXT NOT NULL,'+
                      'email TEXT NOT NULL UNIQUE)';

        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }
    
    async getUsers(){
        const query = "SELECT * from users";
        const result = await sqlite.all(query).catch(function(err){
            console.error(err);
        });
        return result;
    }

    async getById(id){
        let query = `SELECT * FROM users WHERE ID = ${id}`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;  
    }

    async getByEmail(email){
        let query = `SELECT * FROM users WHERE EMAIL = '${email}'`;
        const result =  await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;
    }
    
}
module.exports = new UserDatabase();