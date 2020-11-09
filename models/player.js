const mongoose = require('mongoose')
const Schema = mongoose.Schema
const player = new Schema({
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
    color: Array,
    carta_url: String,
    anterior_asesinato:  Object,
    asesinatos: Number,
    amistad: Number,
    objeto: [{
        nombre: String,
        efecto: String,
        motivación: Number,
        fuerza: Number,
        habilidad: Number,
        vínculo: Number
    }]
})
const Player = mongoose.model ("Player", player)

module.exports = Player