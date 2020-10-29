const express = require("express");
const router = express.Router();
let User = require("../models/user");

router.post("/pushPlayer/:id", async (req, res, next) => {
  let personaje = req.body.personaje;
  let { id } = req.params;
  console.log(personaje, "id Personaje", id, "req.body de user");
  try {
    let userPush = await User.findByIdAndUpdate(id, { $push: { personaje } });
    console.log(userPush);
    res.status(200).send(userPush);
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
});

router.post("/pushKill/:id", async (req, res, next) => {
  let dificultad = req.body.dificultad;
  let cantidadKill = req.body.cantidadKill;
  let { id } = req.params;

  switch (dificultad) {
    case "facilKill":
      try {
        let userPush = await User.findByIdAndUpdate(id, {
          facilKill: cantidadKill,
        });
        res.status(200).send(userPush);
      } catch (err) {
        res.status(500).send({
          message: err,
        });
        console.log(err.message, "mensaje de error");
      }
      break;
      case "normalKill":
      try {
        let userPush = await User.findByIdAndUpdate(id, {
            normalKill: cantidadKill,
        });
        res.status(200).send(userPush);
      } catch (err) {
        res.status(500).send({
          message: err,
        });
        console.log(err.message, "mensaje de error");
      }
      break;
      case "dificilKill":
      try {
        let userPush = await User.findByIdAndUpdate(id, {
            dificilKill: cantidadKill,
        });
        res.status(200).send(userPush);
      } catch (err) {
        res.status(500).send({
          message: err,
        });
        console.log(err.message, "mensaje de error");
      }
      break;
      case "daniKill":
      try {
        let userPush = await User.findByIdAndUpdate(id, {
            daniKill: cantidadKill,
        });
        res.status(200).send(userPush);
      } catch (err) {
        res.status(500).send({
          message: err,
        });
        console.log(err.message, "mensaje de error");
      }
      break;
  }
});

module.exports = router;
