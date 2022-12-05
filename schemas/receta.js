var mongoose = require('mongoose');

var recetaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    tipo: String,
    ingredientes: String,
    instrucciones: String,
    idUsuario: String,
    foto: String
});

//Permite que node pueda leer el archivo
module.exports = mongoose.model('Receta', recetaSchema, 'Recetas');