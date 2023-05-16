const mongoose = require("mongoose");

//! Esta es la URI de la base de datos CineBit
const Uri = "mongodb+srv://mauro210:Luisa210@cluster0.8wbty4w.mongodb.net/DBCineBit?retryWrites=true&w=majority"; 

mongoose.connect(Uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Conexión exitosa a la base de datos de contenido"))
    .catch(err => console.log("Error al conectar a la base de datos de contenido", err));

const contentSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    }, //? Título del contenido
    description: {
        type: String,
        required: true
    }, //? Breve descripción con palabras claves del contenido
    images: [{
        mainImg: {
            type: String,
            required: true
        }, //TODO: Imagen principal del contenido
        secondaryImg: {
            type: String,
        }, //TODO: Imagen secundaria del contenido
        verticalMinImg: {
            type: String,
            required: true
        }, //TODO: Imagen en miniatura vertical (Referencia: w:200px-h:300px) del contenido
        horizontalMinImg: {
            type: String,
            required: true
        }, //TODO: Imagen en miniatura horizontal (Referencia: W:400px-h:230px) del contenido

        bigVerticalImg: {
            type: String,
            required: true
        }, //TODO: Imagen vertical grande (Referencia: w:285px-h:410px) del contenido
    }], //? Imágenes relacionadas con el contenido
    type: {
        type: String,
        required: true
    }, //? ¿Qué tipo de contenido es? una película, una serie, un documental... etc.
    category: {
        type: String,
        required: true
    }, //? Categoría según el género del contenido
    franchise: [{
        isFranchise: {
            type: Boolean,
            required: true
        }, //TODO: ¿El contenido pertenece a una franquicia?
        franchiseName: {
            type: String,
        }, //TODO: En caso afirmativo, ¿a qué franquicia pertenece el contenido?
    }], //? Franquicia a la que pertenece el contenido
    duration: [{
        timeDuration: {
            type: Number
        }, //TODO: ¿Cuánto dura el contenido?
        seasonDuration: {
            type: Number
        }, //TODO: ¿Cuántas temporadas tiene el contenido?
    }], //? En caso de que sea una película o similar, ¿cuánto tiempo dura el contenido?
    year: {
        type: Number,
        required: true
    }, //? El año en que se lanzó el contenido.
    director: {
        type: String,
        required: true
    }, //? El director a cargo del contenido.
    cast: {
        type: [String],
        required: true
    }, //? Actores relacionados con el contenido.
    classification: {
        type: String,
        required: true
    }, //? Clasificación del contenido, 'Especificar si es o no apto para menores de 14 años de edad'
    videos: [{
        mainVideoUrl: {
            type: String,
            required: true
        }, //TODO: Vídeo principal del contenido.
        secondaryVideoUrl: {
            type: String,
        }, //TODO: Video secundario del contenido
        additionalVideoUrl: {
            type: String,
        } //TODO: Vídeo adicional del contenido (Cualquier tipo de vídeo relacionado como 'Bloopers', 'Detrás de cámaras', 'Escenas eliminadas', etc...)
    }] //? Vídeos relacionados con el contenido.

}, { collection: 'Content' });

//* Exportamos el modelo para ser utilizado en otros módulos
module.exports = mongoose.model('Content', contentSchema);