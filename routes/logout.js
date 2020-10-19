const express = require("express");
const router = express.Router();

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require("../helpers/middleware");
  


router.post("/", isLoggedIn(), (req, res, next) => {
    req.session.destroy();
    //  - setea el código de estado y envía de vuelta la respuesta
    res
      .status(204) //  No Content
      .send();
    return;
  });

  module.exports = router;