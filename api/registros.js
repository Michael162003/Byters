var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var registro = require('../schemas/registros.js');

router.post('/insertar-registro', function (req, res) {
    var registroNuevo = new registro({
        _id: new mongoose.Types.ObjectId(),
        hora_comienzo: req.body.hora_comienzo,
        fecha: req.body.fecha,
        hora_fin: req.body.hora_fin,
        horas_ayuno: req.body.horas_ayuno,
        tipo_ejercicio: req.body.tipo_ejercicio,
        duracion: req.body.duracion,
        pesoDia: req.body.pesoDia,
        idUsuario: req.body.idUsuario
    });
    registroNuevo.save()
        .then(
            function (result) {
                res.json(result);
            }
        );
});

router.post('/buscar-registros', function (req, res) {
    var idUsuario = req.body.idUsuario;
    registro.where({ "idUsuario": idUsuario }).exec()
        .then(
            function (result) {
                res.json(result);
            }
        );
});
router.post('/buscar-registro', function (req, res) {
    var _id = req.body._id;
    registro.findById(_id).exec()
        .then(
            function (result) {
                res.json(result);
            }
        );
});

router.post('/actualizar-registro', function (req, res) {
    var _id = req.body._id;
    var hora_comienzo = req.body.hora_comienzo;
    var fecha = req.body.fecha;
    var hora_fin = req.body.hora_final;
    var horas_ayuno = req.body.horas_ayuno;
    var tipo_ejercicio = req.body.tipo_ejercicio;
    var duracion = req.body.duracion;
    var pesoDia = req.body.pesoDia;

    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima   
    registro.findOneAndUpdate({ _id : _id }, { $set: { hora_comienzo: hora_comienzo, hora_fin: hora_fin, horas_ayuno: horas_ayuno, tipo_ejercicio: tipo_ejercicio, duracion: duracion, pesoDia: pesoDia, fecha: fecha } }, { useFindAndModify: false, new: true }, function (err, doc) {
        res.json(doc);

    });
});

module.exports = router;