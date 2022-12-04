var mongoose = require('mongoose');

var ejercicioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idUsuario: String,
    tipo_ejercicio: String,
    fecha: String,
    duracion: String
});

//Permite que node pueda leer el archivo
module.exports = mongoose.model('Ejercicio', ejercicioSchema, 'Ejercicios');