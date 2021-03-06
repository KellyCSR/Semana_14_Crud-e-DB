const mongoose = require('mongoose')

const titulosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    estudio: {
        type: String,
        required: true,
        ref: 'estudio'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('titulo', titulosSchema)