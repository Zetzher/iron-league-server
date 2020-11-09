const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objeto = new Schema({
  armas: [
    {
      nombre: String,
      efecto: String,
      motivación: Number,
      stats: {
        fuerza: Number,
        habilidad: Number,
        rainbow: Number,
      }
      
    }
  ],
  armaduras: [{
    nombre: String,
    efecto: String,
    motivación: Number,
    stats: {
        fuerza: Number,
        habilidad: Number,
        vinculo: Number,
      }
  }
  ],
  auras: [{
    nombre: String,
    efecto: String,
    motivación: Number,
    stats: {
        fuerza: Number,
        habilidad: Number,
        vinculo: Number,
      }
  }]
});
const Objeto = mongoose.model("Objeto", objeto);

module.exports = Objeto;
