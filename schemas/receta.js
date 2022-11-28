var mongoose = require('mongoose');

var recetaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    tipo: String,
    ingredientes: String,
    instrucciones: String,
    correo: String
});

module.exports = mongoose.model('Receta', recetaSchema, 'Recetas');