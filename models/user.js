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
  players: [{
    type: Schema.Types.ObjectId, ref: "Player"
  }],
});
const User = mongoose.model("User", user);

module.exports = User;
