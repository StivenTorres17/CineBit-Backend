const express = require("express");

const router = express.Router();

//importar el userController
const users_controllers= require("../controllers/users_controllers");

router.get('/', users_controllers.getAllUsers);

router.post('/', users_controllers.createUser);

router.put('/:id', users_controllers.updateUser);

router.delete('/:id', users_controllers.deleteUser);

module.exports = router;