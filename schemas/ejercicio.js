var mongoose = require('mongoose');

var ejercicioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    correo: String,
    tipo_ejercicio: String,
    fecha: String,
    duracion: String
});

//Permite que node pueda leer el archivo
module.exports = mongoose.model('Ejercicio', ejercicioSchema, 'Ejercicios');