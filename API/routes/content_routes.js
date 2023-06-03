const express = require("express");

const router = express.Router();

//? importar el userController
const content_controllers = require("../controllers/content_controllers");

router.get("/:id", content_controllers.getAllcontent);

module.exports = router;