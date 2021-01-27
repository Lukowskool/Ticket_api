'use strict'

const sqlite = require("aa-sqlite")

const Database = require("../../../application/index.sqlite")

class CustomerDatabase extends Database{  
    constructor(){
        super()
        this.initialiseTable()
    }
    
    async initialiseTable(){
        const query = 'CREATE TABLE IF NOT EXISTS customer (' +
                      'id INTEGER PRIMARY KEY AUTOINCREMENT,'+
                      'firstname TEXT NOT NULL,'+
                      'lastname TEXT NOT NULL,'+
                      'email TEXT NOT NULL UNIQUE)';

        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }

    async add(id, firstname, lastname, email){
        const query = `INSERT OR REPLACE INTO customer (id, firstname, lastname, email) ` + 
                      `VALUES (${id}, ${firstname}, ${lastname}, ${email})`; 

        await sqlite.run(query).catch(function(err){
            console.error(err );
        });
    }
    
    async getCustomers(){
        const query = "SELECT * from customer";
        const result = await sqlite.all(query).catch(function(err){
            console.error(err);
        });
        return result;
    }

    async getById(id){
        let query = `SELECT * FROM customer WHERE ID = ${id}`;
        const result = await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;  
    }

    async getByEmail(email){
        let query = `SELECT * FROM customer WHERE EMAIL = '${email}'`;
        const result =  await sqlite.get(query).catch(function(err){
            console.error(err);
        });
        return result;
    }
    
}
module.exports = new CustomerDatabase();