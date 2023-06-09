const express = require("express"); //TODO: Se importa la librería express.
const router = express.Router(); //TODO: Se crea un enrutador utilizando el método Router de express.

//? importar el contentControllers
const contentControllers = require("../controllers/contentControllers");

router.get('/:name', contentControllers.getContent); //? Ruta para obtener un contenido por su nombre.
router.get('/', contentControllers.getAllContent); //? Ruta para obtener todo el contenido.

module.exports = router; //* Se exporta el enrutador para que pueda ser utilizado en otros archivos.