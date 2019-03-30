const express = require('express');
const router = express.Router();
const fs     = require('fs');


router.post('/', getMapRoutes);

module.exports = router;


function getMapRoutes(req, res, next) {
    if(!req.body) {res.status(400).json({message:'payload is empty!'});}
    
    console.log("responding!")
    res.status(200).json({
        message: 'hey there!'
    })
}