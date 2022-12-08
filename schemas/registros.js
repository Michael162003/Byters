var mongoose = require('mongoose');

var registroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    horas_ayuno: String,
    hora_comienzo: String,
    hora_fin: String,
    tipo_ejercicio: String,
    duracion: String,
    pesoDia: Number,
    fecha: String,
    idUsuario: String
});

//Permite que node pueda leer el archivo
module.exports = mongoose.model('Registro', registroSchema, 'Registros');