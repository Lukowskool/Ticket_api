'use strict'

const MailController = require('../infra/controller/mail.controller');

class SendMailUseCase{  
    constructor(){}

    async sendMail(mail){
        let response = await MailController.create(mail.receiver, mail.content);
        if(!response){
            alert()
            return false;
        }
        console.log("mail envoyé");
        return true;
    }

    alert(){
        console.log('mail non envoyé');
    }
}
module.exports = new SendMailUseCase();