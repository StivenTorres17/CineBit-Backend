const express = require("express");

const router = express.Router();

const authController = require ("../controllers/authController.js")

//? importar el userController
const users_controllers= require("../controllers/users_controllers");

router.get('/', users_controllers.getAllUsers);

router.post('/create', users_controllers.createUser);

router.put('/update/:id', users_controllers.updateUser);

router.delete('/delete/:id', users_controllers.deleteUser);

router.post('/login', authController.authenticateUser);

module.exports = router;