var mongoose = require('mongoose');

var ayunoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    correo: String,
    horas_ayuno: String,
    hora_comienzo: String,
    hora_fin: String,
    fecha: String
});

//Permite que node pueda leer el archivo
module.exports = mongoose.model('Ayuno', ayunoSchema, 'Ayunos');