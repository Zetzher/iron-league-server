const mongoose = require('mongoose')
const Schema = mongoose.Schema
const enemigos = new Schema({

nombre: String,
tipo: String,
stats: Object,
fuerza: Number,
habilidad: Number,
vinculo: Number,
habilidades: {
    nombres: Array,
    descripcion_habilidades: Array},
image_url: String,
motivación: Number,
nivelEnemigo: String,
statsGanados: Number
} 
)
const Enemigos = mongoose.model ("Enemigos", enemigos)

module.exports = Enemigos