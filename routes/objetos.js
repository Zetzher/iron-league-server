const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Objetos = require("../models/objetos");
const User = require("../models/user");

//GET
router.get("/", (req, res, next) => {
  Objetos.find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((err) => console.log("En metodo GET de Eventos ha ocurrido:", err));
});

router.post("/:id/pushObjeto", async (req, res, next) => {
  let { player, objeto } = req.body;
  console.log(objeto, 'objeto', player, 'player')
  objeto.stats && objeto.stats.fuerza
    ? (player.stats.fuerza = player.stats.fuerza + objeto.stats.fuerza)
    : null;

  objeto.stats && objeto.stats.habilidad
    ? (player.stats.habilidad = player.stats.habilidad + objeto.stats.habilidad)
    : null;

  objeto.stats && objeto.stats.vinculo
    ? (player.stats.vinculo = player.stats.vinculo + objeto.stats.vinculo)
    : null;

  objeto.motivación 
    ? (player.motivación = player.motivación + objeto.motivación)
    : null;

  let pushPlayer = await User.findByIdAndUpdate(req.params.id, {
    $push: { personaje: player },
  });
  res.status(200).json(pushPlayer);
});

router.post("/:userId/personajePull", async (req, res, next) => {
  try {
    let id = req.params.userId;
    let nombre = req.body;
    let pullPnj = await User.findByIdAndUpdate(id, {
      $pull: { personaje: nombre },
    });
    res.status(200).json(pullPnj);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
