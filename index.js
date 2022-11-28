var path = require("path"); // Incluyo path en el proyecto
var express = require("express"); // Incluyo express en el proyecto
var mongoose = require("mongoose");
var app = express(); // Inicializo express

mongoose.connect("mongodb+srv://cenfotec:123@powerbyte.kizbj4h.mongodb.net/?retryWrites=true&w=majority")
app.use(express.json())

var folder = path.join(__dirname, "public"); // Creo la variable con la carpeta public

app.use('/recetas', require('./api/recetas.js'));
app.use('/calendario', require('./api/calendario.js'));
app.use('/landing-producto', require('./api/landing-producto.js'));
app.use('/perfil', require('./api/perfil.js'))

app.use(express.static(folder)); // Defino la carpeta public como la base de los archivos del sitio
app.listen(5000); // Levanto el servidor en el puerto 5000