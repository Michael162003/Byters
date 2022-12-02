var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var ayuno = require('../schemas/ayuno.js');
var ejercicio= require('../schemas/ejercicio.js');
var peso= require('../schemas/peso.js');

router.post('/buscar-ayuno', function(req, res) {
    var fecha = req.body.fecha;
    calendario.where({"fecha": fecha}).exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

router.post('/buscar-peso', function(req, res) {
    var fecha = req.body.fecha;
    calendario.where({"fecha": fecha}).exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/buscar-ejercicio', function(req, res) {
    var fecha = req.body.fecha;
    calendario.where({"fecha": fecha}).exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar-ayuno', function(req, res) {
    var calendarionuevo = new calendario({
      _id: new mongoose.Types.ObjectId(),
      horas_comienzo:  req.body.horas_comienzo,
      hora_fin:  req.body.hora_fin,
      horas_ayuo:  req.body.horas_ayuno
  });
  calendarionuevo.save()
    .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar-peso', function(req, res) {
    var calendarionuevo = new calendario({
      _id: new mongoose.Types.ObjectId(),
      peso:  req.body.peso
  });
  calendarionuevo.save()
    .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
  router.post('/insertar-ejercicio', function(req, res) {
    var calendarionuevo = new calendario({
      _id: new mongoose.Types.ObjectId(),
      tipo_ejercicio:  tipo_ejercicio
  });
  calendarionuevo.save()
    .then(
        function(result) {
          res.json(result);
        }
      );
  });
  
  
 router.post('/actualizar-ayuno', function (req, res) {
    var horas_comienzo=  req.body.horas_comienzo;
    var hora_fin=  req.body.hora_fin;
    var horas_ayuo=  req.body.horas_ayuno;
    
 // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima   
 calendario.findOneAndUpdate({horas_comienzo: horas_comienzo}, {$set: {hora_fin: hora_fin}}, {$set: {horas_ayuo: horas_ayuo}},{ useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);


});
});  
    
 router.post('/actualizar-peso', function (req, res) {    
    var peso= req.body.peso;
 // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima 
 calendario.findOneAndUpdate({peso: peso},{ useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);


});
});  

 router.post('/actualizar-ejercicio', function (req, res) {
    var tipo_ejercicio= req.body.tipo_ejercicio;
    var duracion= req.body.duracion;

// findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
calendario.findOneAndUpdate({$set:}{tipo_ejercicio: tipo_ejercicio},{ useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);


});
});   