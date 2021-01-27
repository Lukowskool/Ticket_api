'use strict'

const Persistency = require('../persistency/mail.sqlite');

class MailController{  
    constructor(){}

    async create(receiver, content){
        return Persistency.createMail(receiver, content)
    }
}
module.exports = new MailController();