const mongoose = require('mongoose')
const Schema = mongoose.Schema
const player = new Schema({
    nombre: String,
    tipo: String,
    stats: Object,
    fuerza: Number,
    habilidad: Number,
    vinculo: Number,
    habilidades: Array,
    descripcion_habilidades: Array,
    image_url: String,
    motivación: Number,
})
const Player = mongoose.model ("Player", player)

module.exports = Player