const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Enemigos = require("../models/enemigos")

//GET
router.get('/', (req, res, next) => {
    Enemigos
        .find()
        .then(dbResponse => {
            res.status(200)
                .json(dbResponse)

        })
        .catch(err => console.log('En metodo GET de Eventos ha ocurrido:', err))
})

module.exports = router;