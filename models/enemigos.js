const mongoose = require('mongoose')
const Schema = mongoose.Schema
const enemigos = new Schema({

nombre: String,
type: String,
stats: Object,
fuerza: Number,
habilidad: Number,
vinculo: Number,
image_url: String,
motivación: Number,
nivel: Array,
nivelEnemigo: String
} 
)
const Enemigos = mongoose.model ("Enemigos", enemigos)

module.exports = Enemigos