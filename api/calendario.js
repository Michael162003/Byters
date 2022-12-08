var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var ayuno = require('../schemas/ayuno.js');
var peso = require("../schemas/peso.js");
var ejercicio = require('../schemas/ejercicio.js')

router.post('/buscar-ayuno', function (req, res) {
  var idUsuario = req.body.idUsuario;
  ayuno.where({"idUsuario": idUsuario }).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/buscar-peso', function (req, res) {
  var idUsuario = req.body.idUsuario;
  peso.where({"idUsuario": idUsuario }).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/buscar-ejercicio', function (req, res) {
  var idUsuario = req.body.idUsuario;
  ejercicio.where({"idUsuario": idUsuario }).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/insertar-ayuno', function (req, res) {
  var ayunoNuevo = new ayuno({
    _id: new mongoose.Types.ObjectId(),
    hora_comienzo: req.body.hora_comienzo,
    fecha: req.body.fecha,
    hora_fin: req.body.hora_fin,
    horas_ayuno: req.body.horas_ayuno,
    idUsuario: req.body.idUsuario
  });
  ayunoNuevo.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/insertar-peso', function (req, res) {
  var pesoNuevo = new peso({
    _id: new mongoose.Types.ObjectId(),
    fecha: req.body.fecha,
    idUsuario: req.body.idUsuario,
    pesoDia: req.body.pesoDia
  });
  pesoNuevo.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/insertar-ejercicio', function (req, res) {
  var ejercicioNuevo = new ejercicio({
    _id: new mongoose.Types.ObjectId(),
    tipo_ejercicio: req.body.tipo_ejercicio,
    fecha: req.body.fecha,
    idUsuario: req.body.idUsuario,
    duracion: req.body.duracion
  });
  ejercicioNuevo.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});


router.post('/actualizar-ayuno', function (req, res) {
  var hora_comienzo = req.body.hora_comienzo;
  var horas_ayuno = req.body.horas_ayuno;
  var hora_fin = req.body.hora_fin;
  var fecha = req.body.fecha;
  var idUsuario = req.body.idUsuario;

  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima   
  ayuno.findOneAndUpdate({ idUsuario: idUsuario, fecha: fecha }, { $set: { hora_comienzo: hora_comienzo, hora_fin: hora_fin, horas_ayuno: horas_ayuno } }, { useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);

  });
});

router.post('/actualizar-peso', function (req, res) {
  var fecha = req.body.fecha;
  var idUsuario = req.body.idUsuario;
  var pesoDia = req.body.pesoDia;

  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima   
  peso.findOneAndUpdate({ idUsuario: idUsuario, fecha: fecha }, { $set: { pesoDia: pesoDia } }, { useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);

  });
});

router.post('/actualizar-ejercicio', function (req, res) {
    var duracion = req.body.duracion;
    var tipo_ejercicio = req.body.tipo_ejercicio;
    var fecha = req.body.fecha;
    var idUsuario = req.body.idUsuario;

    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima   
    ejercicio.findOneAndUpdate({ idUsuario: idUsuario, fecha: fecha }, { $set: { tipo_ejercicio: tipo_ejercicio, duracion: duracion } }, { useFindAndModify: false, new: true }, function (err, doc) {
      res.json(doc);
    });
  });
module.exports = router;