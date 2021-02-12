const express = require("express");

const findInfosUseCase = require('../../usecase/customerService.findCustomer')
const manageChoiceUseCase = require('../../usecase/customerService.manageChoice')
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

router.post('/:id/delete', async(req, res)=>{
    const customerId = parseInt(req.params.id);
    const result = await manageChoiceUseCase.deleteAllChoices(customerId);
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

module.exports = router;