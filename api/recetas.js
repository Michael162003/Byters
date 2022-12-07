var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs')

var receta = require("../schemas/receta.js");

router.post("/insertar", function (req, res) {
  var recetaNueva = new receta({
    _id: new mongoose.Types.ObjectId(),
    titulo: req.body.titulo,
    tipo: req.body.tipo,
    ingredientes: req.body.ingredientes,
    instrucciones: req.body.instrucciones,
    idUsuario: req.body.idUsuario,
    foto: req.body.foto
  });
  recetaNueva.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function (req, res) {
  var idUsuario = req.body.idUsuario;
  receta.where({ "idUsuario": idUsuario }).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/imagen', function (req, res) {
  var form = new formidable.IncomingForm()
  
  form.parse(req, function (err, fields, files) {
    var oldpath = files.filetoupload.filepath;
    var newpath = '../public/Media/' + files.filetoupload.originalFilename;
    fs.rename(oldpath, newpath, function(err){
      if(err) throw err;
      res.write('File uploaded and moved!');
      res.end();
    });
  });
});

module.exports = router;