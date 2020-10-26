const express = require("express");
const router = express.Router();
let User = require("../models/user");



router.post("/pushUser/:id", async (req, res, next) => {
    
    let personaje = req.body.personaje;
    let { id } = req.params;
    console.log(personaje,'id Personaje', id, 'req.body de user');
try {

    let userPush = await User.findByIdAndUpdate(id, { $push: {personaje} });
console.log(userPush)
    res.status(200).send(userPush)

} catch(err) {
    res.status(500).send({
        message: err
    })
}
  }
);

  
  module.exports = router;