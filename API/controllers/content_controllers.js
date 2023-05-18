const content_models = require("../models/content_models");

//? De esta manera se llama todos los documentos de la colecion content
exports.getAllcontent = (req, res) => {
  
  const { id } = req.params
  content_models
     
  .find() //? Con el metodo find podemos enlistar nuestro documentos
    .then((Content) => res.json(Content)) //? Con el metodo then nos muestra la informacion en un formato .json
    .catch((err) => res.status(500).json({ error: err.message })); //? Con el metodo catch nos muestra el error
};