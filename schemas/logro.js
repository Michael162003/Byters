var mongoose = require('mongoose');

var logroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    tipo: String,
    estado: String,
    idUsuario: String
});

//Permite que node pueda leer el archivo
module.exports = mongoose.model('Logro', logroSchema, 'Logros');