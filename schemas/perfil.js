var mongoose = require('mongoose');

var perfilSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    correo: String,
    nombre: String,
    fecha_nacimiento: String,
    genero: String,
    altura: Number,
    peso: Number
});

module.exports = mongoose.model('Perfil', perfilSchema, 'Perfiles');