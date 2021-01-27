'use strict'
class Customer{  
    id;
    firstname;
    lastname;
    email;
    constructor(id,firstname,lastname,email,password){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
}