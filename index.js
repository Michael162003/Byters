var path = require("path"); // Incluyo path en el proyecto
var express = require("express"); // Incluyo express en el proyecto
var app = express(); // Inicializo express
var folder = path.join(__dirname, "public"); // Creo la variable con la carpeta public
app.use(express.static(folder)); // Defino la carpeta public como la base de los archivos del sitio
app.listen(5000); // Levanto el servidor en el puerto 5000