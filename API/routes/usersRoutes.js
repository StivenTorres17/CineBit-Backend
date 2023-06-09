const express = require("express"); //TODO: Se importa la librería express.
const router = express.Router(); //TODO: Se crea un enrutador utilizando el método Router de express.
const authController = require("../controllers/authController.js"); //TODO: Se importa el controlador authController desde el archivo authController.js.
const { verifyToken } = require("../middlewares/verifyToken"); //TODO: Se importa la función verifyToken del módulo verifyToken en middlewares.

//? importar el userController
const users_controllers= require("../controllers/users_controllers");

router.get('/:email', userController.getUser); //? Ruta para obtener un usuario por su email.
router.get('/', users_controllers.getAllUsers); //? Ruta para obtener todos los usuarios.
router.post('/create', users_controllers.createUser); //? Ruta para crear un usuario.
router.put('/update/:id', users_controllers.updateUser); //? Ruta para actualizar un usuario por su ID.
router.delete('/delete/:id', users_controllers.deleteUser); //? Ruta para eliminar un usuario por su ID.
router.post('/login', authController.authenticateUser); //? Ruta para autenticar un usuario.

module.exports = router; //* Se exporta el enrutador para que pueda ser utilizado en otros archivos.