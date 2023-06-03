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
cinebit-backend/
  ├── controllers/
  |   └── authController.js
  |   └── cifradoController.js
  |   └── content_controllers.js
  |   └── users_controllers.js
  ├── models/
  |   └── content_models.js
  |   └── users_models.js
  ├── routes/
  |   └── content_router.js
  |   └── users_router.js
  |   
  ├── main.js
  ├── package-lock.json
  ├── package.json
  └── README.md
```

- La carpeta `controllers/` contiene los controladores de la aplicación que definen la lógica de negocio para cada ruta y operación.
- La carpeta `models/` incluye los modelos de datos de la aplicación que definen la estructura y los métodos para interactuar con la base de datos.
- La carpeta `routes/` contiene los archivos de definición de rutas que mapean las URL a los controladores correspondientes.
- El archivo `main.js` es el punto de entrada de la aplicación que configura Express y establece las rutas y middlewares.
- El archivo `package.json`, `package-lock.json` contiene las dependencias del proyecto y scripts para la ejecución y desarrollo.
- El archivo `README.md` es este archivo que estás leyendo actualmente.

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

**Email:**![Gmail](<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#EA4335">
  <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"/></svg>)
- Andrea Campos: [dcampos823@gmail.com](dcampos823@gmail.com)
- Mauricio Salamanca: [maur123sa@gmail.com](maur123sa@gmail.com)
- Andrés Muñoz: [eamu.1992@gmail.com](eamu.1992@gmail.com)
- Stiven Ortiz: [stiventorres.working@gmail.com!](stiventorres.working@gmail.com)

**GitHub**![GitHub](<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>)
- Andrea Campos: [Conoceme en Github!](https://github.com/dandrew97)
- Mauricio Salamanca: [Conoceme en Github!](https://github.com/Mauro9104)
- Andrés Muñoz: [Conoceme en Github!](https://github.com/kaiin69)
- Stiven Ortiz: [Conoceme en Github!](https://github.com/StivenTorres17)

**LinkedIn** ![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)
- Andrea Campos: [Conoceme en LinkedIn!](https://linkedin.com/in/andrea-campos-dandrew97)
- Mauricio Salamanca: [Conoceme en LinkedIn!](https://linkedin.com/in/mauricio-salamanca-220010241)
- Andrés Muñoz: [Conoceme en LinkedIn!](https://github.com/kaiin69)
- Stiven Ortiz: [Conoceme en LinkedIn!](https://linkedin.com/in/stiven-torres-dev)

¡Esperamos que disfrutes usando CineBit! ¡Gracias por tu apoyo!