const express = require("express");
const controll = require('../controllers/tickets.controller');

var parser = require('body-parser');
var router = express.Router();

router.get('/all', async(req, res)=>{
    const list = await controll.getAll();
    if(list){
        res.json(list)
    }else{
        res.sendStatus(404);
    }
})

router.get('/sold', async(req, res)=>{
    const list = await controll.getSoldTickets();
    if(list){
        res.json(list)
    }else{
        res.sendStatus(404);
    }
})

router.get('/available', async(req, res)=>{
    const list = await controll.getAvailableTickets();
    if(list){
        res.json(list)
    }else{
        res.sendStatus(404);
    }
})

module.exports = router;