const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

// HELPER FUNCTIONS
const {
    isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middleware");

router.post(
    "/",
    // revisamos si el user no está ya logueado usando la función helper (chequeamos si existe req.session.currentUser)
    isNotLoggedIn(),
    // revisa que se hayan completado los valores de username y password usando la función helper
    validationLoggin(),
    async (req, res, next) => {
      const { email, password } = req.body;
      try {
        // chequea si el username ya existe en la BD
        const usernameExists = await User.findOne({ email}, "email");
        // si el usuario ya existe, pasa el error a middleware error usando next()
        if (usernameExists) return next(createError(400));
        else {
          // en caso contratio, si el usuario no existe, hace hash del password y crea un nuevo usuario en la BD
          const salt = bcrypt.genSaltSync(saltRounds);
          const hashPass = bcrypt.hashSync(password, salt);
          const newUser = await User.create({ email, password: hashPass, facilKill: 0, normalKill: 0, dificilKill: 0, daniKill: 0, facilVinculo: 0, normalVinculo: 0, dificilVinculo: 0, daniVinculo: 0});
          // luego asignamos el nuevo documento user a req.session.currentUser y luego enviamos la respuesta en json
          req.session.currentUser = newUser;
          res
            .status(200) //  OK
            .json(newUser);
            
        }
      } catch (error) {
        next(error);
      }
    }
  );  

  module.exports = router;
