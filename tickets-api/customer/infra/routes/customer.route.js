const express = require("express");

const findTicketsUseCase = require('../../usecase/customer.findTickets')
const findInfosUseCase = require('../../usecase/customer.findInfos')
const manageChoiceUseCase = require('../../usecase/customer.manageChoice')
var router = express.Router();

router.get('/:id', async(req, res)=>{
    const id = parseInt(req.params.id);
    const result = await findInfosUseCase.getInfos(id);
    if(result){
        res.status(200).json({
            result
        })
    }else{
        res.status(404)
    } 
})

router.get('/:id/tickets', async(req, res)=>{
    const customerId = parseInt(req.params.id);
    const result = await findTicketsUseCase.getAll(customerId);
    if(result){
        res.status(200).json({
            result
        })
    }else{
        res.status(404)
    } 
})

router.get('/:id/responses', async(req, res)=>{
    const customerId = parseInt(req.params.id);
    const result = await manageChoiceUseCase.getChoices(customerId);
    if(result){
        res.status(200).json({
            result
        })
    }else{
        res.status(404)
    }
})

router.post('/:id/response', async(req, res)=>{
    const customerId = parseInt(req.params.id);
    const ticket = parseInt(req.query.ticketId);
    const choice = parseInt(req.query.choice)
    const result = await manageChoiceUseCase.UpdateChoice(customerId, ticket, choice)
    if(result){
        res.status(200).json({
            result
        })
    }else{
        res.status(404)
    }
})

module.exports = router;