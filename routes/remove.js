const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.delete("/:id",(req, res, next) => {

  User.findByIdAndRemove(req.params.id, (err) => {
  if (err) {
  req.flash("error", err);
  }
  req.flash("success", "Your account has been deleted.");
  });
  });

  
  module.exports = router;