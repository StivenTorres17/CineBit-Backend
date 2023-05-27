const userModel = require("../models/users_models");
const bcrypt = require("bcryptjs");

exports.getAllUsers = (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
};

//? createUser nos permite crear un usuario siempre y cuando cumpla con lo siguientes atributos
exports.createUser = (req, res) => {
  const {
    username,
    name,
    lastNames,
    email,
    password,
    phone,
    isChidProfile,
    preferences,
  } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const newUser = new userModel({
        username,
        name,
        lastNames,
        email,
        password: hash,
        phone,
        isChidProfile,
        preferences,
      });
      newUser
        .save()
        .then(() => res.status(201).json({ success: "created" }))
        .catch((err) => res.status(500).json({ error: err.message }));
    }
  });
};

//? updateUser nos permite actualizar la informacion del usuario por meido del id
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const {
    username,
    name,
    lastNames,
    email,
    password,
    phone,
    isChidProfile,
    preferences,
  } = req.body;
  bcrypt
    .hash(password, saltRounds, function (err, hash) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        userModel
          .findByIdAndUpdate(
            id,
            {
              username,
              name,
              lastNames,
              email,
              password,
              phone,
              isChidProfile,
              preferences,
            },
            { new: true }
          )
          .then((user) => {
            if (!user) throw new Error("user whith id ${id} not found");
            res.status(200).json(user);
          });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};


//? deleteUser nos permite eliminar un usuario por medio del id
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel
    .findByIdAndDelete(id)
    .then((user) => {
      if (!user) throw new Error("user whith id ${id} not found");
      res.status(200).json({ message: "user deleted" });
    })

    .catch((err) => res.status(500).json({ error: err.message }));
};