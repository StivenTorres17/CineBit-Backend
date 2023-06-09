//TODO: Se importa la librería express para utilizarla en el código.
const express = require('express');
const cors = require('cors');

//* Se guarda en la constante app todos los métodos de la librería express.
const app = express();

//TODO: Se define el puerto en el que se ejecutará el servidor.
const port = 3000;

//? Se configuran las cabeceras para permitir el acceso desde el dominio http://localhost:4200.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//* Se importan las rutas para las APIs de usuarios y contenido.
const usersRoutes = require("./API/routes/usersRoutes");
const contentRoutes = require("./API/routes/contentRoutes");

//? Se configura CORS para permitir el acceso desde cualquier origen.
app.use(cors({
  // origin: "http://localhost:4200",
  origin: "*" //TODO: El servidor permite el acceso desde cualquier origen.
}));

//? Se utiliza el middleware para analizar el cuerpo de la solicitud y convertirlo en un objeto JSON.
app.use(express.json()); //TODO: Convierte el cuerpo de la solicitud en un objeto JSON.

//* Se definen las rutas principales para el acceso a la información de la base de datos que contiene ambas colecciones.
app.use('/users', usersRoutes);
app.use('/content', contentRoutes);

//? Se inicia el servidor y se muestra en consola el puerto en el que está corriendo.
app.listen(port, () => {
  console.log("El servidor se ejecuta en el puerto http://localhost:" + port); //TODO: Muestra en consola el puerto en el que está corriendo el servidor.
});