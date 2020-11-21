const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/neutral/:id", async (req, res, next) => {
    try{
  let searchUser = await User.findByIdAndUpdate(req.params.id, {
    facilKill: 0,
    normalKill: 0,
    dificilKill: 0,
    daniKill: 0,
    facilVinculo: 0,
    normalVinculo: 0,
    dificilVinculo: 0,
    daniVinculo: 0,
    rutaNeutral: true,
    personaje: []
  });

  res.status(200).json(searchUser);
} catch(err) {
    res.status(400).json(err);
}
});

router.post("/malo/:id", async (req, res, next) => {
    try{
  let searchUser = await User.findByIdAndUpdate(req.params.id, {
    facilKill: 0,
    normalKill: 0,
    dificilKill: 0,
    daniKill: 0,
    facilVinculo: 0,
    normalVinculo: 0,
    dificilVinculo: 0,
    daniVinculo: 0,
    rutaMalo: true,
    personaje: []
  });

  res.status(200).json(searchUser);
} catch(err) {
    res.status(400).json(err);
}
});

router.post("/bueno/:id", async (req, res, next) => {
    try{
  let searchUser = await User.findByIdAndUpdate(req.params.id, {
    facilKill: 0,
    normalKill: 0,
    dificilKill: 0,
    daniKill: 0,
    facilVinculo: 0,
    normalVinculo: 0,
    dificilVinculo: 0,
    daniVinculo: 0,
    rutaBueno: true,
    personaje: []
  });

  res.status(200).json(searchUser);
} catch(err) {
    res.status(400).json(err);
}
});

module.exports = router;
