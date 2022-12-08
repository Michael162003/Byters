var path = require("path"); // Incluyo path en el proyecto
var express = require("express"); // Incluyo express en el proyecto
var mongoose = require("mongoose");
var app = express(); // Inicializo express

//Conexion a la base de datos
mongoose.connect("mongodb+srv://cenfotec:123@powerbyte.kizbj4h.mongodb.net/Aplicacion?retryWrites=true&w=majority")

//Permite usar el metodo post
app.use(express.json())

var folder = path.join(__dirname, "public"); // Creo la variable con la carpeta public

//Servicio que contiene las rutas
// app.use('/fileupload', require('./api/recetas.js'));
app.use('/recetas', require('./api/recetas.js'));
app.use('/calendario', require('./api/registros.js'));
app.use('/landing-producto', require('./api/landing-producto.js'));
app.use('/perfil', require('./api/perfil.js'));

app.use(express.static(folder)); // Defino la carpeta public como la base de los archivos del sitio
app.listen(5000); // Levanto el servidor en el puerto 5000