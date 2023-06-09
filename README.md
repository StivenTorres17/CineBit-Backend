# CineBit

CineBit es un proyecto colaborativo que ofrece un servicio de streaming gratuito, permitiendo a los usuarios registrados ver series y películas en cualquier dispositivo con conexión a internet.

## Descripción del Proyecto

Este es el repositorio del backend de la aplicación web de streaming CineBit. Proporciona una API RESTful desarrollada en Node.js utilizando el framework Express para manejar las rutas y controladores. La comunicación con la base de datos se realiza mediante el ODM Mongoose, y para la autenticación y seguridad se utiliza JWT (JSON Web Tokens).

Vemos esta fase como un nuevo comienzo, estableciendo metas más altas y elevando nuestros estándares. Angular ha sido elegido como el framework de desarrollo frontend para este proyecto, lo que nos permite aprovechar sus capacidades y crear una experiencia de usuario fluida.

Estamos emocionados por explorar nuevas tecnologías y herramientas que nos acompañarán en esta nueva fase de desarrollo.

## Colaboradores

- _Andrea Campos_
- _Mauricio Salamanca_
- _Andrés Muñoz_
- _Stiven Ortiz_

## Enlaces del Proyecto

- Figma: [Diseño de CineBit](https://www.figma.com/file/HtfDRe6xlaD3D2k6Q4g8F9/CineBit?node-id=1%3A3&t=PsVqgS0QxYk7MJv6-1)
- Trello: [Tablero de Trello de CineBit](https://trello.com/invite/bootcampbit/ATTI17a89acb10d668a17cefe781509edbce48B0F04A)
- Repositorio de GitHub Frontend: [CineBit Frontend](https://github.com/dandrew97/CineBit_Frontend.git)
- Repositorio de GitHub Backend: [CineBit Backend](https://github.com/StivenTorres17/CineBit-Backend.git)

## ¿Qué es CineBit Backend?

CineBit Backend es el componente central del proyecto CineBit. Es responsable de gestionar la lógica de negocio y los datos relacionados con el servicio de streaming. Proporciona una interfaz de programación de aplicaciones (API) que permite a los clientes interactuar con la aplicación y acceder a las funcionalidades ofrecidas.

## Tecnologías Utilizadas

- Node.js
- Express
- Mongoose
- JWT (JSON Web Tokens)

## Estructura del Proyecto

El repositorio del backend contiene la siguiente estructura de carpetas y archivos principales:

```
CINEBIT-BACKEND/
  ├── API/
  |   ├── connections/
  |   |   └── connections.js
  |   |
  |   ├── controllers/
  |   |   └── authController.js
  |   |   └── cifradoController.js
  |   |   └── contentcontrollers.js
  |   |   └── userscontrollers.js
  |   |
  |   ├── middlewares/
  |   |   └── verifyToken.js
  |   |
  |   ├── models/
  |   |   └── contentModels.js
  |   |   └── usersModels.js
  |   |
  |   ├── routes/
  |   |   └── contentRouter.js
  |   |   └── usersRouter.js
  |
  ├── example/
  |   └── // Contenido de ejemplo para la colecciones de la base de datos.
  |
  ├── .env
  ├── main.js
  ├── package-lock.json
  ├── package.json
  └──  README.md

```

- La carpeta `API/` contiene todos los archivos relacionados con la API, incluyendo las conexiones a la base de datos, controladores, middlewares, modelos y rutas.
- Dentro de la carpeta `API/connections/` se encuentra el archivo `connections.js`, que se encarga de establecer las conexiones a la base de datos.
- La carpeta `API/controllers/` alberga los controladores de la aplicación, incluyendo `authController.js`, `cifradoController.js`, `contentControllers.js` y `usersControllers.js`, que contienen la lógica de negocio para cada ruta y operación correspondiente.
- En la carpeta `API/middlewares/` se encuentra el archivo verifyToken.js, que implementa un middleware para verificar los tokens de autenticación.
- La carpeta `API/models/` contiene los modelos de datos de la aplicación, incluyendo `contentModels.js` y `usersModels.js`, que definen la estructura y los métodos para interactuar con la base de datos.
- En la carpeta API/routes/ se encuentran los archivos de definición de rutas, incluyendo content_router.js y users_router.js, que mapean las URL a los controladores correspondientes.
- La carpeta `example/` contiene ejemplos de contenido para las colecciones de la base de datos, lo cual es útil para documentación y desarrollo.
- El archivo `.env` es utilizado para almacenar las variables de entorno, incluyendo la configuración sensible como la clave secreta para JWT (JSON Web Token) en este caso.
- El archivo `main.js` es el punto de entrada de la aplicación, donde se configura Express y se establecen las rutas y middlewares.
- Los archivos `package.json` y `package-lock.json` especifican las dependencias del proyecto y los scripts para la ejecución y desarrollo.
- El archivo `README.md` es la documentación del proyecto, proporcionando información sobre su estructura y uso (es este archivo que estás leyendo actualmente).


## Configuración y Uso

1. Clona el repositorio del backend de CineBit en tu máquina local:

   ```
   git clone https://github.com/StivenTorres17/CineBit-Backend.git
   ```

2. Instala las dependencias del proyecto utilizando npm:

   ```
   cd CineBit-Backend
   npm install
   ```

3. Configura las variables de entorno necesarias para la aplicación. Puedes encontrar una plantilla del archivo `.env` en el repositorio.

4. Inicia el servidor de desarrollo:

   ```
   npm start
   ```

   El servidor se ejecutará en `http://localhost:3000`.

## Contacto

Si tienes alguna pregunta, sugerencia o comentario, por favor contáctanos:

**Email:**
- Andrea Campos: [dcampos823@gmail.com](dcampos823@gmail.com)
- Mauricio Salamanca: [maur123sa@gmail.com](maur123sa@gmail.com)
- Andrés Muñoz: [eamu.1992@gmail.com](eamu.1992@gmail.com)
- Stiven Ortiz: [stiventorres.working@gmail.com!](stiventorres.working@gmail.com)

**GitHub**
- Andrea Campos: [Conoceme en Github!](https://github.com/dandrew97)
- Mauricio Salamanca: [Conoceme en Github!](https://github.com/Mauro9104)
- Andrés Muñoz: [Conoceme en Github!](https://github.com/kaiin69)
- Stiven Ortiz: [Conoceme en Github!](https://github.com/StivenTorres17)

**LinkedIn**
- Andrea Campos: [Conoceme en LinkedIn!](https://linkedin.com/in/andrea-campos-dandrew97)
- Mauricio Salamanca: [Conoceme en LinkedIn!](https://linkedin.com/in/mauricio-salamanca-220010241)
- Andrés Muñoz: [Conoceme en LinkedIn!](https://github.com/kaiin69)
- Stiven Ortiz: [Conoceme en LinkedIn!](https://linkedin.com/in/stiven-torres-dev)

¡Esperamos que disfrutes usando CineBit! ¡Gracias por tu apoyo!