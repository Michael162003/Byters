var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var perfil = require("../schemas/perfil.js");
var logros = require("../schemas/logro.js");

router.post('/buscar-perfil', function (req, res) {
var idUsuario = req.body.idUsuario;
    perfil.findById(idUsuario).exec()
        .then(
            function (result) {
                res.json(result);
            }
        );
  });

router.post('/actualizar-perfil', function (req, res) {
    var idUsuario = req.body.idUsuario;
    var nombre = req.body.nombre;
    var fecha_nacimiento = req.body.fecha_nacimiento;
    var genero = req.body.genero;
    var altura = req.body.altura;
    var peso = req.body.peso;
    var foto = req.body.foto

    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    perfil.findOneAndUpdate({ _id: idUsuario }, { $set: { nombre: nombre, fecha_nacimiento: fecha_nacimiento, genero: genero, altura: altura, peso: peso, foto: foto} },  function (err, doc) {
        res.json(doc);
    });
});

router.post('/buscar-logros', function (req, res) {
    var idUsuario = req.body.idUsuario;
    logros.where({"idUsuario": idUsuario}).exec()
        .then(
            function (result) {
                res.json(result);
            }
        );
});

router.post('/actualizar-logros', function (req, res) {
    var _id = req.body._id;
    var estado = req.body.estado;

    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    logros.findOneAndUpdate({ _id: _id }, { $set: { estado: estado } }, { useFindAndModify: false, new: true }, function (err, doc) {
        res.json(doc);
    });
});

router.post('/insertar-logros', function (req, res) {
    var logrosNuevo = new logros({
        _id: new mongoose.Types.ObjectId(),
        titulo: req.body.titulo,
        tipo: req.body.tipo,
        estado: req.body.estado,
        idUsuario: req.body.idUsuario
    });

    logrosNuevo.save()
        .then(
            function (result) {
                res.json(result);
            }
        );
});

module.exports = router;
