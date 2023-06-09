const mongoose = require("mongoose");

//! Esta es la URI de la base de datos CineBit
const Uri = "mongodb+srv://mauro210:Luisa210@cluster0.8wbty4w.mongodb.net/DBCineBit?retryWrites=true&w=majority";

mongoose.connect(Uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Conexión exitosa a la Coleccion de Usuarios"))
    .catch(err => console.log("Error al conectar a la base de datos", err));

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },      //? Apodo del usuario
    name: {
        type: String,
        required: true
    },      //? Nombre de usuario 
    lastNames: {
        type: String,
        required: true
    },      //? Apellidos de usuario
    email: {
        type: String,
        required: true,
        unique: true
    },      //? El correo electrónico del usuario
    phone: {
        type: Number,
        required: true,
        unique: true
    },      //? El número de teléfono del usuario
    password: {
        type: String,
        required: true
    },      //? La contraseña del usuario
    isChildProfile: {
        type: Boolean,
        required: false
    },      //? Indica si el perfil es de un niño o no
    preferences: [String]
          //? Preferencias seleccionadas por el usuario
   , history: [{
        contentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Content'
        } // TODO: ID del contenido visto por el usuario
    }],     //? Historial del usuario de contenido visto
    favorites: [{
        contentId:{
       type: mongoose.Schema.Types.ObjectId,
        ref: 'Content' 
        }
    }],     //? Contenido seleccionado como favorito por el usuario
    role: {
        type: String, default:"user"
    }       //? Rol opcional al crear cuenta, utilizando User como defecto.
}, { collection: 'Users' });

//* Exportamos el modelo para ser utilizado en otros módulos
module.exports = mongoose.model('users', userSchema);