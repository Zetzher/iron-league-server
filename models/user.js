const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  nombre: String,
  apellido: String,
  edad: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  personaje: Array,
  facilKill: Number,
  normalKill: Number,
  dificilKill: Number,
  daniKill: Number,
  facilVinculo: Number,
  normalVinculo: Number,
  dificilVinculo: Number,
  daniVinculo: Number,
  rutaNeutral: {type: Boolean, default: false},
  rutaBueno: {type: Boolean, default: false},
  rutaMalo: {type: Boolean, default: false},
});
const User = mongoose.model("User", user);

module.exports = User;
