var mongoose = require('mongoose');

var pesoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    correo: String,
    peso: Number,
    fecha: String
});

//Permite que node pueda leer el archivo
module.exports = mongoose.model('Peso', pesoSchema, 'Pesos');