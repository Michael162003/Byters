var mongoose = require('mongoose');

var logroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    tipo: String,
    estado: String,
    correo: String
});

module.exports = mongoose.model('Logro', logroSchema, 'Logros');