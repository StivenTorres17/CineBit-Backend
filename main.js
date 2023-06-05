// //? Se importa la librería express 
const express = require('express');
const cors = require ('cors');

// //? Se guarda en la constante app todos los métodos de la librería express.
const app = express();

// //? Se define el puerto en el que se ejecutará el servidor.
const port = 3000;


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// //? Se importa las rutas para las APIs de usuarios y contenido.
const users_routes = require("./API/routes/users_routes");
const content_routers = require("./API/routes/content_routes");

app.use(express.json());        //TODO: Convierte el cuerpo de la solicitud en un objeto JSON.


// //? Se definen las rutas principales para el acceso a la información de la base de datos que contiene ambas colecciones.
app.use('/users', users_routes);
app.use('/Content', content_routers);
app.use(cors(
  {
    origin:"*"
  }
))

// //? Se inicia el servidor y se muestra en consola el puerto en el que está corriendo.
 app.listen(port, () => {
     console.log("El servidor se ejecuta en el puerto http://localhost:" + port);
   });

