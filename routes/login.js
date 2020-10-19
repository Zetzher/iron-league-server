const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middleware");

//LOGIN POST

router.post(
    "/",
    //isNotLoggedIn(),
    validationLoggin(),
    async (req, res, next) => {
      const { email, password } = req.body;
      try {
        // revisa si el usuario existe en la BD
        const user = await User.findOne({ email });
        // si el usuario no existe, pasa el error al middleware error usando next()
        if (!user) {
          next(createError(404));
        }
        // si el usuario existe, hace hash del password y lo compara con el de la BD
        // loguea al usuario asignando el document a req.session.currentUser, y devuelve un json con el user
        else if (bcrypt.compareSync(password, user.password,)) {
          req.session.currentUser = user;
          res.status(200).json(user);
          return;
        } else {
          next(createError(401));
        }
      } catch (error) {
        next(error);
      }
    }
  );

  

  module.exports =router;