var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var perfil = require('../schemas/perfil.js');
/* ruta utilizada para buscar cuentas en la base de datos*/
router.post('/buscar', function (req, res) {
  var correo = req.body.correo;
  perfil.where({"correo": correo}).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});
/* ruta utilizada para guardar cuentas nuevas en la base de datos */
router.post('/insertar', function (req, res) {
  var perfilNuevo = new perfil({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    correo: req.body.correo,
    fecha_nacimiento: req.body.fecha_nacimiento,
    genero: req.body.genero,
    altura: req.body.altura,
    peso: req.body.peso,
    foto: req.body.foto
  });

  perfilNuevo.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

module.exports = router;
