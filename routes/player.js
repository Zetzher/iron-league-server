const express = require("express");
const router = express.Router();
const Player = require('../models/player.js');


//GET
router.get('/', (req, res, next) =>{
Player
.find()
.then((dbResponse)=>{
res.status(200)
.json(dbResponse)
})
})



module.exports = router;