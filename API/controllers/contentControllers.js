const contentModel = require("../models/contentModel"); //TODO: Se importa el modelo contentModel desde el archivo contentModel.js.
//! Obtiene todo el contenido. ||  Endpoint: GET /content
exports.getAllContent = (req, res) => {
  contentModel.find() //? Busca todos los usuarios en la base de datos.
    .then(content => res.json(content)) //* Si se encuentran usuarios, se devuelve un objeto JSON con los usuarios encontrados.
    .catch(err => res.status(500).json({ error: err.message })); //* Si hay un error, se devuelve un mensaje de error y un código de estado 500.
};

//! Obtiene un usuario por su name. || Endpoint: GET /content/:name
exports.getContent = (req, res) => {
  const { name } = req.params; //? Se obtiene el name de los parámetros de la solicitud.
  contentModel.findOne({ name }) //? Busca un usuario por su name en la base de datos.
    .then(content => res.json(content)) //* Si se encuentra el usuario, se devuelve un objeto JSON con el usuario encontrado.
    .catch(err => res.status(404).json({ error: err.message })); //* Si no se encuentra el usuario, se devuelve un mensaje de error con un código de estado 404. En caso de error, se devuelve un mensaje de error con un código de estado 500.
};