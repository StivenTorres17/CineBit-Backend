//? Se importa la librería express y los middlewares morgan y helmet.
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

//? Se guarda en la constante app todos los métodos de la librería express.
const app = express();

//? Se define el puerto en el que se ejecutará el servidor.
const port = 3500;


//? Se importa las rutas para las APIs de usuarios y contenido.
const users_routes = require("./API_Users/routes/users_routes");
const content_routes = require("./API_Content/routes/content_routes");

app.use(helmet());              //TODO: Ayuda a proteger la aplicación configurando diversos encabezados HTTP.
app.use(morgan("combined"));    //TODO:  Imprime en consola información detallada sobre cada solicitud entrante al servidor.
app.use(express.json());        //TODO: Convierte el cuerpo de la solicitud en un objeto JSON.


//? Se definen las rutas principales para el acceso a la información de la base de datos que contiene ambas colecciones.
app.use('/users', users_routes);
app.use('/content', content_routes);

//? Se inicia el servidor y se muestra en consola el puerto en el que está corriendo.
app.listen(port, () => {
    console.log("El servidor se ejecuta en el puerto http://localhost:" + port);
  });

//! http://localhost:3500/users